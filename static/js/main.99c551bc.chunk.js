(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),o=n.n(r),l=n(1),s=(n(12),n(13),n(6)),u=n.n(s),i="https://mate-api.herokuapp.com",m=function(){return fetch("".concat(i,"/posts")).then((function(e){return e.json()})).then((function(e){return e.data}))},f=function(e){return fetch("".concat(i,"/posts/").concat(e)).then((function(e){return e.json()})).then((function(e){return e.data}))},p=(n(14),function(e){var t=e.onTakePost,n=e.searchByUser,r=Object(a.useState)([]),o=Object(l.a)(r,2),s=o[0],i=o[1],p=Object(a.useState)(0),d=Object(l.a)(p,2),E=d[0],h=d[1];return Object(a.useEffect)((function(){0!==+n?m().then((function(e){return e.filter((function(e){return e.userId===+n}))})).then((function(e){return i(e)})):m().then((function(e){return i(e)}))}),[n]),c.a.createElement("div",{className:"PostsList"},c.a.createElement("h2",null,"Posts:"),c.a.createElement("ul",{className:"PostsList__list"},s.map((function(e){return c.a.createElement("li",{className:"PostsList__item",key:e.id},c.a.createElement("div",null,c.a.createElement("b",null,"[User ".concat(e.userId,"]:")," "),e.title),c.a.createElement("button",{type:"button",className:u()({PostsList__button:!0,button:!0}),onClick:function(){if(E===e.id)return t(null,null),void h(null);f(e.id),h(e.id),t(e.id,e)}},E===e.id?"Close":"Open"))}))))});p.defaultProps={searchByUser:0};var d=n(2),E=n.n(d),h=n(3),b=function(e,t){return fetch("".concat(i).concat(e),t).then((function(e){return e.json()})).then((function(e){return e.data}))},v=function(e){return b("/comments").then((function(t){return t.filter((function(t){return t.postId===e}))}))},_=(n(16),function(e){var t=e.selectedPostId,n=e.newRenderOfComments,r=Object(a.useState)(""),o=Object(l.a)(r,2),s=o[0],u=o[1],i=Object(a.useState)(""),m=Object(l.a)(i,2),f=m[0],p=m[1],d=Object(a.useState)(""),v=Object(l.a)(d,2),_=v[0],N=v[1],O=function(){var e=Object(h.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a=t,c=s,r=f,o=_,b("/comments",{method:"POST",body:JSON.stringify({postId:a,name:c,email:r,body:o})});case 2:n(t);case 3:case"end":return e.stop()}var a,c,r,o}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault(),O()}},c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:s,onChange:function(e){var t=e.target;return u(t.value)}})),c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:f,onChange:function(e){var t=e.target;return p(t.value)}})),c.a.createElement("div",{className:"form-field"},c.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:_,onChange:function(e){var t=e.target;return N(t.value)}})),c.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}),N=(n(17),function(e){var t=e.selectedPostId,n=Object(a.useState)(null),r=Object(l.a)(n,2),o=r[0],s=r[1],u=Object(a.useState)(null),i=Object(l.a)(u,2),m=i[0],p=i[1],d=Object(a.useState)(!1),N=Object(l.a)(d,2),O=N[0],j=N[1],y=function(){var e=Object(h.a)(E.a.mark((function e(n){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("/comments/".concat(n),{method:"DELETE"});case 2:v(t).then((function(e){return s(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){v(t).then((function(e){return s(e)})),f(t).then((function(e){return p(e)}))}),[t]),m&&o?c.a.createElement("div",{className:"PostDetails"},c.a.createElement("h2",null,"Post details:"),c.a.createElement("section",{className:"PostDetails__post"},c.a.createElement("h3",null,m.title),c.a.createElement("p",null,m.body)),c.a.createElement("section",{className:"PostDetails__comments"},c.a.createElement("button",{type:"button",className:"button",onClick:function(){return j(!O)}},O?"Show ".concat(o.length," comments"):"Hide ".concat(o.length," comments")),O||c.a.createElement("ul",{className:"PostDetails__list"},o.map((function(e){return c.a.createElement("li",{className:"PostDetails__list-item",key:e.id},c.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return y(e.id)}},"X"),c.a.createElement("p",null,e.body))})))),c.a.createElement("section",null,c.a.createElement("div",{className:"PostDetails__form-wrapper"},c.a.createElement(_,{selectedPostId:t,newRenderOfComments:function(){v(t).then((function(e){return s(e)}))}})))):"Loading..."}),O=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(null),s=Object(l.a)(o,2),u=s[0],i=s[1],m=Object(a.useState)(0),f=Object(l.a)(m,2),d=f[0],E=f[1];return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App__header"},c.a.createElement("label",null,"Select a user: \xa0",c.a.createElement("select",{className:"App__user-selector",value:d,onChange:function(e){var t=e.target;return E(t.value)}},c.a.createElement("option",{value:0},"All users"),c.a.createElement("option",{value:1},"Leanne Graham"),c.a.createElement("option",{value:2},"Ervin Howell"),c.a.createElement("option",{value:3},"Clementine Bauch"),c.a.createElement("option",{value:4},"Patricia Lebsack"),c.a.createElement("option",{value:5},"Chelsey Dietrich"),c.a.createElement("option",{value:6},"Mrs. Dennis Schulist"),c.a.createElement("option",{value:7},"Kurtis Weissnat"),c.a.createElement("option",{value:8},"Nicholas Runolfsdottir V"),c.a.createElement("option",{value:9},"Glenna Reichert"),c.a.createElement("option",{value:10},"Leanne Graham")))),c.a.createElement("main",{className:"App__main"},c.a.createElement("div",{className:"App__sidebar"},c.a.createElement(p,{onTakePost:function(e,t){r(e),i(t)},searchByUser:d})),c.a.createElement("div",{className:"App__content"},!n||c.a.createElement(N,{selectedPostId:n,selectedPost:u}))))};o.a.render(c.a.createElement(O,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.99c551bc.chunk.js.map