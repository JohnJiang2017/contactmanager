(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(64)},38:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),c=a.n(o),l=a(3),i=a(4),s=a(7),m=a(5),u=a(6),p=a(8),d=a.n(p),h=a(12),v=a(16),f=(a(38),a(29)),b=a(14),E=a(13),y=a.n(E),g=r.a.createContext(),N=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(b.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});case"UPDATE_CONTACT":return console.log("updating!!!"),Object(b.a)({},e,{contacts:e.contacts.map(function(e){return e.id==t.payload.id?t.payload:e})});case"ADD_CONTACT":return Object(b.a)({},e,{contacts:[t.payload].concat(Object(f.a)(e.contacts))});default:return e}},j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[{id:222,name:"zhang 3",email:"zs@hotmai.com",phone:"514-111-1111"},{id:222,name:"Li 4",email:"l4@hotmai.com",phone:"514-222-2222"},{id:222,name:"Wang 5",email:"w5@hotmai.com",phone:"514-333-3333"}],dispatch:function(e){return a.setState(N(a.state,e))}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g.Provider,{value:this.state},this.props.children))}},{key:"componentWillUpdate",value:function(){console.log("componentWillUpdate lifecyle method of Context.js")}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate lifecyle method of Context.js")}},{key:"componentDidMount",value:function(){var e=Object(h.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(n.Component),C=g.Consumer,O=j,k=a(65),w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this))).state={showContactInfo:!1},a.email=null,a.onDeleteClick=function(){var e=Object(h.a)(d.a.mark(function e(t,a){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({type:"DELETE_CONTACT",payload:t});case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t,a){return e.apply(this,arguments)}}(),a.renderHelper=function(e){var t=a.props.contact,n=t.id,o=t.name,c=t.email,l=t.phone,i=a.state.showContactInfo,s=e.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,o," ",r.a.createElement("i",{onClick:function(){return a.setState({showContactInfo:!a.state.showContactInfo})},className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:a.onDeleteClick.bind(Object(v.a)(Object(v.a)(a)),n,s)}),r.a.createElement(k.a,{to:"/edit/".concat(n)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),i?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},"Phone: ",l)):null)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=(this.state.showContactInfo,this.props.contact);t.id,t.name,t.email,t.phone;return r.a.createElement(C,null,function(t){return e.renderHelper(t)})}}]),t}(n.Component);w.isEmail=function(e,t,a){if(!/^((([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))?$/.test(e[t]))return new Error("Invalid prop `".concat(t,"` passed to `").concat(a,"`. Expected a valid email address."))};var x=w,S=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).deleteContact=function(t){var a=e.state.contacts.filter(function(e){return e.id!==t});e.setState({contacts:a})},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(C,null,function(e){var t=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"displpay-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),t.map(function(e){return r.a.createElement(x,{key:e.id,contact:e})}))})}}]),t}(n.Component),A=function(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(k.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(k.a,{to:"/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(k.a,{to:"/about/Hello%20World!",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"}),"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(k.a,{to:"/test",className:"nav-link"},r.a.createElement("i",{className:"fas fa-star"}),"Test"))))))};A.defaultProps={branding:"My App"};var D=A,T=a(15),P=function(e){var t=e.label,a=e.name,n=e.value,o=e.placeholder,c=e.type,l=e.onChange,i=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"phone"},t),r.a.createElement("input",{name:a,type:c,className:null==i?"form-control form-control-lg":"is-invalid form-control form-control-lg",placeholder:o,value:n,onChange:l}),r.a.createElement("div",{className:"invalid-feedback"},i))};P.defaultProps={type:"text"};var q=P,W=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(b.a)({},a.state,Object(T.a)({},t,n))),a.validateInputs()},a.validateInputs=function(){var e={},t=a.state,n=t.name,r=t.email,o=t.phone;""===n&&(e.name="Name is required"),""===r&&(e.email="Email is required"),""===o&&(e.phone="Phone is required"),a.setState({errors:e})},a.onSubmit=function(){var e=Object(h.a)(d.a.mark(function e(t,n){var r,o,c,l,i,s,m;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,o=r.name,c=r.email,l=r.phone,i={},""===o&&(i.name="Name is required"),""===c&&(i.email="Email is required"),""===l&&(i.phone="Phone is required"),""!==o&&""!==c&&""!==l){e.next=9;break}return a.setState({errors:i}),e.abrupt("return");case 9:return s={name:o,email:c,phone:l},e.next=12,y.a.post("https://jsonplaceholder.typicode.com/users",s);case 12:m=e.sent,t({type:"ADD_CONTACT",payload:m.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 16:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,o=t.phone,c=t.errors;return r.a.createElement(C,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(q,{label:"Name",name:"name",placeholder:"Enter Name...",onChange:e.onChange,value:a,error:c.name}),r.a.createElement(q,{label:"Email",name:"email",type:"email",placeholder:"Enter Email...",onChange:e.onChange,value:n,error:c.email}),r.a.createElement(q,{label:"Phone",name:"phone",placeholder:"Enter Phone...",onChange:e.onChange,value:o,error:c.phone}),r.a.createElement("input",{type:"submit",className:"btn btn-light btn-block",value:"Add Contact"}))))})}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(b.a)({},a.state,Object(T.a)({},t,n))),a.validateInputs()},a.validateInputs=function(){var e={},t=a.state,n=t.name,r=t.email,o=t.phone;""===n&&(e.name="Name is required"),""===r&&(e.email="Email is required"),""===o&&(e.phone="Phone is required"),a.setState({errors:e})},a.onSubmit=function(){var e=Object(h.a)(d.a.mark(function e(t,n){var r,o,c,l,i,s,m,u;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.props.match.params.id,o=a.state,c=o.name,l=o.email,i=o.phone,s={},""===c&&(s.name="Name is required"),""===l&&(s.email="Email is required"),""===i&&(s.phone="Phone is required"),""!==c&&""!==l&&""!==i){e.next=10;break}return a.setState({errors:s}),e.abrupt("return");case 10:return m={id:r,name:c,email:l,phone:i},a.setState(m),e.prev=12,e.next=15,y.a.put("https://jsonplaceholder.typicode.com/users/".concat(r),m);case 15:u=e.sent,t({type:"UPDATE_CONTACT",payload:u.data}),a.props.history.push("/"),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(12),alert("data not saved due to error!");case 23:case"end":return e.stop()}},e,this,[[12,20]])}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(d.a.mark(function e(){var t,a,n,r,o,c;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,y.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,r=n.name,o=n.email,c=n.phone,this.setState({name:r,email:o,phone:c});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,o=t.phone,c=t.errors;return r.a.createElement(C,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Update Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(q,{label:"Name",name:"name",placeholder:"Enter Name...",onChange:e.onChange,value:a,error:c.name}),r.a.createElement(q,{label:"Email",name:"email",type:"email",placeholder:"Enter Email...",onChange:e.onChange,value:n,error:c.email}),r.a.createElement(q,{label:"Phone",name:"phone",placeholder:"Enter Phone...",onChange:e.onChange,value:o,error:c.phone}),r.a.createElement("input",{type:"submit",className:"btn btn-light btn-block",value:"Save Changes"}))))})}}]),t}(n.Component);function M(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager ",e.match.params.id),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))}function U(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4 text-danger"},"404 Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist"))}a(61);var _=a(66),F=a(68),L=a(67),z=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",body:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){console.log("componentWillMount")}},{key:"componentDidMount",value:function(){var e=this;console.log("componentDidMount"),fetch("https://jsonplaceholder.typicode.com/posts/1").then(function(e){return e.json()}).then(function(t){return e.setState({title:t.title,body:t.body})})}},{key:"componentWillUpdate",value:function(){console.log("componentWillUpdate")}},{key:"componentWillReceiveProps",value:function(e,t){console.log("componentWillReceiveProps")}},{key:"getDerivedStateFromProps",value:function(e,t){console.log("getDerivedStateFromProps")}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("p",{className:"text-secondary"},a))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{test:"something"}}}]),t}(n.Component),H=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(O,null,r.a.createElement(_.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(D,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(F.a,null,r.a.createElement(L.a,{exact:!0,path:"/",component:S}),r.a.createElement(L.a,{exact:!0,path:"/add",component:W}),r.a.createElement(L.a,{exact:!0,path:"/edit/:id",component:I}),r.a.createElement(L.a,{exact:!0,path:"/about/:id",component:M}),r.a.createElement(L.a,{exact:!0,path:"/test",component:z}),r.a.createElement(L.a,{component:U}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.c411a930.chunk.js.map