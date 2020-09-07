/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

function randomInt(max) { return Math.floor(Math.random()*max); }
function randomItem(a) { return a[randomInt(a.length)]; }
function random(t) { return Math.random() < t; }

function generateRandomTileData(limit) {
    let types = [
        "map",
        "document",
        "layer",
        "geostory",
        "dashboard"
    ]
    let titles = [   
        "HighResolution 30cmImageryEsri", 
        "World Imagery Esri", 
        "WesternCapePolice Stations", 
        "WesternCapeTopo Map", 
        "CapeTownSuburbs", 
        "a__123_municipios_pr_2019_UTM_SIRGAS2000", 
        "SuitableshelteringLocations", 
        "WVNAIP20161M", 
        "couchetest Reunion", 
        "WebGIS_TestVzla", 
        "chiara_test", 
        "CrossBlended HypsowithRelief, Water, Drains, andOceanBottom", 
        "GrayEarthwith ShadedRelief, Hypsography, OceanBottom, andDrainages", 
        "NaturalEarthIIwithShadedRelief, Water, andDrainages"]
    let descriptions = [
        "The legend at right shows the map colors modulated by elevation and environment. For more information about cross-blended hypsometric tints, visit this website. Two sizes are offered: large size at 21,600 x 10,800 pixels and medium at 16,200 x 8,100.",
        "Nessun abstract inserito",
        "Web GIS for Venezuela open data",
        "The National Agriculture Imagery Program (NAIP) acquires aerial imagery during the agricultural growing seasons in the continental U.S. A primary goal of the NAIP program is to make digital ortho photography available to governmental agencies and the public within a year of acquisition.",
        "The layer shows the topographic map of Western Cape.",
        "Distribution of police stations along the Western Cape Province.",
        "High Resolution 30cm Imagery",
        "Natural Earth II is a raster map dataset that portrays the world environment in an idealized manner with little human influence. Imagine the urban landscapes of New York, Paris, and Tokyo restored to temperate forest, southern Russia as the open steppe it once was, and the Amazon River basin covered...",
        "GRelief shading and hypsography derive from modified SRTM Plus elevation data at 1km resolution. Modifications include patching the eastern Himalayas and southern Andes with better elevation data from Viewfinder Panoramas. Daniel Huffman, University of Wisconsin, Madison, created the regionally equa",
    ]
    let images = [
        "https://master.demo.geonode.org/uploaded/CACHE/images/curated_thumbs/covid_1/db02d516b3e0e2a2577d78be1ab21ca3.png",
        "https://master.demo.geonode.org/uploaded/CACHE/images/curated_thumbs/esri_1/467b0f5c9e939792de94b78263eb3381.png",
        "https://master.demo.geonode.org/static/thumbs/layer-96eaf716-a16f-11ea-8e11-0242ac120002-thumb.1b5b4039403b.png",
        "https://master.demo.geonode.org/static/thumbs/layer-ddca9afc-586c-11ea-a5d6-0242ac120006-thumb.9176868b6e23.png",
        "https://master.demo.geonode.org/static/thumbs/layer-1bdec42a-406d-11ea-983f-0242ac120007-thumb.42592acecac1.png",
        "https://master.demo.geonode.org/static/thumbs/map-dda6ff52-3d4b-11ea-bee1-0242ac120007-thumb.a50b10281c49.png",
        "https://master.demo.geonode.org/static/thumbs/layer-f7c206d6-c52f-11ea-b01a-0242ac120007-thumb.c821ba624c18.png",
        "https://master.demo.geonode.org/static/thumbs/layer-ee4e7e3c-c52e-11ea-9804-0242ac120007-thumb.094dfda3d683.png",
        "https://master.demo.geonode.org/static/thumbs/layer-d79428f0-c52d-11ea-85a9-0242ac120007-thumb.bfa370428162.png",
        "https://master.demo.geonode.org/static/thumbs/document-d7130310-bc54-11ea-ad3e-0242ac120002-thumb.491caee9b6e4.png?v=74ed424e",
        "https://master.demo.geonode.org/static/thumbs/layer-0c57bb58-e627-4575-883c-78b888bd8abc-thumb.d3a495e89e23.png?v=e355d441",
        "https://master.demo.geonode.org/static/thumbs/layer-ddaa9bc2-406f-11ea-9ab7-0242ac120007-thumb.7b4702ec100f.png",
        "https://master.demo.geonode.org/static/thumbs/layer-34963c53-e0d9-4fed-9425-9c47cca07dc4-thumb.8d9a747654aa.png?v=442e597e",
        "https://master.demo.geonode.org/static/thumbs/layer-8143c07c-d1d6-11ea-b78e-0242ac120006-thumb.0d11b5200a37.png",
        "https://master.demo.geonode.org/static/thumbs/layer-f5214014-48fb-11ea-8474-0242ac120007-thumb.1003eda24f59.png",
        "https://master.demo.geonode.org/static/thumbs/layer-0c783a8a-cc17-11ea-aae9-0242ac120004-thumb.f70cbf422823.png",
        "https://master.demo.geonode.org/static/thumbs/layer-2bf5c48a-0b93-11ea-9c12-0242ac120007-thumb.9a1a49b0f88e.png",
        "https://master.demo.geonode.org/uploaded/thumbs/layer-383657e4-e5f6-11ea-a027-0242ac120008-thumb.png",
        "https://master.demo.geonode.org/static/thumbs/layer-d6ac1f3e-40e8-11ea-84df-0242ac120007-thumb.ec52eb2677b6.png",
        "https://master.demo.geonode.org/static/thumbs/layer-d3007228-efb1-11e9-89a8-0242ac120002-thumb.c57096497a83.png",
        "https://master.demo.geonode.org/static/thumbs/layer-39b575a8-5d8b-11ea-bab2-0242ac120008-thumb.65b20c42c177.png",
        "https://master.demo.geonode.org/static/thumbs/layer-96d05fd4-37cd-11ea-8b73-0242ac120007-thumb.e086aadafc94.png",
        "https://master.demo.geonode.org/uploaded/thumbs/map-7a1d8d22-e70d-11ea-86e7-0242ac120008-thumb.png"
    ]
    let names = [
        "Skye Duke",
        "Anderson Flynn",
        "Tarun Monroe",
        "Khadeejah Stephens",
        "Brianna Cobb",
        "Jayde Grimes",
        "Warren Whittaker",
        "Riley-James Villarreal",
        "Aliza Muir",
        "Moses Lord",
        "Wilf Thorpe",
        "Tulisa Chapman",
        "Alys Clark",
        "Blane Connolly",
        "Dillon Finnegan",
        "Lani Bain",
        "Roxanne Glover",
        "Arthur King",
        "Nawal Whitaker",
        "Dean O'Ryan"
    ]
    let categories = [
        "Boundaries",
        "Climatology Meteorol",
        "Economy",
        "Elevation",
        "Environment",
        "Farming",
        "Geoscientific Inform",
        "GestionBiodiversidad",
        "Health",
        "imageryBaseMapsEarth",
        "Imagery Base Maps Ea",
        "Inland Waters",
        "IntrumentosPlanifica",
        "Location",
        "Oceans",
        "planningCadastre",
        "Planning Cadastre",
        "Population",
        "Society",
        "Structure",
        "Transportation"
    ]
    let regions = [
        "Global", "Africa", "Central Africa", "West Africa", "Pacific"
    ]
    let licences = [
        "Not Specified"
    ]
    let languages = [
        "English",
        "Spanish",
        "Italian",
        "French",
        "Portuguese",
        "German"
    ]
    var r = [];
    for (let i=0;i<limit;i++) {
        r.push({
            "index": i,
            "img": randomItem(images),
            "type": randomItem(types),
            "title": randomItem(titles),
            "description": randomItem(descriptions),
            "license": randomItem(licences),
            "language": randomItem(languages),
            "region": randomItem(regions),
            "name": randomItem(names),
            "category": randomItem(categories)
        });
    }
    return r;
}

function generateFeaturedItemData() {
    return generateRandomTileData(randomInt(1) + 3);
}

export { generateRandomTileData, generateFeaturedItemData};
