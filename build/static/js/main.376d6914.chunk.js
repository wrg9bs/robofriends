(this.webpackJsonprobofred=this.webpackJsonprobofred||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(4),s=n.n(r),a=(n(13),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))}),o=n(3),i=n(0),h=function(e){var t=e.name,n=e.email,c=e.id;return Object(i.jsxs)("div",{className:" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(i.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(c,"?200x200")}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:t}),Object(i.jsx)("p",{children:n})]})]})},l=function(e){var t=e.Robots;return Object(i.jsx)("div",{children:t.map((function(e,n){return Object(i.jsx)(h,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},j=function(e){return Object(i.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"600px"},children:e.children})},b=function(e){e.searchfield;var t=e.searchChange;return Object(i.jsx)("div",{className:"pa2",children:Object(i.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search Robots",onChange:t})})},u=(n(15),n(5)),d=n(6),O=n(8),f=n(7),p=function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(d.a)(n,[{key:"componentDidCatch",value:function(e,t){this.state({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(i.jsx)("h1",{children:"Ooops. That is not good"}):this.props.children}}]),n}(c.Component),g=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(o.a)(s,2),h=a[0],u=a[1];Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]);var d=n.filter((function(e){return e.name.toLocaleLowerCase().includes(h.toLowerCase())}));return 0===n.length?Object(i.jsx)("h1",{children:"Loading"}):Object(i.jsxs)("div",{className:"tc",children:[Object(i.jsx)("h1",{className:"f2",children:"ROBOFRIENDS"}),Object(i.jsx)(b,{searchChange:function(e){u(e.target.value)}}),Object(i.jsx)(j,{children:Object(i.jsx)(p,{children:Object(i.jsx)(l,{Robots:d})})})]})};n(16);s.a.render(Object(i.jsx)(g,{}),document.getElementById("root")),a()}},[[17,1,2]]]);
//# sourceMappingURL=main.376d6914.chunk.js.map