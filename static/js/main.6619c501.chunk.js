(this["webpackJsonpfirst-website-using-react"]=this["webpackJsonpfirst-website-using-react"]||[]).push([[0],{65:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(26),s=n.n(c),r=(n(65),n(54),n(40)),i=n(8),j=n(19),o=n(20),l=n(25),b=n(23),h=(n(55),n(66),n(1)),d=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"main",children:Object(h.jsxs)("div",{className:"col",children:[Object(h.jsx)("div",{className:"pa0",children:Object(h.jsx)("div",{className:"wrapping-banner",children:Object(h.jsx)("p",{className:"banner-container",children:"searchbox?."})})}),Object(h.jsx)("div",{className:"",children:Object(h.jsx)("h1",{className:"tc mt2 w-100 f-subheadline-l lh-copy lh-title-l measure fw6",children:"Example Websiste"})}),Object(h.jsx)("div",{className:"tc pa0",children:Object(h.jsx)("p",{children:"worry less about the backend and more about the frontend"})}),Object(h.jsx)("div",{children:Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:"https://memegenerator.net/img/images/15998360/angry-pepe-with-gun-is-crying.jpg"})})})]})})}}]),n}(a.Component),u=n(9),O=(n(68),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).change=function(e){a.setState(Object(u.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault(),fetch("http://localhost:3000/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password})}),a.props.history.push("/")},a.state={email:"",password:""},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"tc pa5 ",children:[Object(h.jsx)("h1",{className:"f2 b ",children:"EPLOG SIGNIN"}),Object(h.jsxs)("form",{method:"POST",children:[Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"email",name:"email",placeholder:"email",value:this.state.email,onChange:function(t){return e.change(t)}}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"password",name:"password",placeholder:"password",value:this.state.password,onChange:function(t){return e.change(t)}}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:function(t){return e.onSubmit(t)},children:"Submit"})]})]})}}]),n}(a.Component)),p=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).change=function(t){e.setState(Object(u.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.setState({email:"",username:"",password:""})},e.state={email:"",username:"",password:""},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"tc pa5 ",children:[Object(h.jsx)("h1",{className:"f2 b ",children:"EPLOG REGISTER"}),Object(h.jsxs)("form",{method:"POST",children:[Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"email",name:"email",placeholder:"email",value:this.state.email,onChange:function(t){return e.change(t)}}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"username",name:"username",placeholder:"username",value:this.state.username,onChange:function(t){return e.change(t)}}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"password",name:"password",placeholder:"password",value:this.state.password,onChange:function(t){return e.change(t)}}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:function(t){return e.onSubmit(t)},children:"Submit"})]})]})}}]),n}(a.Component),m=function(){return Object(h.jsx)(r.a,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)(i.a,{exact:!0,path:"/",component:d}),Object(h.jsx)(i.a,{path:"/login",component:O}),Object(h.jsx)(i.a,{path:"/register",component:p})]})})},x=n(87),f=n(85),g=n(88),v=n(86),w=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"primary--nav",children:Object(h.jsx)(x.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(h.jsxs)(f.a,{children:[Object(h.jsx)(x.a.Brand,{href:"/",children:".informat*ve"}),Object(h.jsx)(x.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(h.jsxs)(x.a.Collapse,{id:"responsive-navbar-nav",children:[Object(h.jsxs)(g.a,{className:"me-auto",children:[Object(h.jsx)(g.a.Link,{href:"/login",children:"Log In"}),Object(h.jsx)(g.a.Link,{href:"/register",children:"Sign Up"}),Object(h.jsxs)(v.a,{title:"More",id:"collasible-nav-dropdown",children:[Object(h.jsx)(v.a.Item,{href:"#action/3.1",children:"Action"}),Object(h.jsx)(v.a.Item,{href:"#action/3.2",children:"Another action"}),Object(h.jsx)(v.a.Item,{href:"#action/3.3",children:"Something"}),Object(h.jsx)(v.a.Divider,{}),Object(h.jsx)(v.a.Item,{href:"#action/3.4",children:"Separated link"})]})]}),Object(h.jsxs)(g.a,{children:[Object(h.jsx)(g.a.Link,{href:"/login",children:"Log In"}),Object(h.jsx)(g.a.Link,{href:"/register",children:"Sign Up"})]})]})]})})})}}]),n}(a.Component),y=function(){return Object(h.jsxs)(r.a,{basename:"/React",children:[Object(h.jsx)(w,{}),Object(h.jsx)(m,{})]})};s.a.render(Object(h.jsx)(y,{}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.6619c501.chunk.js.map