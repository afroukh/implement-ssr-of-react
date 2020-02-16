!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=11)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-config")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("redux-thunk")},function(e,t,r){r(12),e.exports=r(13)},function(e,t){e.exports=require("@babel/polyfill")},function(e,t,r){"use strict";r.r(t);var n=r(4),o=r.n(n),u=r(1),c=r(0),i=r.n(c),a=r(2),s=r(7),l=r.n(s);function f(e,t,r,n,o,u,c){try{var i=e[u](c),a=i.value}catch(e){return void r(e)}i.done?t(a):Promise.resolve(a).then(n,o)}var p=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("http://httpbin.org/get");case 2:r=e.sent,t({type:"fetch_request_query",payload:r.data});case 4:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var u=e.apply(t,r);function c(e){f(u,n,o,c,i,"next",e)}function i(e){f(u,n,o,c,i,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}(),d={component:function(){var e=Object(a.useDispatch)();Object(c.useEffect)((function(){p(e)}),[]);var t=Object(a.useSelector)((function(e){return e})).request;return i.a.createElement("span",null,JSON.stringify(t))},serverLoadData:function(e){return p(e)}},b={component:function(){return i.a.createElement("span",null,"無此頁面")}},v=r(5),y=r.n(v),O=r(6),m=function(){return i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(O.Link,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(O.Link,{to:"otherPage"},"Other page")))},g=function(e){var t=e.route;return i.a.createElement("div",null,i.a.createElement(m,null),Object(u.renderRoutes)(t.routes))};function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){x(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}g.propTypes={route:y.a.objectOf(y.a.any)},g.defaultProps={route:null};var P=[h({},{component:g},{routes:[h({},d,{path:"/",exact:!0}),h({},b)]})],q=r(8),E=r(9),w=r(3),S=r(10),_=r.n(S),D=Object(w.combineReducers)({request:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_request_query":return t.payload;default:return e}}}),R=o()(),L=process.env.PORT||3001;R.use(o.a.static("dist")),R.get("*",(function(e,t){var r=Object(w.createStore)(D,Object(w.applyMiddleware)(_.a)),n=r.dispatch,o=Object(u.matchRoutes)(P,e.path).map((function(e){var t=e.route;return t.serverLoadData?t.serverLoadData(n):null}));Promise.all(o).then((function(){var n={},o=function(e,t,r){var n=Object(q.renderToString)(i.a.createElement(a.Provider,{store:t},i.a.createElement(E.StaticRouter,{location:e.path,context:r},i.a.createElement("div",null,Object(u.renderRoutes)(P)))));return'\n    <html>\n      <body>\n        <div id="root">'.concat(n,"</div>\n        <script>\n          window.__PRELOADED_STATE__= ").concat(JSON.stringify(t.getState()),'\n        <\/script>\n        <script src="./bundle.js"><\/script>\n      </body>\n    </html>\n  ')}(e,r,n);n.notFound&&t.status(404),t.send(o)}))})),R.listen(L,(function(){console.log("Listening on port: ".concat(L))}))}]);