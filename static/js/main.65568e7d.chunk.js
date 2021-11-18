(this["webpackJsonptodo-notes"]=this["webpackJsonptodo-notes"]||[]).push([[0],{59:function(e,t,r){},66:function(e,t,r){"use strict";r.r(t);var o=r(0),i=r.n(o),a=r(8),n=r.n(a),l=(r(59),r(99)),c=r(68),d=r(19),s=r(96),u=r(100),m=r(102),v=r(41),p=function e(t,r,o){Object(v.a)(this,e),this.id=void 0,this.title=void 0,this.description=void 0,this.estimatedTime=void 0,this.status=void 0,this.title=t,this.description=r,this.estimatedTime=o,this.id=(new Date).toISOString(),this.status=!1},b=r(46),h=r(6),x=Object(o.createContext)({todos:[],formIsVisible:!1,showForm:function(){},closeForm:function(){},addTodo:function(e){},removeTodo:function(e){},toggleTodo:function(e,t){}}),f=function(e){var t=Object(o.useState)([]),r=Object(d.a)(t,2),i=r[0],a=r[1],n=Object(o.useState)(!1),l=Object(d.a)(n,2),c=l[0],s=l[1];Object(o.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todoList")||"[]");a(e)}),[]);var u=function(e){localStorage.setItem("todoList",JSON.stringify(e))},m={todos:i,formIsVisible:c,showForm:function(){s(!0)},closeForm:function(){s(!1)},addTodo:function(e){a((function(t){var r=t.concat(e);return u(r),r}))},removeTodo:function(e){a((function(t){return t.filter((function(t){return t.id!==e}))})),u(i)},toggleTodo:function(e,t){a((function(r){var o=r.find((function(t){return t.id===e})),i=r.findIndex((function(t){return t.id===e})),a=new p(null===o||void 0===o?void 0:o.title,null===o||void 0===o?void 0:o.description,null===o||void 0===o?void 0:o.estimatedTime);return a.status=!t,a.id=e,r[i]=a,u(r),Object(b.a)(r)}))}};return Object(h.jsx)(x.Provider,{value:m,children:e.children})},j=x,g=r(101),O=Object(s.a)({form:{padding:"2rem",marginTop:"2rem",borderRadius:"6px",boxShadow:"0 0 8px 1px RGBA(0,0,0,0.5)",boxSizing:"border-box",backgroundColor:"#f3f3f3",display:"flex",flexDirection:"column",alignItems:"center",width:"50%",textAlign:"center","& h1":{marginTop:0,fontWeight:300,fontSize:"3rem",color:"#212121"},"@media (max-width: 800px)":{width:"80%",padding:"1rem","& h1":{marginTop:0,fontWeight:300,fontSize:"2rem",color:"#212121"}}},textField:{minWidth:"10rem",maxWidth:"30rem",width:"80%",margin:"1rem 0 1rem 0","@media (max-width: 800px)":{width:"100%"}}}),T={value:"",isValid:null,error:""},C=function(e,t){switch(t.type){case"INPUT_CHANGE":return t.value?{value:t.value,isValid:!0,error:""}:{value:t.value,isValid:!1,error:"O campo \xe9 obrigat\xf3rio!"};case"INPUT_BLUR":return""===t.value.trim()?{value:t.value,isValid:!1,error:"O campo \xe9 obrigat\xf3rio."}:e;case"INPUT_CLEAR":return{value:t.value,isValid:null,error:""};case"FORM_SUBMIT":return""===e.value.trim()?{value:e.value,isValid:!1,error:"O campo \xe9 obrigat\xf3rio."}:{value:e.value,isValid:!0,error:""};default:return e}},y=function(e,t){var r=350;switch(t.type){case"INPUT_CHANGE":return t.value.length>r?{value:t.value,isValid:!1,error:"O campo pode conter apenas ".concat(r," caracteres.")}:{value:t.value,isValid:!0,error:""};case"FORM_SUBMIT":return e.value.length>r?{value:e.value,isValid:!1,error:"O campo pode conter apenas ".concat(r," caracteres.")}:{value:e.value,isValid:!0,error:""};case"INPUT_CLEAR":return{value:t.value,isValid:null,error:""};default:return e}},I=function(e,t){switch(t.type){case"INPUT_BLUR":return{value:t.value,isValid:!0,error:""};case"INPUT_CHANGE":return{value:t.value,isValid:!0,error:"Exemplo: 2 Horas"};case"INPUT_CLEAR":return{value:t.value,isValid:null,error:""};default:return e}},w=function(){var e=Object(o.useContext)(j),t=e.addTodo,r=e.formIsVisible,a=e.showForm,n=e.closeForm,l=Object(o.useReducer)(C,T),c=Object(d.a)(l,2),s=c[0],v=c[1],b=Object(o.useReducer)(y,T),x=Object(d.a)(b,2),f=x[0],w=x[1],N=Object(o.useReducer)(I,T),S=Object(d.a)(N,2),U=S[0],R=S[1],V=O(),_=function(){v({type:"INPUT_CLEAR",value:""}),w({type:"INPUT_CLEAR",value:""}),R({type:"INPUT_CLEAR",value:""}),n()};return Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r=new p(s.value,f.value,U.value);s.value?f.value.length>350?w({type:"FORM_SUBMIT",value:""}):(t(r),_()):v({type:"FORM_SUBMIT",value:""})},className:V.form,children:[Object(h.jsx)("h1",{children:"Lista de Tarefas"}),r?Object(h.jsxs)(i.a.Fragment,{children:[Object(h.jsx)(u.a,{className:V.textField,variant:"outlined",color:"primary",error:!1===s.isValid,id:"task-title",label:"T\xedtulo",value:s.value,onChange:function(e){v({type:"INPUT_CHANGE",value:e.target.value})},onBlur:function(e){v({type:"INPUT_BLUR",value:e.target.value})},helperText:s.error}),Object(h.jsx)(u.a,{className:V.textField,variant:"outlined",color:"primary",error:!1===f.isValid,id:"task-title",label:"Descri\xe7\xe3o",multiline:!0,rows:4,value:f.value,onChange:function(e){w({type:"INPUT_CHANGE",value:e.target.value})},helperText:f.error}),Object(h.jsx)(u.a,{className:V.textField,variant:"outlined",color:"primary",id:"task-estimated-time",label:"Tempo Estimado",value:U.value,onChange:function(e){R({type:"INPUT_CHANGE",value:e.target.value})},onBlur:function(e){R({type:"INPUT_BLUR",value:e.target.value})},helperText:"Exemplo: 2 Horas"}),Object(h.jsxs)(g.a,{sx:{minWidth:"100%",flexWrap:"wrap",display:"flex",height:"6rem",alignItems:"center",justifyContent:"space-evenly"},children:[Object(h.jsx)(m.a,{type:"submit",color:"primary",variant:"contained",children:"Criar Tarefa"}),Object(h.jsx)(m.a,{type:"reset",onClick:_,color:"secondary",variant:"contained",children:"Cancelar"})]})]}):Object(h.jsx)(m.a,{onClick:a,color:"primary",variant:"contained",size:"large",children:"Nova Tarefa"})]})},N=Object(s.a)({todoItem:{boxShadow:"0 3px 10px 1px #cecece",borderRadius:"4px",listStyle:"none",padding:"1rem",width:"20rem",margin:"1rem",position:"relative","@media (max-width: 800px)":{width:"100%"},"& button":{position:"absolute",top:"1rem",right:"1rem",backgroundColor:"#cc0000",height:"1.5rem",width:"1.5rem",boxSizing:"border-box",border:"none",fontSize:"1rem",display:"flex",justifyContent:"center",color:"white",paddin:"1rem",borderRadius:"2px",cursor:"pointer",transition:"0.3s","&:hover":{backgroundColor:"#af0000"}},"& h4":{fontSize:"1.3rem",color:"#212121",marginTop:"0"},"& span":{position:"absolute",right:"1rem",bottom:"1rem",fontSize:"1rem",color:"#666",marginTop:"0",fontStyle:"italic"}},todoCompleted:{backgroundColor:"#AAD6A0","& h4, & p, & span":{textDecoration:"line-through"},"& span":{color:"#aaa"}}}),S=function(e){var t=e.todo,r=t.title,i=t.description,a=t.estimatedTime,n=t.id,l=t.status,c=Object(o.useContext)(j),d=c.removeTodo,s=c.toggleTodo,u=N();return Object(h.jsxs)("li",{id:n,className:"".concat(u.todoItem," ").concat(!0===l?u.todoCompleted:""),onClick:s.bind(null,n,l),children:[Object(h.jsx)("button",{onClick:d.bind(null,n),children:"\u2716"}),Object(h.jsx)("h4",{children:r}),Object(h.jsx)("p",{children:i}),Object(h.jsx)("span",{children:a})]})},U=Object(s.a)({todoList:{padding:"2rem",marginTop:"2rem",borderRadius:"6px",boxShadow:"0 0 8px 1px RGBA(0,0,0,0.5)",boxSizing:"border-box",backgroundColor:"#f3f3f3",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center","@media (max-width: 800px)":{width:"80%",padding:"2rem .5rem"}}}),R=function(){var e=Object(o.useContext)(j).todos,t=U();return Object(h.jsx)(i.a.Fragment,{children:e.length>0&&Object(h.jsx)("ul",{className:t.todoList,children:e.map((function(e,t){return Object(h.jsx)(S,{todo:e},t)}))})})},V=Object(c.a)({container:{backgroundColor:"#212121",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center","@media (max-width: 800px)":{padding:0}},button:{backgroundColor:"#CC0000",color:"white","&:hover":{backgroundColor:"#DD0000"}}}),_=function(){var e=V();return Object(h.jsx)(f,{children:Object(h.jsxs)(l.a,{maxWidth:"xl",className:e.container,children:[Object(h.jsx)(w,{}),Object(h.jsx)(R,{})]})})};n.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(_,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.65568e7d.chunk.js.map