(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[8681],{34990:(e,t,n)=>{"use strict";n.d(t,{D7:()=>a,mN:()=>s,vb:()=>u,KT:()=>f,QK:()=>p,cc:()=>d,Gx:()=>m,XH:()=>y,lX:()=>O,tP:()=>E,Dq:()=>b,LE:()=>h,SW:()=>g,si:()=>S,i2:()=>v,IY:()=>R,Zf:()=>C,ij:()=>T,Hb:()=>G,Mk:()=>_,c:()=>N,NZ:()=>Y,Cx:()=>w,wb:()=>P,km:()=>j,un:()=>k,Ro:()=>D,jr:()=>A,ZY:()=>I,EQ:()=>B,IH:()=>L,rp:()=>Z,D_:()=>x,zJ:()=>U,wJ:()=>M,OS:()=>V,YP:()=>H,Ct:()=>W,Od:()=>F,y6:()=>q,g5:()=>z,_e:()=>K,DF:()=>X,GD:()=>J,K0:()=>Q,kB:()=>$,Xn:()=>ee,G5:()=>te,Vx:()=>ne,RZ:()=>oe,pB:()=>re,$A:()=>ie,m7:()=>ce,YM:()=>le,o2:()=>ae,ql:()=>se,c0:()=>ue,nL:()=>fe,Fu:()=>pe,WE:()=>de});var o=n(47037),r=n.n(o),i=n(55877),c=n.n(i),l=n(92579),a="GEOSTORY:ADD",s="GEOSTORY:ADD_RESOURCE",u="GEOSTORY:CHANGE_MODE",f="GEOSTORY:CLEAR_SAVE_ERROR",p="GEOSTORY:EDIT_RESOURCE",d="GEOSTORY:EDIT_WEBPAGE",m="GEOSTORY:SCROLLING",y="GEOSTORY:LOAD_GEOSTORY",O="GEOSTORY:LOADING_GEOSTORY",E="GEOSTORY:MOVE",b="GEOSTORY:REMOVE",h="GEOSTORY:SAVE_STORY",g="GEOSTORY:SAVE_ERROR",S="GEOSTORY:STORY_SAVED",v="GEOSTORY:SELECT_CARD",R="GEOSTORY:SET_CONTROL",C="GEOSTORY:SET_RESOURCE",T="GEOSTORY:SET_CURRENT_STORY",G="GEOSTORY:SET_WEBPAGE_URL",_="GEOSTORY:TOGGLE_CARD_PREVIEW",N="GEOSTORY:TOGGLE_SETTINGS_PANEL",Y="GEOSTORY:TOGGLE_SETTING",w="GEOSTORY:TOGGLE_CONTENT_FOCUS",P="GEOSTORY:UPDATE",j="GEOSTORY:UPDATE_SETTING",k="GEOSTORY:UPDATE_CURRENT_PAGE",D="GEOSTORY:REMOVE_RESOURCE",A="GEOSTORY:SET_PENDING_CHANGES",I="GEOSTORY:SET_UPDATE_URL_SCROLL",B="GEOSTORY:UPDATE_MEDIA_EDITOR_SETTINGS",L=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){return e};return{type:a,id:n&&n.id||c()(),path:e,position:t,element:r()(n)&&(0,l.nq)(n,o)||n}},Z=function(e,t,n){return{type:s,id:e,mediaType:t,data:n}},x=function(e){return{type:u,mode:e?l.nl.EDIT:l.nl.VIEW}},U=function(e,t,n){return{type:p,id:e,mediaType:t,data:n}},M=function(e,t){return{type:y,id:e,options:t}},V=function(e){return{type:"GEOSTORY:GEOSTORY_LOADED",id:e}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"loading";return{type:O,value:e,name:t}},W=function(e){return{type:"GEOSTORY:LOAD_GEOSTORY_ERROR",error:e}},F=function(e){return{type:b,path:e}},q=function(e){return{type:g,error:e}},z=function(e,t){return{type:R,control:e,value:t}},K=function(e){return{type:v,card:e}},X=function(e){return{type:C,resource:e}},J=function(e){return{type:S,id:e}},Q=function(e){return{type:T,story:e}},$=function(){return{type:_}},ee=function(e){return{type:Y,option:e}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{type:N,withSave:e}},ne=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"replace";return{type:P,path:e,element:t,mode:n}},oe=function(e){var t=e.sectionId,n=e.columnId;return{type:k,sectionId:t,columnId:n}},re=function(e,t,n){return{type:E,source:e,target:t,position:n}},ie=function(e,t,n,o,r){return{type:w,status:e,target:t,selector:n,hideContent:o,path:r}},ce=function(e,t){return{type:j,prop:e,value:t}},le=function(e){return{type:G,src:e}},ae=function(e){var t=e.path,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GEOSTORY";return{type:d,path:t,owner:n}},se=function(e,t){return{type:D,id:e,mediaType:t}},ue=function(e){return{type:A,value:e}},fe=function(e){return{type:I,value:e}},pe=function(e){return{type:B,mediaEditorSettings:e}},de=function(e){return{type:m,status:e}}},1262:(e,t,n)=>{"use strict";n.d(t,{Z:()=>C});var o=n(27418),r=n.n(o),i=n(45697),c=n.n(i),l=n(24852),a=n.n(l),s=n(80307),u=n.n(s),f=n(30294),p=n(38560),d=n(5346),m=n(7472);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(l,e);var t,n,o,i,c=(o=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(o);if(i){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function l(){var e;O(this,l);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return v(g(e=c.call.apply(c,[this].concat(n))),"setConfirmRef",(function(t){return e.confirm=t,e.confirm})),e}return t=l,(n=[{key:"componentDidMount",value:function(){this.props.focusConfirm&&u().findDOMNode(this.confirm).focus()}},{key:"render",value:function(){return a().createElement(m.Z,{draggable:this.props.draggable,onClickOut:this.props.onClose,id:"confirm-dialog",modal:this.props.modal,style:r()({},this.props.style,{display:this.props.show?"block":"none"})},a().createElement("span",{role:"header"},a().createElement("span",{className:"user-panel-title"},this.props.title),a().createElement("button",{onClick:this.props.onClose,className:"login-panel-close close"},this.props.closeGlyph?a().createElement(f.Glyphicon,{glyph:this.props.closeGlyph}):a().createElement("span",null,"×"))),a().createElement("div",{role:"body"},this.props.children),a().createElement("div",{role:"footer"},a().createElement(f.ButtonGroup,null,a().createElement(p.Z,{ref:this.setConfirmRef,onClick:this.props.onConfirm,disabled:this.props.confirmButtonDisabled,bsStyle:this.props.confirmButtonBSStyle},this.props.confirmButtonContent),a().createElement(p.Z,{onClick:this.props.onClose},this.props.closeText))))}}])&&E(t.prototype,n),l}(a().Component);v(R,"propTypes",{show:c().bool,draggable:c().bool,onClose:c().func,onConfirm:c().func,onSave:c().func,modal:c().bool,closeGlyph:c().string,style:c().object,buttonSize:c().string,inputStyle:c().object,title:c().node,confirmButtonContent:c().node,confirmButtonDisabled:c().bool,closeText:c().node,confirmButtonBSStyle:c().string,focusConfirm:c().bool}),v(R,"defaultProps",{onClose:function(){},onChange:function(){},modal:!0,title:a().createElement(d.Z,{msgId:"confirmTitle"}),closeGlyph:"",confirmButtonBSStyle:"danger",confirmButtonDisabled:!1,confirmButtonContent:a().createElement(d.Z,{msgId:"confirm"})||"Confirm",closeText:a().createElement(d.Z,{msgId:"close"}),includeCloseButton:!0,focusConfirm:!1});const C=R},7472:(e,t,n)=>{"use strict";n.d(t,{Z:()=>T});var o=n(27418),r=n.n(o),i=n(45697),c=n.n(i),l=n(24852),a=n.n(l),s=n(85294),u=n.n(s),f=n(72986),p=n.n(f),d=n(5346);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){R(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?S(e):t}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(l,e);var t,n,o,i,c=(o=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(o);if(i){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function l(){var e;E(this,l);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return R(S(e=c.call.apply(c,[this].concat(n))),"renderLoading",(function(){return e.props.maskLoading?a().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},a().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},a().createElement(d.Z,{msgId:"loading"}),a().createElement(p(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),R(S(e),"renderRole",(function(t){return a().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),R(S(e),"hasRole",(function(t){return a().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),R(S(e),"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return t=l,(n=[{key:"render",value:function(){var e=this,t=a().createElement("div",{id:this.props.id,style:O({zIndex:3},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},a().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),a().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?a().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):a().createElement("span",null)),n=this.props.draggable?a().createElement(u(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,o=r()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?a().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:o,className:"fade in modal "+this.props.containerClassName,role:"dialog"},n):n}}])&&b(t.prototype,n),l}(a().Component);R(C,"propTypes",{id:c().string.isRequired,style:c().object,backgroundStyle:c().object,className:c().string,maskLoading:c().bool,containerClassName:c().string,headerClassName:c().string,bodyClassName:c().string,footerClassName:c().string,onClickOut:c().func,modal:c().bool,start:c().object,draggable:c().bool,bounds:c().oneOfType([c().string,c().object])}),R(C,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const T=C},99534:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(61365),r=n(56936);const i=(0,o.Z)(r.h_)},12122:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var o=n(24852),r=n.n(o),i=n(1262),c=n(99534),l=n(5346),a=n(67076),s=["confirming","confirmYes","confirmNo","confirmTitle","confirmContent","confirmModal","draggable","onConfirm","setConfirming"];var u=(0,a.compose)((0,a.withProps)((function(e){var t=e.setConfirming;return{onClose:function(){return t(!1)}}})))((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.confirmYes,n=void 0===t?r().createElement(l.Z,{msgId:"yes"}):t,o=e.confirmNo,a=void 0===o?r().createElement(l.Z,{msgId:"no"}):o,s=e.confirmTitle,u=void 0===s?r().createElement(l.Z,{msgId:"confirm"}):s,f=e.confirmContent,p=e.confirmButtonBSStyle,d=void 0===p?"primary":p,m=e.show,y=void 0!==m&&m,O=e.confirmModal,E=void 0===O||O,b=e.draggable,h=void 0!==b&&b,g=e.onClose,S=void 0===g?function(){}:g,v=e.onConfirm,R=void 0===v?function(){}:v;return y?r().createElement(c.Z,null,r().createElement("div",{className:"with-confirm-modal"},r().createElement(i.Z,{draggable:h,show:y,modal:E,onClose:S,onConfirm:R,title:u,confirmButtonContent:n,closeText:a,confirmButtonBSStyle:d,closeGlyph:"1-close"},f))):null})),f=function(e){return function(t){var n=t.confirming,o=t.confirmYes,i=t.confirmNo,c=t.confirmTitle,l=t.confirmContent,a=t.confirmModal,f=t.draggable,p=t.onConfirm,d=t.setConfirming,m=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(t,s);return r().createElement(r().Fragment,null,r().createElement(u,{show:n,setConfirming:d,confirmYes:o,confirmNo:i,confirmTitle:c,confirmContent:l,confirmModal:a,draggable:f,onConfirm:p}),r().createElement(e,m))}};const p=function(e){return(0,a.compose)((0,a.withState)("confirming","setConfirming",!1),(0,a.withHandlers)({onClick:function(e){var t=e.setConfirming,n=void 0===t?function(){}:t,o=e.onClick,r=void 0===o?function(){}:o,i=e.confirmPredicate,c=void 0===i||i;return function(){c?n(!0):r.apply(void 0,arguments)}},onConfirm:function(e){var t=e.onClick,n=void 0===t?function(){}:t,o=e.setConfirming,r=void 0===o?function(){}:o;return function(){r(!1),n.apply(void 0,arguments)}}}),f)(e)}}}]);