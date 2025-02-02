/*!!!!!!!!!!!Do not change anything between here (the DRIVERNAME placeholder will be automatically replaced at buildtime)!!!!!!!!!!!*/
import NodeDriver from 'shared/mixins/node-driver';

const apiResponses = {
  plans: {
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
  },
  storage: {
    "storages": {
      "storage": [
        {
          "access": "public",
          "license": 3.36,
          "size": 28,
          "state": "online",
          "title": "Windows Server 2016 Datacenter",
          "type": "template",
          "uuid": "01000000-0000-4000-8000-000010060200"
        },
        {
          "access": "public",
          "license": 0.694,
          "size": 29,
          "state": "online",
          "title": "Windows Server 2016 Standard",
          "type": "template",
          "uuid": "01000000-0000-4000-8000-000010060300"
        },
        {
          "access": "public",
          "license": 3.36,
          "size": 25,
          "state": "online",
          "title": "Windows Server 2019 Datacenter",
          "type": "template",
          "uuid": "01000000-0000-4000-8000-000010070200"
        },
        {
          "access": "public",
          "license": 0.694,
          "size": 25,
          "state": "online",
          "title": "Windows Server 2019 Standard",
          "type": "template",
          "uuid": "01000000-0000-4000-8000-000010070300"
        },
        {
          "access": "public",
          "license": 3.36,
          "size": 18,
          "state": "online",
          "title": "Windows Server 2022 Datacenter",
          "type": "template",
          "uuid": "01000000-0000-4000-8000-000010080200"
        },
        {
          "access": "public",
          "license": 0.694,
          "size": 18,
          "state": "online",
          "title": "Windows Server 2022 Standard",
          "type": "template",
          "uuid": "01000000-0000-4000-8000-000010080300"
        },
        {
          "access": "public",
          "license": 0,
          "size": 3,
          "state": "online",
          "title": "Debian GNU/Linux 9 (Stretch)",
          "type": "template",
          "uuid": "01000000-0000-4000-8000-000020040100"
        },
        {
          "access": "public",
          "license": 0,
          "size": 3,
          "state": "online",
          "title": "Debian GNU/Linux 10 (Buster)",
          "type": "template",
          "uuid": "01000000-0000-4000-8000-000020050100"
        },
        {
          "access": "public",
          "license": 0,
          "size": 3,
          "state": "online",
          "title": "Debian GNU/Linux 11 (Bullseye)",
          "type": "template",
          "uuid": "01000000-0000-4000-8000-000020060100"
        },
        {
          "access": "public",
          "license": 0,
          "size": 4,
          "state": "online",
          "title": "Ubuntu Server 18.04 LTS (Bionic Beaver)",
          "type": "template",
          "uuid": "01000000-0000-4000-8000-000030080200"
        },
        {
          "access": "public",
          "license": 0,
          "size": 4,
          "state": "online",
          "title": "Ubuntu Server 20.04 LTS (Focal Fossa)",
          "type": "template",
          "uuid": "01000000-0000-4000-8000-000030200200"
        },
        {
          "access": "public",
          "license": 0,
          "size": 3,
          "state": "online",
          "title": "CentOS 7",
          "type": "template",
          "uuid": "01000000-0000-4000-8000-000050010300"
        },
        {
          "access": "public",
          "license": 0,
          "size": 3,
          "state": "online",
          "title": "CentOS 8",
          "type": "template",
          "uuid": "01000000-0000-4000-8000-000050010400"
        },
        {
          "access": "public",
          "license": 0,
          "size": 3,
          "state": "online",
          "title": "CentOS Stream 8",
          "type": "template",
          "uuid": "01000000-0000-4000-8000-000050010500"
        },
        {
          "access": "public",
          "license": 0,
          "size": 5,
          "state": "online",
          "title": "Plesk Obsidian",
          "type": "template",
          "uuid": "01000000-0000-4000-8000-000130010100"
        },
        {
          "access": "public",
          "license": 0,
          "size": 3,
          "state": "online",
          "title": "AlmaLinux 8",
          "type": "template",
          "uuid": "01000000-0000-4000-8000-000140010100"
        },
        {
          "access": "public",
          "license": 0,
          "size": 3,
          "state": "online",
          "title": "Rocky Linux 8",
          "type": "template",
          "uuid": "01000000-0000-4000-8000-000150010100"
        }
      ]
    }
  },
  zones: {
    "zones": {
      "zone": [
        {
          "description": "Sydney #1",
          "id": "au-syd1",
          "public": "yes"
        },
        {
          "description": "Frankfurt #1",
          "id": "de-fra1",
          "public": "yes"
        },
        {
          "description": "Madrid #1",
          "id": "es-mad1",
          "public": "yes"
        },
        {
          "description": "Helsinki #1",
          "id": "fi-hel1",
          "public": "yes"
        },
        {
          "description": "Helsinki #2",
          "id": "fi-hel2",
          "public": "yes"
        },
        {
          "description": "Amsterdam #1",
          "id": "nl-ams1",
          "public": "yes"
        },
        {
          "description": "Warsaw #1",
          "id": "pl-waw1",
          "public": "yes"
        },
        {
          "description": "Singapore #1",
          "id": "sg-sin1",
          "public": "yes"
        },
        {
          "description": "London #1",
          "id": "uk-lon1",
          "public": "yes"
        },
        {
          "description": "Chicago #1",
          "id": "us-chi1",
          "public": "yes"
        },
        {
          "description": "New York #1",
          "id": "us-nyc1",
          "public": "yes"
        },
        {
          "description": "San Jose #1",
          "id": "us-sjo1",
          "public": "yes"
        }
      ]
    }
  }
}
// do not remove LAYOUT, it is replaced at build time with a base64 representation of the template of the hbs template
// we do this to avoid converting template to a js file that returns a string and the cors issues that would come along with that
const LAYOUT;
/*!!!!!!!!!!!DO NOT CHANGE END!!!!!!!!!!!*/


