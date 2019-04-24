/*!!!!!!!!!!!Do not change anything between here (the DRIVERNAME placeholder will be automatically replaced at buildtime)!!!!!!!!!!!*/
import NodeDriver from 'shared/mixins/node-driver';

// do not remove LAYOUT, it is replaced at build time with a base64 representation of the template of the hbs template
// we do this to avoid converting template to a js file that returns a string and the cors issues that would come along with that
const LAYOUT;
/*!!!!!!!!!!!DO NOT CHANGE END!!!!!!!!!!!*/


/*!!!!!!!!!!!GLOBAL CONST START!!!!!!!!!!!*/
// EMBER API Access - if you need access to any of the Ember API's add them here in the same manner rather then import them via modules, since the dependencies exist in rancher we dont want to expor the modules in the amd def
const computed = Ember.computed;
const get = Ember.get;
const set = Ember.set;
const alias = Ember.computed.alias;
const service = Ember.inject.service;

const defaultRadix = 10;
/*!!!!!!!!!!!GLOBAL CONST END!!!!!!!!!!!*/


/*!!!!!!!!!!!DO NOT CHANGE START!!!!!!!!!!!*/
export default Ember.Component.extend(NodeDriver, {
  driverName: '%%DRIVERNAME%%',
  config: alias('model.%%DRIVERNAME%%Config'),
  app: service(),

  init() {
    // This does on the fly template compiling, if you mess with this :cry:
    const decodedLayout = window.atob(LAYOUT);
    const template = Ember.HTMLBars.compile(decodedLayout, {
      moduleName: 'nodes/components/driver-%%DRIVERNAME%%/template'
    });
    set(this, 'layout', template);

    this._super(...arguments);

  },
  /*!!!!!!!!!!!DO NOT CHANGE END!!!!!!!!!!!*/

  // Write your component here, starting with setting 'model' to a machine with your config populated
  bootstrap: function () {
    // bootstrap is called by rancher ui on 'init', you're better off doing your setup here rather then the init function to ensure everything is setup correctly
    let config = get(this, 'globalStore').createRecord({
      type: '%%DRIVERNAME%%Config',
      plan: '',
      user: '',
      passwd: '',
      isAuthenticated: false,
      zone: 'de-fra1',
      coreNumber: 1,
      memoryAmount: 4,
      storageSize: 25,
      usePrivateNetworkOnly: false,
    });

    set(this, 'model.%%DRIVERNAME%%Config', config);
  },

  // Add custom validation beyond what can be done from the config API schema
  validate() {
    // Get generic API validation errors
    this._super();
    var errors = get(this, 'errors') || [];
    if (!get(this, 'model.name')) {
      errors.push('Name is required');
    }

    // Add more specific errors
    const useCustomConfig = get(this, 'config.useCustomConfig');

    if (useCustomConfig) {
      set(this, 'config.plan', '');
      const coreNumber = parseInt(get(this, 'config.coreNumber'), defaultRadix);
      if (coreNumber < 1) {
        errors.push('CPU count has to be at least 1');
      } else if (coreNumber > 20) {
        errors.push('CPU count has to be smaller or equal than 20');
      }

      const memoryAmount = parseInt(get(this, 'config.memoryAmount'), defaultRadix);
      if (memoryAmount < 1) {
        errors.push('Memory Size must be at least 1 GB');
      } else if (memoryAmount > 128) {
        errors.push('CPU count has to be smaller or equal than 128GB');
      } else {
        set(this, 'config.memoryAmount', memoryAmount * 1024);
      }

      const storageSize = parseInt(get(this, 'config.storageSize'), defaultRadix);
      if (storageSize < 10) {
        errors.push('Storage size has to be at least 10GB');
      } else if (storageSize > 2048) {
        errors.push('Storage size has to smaller or equal than 2048GB');
      }
    } else {
      set(this, 'config.coreNumber', 0);
      set(this, 'config.memoryAmount', 0);
    }

    if (get(this, 'config.user').length === 0) {
      errors.push('UpCloud user is required');
    }

    if (get(this, 'config.passwd').length === 0) {
      errors.push('UpCloud user\'s password is required');
    }

    // Set the array of errors for display,
    // and return true if saving should continue.
    if (get(errors, 'length')) {
      set(this, 'errors', errors);
      return false;
    } else {
      set(this, 'errors', null);
      return true;
    }
  },

  actions: {
    authenticate() {
      this.dummyAPIRequest('/1.2/account')
      .then(() => {
        this.set('isAuthenticated', true);
        this.set('gettingData', true);
        return Promise.all([this.getPlans(), this.getZones()]);
      })
      .then(([plans, zones]) => {
        this.set('plans', plans);
        this.set('zones', zones);
        this.set('gettingData', false);
      })
      .catch(({error}) => {
        if (error.error_code === 'AUTHENTICATION_REQUIRED') {
          const errorMessage = `${error.error_code}: ${error.error_message}`;
          this.set('errors', [errorMessage]);
        }
      });
    },
  },
  getPlans() {
    // TODO: Wait from UpCloud to fix the pre-flight authorization gate
    // this.apiRequest('/1.2/plan');
    return this.dummyAPIRequest('/1.2/plan')
    .then(({plans: {plan: plans}}) => plans.map(plan => ({
      name: `${plan.name} - Storage: ${plan.storage_size}GB`,
      value: plan.name,
    })));
  },
  getZones() {
    // TODO: Wait from UpCloud to fix the pre-flight authorization gate
    // this.apiRequest('/1.2/zone');
    return this.dummyAPIRequest('/1.2/zone')
    .then(({zones: {zone: zones}}) => zones.map(zone => ({
      id: zone.id,
      name: zone.description.replace(/ #\d+/, ''),
      flag: zone.id.substring(0, 2)
    })));
  },
  dummyAPIRequest(endpoint) {
    let response = {};
    switch (endpoint) {
      case '/1.2/zone':
        response = {
          "zones": {
            "zone": [
              {
                "description": "Frankfurt #1",
                "id": "de-fra1"
              },
              {
                "description": "Helsinki #1",
                "id": "fi-hel1"
              },
              {
                "description": "Helsinki #2",
                "id": "fi-hel2"
              },
              {
                "description": "Amsterdam #1",
                "id": "nl-ams1"
              },
              {
                "description": "Singapore #1",
                "id": "sg-sin1"
              },
              {
                "description": "London #1",
                "id": "uk-lon1"
              },
              {
                "description": "Chicago #1",
                "id": "us-chi1"
              },
              {
                "description": "San Jose #1",
                "id": "us-sjo1"
              }
            ]
          }
        };
        break;
      case '/1.2/plan':
        response = {
          "plans": {
            "plan": [
              {
                "core_number": 1,
                "memory_amount": 1024,
                "name": "1xCPU-1GB",
                "public_traffic_out": 1024,
                "storage_size": 25,
                "storage_tier": "maxiops"
              },
              {
                "core_number": 1,
                "memory_amount": 2048,
                "name": "1xCPU-2GB",
                "public_traffic_out": 2048,
                "storage_size": 50,
                "storage_tier": "maxiops"
              },
              {
                "core_number": 2,
                "memory_amount": 4096,
                "name": "2xCPU-4GB",
                "public_traffic_out": 4096,
                "storage_size": 80,
                "storage_tier": "maxiops"
              },
              {
                "core_number": 4,
                "memory_amount": 8192,
                "name": "4xCPU-8GB",
                "public_traffic_out": 5120,
                "storage_size": 160,
                "storage_tier": "maxiops"
              },
              {
                "core_number": 6,
                "memory_amount": 16384,
                "name": "6xCPU-16GB",
                "public_traffic_out": 6144,
                "storage_size": 320,
                "storage_tier": "maxiops"
              },
              {
                "core_number": 8,
                "memory_amount": 32768,
                "name": "8xCPU-32GB",
                "public_traffic_out": 7168,
                "storage_size": 640,
                "storage_tier": "maxiops"
              },
              {
                "core_number": 12,
                "memory_amount": 49152,
                "name": "12xCPU-48GB",
                "public_traffic_out": 9216,
                "storage_size": 960,
                "storage_tier": "maxiops"
              },
              {
                "core_number": 16,
                "memory_amount": 65536,
                "name": "16xCPU-64GB",
                "public_traffic_out": 10240,
                "storage_size": 1280,
                "storage_tier": "maxiops"
              },
              {
                "core_number": 20,
                "memory_amount": 131072,
                "name": "20xCPU-128GB",
                "public_traffic_out": 24576,
                "storage_size": 2048,
                "storage_tier": "maxiops"
              },
              {
                "core_number": 20,
                "memory_amount": 98304,
                "name": "20xCPU-96GB",
                "public_traffic_out": 12288,
                "storage_size": 1920,
                "storage_tier": "maxiops"
              }
            ]
          }
        };
        break;
      case '/1.2/account':
        response = {
          "account": {
            "credits": 9999.9999,
            "username": this.get('model.%%DRIVERNAME%%Config.user'),
          }
        };
        break;
      default:
        break;
    }
    return Promise.resolve(response);
  },
  apiRequest: function (path) {
    const user = this.get('model.%%DRIVERNAME%%Config.user');
    const passwd = this.get('model.%%DRIVERNAME%%Config.passwd');

    const token = btoa(`${user}:${passwd}`);

    return fetch('https://api.upcloud.com' + path, {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + token,
        'Content-Type': 'application/json',
      },
    });
  },
});
