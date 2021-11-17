(this["webpackJsonptodo-notes"]=this["webpackJsonptodo-notes"]||[]).push([[0],{59:function(e,t,o){},66:function(e,t,o){"use strict";o.r(t);var r=o(0),i=o.n(r),n=o(8),a=o.n(n),c=(o(59),o(99)),l=o(68),s=o(19),d=o(96),u=o(100),m=o(102),v=o(41),h=function e(t,o,r){Object(v.a)(this,e),this.id=void 0,this.title=void 0,this.description=void 0,this.estimatedTime=void 0,this.status=void 0,this.title=t,this.description=o,this.estimatedTime=r,this.id=(new Date).toISOString(),this.status=!1},f=o(46),p=o(6),b=Object(r.createContext)({todos:[],formIsVisible:!1,showForm:function(){},closeForm:function(){},addTodo:function(e){},removeTodo:function(e){},toggleTodo:function(e,t){}}),g=function(e){var t=Object(r.useState)([]),o=Object(s.a)(t,2),i=o[0],n=o[1],a=Object(r.useState)(!1),c=Object(s.a)(a,2),l=c[0],d=c[1];Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todoList")||"{}");n(e)}),[]);var u=function(e){localStorage.setItem("todoList",JSON.stringify(e))},m={todos:i,formIsVisible:l,showForm:function(){d(!0)},closeForm:function(){d(!1)},addTodo:function(e){n((function(t){return u(t.concat(e)),t.concat(e)}))},removeTodo:function(e){n((function(t){return t.filter((function(t){return t.id!==e}))})),u(i)},toggleTodo:function(e,t){n((function(o){var r=o.find((function(t){return t.id===e})),i=o.findIndex((function(t){return t.id===e})),n=new h(null===r||void 0===r?void 0:r.title,null===r||void 0===r?void 0:r.description,null===r||void 0===r?void 0:r.estimatedTime);return n.status=!t,n.id=e,o[i]=n,u(o),Object(f.a)(o)}))}};return Object(p.jsx)(b.Provider,{value:m,children:e.children})},x=b,j=o(101),O=Object(d.a)({form:{padding:"2rem",marginTop:"2rem",borderRadius:"6px",boxShadow:"0 0 8px 1px RGBA(0,0,0,0.5)",boxSizing:"border-box",backgroundColor:"#f3f3f3",display:"flex",flexDirection:"column",alignItems:"center",width:"50%",textAlign:"center","& h1":{marginTop:0,fontWeight:300,fontSize:"3rem",color:"#212121"},"@media (max-width: 800px)":{width:"80%",padding:"1rem","& h1":{marginTop:0,fontWeight:300,fontSize:"2rem",color:"#212121"}}},textField:{minWidth:"10rem",maxWidth:"30rem",width:"80%",margin:"1rem 0 1rem 0","@media (max-width: 800px)":{width:"100%"}}}),w={value:"",isValid:null,error:""},T=function(e,t){switch(t.type){case"INPUT_CHANGE":return t.value?{value:t.value,isValid:!0,error:""}:{value:t.value,isValid:!1,error:"O campo \xe9 obrigat\xf3rio!"};case"INPUT_BLUR":return""===t.value.trim()?{value:t.value,isValid:!1,error:"O campo \xe9 obrigat\xf3rio."}:e;case"INPUT_CLEAR":return{value:t.value,isValid:null,error:""};case"FORM_SUBMIT":return""===e.value.trim()?{value:e.value,isValid:!1,error:"O campo \xe9 obrigat\xf3rio."}:{value:e.value,isValid:!0,error:""};default:return e}},C=function(e,t){var o=350;switch(t.type){case"INPUT_CHANGE":return t.value.length>o?{value:t.value,isValid:!1,error:"O campo pode conter apenas ".concat(o," caracteres.")}:{value:t.value,isValid:!0,error:""};case"FORM_SUBMIT":return e.value.length>o?{value:e.value,isValid:!1,error:"O campo pode conter apenas ".concat(o," caracteres.")}:{value:e.value,isValid:!0,error:""};case"INPUT_CLEAR":return{value:t.value,isValid:null,error:""};default:return e}},y=function(e,t){switch(t.type){case"INPUT_BLUR":return{value:t.value,isValid:!0,error:""};case"INPUT_CHANGE":return{value:t.value,isValid:!0,error:"Exemplo: 2 Horas"};case"INPUT_CLEAR":return{value:t.value,isValid:null,error:""};default:return e}},I=function(){var e=Object(r.useContext)(x),t=e.addTodo,o=e.formIsVisible,n=e.showForm,a=e.closeForm,c=Object(r.useReducer)(T,w),l=Object(s.a)(c,2),d=l[0],v=l[1],f=Object(r.useReducer)(C,w),b=Object(s.a)(f,2),g=b[0],I=b[1],N=Object(r.useReducer)(y,w),S=Object(s.a)(N,2),k=S[0],U=S[1],R=O(),V=function(){v({type:"INPUT_CLEAR",value:""}),I({type:"INPUT_CLEAR",value:""}),U({type:"INPUT_CLEAR",value:""}),a()};return Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var o=new h(d.value,g.value,k.value);d.value?g.value.length>350?I({type:"FORM_SUBMIT",value:""}):(t(o),V()):v({type:"FORM_SUBMIT",value:""})},className:R.form,children:[Object(p.jsx)("h1",{children:"Lista de Tarefas"}),o?Object(p.jsxs)(i.a.Fragment,{children:[Object(p.jsx)(u.a,{className:R.textField,variant:"outlined",color:"primary",error:!1===d.isValid,id:"task-title",label:"T\xedtulo",value:d.value,onChange:function(e){v({type:"INPUT_CHANGE",value:e.target.value})},onBlur:function(e){v({type:"INPUT_BLUR",value:e.target.value})},helperText:d.error}),Object(p.jsx)(u.a,{className:R.textField,variant:"outlined",color:"primary",error:!1===g.isValid,id:"task-title",label:"Descri\xe7\xe3o",multiline:!0,rows:4,value:g.value,onChange:function(e){I({type:"INPUT_CHANGE",value:e.target.value})},helperText:g.error}),Object(p.jsx)(u.a,{className:R.textField,variant:"outlined",color:"primary",id:"task-estimated-time",label:"Tempo Estimado",value:k.value,onChange:function(e){U({type:"INPUT_CHANGE",value:e.target.value})},onBlur:function(e){U({type:"INPUT_BLUR",value:e.target.value})},helperText:"Exemplo: 2 Horas"}),Object(p.jsxs)(j.a,{sx:{minWidth:"100%",flexWrap:"wrap",display:"flex",height:"6rem",alignItems:"center",justifyContent:"space-evenly"},children:[Object(p.jsx)(m.a,{type:"submit",color:"primary",variant:"contained",children:"Criar Tarefa"}),Object(p.jsx)(m.a,{type:"reset",onClick:V,color:"secondary",variant:"contained",children:"Cancelar"})]})]}):Object(p.jsx)(m.a,{onClick:n,color:"primary",variant:"contained",size:"large",children:"Nova Tarefa"})]})},N=Object(d.a)({todoItem:{boxShadow:"0 3px 10px 1px #cecece",borderRadius:"4px",listStyle:"none",padding:"1rem",width:"20rem",margin:"1rem",position:"relative","@media (max-width: 800px)":{width:"100%"},"& button":{position:"absolute",top:"1rem",right:"1rem",backgroundColor:"#cc0000",height:"1.5rem",width:"1.5rem",boxSizing:"border-box",border:"none",fontSize:"1rem",display:"flex",justifyContent:"center",color:"white",paddin:"1rem",borderRadius:"2px",cursor:"pointer",transition:"0.3s","&:hover":{backgroundColor:"#af0000"}},"& h4":{fontSize:"1.3rem",color:"#212121",marginTop:"0"},"& span":{position:"absolute",right:"1rem",bottom:"1rem",fontSize:"1rem",color:"#666",marginTop:"0",fontStyle:"italic"}},todoCompleted:{backgroundColor:"#AAD6A0","& h4, & p, & span":{textDecoration:"line-through"},"& span":{color:"#aaa"}}}),S=function(e){var t=e.todo,o=t.title,i=t.description,n=t.estimatedTime,a=t.id,c=t.status,l=Object(r.useContext)(x),s=l.removeTodo,d=l.toggleTodo,u=N();return Object(p.jsxs)("li",{id:a,className:"".concat(u.todoItem," ").concat(!0===c?u.todoCompleted:""),onClick:d.bind(null,a,c),children:[Object(p.jsx)("button",{onClick:s.bind(null,a),children:"\u2716"}),Object(p.jsx)("h4",{children:o}),Object(p.jsx)("p",{children:i}),Object(p.jsx)("span",{children:n})]})},k=Object(d.a)({todoList:{padding:"2rem",marginTop:"2rem",borderRadius:"6px",boxShadow:"0 0 8px 1px RGBA(0,0,0,0.5)",boxSizing:"border-box",backgroundColor:"#f3f3f3",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center","@media (max-width: 800px)":{width:"80%",padding:"2rem .5rem"}}}),U=function(){var e=Object(r.useContext)(x).todos,t=k();return Object(p.jsx)(i.a.Fragment,{children:e.length>0&&Object(p.jsx)("ul",{className:t.todoList,children:e.map((function(e,t){return Object(p.jsx)(S,{todo:e},t)}))})})},R=Object(l.a)({container:{backgroundColor:"#212121",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center","@media (max-width: 800px)":{padding:0}},button:{backgroundColor:"#CC0000",color:"white","&:hover":{backgroundColor:"#DD0000"}}}),V=function(){var e=R();return Object(p.jsx)(g,{children:Object(p.jsxs)(c.a,{maxWidth:"xl",className:e.container,children:[Object(p.jsx)(I,{}),Object(p.jsx)(U,{})]})})},_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(V,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");_?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):A(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):A(e)}))}}()}},[[66,1,2]]]);
//# sourceMappingURL=main.756bc5ba.chunk.js.map