(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"20zM":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/curveAnalysis/butterfly",function(){return n("Ahzw")}])},"3Ttg":function(t,e,n){"use strict";n.d(e,"a",(function(){return O})),n.d(e,"c",(function(){return v})),n.d(e,"b",(function(){return j}));var r=n("wx14"),o=n("Ff2n"),i=n("1OyB"),c=n("vuIU"),a=n("JX7q"),u=n("Ji7U"),f=n("md7G"),s=n("foSv"),l=n("rePB"),p=n("LvDl"),d=n("q1tI"),b=n.n(d),g=b.a.createElement;function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){Object(l.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(s.a)(t);if(e){var o=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var O=function(t){Object(u.a)(n,t);var e=h(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return t=e.call.apply(e,[this].concat(o)),Object(l.a)(Object(a.a)(t),"state",{isHovering:!1}),t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state.isHovering,n=this.props,i=n.children,c=n.onClick,a=n.key,u=Object(o.a)(n,["children","onClick","key"]),f=Object(p.isFunction)(i)?{onMouseEnter:function(e){t.setState({isHovering:!0}),t.props.onMouseEnter&&t.props.onMouseEnter(e)},onMouseLeave:function(e){t.setState({isHovering:!1}),t.props.onMouseLeae&&t.props.onMouseLeave(e)}}:{};u.marginY&&(u.marginTop=u.marginY,u.marginBottom=u.marginY,delete u.marginY),u.paddingY&&(u.paddingTop=u.paddingY,u.paddingBottom=u.paddingY,delete u.paddingY),u.marginX&&(u.marginLeft=u.marginX,u.marginRight=u.marginX,delete u.marginX),u.paddingX&&(u.paddingLeft=u.paddingX,u.paddingRight=u.paddingX,delete u.paddingX);var s={key:a,onClick:c};return g("div",Object(r.a)({},s,{style:m({display:"flex",flexFlow:"column",boxSizing:"border-box"},u)},f),Object(p.isFunction)(i)?i(e):i)}}]),n}(b.a.Component),v=function(t){var e=t.src,n=t.size,i=t.padding,c=t.style,a=Object(o.a)(t,["src","size","padding","style"]);return i||((e.indexOf("conv2d2")>-1||e.indexOf("conv2d1")>-1||e.indexOf("conv2d0"))&&(i=0),(e.indexOf("mixed3a")>-1||e.indexOf("mixed3b")>-1)&&(i=0),(e.indexOf("mixed4a")>-1||e.indexOf("mixed4b")>-1||e.indexOf("mixed4c")>-1)&&(i=0)),g("div",Object(r.a)({style:Object.assign({},{width:n,height:n,overflow:"hidden",borderRadius:5,position:"relative"},c)},a),g("img",{src:e,width:n+2*i,height:n+2*i,style:{position:"absolute",left:-i,top:-i}}))},j=function(t){var e=t.size,n=t.children,i=Object(o.a)(t,["size","children"]);if(e){i=m({},i,{},{400:{fontSize:14,fontWeight:600},500:{fontSize:16,fontWeight:500},600:{fontSize:20,fontWeight:500}}[e]||{})}return g(O,Object(r.a)({color:"black",display:"inline-block"},i),n)}},Ahzw:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),i=n("3Ttg"),c=n("uYk3"),a=o.a.createElement,u=function(t){var e=t.children;return a(i.b,{marginBottom:10,borderBottom:"1px solid rgba(0, 0, 0, 0.2)",paddingBottom:1,paddingLeft:5,width:"100%",fontSize:16,fontWeight:600},e)};e.default=function(){return a(c.a,null,a(i.a,{flexFlow:"row",alignSelf:"center"},a(i.a,{marginX:5},a(u,null,"Source"),a("img",{width:264,src:"https://storage.googleapis.com/clarity--curve-detectors/three_examples/butterfly_leaf/source.png"})),a(i.a,{marginX:5},a(u,null,"Tracing"),a("video",{width:264,height:264,controls:!0,poster:"https://storage.googleapis.com/clarity--curve-detectors/three_examples/butterfly_leaf/frame_99.png",src:"https://storage.googleapis.com/clarity--curve-detectors/three_examples/butterfly_leaf/movie_butterfly_leaf.mp4"})),a(i.a,{marginX:5},a(u,null,"Tracing NMF Components"),a("video",{width:264,height:264,controls:!0,poster:"https://storage.googleapis.com/clarity--curve-detectors/three_examples/butterfly/frame_99.png",src:"https://storage.googleapis.com/clarity--curve-detectors/three_examples/butterfly/movie_butterfly.mp4"}))))}},Ff2n:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}n.d(e,"a",(function(){return r}))},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},YuTi:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return i}));var o=n("JX7q");function i(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(o.a)(t):e}},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},uYk3:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("3Ttg"),c=o.a.createElement;e.a=function(t){var e=t.children,n=t.background,r=void 0===n?"rgb(252, 252, 252)":n,o=(t.fullWidth,t.margin,t.banner),a=void 0!==o&&o;return c(i.a,{gridColumn:"screen",paddingTop:20,background:r,marginTop:40,marginBottom:a?0:40,paddingBottom:a?0:20,borderTop:"1px solid rgba(0, 0, 0, 0.1)",borderBottom:!a&&"1px solid rgba(0, 0, 0, 0.1)"},e)}},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},wx14:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n}},[["20zM",0,1,2]]]);