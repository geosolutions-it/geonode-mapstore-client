(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7236],{1550:(t,e,n)=>{"use strict";n.d(e,{pP:()=>r,TR:()=>i,N7:()=>c,mq:()=>p,uv:()=>u,Qy:()=>a,IL:()=>l,Li:()=>s,OW:()=>f,ZO:()=>y,Um:()=>m,TF:()=>b,Ls:()=>h,Ec:()=>g,Eu:()=>E,JJ:()=>v,nZ:()=>O,YD:()=>d,GI:()=>_,Jb:()=>x,Uh:()=>S,LP:()=>T,xy:()=>P,o6:()=>C,FP:()=>N,Mo:()=>I,sO:()=>R,Px:()=>j,hd:()=>w,BV:()=>A,SO:()=>z,H0:()=>M,$X:()=>Z,ou:()=>G,NE:()=>L});var o=n(97395),r="CHANGE_MAP_VIEW",i="CLICK_ON_MAP",c="CHANGE_MOUSE_POINTER",p="CHANGE_ZOOM_LVL",u="PAN_TO",a="ZOOM_TO_EXTENT",l="ZOOM_TO_POINT",s="CHANGE_MAP_CRS",f="CHANGE_MAP_SCALES",y="CHANGE_MAP_STYLE",m="CHANGE_ROTATION",b="CREATION_ERROR_LAYER",h="UPDATE_VERSION",g="INIT_MAP",E="RESIZE_MAP",v="CHANGE_MAP_LIMITS",O="SET_MAP_RESOLUTIONS",d="REGISTER_EVENT_LISTENER",_="UNREGISTER_EVENT_LISTENER",x="MOUSE_MOVE",S="MOUSE_OUT";function T(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{family:""};return(0,o.vU)({title:"warning",message:"map.errorLoadingFont",values:t,position:"tc",autoDismiss:10})}function P(t,e,n){return{type:l,pos:t,zoom:e,crs:n}}function C(t,e,n,o,i,c,p,u){return{type:r,center:t,zoom:e,bbox:n,size:o,mapStateSource:i,projection:c,viewerOptions:p,resolution:u}}function N(t,e){return{type:i,point:t,layer:e}}function I(t){return{type:c,pointer:t}}function R(t,e){return{type:p,zoom:t,mapStateSource:e}}function j(t,e,n,o){return{type:a,extent:t,crs:e,maxZoom:n,options:o}}function w(t,e){return{type:y,style:t,mapStateSource:e}}function A(t){var e=t.restrictedExtent,n=t.crs,o=t.minZoom;return{type:v,restrictedExtent:e,crs:n,minZoom:o}}function z(t){return{type:O,resolutions:t}}var M=function(t,e){return{type:d,eventName:t,toolName:e}},Z=function(t,e){return{type:_,eventName:t,toolName:e}},G=function(t){return{type:x,position:t}},L=function(){return{type:S}}},50966:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var o=n(61365),r=n(30294);const i=(0,o.Z)(r.OverlayTrigger)},61365:(t,e,n)=>{"use strict";n.d(e,{Z:()=>p});var o=n(24852),r=n.n(o),i=n(63202);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}const p=function(t){return function(e){return r().createElement(t,c({},e,{container:document.querySelector("."+(i.ZP.getConfigProp("themePrefix")||"ms2")+" > div")||document.body}))}}},35522:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>H});var o=n(93379),r=n.n(o),i=n(54840);r()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var c=n(27418),p=n.n(c),u=n(24852),a=n.n(u),l=n(30294),s=n(71703),f=n(22222),y=n(1550),m=n(45697),b=n.n(m),h=n(38560),g=n(50966),E=n(52259),v=n(63202);function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function x(t,e){return(x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function S(t,e){return!e||"object"!==O(e)&&"function"!=typeof e?T(t):e}function T(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function C(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}(c,t);var e,n,o,r,i=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(o);if(r){var n=P(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return S(this,t)});function c(){var t;d(this,c);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return C(T(t=i.call.apply(i,[this].concat(n))),"addTooltip",(function(e){var n=a().createElement(l.Tooltip,{id:"locate-tooltip"},t.props.tooltip);return a().createElement(g.Z,{placement:t.props.tooltipPlace,key:"overlay-trigger."+t.props.id,overlay:n},e)})),C(T(t),"zoomToMaxExtent",(function(){var e=t.props.mapConfig.maxExtent,n=t.props.mapConfig.size,o=1,r=t.props.mapConfig.center,i=t.props.mapConfig.projection||"EPSG:3857";e&&"[object Array]"===Object.prototype.toString.call(e)&&(o=(0,E.getZoomForExtent)(e,n,0,21),0===(r=(0,E.getCenterForExtent)(e,i)).x&&0===r.y||(r=(0,v.qg)(r,"EPSG:4326")));var c=(0,E.getBbox)(r,o,n);t.props.changeMapView(r,o,c,t.props.mapConfig.size,null,t.props.mapConfig.projection)})),C(T(t),"zoomToInitialExtent",(function(){var e=t.props.mapInitialConfig,n=(0,E.getBbox)(e.center,e.zoom,t.props.mapConfig.size);t.props.changeMapView(e.center,e.zoom,n,t.props.mapConfig.size,null,t.props.mapConfig.projection)})),t}return e=c,(n=[{key:"render",value:function(){var t=this;return this.addTooltip(a().createElement(h.Z,{id:this.props.id,style:this.props.style,bsSize:this.props.btnSize,onClick:function(){return t.props.useInitialExtent?t.zoomToInitialExtent():t.zoomToMaxExtent()},className:this.props.className,bsStyle:this.props.bsStyle},this.props.glyphicon?a().createElement(l.Glyphicon,{glyph:this.props.glyphicon}):null,this.props.glyphicon&&this.props.text?" ":null,this.props.text,this.props.help))}}])&&_(e.prototype,n),c}(a().Component);C(N,"propTypes",{id:b().string,image:b().string,glyphicon:b().string,text:b().string,btnSize:b().oneOf(["large","small","xsmall"]),mapConfig:b().object,mapInitialConfig:b().object,changeMapView:b().func,btnType:b().oneOf(["normal","image"]),help:b().oneOfType([b().string,b().element]),tooltip:b().element,tooltipPlace:b().string,className:b().string,useInitialExtent:b().bool,bsStyle:b().string,style:b().object}),C(N,"defaultProps",{id:"mapstore-zoomtomaxextent",glyphicon:"resize-full",text:void 0,btnSize:"xsmall",btnType:"normal",useInitialExtent:!1,tooltipPlace:"left",bsStyle:"default",className:"square-button"});const I=N;var R=n(5346),j=n(827);function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function A(){return(A=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function z(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function M(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function Z(t,e){return(Z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function G(t,e){return!e||"object"!==w(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function L(t){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var k=(0,f.P1)([j.Od,function(t){return t.mapInitialConfig}],(function(t,e){return{mapConfig:t,mapInitialConfig:e}})),V=(0,s.connect)(k,{changeMapView:y.o6})(I),U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Z(t,e)}(c,t);var e,n,o,r,i=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(o);if(r){var n=L(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return G(this,t)});function c(){return z(this,c),i.apply(this,arguments)}return e=c,(n=[{key:"render",value:function(){return a().createElement(V,A({key:"zoomToMaxExtent"},this.props,{useInitialExtent:!0}))}}])&&M(e.prototype,n),c}(a().Component);const H={ZoomAllPlugin:p()(U,{Toolbar:{name:"ZoomAll",position:7,tooltip:"zoombuttons.zoomAllTooltip",icon:a().createElement(l.Glyphicon,{glyph:"resize-full"}),help:a().createElement(R.Z,{msgId:"helptexts.zoomToMaxExtentButton"}),tool:!0,priority:1}}),reducers:{}}},54840:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var o=n(23645),r=n.n(o)()((function(t){return t[1]}));r.push([t.id,".msgapi #mapstore-zoomtomaxextent {\n    z-index: 1;\n    position: relative;\n}\n",""]);const i=r},56029:(t,e,n)=>{var o=n(33448);t.exports=function(t,e,n){for(var r=-1,i=t.length;++r<i;){var c=t[r],p=e(c);if(null!=p&&(void 0===u?p==p&&!o(p):n(p,u)))var u=p,a=c}return a}},70433:t=>{t.exports=function(t,e){return t<e}},95395:(t,e,n)=>{var o=n(89465),r=n(47816),i=n(67206);t.exports=function(t,e){var n={};return e=i(e,3),r(t,(function(t,r,i){o(n,e(t,r,i),t)})),n}},22762:(t,e,n)=>{var o=n(56029),r=n(67206),i=n(70433);t.exports=function(t,e){return t&&t.length?o(t,r(e,2),i):void 0}},87185:(t,e,n)=>{var o=n(45652);t.exports=function(t,e){return e="function"==typeof e?e:void 0,t&&t.length?o(t,void 0,e):[]}}}]);