"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[797],{854:function(n,e,t){t.d(e,{a:function(){return a}});var r=t(4727),o=t(184),a=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(r.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}},4146:function(n,e,t){t.d(e,{Z:function(){return p}});var r,o,a=t(7689),c=t(168),i=t(5706),u=t(1087),l=i.Z.li(r||(r=(0,c.Z)([""]))),s=(0,i.Z)(u.rU)(o||(o=(0,c.Z)(["\n  text-decoration: none;\n  font-size: 30px;\n  color: black;\n  text-decoration: none;\n  font-weight: 250px;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    color: #1e6c21de;\n    font-weight: bold;\n  }\n"]))),f=t(184),p=function(n){var e=n.movies,t=(0,a.TH)();return(0,f.jsx)(f.Fragment,{children:e.map((function(n){return(0,f.jsx)(l,{children:(0,f.jsx)(s,{to:{pathname:"/movies/".concat(n.id)},state:{from:t},children:n.title})},n.id)}))})}},4797:function(n,e,t){t.r(e);var r=t(9439),o=t(4146),a=t(2791),c=t(1087),i=t(4430),u=t(854),l=t(8432),s=t(184);e.default=function(){var n,e=(0,a.useState)([]),t=(0,r.Z)(e,2),f=t[0],p=t[1],d=(0,a.useState)(!1),x=(0,r.Z)(d,2),h=x[0],b=x[1],g=(0,c.lr)(),m=(0,r.Z)(g,2),v=m[0],Z=m[1],k=(0,a.useState)(null!==(n=v.get("film"))&&void 0!==n?n:""),w=(0,r.Z)(k,2),j=w[0],y=w[1];return(0,a.useEffect)((function(){b(!0),(0,i.bI)(v).then((function(n){var e=n.results;p(e)})).finally((function(){return b(!1)}))}),[v]),(0,s.jsxs)(l._x,{children:[(0,s.jsxs)(l.l0,{action:"submit",onSubmit:function(n){n.preventDefault(),""!==j.trim()?(Z({film:j}),y("")):alert("Please enter text")},children:[(0,s.jsx)(l.II,{onChange:function(n){y(n.target.value)},value:j,placeholder:"What film do you want?"}),(0,s.jsx)(l.zx,{children:"Search"}),h&&(0,s.jsx)(u.a,{})]}),f.length>0&&(0,s.jsx)(l.aV,{children:(0,s.jsx)(o.Z,{movies:f})})]})}},8432:function(n,e,t){t.d(e,{Dx:function(){return f},II:function(){return h},_x:function(){return p},aV:function(){return d},l0:function(){return x},zx:function(){return b}});var r,o,a,c,i,u,l=t(168),s=t(5706),f=s.Z.h1(r||(r=(0,l.Z)([""]))),p=s.Z.div(o||(o=(0,l.Z)(["\n  text-align: center;\n"]))),d=s.Z.ul(a||(a=(0,l.Z)(["\n  list-style: none;\n  padding: 0;\n"]))),x=s.Z.form(c||(c=(0,l.Z)(["\n  text-align: center;\n  margin: 20px 0;\n"]))),h=s.Z.input(i||(i=(0,l.Z)(["\n  border: 2px solid black;\n  width: 300px;\n  height: 30px;\n"]))),b=s.Z.button(u||(u=(0,l.Z)(["\n  margin-left: 15px;\n  background-color: #1e6c21de;\n  color: #fff;\n  font-size: 15px;\n  font-weight: 600;\n  padding: 8px 16px;\n  border-radius: 5px;\n  cursor: pointer;\n  border: 1.5px solid rgb(171, 163, 163);\n  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),\n    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);\n\n  transition: background-color 250ms linear, box-shadow 250ms linear,\n    color 250ms linear;\n  &:hover {\n    background-color: white;\n    color: green;\n\n    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);\n  }\n"])))},4430:function(n,e,t){t.d(e,{Hx:function(){return x},Mc:function(){return f},bI:function(){return p},wr:function(){return s},xc:function(){return d}});var r=t(5861),o=t(4687),a=t.n(o),c="https://api.themoviedb.org/3",i="afc97726cd3b4e142bea1138da06bc07";function u(){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(a().mark((function n(){var e,t,r,o=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:"",t=o.length>1&&void 0!==o[1]?o[1]:{},n.next=4,fetch(e,t);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),l.apply(this,arguments)}function s(){return u("".concat(c,"/trending/movie/day?api_key=").concat(i))}function f(n){return u("".concat(c,"/movie/").concat(n,"?api_key=").concat(i,"&language=en-US"))}function p(n){return u("".concat(c,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"))}function d(n){return u("".concat(c,"/movie/").concat(n,"/credits?api_key=").concat(i,"&language=en-US"))}function x(n){return u("".concat(c,"/movie/").concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"))}}}]);
//# sourceMappingURL=797.3873c644.chunk.js.map