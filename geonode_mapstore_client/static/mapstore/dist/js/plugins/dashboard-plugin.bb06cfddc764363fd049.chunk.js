(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7509],{7878:(e,t,r)=>{"use strict";r.d(t,{E6:()=>u,vo:()=>a,l1:()=>c,J9:()=>s,U:()=>l,z8:()=>f,ql:()=>d,O_:()=>p,M$:()=>y,Ug:()=>b,p5:()=>v,Fz:()=>E,WZ:()=>g,bP:()=>O,On:()=>h,d_:()=>m,xM:()=>_,bl:()=>S,Wi:()=>T,PN:()=>w,_M:()=>R,Wm:()=>P,Eg:()=>A,V1:()=>L,cY:()=>D,RD:()=>I,Hl:()=>j,co:()=>F,uY:()=>M,H8:()=>N,je:()=>U,go:()=>C,_8:()=>W,xd:()=>k,o7:()=>Y,Nr:()=>x,Gf:()=>G,nh:()=>H,Rf:()=>Q,Xp:()=>Z,D6:()=>V,Sm:()=>z,Ef:()=>X,jW:()=>B,kQ:()=>J,JG:()=>q,js:()=>$,q$:()=>K,OZ:()=>ee,Nc:()=>te,NV:()=>re,I5:()=>ne,QL:()=>oe,I:()=>ie,ku:()=>ue,EU:()=>ae,IV:()=>ce,HT:()=>se,lg:()=>le,ds:()=>fe,VF:()=>de,DD:()=>pe,uo:()=>ye,Ry:()=>be,ZH:()=>ve,AQ:()=>Ee,yC:()=>ge,F:()=>Oe,mc:()=>he,uM:()=>_e,eJ:()=>Se,uP:()=>Te,N5:()=>we,bn:()=>Re,Bm:()=>Pe,F2:()=>Ae,jR:()=>Le,$J:()=>De,ln:()=>Ie});var n=r(75875),o=r.n(n);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var u="ADD_FILTER_FIELD",a="REMOVE_FILTER_FIELD",c="UPDATE_FILTER_FIELD",s="UPDATE_EXCEPTION_FIELD",l="ADD_GROUP_FIELD",f="UPDATE_LOGIC_COMBO",d="REMOVE_GROUP_FIELD",p="CHANGE_CASCADING_VALUE",y="EXPAND_ATTRIBUTE_PANEL",b="EXPAND_SPATIAL_PANEL",v="QUERYFORM:EXPAND_CROSS_LAYER",E="QUERYFORM:SET_CROSS_LAYER_PARAMETER",g="QUERYFORM:RESET_CROSS_LAYER_FILTER",O="SELECT_SPATIAL_METHOD",h="SELECT_VIEWPORT_SPATIAL_METHOD",m="UPDATE_GEOMETRY",_="SELECT_SPATIAL_OPERATION",S="CHANGE_SPATIAL_ATTRIBUTE",T="CHANGE_SPATIAL_FILTER_VALUE",w="REMOVE_SPATIAL_SELECT",R="SHOW_SPATIAL_DETAILS",P="QUERY_FORM_SEARCH",A="QUERY_FORM_RESET",L="SHOW_GENERATED_FILTER",D="CHANGE_DWITHIN_VALUE",I="ZONE_SEARCH",j="ZONE_SEARCH_ERROR",F="ZONE_FILTER",M="ZONE_CHANGE",N="ZONES_RESET",U="SIMPLE_FILTER_FIELD_UPDATE",C="ADD_SIMPLE_FILTER_FIELD",W="REMOVE_SIMPLE_FILTER_FIELD",k="REMOVE_ALL_SIMPLE_FILTER_FIELDS",Y="UPDATE_FILTER_FIELD_OPTIONS",x="LOADING_FILTER_FIELD_OPTIONS",G="QUERYFORM:ADD_CROSS_LAYER_FILTER_FIELD",H="QUERYFORM:UPDATE_CROSS_LAYER_FILTER_FIELD",Q="QUERYFORM:REMOVE_CROSS_LAYER_FILTER_FIELD",Z="QUERYFORM:UPDATE_CROSS_LAYER_FILTER_FIELD_OPTIONS",V="SET_AUTOCOMPLETE_MODE",z="TOGGLE_AUTOCOMPLETE_MENU",X="QUERYFORM:LOAD_FILTER";function B(e){return{type:u,groupId:e}}function J(e,t){return{type:l,groupId:e,index:t}}function q(e){return{type:a,rowId:e}}function $(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"filterField";return{type:z,rowId:e,status:t,layerFilterType:r}}function K(e,t,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return{type:c,rowId:e,fieldName:t,fieldValue:r,fieldType:n,fieldOptions:o}}function ee(e,t){return{type:s,rowId:e,exceptionMessage:t}}function te(e,t){return{type:f,groupId:e,logic:t}}function re(e){return{type:V,status:e}}function ne(e){return{type:d,groupId:e}}function oe(e){return{type:p,attributes:e}}function ie(e){return{type:y,expand:e}}function ue(e){return{type:b,expand:e}}function ae(e){return{type:v,expand:e}}function ce(e,t){return{type:E,key:e,value:t}}function se(e,t){return{type:O,fieldName:t,method:e}}function le(){return{type:h}}function fe(e){return{type:m,geometry:e}}function de(e,t){return{type:_,fieldName:t,operation:e}}function pe(e){return{type:S,attribute:e}}function ye(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.feature,r=e.srsName,n=e.collectGeometries,o=e.style,i=e.options,u=e.value;return{type:T,value:u,collectGeometries:n,options:i,geometry:t&&t.geometry,feature:t,srsName:r,style:o}}function be(){return{type:w}}function ve(e){return{type:R,show:e}}function Ee(e){return{type:D,distance:e}}function ge(e,t){return{type:P,searchUrl:e,filterObj:t}}function Oe(e){return{type:X,filter:e}}function he(e){return{type:A,skip:e}}function me(e,t){return{type:j,error:e,id:t}}function _e(e,t){return{type:I,active:e,id:t}}function Se(e,t,r){return function(n){return o().post(e,t,{timeout:1e4,headers:{Accept:"application/json","Content-Type":"text/plain"}}).then((function(o){var u=o.data;if("object"!==i(u))try{u=JSON.parse(u)}catch(o){n(me("Search result broken ("+e+":   "+t+"): "+o.message,r))}n(function(e,t){return{type:F,data:e,id:t}}(u,r)),n(_e(!1,r))})).catch((function(e){n(me(e,r))}))}}function Te(e,t){return{type:M,id:e,value:t}}function we(e){return{type:G,rowId:(new Date).getTime(),groupId:e}}function Re(e,t,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return{type:H,rowId:e,fieldName:t,fieldValue:r,fieldType:n,fieldOptions:o}}function Pe(e){return{type:Q,rowId:e}}function Ae(){return{type:g}}function Le(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"filterField";return{type:x,status:e,filterField:t,layerFilterType:r}}function De(e,t,r){return{type:Y,filterField:e,options:t,valuesCount:r}}function Ie(e,t,r){return{type:Z,filterField:e,options:t,valuesCount:r}}},95797:(e,t,r)=>{"use strict";r.d(t,{DR:()=>n,S0:()=>o,u7:()=>i,lj:()=>u,yz:()=>a,lN:()=>c,zW:()=>s,Yx:()=>l,VN:()=>f,Hu:()=>d,VT:()=>p,RD:()=>y,Qq:()=>b,R1:()=>v,_T:()=>E,vO:()=>g,XO:()=>O,jG:()=>h,Xc:()=>m,gT:()=>_,rG:()=>S,t3:()=>T,Fs:()=>w,w_:()=>R,Lm:()=>P,rh:()=>A,rP:()=>L,IO:()=>D}),r(75875);var n="LAYER_SELECTED_FOR_SEARCH",o="FEATURE_TYPE_SELECTED",i="FEATURE_TYPE_LOADED",u="FEATURE_LOADED",a="FEATURE_LOADING",c="FEATURE_TYPE_ERROR",s="FEATURE_ERROR",l="QUERY_CREATE",f="QUERY:UPDATE_QUERY",d="QUERY_RESULT",p="QUERY_ERROR",y="RESET_QUERY",b="QUERY",v="INIT_QUERY_PANEL",E="QUERY:TOGGLE_SYNC_WMS",g="QUERY:TOGGLE_LAYER_FILTER";function O(){return{type:E}}function h(){return{type:g}}function m(){return{type:v}}function _(e,t){return{type:o,url:e,typeName:t}}function S(e,t){return{type:i,typeName:e,featureType:t}}function T(e,t){return{type:c,typeName:e,error:t}}function w(e){return{type:a,isLoading:e}}function R(e,t,r,n,o){return{type:d,searchUrl:t,filterObj:r,result:e,queryOptions:n,reason:o}}function P(e){return{type:p,error:e}}function A(e,t){return{type:f,updates:e,reason:t}}function L(e,t){return{type:l,searchUrl:e,filterObj:t}}function D(e,t,r,n){return{type:b,searchUrl:e,filterObj:t,queryOptions:r,reason:n}}},7691:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>P});var n=r(89255),o=r(57579),i=r(55927),u=r(82904),a=r(95797),c=r(97395),s=r(7878),l=r(63516),f=r(67306),d=r(74621),p=r(1757),y=r(24684),b=r(91312),v=r(89919),E=r(75982),g=["data"],O=["status","statusText","data","message"];function h(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function m(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var R=function(e){var t=(0,p.JT)(e);return[t.search&&t.search.url,t.name]};const P={openDashboardWidgetEditor:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,u=void 0===r?function(){}:r;return e.ofType(o.AE,o.dm).filter((function(){return(0,f.Wy)(u())})).switchMap((function(){return n.Observable.of((0,i.D_)(!0))}))},closeDashboardWidgetEditorOnFinish:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,u=void 0===r?function(){}:r;return e.ofType(o.Jm).filter((function(){return(0,f.Wy)(u())})).switchMap((function(){return n.Observable.of((0,i.D_)(!1))}))},initDashboardEditorOnNew:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,i=void 0===r?function(){}:r;return e.ofType(o.AE).filter((function(){return(0,f.Wy)(i())})).switchMap((function(e){return n.Observable.of((0,o.bS)(T(T({legend:!1,mapSync:!1,cartesian:!0,yAxis:!0},e),{},{type:void 0}),{step:0}))}))},closeDashboardEditorOnExit:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,o=void 0===r?function(){}:r;return e.ofType(E.nk).filter((function(){return(0,f.Wy)(o())})).filter((function(){return(0,f.i$)(o())})).switchMap((function(){return n.Observable.of((0,i.D_)(!1))}))},handleDashboardWidgetsFilterPanel:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,i=void 0===r?function(){}:r;return e.ofType(o.lG).filter((function(){return(0,f.Wy)(i())})).switchMap((function(){return n.Observable.of(a.gT.apply(void 0,m(R(i()))),(0,s.F)((0,p.um)(i())),(0,u.Xg)("queryPanel","enabled",!0)).concat(n.Observable.race(e.ofType(s.Wm).take(1),e.ofType(u.kM).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.control,r=e.property;return"queryPanel"===t&&(!r||"enabled"===r)})).take(1)).switchMap((function(e){return(e.filterObj?n.Observable.of((0,o.Rz)("filter",e.filterObj)):n.Observable.empty()).merge(n.Observable.of((0,u.Xg)("widgetBuilder","enabled",!0)))}))).takeUntil(e.ofType(E.nk,o.dm).merge(e.ofType(u.kM).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.control,r=e.property;return"widgetBuilder"===t&&0==!r})))).concat(n.Observable.of((0,u.Xg)("queryPanel","enabled",!1)))}))},filterAnonymousUsersForDashboard:function(e,t){return e.ofType(l.c8,l.Nv).filter((function(){return"/dashboard"===(0,y.F)(t.getState())})).switchMap((function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),(0,d.jl)(t.getState())?n.Observable.empty():n.Observable.of((0,i.AN)({status:403}))}))},loadDashboardStream:function(e,t){var r=t.getState,o=void 0===r?function(){}:r;return e.ofType(i.zX).switchMap((function(e){var t=e.id;return(0,b.RX)(t).map((function(e){var t=e.data,r=h(e,g);return(0,i.rR)(r,t)})).let((0,v.hP)((0,i.vM)(!0,"loading"),(0,i.vM)(!1,"loading"),(function(e){var t=window.location.href.match("dashboard-embedded")?"dashboardEmbedded":"dashboard",r=t+".errors.loading.unknownError";return 403===e.status&&(r=t+".errors.loading.pleaseLogin",(0,d.jl)(o())&&(r=t+".errors.loading.dashboardNotAccessible")),404===e.status&&(r=t+".errors.loading.dashboardDoesNotExist"),n.Observable.of((0,c.vU)({title:t+".errors.loading.title",message:r}),(0,i.AN)(T(T({},e),{},{messageId:r})))})))}))},reloadDashboardOnLoginLogout:function(e){return e.ofType(i.zX).switchMap((function(t){var r=t.id;return e.ofType(l.XP,l.Nv).switchMap((function(){return n.Observable.of((0,i.o2)(r)).delay(1e3)})).takeUntil(e.ofType(E.nk))}))},saveDashboard:function(e){return e.ofType(i.aR).exhaustMap((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.resource;return(t.id?(0,b.id)(t):(0,b.SN)(t)).switchMap((function(e){return n.Observable.of((0,i.sA)(e),t.id?(0,i.gE)(!1):(0,i.pB)(!1),t.id?(0,i.o2)(e):(0,E.VF)("/dashboard/".concat(e))).merge(n.Observable.of((0,c.$Z)({id:"DASHBOARD_SAVE_SUCCESS",title:"saveDialog.saveSuccessTitle",message:"saveDialog.saveSuccessMessage"})).delay(t.id?0:1e3))})).let((0,v.hP)((0,i.vM)(!0,"saving"),(0,i.vM)(!1,"saving"))).catch((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.status,r=e.statusText,o=e.data,u=e.message,a=h(e,O);return n.Observable.of((0,i.GD)(t?{status:t,statusText:r,data:o}:u||a),(0,i.vM)(!1,"saving"))}))}))}}},89919:(e,t,r)=>{"use strict";r.d(t,{hP:()=>s});var n=r(84596),o=r.n(n),i=r(89255);function u(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.startWith.apply(e,u(t))},s=function(e,t,r){return function(n){return(r?c(n,o()(e)).catch(r):c(n,o()(e))).concat(i.Observable.from(o()(t)))}}},10960:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>G});var n=r(45697),o=r.n(n),i=r(67294),u=r.n(i),a=r(80628),c=r(33664),s=r(2479),l=r(22222),f=r(41609),d=r.n(f),p=r(57579),y=r(5346),b=r(91380),v=r(82030);const E=(0,s.branch)((function(e){return e.selectionActive}),(0,s.compose)((0,s.withProps)((function(e){var t=e.className;return{className:"".concat(t," selection-active")}})),(0,s.withHandlers)({getWidgetClass:function(e){var t=e.getWidgetClass,r=void 0===t?function(){}:t,n=e.isWidgetSelectable,o=void 0===n?function(){return!0}:n;return function(e){return r(e)?r(e)+(o(e)?void 0:" disabled"):o(e)?void 0:" disabled"}},onWidgetClick:function(e){var t=e.onWidgetSelected,r=void 0===t?function(){}:t,n=e.isWidgetSelectable,o=void 0===n?function(){return!0}:n;return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return o(e)?r.apply(void 0,[e].concat(n)):null}}})));var g=r(64945);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const _=(0,s.compose)(s.pure,(0,s.defaultProps)({breakpoints:{md:480,xxs:0},cols:{md:6,xxs:1},minLayoutWidth:480}),(0,b.ZY)({overrideWidthProvider:!0}),(0,s.withProps)((function(e){var t=e.width;return{width:t<=e.minLayoutWidth?t-18:t,toolsOptions:{showMaximize:!0}}})),(0,s.withProps)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,r=e.height,n=e.maximized,o=e.minLayoutWidth,i=e.cols,u=null!=n&&n.widget?{width:"100%",height:"100%",marginTop:0,bottom:"auto",top:0,left:0,zIndex:99}:{},a=null!=n&&n.widget?{width:t,useDefaultWidthProvider:!1,rowHeight:r-50,breakpoints:{xxs:0},cols:{xxs:1}}:{};return h({className:"on-map",breakpoints:{md:o,xxs:0},cols:i||{md:6,xxs:1},style:h({position:"absolute",zIndex:50},u)},a)})),(0,v.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.widgets,r=void 0===t?[]:t;return 0===r.length}),(function(e){return{glyph:"dashboard",title:e.loading?u().createElement(y.Z,{msgId:"loading"}):u().createElement(y.Z,{msgId:"dashboard.emptyTitle"})}})),(0,s.defaultProps)({isWidgetSelectable:function(){return!0}}),E)(g.Z);var S=r(75859),T=r(67306),w=r(8316),R=r(38842),P=r(1757),A=r(24412),L=r(7691),D=r(88395);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function U(e,t){return U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},U(e,t)}function C(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function W(e){return W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},W(e)}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Y=(0,s.compose)((0,c.connect)((0,l.P1)(T.NB,P.hF,P.nA,P.h9,P.xI,(function(e){return(0,P.YI)(e)}),P.ie,T.P0,T.MZ,T.J,w.KV,R.wk,R.fY,P.Jb,(function(e,t,r,n,o,i,u,a,c,s,l,f,p,y){return{resource:e,loading:c,canEdit:s?!s:e&&!!e.canEdit,layouts:r,dependencies:n,selectionActive:o,editingWidget:i,widgets:d()(y)?t:t.filter((function(e){return e.id===y.widget.id})),groups:u,showGroupColor:a,language:f?l:null,env:p,maximized:y}})),{editWidget:p.uT,updateWidgetProperty:p.Ij,exportCSV:p.sD,exportImage:p.Rb,deleteWidget:p.E9,onWidgetSelected:p.Gn,onLayoutChange:p.c_,toggleMaximize:p.Pt}),(0,s.withProps)((function(){return{style:{height:"100%",overflow:"auto"}}})),(0,s.withHandlers)({isWidgetSelectable:function(e){var t=e.editingWidget;return function(e){return("map"===e.widgetType||"table"===e.widgetType&&("map"!==t.widgetType&&e.layer&&t.layer&&e.layer.name===t.layer.name||"map"===t.widgetType)&&!e.mapSync)&&e.id!==t.id}}}))(_),x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=W(n);if(o){var r=W(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return C(this,e)});function a(){return M(this,a),i.apply(this,arguments)}return t=a,(r=[{key:"render",value:function(){return this.props.enabled?u().createElement(Y,{width:this.props.width,height:this.props.height,rowHeight:this.props.rowHeight,cols:this.props.cols,minLayoutWidth:this.props.minLayoutWidth}):null}}])&&N(t.prototype,r),a}(u().Component);k(x,"propTypes",{enabled:o().bool,rowHeight:o().number,cols:o().object,minLayoutWidth:o().number}),k(x,"defaultProps",{enabled:!0,minLayoutWidth:480});const G={DashboardPlugin:(0,a.Z)(x),reducers:{dashboard:A.Z,widgets:S.Z},epics:F(F({},L.ZP),D.ZP)}},24412:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(55927),o=r(57579),i=r(61868),u=r(84596),a=r.n(u);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{showConnections:!0,services:null,saveServiceLoading:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.BJ:return(0,i.t8)("editor.available",t.available,e);case n._y:case o.wb:case o.Jm:case o.yY:return(0,i.t8)("editing",t.editing,e);case n.vk:return(0,i.t8)("showConnections",t.show,e);case n.uI:return(0,i.t8)("showSaveModal",t.show,(0,i.t8)("saveErrors",void 0,e));case n.mg:return(0,i.t8)("showSaveAsModal",t.show,(0,i.t8)("saveErrors",void 0,e));case n.E9:var r;return s(s({},e),{},{originalData:t.data,resource:t.resource,services:null===(r=t.data)||void 0===r?void 0:r.catalogs});case n.R4:return s(s({},e),{},{originalData:void 0,resource:void 0,mode:"view",services:void 0});case n.SW:return(0,i.t8)("saveErrors",a()(t.error),e);case n.$l:return(0,i.t8)("saveErrors",void 0,e);case n.E5:var u;return s(s({},e),{},{services:e.services||t.services,selectedService:(null===(u=t.service)||void 0===u?void 0:u.key)||""});case n.s6:return(0,i.t8)("services",t.services,e);case n.B_:return s(s({},e),{},{mode:t.mode,isNew:t.isNew,saveServiceLoading:!1});case n.TA:return s(s({},e),{},{saveServiceLoading:t.loading});case n.CF:var c=t.services,l=t.service;l.isNew=!1,l.showAdvancedSettings=!1,delete l.old,c[l.key]=l;var f=l.key;return s(s({},e),{},{services:c,selectedService:f,mode:"view"});case n.js:var d,p,y=t.services,b=t.service;(y[b.key]||y[null===(d=b.old)||void 0===d?void 0:d.key])&&(delete y[b.key]||y[null===(p=b.old)||void 0===p?void 0:p.key]);var v=Object.keys(y)[0]||"";return s(s({},e),{},{services:y,mode:"view",selectedService:v});case n.CP:return(0,i.t8)("loading"===t.name?"loading":"loadFlags.".concat(t.name),t.value,(0,i.t8)("loading",t.value,e));default:return e}}},38842:(e,t,r)=>{"use strict";r.d(t,{wk:()=>f,Yf:()=>d,c3:()=>p,fY:()=>y});var n=r(18721),o=r.n(n),i=r(27361),u=r.n(i),a=r(13311),c=r.n(a),s=r(22222),l=r(8316),f=function(e){return o()(e,"localConfig.localizedLayerStyles")},d=function(e){var t=u()(e,"localConfig.plugins.dashboard",[]),r=c()(t,(function(e){return"DashboardEditor"===e.name}))||{};return u()(r,"cfg.catalog.localizedLayerStyles",!1)},p=function(e){return u()(e,"localConfig.localizedLayerStyles.name","mapstore_language")},y=(0,s.P1)(f,p,l.KV,(function(e,t,r){var n=[];return e&&n.push({name:t,value:r}),n}))},80628:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(67294),o=r.n(n),i=r(55553);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e}function l(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}const y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{handleWidth:!0,handleHeight:!0};return function(r){function n(){return a(this,n),l(this,f(n).apply(this,arguments))}return d(n,r),s(n,[{key:"render",value:function(){return o().createElement(i.Z,t,o().createElement(e,this.props))}}]),n}(n.Component)}}}]);