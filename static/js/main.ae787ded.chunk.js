(this["webpackJsonpmy-app3"]=this["webpackJsonpmy-app3"]||[]).push([[0],{55:function(e,t,a){e.exports=a(65)},60:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(7),r=a.n(c),l=(a(60),a(13)),i=a(46),m=a(36),s=a(100),u=a(102);var d=function(e){var t=e.addTodo,a=Object(o.useState)({id:"",task:"",completed:!1}),c=Object(m.a)(a,2),r=c[0],i=c[1];return n.a.createElement("form",{className:"todo-form",onSubmit:function(e){e.preventDefault(),r.task.trim()&&(t(Object(l.a)(Object(l.a)({},r),{},{id:Object(u.a)()})),i(Object(l.a)(Object(l.a)({},r),{},{task:""})))}},n.a.createElement(s.a,{label:"Task",name:"task",type:"text",value:r.task,onChange:function(e){i(Object(l.a)(Object(l.a)({},r),{},{task:e.target.value}))}}),n.a.createElement("button",{type:"submit"},"submit"))},f=a(96),p=a(97),b=a(101),v=a(98),g=a(99);var E=function(e){var t=e.todo,a=e.toggleComplete,o=e.removeTodo;return n.a.createElement(p.a,{style:{display:"flex"}},n.a.createElement(b.a,{checked:t.completed,onClick:function(){a(t.id)}}),n.a.createElement(g.a,{variant:"body1",style:{textDecoration:t.completed?"line-through":null}},t.task),n.a.createElement(v.a,{onClick:function(){o(t.id)}}))};var O=function(e){var t=e.todos,a=e.toggleComplete,o=e.removeTodo;return n.a.createElement(f.a,null,t.map((function(e){return n.a.createElement(E,{key:e.id,todo:e,toggleComplete:a,removeTodo:o})})))};a(64);var j=function(){var e=Object(o.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1];return Object(o.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-todo-list-todos"));e&&c(e)}),[]),Object(o.useEffect)((function(){localStorage.setItem("react-todo-list-todos",JSON.stringify(a))}),[a]),n.a.createElement("div",{className:"App"},n.a.createElement(g.a,{style:{padding:16},variant:"h1"},"React Todo"),n.a.createElement(d,{addTodo:function(e){c([e].concat(Object(i.a)(a)))}}),n.a.createElement(O,{todos:a,toggleComplete:function(e){c(a.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t})))},removeTodo:function(e){c(a.filter((function(t){return t.id!==e})))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.ae787ded.chunk.js.map