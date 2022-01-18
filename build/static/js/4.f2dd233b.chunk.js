(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{162:function(e,t,n){e.exports={form:"ContactForm_form__35LUF",label:"ContactForm_label__MHGdj",input:"ContactForm_input__1aTiW"}},163:function(e,t,n){e.exports={label:"Filter_label__2aC-z",input:"Filter_input__V2LB6"}},164:function(e,t,n){e.exports={listItem:"Contact_listItem__daa9r",listBtn:"Contact_listBtn__3-xPn"}},187:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return L}));var a=n(0),r=n(8),c=n(32),o=n(4),i=n(59),s=n(11),u=n(30),l=n(162),b=n.n(l),j={name:"",number:""},m=n(52),d=function(e){return e.phonebook.contacts},h=function(e){return e.phonebook.filter},O=Object(m.a)(d,h,(function(e,t){return e.filter((function(e){var n;return null===(n=e.name)||void 0===n?void 0:n.toLowerCase().includes(t.toLowerCase())}))})),f=Object(m.a)(d,(function(e){return e.length>0})),p=function(e,t){return e.some((function(e){return e.name.toLowerCase()===t.toLowerCase()}))},v=n(1);var x=function(){var e=Object(a.useReducer)((function(e,t){var n=t.option,a=t.value;if("reset"===n)return j;return Object(i.a)(Object(i.a)({},e),{},Object(o.a)({},n,a))}),j),t=Object(s.a)(e,2),n=t[0],l=t[1],m=Object(r.c)(d),h=Object(r.b)();return Object(v.jsxs)("form",{onSubmit:function(e){var t=n.name;if(e.preventDefault(),p(m,t))return u.b.info("".concat(t," has already been added")),void l({option:"reset"});h(Object(c.a)(n)),l({option:"reset"})},className:b.a.form,children:[Object(v.jsx)("label",{className:b.a.label,htmlFor:"name",children:"Name"}),Object(v.jsx)("input",{className:b.a.input,type:"text",name:"name",id:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n.name,onChange:function(e){var t=e.currentTarget,n=t.name,a=t.value;l({option:n,value:a})}}),Object(v.jsx)("label",{className:b.a.label,htmlFor:"number",children:"Number"}),Object(v.jsx)("input",{className:b.a.input,type:"tel",name:"number",id:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:n.number,onChange:function(e){var t=e.currentTarget,n=t.name,a=t.value;l({option:n,value:a})}}),Object(v.jsx)("button",{type:"submit",children:"Add contact"})]})},_=n(163),C=n.n(_),g=n(83);var F=function(){var e=Object(r.c)(h),t=Object(r.b)();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("label",{className:C.a.label,htmlFor:"filter",children:"Find contacts by name"}),Object(v.jsx)("input",{className:C.a.input,id:"filter",value:e,onChange:function(e){var n=e.currentTarget;return t(Object(g.b)(n.value))}})]})},N=n(164),w=n.n(N);var y=function(e){var t=e.id,n=e.name,a=e.number,r=e.deleteFunction;return Object(v.jsxs)("li",{className:w.a.listItem,children:[Object(v.jsx)("p",{children:"".concat(n,": ").concat(a)}),Object(v.jsx)("button",{className:w.a.listBtn,onClick:function(){r(t)},children:"Delete"})]})};var k=function(){var e=Object(r.b)(),t=Object(r.c)(O),n=function(t){return e(Object(c.b)(t))},a=t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(v.jsx)(y,{id:t,name:a,number:r,deleteFunction:n},t)}));return Object(v.jsx)("ul",{children:a})};var A=function(e){var t=e.msg;return Object(v.jsx)("p",{children:t})};var L=function(){var e=Object(r.c)(f),t=Object(r.b)();return Object(a.useEffect)((function(){t(Object(c.c)())}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{children:"Phonebook"}),Object(v.jsx)(x,{}),Object(v.jsx)("h2",{children:"Contacts"}),e?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(F,{}),Object(v.jsx)(k,{})]}):Object(v.jsx)(A,{msg:"You seem not to have added any contacts yet"})]})}}}]);
//# sourceMappingURL=4.f2dd233b.chunk.js.map