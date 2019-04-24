# UpCloud Rancher UI Driver
Rancher UI driver for [UpCloud](https://upcloud.com)
[![CircleCI](https://circleci.com/gh/montel-ig/ui-driver-upcloud/tree/develop.svg?style=svg)](https://circleci.com/gh/montel-ig/ui-driver-upcloud/tree/develop)

## Using
This driver is meant to be used with the [docker-machine-driver-upcloud](https://github.com/montel-ig/docker-machine-driver-upcloud/).

On your Rancher cluster, go to `https://your-cluster.com/n/drivers/node`, and select `Add Node Driver`.

| Driver | Link |
| ------ | ---- |
| Download URL | `https://github.com/montel-ig/docker-machine-driver-upcloud/releases/download/1.1.1/docker-machine-driver-upcloud_v1.1.1_linux-amd64.zip` |
| Custom UI URL | `https://github.com/montel-ig/ui-driver-upcloud/releases/download/1.0.0/component.js` |

Press `Create` and wait for the Rancher node to download the `docker-machine` driver. Once that's done, you should see the driver status as `Active`. Then you're good to go.

## Development

This package contains a small web-server that will serve up the custom driver UI at `http://localhost:3000/component.js`.  You can run this while developing and point the Rancher settings there.
* `npm start`
* The driver name can be optionally overridden: `npm start -- --name=DRIVERNAME`
* The compiled files are viewable at http://localhost:3000.
  * To be accessible to a live Rancher cluster, use a tunnel to `localhost`, like `ngrok` or `localtunnel`.
* Do not use the `model.<drivername>Confg` signature to access your driver config in the template file, use the `config` alias that is already setup in the component

## Building

For other users to see your driver, you need to build it and host the output on a server accessible from their browsers.

* `npm run build`
* Copy the contents of the `dist` directory onto a webserver.
  * If your Rancher is configured to use HA or SSL, the server must also be available via HTTPS.