/*!!!!!!!!!!!GLOBAL CONST START!!!!!!!!!!!*/
// EMBER API Access - if you need access to any of the Ember API's add them here in the same manner rather then import them via modules, since the dependencies exist in rancher we dont want to expor the modules in the amd def
const computed = Ember.computed;
const get = Ember.get;
const set = Ember.set;
const observe = Ember.observer;
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
      plan: '1xCPU-1GB',
      user: '',
      passwd: '',
      isAuthenticated: false,
      zone: 'au-syd1',
      coreNumber: 0,
      memoryAmount: 0,
      storageSize: 25,
      template: '01000000-0000-4000-8000-000030080200',
      useCustomConfig: false,
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
      }

      const storageSize = parseInt(get(this, 'config.storageSize'), defaultRadix);
      if (storageSize < 10) {
        errors.push('Storage size has to be at least 10GB');
      } else if (storageSize > 2048) {
        errors.push('Storage size has to smaller or equal than 2048GB');
      }
    } else {
      // If using a custom config, the storage size has to be manually set to the one from the plan
      const plans = get(this, 'plans');
      const plan = plans.find(plan => plan.value === get(this, 'config.plan'));
      set(this, 'config.plan', get(plan, 'value'));
      set(this, 'config.storageSize', get(plan, 'storage_size'));
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

  customConfigObserver: observe('config.useCustomConfig', function () {
    const useCustomConfig = get(this, 'config.useCustomConfig');
    if (!useCustomConfig) {
      set(this, 'config.coreNumber', 0);
      set(this, 'config.memoryAmount', 0);
    } else {
      set(this, 'config.coreNumber', 1);
      set(this, 'config.memoryAmount', 4);
      set(this, 'config.plan', 25);
    }
  }),

  actions: {
    authenticate() {
      this.dummyAPIRequest('/1.3/account')
        .then(() => {
          this.set('isAuthenticated', true);
          this.set('gettingData', true);
          return Promise.all([this.getPlans(), this.getZones(), this.getStorageTemplates()]);
        })
        .then(([plans, zones, storageTemplates]) => {
          this.set('plans', plans);
          this.set('zones', zones);
          this.set('storageTemplates', storageTemplates);
          this.set('gettingData', false);
        });
      // FIXME: the catch is unnecessary until we start calling the real API
      // .catch(({error}) => {
      //   if (error.error_code === 'AUTHENTICATION_REQUIRED') {
      //     const errorMessage = `${error.error_code}: ${error.error_message}`;
      //     this.set('errors', [errorMessage]);
      //   }
      // });
    },
  },
  getPlans() {
    // TODO: Wait from UpCloud to fix the pre-flight authorization gate
    // this.apiRequest('/1.3/plan');
    return this.dummyAPIRequest('/1.3/plan')
      .then(({plans: {plan: plans}}) => plans.map(x => {
        const value = x.name;
        const rename = `${x.name} - Storage: ${x.storage_size}GB`;
        return {
          ...x,
          value,
          name: rename,
        };
      }));
  },
  getZones() {
    // TODO: Wait from UpCloud to fix the pre-flight authorization gate
    // this.apiRequest('/1.3/zone');
    return this.dummyAPIRequest('/1.3/zone')
      .then(({zones: {zone: zones}}) => zones.map(zone => {
        let flag = zone.id.substring(0, 2);

        // FIXME: hopefully this will be fixed on UpCloud side and this check
        //  can be removed
        // Polish flag has some extra stuff on the end
        if (flag === 'pl') {
          flag = 'pl-35a4a4cee';
        }

        return {
          id: zone.id,
          name: zone.description.replace(/ #\d+/, ''),
          flag,
        };
      }));
  },
  getStorageTemplates() {
    return this.dummyAPIRequest('/1.3/storage/template')
      .then(({storages: {storage: storages}}) => storages);
  },
  dummyAPIRequest(endpoint) {
    let response = {};
    switch (endpoint) {
      case '/1.3/zone':
        response = apiResponses.zones;
        break;
      case '/1.3/plan':
        response = apiResponses.plans;
        break;
      case '/1.3/account':
        response = {
          "account": {
            "credits": 9999.9999,
            "username": this.get('model.%%DRIVERNAME%%Config.user'),
          }
        };
        break;
      case '/1.3/storage/template':
        response = apiResponses.storage;
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
