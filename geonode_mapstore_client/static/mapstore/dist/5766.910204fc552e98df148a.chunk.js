(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[5766],{33528:(t,e,n)=>{"use strict";n.d(e,{gJ:()=>E,Oj:()=>r,jp:()=>u,CM:()=>o,DU:()=>R,aO:()=>T,v6:()=>A,K8:()=>_,IN:()=>i,zh:()=>I,AH:()=>p,Ub:()=>c,_9:()=>y,JB:()=>O,oh:()=>a,AY:()=>f,yi:()=>S,SW:()=>D,Hk:()=>G,iQ:()=>F,dY:()=>N,$:()=>s,_u:()=>U,gG:()=>L,DI:()=>d,dZ:()=>P,qw:()=>C,f$:()=>l,bZ:()=>M,$O:()=>Y,sF:()=>m,Gk:()=>v,vO:()=>H,ut:()=>g,MK:()=>V,VV:()=>h,B8:()=>Z,VM:()=>W,a3:()=>b,Xp:()=>q,DA:()=>K,sK:()=>w,yA:()=>X,r:()=>x,iB:()=>z,EH:()=>B,Yd:()=>k,Hg:()=>J,Lz:()=>Q,ye:()=>$,Jb:()=>j,d:()=>tt,fT:()=>et,Ib:()=>nt,Pl:()=>Et,UB:()=>rt,Uh:()=>ut,QT:()=>ot,oL:()=>Rt,Ap:()=>Tt,KD:()=>At,Z_:()=>_t,Vw:()=>it,sY:()=>It,kA:()=>pt,gr:()=>ct,pX:()=>yt,F5:()=>Ot,MO:()=>at,dq:()=>ft,DY:()=>St,oO:()=>Dt,uF:()=>Gt,a8:()=>Ft,Pv:()=>Nt,an:()=>st,lg:()=>Ut,nY:()=>Lt,nG:()=>dt,lx:()=>Pt,$S:()=>Ct,gc:()=>lt,Uz:()=>Mt,fO:()=>Yt,$E:()=>mt,cE:()=>vt,JK:()=>Ht,YV:()=>gt,t9:()=>Vt,YG:()=>ht,HT:()=>Zt,MY:()=>Wt,ve:()=>bt,hB:()=>qt,Ox:()=>Kt,zd:()=>wt,aT:()=>Xt,VH:()=>xt,Yb:()=>zt,Jr:()=>Bt,pP:()=>kt});var E="FEATUREGRID:SET_UP",r="FEATUREGRID:SELECT_FEATURES",u="FEATUREGRID:DESELECT_FEATURES",o="FEATUREGRID:CLEAR_SELECTION",R="FEATUREGRID:SET_SELECTION_OPTIONS",T="FEATUREGRID:TOGGLE_MODE",A="FEATUREGRID:TOGGLE_FEATURES_SELECTION",_="FEATUREGRID:FEATURES_MODIFIED",i="FEATUREGRID:NEW_FEATURE",I="FEATUREGRID:SAVE_CHANGES",p="FEATUREGRID:SAVING",c="FEATUREGRID:START_EDITING_FEATURE",y="FEATUREGRID:START_DRAWING_FEATURE",O="FEATUREGRID:DELETE_GEOMETRY",a="FEATUREGRID:DELETE_GEOMETRY_FEATURE",f="FEATUREGRID:SAVE_SUCCESS",S="FEATUREGRID:CLEAR_CHANGES",D="FEATUREGRID:SAVE_ERROR",G="FEATUREGRID:DELETE_SELECTED_FEATURES",F="SET_FEATURES",N="FEATUREGRID:SORT_BY",s="FEATUREGRID:SET_LAYER",U="QUERY:UPDATE_FILTER",L="FEATUREGRID:CHANGE_PAGE",d="FEATUREGRID:GEOMETRY_CHANGED",P="DOCK_SIZE_FEATURES",C="FEATUREGRID:TOGGLE_TOOL",l="FEATUREGRID:CUSTOMIZE_ATTRIBUTE",M="ASK_CLOSE_FEATURE_GRID_CONFIRM",Y="FEATUREGRID:OPEN_GRID",m="FEATUREGRID:CLOSE_GRID",v="FEATUREGRID:CLEAR_CHANGES_CONFIRMED",H="FEATUREGRID:FEATURE_GRID_CLOSE_CONFIRMED",g="FEATUREGRID:SET_PERMISSION",V="FEATUREGRID:DISABLE_TOOLBAR",h="FEATUREGRID:ACTIVATE_TEMPORARY_CHANGES",Z="FEATUREGRID:DEACTIVATE_GEOMETRY_FILTER",W="FEATUREGRID:ADVANCED_SEARCH",b="FEATUREGRID:ZOOM_ALL",q="FEATUREGRID:INIT_PLUGIN",K="FEATUREGRID:SIZE_CHANGE",w="FEATUREGRID:TOGGLE_SHOW_AGAIN_FLAG",X="FEATUREGRID:HIDE_SYNC_POPOVER",x="FEATUREGRID:UPDATE_EDITORS_OPTIONS",z="FEATUREGRID:LAUNCH_UPDATE_FILTER_FUNC",B={EDIT:"EDIT",VIEW:"VIEW"},k="FEATUREGRID:START_SYNC_WMS",J="FEATUREGRID:STOP_SYNC_WMS",Q="STORE_ADVANCED_SEARCH_FILTER",$="LOAD_MORE_FEATURES",j="FEATUREGRID:QUERY_RESULT",tt="FEATUREGRID:SET_TIME_SYNC",et="FEATUREGRID:SET_PAGINATION";function nt(){return{type:w}}function Et(){return{type:X}}function rt(t,e){return{type:j,features:t,pages:e}}function ut(t){return{type:Q,filterObj:t}}function ot(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:q,options:t}}function Rt(){return{type:v}}function Tt(){return{type:H}}function At(t,e){return{type:r,features:t,append:e}}function _t(t){return{type:E,options:t}}function it(t){return{type:d,features:t}}function It(){return{type:c}}function pt(){return{type:y}}function ct(t){return{type:u,features:t}}function yt(){return{type:O}}function Ot(t){return{type:a,features:t}}function at(){return{type:o}}function ft(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.multiselect,n=void 0!==e&&e;return{type:R,multiselect:n}}function St(t,e){return{type:N,sortBy:t,sortOrder:e}}function Dt(t,e){return{type:L,page:t,size:e}}function Gt(t){return{type:s,id:t}}function Ft(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{type:U,update:t,append:e}}function Nt(t,e){return{type:C,tool:t,value:e}}function st(t,e,n){return{type:l,name:t,key:e,value:n}}function Ut(){return{type:T,mode:B.EDIT}}function Lt(){return{type:T,mode:B.VIEW}}function dt(t,e){return{type:_,features:t,updated:e}}function Pt(t){return{type:i,features:t}}function Ct(){return{type:I}}function lt(){return{type:f}}function Mt(){return{type:G}}function Yt(){return{type:p}}function mt(){return{type:S}}function vt(){return{type:D}}function Ht(){return{type:M}}function gt(){return{type:m}}function Vt(){return{type:Y}}function ht(t){return{type:V,disabled:t}}function Zt(t){return{type:g,permission:t}}function Wt(){return{type:W}}function bt(){return{type:b}}function qt(){return{type:k}}function Kt(t,e){return{type:K,size:t,dockProps:e}}var wt=function(t){return{type:$,pages:t}},Xt=function(t){return{type:h,activated:t}},xt=function(t){return{type:Z,deactivated:t}},zt=function(t){return{type:tt,value:t}},Bt=function(t){return{type:et,size:t}},kt=function(t){return{type:z,updateFilterAction:t}}},80416:(t,e,n)=>{"use strict";n.d(e,{yS:()=>E,Zz:()=>r,ms:()=>u,ih:()=>o,OX:()=>R,sb:()=>T,K$:()=>A,k7:()=>_,cX:()=>i,x9:()=>I,vs:()=>p,oE:()=>c,Po:()=>y,qv:()=>O,cI:()=>a,g6:()=>f,I4:()=>S,l$:()=>D,Xv:()=>G,k3:()=>F,CQ:()=>N,R8:()=>s,HN:()=>U,sH:()=>L,c7:()=>d,_7:()=>P,eF:()=>C,O6:()=>l,ED:()=>M,RP:()=>Y,sF:()=>m,VP:()=>v,He:()=>H,vO:()=>g,WO:()=>V,bh:()=>h,pV:()=>Z,MK:()=>W,ZF:()=>b,tV:()=>q,Dv:()=>K,Yz:()=>w,kI:()=>X,XG:()=>x,A4:()=>z,Rp:()=>B,ct:()=>k,oh:()=>J,$h:()=>Q,ud:()=>$,Qr:()=>j,LR:()=>tt,nN:()=>et,UG:()=>nt,F5:()=>Et,c9:()=>rt,Jh:()=>ut,Xy:()=>ot});var E="CHANGE_LAYER_PROPERTIES",r="LAYERS:CHANGE_LAYER_PARAMS",u="CHANGE_GROUP_PROPERTIES",o="TOGGLE_NODE",R="SORT_NODE",T="REMOVE_NODE",A="UPDATE_NODE",_="MOVE_NODE",i="LAYER_LOADING",I="LAYER_LOAD",p="LAYER_ERROR",c="ADD_LAYER",y="ADD_GROUP",O="REMOVE_LAYER",a="SHOW_SETTINGS",f="HIDE_SETTINGS",S="UPDATE_SETTINGS",D="REFRESH_LAYERS",G="LAYERS:UPDATE_LAYERS_DIMENSION",F="LAYERS_REFRESHED",N="LAYERS_REFRESH_ERROR",s="LAYERS:BROWSE_DATA",U="LAYERS:DOWNLOAD",L="LAYERS:CLEAR_LAYERS",d="LAYERS:SELECT_NODE",P="LAYERS:FILTER_LAYERS",C="LAYERS:SHOW_LAYER_METADATA",l="LAYERS:HIDE_LAYER_METADATA",M="LAYERS:UPDATE_SETTINGS_PARAMS";function Y(t,e,n){return{type:a,node:t,nodeType:e,options:n}}function m(){return{type:f}}function v(t){return{type:S,options:t}}function H(t,e){return{type:E,newProperties:e,layer:t}}function g(t,e){return{type:r,layer:t,params:e}}function V(t,e){return{type:u,newProperties:e,group:t}}function h(t,e,n){return{type:o,node:t,nodeType:e,status:!n}}function Z(t){return{type:"CONTEXT_NODE",node:t}}function W(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:R,node:t,order:e,sortLayers:n}}function b(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{type:T,node:t,nodeType:e,removeEmpty:n}}function q(t,e,n){return{type:A,node:t,nodeType:e,options:n}}function K(t,e,n){return{type:_,node:t,groupId:e,index:n}}function w(t){return{type:i,layerId:t}}function X(t,e){return{type:I,layerId:t,error:e}}function x(t,e,n){return{type:p,layerId:t,tilesCount:e,tilesErrorCount:n}}function z(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return{type:c,layer:t,foreground:e}}function B(t,e,n){return{type:y,group:t,parent:e,options:n}}function k(t,e){return{type:E,layer:t,newProperties:{_v_:e||(new Date).getTime()}}}function J(t){return{type:F,layers:t}}function Q(t,e){return{type:N,layers:t,error:e}}function $(t,e,n,E){return{type:G,dimension:t,value:e,options:n,layers:E}}function j(t){return{type:s,layer:t}}function tt(t){return{type:U,layer:t}}function et(){return{type:L}}function nt(t,e,n){return{type:d,id:t,nodeType:e,ctrlKey:n}}function Et(t){return{type:P,text:t}}function rt(t,e){return{type:C,metadataRecord:t,maskLoading:e}}function ut(){return{type:l}}function ot(t,e){return{type:M,newParams:t,update:e}}},1550:(t,e,n)=>{"use strict";n.d(e,{pP:()=>r,TR:()=>u,N7:()=>o,mq:()=>R,uv:()=>T,Qy:()=>A,IL:()=>_,Li:()=>i,OW:()=>I,ZO:()=>p,Um:()=>c,TF:()=>y,Ls:()=>O,Ec:()=>a,Eu:()=>f,JJ:()=>S,nZ:()=>D,YD:()=>G,GI:()=>F,Jb:()=>N,Uh:()=>s,LP:()=>U,xy:()=>L,o6:()=>d,FP:()=>P,Mo:()=>C,sO:()=>l,Px:()=>M,hd:()=>Y,BV:()=>m,SO:()=>v,H0:()=>H,$X:()=>g,ou:()=>V,NE:()=>h});var E=n(97395),r="CHANGE_MAP_VIEW",u="CLICK_ON_MAP",o="CHANGE_MOUSE_POINTER",R="CHANGE_ZOOM_LVL",T="PAN_TO",A="ZOOM_TO_EXTENT",_="ZOOM_TO_POINT",i="CHANGE_MAP_CRS",I="CHANGE_MAP_SCALES",p="CHANGE_MAP_STYLE",c="CHANGE_ROTATION",y="CREATION_ERROR_LAYER",O="UPDATE_VERSION",a="INIT_MAP",f="RESIZE_MAP",S="CHANGE_MAP_LIMITS",D="SET_MAP_RESOLUTIONS",G="REGISTER_EVENT_LISTENER",F="UNREGISTER_EVENT_LISTENER",N="MOUSE_MOVE",s="MOUSE_OUT";function U(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{family:""};return(0,E.vU)({title:"warning",message:"map.errorLoadingFont",values:t,position:"tc",autoDismiss:10})}function L(t,e,n){return{type:_,pos:t,zoom:e,crs:n}}function d(t,e,n,E,u,o,R,T){return{type:r,center:t,zoom:e,bbox:n,size:E,mapStateSource:u,projection:o,viewerOptions:R,resolution:T}}function P(t,e){return{type:u,point:t,layer:e}}function C(t){return{type:o,pointer:t}}function l(t,e){return{type:R,zoom:t,mapStateSource:e}}function M(t,e,n,E){return{type:A,extent:t,crs:e,maxZoom:n,options:E}}function Y(t,e){return{type:p,style:t,mapStateSource:e}}function m(t){var e=t.restrictedExtent,n=t.crs,E=t.minZoom;return{type:S,restrictedExtent:e,crs:n,minZoom:E}}function v(t){return{type:D,resolutions:t}}var H=function(t,e){return{type:G,eventName:t,toolName:e}},g=function(t,e){return{type:F,eventName:t,toolName:e}},V=function(t){return{type:N,position:t}},h=function(){return{type:s}}},21914:(t,e,n)=>{"use strict";n.d(e,{XL:()=>r,km:()=>u,Ih:()=>o,Xw:()=>R,Pn:()=>T,DZ:()=>A,e8:()=>_,E0:()=>i,F9:()=>I,X_:()=>p,pb:()=>c,qb:()=>y,Re:()=>O,ih:()=>a,xy:()=>f,jL:()=>S,oz:()=>D,ph:()=>G,lF:()=>F,gG:()=>N,cb:()=>s,GI:()=>U,B1:()=>L,fv:()=>d,gc:()=>P,zX:()=>C,ZF:()=>l,Zb:()=>M,Fm:()=>Y,sV:()=>m,Mn:()=>v,LU:()=>H,XP:()=>g,WU:()=>V,JB:()=>h,g:()=>Z,ws:()=>W,HP:()=>b,aN:()=>q,Pg:()=>w,u0:()=>X,TM:()=>x,PM:()=>z,lK:()=>B,sv:()=>k,MO:()=>J,oO:()=>Q,Mc:()=>$,Zw:()=>j,RA:()=>tt,am:()=>et,ZM:()=>nt,wm:()=>Et,Y$:()=>rt});var E=n(47310),r="LOAD_FEATURE_INFO",u="ERROR_FEATURE_INFO",o="EXCEPTIONS_FEATURE_INFO",R="CHANGE_MAPINFO_STATE",T="NEW_MAPINFO_REQUEST",A="PURGE_MAPINFO_RESULTS",_="CHANGE_MAPINFO_FORMAT",i="SHOW_MAPINFO_MARKER",I="HIDE_MAPINFO_MARKER",p="SHOW_REVERSE_GEOCODE",c="HIDE_REVERSE_GEOCODE",y="GET_VECTOR_INFO",O="NO_QUERYABLE_LAYERS",a="CLEAR_WARNING",f="FEATURE_INFO_CLICK",S="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",D="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",G="TOGGLE_MAPINFO_STATE",F="UPDATE_CENTER_TO_MARKER",N="IDENTIFY:CHANGE_PAGE",s="IDENTIFY:CLOSE_IDENTIFY",U="IDENTIFY:CHANGE_FORMAT",L="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",d="IDENTIFY:EDIT_LAYER_FEATURES",P="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",C="IDENTIFY:SET_MAP_TRIGGER",l="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",M="IDENTIFY:SET_SHOW_IN_MAP_POPUP";function Y(t,e,n,E,u){return{type:r,data:e,reqId:t,requestParams:n,layerMetadata:E,layer:u}}function m(t,e,n,E){return{type:u,error:e,reqId:t,requestParams:n,layerMetadata:E}}function v(t,e,n,E){return{type:o,reqId:t,exceptions:e,requestParams:n,layerMetadata:E}}function H(){return{type:O}}function g(){return{type:a}}function V(t,e){return{type:T,reqId:t,request:e}}function h(t,e,n,E){return{type:y,layer:t,request:e,metadata:n,queryableLayers:E}}function Z(){return{type:A}}function W(t){return{type:_,infoFormat:t}}function b(){return{type:i}}function q(){return{type:I}}function K(t){return{type:p,reverseGeocodeData:t.data}}function w(t){return function(e){E.Z.reverseGeocode(t).then((function(t){e(K(t))})).catch((function(t){e(K(t))}))}}function X(){return{type:c}}function x(){return{type:G}}function z(t){return{type:F,status:t}}function B(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],E=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:f,point:t,layer:e,filterNameList:n,overrideParams:E,itemId:r}}function k(t){return{type:S,point:t}}function J(t){return{type:D,enabled:t}}function Q(t){return{type:N,index:t}}var $=function(){return{type:s}},j=function(t){return{type:U,format:t}},tt=function(t){return{type:L,showCoordinateEditor:t}},et=function(t){return{type:d,layer:t}},nt=function(t){return{type:P,query:t}},Et=function(t){return{type:C,trigger:t}},rt=function(t){return{type:M,value:t}}},47310:(t,e,n)=>{"use strict";n.d(e,{Z:()=>_});var E=n(75875),r=n.n(E),u=n(72500),o=n.n(u),R=n(27418),T=n.n(R),A={format:"json",bounded:0,polygon_geojson:1,priority:5};const _={geocode:function(t,e){var n=T()({q:t},A,e||{}),E=o().format({protocol:"https",host:"nominatim.openstreetmap.org",query:n});return r().get(E)},reverseGeocode:function(t,e){var n=T()({lat:t.lat,lon:t.lng},e||{},A),E=o().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:n});return r().get(E)}}}}]);