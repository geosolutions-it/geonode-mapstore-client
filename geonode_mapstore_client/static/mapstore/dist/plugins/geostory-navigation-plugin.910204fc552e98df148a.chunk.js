(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[8710],{34990:(e,t,n)=>{"use strict";n.d(t,{D7:()=>l,mN:()=>s,vb:()=>u,KT:()=>d,QK:()=>f,cc:()=>p,Gx:()=>m,XH:()=>y,lX:()=>v,tP:()=>g,Dq:()=>h,LE:()=>b,SW:()=>O,si:()=>E,i2:()=>S,IY:()=>C,Zf:()=>w,ij:()=>T,Hb:()=>R,Mk:()=>P,c:()=>j,NZ:()=>N,Cx:()=>I,wb:()=>G,km:()=>k,un:()=>_,Ro:()=>D,jr:()=>x,ZY:()=>A,EQ:()=>Y,IH:()=>z,rp:()=>L,D_:()=>U,zJ:()=>M,wJ:()=>Z,OS:()=>B,YP:()=>F,Ct:()=>H,Od:()=>V,y6:()=>q,g5:()=>K,_e:()=>W,DF:()=>Q,GD:()=>$,K0:()=>X,kB:()=>J,Xn:()=>ee,G5:()=>te,Vx:()=>ne,RZ:()=>re,pB:()=>oe,$A:()=>ae,m7:()=>ie,YM:()=>ce,o2:()=>le,ql:()=>se,c0:()=>ue,nL:()=>de,Fu:()=>fe,WE:()=>pe});var r=n(47037),o=n.n(r),a=n(55877),i=n.n(a),c=n(92579),l="GEOSTORY:ADD",s="GEOSTORY:ADD_RESOURCE",u="GEOSTORY:CHANGE_MODE",d="GEOSTORY:CLEAR_SAVE_ERROR",f="GEOSTORY:EDIT_RESOURCE",p="GEOSTORY:EDIT_WEBPAGE",m="GEOSTORY:SCROLLING",y="GEOSTORY:LOAD_GEOSTORY",v="GEOSTORY:LOADING_GEOSTORY",g="GEOSTORY:MOVE",h="GEOSTORY:REMOVE",b="GEOSTORY:SAVE_STORY",O="GEOSTORY:SAVE_ERROR",E="GEOSTORY:STORY_SAVED",S="GEOSTORY:SELECT_CARD",C="GEOSTORY:SET_CONTROL",w="GEOSTORY:SET_RESOURCE",T="GEOSTORY:SET_CURRENT_STORY",R="GEOSTORY:SET_WEBPAGE_URL",P="GEOSTORY:TOGGLE_CARD_PREVIEW",j="GEOSTORY:TOGGLE_SETTINGS_PANEL",N="GEOSTORY:TOGGLE_SETTING",I="GEOSTORY:TOGGLE_CONTENT_FOCUS",G="GEOSTORY:UPDATE",k="GEOSTORY:UPDATE_SETTING",_="GEOSTORY:UPDATE_CURRENT_PAGE",D="GEOSTORY:REMOVE_RESOURCE",x="GEOSTORY:SET_PENDING_CHANGES",A="GEOSTORY:SET_UPDATE_URL_SCROLL",Y="GEOSTORY:UPDATE_MEDIA_EDITOR_SETTINGS",z=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){return e};return{type:l,id:n&&n.id||i()(),path:e,position:t,element:o()(n)&&(0,c.nq)(n,r)||n}},L=function(e,t,n){return{type:s,id:e,mediaType:t,data:n}},U=function(e){return{type:u,mode:e?c.nl.EDIT:c.nl.VIEW}},M=function(e,t,n){return{type:f,id:e,mediaType:t,data:n}},Z=function(e,t){return{type:y,id:e,options:t}},B=function(e){return{type:"GEOSTORY:GEOSTORY_LOADED",id:e}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"loading";return{type:v,value:e,name:t}},H=function(e){return{type:"GEOSTORY:LOAD_GEOSTORY_ERROR",error:e}},V=function(e){return{type:h,path:e}},q=function(e){return{type:O,error:e}},K=function(e,t){return{type:C,control:e,value:t}},W=function(e){return{type:S,card:e}},Q=function(e){return{type:w,resource:e}},$=function(e){return{type:E,id:e}},X=function(e){return{type:T,story:e}},J=function(){return{type:P}},ee=function(e){return{type:N,option:e}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{type:j,withSave:e}},ne=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"replace";return{type:G,path:e,element:t,mode:n}},re=function(e){var t=e.sectionId,n=e.columnId;return{type:_,sectionId:t,columnId:n}},oe=function(e,t,n){return{type:g,source:e,target:t,position:n}},ae=function(e,t,n,r,o){return{type:I,status:e,target:t,selector:n,hideContent:r,path:o}},ie=function(e,t){return{type:k,prop:e,value:t}},ce=function(e){return{type:R,src:e}},le=function(e){var t=e.path,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GEOSTORY";return{type:p,path:t,owner:n}},se=function(e,t){return{type:D,id:e,mediaType:t}},ue=function(e){return{type:x,value:e}},de=function(e){return{type:A,value:e}},fe=function(e){return{type:Y,mediaEditorSettings:e}},pe=function(e){return{type:m,status:e}}},7472:(e,t,n)=>{"use strict";n.d(t,{Z:()=>T});var r=n(27418),o=n.n(r),a=n(45697),i=n.n(a),c=n(24852),l=n.n(c),s=n(85294),u=n.n(s),d=n(72986),f=n.n(d),p=n(5346);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?E(e):t}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(c,e);var t,n,r,a,i=(r=c,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(a){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function c(){var e;g(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return C(E(e=i.call.apply(i,[this].concat(n))),"renderLoading",(function(){return e.props.maskLoading?l().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},l().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},l().createElement(p.Z,{msgId:"loading"}),l().createElement(f(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),C(E(e),"renderRole",(function(t){return l().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),C(E(e),"hasRole",(function(t){return l().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),C(E(e),"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return t=c,(n=[{key:"render",value:function(){var e=this,t=l().createElement("div",{id:this.props.id,style:v({zIndex:3},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},l().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),l().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?l().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):l().createElement("span",null)),n=this.props.draggable?l().createElement(u(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,r=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?l().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:r,className:"fade in modal "+this.props.containerClassName,role:"dialog"},n):n}}])&&h(t.prototype,n),c}(l().Component);C(w,"propTypes",{id:i().string.isRequired,style:i().object,backgroundStyle:i().object,className:i().string,maskLoading:i().bool,containerClassName:i().string,headerClassName:i().string,bodyClassName:i().string,footerClassName:i().string,onClickOut:i().func,modal:i().bool,start:i().object,draggable:i().bool,bounds:i().oneOfType([i().string,i().object])}),C(w,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const T=w},75480:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(24852),o=n.n(r);const a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.style,n=void 0===t?{display:"inline-block"}:t;return o().createElement("div",{style:n,className:"mapstore-inline-loader"})}},94745:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(24852),o=n.n(r),a=n(30294),i=n(7472),c=n(80717),l=n(67076),s=n(19081),u=n.n(s),d=n(75480),f={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},p={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const m=(0,l.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,n=void 0!==t&&t,r=e.loading,l=e.loadingText,s=e.onClose,m=void 0===s?function(){}:s,y=e.title,v=void 0===y?"":y,g=e.clickOutEnabled,h=void 0===g||g,b=e.showClose,O=void 0===b||b,E=e.disabledClose,S=void 0!==E&&E,C=e.showFullscreen,w=void 0!==C&&C,T=e.fullscreenType,R=void 0===T?"full":T,P=e.buttons,j=void 0===P?[]:P,N=e.size,I=void 0===N?"":N,G=e.bodyClassName,k=void 0===G?"":G,_=e.children,D=e.draggable,x=void 0!==D&&D,A=e.fullscreenState,Y=e.onFullscreen,z=e.fade,L=void 0!==z&&z,U=e.fitContent,M=e.modalClassName,Z=void 0===M?"":M,B=e.dialogClassName,F=void 0===B?"":B,H=e.enableFooter,V=void 0===H||H,q=f[I]||"",K=w&&"expanded"===A&&p.className[R]||"",W=n?o().createElement("div",{className:"modal-fixed ".concat(Z," ")+(x?"ms-draggable":"")},o().createElement(i.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:h?m:function(){},containerClassName:"ms-resizable-modal",draggable:x,modal:!0,className:"modal-dialog modal-content"+q+K+F+(U?" ms-fit-content":"")},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},v),w&&p.className[R]&&o().createElement(a.Glyphicon,{className:"ms-header-btn",onClick:function(){return Y("expanded"===A?"collapsed":"expanded")},glyph:p.glyph[A][R]}),O&&m&&o().createElement(a.Glyphicon,{glyph:"1-close",className:"ms-header-btn",onClick:m,disabled:S}))),o().createElement("div",{role:"body",className:k},_),V&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},r?o().createElement(d.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},r?l:null),o().createElement(c.Z,{buttons:j})))):null;return L?o().createElement(u(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},W):W}))},26538:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>$});var r=n(24852),o=n.n(r),a=n(71703),i=n(22222),c=n(22843),l=n(92579),s=n(66113),u=n(24684),d=n(66190),f=n(80717),p=n(30294),m=n(23279),y=n.n(m),v=n(45338),g=n(80628),h=n(38560);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var T=function(e){var t=e.tabindex,n=e.text,r=e.selected,a=e.style;return o().createElement(h.Z,{tabindex:t,className:"".concat(r?"active":"btn-tray"," btn-xs btn-default"),style:a},n)};const R=(0,g.Z)((function(e){var t=e.currentPage,n=e.items,a=e.scrollTo,i=void 0===a?function(){}:a,c=e.width,l=e.height,s=e.deltaSwipeSize,u=void 0===s?200:s,d=e.transition,f=void 0===d?300:d,m=e.updateTimeDebounceTime,g=void 0===m?500:m,O=e.getItemStyle,w=void 0===O?function(){return{}}:O,R=function(e){var t=e.direction,n=void 0===t?"horizontal":t,o=e.deltaScroll,a=e.width,i=e.height,c=e.transition,l=C((0,r.useState)(0),2),s=l[0],u=l[1],d=C((0,r.useState)(0),2),f=d[0],p=d[1],m=(0,r.useRef)({x:0,y:0}),y=C((0,r.useState)(!1),2),g=y[0],h=y[1],b=C((0,r.useState)("start"),2),O=b[0],w=b[1],T=C((0,r.useState)(),2),R=T[0],P=T[1],j=(0,r.useRef)(),N=(0,r.useRef)({});function I(e,t){P("move:start");var r=j.current,o=r.parentNode,a=r.getBoundingClientRect(),i=o.getBoundingClientRect();if("horizontal"===n){var l=e+a.width;e<0&&l>i.width?(u(e),m.current.x=e,w("center")):e>=0?(u(0),m.current.x=0,w("start")):l<=i.width&&(u(i.width-a.width),m.current.x=i.width-a.width,w("end"))}if("vertical"===n){var s=t+a.height;t<0&&s>i.height?(p(t),m.current.y=t,w("center")):t>=0?(p(0),m.current.y=0,w("start")):s<=i.height&&(p(i.height-a.height),m.current.y=i.height-a.height,w("end"))}setTimeout((function(){P("move:end")}),c)}function G(){var e=j.current,t=e.parentNode,r=e.getBoundingClientRect(),o=t.getBoundingClientRect();return!("horizontal"===n&&o.width>=r.width||"vertical"===n&&o.height>=r.height)}(0,r.useEffect)((function(){function e(e){var t=G();return h(G()),t?I(m.current.x-(e.deltaY>0?o:-o),m.current.y-(e.deltaY>0?o:-o)):null}var t=G();h(t);var n=j.current.parentNode;return t&&I(m.current.x,m.current.y),t&&n&&n.addEventListener&&n.addEventListener("wheel",e),function(){t&&n&&n.removeEventListener&&n.removeEventListener("wheel",e)}}),[a,i]);var k=(0,v.QS)({onSwiping:function(e){e.event.stopPropagation();var t=G();return h(G()),t?I(s-e.deltaX*e.velocity,f-e.deltaY*e.velocity):null},trackTouch:!0,trackMouse:!0});function _(e,t){N.current=E(E({},N.current),{},S({},e,t))}function D(e){var t=N.current[e];if(t){var r=j.current,o=(r&&r.parentNode).getBoundingClientRect(),a=t.getBoundingClientRect();if("horizontal"===n){var i=o.width,c=o.left,l=a.width,s=a.left,u=c+i,d=s+l;return c<=s&&u>=s||c<=d&&u>=d}}return!1}return{status:R,canSwipe:g,isStartControlActive:g&&("end"===O||"center"===O),isEndControlActive:g&&("start"===O||"center"===O),positionLabel:O,coordinates:{x:s,y:f},containerPropsHandlers:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).style,t=void 0===e?{}:e;return E(E({},k),{},{style:E({position:"relative",overflow:"hidden",width:"100%",height:"100%"},t)})},contentPropsHandlers:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).style,t=void 0===e?{}:e;return{ref:j,style:E(E(E(E({position:"absolute",display:"flex"},c&&{transition:"transform ".concat(c,"ms ease 0s")}),{},{flexDirection:"horizontal"===n?"row":"column"},g&&"horizontal"===n&&{transform:"translateX(".concat(s,"px)")}),g&&"vertical"===n&&{transform:"translateY(".concat(f,"px)")}),t)}},itemPropsHandlers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.onClick;return E({key:t,ref:function(e){return e&&_(t,e)}},n?{onClick:n,tabindex:D(t)?0:-1,onKeyDown:function(e){"Enter"===e.key&&n()}}:{tabindex:-1})},updateCoordinates:I,moveItemInViewById:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).margin,r=void 0===t?0:t,o=N.current[e];if(o){var a=j.current,i=(a&&a.parentNode).getBoundingClientRect(),c=o.getBoundingClientRect();if("horizontal"===n){var l=i.width,s=i.left,u=c.width,d=c.left;s<=d&&s+l>=d+u||I(-(d-a.getBoundingClientRect().left)+r,void 0)}}},moveToDeltaSize:function(e){I(s+e,f+e)}}}({direction:"horizontal",width:c,height:l,transition:f,deltaScroll:u}),P=R.isStartControlActive,j=R.isEndControlActive,N=R.containerPropsHandlers,I=R.contentPropsHandlers,G=R.itemPropsHandlers,k=R.moveToDeltaSize,_=R.moveItemInViewById,D=t&&t.columns&&t.sectionId&&t.columns[t.sectionId]||t&&t.sectionId,x=(0,r.useRef)(null);return(0,r.useEffect)((function(){return x.current=y()((function(e){_(e,{margin:32})}),g),function(){x.current&&(x.current.cancel(),x.current=null)}}),[]),(0,r.useEffect)((function(){x.current&&(x.current.cancel(),x.current(D))}),[D]),o().createElement("div",b({},N(),{className:"ms-horizontal-menu"}),o().createElement("div",I(),n.map((function(e){var n=e.title,r=e.id,a=G({id:r,onClick:function(){t&&t.sectionId!==r&&i(r)}});return o().createElement("div",b({},a,{className:"ms-menu-item"}),o().createElement(T,{tabindex:"-1",id:r,text:n||"title",selected:r===D,style:w(r===D)}))}))),P&&o().createElement(h.Z,{className:"square-button-md no-border",style:{position:"absolute"},onClick:function(){return k(u)}},o().createElement(p.Glyphicon,{glyph:"chevron-left"})),j&&o().createElement(h.Z,{className:"square-button-md no-border",style:{position:"absolute",right:0},onClick:function(){return k(-u)}},o().createElement(p.Glyphicon,{glyph:"chevron-right"})))}));var P=n(45697),j=n.n(P),N=n(50966),I=n(5346),G=n(94745);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var _=["tooltipPosition"];function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?L(e):t}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}(c,e);var t,n,r,a,i=(r=c,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(a){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return z(this,e)});function c(){var e;x(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return M(L(e=i.call.apply(i,[this].concat(n))),"checkUnsavedChanges",(function(){e.props.renderUnsavedMapChangesDialog?e.props.onCheckMapChanges(e.goHome):(e.props.onCloseUnsavedDialog(),e.goHome())})),M(L(e),"goHome",(function(){e.context.router.history.push("/")})),e}return t=c,(n=[{key:"render",value:function(){var e=this.props,t=e.tooltipPosition,n=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,_),r=o().createElement(p.Tooltip,{id:"toolbar-home-button"},o().createElement(I.Z,{msgId:"gohome"}));return o().createElement(o().Fragment,null,o().createElement(N.Z,{overlay:r,placement:t},o().createElement(h.Z,D({id:"home-button",className:"square-button",bsStyle:"primary",onClick:this.checkUnsavedChanges,tooltip:r},n),this.props.icon)),o().createElement(G.Z,{ref:"unsavedMapModal",show:this.props.displayUnsavedDialog||!1,onClose:this.props.onCloseUnsavedDialog,title:o().createElement(I.Z,{msgId:"resources.maps.unsavedMapConfirmTitle"}),buttons:[{bsStyle:"primary",text:o().createElement(I.Z,{msgId:"resources.maps.unsavedMapConfirmButtonText"}),onClick:this.goHome},{text:o().createElement(I.Z,{msgId:"resources.maps.unsavedMapCancelButtonText"}),onClick:this.props.onCloseUnsavedDialog}],fitContent:!0},o().createElement("div",{className:"ms-detail-body"},o().createElement(I.Z,{msgId:"resources.maps.unsavedMapConfirmMessage"}))))}}])&&A(t.prototype,n),c}(o().Component);M(Z,"propTypes",{icon:j().node,onCheckMapChanges:j().func,onCloseUnsavedDialog:j().func,displayUnsavedDialog:j().bool,renderUnsavedMapChangesDialog:j().bool,tooltipPosition:j().string}),M(Z,"contextTypes",{router:j().object,messages:j().object}),M(Z,"defaultProps",{icon:o().createElement(p.Glyphicon,{glyph:"home"}),onCheckMapChanges:function(){},onCloseUnsavedDialog:function(){},renderUnsavedMapChangesDialog:!0,tooltipPosition:"left"});const B=Z;var F=n(11847),H=n(13218),V=n.n(H);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){W(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Q=function(e){var t,n=e.settings,r=e.scrollTo,a=void 0===r?function(){}:r,i=e.navigableItems,c=void 0===i?[]:i,l=e.currentPage,s=void 0===l?{}:l,u=e.totalItems,d=void 0===u?1:u,p=e.currentPosition,m=void 0===p?0:p,y=e.router,v=e.buttons,g=void 0===v?[]:v,h=null==n||null===(t=n.theme)||void 0===t?void 0:t.general,b=V()(h)&&h||{},O=b.fontFamily,E=b.borderColor,S=b.color,C=b.backgroundColor,w=n||{},T=w.isTitleEnabled,P=w.isLogoEnabled,j=w.isNavbarEnabled,N=g.length>0,I=y&&y.pathname&&y.search&&"true"===(0,F.vl)(y.search).showHome&&y.pathname.includes("/geostory/shared"),G=j&&(null==c?void 0:c.length)>0,k=T||P||G||N||I;return o().createElement("div",{className:"ms-geostory-navigation-bar",style:K(K({color:S,backgroundColor:C},E&&{borderBottom:"1px solid ".concat(E)}),{},{fontFamily:O})},o().createElement("div",{className:"progress-bar",key:"progress-bar",style:{backgroundColor:E}},o().createElement("div",{className:"progress-percent",style:{width:"".concat((m+1)/d*100,"%"),backgroundColor:S}})),k&&o().createElement("div",{className:"ms-geostory-navigation-tools"},o().createElement("div",{className:"ms-geostory-navigation-toolbar"},o().createElement(f.Z,{buttons:g}),I&&o().createElement(B,{bsStyle:"default",className:"square-button-md no-border",tooltipPosition:"right",renderUnsavedMapChangesDialog:!1})),o().createElement("div",{className:"ms-geostory-navigation-elements"},G?o().createElement("div",{className:"ms-geostory-navigation-navigable-items"},o().createElement(R,{items:c,currentPage:s,scrollTo:a,getItemStyle:function(e){return e?{color:C,backgroundColor:S}:{outlineColor:S,borderColor:S}}})):null,o().createElement("div",{className:"ms-geostory-navigation-metadata"},T&&o().createElement("div",{className:"ms-geostory-navigation-title",style:{fontSize:n.storyTitleFontSize||"14px"}},n.storyTitle),P&&o().createElement("div",{className:"ms-geostory-navigation-logo"},o().createElement("img",{src:n.thumbnail&&(n.thumbnail.data||n.thumbnail.url)||"",height:32}))))))},$=(0,c.rx)("GeoStoryNavigation",{component:(0,a.connect)((0,i.zB)({mode:s.eK,settings:s.TQ,currentPage:s.PR,currentPosition:s.u5,totalItems:s.CK,navigableItems:(0,s.w)({includeAlways:!1}),pathname:u.F,search:u.y}))((function(e){var t=e.mode,n=void 0===t?l.nl.VIEW:t,r=e.currentPage,a=e.currentPosition,i=e.totalItems,c=e.settings,s=e.navigableItems,u=void 0===s?[]:s,d=e.pathname,f=e.search,p=e.items,m=(void 0===p?[]:p).filter((function(e){return e.tool})).map((function(e){return{Element:e.tool}}));return n===l.nl.VIEW?o().createElement("div",{key:"geostory-navigation",className:"ms-geostory-navigation",style:{width:"100%",position:"relative"}},o().createElement(Q,{settings:c,currentPage:r,currentPosition:a,totalItems:i,scrollTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{behavior:"smooth"};(0,l.M1)(e,t)},navigableItems:u,router:{pathname:d,search:f},buttons:m})):null})),reducers:{geostory:d.Z}})},66190:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var r=n(27361),o=n.n(r),a=n(47037),i=n.n(a),c=n(81763),l=n.n(c),s=n(30998),u=n.n(s),d=n(13311),f=n.n(d),p=n(68630),m=n.n(p),y=n(1469),v=n.n(y),g=n(84596),h=n.n(g),b=n(19155),O=n.n(b),E=n(61868),S=n(92579),C=n(34990);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){R(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var N=function(e,t){var n=e.length,r=0;return t||0===t||(r=n),i()(t)?r=u()(e,{id:t})+1:l()(t)&&(r=Math.min(t,e.length)),r},I=function e(t,n,r){var o=r.contents,a=r.background,i=r.id,c=r.resourceId,l=[],s=n+'{"id": "'.concat(i,'"}]');return c===t?[s]:(a&&a.resourceId===t&&l.push(s+".background"),o?o.reduce((function(n,r){return[].concat(P(n),P(e(t,s+".contents[",r)))}),l):l)},G={mode:"view",isCollapsed:!1,focusedContent:{},currentPage:{},settings:{},oldSettings:{},updateUrlOnScroll:!1};const k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C.D7:var n=t.id,r=t.path,a=t.position,c=t.element,l=(0,S.Ll)("currentStory.".concat(r),e),s=o()(e,l,[]),u=N(s,a),d=s.slice();return d.splice(u,0,T({id:n},c)),(0,E.t8)(l,d,e);case C.mN:var p=t.id,y=t.mediaType,g=t.data;return(0,E.t8)("currentStory.resources",O()([{id:p,type:y,data:g}].concat(P(e.currentStory&&e.currentStory.resources||[])),"id"),e);case C.vb:return(0,E.t8)("mode",t.mode,e);case C.QK:var b=t.id,w=t.mediaType,j=t.data,k=(0,E.cc)("currentStory.resources",{id:b,type:w,data:j},{id:b},e);return w===S.Tr.MAP&&e.currentStory.sections.reduce((function(e,t){return[].concat(P(e),P(I(b,"sections[",t)))}),[]).map((function(t){var n=(0,S.Ll)("currentStory.".concat(t,".map"),e);k=(0,E.t8)(n,void 0,k)})),k;case C.Ro:var _=t.id,D=t.mediaType,x=(0,E.z6)("currentStory.resources",{id:_},e);return e.currentStory.sections.reduce((function(e,t){return[].concat(P(e),P(I(_,"sections[",t)))}),[]).map((function(t){var n=(0,S.Ll)("currentStory.".concat(t,".resourceId"),e);if(x=(0,E.zN)(n,x),D===S.Tr.MAP){var r=(0,S.Ll)("currentStory.".concat(t,".map"),e);x=(0,E.zN)(r,x)}})),x;case C.lX:return(0,E.t8)("loading"===t.name?"loading":"loadFlags.".concat(t.name),t.value,(0,E.t8)("loading",t.value,e));case C.Dq:var A=t.path,Y=(0,S.Ll)("currentStory.".concat(A),e),z=P(Y),L=z.pop(),U=o()(e,z);return v()(U)?(i()(L)&&(L=parseInt(L,10)),(0,E.t8)(z,[].concat(P(U.slice(0,L)),P(U.slice(L+1))),e)):(0,E.zN)(Y,e);case C.ij:var M,Z,B,F,H,V=e.defaultSettings||{},q=t.story.settings||V,K=(null===(M=q)||void 0===M||null===(Z=M.theme)||void 0===Z?void 0:Z.fontFamilies)||[],W=null===(B=e.currentStory)||void 0===B||null===(F=B.settings)||void 0===F||null===(H=F.theme)||void 0===H?void 0:H.fontFamilies;return W&&W.length>0&&(q=(0,E.t8)("theme.fontFamilies",O()([].concat(P(W),P(K)),"family"),q)),(0,E.t8)("currentStory",T(T({},t.story),{},{settings:q}),e);case C.i2:return(0,E.t8)("selectedCard",e.selectedCard===t.card?"":t.card,e);case C.IY:var Q=t.control,$=t.value;return(0,E.t8)("controls.".concat(Q),$,e);case C.Zf:var X=t.resource,J=e.currentStory&&e.currentStory.settings||{};return(0,E.qC)((0,E.t8)("resource",X),(0,E.t8)("currentStory.settings.storyTitle",J.storyTitle||X.name))(e);case C.si:case C.KT:return(0,E.zN)("errors.save",e);case C.SW:return(0,E.t8)("errors.save",h()(t.error),e);case C.Mk:return(0,E.t8)("isCollapsed",!e.isCollapsed,e);case C.NZ:var ee=o()(e,"currentStory.settings.".concat(t.option));return(0,E.t8)("currentStory.settings.".concat(t.option),!ee,e);case C.c:var te=!e.isSettingsEnabled,ne=e.currentStory&&e.currentStory.settings||{};return(0,E.qC)((0,E.t8)("isSettingsEnabled",te),(0,E.t8)("oldSettings",te?ne:{}),(0,E.t8)("currentStory.settings",te?T({},ne):t.withSave?ne:e.oldSettings))(e);case C.wb:var re=t.path,oe=t.mode,ae=t.element,ie=(0,S.Ll)("currentStory.".concat(re),e),ce=o()(e,ie);return m()(ce)&&m()(ae)&&"merge"===oe&&(ae=T(T({},ce),ae)),v()(ce)&&v()(ae)&&"merge"===oe&&(ae=[].concat(P(ce),P(ae))),(0,E.t8)(ie,ae,e);case C.km:return(0,E.t8)("currentStory.settings.".concat(t.prop),t.value,e);case C.un:if(t.columnId){var le=f()(e.currentStory.sections,(function(e){return f()(e.contents,{id:t.columnId})}));return le&&f()(le.contents,{id:t.columnId})?(0,E.t8)("currentPage",T(T({},e.currentPage),{},{columns:T(T({},e.currentPage.columns),{},R({},le.id,t.columnId))}),e):e}return(0,E.t8)("currentPage",T(T({},e.currentPage),{},{sectionId:t.sectionId}),e);case C.Cx:var se=t.status,ue=t.target,de=t.selector,fe=void 0===de?"":de,pe=t.hideContent,me=void 0!==pe&&pe,ye=t.path,ve=se?{target:ue,selector:fe,hideContent:me,path:ye}:void 0;return(0,E.t8)("focusedContent",ve,e);case C.jr:return(0,E.t8)("pendingChanges",t.value,e);case C.ZY:return(0,E.t8)("updateUrlOnScroll",t.value,e);case C.EQ:return(0,E.t8)("mediaEditorSettings",t.mediaEditorSettings,e);default:return e}}},11847:(e,t,n)=>{"use strict";n.d(t,{ij:()=>g,w0:()=>h,vl:()=>b,K2:()=>O,Nw:()=>E});var r=n(72500),o=n.n(r),a=n(1469),i=n.n(a),c=n(47037),l=n.n(c),s=n(18446),u=n.n(s),d=n(89734),f=n.n(d),p=n(13311),m=n.n(p),y=n(64210);function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var g=function(e){if(!e)return{};var t=!(0===e.indexOf("http")),n=t?[]:e.match(/([^:]*:)\/\/([^:]*:?[^@]*@)?([^:\/\?]*):?([^\/\?]*)/);if(t){var r=window.location;n[1]=r.protocol,n[3]=r.hostname,n[4]=r.port,n[5]=e}n[4]=""!==n[4]&&n[4]?n[4]:"https:"===n[1]?"443":"80",n[5]=n[5]?n[5]:e.slice(n[0].length);var o,a,i=(a=6,function(e){if(Array.isArray(e))return e}(o=n)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(o,a)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(o,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=i[1],l=i[3],s=i[4],u=i[5],d=0===u.indexOf("/")?u.split("/")[1]:"";return{protocol:c,domain:l,port:s,rootPath:u,applicationRootPath:d}},h=function(e,t){var n=i()(e)?e[0]:e,r=i()(t)?t[0]:t;if(n===r)return!0;if(!n||!r)return!1;if(!l()(n)||!l()(r))return!1;var a=o().parse(n),c=o().parse(r),s=g(n),d=g(r),p=s.protocol===d.protocol,m=s.domain===d.domain,y=s.port===d.port,v=a.pathname===c.pathname,h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(e===t)return!0;if(!e&&!t)return!0;var n=e?e.split("&").filter((function(e){return!!e})):[],r=t?t.split("&").filter((function(e){return!!e})):[];return u()(f()(n),f()(r))}(a.query,c.query);return p&&y&&m&&v&&h},b=function(e){return y.Qc(e)},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:/^(http(s{0,1}):\/\/)+?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,n=new RegExp(t);return n.test(e)},E=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/^(http(s{0,1}):\/\/)+?[\w.\-{}]+(?:\.[\w\.-]+)+[\w\-\._~\/\;\.\%\:\&\=\?{}]+$/,r=new RegExp(n),o=r.test(e);if(!o)return!1;if(o&&!t)return!0;if(o&&t){var a=/\{(.*?)\}/.test(e);return 0===t.filter((function(e){return m()(a,e)})).length}return!1}}}]);