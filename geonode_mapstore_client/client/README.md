# MapStore GeoNode client

## Development setup

Start the development application locally:

- create a `env.json` file in `geonode_mapstore_client/client` directory with needed variables
```js
// env.json file
{
    "DEV_SERVER_HOST": "eg: my-geonode-host.org"
}
```
- `npm install`
- `npm start`

The application runs at `https://localhost:8081` afterwards.

Note: localhost uses `https` protocol to connect a remote GeoNode instance

## Compile bundle

- `npm run compile`

or run `build.sh` for the complete build process

## Tools

- node v12.14.1
- npm 6.13.4