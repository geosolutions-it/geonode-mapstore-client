# MapStore GeoNode client

## Development setup

The development setup uses the webpack dev server to replace pages, files or bundles of a remote target instance of GeoNode.
Steps to initialize the application locally:

check if the `env.json` file in `geonode_mapstore_client/client` directory is configured correctly.
Available variables:
- `DEV_SERVER_HOST` target hostname
- `DEV_SERVER_HOST_PROTOCOL` target protocol `http` or `https`

example of env.json file if the GeoNode instance is running locally

```js
{
    "DEV_SERVER_HOST": "localhost:8000",
    "DEV_SERVER_HOST_PROTOCOL": "http"
}
```
ensure to have npm >= 6.9.0 because some packages are installed with aliases, then run:

- `npm install`
- `npm start`

the application runs at `http://localhost:8081` or `https://localhost:8081` based on the protocol defined in `DEV_SERVER_HOST_PROTOCOL` variable.

## SPA client (development)

The spa client proposal is currently in development and served by this two endpoints:

- `http://localhost:8081/spa/` this page simulates the homepage spa application
- `http://localhost:8081/spa/builder/` this page simulate a builder application suitable for map viewer, geostories and dashboards


## Compile bundle

- `npm run compile`

or run `build.sh` for the complete build process

## Tools

- node v12.14.1
- npm 6.13.4
