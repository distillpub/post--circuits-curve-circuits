(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"3Ttg":function(e,t,n){"use strict";n.d(t,"a",(function(){return y})),n.d(t,"c",(function(){return w})),n.d(t,"b",(function(){return v}));var r=n("wx14"),i=n("Ff2n"),o=n("1OyB"),c=n("vuIU"),a=n("JX7q"),u=n("Ji7U"),d=n("md7G"),l=n("foSv"),s=n("rePB"),f=n("LvDl"),p=n("q1tI"),g=n.n(p),b=g.a.createElement;function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var i=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var y=function(e){Object(u.a)(n,e);var t=h(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return e=t.call.apply(t,[this].concat(i)),Object(s.a)(Object(a.a)(e),"state",{isHovering:!1}),e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state.isHovering,n=this.props,o=n.children,c=n.onClick,a=n.key,u=Object(i.a)(n,["children","onClick","key"]),d=Object(f.isFunction)(o)?{onMouseEnter:function(t){e.setState({isHovering:!0}),e.props.onMouseEnter&&e.props.onMouseEnter(t)},onMouseLeave:function(t){e.setState({isHovering:!1}),e.props.onMouseLeae&&e.props.onMouseLeave(t)}}:{};u.marginY&&(u.marginTop=u.marginY,u.marginBottom=u.marginY,delete u.marginY),u.paddingY&&(u.paddingTop=u.paddingY,u.paddingBottom=u.paddingY,delete u.paddingY),u.marginX&&(u.marginLeft=u.marginX,u.marginRight=u.marginX,delete u.marginX),u.paddingX&&(u.paddingLeft=u.paddingX,u.paddingRight=u.paddingX,delete u.paddingX);var l={key:a,onClick:c};return b("div",Object(r.a)({},l,{style:m({display:"flex",flexFlow:"column",boxSizing:"border-box"},u)},d),Object(f.isFunction)(o)?o(t):o)}}]),n}(g.a.Component),w=function(e){var t=e.src,n=e.size,o=e.padding,c=e.style,a=Object(i.a)(e,["src","size","padding","style"]);return o||((t.indexOf("conv2d2")>-1||t.indexOf("conv2d1")>-1||t.indexOf("conv2d0"))&&(o=0),(t.indexOf("mixed3a")>-1||t.indexOf("mixed3b")>-1)&&(o=0),(t.indexOf("mixed4a")>-1||t.indexOf("mixed4b")>-1||t.indexOf("mixed4c")>-1)&&(o=0)),b("div",Object(r.a)({style:Object.assign({},{width:n,height:n,overflow:"hidden",borderRadius:5,position:"relative"},c)},a),b("img",{src:t,width:n+2*o,height:n+2*o,style:{position:"absolute",left:-o,top:-o}}))},v=function(e){var t=e.size,n=e.children,o=Object(i.a)(e,["size","children"]);if(t){o=m({},o,{},{400:{fontSize:14,fontWeight:600},500:{fontSize:16,fontWeight:500},600:{fontSize:20,fontWeight:500}}[t]||{})}return b(y,Object(r.a)({color:"black",display:"inline-block"},o),n)}},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},i400:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),o=n("3Ttg"),c=n("H/gs"),a=i.a.createElement;t.default=Object(c.default)((function(e){var t=e.images;return a(o.a,{flexFlow:"row",alignItems:"center",justifyContent:"center",gridColumn:"screen",marginY:20},a(o.a,{alignItems:"center"},a(o.a,{alignItems:"center",flexFlow:"row"},a(o.a,{flexFlow:"row",flexWrap:"wrap",width:450,borderRadius:5,overflow:"hidden"},t.slice(0,28).map((function(e){return a("img",{style:{margin:0,padding:0},src:e})})))),a(o.b,{fontStyle:"italic",marginTop:8},"Perpindicular lines are helpful across many natural features like"," ",a("b",null,"tires"),", ",a("b",null,"clocks"),", and ",a("b",null,"logos"))))}))},xUMx:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/combing/dataset",function(){return n("i400")}])},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n}},[["xUMx",0,1,2,3]]]);