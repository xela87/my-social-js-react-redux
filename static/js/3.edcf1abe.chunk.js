(this["webpackJsonpmy-social-js-react-redux"]=this["webpackJsonpmy-social-js-react-redux"]||[]).push([[3],{290:function(e,s,t){e.exports={dialog:"DialogItem_dialog__2EdC3"}},291:function(e,s,t){e.exports={dialog:"Message_dialog__1P_Wv"}},292:function(e,s,t){e.exports={dialogs:"Messages_dialogs__1H_De",dialogItems:"Messages_dialogItems__18R85",messages:"Messages_messages__2j_KC"}},294:function(e,s,t){"use strict";t.r(s);var a=t(12),n=t(123),i=t(1),c=t.n(i),o=t(15),r=t(290),d=t.n(r),u=t(0),j=function(e){var s=e.name,t=e.id;return Object(u.jsx)("div",{className:d.a.dialog,children:Object(u.jsx)(o.b,{to:"/messages/".concat(t),children:s})})},l=t(291),b=t.n(l),g=function(e){return Object(u.jsx)("div",{className:b.a.dialog,children:e.message})},m=t(292),O=t.n(m),h=t(124),f=t(125),x=t(42),p=t(21),_=Object(x.a)(100),v=Object(f.a)({form:"message"})((function(e){return Object(u.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(u.jsx)("div",{children:Object(u.jsx)(h.a,{placeholder:"Enter your message",name:"messageBody",component:p.b,validate:[x.b,_]})}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{children:"Send message"})})]})})),y=function(e){var s=e.dialogs.dialogs.map((function(e){return Object(u.jsx)(j,{name:e.name,id:e.id},e.id)})),t=e.dialogs.messages.map((function(e){return Object(u.jsx)(g,{message:e.message},e.id)}));return Object(u.jsxs)("div",{className:O.a.dialogs,children:[Object(u.jsx)("div",{className:O.a.dialogItems,children:s}),Object(u.jsx)("div",{className:O.a.messages,children:t}),Object(u.jsx)(v,{onSubmit:function(s){e.sendMessage(s.messageBody)}})]})},M=t(3),N=t(29),I=t(30),S=t(32),k=t(31),A=t(11),C=function(e){return{isAuth:e.auth.isAuth}},w=t(10);s.default=Object(w.d)(Object(a.b)((function(e){return{dialogs:e.messagesPage}}),(function(e){return{sendMessage:function(s){e(Object(n.b)(s))}}})),(function(e){var s=function(s){Object(S.a)(a,s);var t=Object(k.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return Object(I.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(u.jsx)(e,Object(M.a)({},this.props)):Object(u.jsx)(A.a,{to:"/login"})}}]),a}(c.a.Component);return Object(a.b)(C)(s)}))(y)}}]);
//# sourceMappingURL=3.edcf1abe.chunk.js.map