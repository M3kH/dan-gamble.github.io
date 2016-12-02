webpackJsonp([4],[,,,,,,,function(t,n,e){"use strict";var o=e(0),r=e.n(o),i=e(4),a=e.n(i),s=e(14),u=e(15),c=e(19),f=e.n(c),d=e(21),h=e.n(d),l=e(23),p=e.n(l);e.d(n,"c",function(){return v});var _=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t};r.a.component(f.a.name,f.a),r.a.component(h.a.name,h.a),r.a.use(a.a,{keyName:"head",attribute:"n-head",ssrAttribute:"n-head-ssr",tagIDKeyName:"hid"});var m={name:"page",mode:"out-in"},v=_({router:s.a,store:u.a,_nuxt:{transition:Object.assign({},m),setTransition:function(t){return t?"string"==typeof t&&(t=Object.assign({},m,{name:t})):t=m,this.$options._nuxt.transition.name=t.name,this.$options._nuxt.transition.mode=t.mode,t},err:null,error:function(t){return t=t||null,this.$options._nuxt.err=t,t}}},p.a);e.d(n,"b",function(){return s.a}),e.d(n,"a",function(){return u.a})},function(t,n,e){"use strict";function o(t){return[].concat.apply([],t.matched.map(function(t){return Object.keys(t.components).map(function(n){return t.components[n]})}))}function r(t){return[].concat.apply([],t.matched.map(function(t){return Object.keys(t.instances).map(function(n){return t.instances[n]})}))}function i(t,n){return Array.prototype.concat.apply([],t.matched.map(function(t,e){return Object.keys(t.components).map(function(o){return n(t.components[o],t.instances[o],t,o,e)})}))}function a(t){var n={isServer:!!t.isServer,isClient:!!t.isClient,isDev:!1,store:t.store,route:t.to?t.to:t.route,error:t.error},e=t.next;return n.params=n.route.params||{},n.query=n.route.query||{},n.redirect=function(t,n,o){t&&("string"!=typeof t||"undefined"!=typeof n&&"object"!==("undefined"==typeof n?"undefined":c(n))||(o=n||{},n=t,t=302),e({path:n,query:o,status:t}))},t.req&&(n.req=t.req),t.res&&(n.res=t.res),n}function s(t,n){var e=void 0;return e=2===t.length?new Promise(function(e){t(n,function(t,o){t&&n.error(t),o=o||{},e(o)})}):t(n),e instanceof Promise||(e=Promise.resolve(e)),e}function u(t){var n=window.location.pathname;return t&&0===n.indexOf(t)&&(n=n.slice(t.length)),(n||"/")+window.location.search+window.location.hash}n.b=o,n.e=r,n.a=i,n.c=a,n.d=s,n.f=u;var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}},function(t,n,e){"use strict";t.exports=e(3).polyfill()},function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"nuxt-container",head:{titleTemplate:"%s - dangamble.co.uk"}}},function(t,n,e){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var r=e(0),i=o(r);n.default={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"black",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,i.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},function(t,n,e){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var r=e(0),i=o(r),a=e(22),s=o(a),u=e(20),c=o(u);n.default={name:"nuxt",beforeCreate:function(){i.default.util.defineReactive(this,"nuxt",this.$root.$options._nuxt)},created:function(){i.default.prototype.$nuxt=this,this.$root.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this)},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())}},components:{NuxtError:s.default,NuxtLoading:c.default}}},function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"nuxt-error",props:["error"],head:function(){return{title:this.error.message||"An error occured"}}}},function(t,n,e){"use strict";var o=e(0),r=e.n(o),i=e(5),a=e.n(i);r.a.use(a.a);var s=function(){return e.e(2).then(e.bind(null,33))},u=function(){return e.e(1).then(e.bind(null,34))},c=function(){return e.e(3).then(e.bind(null,35))},f=function(){return e.e(0).then(e.bind(null,32))},d=function(t,n,e){if(e)return e;var o={x:0,y:0};return t.hash&&(o={selector:t.hash}),o};n.a=new a.a({mode:"history",base:"/",linkActiveClass:"router-link-active",scrollBehavior:d,routes:[{path:"/about",component:s},{path:"/articles/",component:u},{path:"/",component:c},{path:"/articles/:slug",component:f,name:"article"}]})},function(t,n,e){"use strict";var o=e(0),r=e.n(o),i=e(6),a=e.n(i);r.a.use(a.a);var s=new a.a.Store({state:{baseDomain:"http://dangamble.co.uk"},getters:{baseDomain:function(t){return t.baseDomain}}});n.a=s},function(t,n){},function(t,n){},,function(t,n,e){var o,r;o=e(10);var i=e(28);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,n,e){var o,r;e(17),o=e(11);var i=e(25);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-1218492d",t.exports=o},function(t,n,e){var o,r;o=e(12);var i=e(27);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,n,e){var o,r;e(16),o=e(13);var i=e(24);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-0d8cbd10",t.exports=o},function(t,n,e){var o,r,i=e(26);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,n){t.exports={render:function(){var t=this;return t._h("div",{staticClass:"error-page"},[t._h("div",[t._h("h1",{staticClass:"error-code"},[t._s(t.error.statusCode)])," ",t._h("div",{staticClass:"error-wrapper-message"},[t._h("h2",{staticClass:"error-message"},[t._s(t.error.message)])])," ",404===t.error.statusCode?t._h("p",[t._h("router-link",{staticClass:"error-link",attrs:{to:"/"}},["Back to the home page"])]):t._e()])])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this;return t._h("div",{staticClass:"progress",style:{width:t.percent+"%",height:t.height,"background-color":t.canSuccess?t.color:t.failedColor,opacity:t.show?1:0}})},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this;return t._h("nuxt-container",[t._h("router-link",{attrs:{to:"/about"}},["About page"])," ",t._h("router-link",{attrs:{to:"/articles"}},["Articles"])," ",t._h("nuxt")])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this;return t._h("div",[t._h("nuxt-loading",{ref:"loading"})," ",t._h("transition",{attrs:{name:t.nuxt.transition.name,mode:t.nuxt.transition.mode}},[t.nuxt.err?t._e():t._h("router-view")," ",t.nuxt.err?t._h("nuxt-error",{attrs:{error:t.nuxt.err}}):t._e()])])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this;return t._h("div",{attrs:{id:"__nuxt"}},[t._t("default")])},staticRenderFns:[]}},,function(t,n,e){"use strict";function o(t,n,o){var r=this,i=e.i(d.a)(t,function(t,n,e,o){return"function"!=typeof t||t.options?("object"!==("undefined"==typeof t?"undefined":h(t))||t.options||(t=c.a.extend(t),t._Ctor=t,e.components[o]=t),t):new Promise(function(n,r){var i=function(t){t.options?(t._Ctor=t,t.extendOptions=t.options):(t=c.a.extend(t),t._Ctor=t),e.components[o]=t,n(t)};t().then(i).catch(r)})});this.$loading.start&&this.$loading.start(),Promise.all(i).then(function(){return o()}).catch(function(t){r.error({statusCode:500,message:t.message}),o(!1)})}function r(t,n,o){var r=this,i=e.i(d.b)(t);if(!i.length)return this.error({statusCode:404,message:"This page could not be found.",url:t.path}),o();i.forEach(function(t){if(t._data||(t._data=t.options.data||l),t._Ctor&&t._Ctor.options&&t._dataFn){t.options.fetch=t._Ctor.options.fetch;var n=t._data.toString().replace(/\s/g,""),e=t._dataFn,o=(t._Ctor.options.data||l).toString().replace(/\s/g,"");o!==n&&o!==e&&(t._data=t._Ctor.options.data||l)}}),this.setTransition(i[0].options.transition),this.error();var a=!1;Promise.all(i.map(function(n){var i=[],s=function(t){this.$loading.finish&&this.$loading.finish(),a=!0,o(t)},u=e.i(d.c)({to:t,store:f.a,isClient:!0,next:s.bind(r),error:r.error.bind(r)});if(n._data&&"function"==typeof n._data){var c=e.i(d.d)(n._data,u);c.then(function(t){n.options.data=function(){return t||{}},n._dataFn=n.options.data.toString().replace(/\s/g,""),n._Ctor&&n._Ctor.options&&(n._Ctor.options.data=n.options.data),r.$loading.increase&&r.$loading.increase(30)}),i.push(c)}if(n.options.fetch){var h=n.options.fetch(u);h instanceof Promise||(h=Promise.resolve(h)),h.then(function(){return r.$loading.increase&&r.$loading.increase(30)}),i.push(h)}return Promise.all(i)})).then(function(){r.$loading.finish&&r.$loading.finish(),a||o()}).catch(function(t){r.error(t),o(!1)})}function i(t,n){var o=this;this.$nuxt._routerViewCache&&this.$nuxt._routerViewCache.default&&c.a.nextTick(function(){var n=o.$nuxt._routerViewCache.default.__file;"function"==typeof o.$nuxt._routerViewCache.default&&(n=o.$nuxt._routerViewCache.default.options.__file);var r=e.i(d.e)(t);r.forEach(function(t,e){if(t&&t.constructor.options.__file===n){var o=t.constructor.options.data();for(var r in o)c.a.set(t.$data,r,o[r])}})})}function a(t){v.forEach(function(n){"function"==typeof n&&n(t)})}var s=e(9),u=(e.n(s),e(0)),c=e.n(u),f=e(7),d=e(8),h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e(1).polyfill();var l=function(){return{}},p=window.__NUXT__||{};if(!p)throw new Error("[nuxt.js] cannot find the global variable __NUXT__, make sure the server is working.");var _=e.i(d.f)(f.b.options.base),m=e.i(d.a)(f.b.match(_),function(t,n,e,o,r){return"function"!=typeof t||t.options?t:new Promise(function(n,i){var a=function(t){t.options?(t._Ctor=t,t.extendOptions=t.options):(t=c.a.extend(t),t._Ctor=t),t.options.data&&"function"==typeof t.options.data&&(t._data=t.options.data,p.serverRendered&&(t.options.data=function(){return p.data[r]||{}},t._dataFn=t.options.data.toString().replace(/\s/g,"")),t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)),e.components[o]=t,n(t)};t().then(a).catch(i)})}),v=[];window.onNuxtReady=function(t){v.push(t)},Promise.all(m).then(function(t){var n=new c.a(f.c),e=function(){n.$mount("#__nuxt"),n.$loading=n.$nuxt.$loading,a(n)};return p.state&&f.a.replaceState(p.state),n.setTransition=n.$options._nuxt.setTransition.bind(n),t.length&&n.setTransition(t[0].options.transition),n.error=n.$options._nuxt.error.bind(n),n.$loading={},p.error&&n.error(p.error),f.b.beforeEach(o.bind(n)),f.b.beforeEach(r.bind(n)),f.b.afterEach(i.bind(n)),p.serverRendered?void e():void r.call(n,f.b.currentRoute,f.b.currentRoute,function(t){if(t){var n=function(){var n=!1;return f.b.afterEach(function(){n||(n=!0,e())}),f.b.push(t),{v:void 0}}();if("object"===("undefined"==typeof n?"undefined":h(n)))return n.v}e()})}).catch(function(t){console.error("[nuxt.js] Cannot load components",t)})}],[30]);