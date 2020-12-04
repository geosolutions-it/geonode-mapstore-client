# GeoNode MapStore Client Project

This directory is the root folder where to initialize all the npm scripts. See the main [README.md](../../README.md) for more information about this directory.

This project contains following applications:

- [MapStore js API](#mapStore-js-api)
- [GeoStory](#geostory)
- [Homepage](#homepage)

## MapStore js API
Api used inside django templates to show map and layer viewers

## GeoStory
This application allow to show and edit stories with map and geospatial data
## Homepage

This single application is an alternative homepage that interact with the GeoNode API v2 and shows available resources. You can enable this app by replacing the content of the index.html of a GeoNode project with the [home.html](home.html) template.

The homepage configuration file is located in [localConfig.json](static/mapstore/configs/localConfig.json) and it exposes specific properties to customize the homepage theme and structure:

- @prop {object} `geoNodeApi`
- @prop {object} `supportedLocales`
- @prop {object} `geoNodeConfiguration`
- @prop {object} geoNodeConfiguration.`theme`
  - @prop {object} geoNodeConfiguration.`theme.variant`
  - @prop {object} geoNodeConfiguration.`theme.navbar`
  - @prop {object} geoNodeConfiguration.`theme.hero`
  - @prop {object} geoNodeConfiguration.`theme...`
- @prop {object} geoNodeConfiguration.`filters`
  - @prop {object} geoNodeConfiguration.`filters.fields`
  - @prop {object} geoNodeConfiguration.`filters.fields.options`
  - @prop {object} geoNodeConfiguration.`filters.order`
  - @prop {object} geoNodeConfiguration.`filters.order.defaultLabelId`
  - @prop {object} geoNodeConfiguration.`filters.order.options`
  - @prop {object} geoNodeConfiguration.`filters.extent`
  - @prop {object} geoNodeConfiguration.`filters.extent.layers`
  - @prop {object} geoNodeConfiguration.`filters.extent.style`
- @prop {object} geoNodeConfiguration.`navbar`
  - @prop {object} geoNodeConfiguration.`navbar.logo`
  - @prop {object} geoNodeConfiguration.`navbar.items`
- @prop {object} geoNodeConfiguration.`menu`
  - @prop {object} geoNodeConfiguration.`menu.items`
- @prop {object} geoNodeConfiguration.`footer`
  - @prop {object} geoNodeConfiguration.`footer.items`
