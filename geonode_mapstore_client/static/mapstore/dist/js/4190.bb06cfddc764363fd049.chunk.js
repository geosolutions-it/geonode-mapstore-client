(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[4190,7654],{71707:(t,e,n)=>{!function(t){"use strict";function e(t,e){this.cm=t,this.options=e,this.widget=null,this.debounce=0,this.tick=0,this.startPos=this.cm.getCursor("start"),this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length;var n=this;t.on("cursorActivity",this.activityFunc=function(){n.cursorActivity()})}t.showHint=function(t,e,n){if(!e)return t.showHint(n);n&&n.async&&(e.async=!0);var i={hint:e};if(n)for(var o in n)i[o]=n[o];return t.showHint(i)},t.defineExtension("showHint",(function(n){n=function(t,e,n){var i=t.options.hintOptions,o={};for(var r in l)o[r]=l[r];if(i)for(var r in i)void 0!==i[r]&&(o[r]=i[r]);if(n)for(var r in n)void 0!==n[r]&&(o[r]=n[r]);return o.hint.resolve&&(o.hint=o.hint.resolve(t,e)),o}(this,this.getCursor("start"),n);var i=this.listSelections();if(!(i.length>1)){if(this.somethingSelected()){if(!n.hint.supportsSelection)return;for(var o=0;o<i.length;o++)if(i[o].head.line!=i[o].anchor.line)return}this.state.completionActive&&this.state.completionActive.close();var r=this.state.completionActive=new e(this,n);r.options.hint&&(t.signal(this,"startCompletion",this),r.update(!0))}}));var n=window.requestAnimationFrame||function(t){return setTimeout(t,1e3/60)},i=window.cancelAnimationFrame||clearTimeout;function o(t){return"string"==typeof t?t:t.text}function r(t,e){for(;e&&e!=t;){if("LI"===e.nodeName.toUpperCase()&&e.parentNode==t)return e;e=e.parentNode}}function s(e,n){this.completion=e,this.data=n,this.picked=!1;var i=this,s=e.cm,c=this.hints=document.createElement("ul");c.className="CodeMirror-hints",this.selectedHint=n.selectedHint||0;for(var l=n.list,a=0;a<l.length;++a){var h=c.appendChild(document.createElement("li")),u=l[a],f="CodeMirror-hint"+(a!=this.selectedHint?"":" CodeMirror-hint-active");null!=u.className&&(f=u.className+" "+f),h.className=f,u.render?u.render(h,n,u):h.appendChild(document.createTextNode(u.displayText||o(u))),h.hintId=a}var d=s.cursorCoords(e.options.alignWithWord?n.from:null),p=d.left,g=d.bottom,m=!0;c.style.left=p+"px",c.style.top=g+"px";var v=window.innerWidth||Math.max(document.body.offsetWidth,document.documentElement.offsetWidth),y=window.innerHeight||Math.max(document.body.offsetHeight,document.documentElement.offsetHeight);(e.options.container||document.body).appendChild(c);var x=c.getBoundingClientRect(),w=x.bottom-y,k=c.scrollHeight>c.clientHeight+1,C=s.getScrollInfo();if(w>0){var b=x.bottom-x.top;if(d.top-(d.bottom-x.top)-b>0)c.style.top=(g=d.top-b)+"px",m=!1;else if(b>y){c.style.height=y-5+"px",c.style.top=(g=d.bottom-x.top)+"px";var T=s.getCursor();n.from.ch!=T.ch&&(d=s.cursorCoords(T),c.style.left=(p=d.left)+"px",x=c.getBoundingClientRect())}}var S,M=x.right-v;if(M>0&&(x.right-x.left>v&&(c.style.width=v-5+"px",M-=x.right-x.left-v),c.style.left=(p=d.left-M)+"px"),k)for(var O=c.firstChild;O;O=O.nextSibling)O.style.paddingRight=s.display.nativeBarWidth+"px";return s.addKeyMap(this.keyMap=function(t,e){var n={Up:function(){e.moveFocus(-1)},Down:function(){e.moveFocus(1)},PageUp:function(){e.moveFocus(1-e.menuSize(),!0)},PageDown:function(){e.moveFocus(e.menuSize()-1,!0)},Home:function(){e.setFocus(0)},End:function(){e.setFocus(e.length-1)},Enter:e.pick,Tab:e.pick,Esc:e.close},i=t.options.customKeys,o=i?{}:n;function r(t,i){var r;r="string"!=typeof i?function(t){return i(t,e)}:n.hasOwnProperty(i)?n[i]:i,o[t]=r}if(i)for(var s in i)i.hasOwnProperty(s)&&r(s,i[s]);var c=t.options.extraKeys;if(c)for(var s in c)c.hasOwnProperty(s)&&r(s,c[s]);return o}(e,{moveFocus:function(t,e){i.changeActive(i.selectedHint+t,e)},setFocus:function(t){i.changeActive(t)},menuSize:function(){return i.screenAmount()},length:l.length,close:function(){e.close()},pick:function(){i.pick()},data:n})),e.options.closeOnUnfocus&&(s.on("blur",this.onBlur=function(){S=setTimeout((function(){e.close()}),100)}),s.on("focus",this.onFocus=function(){clearTimeout(S)})),s.on("scroll",this.onScroll=function(){var t=s.getScrollInfo(),n=s.getWrapperElement().getBoundingClientRect(),i=g+C.top-t.top,o=i-(window.pageYOffset||(document.documentElement||document.body).scrollTop);if(m||(o+=c.offsetHeight),o<=n.top||o>=n.bottom)return e.close();c.style.top=i+"px",c.style.left=p+C.left-t.left+"px"}),t.on(c,"dblclick",(function(t){var e=r(c,t.target||t.srcElement);e&&null!=e.hintId&&(i.changeActive(e.hintId),i.pick())})),t.on(c,"click",(function(t){var n=r(c,t.target||t.srcElement);n&&null!=n.hintId&&(i.changeActive(n.hintId),e.options.completeOnSingleClick&&i.pick())})),t.on(c,"mousedown",(function(){setTimeout((function(){s.focus()}),20)})),t.signal(n,"select",l[0],c.firstChild),!0}function c(t,e,n,i){if(t.async)t(e,i,n);else{var o=t(e,n);o&&o.then?o.then(i):i(o)}}e.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.tick=null,this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.data&&t.signal(this.data,"close"),this.widget&&this.widget.close(),t.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(e,n){var i=e.list[n];i.hint?i.hint(this.cm,e,i):this.cm.replaceRange(o(i),i.from||e.from,i.to||e.to,"complete"),t.signal(e,"pick",i),this.close()},cursorActivity:function(){this.debounce&&(i(this.debounce),this.debounce=0);var t=this.cm.getCursor(),e=this.cm.getLine(t.line);if(t.line!=this.startPos.line||e.length-t.ch!=this.startLen-this.startPos.ch||t.ch<this.startPos.ch||this.cm.somethingSelected()||t.ch&&this.options.closeCharacters.test(e.charAt(t.ch-1)))this.close();else{var o=this;this.debounce=n((function(){o.update()})),this.widget&&this.widget.disable()}},update:function(t){if(null!=this.tick){var e=this,n=++this.tick;c(this.options.hint,this.cm,this.options,(function(i){e.tick==n&&e.finishUpdate(i,t)}))}},finishUpdate:function(e,n){this.data&&t.signal(this.data,"update");var i,o,r=this.widget&&this.widget.picked||n&&this.options.completeSingle;this.widget&&this.widget.close(),e&&this.data&&(i=this.data,o=e,t.cmpPos(o.from,i.from)>0&&i.to.ch-i.from.ch!=o.to.ch-o.from.ch)||(this.data=e,e&&e.list.length&&(r&&1==e.list.length?this.pick(e,0):(this.widget=new s(this,e),t.signal(e,"shown"))))}},s.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap);var t=this.completion.cm;this.completion.options.closeOnUnfocus&&(t.off("blur",this.onBlur),t.off("focus",this.onFocus)),t.off("scroll",this.onScroll)}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap);var t=this;this.keyMap={Enter:function(){t.picked=!0}},this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(e,n){if(e>=this.data.list.length?e=n?this.data.list.length-1:0:e<0&&(e=n?0:this.data.list.length-1),this.selectedHint!=e){var i=this.hints.childNodes[this.selectedHint];i.className=i.className.replace(" CodeMirror-hint-active",""),(i=this.hints.childNodes[this.selectedHint=e]).className+=" CodeMirror-hint-active",i.offsetTop<this.hints.scrollTop?this.hints.scrollTop=i.offsetTop-3:i.offsetTop+i.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=i.offsetTop+i.offsetHeight-this.hints.clientHeight+3),t.signal(this.data,"select",this.data.list[this.selectedHint],i)}},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1}},t.registerHelper("hint","auto",{resolve:function(e,n){var i,o=e.getHelpers(n,"hint");if(o.length){var r=function(t,e,n){var i=function(t,e){if(!t.somethingSelected())return e;for(var n=[],i=0;i<e.length;i++)e[i].supportsSelection&&n.push(e[i]);return n}(t,o);!function o(r){if(r==i.length)return e(null);c(i[r],t,n,(function(t){t&&t.list.length>0?e(t):o(r+1)}))}(0)};return r.async=!0,r.supportsSelection=!0,r}return(i=e.getHelper(e.getCursor(),"hintWords"))?function(e){return t.hint.fromList(e,{words:i})}:t.hint.anyword?function(e,n){return t.hint.anyword(e,n)}:function(){}}}),t.registerHelper("hint","fromList",(function(e,n){var i=e.getCursor(),o=e.getTokenAt(i),r=t.Pos(i.line,o.end);if(o.string&&/\w/.test(o.string[o.string.length-1]))var s=o.string,c=t.Pos(i.line,o.start);else s="",c=r;for(var l=[],a=0;a<n.words.length;a++){var h=n.words[a];h.slice(0,s.length)==s&&l.push(h)}if(l.length)return{list:l,from:c,to:r}})),t.commands.autocomplete=t.showHint;var l={hint:t.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnUnfocus:!0,completeOnSingleClick:!0,container:null,customKeys:null,extraKeys:null};t.defineOption("hintOptions",null)}(n(4631))},32095:(t,e,n)=>{!function(t){"use strict";var e=t.Pos;function n(t,n,o,r){if(this.atOccurrence=!1,this.doc=t,null==r&&"string"==typeof n&&(r=!1),o=o?t.clipPos(o):e(0,0),this.pos={from:o,to:o},"string"!=typeof n)n.global||(n=new RegExp(n.source,n.ignoreCase?"ig":"g")),this.matches=function(i,o){if(i){n.lastIndex=0;for(var r=t.getLine(o.line).slice(0,o.ch),s=0;;){n.lastIndex=s;var c=n.exec(r);if(!c)break;if(a=(l=c).index,(s=l.index+(l[0].length||1))==r.length)break}(h=l&&l[0].length||0)||(0==a&&0==r.length?l=void 0:a!=t.getLine(o.line).length&&h++)}else{n.lastIndex=o.ch,r=t.getLine(o.line);var l,a,h=(l=n.exec(r))&&l[0].length||0;(a=l&&l.index)+h==r.length||h||(h=1)}if(l&&h)return{from:e(o.line,a),to:e(o.line,a+h),match:l}};else{var s=n;r&&(n=n.toLowerCase());var c=r?function(t){return t.toLowerCase()}:function(t){return t},l=n.split("\n");if(1==l.length)n.length?this.matches=function(o,r){if(o){var l=t.getLine(r.line).slice(0,r.ch);if((h=(a=c(l)).lastIndexOf(n))>-1)return h=i(l,a,h),{from:e(r.line,h),to:e(r.line,h+s.length)}}else{var a,h;if(l=t.getLine(r.line).slice(r.ch),(h=(a=c(l)).indexOf(n))>-1)return h=i(l,a,h)+r.ch,{from:e(r.line,h),to:e(r.line,h+s.length)}}}:this.matches=function(){};else{var a=s.split("\n");this.matches=function(n,i){var o,r=l.length-1;if(n){if(i.line-(l.length-1)<t.firstLine())return;if(c(t.getLine(i.line).slice(0,a[r].length))!=l[l.length-1])return;for(var s=e(i.line,a[r].length),h=i.line-1,u=r-1;u>=1;--u,--h)if(l[u]!=c(t.getLine(h)))return;var f=(o=t.getLine(h)).length-a[0].length;if(c(o.slice(f))!=l[0])return;return{from:e(h,f),to:s}}if(!(i.line+(l.length-1)>t.lastLine())&&(f=(o=t.getLine(i.line)).length-a[0].length,c(o.slice(f))==l[0])){var d=e(i.line,f);for(h=i.line+1,u=1;u<r;++u,++h)if(l[u]!=c(t.getLine(h)))return;if(c(t.getLine(h).slice(0,a[r].length))==l[r])return{from:d,to:e(h,a[r].length)}}}}}}function i(t,e,n){if(t.length==e.length)return n;for(var i=Math.min(n,t.length);;){var o=t.slice(0,i).toLowerCase().length;if(o<n)++i;else{if(!(o>n))return i;--i}}}n.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(t){var n=this,i=this.doc.clipPos(t?this.pos.from:this.pos.to);function o(t){var i=e(t,0);return n.pos={from:i,to:i},n.atOccurrence=!1,!1}for(;;){if(this.pos=this.matches(t,i))return this.atOccurrence=!0,this.pos.match||!0;if(t){if(!i.line)return o(0);i=e(i.line-1,this.doc.getLine(i.line-1).length)}else{var r=this.doc.lineCount();if(i.line==r-1)return o(r);i=e(i.line+1,0)}}},from:function(){if(this.atOccurrence)return this.pos.from},to:function(){if(this.atOccurrence)return this.pos.to},replace:function(n,i){if(this.atOccurrence){var o=t.splitLines(n);this.doc.replaceRange(o,this.pos.from,this.pos.to,i),this.pos.to=e(this.pos.from.line+o.length-1,o[o.length-1].length+(1==o.length?this.pos.from.ch:0))}}},t.defineExtension("getSearchCursor",(function(t,e,i){return new n(this.doc,t,e,i)})),t.defineDocExtension("getSearchCursor",(function(t,e,i){return new n(this,t,e,i)})),t.defineExtension("selectMatches",(function(e,n){for(var i=[],o=this.getSearchCursor(e,this.getCursor("from"),n);o.findNext()&&!(t.cmpPos(o.to(),this.getCursor("to"))>0);)i.push({anchor:o.from(),head:o.to()});i.length&&this.setSelections(i,0)}))}(n(4631))},64020:(t,e,n)=>{!function(t){"use strict";function e(t){t.operation((function(){!function(t){if(!t.somethingSelected())return s(t);if(t.listSelections().length>1)return c(t);var e=t.getCursor("start"),n=t.getCursor("end"),i=t.state.markedSelection;if(!i.length)return r(t,e,n);var l=i[0].find(),a=i[i.length-1].find();if(!l||!a||n.line-e.line<8||o(e,a.to)>=0||o(n,l.from)<=0)return c(t);for(;o(e,l.from)>0;)i.shift().clear(),l=i[0].find();for(o(e,l.from)<0&&(l.to.line-e.line<8?(i.shift().clear(),r(t,e,l.to,0)):r(t,e,l.from,0));o(n,a.to)<0;)i.pop().clear(),a=i[i.length-1].find();o(n,a.to)>0&&(n.line-a.from.line<8?(i.pop().clear(),r(t,a.from,n)):r(t,a.to,n))}(t)}))}function n(t){t.state.markedSelection.length&&t.operation((function(){s(t)}))}t.defineOption("styleSelectedText",!1,(function(i,o,r){var l=r&&r!=t.Init;o&&!l?(i.state.markedSelection=[],i.state.markedSelectionStyle="string"==typeof o?o:"CodeMirror-selectedtext",c(i),i.on("cursorActivity",e),i.on("change",n)):!o&&l&&(i.off("cursorActivity",e),i.off("change",n),s(i),i.state.markedSelection=i.state.markedSelectionStyle=null)}));var i=t.Pos,o=t.cmpPos;function r(t,e,n,r){if(0!=o(e,n))for(var s=t.state.markedSelection,c=t.state.markedSelectionStyle,l=e.line;;){var a=l==e.line?e:i(l,0),h=l+8,u=h>=n.line,f=u?n:i(h,0),d=t.markText(a,f,{className:c});if(null==r?s.push(d):s.splice(r++,0,d),u)break;l=h}}function s(t){for(var e=t.state.markedSelection,n=0;n<e.length;++n)e[n].clear();e.length=0}function c(t){s(t);for(var e=t.listSelections(),n=0;n<e.length;n++)r(t,e[n].from(),e[n].to())}}(n(4631))},40656:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});var i=n(23645),o=n.n(i)()((function(t){return t[1]}));o.push([t.id,".msgapi .CodeMirror-hints {\n  position: absolute;\n  z-index: 10;\n  overflow: hidden;\n  list-style: none;\n\n  margin: 0;\n  padding: 2px;\n\n  -webkit-box-shadow: 2px 3px 5px rgba(0,0,0,.2);\n  -moz-box-shadow: 2px 3px 5px rgba(0,0,0,.2);\n  box-shadow: 2px 3px 5px rgba(0,0,0,.2);\n  border-radius: 3px;\n  border: 1px solid silver;\n\n  background: white;\n  font-size: 90%;\n  font-family: monospace;\n\n  max-height: 20em;\n  overflow-y: auto;\n}\n\n.msgapi .CodeMirror-hint {\n  margin: 0;\n  padding: 0 4px;\n  border-radius: 2px;\n  white-space: pre;\n  color: black;\n  cursor: pointer;\n}\n\n.msgapi li.CodeMirror-hint-active {\n  background: #08f;\n  color: white;\n}\n",""]);const r=o},23279:(t,e,n)=>{var i=n(13218),o=n(7771),r=n(14841),s=Math.max,c=Math.min;t.exports=function(t,e,n){var l,a,h,u,f,d,p=0,g=!1,m=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=l,i=a;return l=a=void 0,p=e,u=t.apply(i,n)}function x(t){return p=t,f=setTimeout(k,e),g?y(t):u}function w(t){var n=t-d;return void 0===d||n>=e||n<0||m&&t-p>=h}function k(){var t=o();if(w(t))return C(t);f=setTimeout(k,function(t){var n=e-(t-d);return m?c(n,h-(t-p)):n}(t))}function C(t){return f=void 0,v&&l?y(t):(l=a=void 0,u)}function b(){var t=o(),n=w(t);if(l=arguments,a=this,d=t,n){if(void 0===f)return x(d);if(m)return clearTimeout(f),f=setTimeout(k,e),y(d)}return void 0===f&&(f=setTimeout(k,e)),u}return e=r(e)||0,i(n)&&(g=!!n.leading,h=(m="maxWait"in n)?s(r(n.maxWait)||0,e):h,v="trailing"in n?!!n.trailing:v),b.cancel=function(){void 0!==f&&clearTimeout(f),p=0,l=d=a=f=void 0},b.flush=function(){return void 0===f?u:C(o())},b}},7654:(t,e,n)=>{var i=n(81763);t.exports=function(t){return i(t)&&t!=+t}},7771:(t,e,n)=>{var i=n(55639);t.exports=function(){return i.Date.now()}},10240:(t,e,n)=>{var i=n(29750),o=n(80531),r=n(40554),s=n(79833);t.exports=function(t,e,n){return t=s(t),n=null==n?0:i(r(n),0,t.length),e=o(e),t.slice(n,n+e.length)==e}},93054:(t,e,n)=>{"use strict";e.__esModule=!0,e.default=function(t){if("function"!=typeof t)throw new TypeError("You must provide a valid moment object");var e="function"==typeof t().locale?"locale":"lang";if(!t.localeData)throw new TypeError("The Moment localizer depends on the `localeData` api, please provide a moment object v2.2.0 or higher");function n(n,i,o){return n?t(i,o)[e](n):t(i,o)}var i={formats:{date:"L",time:"LT",default:"lll",header:"MMMM YYYY",footer:"LL",weekday:"dd",dayOfMonth:"DD",month:"MMM",year:"YYYY",decade:function(e,n,i){return i.format(e,"YYYY",n)+" - "+i.format(function(e){return t(e).add(10,"year").add(-1,"millisecond").toDate()}(e),"YYYY",n)},century:function(e,n,i){return i.format(e,"YYYY",n)+" - "+i.format(function(e){return t(e).add(100,"year").add(-1,"millisecond").toDate()}(e),"YYYY",n)}},firstOfWeek:function(e){return t.localeData(e).firstDayOfWeek()},parse:function(t,e,i){if(!t)return null;var o=n(i,t,e);return o.isValid()?o.toDate():null},format:function(t,e,i){return n(i,t).format(e)}};return o.default.setDateLocalizer(i),i};var i,o=(i=n(77036))&&i.__esModule?i:{default:i};t.exports=e.default},21090:(t,e)=>{"use strict";var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};e.ZP=function(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];i=e.debug;var m={initialState:e.initialState,initTypes:g(e.initTypes,["@@redux/INIT","@@INIT"]),limit:e.limit,filter:e.filter||function(){return!0},undoType:e.undoType||c.UNDO,redoType:e.redoType||c.REDO};return m.history=e.initialHistory||p(m.initialState),0===m.initTypes.length&&console.warn("redux-undo: supply at least one action type in initTypes to ensure initial state"),function(e,i){r(i,e);var c=void 0;switch(i.type){case m.undoType:return o("after undo",c=h(e)),s(),c?d(e,c):e;case m.redoType:return o("after redo",c=u(e)),s(),c?d(e,c):e;default:if(c=t(e&&e.present,i),m.initTypes.some((function(t){return t===i.type})))return o("reset history due to init action"),s(),f(n({},e,p(c)));if(m.filter&&"function"==typeof m.filter&&!m.filter(i,c,e&&e.present))return o("filter prevented action, not storing it"),s(),f(n({},e,{present:c}));var g=a(e&&void 0!==e.present?e:m.history,c,m.limit);return o("after insert",{history:g,free:m.limit-l(g)}),s(),f(n({},e,g))}}};var i=void 0;function o(){if(i){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];console.group||e.unshift("%credux-undo","font-style: italic"),console.log.apply(console,e)}}function r(t,e){if(i){var n=["action",t.type];console.group?(n.unshift("%credux-undo","font-style: italic"),console.groupCollapsed.apply(console,n),console.log("received",{state:e,action:t})):o.apply(void 0,n)}}function s(){if(i)return console.groupEnd&&console.groupEnd()}var c={UNDO:"@@redux-undo/UNDO",REDO:"@@redux-undo/REDO"};function l(t){var e=t.past,n=t.future;return e.length+1+n.length}function a(t,e,n){o("insert",{state:e,history:t,free:n-l(t)});var i=t.past,r=t.present,s=n&&l(t)>=n;return void 0===r?{past:[],present:e,future:[]}:{past:[].concat(i.slice(s?1:0),[r]),present:e,future:[]}}function h(t){o("undo",{history:t});var e=t.past,n=t.present,i=t.future;return e.length<=0?t:{past:e.slice(0,e.length-1),present:e[e.length-1],future:[n].concat(i)}}function u(t){o("redo",{history:t});var e=t.past,n=t.present,i=t.future;return i.length<=0?t:{future:i.slice(1,i.length),present:i[0],past:[].concat(e,[n])}}function f(t){return n({},t,{history:t})}function d(t,e){return f(n({},t,e))}function p(t){return{past:[],present:t,future:[]}}function g(t){var e=arguments.length<=1||void 0===arguments[1]?[]:arguments[1];return Array.isArray(t)?t:"string"==typeof t?[t]:e}e.MF=c},16179:(t,e,n)=>{"use strict";var i=n(93379),o=n.n(i),r=n(40656);o()(r.Z,{insert:"head",singleton:!1}),r.Z.locals}}]);