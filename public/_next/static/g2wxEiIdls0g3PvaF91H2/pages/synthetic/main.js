(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"3Ttg":function(t,e,n){"use strict";n.d(e,"a",(function(){return I})),n.d(e,"c",(function(){return b})),n.d(e,"b",(function(){return O}));var r=n("wx14"),i=n("Ff2n"),o=n("1OyB"),c=n("vuIU"),u=n("JX7q"),a=n("Ji7U"),s=n("md7G"),g=n("foSv"),f=n("rePB"),l=n("LvDl"),M=n("q1tI"),j=n.n(M),A=j.a.createElement;function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){Object(f.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(g.a)(t);if(e){var i=Object(g.a)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var I=function(t){Object(a.a)(n,t);var e=p(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return t=e.call.apply(e,[this].concat(i)),Object(f.a)(Object(u.a)(t),"state",{isHovering:!1}),t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state.isHovering,n=this.props,o=n.children,c=n.onClick,u=n.key,a=Object(i.a)(n,["children","onClick","key"]),s=Object(l.isFunction)(o)?{onMouseEnter:function(e){t.setState({isHovering:!0}),t.props.onMouseEnter&&t.props.onMouseEnter(e)},onMouseLeave:function(e){t.setState({isHovering:!1}),t.props.onMouseLeae&&t.props.onMouseLeave(e)}}:{};a.marginY&&(a.marginTop=a.marginY,a.marginBottom=a.marginY,delete a.marginY),a.paddingY&&(a.paddingTop=a.paddingY,a.paddingBottom=a.paddingY,delete a.paddingY),a.marginX&&(a.marginLeft=a.marginX,a.marginRight=a.marginX,delete a.marginX),a.paddingX&&(a.paddingLeft=a.paddingX,a.paddingRight=a.paddingX,delete a.paddingX);var g={key:u,onClick:c};return A("div",Object(r.a)({},g,{style:y({display:"flex",flexFlow:"column",boxSizing:"border-box"},a)},s),Object(l.isFunction)(o)?o(e):o)}}]),n}(j.a.Component),b=function(t){var e=t.src,n=t.size,o=t.padding,c=t.style,u=Object(i.a)(t,["src","size","padding","style"]);return o||((e.indexOf("conv2d2")>-1||e.indexOf("conv2d1")>-1||e.indexOf("conv2d0"))&&(o=0),(e.indexOf("mixed3a")>-1||e.indexOf("mixed3b")>-1)&&(o=0),(e.indexOf("mixed4a")>-1||e.indexOf("mixed4b")>-1||e.indexOf("mixed4c")>-1)&&(o=0)),A("div",Object(r.a)({style:Object.assign({},{width:n,height:n,overflow:"hidden",borderRadius:5,position:"relative"},c)},u),A("img",{src:e,width:n+2*o,height:n+2*o,style:{position:"absolute",left:-o,top:-o}}))},O=function(t){var e=t.size,n=t.children,o=Object(i.a)(t,["size","children"]);if(e){o=y({},o,{},{400:{fontSize:14,fontWeight:600},500:{fontSize:16,fontWeight:500},600:{fontSize:20,fontWeight:500}}[e]||{})}return A(I,Object(r.a)({color:"black",display:"inline-block"},o),n)}},"4nex":function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIxNXB4IiB2aWV3Qm94PSIwIDAgMjQgMTUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjIgKDQ3MzI3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJjb2xhYiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTEuOTc3LDExLjc3IEMtMC42OSw5LjQ5MyAtMC42MjgsNC42OTEgMS45NzcsMi40MTMgQzIuOTE5LDMuMDU3IDMuNTIyLDQuMDc1IDQuNDksNC42OTEgQzMuMzM4LDYuMjkxIDMuMzQ0LDcuODkyIDQuNDg2LDkuNDk0IEMzLjUyMiwxMC4xMTEgMi45MTgsMTEuMTI2IDEuOTc3LDExLjc3IFoiIGlkPSJTaGFwZSIgZmlsbD0iI0ZEQkExOCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTIuMjU3LDEyLjExNCBDMTAuNDksMTAuNDgxIDkuNzcyLDguNDU2IDEwLjEzOSw2LjA5NCBDMTAuNTksMy4xODQgMTIuMjc4LDEuMjAxIDE1LjA4NSwwLjQxNiBDMTcuNjUsLTAuMzAyIDIwLjA0OSwwLjE5OSAyMS45NjMsMi4yMzUgQzIxLjA3OSwyLjk3OCAyMC4yNTYsMy43ODIgMTkuNTI5LDQuNjgxIEMxOC40ODgsMy44MjcgMTcuMzE5LDMuNDM1IDE2LDMuODU2IEMxMy41OTYsNC42MjMgMTIuOTU0LDcuMDk3IDE0LjUwNiw5LjUgQzE0LjI2NSw5Ljc3NSAxNC4wMTMsMTAuMDQxIDEzLjc4NSwxMC4zMjYgQzEzLjI5NSwxMC45MzkgMTIuNTExLDExLjMgMTIuMjU3LDEyLjExNCBaIiBpZD0iU2hhcGUiIGZpbGw9IiNGQ0Q5M0QiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE5LjUyOSw0LjY4MiBDMjAuMjU2LDMuNzgzIDIxLjA3OSwyLjk3OSAyMS45NjMsMi4yMzYgQzI0LjY2Niw1LjAxOSAyNC42NjQsOS4yNjcgMjEuOTU4LDEyIEMxOS4zMSwxNC42NzQgMTUuMDIyLDE0LjcyNSAxMi4yNTcsMTIuMTE1IEMxMi41MTEsMTEuMzAxIDEzLjI5NSwxMC45NCAxMy43ODUsMTAuMzI3IEMxNC4wMTMsMTAuMDQyIDE0LjI2NSw5Ljc3NSAxNC41MDYsOS41MDEgQzE1LjU1OSwxMC40MTcgMTYuNzYsMTAuNzY5IDE4LjEwNiwxMC4zMzEgQzIwLjUwMiw5LjU1MSAyMS4xNTEsNi45MjcgMTkuNTI5LDQuNjgyIFoiIGlkPSJTaGFwZSIgZmlsbD0iI0ZEQkExOCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNC40OSw0LjY5MSBDMy41MjIsNC4wNzUgMi45MTksMy4wNTcgMS45NzcsMi40MTMgQzQuMTg2LDAuMDE1IDcuNjk4LC0wLjUyOSAxMC40NTMsMS4wNTggQzExLjAwOCwxLjM3OCAxMS4xNzIsMS42NjQgMTAuNzM4LDIuMTg2IEMxMC41ODEsMi4zNzQgMTAuNDgsMi42MDggMTAuMzQ3LDIuODE3IEMxMC4wNDgsMy4yODcgOS44MzgsMy44ODQgOS40MTgsNC4xODggQzguOTMzLDQuNTM5IDguNTIzLDMuODQ3IDguMDIxLDMuNzQ2IEM2LjY3MywzLjQ3NSA1LjUwOSwzLjc4NyA0LjQ5LDQuNjkxIFoiIGlkPSJTaGFwZSIgZmlsbD0iI0ZDRDkzRCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMS45NzcsMTEuNzcgQzIuOTE4LDExLjEyNiAzLjUyMiwxMC4xMTEgNC40ODYsOS40OTMgQzUuODU5LDEwLjY0NSA3LjMzNiwxMC45MjYgOC45MzYsOS45OTIgQzkuMjY4LDkuNzk4IDkuNDM5LDkuOTA0IDkuNjA5LDEwLjE4MiBDOS45OTUsMTAuODE3IDEwLjM2MiwxMS40NjcgMTAuNzksMTIuMDcyIEMxMS4xMywxMi41NTIgMTEuMDEyLDEyLjc4NyAxMC41MzcsMTMuMDc4IEM3Ljg0LDE0LjczIDQuMjA1LDE0LjE4OCAxLjk3NywxMS43NyBaIiBpZD0iU2hhcGUiIGZpbGw9IiNGQ0Q5M0QiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="},"8lnk":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAAyCAIAAAD9fhrKAAAAA3NCSVQICAjb4U/gAAAAX3pUWHRSYXcgcHJvZmlsZSB0eXBlIEFQUDEAAAiZ40pPzUstykxWKCjKT8vMSeVSAANjEy4TSxNLo0QDAwMLAwgwNDAwNgSSRkC2OVQo0QAFmJibpQGhuVmymSmIzwUAT7oVaBst2IwAAAJmSURBVHic7dTRjew4EENRsuSOYCN5CWz+SXVxPyS1HzaDAu7BwKClstvQAPSff/51fVyP6uN6XB/5cX1Uz1/r5XrkPfCoHvtR1e9Wteyl+tilWlqPveSlKtdSPa5SPXelVGdXXiq76uYd6o7trBNslVWVG2TfRctOWZbqhJRUjpWTFadPUCqpxPv63vZZVJxU38UdWjufrY4TJ+5Uy31zzm21HLmjsyJHJ7T0y3G1FDlWV7UcK+VWtdV2yl1qO3bffMJ79feX11npUi99z+LeVS/1usNrD2vvfpeyH9mh7m6pl7LUPgNdOySlfah7JRV5j0WldlJS7RPdISrJ2bd7SxU577X03joqqVqWa5/ZWbRPdrWsfdiq+D7oPayo2rpvu09J/f6Ez39Abqnz5sSREne0Z+6AOr5BZzc37/XWHj7XJCfnjuW+Id35jXXUSrdaN+9nk/N3vmE/lVa6Eyk6AzkP7ueUdGsPdCdJoj1zwh3IGfh/bimtnK94d98D6HMA+X31nTwfm/ec9m/1Xyf3e8M36vicpdTR9w0uAcAQFBaAMSgsAGNQWADGoLAAjEFhARiDwgIwBoUFYAwKC8AYFBaAMSgsAGNQWADGoLAAjEFhARiDwgIwBoUFYAwKC8AYFBaAMSgsAGNQWADGoLAAjEFhARiDwgIwBoUFYAwKC8AYFBaAMSgsAGNQWADGoLAAjEFhARiDwgIwBoUFYAwKC8AYFBaAMSgsAGNQWADGoLAAjEFhARiDwgIwBoUFYAwKC8AYFBaAMSgsAGNQWADGoLAAjEFhARiDwgIwBoUFYAwKC8AY/wGpbuP1OXacNwAAAABJRU5ErkJggg=="},BsWD:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("a3WO");function i(t,e){if(t){if("string"===typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},Ff2n:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}n.d(e,"a",(function(){return r}))},HYJG:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/synthetic/main",function(){return n("lBG6")}])},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return i}))},ODXe:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("BsWD");function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var c,u=t[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(a){i=!0,o=a}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},PyG4:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("ODXe");var r=n("LvDl"),i=function(t,e,n){var i="jpg";return Object(r.includes)(["conv2d0","conv2d1","conv2d2"],e)&&(i="png"),"https://distill.pub/2020/circuits/early-vision/images/neuron/".concat(e,"_").concat(n,".").concat(i)}},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},RYxO:function(t,e){t.exports="/_next/static/images/image-526ffa674c525ecfd0ac9ccf3b02648c.png"},UB8a:function(t,e,n){"use strict";var r=n("rePB"),i=n("Ff2n"),o=n("q1tI"),c=n.n(o).a.createElement;function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a=function(t){var e=t.href,r=Object(i.a)(t,["href"]);return c("a",{style:a({background:"rgba(255, 255, 255, 0.75)",padding:"4px 8px",borderRadius:4,fontSize:"10px !important",textDecoration:"none",color:"#aaa",fontWeight:300,border:"solid 1px rgba(0, 0, 0, 0.08)",borderBottomColor:"rgba(0, 0, 0, 0.15)",textTransform:"uppercase",lineHeight:"16px",display:"inline-block"},r),target:"_blank",href:e},"Reproduce in a"," ",c("img",{style:{transform:"translateY(1px)"},src:n("4nex")})," ","Notebook")}},YuTi:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},a3WO:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},ilYS:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),i=n.n(r),o=n("3Ttg"),c=i.a.createElement;e.default=function(){return c(o.a,{flexFlow:"row",marginLeft:5},c(o.b,{marginRight:5,fontWeight:600},"0\u03c3"),c(o.a,{alignItems:"center"},c("img",{style:{borderRadius:5,marginTop:1},width:140,src:n("8lnk")}),c(o.b,{fontSize:14},"Standard Deviations")),c(o.b,{marginLeft:5,fontWeight:600},"25\u03c3"))}},lBG6:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),i=n.n(r),o=n("UB8a"),c=n("3Ttg"),u=(n("PyG4"),n("ilYS")),a=i.a.createElement;e.default=function(){return a(c.a,{gridColumn:"screen",alignItems:"center",marginY:20,marginBottom:40},a(c.a,{flexFlow:"row",transform:"translate(47px)"},a(c.a,null,a("img",{width:760,src:n("RYxO")})),a(c.a,{marginTop:90},a(u.default,null))),a(c.a,{width:703,marginRight:15,marginTop:5},a(c.a,{alignSelf:"flex-end"},a(o.a,{href:"https://colab.research.google.com/drive/1lnFJ0MjhPzw3J9u-Xhqvn5hjAF9sZ3aY#scrollTo=znBLPN6h32-S"}))))}},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return o}));var i=n("JX7q");function o(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(i.a)(t):e}},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return i}))},wx14:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n}},[["HYJG",0,1,2]]]);