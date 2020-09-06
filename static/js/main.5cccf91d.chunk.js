(this["webpackJsonpreact-site"]=this["webpackJsonpreact-site"]||[]).push([[0],{87:function(e,a,t){e.exports=t(99)},92:function(e,a,t){},99:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),c=t.n(r),i=(t(92),t(19)),o=t(6),s=t(134),m=t(135),d=t(102),p=t(137),u=t(15),E=Object(s.a)((function(e){return{contents:Object(o.a)({display:"flex",flexDirection:"column",justifyContent:"center",padding:"100 0",height:"100vh"},e.breakpoints.up("sm"),{alignItems:"center"}),home:{backgroundColor:"#f7fcfd"},button:{color:"#4bc0c8",backgroundColor:"#fff",margin:8,border:"1px solid rgba(75, 192, 200, 0.5)",boxShadow:"0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)","&:hover":{border:"1px solid #4bc0c8",backgroundColor:"#fff"}},topImage:Object(o.a)({height:330,marginBottom:10,marginTop:110},e.breakpoints.down("sm"),{height:200}),topTitle:Object(o.a)({fontWeight:700,letterSpacing:4,color:"#666",fontSize:"4rem",fontFamily:"Caveat"},e.breakpoints.down("sm"),{fontWeight:600,fontSize:"2rem"}),topText:{textAlign:"center"},subText:Object(o.a)({color:"#999",margin:"14 0"},e.breakpoints.down("sm"),{fontSize:"0.9rem"}),link:{color:"inherit",textDecoration:"none"}}}));var g=function(){var e=E();return l.a.createElement("section",{className:e.home},l.a.createElement(m.a,{maxWidth:"md",className:e.contents},l.a.createElement("img",{src:"https://github.com/isamu-takemoto/react-portfolio/blob/master/public/images/desk.png",alt:"devImage",className:e.topImage}),l.a.createElement("div",{className:e.topText},l.a.createElement(d.a,{component:"h2",className:e.topTitle},"I'm Web Developer"),l.a.createElement("p",{className:e.subText},"29\u624d\u306e\u6642\u306bWeb\u306e\u4e16\u754c\u306b\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30a8\u30f3\u30b8\u30cb\u30a2\u3068\u3057\u3066\u98db\u3073\u8fbc\u307f\u307e\u3057\u305f\u3002",l.a.createElement("br",null),"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3060\u3051\u3067\u306a\u304f\u3001\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u3082\u30a4\u30f3\u30d5\u30e9\u3082\u3044\u3051\u3061\u3083\u3046\u30d5\u30eb\u30b9\u30bf\u30c3\u30af\u30a8\u30f3\u30b8\u30cb\u30a2\u3092\u76ee\u6307\u3057\u3066\u3044\u307e\u3059\u3002"),l.a.createElement(u.b,{to:"/works",className:e.link},l.a.createElement(p.a,{variant:"outlined",className:e.button},"\u5236\u4f5c\u7269\u3092\u898b\u308b")),l.a.createElement(u.b,{to:"/contactForm",className:e.link},l.a.createElement(p.a,{variant:"outlined",className:e.button},"\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u308b")))))},b=t(29),h=t(30),v=t(33),f=t(32),k=t(5),N=Object(s.a)((function(e){return{content:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:64,backgroundColor:"#f7fcfd",height:200},contentTitle:{fontWeight:700,letterSpacing:e.spacing(.5),marginBottom:8,fontSize:28,color:"#666"},contentText:{textAlign:"center",fontSize:14,color:"#999","& > p":{margin:0}}}}));var x=function(e){var a=N();return l.a.createElement("section",null,l.a.createElement("div",{className:a.content},l.a.createElement("div",{className:a.contentText},l.a.createElement(d.a,{className:a.contentTitle},e.title),l.a.createElement("p",null,e.subtitle))))},w=t(152),O=t(138),j=Object(s.a)({Avatar:{margin:10,width:150,height:150}});function y(){var e=j();return l.a.createElement(O.a,{container:!0,justify:"center",alignItems:"center"},l.a.createElement(w.a,{alt:"my picture",src:"images/myPic.jpg",className:e.Avatar}))}var B=function(e){Object(v.a)(t,e);var a=Object(f.a)(t);function t(e){var n;return Object(b.a)(this,t),(n=a.call(this,e)).state={title:"About me",subtitle:"\u79c1\u306b\u3064\u3044\u3066",birth:"1990.02.01",age:"30"},n}return Object(h.a)(t,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement("section",null,l.a.createElement(x,{title:this.state.title,subtitle:this.state.subtitle}),l.a.createElement(m.a,null,l.a.createElement("div",{className:e.root},l.a.createElement("div",{className:e.profile},l.a.createElement("div",{className:e.avatar},l.a.createElement(y,null)),l.a.createElement("div",{className:e.contents},l.a.createElement("div",null,l.a.createElement("div",{className:e.header},l.a.createElement("div",{className:e.name},"Isamu Takemoto"),l.a.createElement("div",{className:e.job},"Web Developer")),l.a.createElement("div",{className:e.contentBody},l.a.createElement("dl",null,l.a.createElement("dt",null,"\u8a95\u751f\u65e5 / \u5e74\u9f62"),l.a.createElement("dd",null,this.state.birth," / ",this.state.age)),l.a.createElement("dl",null,l.a.createElement("dt",null,"\u8da3\u5473"),l.a.createElement("dd",null,"\u6620\u753b\u9451\u8cde\u3001\u7b4b\u30c8\u30ec\u3001\u30b0\u30eb\u30e1")),l.a.createElement("dl",null,l.a.createElement("dt",null,"\u81ea\u5df1\u7d39\u4ecb"),l.a.createElement("dd",null,"\u5343\u8449\u770c\u51fa\u8eab\u306e\u30a2\u30e9\u30b5\u30fc\u30a8\u30f3\u30b8\u30cb\u30a2\u3002\u98df\u54c1\u696d\u754c\u3001\u5ead\u696d\u754c\u3092\u7d4c\u3066IT\u696d\u754c\u3078\u8ee2\u8eab\u3002",l.a.createElement("br",null),"\u73fe\u5728\u306f\u4eba\u6750\u7cfbBtoB\u30b5\u30fc\u30d3\u30b9\u306e\u958b\u767a\u30a8\u30f3\u30b8\u30cb\u30a2\u3068\u3057\u3066\u30d0\u30c3\u30af\u30fb\u30d5\u30ed\u30f3\u30c8\u3092\u62c5\u5f53\u3002",l.a.createElement("br",null),"\u4f11\u65e5\u306f\u606f\u5b50\u3068\u904a\u3093\u3060\u308a\u3057\u3066\u3044\u307e\u3059\u3002")))))),l.a.createElement("div",{className:e.career},l.a.createElement("div",{className:e.header},l.a.createElement("div",{className:e.name},"Career")),l.a.createElement("div",{className:e.timeline},l.a.createElement("div",{className:"entry"},l.a.createElement("div",{className:"header"},l.a.createElement("p",{className:"during"},"2019.10 - \u73fe\u5728"),l.a.createElement(d.a,{variant:"h3",className:"title"},"\u4eba\u6750\u7cfbWBE\u30b5\u30fc\u30d3\u30b9\u7d99\u7d9a\u958b\u767a / Engineer")),l.a.createElement("div",{className:"body"},l.a.createElement("p",null,"Web\u30b5\u30fc\u30d3\u30b9\u306e\u958b\u767a\u304c\u3057\u305f\u304f\u3001\u540c\u793e\u306eIT\u90e8\u9580\u306b\u7570\u52d5\u3002",l.a.createElement("br",null),"C#/.NET Framework,React/Redux\u3092\u63a1\u7528\u3057\u305f\u81ea\u30b0\u30eb\u30fc\u30d7\u30b5\u30fc\u30d3\u30b9\u7d99\u7d9a\u958b\u767aPJT\u306e\u958b\u767a\u30a8\u30f3\u30b8\u30cb\u30a2\u3068\u3057\u3066\u5f93\u4e8b\u3002",l.a.createElement("br",null),"\u8981\u4ef6\u5b9a\u7fa9\u3001\u8a2d\u8a08\u3001\u88fd\u9020\u3001\u30c6\u30b9\u30c8\u3001\u30ea\u30ea\u30fc\u30b9\u306e\u5404\u5de5\u7a0b\u3092\u62c5\u5f53\u3002",l.a.createElement("br",null),"\u6280\u8853\u529b\u306e\u66f4\u306a\u308b\u30ec\u30d9\u30eb\u30a2\u30c3\u30d7\u3068\u5b88\u5099\u7bc4\u56f2\u3092\u5e83\u3052\u3088\u3046\u3068\u65e5\u3005\u6d3b\u52d5\u3057\u3066\u3044\u307e\u3059\u3002")))),l.a.createElement("div",{className:e.timeline},l.a.createElement("div",{className:"entry"},l.a.createElement("div",{className:"header"},l.a.createElement("p",{className:"during"},"2018.04 - 2019.9"),l.a.createElement(d.a,{variant:"h3",className:"title"},"\u30a2\u30a6\u30c8\u30bd\u30fc\u30b7\u30f3\u30b0\u30b5\u30fc\u30d3\u30b9 / \u696d\u52d9\u6539\u5584\u30b3\u30f3\u30b5\u30eb")),l.a.createElement("div",{className:"body"},l.a.createElement("p",null,"\u30b9\u30ad\u30eb\u30a2\u30c3\u30d7\u3001\u30ad\u30e3\u30ea\u30a2\u9078\u629e\u306e\u3057\u3084\u3059\u3055\u3092\u7406\u7531\u306b\u73fe\u5728\u306e\u4f01\u696d\u306b\u8ee2\u8077\u3002",l.a.createElement("br",null),"\u30a8\u30cd\u30eb\u30ae\u30fc\u696d\u754c\u306e\u5927\u624b\u96fb\u529b\u4f1a\u793e\u3084\u7d4c\u6e08\u7523\u696d\u7701\u7cfb\u306e\u88dc\u52a9\u91d1\u57f7\u884c\u56e3\u4f53\u306b\u3066\u696d\u52d9\u6539\u5584\u30fb\u5236\u5ea6\u8a2d\u8a08\u30fb\u30b3\u30f3\u30c6\u30f3\u30c4\u4f5c\u6210\u3092\u62c5\u5f53\u3002",l.a.createElement("br",null),"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u9818\u57df\u306e\u5c02\u9580\u7684\u306a\u77e5\u8b58\u3092\u30ad\u30e3\u30c3\u30c1\u30a2\u30c3\u30d7\u3057\u6539\u5584\u3084\u8a2d\u8a08\u3092\u5b9f\u65bd\u3057\u305f\u308a\u3001",l.a.createElement("br",null),"\u524d\u4f8b\u306e\u306a\u3044\u4e8b\u696d\u306e\u5236\u5ea6\u8a2d\u8a08\u3084\u904b\u7528\u3068\u3044\u3063\u305f\u4e0a\u6d41\u5de5\u7a0b\u306e\u696d\u52d9\u3092\u7d4c\u9a13\u3057\u307e\u3057\u305f\u3002")))),l.a.createElement("div",{className:e.timeline},l.a.createElement("div",{className:"entry"},l.a.createElement("div",{className:"header"},l.a.createElement("p",{className:"during"},"2017.08 - 2018.01"),l.a.createElement(d.a,{variant:"h3",className:"title"},"\u30ac\u30fc\u30c7\u30f3\u30c7\u30b6\u30a4\u30f3\u4e8b\u52d9\u6240 / \u4ee3\u8868\u79d8\u66f8\u3001\u30c7\u30b6\u30a4\u30ca\u30fc\u88dc\u52a9")),l.a.createElement("div",{className:"body"},l.a.createElement("p",null,"\u30b9\u30ad\u30eb\u30a2\u30c3\u30d7\u306e\u305f\u3081\u3001\u8ee2\u8077\u3002",l.a.createElement("br",null),"\u30db\u30c6\u30eb\u3084\u5546\u696d\u65bd\u8a2d\u3001\u30a4\u30d9\u30f3\u30c8\u3001TV\u95a2\u4fc2\u3001\u500b\u4eba\u90b8\u7b49\u306e\u30fb\u5ead\u3084\u30e9\u30f3\u30c9\u30b9\u30b1\u30fc\u30d7\u306e\u8a2d\u8a08\u3001\u30c7\u30b6\u30a4\u30f3\u3092\u884c\u3046\u4e8b\u52d9\u6240\u3067",l.a.createElement("br",null),"\u4ee3\u8868\u306e\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u7ba1\u7406\u3084\u5546\u8ac7\u30fb\u4f1a\u98df\u3078\u306e\u540c\u884c\u30fb\u4f01\u753b\u30fb\u30b3\u30f3\u30c6\u30f3\u30c4\u4f5c\u6210\u3001\u30c7\u30b6\u30a4\u30f3\u88dc\u52a9\uff08\u3053\u3053\u3067Photoshop\u4fee\u884c\uff09\u3092\u62c5\u5f53\u3002",l.a.createElement("br",null),"\u5c11\u6570\u7cbe\u92ed\u3067\u3042\u3063\u305f\u305f\u3081\u3001\u69d8\u3005\u306a\u7d4c\u9a13\u3092\u3055\u305b\u3066\u3044\u305f\u3060\u304d\u307e\u3057\u305f\u3002")))),l.a.createElement("div",{className:e.timeline},l.a.createElement("div",{className:"entry"},l.a.createElement("div",{className:"header"},l.a.createElement("p",{className:"during"},"2012.04 - 2017.08"),l.a.createElement(d.a,{variant:"h3",className:"title"},"\u98df\u54c1\u4f1a\u793e / \u30d0\u30c3\u30af\u30aa\u30d5\u30a3\u30b9")),l.a.createElement("div",{className:"body"},l.a.createElement("p",null,"\u67d0\u30b3\u30f3\u30d3\u30cb\u5546\u54c1\u3092\u958b\u767a\u30fb\u88fd\u9020\u3059\u308b\u98df\u54c1\u4f1a\u793e\u306b\u65b0\u5352\u5165\u793e\u3002",l.a.createElement("br",null),"\u81ea\u793e\u30b5\u30fc\u30d3\u30b9\u3067\u3042\u308b\u9ad8\u9f62\u8005\u5411\u3051\u5b85\u914d\u30b5\u30fc\u30d3\u30b9\u306e\u88fd\u9020\u90e8\u9580\u3067\u65e5\u3005\u5b89\u5b9a\u3057\u3066\u88fd\u9020\u3067\u304d\u308b\u3088\u3046\u30b5\u30dd\u30fc\u30c8\u3057\u305f\u308a\u3001",l.a.createElement("br",null),"\u5916\u90e8\u5009\u5eab\u306e\u539f\u6750\u6599\u7ba1\u7406\u3084\u7269\u6d41\u624b\u914d\u3092\u3057\u305f\u308a\u3002",l.a.createElement("br",null),"\u5b9a\u5e38\u696d\u52d9\u4ee5\u5916\u306b\u6539\u5584\u6d3b\u52d5\u306b\u6ce8\u529b\u3044\u305f\u3057\u307e\u3057\u305f\u3002"))))))))}}]),t}(l.a.Component),T=Object(k.a)((function(e){return{root:Object(o.a)({justifyContent:"center",padding:"0"},e.breakpoints.up("md"),{alignItems:"center",display:"flex",flexDirection:"column"}),profile:Object(o.a)({},e.breakpoints.up("md"),{display:"flex"}),avatar:Object(o.a)({marginRight:50,display:"flex"},e.breakpoints.down("md"),{margin:"0 auto",marginTop:10}),contents:{display:"flex",marginTop:30,paddog:"0 16",boxShadow:"0 1px 4px 1px rgba(0, 0, 0, 0.1)",borderRadius:8},header:{marginLeft:0,color:"#eaeaea",display:"inline-block",backgroundColor:"#4bc0c8",boxShadow:"0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)",borderRadius:8,padding:16,width:200},name:{fontSize:"1.6rem"},job:{fontSize:"0.9rem"},contentBody:{paddingLeft:16,color:"#666666","& dt":{fontWeight:700}},career:Object(o.a)({marginTop:50},e.breakpoints.up("md"),{marginLeft:400}),timeline:{position:"relative",padding:"".concat(e.spacing(2),"px 0 ").concat(e.spacing(2),"px ").concat(e.spacing(4),"px"),"& .entry":{position:"relative",marginBottom:e.spacing(4),"&:after":{content:'""',position:"absolute",top:e.spacing(.25),left:"-".concat(e.spacing(4),"px"),height:e.spacing(2),width:e.spacing(2),backgroundColor:"#4bc0c8",boxShadow:"0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)",borderRadius:"50%",zIndex:2}},"& p":{margin:"0",color:"#666666"},"& .during":{color:e.palette.text.secondary,marginBottom:e.spacing(1)},"& .title":{fontWeight:700,marginBottom:e.spacing(1.5),fontSize:18,color:"#666666"},"& .body":{background:e.palette.background.paper,boxShadow:"0 1px 4px 1px rgba(0, 0, 0, 0.1)",borderRadius:e.spacing(1),padding:e.spacing(2)},"&:after":{content:'""',position:"absolute",top:0,left:e.spacing(.75),height:"100%",width:e.spacing(.5),background:"#eaeaea",borderRadius:e.spacing(.25),zIndex:1}}}}))(B),C=t(147),S=t(143);function I(e){var a=l.a.useState(e.rate),t=Object(i.a)(a,1)[0];return l.a.createElement("div",null,l.a.createElement(S.a,{borderColor:"transparent"},l.a.createElement(C.a,{value:t,readOnly:!0,size:"small"})))}function R(e){var a=l.a.useState(e.rate),t=Object(i.a)(a,1)[0];return l.a.createElement("div",null,l.a.createElement(S.a,{borderColor:"transparent"},l.a.createElement(C.a,{value:t,readOnly:!0})))}var z=function(e){Object(v.a)(t,e);var a=Object(f.a)(t);function t(e){var n;return Object(b.a)(this,t),(n=a.call(this,e)).state={title:"Skills",subtitle:"\u3067\u304d\u308b\u3053\u3068"},n}return Object(h.a)(t,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement("section",null,l.a.createElement(x,{title:this.state.title,subtitle:this.state.subtitle}),l.a.createElement(m.a,null,l.a.createElement("img",{src:"/images/skills.png",alt:"skillsImage",className:e.skillsImage,width:"690px",height:"410px"}),l.a.createElement("div",{className:e.contents},l.a.createElement("div",{className:e.front},l.a.createElement("div",{className:e.contentsTitle},"Front-Skills"),l.a.createElement("div",{className:e.content},l.a.createElement("div",{className:e.skill},l.a.createElement("div",{className:e.icon},l.a.createElement("i",{class:"devicon-html5-plain-wordmark colored"})),l.a.createElement(I,{rate:"3"})),l.a.createElement("div",{className:e.skill},l.a.createElement("div",{className:e.icon},l.a.createElement("i",{class:"devicon-css3-plain-wordmark colored"})),l.a.createElement(I,{rate:"3"})),l.a.createElement("div",{className:e.skill},l.a.createElement("div",{className:e.icon},l.a.createElement("i",{class:"devicon-javascript-plain colored"})),l.a.createElement(I,{rate:"3"})),l.a.createElement("div",{className:e.skill},l.a.createElement("div",{className:e.icon},l.a.createElement("i",{class:"devicon-bootstrap-plain-wordmark colored"})),l.a.createElement(I,{rate:"2"})),l.a.createElement("div",{className:e.skill},l.a.createElement("div",{className:e.icon},l.a.createElement("i",{class:"devicon-react-original-wordmark colored"})),l.a.createElement(I,{rate:"3"})),l.a.createElement("div",{className:e.skill},l.a.createElement("div",{className:e.svg},l.a.createElement("svg",{viewBox:"0 0 128 128",width:"75px",height:"75px"},l.a.createElement("path",{fill:"none",d:"M0 0h128v128H0z"}),l.a.createElement("path",{d:"M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 0 1-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0 0 10 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0 0 26.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 0 1-2.61-6A9.12 9.12 0 0 1 87.37 70h.34a9.15 9.15 0 0 1 1 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 0 1-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0 0 16 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 0 0-17.27-20.85 62 62 0 0 0-34.74-10.59h-2.93a9.21 9.21 0 0 1-8 5.54h-.31a9.13 9.13 0 0 1-.3-18.25h.33a9 9 0 0 1 8 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 0 1 1.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 0 0-9.64 25.25 59.61 59.61 0 0 0 8.47 36.16 2.75 2.75 0 0 1 1.14-.16h.32a9.12 9.12 0 0 1 .33 18.24h-.33a9.16 9.16 0 0 1-9.12-8.79z",fill:"#764abc"}))),l.a.createElement(I,{rate:"2"})),l.a.createElement("div",{className:e.skill},l.a.createElement("div",{className:e.icon},l.a.createElement("i",{class:"devicon-typescript-plain colored"})),l.a.createElement(I,{rate:"2"})),l.a.createElement("div",{className:e.skill},l.a.createElement("div",null,l.a.createElement("img",{src:"/images/reactN.png",alt:"React Native",width:"88px",height:"98px"})),l.a.createElement(I,{rate:"2"})))),l.a.createElement("div",{className:e.back},l.a.createElement("div",{className:e.contentsTitle},"back-Skills"),l.a.createElement("div",{className:e.content},l.a.createElement("div",{className:e.skill},l.a.createElement("div",{className:e.icon},l.a.createElement("i",{class:"devicon-csharp-plain-wordmark colored"})),l.a.createElement(I,{rate:"3"})),l.a.createElement("div",{className:e.skill},l.a.createElement("div",{className:e.icon},l.a.createElement("i",{class:"devicon-php-plain colored"})),l.a.createElement(I,{rate:"1"})),l.a.createElement("div",{className:e.skill},l.a.createElement("div",{className:e.icon},l.a.createElement("img",{src:"/images/netF.png",alt:".NET Framework",width:"78px",height:"78px"})),l.a.createElement(I,{rate:"3"})),l.a.createElement("div",{className:e.skill},l.a.createElement("div",{className:e.icon},l.a.createElement("i",{class:"devicon-laravel-plain-wordmark colored"})),l.a.createElement(I,{rate:"1"})),l.a.createElement("div",{className:e.skill},l.a.createElement("div",{className:e.icon},l.a.createElement("i",{class:"devicon-oracle-original colored"})),l.a.createElement(I,{rate:"3"})),l.a.createElement("div",{className:e.skill},l.a.createElement("div",{className:e.icon},l.a.createElement("img",{src:"/images/fB.png",alt:"firebase",width:"85px",height:"78px"})),l.a.createElement(I,{rate:"2"}))))),l.a.createElement("div",{className:e.contents},l.a.createElement("div",{className:e.front},l.a.createElement("div",{className:e.contentsTitle},"Other-Skills"),l.a.createElement("div",{className:e.content},l.a.createElement("div",{className:e.skill},l.a.createElement("div",{className:e.icon},l.a.createElement("i",{class:"devicon-git-plain-wordmark colored"})),l.a.createElement(I,{rate:"2"})),l.a.createElement("div",{className:e.skill},l.a.createElement("div",{className:e.icon},l.a.createElement("i",{class:"devicon-github-plain-wordmark colored"})),l.a.createElement(I,{rate:"2"})),l.a.createElement("div",{className:e.skill},l.a.createElement("div",{className:e.icon},l.a.createElement("img",{src:"/images/svn.png",alt:"React Native",width:"85px",height:"75px"})),l.a.createElement(I,{rate:"3"})),l.a.createElement("div",{className:e.skill},l.a.createElement("div",{className:e.icon},l.a.createElement("i",{class:"devicon-wordpress-plain-wordmark colored"})),l.a.createElement(I,{rate:"3"})),l.a.createElement("div",{className:e.skill},l.a.createElement("div",{className:e.icon},l.a.createElement("i",{class:"devicon-sketch-line-wordmark colored"})),l.a.createElement(I,{rate:"2"})),l.a.createElement("div",{className:e.skill},l.a.createElement("div",{className:e.icon},l.a.createElement("i",{class:"devicon-photoshop-line colored"})),l.a.createElement(I,{rate:"2"})),l.a.createElement("div",{className:e.skill},l.a.createElement("div",{className:e.icon},l.a.createElement("i",{class:"devicon-slack-plain-wordmark colored"})),l.a.createElement(I,{rate:"3"})),l.a.createElement("div",{className:e.skill},l.a.createElement("div",{className:e.icon},l.a.createElement("img",{src:"/images/bL.jpg",alt:"BackLog",width:"80px",height:"80px"})),l.a.createElement(I,{rate:"3"})))),l.a.createElement("div",{className:e.back},l.a.createElement("div",{className:e.contentsTitle},"Guide"),l.a.createElement("div",{className:e.content},l.a.createElement("div",{className:e.guide},l.a.createElement("div",{className:e.rate},l.a.createElement(R,{rate:"5"}),l.a.createElement("span",{className:e.guideText},"\u3042\u3089\u3086\u308b\u6280\u8853\u3092\u719f\u77e5\u3057\u3066\u3044\u308b\u795e")),l.a.createElement("div",{className:e.rate},l.a.createElement(R,{rate:"4"}),l.a.createElement("span",{className:e.guideText},"\u4ed6\u8005\u306b\u6280\u8853\u6307\u5c0e\u3067\u304d\u308b")),l.a.createElement("div",{className:e.rate},l.a.createElement(R,{rate:"3"}),l.a.createElement("span",{className:e.guideText},"\u5b9f\u52d9\u30ec\u30d9\u30eb\u3067\u81ea\u7531\u306b\u99c6\u4f7f\u3067\u304d\u308b")),l.a.createElement("div",{className:e.rate},l.a.createElement(R,{rate:"2"}),l.a.createElement("span",{className:e.guideText},"\u5b9f\u52d9\u3067\u6570\u30f6\u6708\u4ee5\u4e0a\u4f7f\u7528\u3057\u3066\u3044\u308b\u304c\u3082\u3046\u5c11\u3057\u7fd2\u719f\u304c\u5fc5\u8981")),l.a.createElement("div",{className:e.rate},l.a.createElement(R,{rate:"1"}),l.a.createElement("span",{className:e.guideText},"\u8efd\u304f\u4f7f\u7528\u3057\u305f\u7a0b\u5ea6"))))))))}}]),t}(l.a.Component),F=Object(k.a)((function(e){return{contents:Object(o.a)({display:"flex",height:430,marginTop:30},e.breakpoints.down("sm"),{display:"inline"}),skillsImage:Object(o.a)({display:"block",margin:"auto"},e.breakpoints.down("sm"),{width:350,height:200}),front:Object(o.a)({width:650,boxShadow:"0 1px 4px 1px rgba(0, 0, 0, 0.1)",height:400,borderRadius:8,marginRight:30},e.breakpoints.down("sm"),{width:"100vw",marginTop:20,margin:"0 auto"}),back:Object(o.a)({width:650,boxShadow:"0 1px 4px 1px rgba(0, 0, 0, 0.1)",height:400,borderRadius:8},e.breakpoints.down("sm"),{width:"100vw",marginTop:20,margin:"0 auto"}),contentsTitle:{color:"#666666",fontSize:"1.6rem",textAlign:"center",marginTop:10,letterSpacing:3},content:Object(o.a)({width:460,display:"flex",flexWrap:"wrap",margin:"0 auto",marginTop:20},e.breakpoints.down("sm"),{width:"100vw"}),skill:Object(o.a)({marginLeft:10,marginRight:10,marginTop:10,transition:"transform 0.3s ease-in-out","&:hover":{opacity:"0.8",transform:"translateY(-1em)",transition:"transform 0.3s ease-in-out"}},e.breakpoints.down("sm"),{width:70,height:100,marginTop:40}),icon:{fontSize:85},svg:{fontSize:85},guide:{marginLeft:10,marginRight:10,marginTop:10,width:460},rate:{marginBottom:12},guideText:{color:"#666666",fontSize:"1.0rem"}}}))(z),W=t(144),L=t(39),A=t.n(L),D=t(74),M=t.n(D),G=t(149),P=Object(s.a)((function(e){return{paper:Object(o.a)({position:"absolute",width:900,height:500,backgroundColor:e.palette.background.paper,padding:e.spacing(2,4,3),display:"flex",boxShadow:"0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"},e.breakpoints.down("sm"),{width:"80vw",height:"70vh",display:"inline"}),Image:Object(o.a)({borderRadius:16,boxShadow:"0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)",width:500,height:320,cursor:"pointer"},e.breakpoints.down("sm"),{width:350,height:250}),modalImage:Object(o.a)({borderRadius:16,boxShadow:"0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)",width:500,height:320,cursor:"pointer"},e.breakpoints.down("sm"),{width:250,height:150}),Work:Object(o.a)({marginLeft:30},e.breakpoints.down("sm"),{fontSize:"0.8rem",marginTop:10}),title:{fontWeight:700,marginBottom:e.spacing(1.5),fontSize:22,color:"#666666"},skillIcon:Object(o.a)({marginTop:10,marginRight:5,width:100,color:"#4bc0c8",backgroundColor:"#fff",border:"1px solid rgba(75, 192, 200, 0.5)"},e.breakpoints.down("sm"),{width:90,fontSize:"0.7rem"})}}));function _(e){var a=P(),t=l.a.useState(!1),n=Object(i.a)(t,2),r=n[0],c=n[1],o=["1","2","3","4"],s=["React","Material-UI","React router"],m=["React.js\u3067\u9759\u7684\u30b5\u30a4\u30c8\u51fa\u529b","UI\u30e9\u30a4\u30d6\u30e9\u30ea\u306bMaterial UI","react-router-dom\u3092\u4f7f\u7528\u3057\u305f\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0"];return e.workFlag===o[1]?(s=["React"],m=["\u3042","\u3044","\u3046","\u3048","\u304a","\u304b","\u304d","\u304f","\u3051"]):e.workFlag===o[2]?(s=["React","isamu"],m=["\u3042","\u3044","\u3046","\u3048","\u304a","\u304b","\u304d"]):e.workFlag===o[3]&&(s=["React","takemoto"],m=["\u3042","\u3044","\u3046","\u3048","\u304a"]),l.a.createElement("div",null,l.a.createElement("img",{src:e.Images,alt:"",className:a.Image,onClick:function(){c(!0)}}),l.a.createElement(W.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:r,onClose:function(){c(!1)}},l.a.createElement("div",{className:a.paper},l.a.createElement("div",{className:a.app},l.a.createElement("img",{src:e.Images,alt:"",className:a.modalImage}),l.a.createElement("div",null,l.a.createElement(p.a,{className:a.appBarButton,color:"inherit",onClick:function(){window.open("https://github.com/isamu-takemoto/react-portfolio")}},l.a.createElement(A.a,null)),l.a.createElement(p.a,{className:a.appBarButton,color:"inherit",onClick:function(){window.open("https://isamu-takemoto.github.io/react-portfolio/")}},l.a.createElement(M.a,null))),l.a.createElement("div",null,s.map((function(e){return l.a.createElement(G.a,{key:e,label:e,variant:"outlined",className:a.skillIcon})})))),l.a.createElement("div",{className:a.Work},l.a.createElement("div",{className:"header"},l.a.createElement(d.a,{className:a.title},e.title),l.a.createElement("p",{className:"during"},e.date)),l.a.createElement("div",{className:a.coment},l.a.createElement("p",null,e.summary,l.a.createElement("br",null),l.a.createElement("br",null),"\u3084\u3063\u3066\u3044\u308b\u3053\u3068\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002",l.a.createElement("br",null),m.map((function(e){return l.a.createElement("li",null,e)}))))))))}var H=function(e){Object(v.a)(t,e);var a=Object(f.a)(t);function t(e){var n;return Object(b.a)(this,t),(n=a.call(this,e)).state={title:"Works",subtitle:"\u5b9f\u7e3e",workFlag:["1","2","3","4"],portfolioImg:"/images/portfolio.png",portfolioTitle:"Take's Portfolio",portfolioDate:"2020.08",portfolioSummary:"React\u88fd\u306e\u30dd\u30fc\u30c8\u30d5\u30a9\u30ea\u30aa\u30b5\u30a4\u30c8\u3067\u3059\u3002"},n}return Object(h.a)(t,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement("section",null,l.a.createElement(x,{title:this.state.title,subtitle:this.state.subtitle}),l.a.createElement(m.a,null,l.a.createElement("div",{className:e.contents},l.a.createElement("div",{className:e.app},l.a.createElement(_,{Images:this.state.portfolioImg,workFlag:this.state.workFlag[0],title:this.state.portfolioTitle,date:this.state.portfolioDate,summary:this.state.portfolioSummary})),l.a.createElement("div",{className:e.app},l.a.createElement(_,{Images:this.state.portfolioImg,workFlag:this.state.workFlag[1]})),l.a.createElement("div",{className:e.app},l.a.createElement(_,{Images:this.state.portfolioImg,workFlag:this.state.workFlag[2]})),l.a.createElement("div",{className:e.app},l.a.createElement(_,{Images:this.state.portfolioImg,workFlag:this.state.workFlag[3]})))))}}]),t}(l.a.Component),J=Object(k.a)((function(e){var a;return{contents:Object(o.a)({display:"flex",height:430,width:1200,marginTop:30,flexWrap:"wrap"},e.breakpoints.down("sm"),{width:"100vw",display:"inline"}),app:(a={height:430,marginTop:30,marginRight:20,display:"block",margin:"auto"},Object(o.a)(a,e.breakpoints.down("sm"),{height:300}),Object(o.a)(a,"&:hover",{opacity:"0.8",transform:"translateY(-1em)",transition:"transform 0.3s ease-in-out"}),a),chip:{color:"#4bc0c8",backgroundColor:"#fff",margin:8,border:"1px solid rgba(75, 192, 200, 0.5)",boxShadow:"0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)","&:hover":{border:"1px solid #4bc0c8",backgroundColor:"#fff"}},Work:{height:430,marginTop:30,"& .during":{color:e.palette.text.secondary,marginBottom:e.spacing(1)},"& .title":{fontWeight:700,marginBottom:e.spacing(1.5),fontSize:18,color:"#666666"}}}}))(H),U=t(139),Y=function(e){Object(v.a)(t,e);var a=Object(f.a)(t);function t(e){var n;return Object(b.a)(this,t),(n=a.call(this,e)).state={title:"Contact me",subtitle:"\u304a\u554f\u3044\u5408\u308f\u305b"},n}return Object(h.a)(t,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement("section",null,l.a.createElement(x,{title:this.state.title,subtitle:this.state.subtitle}),l.a.createElement(m.a,null,l.a.createElement("div",{className:e.contents},l.a.createElement(d.a,{className:e.text},"\u304a\u554f\u3044\u5408\u308f\u305b\u3084\u304a\u4ed5\u4e8b\u306e\u3054\u4f9d\u983c\u304c\u3042\u308a\u307e\u3057\u305f\u3089\u3001",l.a.createElement(U.a,{href:"https://twitter.com/isamudesu_",target:"_blank",rel:"noopener","aria-label":"Twitter",className:e.url},"Twitter"),"\u306e\u30c0\u30a4\u30ec\u30af\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u3066\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002"))))}}]),t}(l.a.Component),K=Object(k.a)((function(e){return{contents:{marginTop:30,textAlign:"center"},text:Object(o.a)({},e.breakpoints.down("md"),{fontSize:"0.9rem"}),url:{color:"#00acee",marginLeft:5,marginRight:5}}}))(Y),V=t(141),q=t(142),Q=t(145),X=t(148),Z=Object(s.a)((function(e){return{appBarButtonMenu:{margin:"0 16","&:hover":{backgroundColor:"#4bc0c8"}},link:{color:"inherit",textDecoration:"none"}}}));function $(){var e=l.a.useState(null),a=Object(i.a)(e,2),t=a[0],n=a[1],r=Z(),c=function(){n(null)};return l.a.createElement("div",null,l.a.createElement(p.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){n(e.currentTarget)},className:r.appBarButtonMenu,color:"inherit"},"PORTFOLIO"),l.a.createElement(Q.a,{id:"simple-menu",anchorEl:t,keepMounted:!0,open:Boolean(t),onClose:c},l.a.createElement(u.b,{to:"/profile",className:r.link},l.a.createElement(X.a,{onClick:c},"About me")),l.a.createElement(u.b,{to:"/skills",className:r.link},l.a.createElement(X.a,{onClick:c},"Skills")),l.a.createElement(u.b,{to:"/works",className:r.link},l.a.createElement(X.a,{onClick:c},"Works"))))}var ee=t(61),ae=t.n(ee),te=t(65),ne=t(146),le=t(140),re=t(76),ce=t.n(re),ie=t(75),oe=t.n(ie),se=Object(s.a)((function(e){return{list:{width:250},link:{color:"inherit",textDecoration:"none"},appBarButton:{color:"#454545",marginLeft:20,textAlign:"left",display:"flex",flexDirection:"column",width:100,"&:hover, &.focus":{backgroundColor:"#4bc0c8"}},appBarIcon:{color:"#454545",marginTop:20,flexDirection:"column",width:100,"&:hover, &.focus":{backgroundColor:"#4bc0c8"}},fullList:{width:"auto"},cancel:{color:"#454545",cursor:"pointer",marginLeft:200,width:40,height:40,"&:hover, &.focus":{opacity:"0.6"}},drawer:Object(o.a)({},e.breakpoints.up("md"),{display:"none"})}}));function me(){var e,a=se(),t=l.a.useState({top:!1,left:!1,bottom:!1,right:!1}),n=Object(i.a)(t,2),r=n[0],c=n[1],s=function(e,a){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&c(Object(te.a)(Object(te.a)({},r),{},Object(o.a)({},e,a)))}};return l.a.createElement("div",null,l.a.createElement(ce.a,{onClick:s("right",!0),className:a.drawer}),l.a.createElement(ne.a,{anchor:"right",open:r.right,onClose:s("right",!1)},(e="right",l.a.createElement("div",{className:a.list,role:"presentation",onClick:s(e,!1),onKeyDown:s(e,!1)},l.a.createElement(le.a,null,l.a.createElement(oe.a,{className:a.cancel}),l.a.createElement(u.b,{to:"/",className:a.link},l.a.createElement(p.a,{className:a.appBarButton,color:"inherit"},"HOME")),l.a.createElement(u.b,{to:"/profile",className:a.link},l.a.createElement(p.a,{className:a.appBarButton,color:"inherit"},"About me")),l.a.createElement(u.b,{to:"/skills",className:a.link},l.a.createElement(p.a,{className:a.appBarButton,color:"inherit"},"Skills")),l.a.createElement(u.b,{to:"/works",className:a.link},l.a.createElement(p.a,{className:a.appBarButton,color:"inherit"},"Works")),l.a.createElement(p.a,{className:a.appBarButton,color:"inherit",onClick:function(){window.open("http://isamblog.com/")}},"BLOG"),l.a.createElement(u.b,{to:"/contactForm",className:a.link},l.a.createElement(p.a,{className:a.appBarButton,color:"inherit"},"CONTACT")),l.a.createElement(p.a,{className:a.appBarIcon,color:"inherit",onClick:function(){window.open("https://twitter.com/isamudesu_")}},l.a.createElement(ae.a,null)),l.a.createElement(p.a,{className:a.appBarIcon,color:"inherit",onClick:function(){window.open("https://github.com/isamu-takemoto")}},l.a.createElement(A.a,null)))))))}var de=Object(s.a)((function(e){return{root:{flexGrow:1},appBar:{backgroundColor:"#454545"},title:{flexGrow:1,fontSize:28,marginLeft:30},appBarButton:{margin:"0 16","&:hover, &.focus":{backgroundColor:"#4bc0c8"}},link:{color:"inherit",textDecoration:"none"},item:Object(o.a)({display:"flex"},e.breakpoints.down("sm"),{display:"none"})}}));function pe(){var e=de();return l.a.createElement("div",{className:e.root},l.a.createElement(V.a,{className:e.appBar,position:"fixed"},l.a.createElement(q.a,null,l.a.createElement(d.a,{variant:"h6",className:e.title},"Take"),l.a.createElement(me,null),l.a.createElement("div",{className:e.item},l.a.createElement(u.b,{to:"/",className:e.link},l.a.createElement(p.a,{className:e.appBarButton,color:"inherit"},"HOME")),l.a.createElement($,null),l.a.createElement(p.a,{className:e.appBarButton,color:"inherit",onClick:function(){window.open("http://isamblog.com/")}},"BLOG"),l.a.createElement(u.b,{to:"/contactForm",className:e.link},l.a.createElement(p.a,{className:e.appBarButton,color:"inherit"},"CONTACT")),l.a.createElement(p.a,{className:e.appBarButton,color:"inherit",onClick:function(){window.open("https://twitter.com/isamudesu_")}},l.a.createElement(ae.a,null)),l.a.createElement(p.a,{className:e.appBarButton,color:"inherit",onClick:function(){window.open("https://github.com/isamu-takemoto")}},l.a.createElement(A.a,null))))))}var ue=t(77),Ee=t(12),ge=function(){var e=Object(Ee.f)(),a=e.pathname.split("/"),t=Object(i.a)(a,1)[0];return l.a.createElement("div",{className:"App"},l.a.createElement(ue.a,{exitBeforeEnter:!0,initial:!1},l.a.createElement(Ee.c,{location:e,key:t},l.a.createElement(Ee.a,{exact:!0,path:"/",component:g}),l.a.createElement(Ee.a,{exact:!0,path:"/profile",component:T}),l.a.createElement(Ee.a,{exact:!0,path:"/skills",component:F}),l.a.createElement(Ee.a,{exact:!0,path:"/works",component:J}),l.a.createElement(Ee.a,{exact:!0,path:"/contactForm",component:K}))))};function be(){return l.a.createElement(u.a,null,l.a.createElement(pe,null),l.a.createElement(ge,null))}c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(be,null)),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.5cccf91d.chunk.js.map