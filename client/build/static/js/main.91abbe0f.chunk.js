(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{144:function(e,t,n){},204:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(10),c=n.n(s),o=(n(144),n(247)),i=n(52),u=n(12),l=n(78),d=n(120),h=n.n(d),b=n(121),j=n(45),p="GET_USER",f="SET_FETCHING_STATUS",m=function(e){return{type:p,user:e}},g=function(e){return{type:f,isFetching:e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return t.user;case f:return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});default:return e}},O=n(91),v=function(e,t){var n=t.message,r=t.sender;if(null!==r){var a={id:n.conversationId,otherUser:r,messages:[n]};return a.latestMessageText=n.text,[a].concat(Object(O.a)(e))}return e.map((function(e){if(e.id===n.conversationId){var t=Object(j.a)({},e);return t.messages.push(n),t.latestMessageText=n.text,t}return e}))},w=function(e,t){return e.map((function(e){if(e.otherUser.id===t){var n=Object(j.a)({},e);return n.otherUser.online=!0,n}return e}))},y=function(e,t){return e.map((function(e){if(e.otherUser.id===t){var n=Object(j.a)({},e);return n.otherUser.online=!1,n}return e}))},C=function(e,t){var n={};e.forEach((function(e){n[e.otherUser.id]=!0}));var r=Object(O.a)(e);return t.forEach((function(e){if(!n[e.id]){var t={otherUser:e,messages:[]};r.push(t)}})),r},S=function(e,t,n){return e.map((function(e){if(e.otherUser.id===t){var r=Object(j.a)({},e);return r.id=n.conversationId,r.messages.push(n),r.latestMessageText=n.text,r}return e}))},k="GET_CONVERSATIONS",N="SET_MESSAGE",U="ADD_ONLINE_USER",E="REMOVE_OFFLINE_USER",I="SET_SEARCHED_USERS",F="CLEAR_SEARCHED_USERS",A="ADD_CONVERSATION",D=function(e,t){return{type:N,payload:{message:e,sender:t||null}}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return t.conversations;case N:return v(e,t.payload);case U:return w(e,t.id);case E:return y(e,t.id);case I:return C(e,t.users);case F:return e.filter((function(e){return e.id}));case A:return S(e,t.payload.recipientId,t.payload.newMessage);default:return e}},R="SET_ACTIVE_CHAT",L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return t.username;default:return e}},B="CLEAR_ON_LOGOUT",z=Object(l.b)({user:x,conversations:T,activeConversation:L}),W=Object(l.c)((function(e,t){return t.type===B&&(e=void 0),z(e,t)}),Object(l.a)(b.a,h.a)),P=n(130),_=Object(P.a)({typography:{fontFamily:"Open Sans, sans-serif",fontSize:14,button:{textTransform:"none",letterSpacing:0,fontWeight:"bold"}},overrides:{MuiInput:{input:{fontWeight:"bold"}}},palette:{primary:{main:"#3A8DFF"},secondary:{main:"#B0B0B0"}}}),M=n(49),G=n(15),q=n(8),H=n.n(q),V=n(16),J=n(46),$=n.n(J),K=n(125),Q=n.n(K)()(window.location.origin);Q.on("connect",(function(){console.log("connected to server"),Q.on("add-online-user",(function(e){W.dispatch(function(e){return{type:U,id:e}}(e))})),Q.on("remove-offline-user",(function(e){W.dispatch(function(e){return{type:E,id:e}}(e))})),Q.on("new-message",(function(e){W.dispatch(D(e.message,e.sender))}))}));var X=Q,Y=function(){var e=Object(V.a)(H.a.mark((function e(t){var n,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.a.post("/api/messages",t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(e,t){X.emit("new-message",{message:e.message,recipientId:t.recipientId,sender:e.sender})},ee=n(237),te=n(207),ne=n(250),re=n(240),ae=n(248),se=n(243),ce=n(235),oe=n(239),ie=n(2),ue=Object(ce.a)((function(){return{image:{backgroundImage:"url(/bg-img.png)",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",boxShadow:"inset 0 0 0 2000px rgba(58, 141, 255, 0.7)"},title:{color:"white",margin:"0 20%"},bubbleIcon:{width:"auto",height:"auto",marginBottom:"10%"}}})),le=function(){var e=ue();return Object(ie.jsx)(ee.a,{container:!0,alignItems:"center",justifyContent:"center",xs:12,sm:4,md:5,className:e.image,children:Object(ie.jsxs)(ee.a,{container:!0,direction:"column",alignItems:"center",children:[Object(ie.jsx)(oe.a,{component:"div",className:e.bubbleIcon,children:Object(ie.jsx)("img",{alt:"bubble-icon",src:"./bubble.svg"})}),Object(ie.jsxs)(te.a,{align:"center",variant:"h5",className:e.title,children:["Converse with anyone ",Object(ie.jsx)("br",{})," with any language"]})]})})},de=Object(ce.a)((function(){return{root:{height:"100vh"},switchTap:{justifyContent:"flex-end",margin:"3% 5%"},switchIcon:{color:"#3A8DFF",backgroundColor:"white",width:"120%"},form:{alignContent:"center",textAlign:"center"},heading:{textAlign:"left",margin:"0 0 20px 0"}}})),he=Object(u.b)((function(e){return{user:e.user}}),(function(e){return{register:function(t){e(function(e){return function(){var t=Object(V.a)(H.a.mark((function t(n){var r,a;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,$.a.post("/auth/register",e);case 3:r=t.sent,a=r.data,n(m(a)),X.emit("go-online",a.id),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0),n(m({error:t.t0.response.data.error||"Server Error"}));case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=de(),n=Object(G.g)(),a=e.user,s=e.register,c=Object(r.useState)({}),o=Object(M.a)(c,2),i=o[0],u=o[1],l=function(){var e=Object(V.a)(H.a.mark((function e(t){var n,r,a,c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=t.target.username.value,r=t.target.email.value,a=t.target.password.value,c=t.target.confirmPassword.value,a===c){e.next=8;break}return u({confirmPassword:"Passwords must match"}),e.abrupt("return");case 8:return e.next=10,s({username:n,email:r,password:a});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.id?Object(ie.jsx)(G.a,{to:"/home"}):Object(ie.jsxs)(ee.a,{container:!0,className:t.root,children:[Object(ie.jsx)(le,{}),Object(ie.jsxs)(ee.a,{container:!0,xs:12,sm:8,md:7,style:{height:"50%"},children:[Object(ie.jsxs)(ee.a,{container:!0,className:t.switchTap,spacing:2,children:[Object(ie.jsxs)(ee.a,{item:!0,style:{margin:"1%"},children:[Object(ie.jsx)(te.a,{color:"secondary",variant:"caption",children:"Already have an account?"})," "]}),Object(ie.jsx)(ee.a,{item:!0,children:Object(ie.jsx)(ne.a,{variant:"contained",className:t.switchIcon,size:"large",onClick:function(){return n.push("/login")},children:"Login"})})]}),Object(ie.jsx)(ee.a,{container:!0,className:t.form,direction:"column",children:Object(ie.jsxs)("form",{onSubmit:l,children:[Object(ie.jsx)(te.a,{variant:"h5",className:t.heading,children:Object(ie.jsx)("strong",{children:"Create an account."})}),Object(ie.jsx)(ee.a,{item:!0,children:Object(ie.jsx)(re.a,{children:Object(ie.jsx)(ae.a,{"aria-label":"username",label:"Username",name:"username",type:"text",fullWidth:!0,required:!0,style:{width:300}})})}),Object(ie.jsx)(ee.a,{item:!0,children:Object(ie.jsx)(re.a,{children:Object(ie.jsx)(ae.a,{label:"E-mail address","aria-label":"e-mail address",type:"email",name:"email",required:!0,style:{width:300}})})}),Object(ie.jsx)(ee.a,{item:!0,children:Object(ie.jsxs)(re.a,{error:!!i.confirmPassword,children:[Object(ie.jsx)(ae.a,{"aria-label":"password",label:"Password",type:"password",inputProps:{minLength:6},name:"password",required:!0,style:{width:300}}),Object(ie.jsx)(se.a,{children:i.confirmPassword})]})}),Object(ie.jsx)(ee.a,{item:!0,children:Object(ie.jsxs)(re.a,{error:!!i.confirmPassword,children:[Object(ie.jsx)(ae.a,{label:"Confirm Password","aria-label":"confirm password",type:"password",inputProps:{minLength:6},name:"confirmPassword",required:!0,style:{width:300}}),Object(ie.jsx)(se.a,{children:i.confirmPassword})]})}),Object(ie.jsx)(ne.a,{type:"submit",variant:"contained",size:"large",color:"primary",style:{margin:"5%",width:"50%"},children:"Create"})]})})]})]})})),be=Object(ce.a)((function(){return{root:{height:"100vh"},form:{}}})),je=Object(u.b)((function(e){return{user:e.user}}),(function(e){return{login:function(t){e(function(e){return function(){var t=Object(V.a)(H.a.mark((function t(n){var r,a;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,$.a.post("/auth/login",e);case 3:r=t.sent,a=r.data,n(m(a)),X.emit("go-online",a.id),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0),n(m({error:t.t0.response.data.error||"Server Error"}));case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=be(),n=Object(G.g)(),r=e.user,a=e.login,s=function(){var e=Object(V.a)(H.a.mark((function e(t){var n,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.username.value,r=t.target.password.value,e.next=5,a({username:n,password:r});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.id?Object(ie.jsx)(G.a,{to:"/home"}):Object(ie.jsxs)(ee.a,{container:!0,justify:"center",className:t.root,children:[Object(ie.jsx)(le,{}),Object(ie.jsxs)(ee.a,{container:!0,xs:12,sm:8,md:7,direction:"row",children:[Object(ie.jsxs)(ee.a,{container:!0,spacing:3,alignItems:"center",children:[Object(ie.jsx)(ee.a,{item:!0,children:Object(ie.jsx)(te.a,{children:"Need to register?"})}),Object(ie.jsx)(ee.a,{item:!0,children:Object(ie.jsx)(ne.a,{variant:"outlined",color:"primary",size:"large",onClick:function(){return n.push("/register")},children:"Register"})})]}),Object(ie.jsx)("form",{onSubmit:s,children:Object(ie.jsxs)(ee.a,{children:[Object(ie.jsx)(te.a,{variant:"h5",children:Object(ie.jsx)("strong",{children:"Welcome back!"})}),Object(ie.jsx)(ee.a,{children:Object(ie.jsx)(re.a,{margin:"normal",required:!0,children:Object(ie.jsx)(ae.a,{"aria-label":"username",label:"Username",name:"username",type:"text"})})}),Object(ie.jsx)(re.a,{margin:"normal",required:!0,children:Object(ie.jsx)(ae.a,{label:"password","aria-label":"password",type:"password",name:"password"})}),Object(ie.jsx)(ee.a,{children:Object(ie.jsx)(ne.a,{type:"submit",variant:"contained",size:"large",color:"primary",children:"Login"})})]})})]})]})})),pe=n(41),fe=n(42),me=n(44),ge=n(43),xe=n(5),Oe=n(246),ve=n(249),we=Object(ce.a)((function(e){return{root:{display:"flex",justifyContent:"space-between",marginLeft:20,flexGrow:1},username:{fontWeight:"bold",letterSpacing:-.2},previewText:{fontSize:12,color:"#9CADC8",letterSpacing:-.17},notification:{height:20,width:20,backgroundColor:"#3F92FF",marginRight:10,color:"white",fontSize:10,letterSpacing:-.5,fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:10}}})),ye=function(e){var t=we(),n=e.conversation,r=n.latestMessageText,a=n.otherUser;return Object(ie.jsx)(ve.a,{className:t.root,children:Object(ie.jsxs)(ve.a,{children:[Object(ie.jsx)(te.a,{className:t.username,children:a.username}),Object(ie.jsx)(te.a,{className:t.previewText,children:r})]})})},Ce=n(77),Se=n.n(Ce),ke=Object(ce.a)((function(){return{root:{height:44,marginTop:23,marginLeft:6,display:"flex",alignItems:"center"},subContainer:{display:"flex",justifyContent:"space-between",alignItems:"center",flexGrow:1},username:{letterSpacing:-.23,fontSize:16,fontWeight:"bold",marginLeft:17},ellipsis:{color:"#95A7C4",marginRight:24,opacity:.5}}})),Ne=Object(u.b)((function(e){return{user:e.user}}))((function(e){var t=ke(),n=e.user||{};return Object(ie.jsxs)(ve.a,{className:t.root,children:[Object(ie.jsx)(Me,{photoUrl:n.photoUrl,online:!0}),Object(ie.jsxs)(ve.a,{className:t.subContainer,children:[Object(ie.jsx)(te.a,{className:t.username,children:n.username}),Object(ie.jsx)(Se.a,{classes:{root:t.ellipsis}})]})]})})),Ue=n(241),Ee=n(244),Ie=n(127),Fe=n.n(Ie),Ae=function(e){Object(me.a)(n,e);var t=Object(ge.a)(n);function n(){var e;Object(pe.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).handleSubmit=function(e){e.preventDefault()},e}return Object(fe.a)(n,[{key:"render",value:function(){var e=this.props.classes;return Object(ie.jsx)("form",{onSubmit:this.handleSubmit,children:Object(ie.jsx)(re.a,{fullWidth:!0,hiddenLabel:!0,children:Object(ie.jsx)(Ue.a,{name:"search",onChange:this.props.handleChange,classes:{root:e.filledInput,input:e.input},disableUnderline:!0,placeholder:"Search",startAdornment:Object(ie.jsx)(Ee.a,{position:"start",children:Object(ie.jsx)(Fe.a,{})})})})})}}]),n}(r.Component),De=Object(xe.a)({filledInput:{height:50,background:"#E9EEF9",borderRadius:5,fontSize:13,fontWeight:"bold",color:"#99A9C4",letterSpacing:0,display:"flex",justifyContent:"center",marginBottom:20},input:{"&::placeholder":{color:"#ADC0DE",opacity:1}}})(Ae),Te=Object(ce.a)((function(){return{root:{paddingLeft:21,paddingRight:21,flexGrow:1},title:{fontSize:20,letterSpacing:-.29,fontWeight:"bold",marginTop:32,marginBottom:15}}})),Re=Object(u.b)((function(e){return{conversations:e.conversations}}))((function(e){var t=Te(),n=e.conversations||[],r=e.handleChange,a=e.searchTerm;return Object(ie.jsxs)(ve.a,{className:t.root,children:[Object(ie.jsx)(Ne,{}),Object(ie.jsx)(te.a,{className:t.title,children:"Chats"}),Object(ie.jsx)(De,{handleChange:r}),n.filter((function(e){return e.otherUser.username.includes(a)})).map((function(e){return Object(ie.jsx)(ze,{conversation:e},e.otherUser.username)}))]})})),Le=Object(u.b)(null,(function(e){return{searchUsers:function(t){var n;e((n=t,function(){var e=Object(V.a)(H.a.mark((function e(t){var r,a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$.a.get("/api/users/".concat(n));case 3:r=e.sent,a=r.data,t({type:I,users:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()))},clearSearchedUsers:function(){e({type:F})}}}))((function(e){var t=e.searchUsers,n=e.clearSearchedUsers,a=Object(r.useState)(""),s=Object(M.a)(a,2),c=s[0],o=s[1],i=function(){var e=Object(V.a)(H.a.mark((function e(r){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r.target.value){e.next=4;break}return n(),o(""),e.abrupt("return");case 4:if(!c.includes(r.target.value)){e.next=7;break}return o(r.target.value),e.abrupt("return");case 7:return e.next=9,t(r.target.value);case 9:o(r.target.value);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(ie.jsx)(Re,{handleChange:i,searchTerm:c})})),Be=function(e){Object(me.a)(n,e);var t=Object(ge.a)(n);function n(){var e;Object(pe.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).handleClick=function(){var t=Object(V.a)(H.a.mark((function t(n){return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.setActiveChat(n.otherUser.username);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(fe.a)(n,[{key:"render",value:function(){var e=this,t=this.props.classes,n=this.props.conversation.otherUser;return Object(ie.jsxs)(ve.a,{onClick:function(){return e.handleClick(e.props.conversation)},className:t.root,children:[Object(ie.jsx)(Me,{photoUrl:n.photoUrl,username:n.username,online:n.online,sidebar:!0}),Object(ie.jsx)(ye,{conversation:this.props.conversation})]})}}]),n}(r.Component),ze=Object(u.b)(null,(function(e){return{setActiveChat:function(t){e({type:R,username:t})}}}))(Object(xe.a)({root:{borderRadius:8,height:80,boxShadow:"0 2px 10px 0 rgba(88,133,196,0.05)",marginBottom:10,display:"flex",alignItems:"center","&:hover":{cursor:"grab"}}})(Be)),We=n(245),Pe=n(254),_e=Object(ce.a)((function(){return{profilePic:{height:44,width:44},badge:{height:13,width:13,borderRadius:"50%",border:"2px solid white",backgroundColor:"#D0DAE9"},online:{backgroundColor:"#1CED84"},sidebar:{marginLeft:17}}})),Me=function(e){var t=_e(),n=e.sidebar,r=e.username,a=e.photoUrl,s=e.online;return Object(ie.jsx)(ve.a,{className:n?t.sidebar:"",children:Object(ie.jsx)(We.a,{classes:{badge:"".concat(t.badge," ").concat(s&&t.online)},variant:"dot",anchorOrigin:{horizontal:"right",vertical:"bottom"},overlap:"circle",children:Object(ie.jsx)(Pe.a,{alt:r,src:a,className:t.profilePic})})})},Ge=Object(ce.a)((function(){return{root:{display:"flex",flexDirection:"column",alignItems:"flex-end"},date:{fontSize:11,color:"#BECCE2",fontWeight:"bold",marginBottom:5},text:{fontSize:14,color:"#91A3C0",letterSpacing:-.2,padding:8,fontWeight:"bold"},bubble:{background:"#F4F6FA",borderRadius:"10px 10px 0 10px"}}})),qe=function(e){var t=Ge(),n=e.time,r=e.text;return Object(ie.jsxs)(ve.a,{className:t.root,children:[Object(ie.jsx)(te.a,{className:t.date,children:n}),Object(ie.jsx)(ve.a,{className:t.bubble,children:Object(ie.jsx)(te.a,{className:t.text,children:r})})]})},He=Object(ce.a)((function(){return{root:{display:"flex"},avatar:{height:30,width:30,marginRight:11,marginTop:6},usernameDate:{fontSize:11,color:"#BECCE2",fontWeight:"bold",marginBottom:5},bubble:{backgroundImage:"linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",borderRadius:"0 10px 10px 10px"},text:{fontSize:14,fontWeight:"bold",color:"#FFFFFF",letterSpacing:-.2,padding:8}}})),Ve=function(e){var t=He(),n=e.text,r=e.time,a=e.otherUser;return Object(ie.jsxs)(ve.a,{className:t.root,children:[Object(ie.jsx)(Pe.a,{alt:a.username,src:a.photoUrl,className:t.avatar}),Object(ie.jsxs)(ve.a,{children:[Object(ie.jsxs)(te.a,{className:t.usernameDate,children:[a.username," ",r]}),Object(ie.jsx)(ve.a,{className:t.bubble,children:Object(ie.jsx)(te.a,{className:t.text,children:n})})]})]})},Je=Object(ce.a)((function(){return{root:{display:"flex",flexGrow:8,flexDirection:"column"},chatContainer:{marginLeft:41,marginRight:41,display:"flex",flexDirection:"column",flexGrow:1,justifyContent:"space-between"}}})),$e=Object(u.b)((function(e){return{user:e.user,conversation:e.conversations&&e.conversations.find((function(t){return t.otherUser.username===e.activeConversation}))}}),null)((function(e){var t=Je(),n=e.user,r=e.conversation||{};return Object(ie.jsx)(ve.a,{className:t.root,children:r.otherUser&&Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(Ye,{username:r.otherUser.username,online:r.otherUser.online||!1}),Object(ie.jsxs)(ve.a,{className:t.chatContainer,children:[Object(ie.jsx)(tt,{messages:r.messages,otherUser:r.otherUser,userId:n.id}),Object(ie.jsx)(Qe,{otherUser:r.otherUser,conversationId:r.id,user:n})]})]})})})),Ke=function(e){Object(me.a)(n,e);var t=Object(ge.a)(n);function n(e){var r;return Object(pe.a)(this,n),(r=t.call(this,e)).handleChange=function(e){r.setState({text:e.target.value})},r.handleSubmit=function(){var e=Object(V.a)(H.a.mark((function e(t){var n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={text:t.target.text.value,recipientId:r.props.otherUser.id,conversationId:r.props.conversationId,sender:r.props.conversationId?null:r.props.user},e.next=4,r.props.postMessage(n);case 4:r.setState({text:""});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state={text:""},r}return Object(fe.a)(n,[{key:"render",value:function(){var e=this.props.classes;return Object(ie.jsx)("form",{className:e.root,onSubmit:this.handleSubmit,children:Object(ie.jsx)(re.a,{fullWidth:!0,hiddenLabel:!0,children:Object(ie.jsx)(Ue.a,{classes:{root:e.input},disableUnderline:!0,placeholder:"Type something...",value:this.state.text,name:"text",onChange:this.handleChange})})})}}]),n}(r.Component),Qe=Object(u.b)((function(e){return{user:e.user,conversations:e.conversations}}),(function(e){return{postMessage:function(t){var n;e((n=t,function(){var e=Object(V.a)(H.a.mark((function e(t){var r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y(n);case 3:r=e.sent,n.conversationId?t(D(r.message)):t((a=n.recipientId,s=r.message,{type:A,payload:{recipientId:a,newMessage:s}})),Z(r,n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}var a,s}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()))}}}))(Object(xe.a)({root:{justifySelf:"flex-end",marginTop:15},input:{height:70,backgroundColor:"#F4F6FA",borderRadius:8,marginBottom:20}})(Ke)),Xe=Object(ce.a)((function(e){return{root:{display:"flex",alignItems:"center",justifyContent:"space-between",height:89,marginBottom:34,boxShadow:"0 2px 20px 0 rgba(88,133,196,0.10)"},content:{display:"flex",alignItems:"center",marginLeft:24},username:{fontSize:20,letterSpacing:-.29,fontWeight:"bold",marginRight:14},statusText:{fontSize:12,color:"#BFC9DB",letterSpacing:-.17},statusDot:{height:8,width:8,borderRadius:"50%",marginRight:5,backgroundColor:"#D0DAE9"},online:{background:"#1CED84"},ellipsis:{color:"#95A7C4",marginRight:24,opacity:.5}}})),Ye=function(e){var t=Xe(),n=e.username,r=e.online;return Object(ie.jsxs)(ve.a,{className:t.root,children:[Object(ie.jsxs)(ve.a,{className:t.content,children:[Object(ie.jsx)(te.a,{className:t.username,children:n}),Object(ie.jsx)(ve.a,{className:"".concat(t.statusDot," ").concat(t[r&&"online"])}),Object(ie.jsx)(te.a,{className:t.statusText,children:r?"Online":"Offline"})]}),Object(ie.jsx)(Se.a,{classes:{root:t.ellipsis}})]})},Ze=n(128),et=n.n(Ze),tt=function(e){var t=e.messages,n=e.otherUser,r=e.userId,a=t.sort((function(e,t){return e.id-t.id}));return Object(ie.jsx)(ve.a,{children:a.map((function(e){var t=et()(e.createdAt).format("h:mm");return e.senderId===r?Object(ie.jsx)(qe,{text:e.text,time:t},e.id):Object(ie.jsx)(Ve,{text:e.text,time:t,otherUser:n},e.id)}))})},nt=function(e){Object(me.a)(n,e);var t=Object(ge.a)(n);function n(e){var r;return Object(pe.a)(this,n),(r=t.call(this,e)).handleLogout=Object(V.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.props.logout(r.props.user.id);case 2:case"end":return e.stop()}}),e)}))),r.state={isLoggedIn:!1},r}return Object(fe.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.user.id!==e.user.id&&this.setState({isLoggedIn:!0})}},{key:"componentDidMount",value:function(){this.props.fetchConversations()}},{key:"render",value:function(){var e=this.props.classes;return this.props.user.id?Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(ne.a,{className:e.logout,onClick:this.handleLogout,children:"Logout"}),Object(ie.jsxs)(ee.a,{container:!0,component:"main",className:e.root,children:[Object(ie.jsx)(Oe.a,{}),Object(ie.jsx)(Le,{}),Object(ie.jsx)($e,{})]})]}):this.state.isLoggedIn?Object(ie.jsx)(G.a,{to:"/login"}):Object(ie.jsx)(G.a,{to:"/register"})}}]),n}(r.Component),rt=Object(u.b)((function(e){return{user:e.user,conversations:e.conversations}}),(function(e){return{logout:function(t){e(function(e){return function(){var t=Object(V.a)(H.a.mark((function t(n){return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,$.a.delete("/auth/logout");case 3:n(m({})),X.emit("logout",e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(t)),e({type:B})},fetchConversations:function(){e(function(){var e=Object(V.a)(H.a.mark((function e(t){var n,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$.a.get("/api/conversations");case 3:n=e.sent,r=n.data,t({type:k,conversations:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}}}))(Object(xe.a)({root:{height:"97vh"}})(nt)),at=n(252),st=n(129),ct=n.n(st),ot=Object(ce.a)((function(e){return{snackbar:{backgroundColor:"red",fontWeight:"bold"},icon:{color:"white"}}})),it=function(e){var t=ot();return Object(ie.jsx)(at.a,{open:e.snackBarOpen,onClose:function(){return e.setSnackBarOpen(!1)},message:e.errorMessage||"Sorry, an error occured. Please try again",action:Object(ie.jsx)(a.a.Fragment,{children:Object(ie.jsx)(ne.a,{className:t.icon,size:"small",onClick:function(){return e.setSnackBarOpen(!1)},children:Object(ie.jsx)(ct.a,{color:"secondary"})})}),ContentProps:{classes:{root:t.snackbar}}})},ut=Object(G.h)(Object(u.b)((function(e){return{user:e.user}}),(function(e){return{fetchUser:function(){e(function(){var e=Object(V.a)(H.a.mark((function e(t){var n,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g(!0)),e.prev=1,e.next=4,$.a.get("/auth/user");case 4:n=e.sent,r=n.data,t(m(r)),r.id&&X.emit("go-online",r.id),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:return e.prev=13,t(g(!1)),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.user,n=e.fetchUser,a=Object(r.useState)(""),s=Object(M.a)(a,2),c=s[0],o=s[1],i=Object(r.useState)(!1),u=Object(M.a)(i,2),l=u[0],d=u[1];return Object(r.useEffect)((function(){n()}),[n]),Object(r.useEffect)((function(){t.error&&("string"===typeof t.error?o(t.error):o("Internal Server Error. Please try again"),d(!0))}),[t.error]),e.user.isFetchingUser?Object(ie.jsx)("div",{children:"Loading..."}):Object(ie.jsxs)(ie.Fragment,{children:[l&&Object(ie.jsx)(it,{setSnackBarOpen:d,errorMessage:c,snackBarOpen:l}),Object(ie.jsxs)(G.d,{children:[Object(ie.jsx)(G.b,{path:"/login",component:je}),Object(ie.jsx)(G.b,{path:"/register",component:he}),Object(ie.jsx)(G.b,{exact:!0,path:"/",render:function(e){var t;return(null===(t=e.user)||void 0===t?void 0:t.id)?Object(ie.jsx)(rt,{}):Object(ie.jsx)(he,{})}}),Object(ie.jsx)(G.b,{path:"/home",component:rt})]})]})})));var lt=function(){return Object(ie.jsx)(u.a,{store:W,children:Object(ie.jsx)(o.a,{theme:_,children:Object(ie.jsx)(i.a,{children:Object(ie.jsx)(ut,{})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(ie.jsx)(lt,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[204,1,2]]]);
//# sourceMappingURL=main.91abbe0f.chunk.js.map