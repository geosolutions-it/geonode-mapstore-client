(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[4789,628],{48074:(t,e,n)=>{"use strict";const r=n(88951),o=n(44020),u=n(74851);function i(t,e){return e.encode?e.strict?r(t):encodeURIComponent(t):t}function c(t,e){return e.decode?o(t):t}function a(t){return Array.isArray(t)?t.sort():"object"==typeof t?a(Object.keys(t)).sort(((t,e)=>Number(t)-Number(e))).map((e=>t[e])):t}function s(t){const e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function f(t){const e=(t=s(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function l(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function p(t,e){const n=function(t){let e;switch(t.arrayFormat){case"index":return(t,n,r)=>{e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===r[t]&&(r[t]={}),r[t][e[1]]=n):r[t]=n};case"bracket":return(t,n,r)=>{e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==r[t]?r[t]=[].concat(r[t],n):r[t]=[n]:r[t]=n};case"comma":return(t,e,n)=>{const r="string"==typeof e&&e.split("").indexOf(",")>-1?e.split(","):e;n[t]=r};default:return(t,e,n)=>{void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=e}}}(e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",parseNumbers:!1,parseBooleans:!1},e)),r=Object.create(null);if("string"!=typeof t)return r;if(!(t=t.trim().replace(/^[?#&]/,"")))return r;for(const o of t.split("&")){let[t,i]=u(e.decode?o.replace(/\+/g," "):o,"=");i=void 0===i?null:c(i,e),n(c(t,e),i,r)}for(const t of Object.keys(r)){const n=r[t];if("object"==typeof n&&null!==n)for(const t of Object.keys(n))n[t]=l(n[t],e);else r[t]=l(n,e)}return!1===e.sort?r:(!0===e.sort?Object.keys(r).sort():Object.keys(r).sort(e.sort)).reduce(((t,e)=>{const n=r[e];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?t[e]=a(n):t[e]=n,t}),Object.create(null))}e.extract=f,e.parse=p,e.stringify=(t,e)=>{if(!t)return"";const n=function(t){switch(t.arrayFormat){case"index":return e=>(n,r)=>{const o=n.length;return void 0===r||t.skipNull&&null===r?n:null===r?[...n,[i(e,t),"[",o,"]"].join("")]:[...n,[i(e,t),"[",i(o,t),"]=",i(r,t)].join("")]};case"bracket":return e=>(n,r)=>void 0===r||t.skipNull&&null===r?n:null===r?[...n,[i(e,t),"[]"].join("")]:[...n,[i(e,t),"[]=",i(r,t)].join("")];case"comma":return e=>(n,r)=>null==r||0===r.length?n:0===n.length?[[i(e,t),"=",i(r,t)].join("")]:[[n,i(r,t)].join(",")];default:return e=>(n,r)=>void 0===r||t.skipNull&&null===r?n:null===r?[...n,i(e,t)]:[...n,[i(e,t),"=",i(r,t)].join("")]}}(e=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},e)),r=Object.assign({},t);if(e.skipNull)for(const t of Object.keys(r))void 0!==r[t]&&null!==r[t]||delete r[t];const o=Object.keys(r);return!1!==e.sort&&o.sort(e.sort),o.map((r=>{const o=t[r];return void 0===o?"":null===o?i(r,e):Array.isArray(o)?o.reduce(n(r),[]).join("&"):i(r,e)+"="+i(o,e)})).filter((t=>t.length>0)).join("&")},e.parseUrl=(t,e)=>({url:s(t).split("?")[0]||"",query:p(f(t),e)})},74851:t=>{"use strict";t.exports=function(t,e){if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var n=t.indexOf(e);return-1===n?[t]:[t.slice(0,n),t.slice(n+e.length)]}},88951:t=>{"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},44020:t=>{"use strict";var e="%[a-f0-9]{2}",n=new RegExp(e,"gi"),r=new RegExp("("+e+")+","gi");function o(t,e){try{return decodeURIComponent(t.join(""))}catch(t){}if(1===t.length)return t;e=e||1;var n=t.slice(0,e),r=t.slice(e);return Array.prototype.concat.call([],o(n),o(r))}function u(t){try{return decodeURIComponent(t)}catch(u){for(var e=t.match(n),r=1;r<e.length;r++)e=(t=o(e,r).join("")).match(n);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},n=r.exec(t);n;){try{e[n[0]]=decodeURIComponent(n[0])}catch(t){var o=u(n[0]);o!==n[0]&&(e[n[0]]=o)}n=r.exec(t)}e["%C2"]="�";for(var i=Object.keys(e),c=0;c<i.length;c++){var a=i[c];t=t.replace(new RegExp(a,"g"),e[a])}return t}(t)}}},80760:(t,e,n)=>{var r=n(89881);t.exports=function(t,e){var n=[];return r(t,(function(t,r,o){e(t,r,o)&&n.push(t)})),n}},69199:(t,e,n)=>{var r=n(89881),o=n(98612);t.exports=function(t,e){var n=-1,u=o(t)?Array(t.length):[];return r(t,(function(t,r,o){u[++n]=e(t,r,o)})),u}},82689:(t,e,n)=>{var r=n(29932),o=n(97786),u=n(67206),i=n(69199),c=n(71131),a=n(7518),s=n(85022),f=n(6557),l=n(1469);t.exports=function(t,e,n){e=e.length?r(e,(function(t){return l(t)?function(e){return o(e,1===t.length?t[0]:t)}:t})):[f];var p=-1;e=r(e,a(u));var v=i(t,(function(t,n,o){return{criteria:r(e,(function(e){return e(t)})),index:++p,value:t}}));return c(v,(function(t,e){return s(t,e,n)}))}},71131:t=>{t.exports=function(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}},26393:(t,e,n)=>{var r=n(33448);t.exports=function(t,e){if(t!==e){var n=void 0!==t,o=null===t,u=t==t,i=r(t),c=void 0!==e,a=null===e,s=e==e,f=r(e);if(!a&&!f&&!i&&t>e||i&&c&&s&&!a&&!f||o&&c&&s||!n&&s||!u)return 1;if(!o&&!i&&!f&&t<e||f&&n&&u&&!o&&!i||a&&n&&u||!c&&u||!s)return-1}return 0}},85022:(t,e,n)=>{var r=n(26393);t.exports=function(t,e,n){for(var o=-1,u=t.criteria,i=e.criteria,c=u.length,a=n.length;++o<c;){var s=r(u[o],i[o]);if(s)return o>=a?s:s*("desc"==n[o]?-1:1)}return t.index-e.index}},23279:(t,e,n)=>{var r=n(13218),o=n(7771),u=n(14841),i=Math.max,c=Math.min;t.exports=function(t,e,n){var a,s,f,l,p,v,d=0,h=!1,y=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=a,r=s;return a=s=void 0,d=e,l=t.apply(r,n)}function b(t){return d=t,p=setTimeout(x,e),h?g(t):l}function w(t){var n=t-v;return void 0===v||n>=e||n<0||y&&t-d>=f}function x(){var t=o();if(w(t))return j(t);p=setTimeout(x,function(t){var n=e-(t-v);return y?c(n,f-(t-d)):n}(t))}function j(t){return p=void 0,m&&a?g(t):(a=s=void 0,l)}function k(){var t=o(),n=w(t);if(a=arguments,s=this,v=t,n){if(void 0===p)return b(v);if(y)return clearTimeout(p),p=setTimeout(x,e),g(v)}return void 0===p&&(p=setTimeout(x,e)),l}return e=u(e)||0,r(n)&&(h=!!n.leading,f=(y="maxWait"in n)?i(u(n.maxWait)||0,e):f,m="trailing"in n?!!n.trailing:m),k.cancel=function(){void 0!==p&&clearTimeout(p),d=0,a=v=s=p=void 0},k.flush=function(){return void 0===p?l:j(o())},k}},63105:(t,e,n)=>{var r=n(34963),o=n(80760),u=n(67206),i=n(1469);t.exports=function(t,e){return(i(t)?r:o)(t,u(e,3))}},7771:(t,e,n)=>{var r=n(55639);t.exports=function(){return r.Date.now()}},89734:(t,e,n)=>{var r=n(21078),o=n(82689),u=n(5976),i=n(16612),c=u((function(t,e){if(null==t)return[];var n=e.length;return n>1&&i(t,e[0],e[1])?e=[]:n>2&&i(e[0],e[1],e[2])&&(e=[e[0]]),o(t,r(e,1),[])}));t.exports=c},19155:(t,e,n)=>{var r=n(67206),o=n(45652);t.exports=function(t,e){return t&&t.length?o(t,r(e,2)):[]}},19081:(t,e,n)=>{"use strict";t.exports=n(22822)},80628:(t,e,n)=>{"use strict";n.d(e,{Z:()=>d});var r=n(24852),o=n.n(r),u=n(55553);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}function f(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}const d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{handleWidth:!0,handleHeight:!0};return function(n){function r(){return c(this,r),f(this,l(r).apply(this,arguments))}return p(r,n),s(r,[{key:"render",value:function(){return o().createElement(u.Z,e,o().createElement(t,this.props))}}]),r}(r.Component)}},45338:(t,e,n)=>{"use strict";n.d(e,{QS:()=>h});var r=n(24852),o=n.n(r),u=n(45697),i=n.n(u);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var a={preventDefaultTouchmoveEvent:!1,delta:10,rotationAngle:0,trackMouse:!1,trackTouch:!0},s={xy:[0,0],swiping:!1,eventData:void 0,start:void 0},f="mousemove",l="mouseup";function p(t,e){if(0===e)return t;var n=Math.PI/180*e;return[t[0]*Math.cos(n)+t[1]*Math.sin(n),t[1]*Math.cos(n)-t[0]*Math.sin(n)]}function v(t,e){var n=function(e){e.touches&&e.touches.length>1||t((function(t,n){n.trackMouse&&(document.addEventListener(f,r),document.addEventListener(l,u));var o=e.touches?e.touches[0]:e,i=p([o.clientX,o.clientY],n.rotationAngle);return c({},t,s,{eventData:{initial:[].concat(i),first:!0},xy:i,start:e.timeStamp||0})}))},r=function(e){t((function(t,n){if(!t.xy[0]||!t.xy[1]||e.touches&&e.touches.length>1)return t;var r=e.touches?e.touches[0]:e,o=p([r.clientX,r.clientY],n.rotationAngle),u=o[0],i=o[1],a=t.xy[0]-u,s=t.xy[1]-i,f=Math.abs(a),l=Math.abs(s),v=(e.timeStamp||0)-t.start,d=Math.sqrt(f*f+l*l)/(v||1);if(f<n.delta&&l<n.delta&&!t.swiping)return t;var h=function(t,e,n,r){return t>e?n>0?"Left":"Right":r>0?"Up":"Down"}(f,l,a,s),y=c({},t.eventData,{event:e,absX:f,absY:l,deltaX:a,deltaY:s,velocity:d,dir:h});n.onSwiping&&n.onSwiping(y);var m=!1;return(n.onSwiping||n.onSwiped||n["onSwiped"+h])&&(m=!0),m&&n.preventDefaultTouchmoveEvent&&n.trackTouch&&e.cancelable&&e.preventDefault(),c({},t,{eventData:c({},y,{first:!1}),swiping:!0})}))},o=function(e){t((function(t,n){var r;return t.swiping&&(r=c({},t.eventData,{event:e}),n.onSwiped&&n.onSwiped(r),n["onSwiped"+r.dir]&&n["onSwiped"+r.dir](r)),c({},t,s,{eventData:r})}))},u=function(t){document.removeEventListener(f,r),document.removeEventListener(l,u),o(t)},i=function(t){if(t&&t.addEventListener){var e=[["touchstart",n],["touchmove",r],["touchend",o]];return e.forEach((function(e){var n=e[0],r=e[1];return t.addEventListener(n,r)})),function(){return e.forEach((function(e){var n=e[0],r=e[1];return t.removeEventListener(n,r)}))}}},a={ref:function(e){null!==e&&t((function(t,n){if(t.el===e)return t;var r={};return t.el&&t.el!==e&&t.cleanUpTouch&&(t.cleanUpTouch(),r.cleanUpTouch=null),n.trackTouch&&e&&(r.cleanUpTouch=i(e)),c({},t,{el:e},r)}))}};return e.trackMouse&&(a.onMouseDown=n),[a,i]}function d(t,e,n){var r={};return!e.trackTouch&&t.cleanUpTouch?(t.cleanUpTouch(),r.cleanUpTouch=null):e.trackTouch&&!t.cleanUpTouch&&t.el&&(r.cleanUpTouch=n(t.el)),c({},t,r)}function h(t){var e=t.trackMouse,n=o().useRef(c({},s,{type:"hook"})),r=o().useRef();r.current=c({},a,t);var u=o().useMemo((function(){return v((function(t){return n.current=t(n.current,r.current)}),{trackMouse:e})}),[e]),i=u[0],f=u[1];return n.current=d(n.current,r.current,f),i}var y=function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this)._set=function(t){n.transientState=t(n.transientState,n.props)},n.transientState=c({},s,{type:"class"}),n}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t=this.props,e=t.className,n=t.style,r=t.nodeName,u=void 0===r?"div":r,i=t.innerRef,a=t.children,s=t.trackMouse,f=v(this._set,{trackMouse:s}),l=f[0],p=f[1];this.transientState=d(this.transientState,this.props,p);var h=i?function(t){return i(t),l.ref(t)}:l.ref;return o().createElement(u,c({},l,{className:e,style:n,ref:h}),a)},r}(o().PureComponent);y.propTypes={onSwiped:i().func,onSwiping:i().func,onSwipedUp:i().func,onSwipedRight:i().func,onSwipedDown:i().func,onSwipedLeft:i().func,delta:i().number,preventDefaultTouchmoveEvent:i().bool,nodeName:i().string,trackMouse:i().bool,trackTouch:i().bool,innerRef:i().func,rotationAngle:i().number},y.defaultProps=a}}]);