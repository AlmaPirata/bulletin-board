(this["webpackJsonpbulletin-board"]=this["webpackJsonpbulletin-board"]||[]).push([[0],{70:function(e,t,n){},71:function(e,t,n){},80:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(0),i=n.n(c),o=n(8),r=n.n(o),l=(n(70),n(71),n(10)),s=n(16),j=n(14),d=n(24),u=["\u041c\u043e\u0441\u043a\u0432\u0430","\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433","\u041a\u0430\u0437\u0430\u043d\u044c","\u041d\u0438\u0436\u043d\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434"],b=n(123),O=n(121),m=n(125),h=n(120),p=n(39),x=n.n(p),f=function(e){var t=Object(c.useState)({caption:e.item.caption,textBody:e.item.textBody,phone:e.item.phone,city:e.item.city}),n=Object(s.a)(t,2),o=n[0],r=n[1];function l(e){console.log(e);var t=e.target,n=t.name,a=t.value;r(Object(d.a)(Object(d.a)({},o),{},Object(j.a)({},n,a)))}return Object(a.jsxs)("div",{className:"bulletin",children:[Object(a.jsx)(b.a,{value:o.caption,name:"caption",className:"bulletin-input",onChange:l,InputProps:{readOnly:e.readOnly}}),Object(a.jsx)(b.a,{value:o.textBody,multiline:!0,rowsMax:"2",name:"textBody",className:"bulletin-input",onChange:l,InputProps:{readOnly:e.readOnly}}),Object(a.jsx)(x.a,{name:"phone",mask:"+(9) 999 999 99 99",value:o.phone,onChange:l,InputProps:{readOnly:e.readOnly},children:Object(a.jsx)(b.a,{className:"bulletin-input",placeholder:"+(7) 123 456 78 90"})}),Object(a.jsx)(O.a,{value:o.city,name:"city",className:"bulletin-select bulletin-input",onChange:l,disabled:e.readOnly,children:u.map((function(e,t){return Object(a.jsx)(m.a,{value:e,children:e},t)}))}),Object(a.jsxs)("div",{children:[e.readOnly?Object(a.jsx)(h.a,{onClick:function(){e.toggleReadOnly(!1)},children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}):Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(h.a,{onClick:function(){r({caption:e.item.caption,textBody:e.item.textBody,phone:e.item.phone,city:e.item.city}),e.toggleReadOnly(!0)},children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(a.jsx)(h.a,{onClick:function(){e.toggleReadOnly(!0),e.saveChanges(Object(d.a)(Object(d.a)({},o),{},{id:e.item.id}))},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]}),Object(a.jsx)(h.a,{onClick:function(){e.deleteItem(e.item.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})},v="items",y=function(){return JSON.parse(localStorage.getItem(v))||[]},g=function(e){return localStorage.setItem(v,JSON.stringify(e))},N=function(){var e=Object(c.useState)(y()),t=Object(s.a)(e,2),n=t[0],o=t[1];Object(c.useEffect)((function(){g(n)}),[n]);var r=function(e){o(n.filter((function(t){return t.id!==e})))},l=Object(c.useState)(""),j=Object(s.a)(l,2),d=j[0],u=j[1],b=function(e){o(n.map((function(t){return t.id===e.id?e:t})))};return Object(c.useEffect)((function(){}),[d]),Object(a.jsx)(i.a.Fragment,{children:Object(a.jsx)("div",{className:"bulletin-wrapper",children:n.map((function(e){return Object(a.jsx)(f,{item:e,deleteItem:r,toggleReadOnly:function(t){return function(e,t){console.log(t),u(t?"":e)}(e.id,t)},saveChanges:b,readOnly:d!==e.id},e.id)}))})})},w=n(22),C=n(122),k=n(127),B=function(){var e=Object(c.useState)({id:Object(C.a)(),caption:"",textBody:"",phone:"",city:""}),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(y()),l=Object(s.a)(r,2),p=l[0],f=l[1];Object(c.useEffect)((function(){g(p)}),[p]);var v=function(e){var t=e.target,a=t.name,c=t.value;console.log([a]),o(Object(d.a)(Object(d.a)({},n),{},Object(j.a)({},a,c)))};return onsubmit=function(e){e.preventDefault(),o(Object(d.a)(Object(d.a)({},n),{},{id:Object(C.a)(),caption:n.caption,textBody:n.textBody,phone:n.phone,city:n.city})),f((function(e){return[].concat(Object(w.a)(e),[n])})),console.log(n)},Object(a.jsx)(i.a.Fragment,{children:Object(a.jsx)("form",{className:"form",children:Object(a.jsxs)("div",{className:"form-wrapper",children:[Object(a.jsxs)("div",{className:"form-row",children:[Object(a.jsx)(b.a,{name:"caption",className:"input form-caption",type:"text",variant:"outlined",value:n.caption,onChange:v,required:!0,label:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"}),Object(a.jsxs)("div",{className:"input-description",children:["\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 ",Object(a.jsx)("br",{}),"\u041d\u0435 \u0431\u043e\u043b\u0435\u0435 140 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"]})]}),Object(a.jsxs)("div",{className:"form-row",children:[Object(a.jsx)(b.a,{name:"textBody",className:"input form-text-body",multiline:!0,variant:"outlined",inputProps:{maxLength:300},rows:4,value:n.textarea,onChange:v,required:!0}),Object(a.jsxs)("div",{className:"input-description",children:["\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 ",Object(a.jsx)("br",{}),"\u041d\u0435 \u0431\u043e\u043b\u0435\u0435 300 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"]})]}),Object(a.jsxs)("div",{className:"form-row",children:[Object(a.jsx)(x.a,{name:"phone",mask:"+(9) 999 999 99 99",value:n.phone,onInput:function(e){e.target.reportValidity()},onChange:v,children:Object(a.jsx)(b.a,{className:"input form-phone",variant:"outlined",placeholder:"+(7) 123 456 78 90"})}),Object(a.jsx)("div",{className:"input-description",children:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"})]}),Object(a.jsx)("div",{className:"form-row",children:Object(a.jsxs)("div",{className:"input",children:[Object(a.jsx)(k.a,{id:"form-city-label",children:"\u0413\u043e\u0440\u043e\u0434"}),Object(a.jsxs)(O.a,{name:"city",labelId:"form-city-label",id:"form-city",className:"form-city",variant:"outlined",value:n.city,onChange:v,children:[Object(a.jsx)(m.a,{value:"",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434"}),u.map((function(e,t){return Object(a.jsx)(m.a,{value:e,children:e},t)}))]})]})}),Object(a.jsx)(h.a,{className:"submit-form-button",type:"submit",variant:"contained",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})})})},I=n(31),S=n(119),E=n(124),J=(n(80),function(){function e(){}return Object(a.jsx)(S.a,{className:"header",children:Object(a.jsxs)(E.a,{children:[Object(a.jsx)(m.a,{children:Object(a.jsx)(I.b,{color:"inherit",to:"/",onClick:e,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(a.jsx)(m.a,{children:Object(a.jsx)(I.b,{color:"inherit",to:"/add",onClick:e,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435"})})]})})});var P=function(){return Object(a.jsxs)("div",{className:"app-wrapper",children:[Object(a.jsx)(J,{}),Object(a.jsx)(l.a,{exact:!0,path:"/",render:function(){return Object(a.jsx)(N,{})}}),Object(a.jsx)(l.a,{path:"/add",render:function(){return Object(a.jsx)(B,{})}})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(a.jsx)(I.a,{basename:"/bulletin-board",children:Object(a.jsx)(P,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[85,1,2]]]);
//# sourceMappingURL=main.6a668fd0.chunk.js.map