(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[3498],{47098:(e,t,n)=>{"use strict";var r=n(8010),o=n(38225),i=n(70920),a=function e(t,n){t.getSource&&"error"===t.getSource().getState()&&n.onError&&n.onError(t),t.getSource&&"loading"===t.getSource().getState()&&setTimeout(e.bind(null,t,n),1e3)};r.default.registerType("bing",{create:function(e){var t=e.apiKey,n=e.maxNativeZoom||19,r=new o.Z({msId:e.id,preload:1/0,opacity:void 0!==e.opacity?e.opacity:1,zIndex:e.zIndex,visible:e.visibility,minResolution:e.minResolution,maxResolution:e.maxResolution,source:new i.Z({key:t,imagerySet:e.name,maxZoom:n})});return setTimeout(a.bind(null,r,e),1e3),r},update:function(e,t,n){n.minResolution!==t.minResolution&&e.setMinResolution(void 0===t.minResolution?0:t.minResolution),n.maxResolution!==t.maxResolution&&e.setMaxResolution(void 0===t.maxResolution?1/0:t.maxResolution)},isValid:function(e){return!e.getSource||"error"!==e.getSource().getState()}})},73431:(e,t,n)=>{"use strict";var r,o,i=n(8010),a=n(24852),s=n.n(a),u=n(18672),l={},c="ontouchstart"in window,m=c?"touchstart":"mousedown",d=c?"touchmove":"mousemove",f=c?"touchend":"mouseup";i.default.registerType("google",{create:function(e,t,n){if(document.getElementById(n+"gmaps")){var o=window.google;r||(r={HYBRID:o.maps.MapTypeId.HYBRID,SATELLITE:o.maps.MapTypeId.SATELLITE,ROADMAP:o.maps.MapTypeId.ROADMAP,TERRAIN:o.maps.MapTypeId.TERRAIN}),l[n]||(l[n]=new o.maps.Map(document.getElementById(n+"gmaps"),{disableDefaultUI:!0,keyboardShortcuts:!1,draggable:!1,disableDoubleClickZoom:!0,scrollwheel:!1,streetViewControl:!1,minZoom:e.minZoom,maxZoom:e.maxZoom})),l[n].setMapTypeId(r[e.name]);var i=document.getElementById(n+"gmaps"),a=function(){if(l[n]&&"hidden"!==i.style.visibility){var e=(0,u.vs)(t.getView().getCenter(),"EPSG:3857","EPSG:4326");l[n].setCenter(new o.maps.LatLng(e[1],e[0]))}},s=function(){l[n]&&"hidden"!==i.style.visibility&&l[n].setZoom(t.getView().getZoom())},c=function(){if("hidden"!==i.style.visibility){var e=180*t.getView().getRotation()/Math.PI;i.style.transform="rotate("+e+"deg)",o.maps.event.trigger(l[n],"resize")}},p=function(){var e=t.getView();e.on("change:center",a),e.on("change:resolution",s),e.on("change:rotation",c)};t.on("change:view",p),p(),a(),s();var y=t.getViewport(),v=document.getElementById(n+"gmaps").style.transform,g=!1,b=!1;y.addEventListener(m,(function(){g=!0})),y.addEventListener(f,(function(){b&&g&&function(){var e=document.getElementById(n+"gmaps").style.transform;if(l[n]&&e!==v&&-1!==e.indexOf("rotate")){var r=function(e,t){var n=t[0],r=t[1],o=[[n/2,r/2],[-n/2,r/2],[-n/2,-r/2],[n/2,-r/2]].map((function(t){return n=t,r=e*Math.PI/180,o=n[0],i=n[1],[o*Math.cos(r)-i*Math.sin(r),o*Math.sin(r)+i*Math.cos(r)];var n,r,o,i})),i=o.map((function(e){return e[0]})),a=o.map((function(e){return e[1]})),s=Math.max.apply(null,i),u=Math.min.apply(null,i),l=Math.max.apply(null,a),c=Math.min.apply(null,a),m=Math.abs(l)+Math.abs(c);return{width:Math.abs(s)+Math.abs(u),height:m}}(-parseFloat(e.match(/[\+\-]?\d+\.?\d*/i)[0]),t.getSize());i.style.width=r.width+"px",i.style.height=r.height+"px",i.style.left=Math.round((t.getSize()[0]-r.width)/2)+"px",i.style.top=Math.round((t.getSize()[1]-r.height)/2)+"px",o.maps.event.trigger(l[n],"resize"),a()}}(),v=document.getElementById(n+"gmaps").style.transform,g=!1})),y.addEventListener(d,(function(){b=g}))}return null},render:function(e,t,n){o||(o=e.name);var i={zIndex:0};if(!0===e.visibility){var a=document.getElementById(n+"gmaps");a&&(a.style.visibility="visible"),l[n]&&r&&(l[n].setMapTypeId(r[e.name]),l[n].setTilt(0))}else i.visibility="hidden";if(o===e.name){var u=document.getElementById(n+"gmaps");return u&&(u.style.visibility=e.visibility?"visible":"hidden"),s().createElement("div",{id:n+"gmaps",className:"fill",style:i})}return null},update:function(e,t,n,r,o){if(l[o]){var i=window.google;if(!n.visibility&&t.visibility){var a=r.getView(),s=(0,u.vs)(a.getCenter(),"EPSG:3857","EPSG:4326");l[o].setCenter(new i.maps.LatLng(s[1],s[0])),l[o].setZoom(a.getZoom())}!n.minZoom&&t.minZoom&&l[o].setOptions({minZoom:t.minZoom}),!n.maxZoom&&t.maxZoom&&l[o].setOptions({maxZoom:t.maxZoom})}},remove:function(e,t,n){o===e.name&&(o=void 0,delete l[n])}})},45483:(e,t,n)=>{"use strict";var r=n(8010),o=n(3396),i=n(20767);r.default.registerType("graticule",{create:function(e,t){var n=new o.Z({strokeStyle:e.style||new i.default({color:"rgba(255,120,0,0.9)",width:2,lineDash:[.5,4]})});return n.setMap(t),{detached:!0,remove:function(){n.setMap(null)}}}})},5348:(e,t,n)=>{"use strict";n(8010).default.registerType("mapquest",{create:function(e){return e.onError(),!1},isValid:function(){return!1}})},39075:(e,t,n)=>{"use strict";var r=n(8010),o=n(51635),i=n(38225);r.default.registerType("osm",{create:function(e){return new i.Z({msId:e.id,opacity:void 0!==e.opacity?e.opacity:1,visible:e.visibility,zIndex:e.zIndex,source:new o.Z,minResolution:e.minResolution,maxResolution:e.maxResolution})},update:function(e,t,n){n.minResolution!==t.minResolution&&e.setMinResolution(void 0===t.minResolution?0:t.minResolution),n.maxResolution!==t.maxResolution&&e.setMaxResolution(void 0===t.maxResolution?1/0:t.maxResolution)}})},23281:(e,t,n)=>{"use strict";var r=n(8010),o=n(98143),i=n.n(o),a=n(93409),s=function e(t){if(0!==t.length)for(var n=0;n<t.length;n++){var r=t.item(n);r.removeAttribute("data-reactid"),e(r.children||[])}};r.default.registerType("overlay",{create:function(e,t){var n=function(e,t){var n=e.cloneNode(!0);n.id=t.id+"-overlay",n.className=(t.className||e.className)+"-overlay",n.removeAttribute("data-reactid"),s(n.children||[]);var r=t.closeClass||"close";if(t.onClose&&1===n.getElementsByClassName(r).length){var o=n.getElementsByClassName(r)[0];i().add(o,"click",(function(e){t.onClose(e.target.getAttribute("data-overlayid"))}))}if(t.onLink)for(var a=n.getElementsByTagName("a"),u=0;u<a.length;u++)i().add(a[u],"click",t.onLink);return n}(document.getElementById(e.id),e);document.body.appendChild(n);var r=new a.Z({id:e.id,element:n,autoPan:e.autoPan||!1,positioning:e.positioning||"top-left",offset:e.offset||[0,0],autoPanAnimation:{duration:e.autoPanAnimation||250},position:[e.position.x,e.position.y]});return t.addOverlay(r),{detached:!0,remove:function(){t.removeOverlay(r)}}}})},60470:(e,t,n)=>{"use strict";var r=n(27361),o=n.n(r),i=n(8010),a=n(36365),s=n(8930),u=n(38225);i.default.registerType("tms",{create:function(e){return new u.Z(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=o()(e,"bbox.bounds",{}),n=t.minx,r=t.miny,i=t.maxx,u=t.maxy,l={projection:e.srs,url:"".concat(e.tileMapUrl,"/{z}/{x}/{-y}.").concat(e.extension),attributions:e.attribution?[e.attribution]:[]},c=new a.Z(l),m=c.getTileGrid();if(e.forceDefaultTileGrid){var d=m.getExtent(),f=[d[0],d[1]],p=new s.Z({origin:f,extent:e.bbox&&[n,r,i,u],resolutions:m.getResolutions(),tileSize:e.tileSize});c.setTileGridForProjection(e.srs,p),"EPSG:3857"===e.srs&&c.setTileGridForProjection("EPSG:900913",p)}else e.tileSets&&c.setTileGridForProjection(e.srs,new s.Z({origin:e.origin,extent:e.bbox&&[n,r,i,u],resolutions:e.tileSets.map((function(e){return e.resolution})),tileSize:e.tileSize}));return{msId:e.id,extent:e.bbox&&[n,r,i,u],opacity:void 0!==e.opacity?e.opacity:1,visible:!1!==e.visibility,zIndex:e.zIndex,source:c,minResolution:e.minResolution,maxResolution:e.maxResolution}}(e))},update:function(e,t,n){n.minResolution!==t.minResolution&&e.setMinResolution(void 0===t.minResolution?0:t.minResolution),n.maxResolution!==t.maxResolution&&e.setMaxResolution(void 0===t.maxResolution?1/0:t.maxResolution)}})},86714:(e,t,n)=>{"use strict";var r=n(27418),o=n.n(r),i=n(8010),a=n(45992),s=n(86267),u=n(18056),l=n(36365),c=n(38225);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}i.default.registerType("tileprovider",{create:function(e){var t=m(a.Z.getLayerConfig(e.provider,e),2),n=t[0],r=t[1];return r.url=n,new c.Z(function(e){var t,n,r,i,a,c,d,f,p,y=e.url.match(/(\{s\})/)?(0,u.Um)(e):[(0,u.XK)(e.url,e)],v=o()({},{urls:y,attributions:e.attribution?[e.attribution]:[],maxZoom:e.maxZoom?e.maxZoom:18,minZoom:e.minZoom?e.minZoom:0}),g=new l.Z(v);return o()({},{msId:e.id,opacity:void 0!==e.opacity?e.opacity:1,visible:!1!==e.visibility,zIndex:e.zIndex,source:g,minResolution:e.minResolution,maxResolution:e.maxResolution},e.bounds?{extent:(t=e.bounds,n=e.srs?e.srs:"EPSG:3857",r=m(t,2),i=m(r[0],2),a=i[0],c=i[1],d=m(r[1],2),f=d[0],p=d[1],s.default.reprojectBbox([c,a,p,f],"EPSG:4326",s.default.normalizeSRS(n)))}:{})}(r))},update:function(e,t,n){n.minResolution!==t.minResolution&&e.setMinResolution(void 0===t.minResolution?0:t.minResolution),n.maxResolution!==t.maxResolution&&e.setMaxResolution(void 0===t.maxResolution?1/0:t.maxResolution)}})},37420:(e,t,n)=>{"use strict";var r=n(8010),o=n(93546),i=n(18446),a=n.n(i),s=n(97016),u=n(29902);r.default.registerType("vector",{create:function(e){var t=new s.Z({features:[]}),n=(0,o.C2)(e);return new u.Z({msId:e.id,source:t,visible:!1!==e.visibility,zIndex:e.zIndex,style:n,opacity:e.opacity,minResolution:e.minResolution,maxResolution:e.maxResolution})},update:function(e,t,n){var r=n.crs||n.srs||"EPSG:3857",i=t.crs||t.srs||"EPSG:3857";i!==r&&e.getSource().forEachFeature((function(e){e.getGeometry().transform(r,i)})),a()(n.style,t.style)&&n.styleName===t.styleName||e.setStyle((0,o.C2)(t)),n.minResolution!==t.minResolution&&e.setMinResolution(void 0===t.minResolution?0:t.minResolution),n.maxResolution!==t.maxResolution&&e.setMaxResolution(void 0===t.maxResolution?1/0:t.maxResolution)},render:function(){return null}})},3690:(e,t,n)=>{"use strict";var r=n(91175),o=n.n(r),i=n(72500),a=n.n(i),s=n(86267),u=n(52259),l=n(8010),c=n(33044),m=n(18672),d=n(21915),f=n(8930),p=n(51895),y=n(85926),v=n(4780),g=n(33358),b=n(29122);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||E(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(e,t)||E(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){if(e){if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var T=function(e){var t=s.default.normalizeSRS(e.srs||"EPSG:3857",e.allowedSRS),n=(0,m.U2)(t),r=n.getMetersPerUnit(),i=o()(e.tilingSchemes&&e.tilingSchemes.schemes&&e.tilingSchemes.schemes.filter((function(e){return e.supportedCRS===t})))||{},l=i.identifier,R=i.tileMatrix,h=i.boundingBox,E=R&&R.map((function(e){return e.scaleDenominator})),O=u.default.getResolutions(),T=e.resolutions||E&&E.map((function(e){return 28e-5*e/r}))||O,I="ne"===n.getAxisOrientation().substr(0,2),P=R&&R.map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.topLeftCorner;return t})).map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=w(e,2),n=t[0],r=t[1];return I?[r,n]:[n,r]})),j=R&&R.map((function(e){return[e.tileWidth,e.tileHeight]})),M=e.bbox,Z=M?(0,d.Ne)([parseFloat(M.bounds.minx),parseFloat(M.bounds.miny),parseFloat(M.bounds.maxx),parseFloat(M.bounds.maxy)],(0,m.Ck)(M.crs,e.srs)):null,z=h&&h.lowerCorner&&h.upperCorner?[].concat(S(h.lowerCorner),S(h.upperCorner)):null,A=new f.Z({extent:z,minZoom:0,origins:P,origin:P?void 0:[20037508.3428,-20037508.3428],resolutions:T,tileSizes:j,tileSize:j?void 0:[256,256]}),L=(e.url||"").replace(/\{tilingSchemeId\}/,l).replace(/\{level\}/,"{z}").replace(/\{row\}/,"{y}").replace(/\{col\}/,"{x}"),C={};(0,c.addAuthenticationParameter)(L,C,e.securityToken);var F=decodeURI(L),G=a().format({query:x({},C)}),D=(0,g.z)(e.format)&&b.y[e.format]||v.Z,k=new y.Z({format:new D({dataProjection:t,layerName:"_layer_"}),tileGrid:A,url:F+G}),N=new p.Z({extent:Z,msId:e.id,source:k,visible:!1!==e.visibility,zIndex:e.zIndex,minResolution:e.minResolution,maxResolution:e.maxResolution});return(0,b.b)(e.vectorStyle,N),N};l.default.registerType("wfs3",{create:T,update:function(e,t,n){return n.securityToken!==t.securityToken||n.srs!==t.srs?T(t):(n.minResolution!==t.minResolution&&e.setMinResolution(void 0===t.minResolution?0:t.minResolution),n.maxResolution!==t.maxResolution&&e.setMaxResolution(void 0===t.maxResolution?1/0:t.maxResolution),null)},render:function(){return null}})},73576:(e,t,n)=>{"use strict";var r=n(8010),o=n(93546),i=n(97016),a=n(29902),s=n(69141),u=n(32420),l=n(43378),c=n(38848);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e,t){return function(n,r,o){var i=(0,l.v)(t),a=o.getCode(),s=function(){e.removeLoadedExtent(n),e.dispatchEvent("vectorerror")};(0,u.Bm)(t.url,t.name,d({outputFormat:"application/json",srsname:a},i)).then((function(t){200===t.status?e.addFeatures(e.getFormat().readFeatures(t.data)):s()})).catch((function(e){s()}))}},y=function(e,t){return(0,o.C2)(d(d({},e),{},{style:d(d({},e.style||{}),{},{type:t})}))},v=function(e,t){return e.geometryType?e.setStyle(y(t,e.geometryType)):(0,u.v$)(t.url,t.name).then(c.mI).then((function(n){e.geometryType=n,e.setStyle(y(t,n))}))};r.default.registerType("wfs",{create:function(e){var t=new i.Z({format:new s.Z});t.setLoader(p(t,e));var n=(0,o.C2)(e),r=new a.Z({msId:e.id,source:t,visible:!1!==e.visibility,zIndex:e.zIndex,style:n,opacity:e.opacity,minResolution:e.minResolution,maxResolution:e.maxResolution});return v(r,e),r},update:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.crs||n.srs||"EPSG:3857",o=t.crs||t.srs||"EPSG:3857",i=e.getSource();o!==r&&i.forEachFeature((function(e){e.getGeometry().transform(r,o)})),(0,c.Es)(n,t)&&(i.setLoader(p(i,t)),i.clear(),i.refresh()),t.style===n.style&&t.styleName===n.styleName||v(e,t),n.minResolution!==t.minResolution&&e.setMinResolution(void 0===t.minResolution?0:t.minResolution),n.maxResolution!==t.maxResolution&&e.setMaxResolution(void 0===t.maxResolution?1/0:t.maxResolution)},render:function(){return null}})},28437:(e,t,n)=>{"use strict";var r=n(24852),o=n.n(r),i=n(5346),a=n(8010),s=n(14293),u=n.n(s),l=n(18446),c=n.n(l),m=n(93386),d=n.n(m),f=n(1469),p=n.n(f),y=n(27418),v=n.n(y),g=n(75875),b=n.n(g),R=n(86267),x=n(23502),h=n(43378),S=n(33044),w=n(24262),E=n(52259),O=n(3901),T=n(2305),I=n(92663),P=n(18672),j=n(8930),M=n(38225),Z=n(91587),z=n(85926),A=n(51895),L=n(33358),C=n(29122),F=n(53231);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var U=function(e){return function(t,n){var r,o=t.getImage();if("function"==typeof window.btoa&&n.length>=(e.maxLengthUrl||1/0)){var i=function(e){if(Array.isArray(e))return e}(r=n.split("&"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),a=i[0],s=i.slice(1);b().post(a,"&"+s.join("&"),{headers:{"Content-type":"application/x-www-form-urlencoded;charset=utf-8"},responseType:"arraybuffer"}).then((function(e){if(200===e.status){for(var t=new Uint8Array(e.data),n=t.length,r=new Array(n);n--;)r[n]=String.fromCharCode(t[n]);var i=r.join(""),a=e.headers["content-type"];0===a.indexOf("image")&&(o.src="data:"+a+";base64,"+window.btoa(i))}})).catch((function(e){console.error(e)}))}else o.src=n}};function V(e){var t=(0,h.v)(e),n=v()({},e.baseParams,{LAYERS:e.name,STYLES:e.style||"",FORMAT:e.format||"image/png",TRANSPARENT:void 0===e.transparent||e.transparent,SRS:R.default.normalizeSRS(e.srs||"EPSG:3857",e.allowedSRS),CRS:R.default.normalizeSRS(e.srs||"EPSG:3857",e.allowedSRS),TILED:!e.singleTile&&(!!u()(e.tiled)||e.tiled),VERSION:e.version||"1.3.0"},v()({},e._v_?{_v_:e._v_}:{},t||{},e.localizedLayerStyles&&e.env&&e.env.length&&"background"!==e.group?{ENV:(0,F.h)(e.env)}:{}));return(0,S.addAuthenticationToSLD)(n,e)}function B(e,t){var n=t;(0,x.$)(t)&&(n=(0,x.b)()+encodeURIComponent(t)),e.getImage().src=n}function _(e){return e.join(":")}function q(e,t,n){var r=n;e&&(0,x.$)(n)&&(r=(0,x.b)()+encodeURIComponent(n));var o=t.getTileCoord();t.getImage().src="",(0,O.qR)(r,o,_(o))}function W(e){try{var t=function(e,t){var n=e.get("map");return e.getSource().getTileGrid().getTileCoordForCoordAndZ(t,n.getView().getZoom())}(this,e),n=this.getSource().getTileGrid().getTileSize(),r=(0,O.yQ)(_(t),function(e,t,n){var r=e.getSource().getTileGrid(),o=r.getTileCoordExtent(n),i=r.getTileSize()/(o[2]-o[0]);return{x:Math.floor((t[0]-o[0])*i),y:Math.floor((o[3]-t[1])*i)}}(this,e,t),n,this.get("nodata"),this.get("littleEndian"));return r.available?r.value:o().createElement(i.Z,{msgId:r.message})}catch(e){return o().createElement(i.Z,{msgId:"elevationLoadingError"})}}var Y=function(e){return e&&(0,w.go)(e)||void 0},$=function(e,t){var n=function(e){return e.map((function(e){return e.split("?")[0]}))}(p()(e.url)?e.url:[e.url]),r=V(e)||{};n.forEach((function(t){return(0,S.addAuthenticationParameter)(t,r,e.securityToken)}));var o=(0,L.z)(e.format);if(e.singleTile&&!o)return new T.Z({msId:e.id,opacity:void 0!==e.opacity?e.opacity:1,visible:!1!==e.visibility,zIndex:e.zIndex,minResolution:e.minResolution,maxResolution:e.maxResolution,source:new I.default({url:n[0],crossOrigin:e.crossOrigin,attributions:Y(e.credits),params:r,ratio:e.ratio||1,imageLoadFunction:U(e)})});var i,a,s=t&&t.getView()&&t.getView().getProjection()&&t.getView().getProjection().getCode()||"EPSG:3857",u=(0,P.U2)(R.default.normalizeSRS(e.srs||s,e.allowedSRS)).getExtent(),l=function(e,t){return t.useForElevation?v()({},e,{tileLoadFunction:q.bind(null,[t.forceProxy])}):t.forceProxy?v()({},e,{tileLoadFunction:B}):e}({attributions:Y(e.credits),urls:n,crossOrigin:e.crossOrigin,params:r,tileGrid:new j.Z({extent:u,resolutions:e.resolutions||E.default.getResolutions(),tileSize:e.tileSize?e.tileSize:256,origin:e.origin?e.origin:[u[0],u[1]]}),tileLoadFunction:U(e)},e),c=new Z.default(D({},l)),m={msId:e.id,opacity:void 0!==e.opacity?e.opacity:1,visible:!1!==e.visibility,zIndex:e.zIndex,minResolution:e.minResolution,maxResolution:e.maxResolution};return(i=o?new A.Z(D(D({},m),{},{source:new z.Z(D(D({},l),{},{format:new C.y[e.format]({layerName:"_layer_"}),tileUrlFunction:function(e,t,n){return c.tileUrlFunction(e,t,n)}}))})):new M.Z(D(D({},m),{},{source:c}))).set("map",t),o&&(i.set("wmsSource",c),e.vectorStyle&&(0,C.b)(e.vectorStyle,i)),e.useForElevation&&(i.set("nodata",e.nodata),i.set("littleEndian",null!==(a=e.littleendian)&&void 0!==a&&a),i.set("getElevation",W.bind(i))),i};a.default.registerType("wms",{create:$,update:function(e,t,n,r){var o=(0,L.z)(t.format);if(function(e,t){return e.singleTile!==t.singleTile||e.securityToken!==t.securityToken||e.ratio!==t.ratio||e.credits!==t.credits&&!t.credits||(0,L.z)(e.format)!==(0,L.z)(t.format)||(0,L.z)(e.format)&&(0,L.z)(t.format)&&e.format!==t.format||e.localizedLayerStyles!==t.localizedLayerStyles||e.tileSize!==t.tileSize}(n,t))return $(t,r);var i=!1;o&&t.vectorStyle&&!c()(t.vectorStyle,n.vectorStyle||{})&&((0,C.b)(t.vectorStyle,e),i=!0);var a=e.get("wmsSource")||e.getSource(),s=o?e.getSource():null;if(n.srs!==t.srs){var l=(0,P.U2)(R.default.normalizeSRS(t.srs,t.allowedSRS)).getExtent();if(t.singleTile&&!o)e.setExtent(l);else{var m=new j.Z({extent:l,resolutions:t.resolutions||E.default.getResolutions(),tileSize:t.tileSize?t.tileSize:256,origin:t.origin?t.origin:[l[0],l[1]]});a.tileGrid=m,s&&(s.tileGrid=m)}i=!0}n.credits!==t.credits&&t.credits&&(a.setAttributions(Y(t.credits)),i=!0);var f,p,y=!1;if(n&&a&&a.updateParams&&(n.params&&t.params?y=d()(Object.keys(n.params),Object.keys(t.params)).reduce((function(e,r){return t.params[r]!==n.params[r]||e}),!1):(!n.params&&t.params||n.params&&!t.params)&&(y=!0),f=V(n),p=V(t),y=y||["LAYERS","STYLES","FORMAT","TRANSPARENT","TILED","VERSION","_v_","CQL_FILTER","SLD","VIEWPARAMS"].reduce((function(e,t){return f[t]!==p[t]||e}),!1),i=i||y),n.minResolution!==t.minResolution&&e.setMinResolution(void 0===t.minResolution?0:t.minResolution),n.maxResolution!==t.maxResolution&&e.setMaxResolution(void 0===t.maxResolution?1/0:t.maxResolution),i&&(a.refresh&&a.refresh(),s&&(s.clear(),s.refresh()),y)){var g=v()(p,(0,S.addAuthenticationToSLD)((0,h.v)(t)||{},t));a.updateParams(v()(g,Object.keys(f||{}).reduce((function(e,t){return u()(g[t])?v()(e,k({},t,void 0)):e}),{})))}return null}})},7086:(e,t,n)=>{"use strict";var r=n(8010),o=n(84596),i=n.n(o),a=n(91175),s=n.n(a),u=n(10928),l=n.n(u),c=n(33044),m=n(7294),d=n(86267),f=n(52259),p=n(33358),y=n(72500),v=n.n(y),g=n(18672),b=n(21915),R=n(38225),x=n(51895),h=n(92200),S=n(85926),w=n(23241),E=n(4780),O=n(69141),T=n(96476),I=n(93546);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){M(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Z={"application/vnd.mapbox-vector-tile":E.Z,"application/json;type=geojson":O.Z,"application/json;type=topojson":T.Z},z=function(e){var t="RESTful"===e.requestEncoding?"REST":e.requestEncoding,n=function(e,t){return e.map((function(e){return"REST"===t?e:e.split("?")[0]}))}(i()(e.url),t),r=d.default.normalizeSRS(e.srs||"EPSG:3857",e.allowedSRS),o=(0,g.U2)(r),a=o.getMetersPerUnit(),s=m.h7(e,r),u=s.tileMatrixSetName,y=s.tileMatrixSet,E=s.matrixIds,O=y&&(null==y?void 0:y.TileMatrix.map((function(e){return Number(e.ScaleDenominator)}))),T=f.default.getResolutions(),P=e.resolutions||O&&O.map((function(e){return 28e-5*e/a}))||T,M="ne"===o.getAxisOrientation().substr(0,2),z=y&&y.TileMatrix&&y.TileMatrix.map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.TopLeftCorner;return t&&d.default.parseString(t)})).map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.x,n=e.y;return M?[n,t]:[t,n]})),A=y&&y.TileMatrix&&y.TileMatrix.map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.MatrixWidth,n=e.MatrixHeight;return[parseInt(t,10),parseInt(n,10)]})),L=y&&y.TileMatrix&&y.TileMatrix.map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.TileWidth,n=e.TileHeight;return[parseInt(t,10),parseInt(n,10)]})),C=e.bbox,F=C?(0,b.Ne)([parseFloat(C.bounds.minx),parseFloat(C.bounds.miny),parseFloat(C.bounds.maxx),parseFloat(C.bounds.maxy)],(0,g.Ck)(C.crs,e.srs)):o.getExtent(),G=(0,b.Ed)(F,o.getExtent());(0,b.xb)(G)&&(G=o.getExtent());var D={};n.forEach((function(t){return(0,c.addAuthenticationParameter)(t,D,e.securityToken)}));var k=v().format({query:j({},D)}),N=256,U=e.maxResolution||l()(T.filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return P[0]/e*N<.5}))),V=-1!==(e.availableFormats||[]).indexOf(e.format)&&e.format||!e.availableFormats&&e.format||"image/png",B=(0,p.z)(V),_={requestEncoding:t,urls:n.map((function(e){return e+k})),layer:e.name,version:e.version||"1.0.0",matrixSet:u,format:V,style:e.style||"",tileGrid:new w.Z({origins:z,origin:z?void 0:[20037508.3428,-20037508.3428],resolutions:P,matrixIds:m.Wg((E||m.nn(e)||[]).map((function(e){return e.identifier})),P.length),sizes:A,extent:G,tileSizes:L,tileSize:!L&&(e.tileSize||[N,N])}),wrapX:!0},q=new h.Z(_),W=new(B?x.Z:R.Z)({msId:e.id,opacity:void 0!==e.opacity?e.opacity:1,zIndex:e.zIndex,minResolution:e.minResolution,maxResolution:e.maxResolution<U?e.maxResolution:U,visible:!1!==e.visibility,source:B?new S.Z(j(j({},_),{},{format:new Z[e.format]({dataProjection:r}),tileUrlFunction:function(){return q.tileUrlFunction.apply(q,arguments)}})):q});return B&&W.setStyle((0,I.C2)(e)),W};r.default.registerType("wmts",{create:z,update:function(e,t,n){return n.securityToken!==t.securityToken||n.srs!==t.srs||n.format!==t.format||n.style!==t.style?z(t):(n.minResolution!==t.minResolution&&e.setMinResolution(void 0===t.minResolution?0:t.minResolution),n.maxResolution!==t.maxResolution&&e.setMaxResolution(void 0===t.maxResolution?1/0:t.maxResolution),null)},isCompatible:function(e){return!!s()(d.default.getEquivalentSRS(e.srs||"EPSG:3857").filter((function(t){return function(e,t){var n=m.h7(t,e),r=n.tileMatrixSetName,o=n.tileMatrixSet;return o?d.default.getEPSGCode(o["ows:SupportedCRS"])===e:r===e}(t,e)})))}})},3498:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r={BingLayer:n(47098).default,GoogleLayer:n(73431).default,GraticuleLayer:n(45483).default,MapQuest:n(5348).default,OSMLayer:n(39075).default,OverlayLayer:n(23281).default,TMSLayer:n(60470).default,TileProviderLayer:n(86714).default,VectorLayer:n(37420).default,WFSLayer:n(73576).default,WFS3Layer:n(3690).default,WMSLayer:n(28437).default,WMTSLayer:n(7086).default}},3901:(e,t,n)=>{"use strict";n.d(t,{qR:()=>c,yQ:()=>m});var r=n(75875),o=n.n(r),i=n(81399),a=n.n(i),s=n(82702),u=new(a())(100),l=function(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-9999,i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=r*e+n;try{var s=t.dataView.getInt16(2*a,i);if(s!==o&&32767!==s&&-32768!==s)return s}catch(e){}return null},c=function(e,t,n){return u.has(n)?null:new s.Promise((function(r,i){o().get(e,{responseType:"arraybuffer"}).then((function(e){!function(e,t,n){u.set(n,{data:e,dataView:new DataView(e),coords:t,current:!0,status:"success"})}(e.data,t,n),r()})).catch((function(e){!function(e,t,n){u.set(n,{coords:t,current:!0,status:"error: "+e})}(e.message,t,n),i(e)}))}))},m=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-9999,o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=u.get(e);return i&&"success"===i.status?{available:!0,value:l(n,i,t.x,t.y,r,o)}:i&&"loading"===i.status?{available:!1,message:"elevationLoading"}:i&&"error"===i.status?{available:!1,message:"elevationLoadingError"}:{available:!1,message:"elevationNotAvailable"}}},18056:(e,t,n)=>{"use strict";n.d(t,{XK:()=>i,Um:()=>a,ut:()=>s});var r=n(1469),o=n.n(r);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.replace(/(\{(.*?)\})/g,(function(){var e=arguments[0],n=arguments[2]?arguments[2]:arguments[1];if(["x","y","z"].includes(n))return arguments[0];var r=t[n];if(void 0===r)throw new Error("No value provided for variable "+e);return"function"==typeof r&&(r=r(t)),r}))}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.url||"",n=e.subdomains||"";return n&&("string"==typeof n&&(n=n.split("")),o()(n))?n.map((function(n){return i(t.replace("{s}",n),e)})):["a","b","c"].map((function(n){return i(t.replace("{s}",n),e)}))}var s=function(e){return(e.url.match(/(\{s\})/)?a(e):[i(e.url,e)])[0]}},29122:(e,t,n)=>{"use strict";n.d(t,{y:()=>s,b:()=>u});var r=n(4780),o=n(69141),i=n(96476),a=n(93546),s={"application/vnd.mapbox-vector-tile":r.Z,"application/json;type=geojson":o.Z,"application/json;type=topojson":i.Z},u=function(e,t){(0,a.C2)({asPromise:!0,style:e}).then((function(e){t.setStyle(e)})).catch((function(){}))}}}]);