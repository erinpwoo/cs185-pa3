(this["webpackJsonppa-3"]=this["webpackJsonppa-3"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),n=c(7),a=c.n(n),o=(c(13),c(2)),r=c(3),l=c(5),d=c(4),j=(c(14),c(0)),b=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"text",children:Object(j.jsxs)("div",{className:"content-body",children:[Object(j.jsx)("p",{className:"main-text",children:"Hi! Welcome to my music blog for CS 185 - Human Computer Interaction. "}),Object(j.jsx)("p",{className:"main-text",children:"Here are some playlists I made for my favorite music genres: "}),Object(j.jsxs)("div",{className:"spotify",children:[Object(j.jsx)("h3",{children:"ELECTRONIC"}),Object(j.jsx)("iframe",{src:"https://open.spotify.com/embed/playlist/1WhZHuwHnz6gCpM4Yw2D67",width:"40%",height:"380",frameBorder:"0",allow:"encrypted-media"}),Object(j.jsx)("h3",{children:"R&B/RAP"}),Object(j.jsx)("iframe",{src:"https://open.spotify.com/embed/playlist/2Lh395qRwOhjuUcd1k1q0j",width:"40%",height:"380",frameBorder:"0",allow:"encrypted-media"}),Object(j.jsx)("h3",{children:"INDIE/ROCK"}),Object(j.jsx)("iframe",{src:"https://open.spotify.com/embed/playlist/0yZfalRwOf69jIkwySPGc5",width:"40%",height:"380",frameBorder:"0",allow:"encrypted-media"})]})]})})}}]),c}(s.Component),h=c(6),O=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){var e;return"IMAGES"==this.props.mediaType?e=Object(j.jsx)("img",{className:"modal-content",id:"modal-img",src:this.props.source}):"VIDEOS"==this.props.mediaType&&(e=Object(j.jsx)("video",{className:"modal-content",id:"modal-img",controls:"controls",src:this.props.source})),Object(j.jsx)("div",{id:"modal-window",className:"modal",children:e})}}]),c}(s.Component),u=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(e){var s;return Object(o.a)(this,c),(s=t.call(this,e)).handleClick=function(e){if("modal-window"==e.target.id){var t=document.getElementById("modal-img");"VIDEO"==t.tagName&&t.pause(),s.setState({isModalOpen:!1,source:""})}},s.state={isModalOpen:!1,source:"",mediaType:"IMAGES"},s.openModal=s.openModal.bind(Object(h.a)(s)),s}return Object(r.a)(c,[{key:"openModal",value:function(e){this.setState({isModalOpen:!0,source:e.target.getAttribute("src")})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleClick)}},{key:"render",value:function(){return Object(j.jsxs)("div",{class:"images",children:[this.state.isModalOpen&&Object(j.jsx)(O,{source:this.state.source,mediaType:this.state.mediaType}),Object(j.jsx)("div",{class:"content-body",children:Object(j.jsxs)("div",{class:"row",children:[Object(j.jsx)("img",{src:"/cs185-pa3/images/IMG_0252.jpg",onClick:this.openModal}),Object(j.jsx)("img",{src:"/cs185-pa3/images/IMG_0970.jpg",onClick:this.openModal}),Object(j.jsx)("img",{src:"/cs185-pa3/images/IMG_1005.jpg",onClick:this.openModal}),Object(j.jsx)("img",{src:"/cs185-pa3/images/IMG_1020.jpg",onClick:this.openModal}),Object(j.jsx)("img",{src:"/cs185-pa3/images/IMG_1639.jpg",onClick:this.openModal}),Object(j.jsx)("img",{src:"/cs185-pa3/images/IMG_1706.JPG",onClick:this.openModal}),Object(j.jsx)("img",{src:"/cs185-pa3/images/IMG_1753.JPG",onClick:this.openModal}),Object(j.jsx)("img",{src:"/cs185-pa3/images/IMG_2086.JPG",onClick:this.openModal}),Object(j.jsx)("img",{src:"/cs185-pa3/images/IMG_2323.JPG",onClick:this.openModal}),Object(j.jsx)("img",{src:"/cs185-pa3/images/IMG_2808.jpg",onClick:this.openModal}),Object(j.jsx)("img",{src:"/cs185-pa3/images/IMG_6730.jpg",onClick:this.openModal}),Object(j.jsx)("img",{src:"/cs185-pa3/images/IMG_1735.JPG",onClick:this.openModal})]})})]})}}]),c}(s.Component),p=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(j.jsxs)("div",{class:"table",children:[Object(j.jsx)("p",{class:"main-text",children:"Some of my favorite albums:"}),Object(j.jsx)("div",{children:Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"ARTIST"}),Object(j.jsx)("th",{children:"ALBUM"}),Object(j.jsx)("th",{children:"YEAR RELEASED"})]})}),Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Alabama Shakes"}),Object(j.jsx)("td",{children:"Sound & Color"}),Object(j.jsx)("td",{children:"2015"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"FKA Twigs"}),Object(j.jsx)("td",{children:"MAGDALENE"}),Object(j.jsx)("td",{children:"2019"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Tame Impala"}),Object(j.jsx)("td",{children:"The Slow Rush"}),Object(j.jsx)("td",{children:"2020"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Flying Lotus"}),Object(j.jsx)("td",{children:"You're Dead!"}),Object(j.jsx)("td",{children:"2014"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Djo"}),Object(j.jsx)("td",{children:"Twenty Twenty"}),Object(j.jsx)("td",{children:"2019"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Mac Miller"}),Object(j.jsx)("td",{children:"Circles"}),Object(j.jsx)("td",{children:"2020"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Madeon"}),Object(j.jsx)("td",{children:"Good Faith"}),Object(j.jsx)("td",{children:"2019"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"John Coltrane"}),Object(j.jsx)("td",{children:"Giant Steps"}),Object(j.jsx)("td",{children:"1960"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Hiatus Kaiyote"}),Object(j.jsx)("td",{children:"Choose Your Weapon"}),Object(j.jsx)("td",{children:"2015"})]})]})]})})]})}}]),c}(s.Component),m=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(e){var s;return Object(o.a)(this,c),(s=t.call(this,e)).handleClick=function(e){if("modal-window"==e.target.id){var t=document.getElementById("modal-img");"VIDEO"==t.tagName&&t.pause(),s.setState({isModalOpen:!1,source:""})}},s.state={isModalOpen:!1,source:"",mediaType:"VIDEOS"},s.openModal=s.openModal.bind(Object(h.a)(s)),s}return Object(r.a)(c,[{key:"openModal",value:function(e){this.setState({isModalOpen:!0,source:e.target.getAttribute("src")})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleClick)}},{key:"render",value:function(){return Object(j.jsxs)("div",{class:"videos",children:[this.state.source&&Object(j.jsx)(O,{source:this.state.source,mediaType:this.state.mediaType}),Object(j.jsx)("div",{class:"content-body",children:Object(j.jsxs)("div",{class:"row",children:[Object(j.jsx)("video",{src:"/cs185-pa3/videos/IMG_1713.MOV",onClick:this.openModal}),Object(j.jsx)("video",{src:"/cs185-pa3/videos/IMG_2311.MOV",onClick:this.openModal}),Object(j.jsx)("video",{src:"/cs185-pa3/videos/IMG_0272.MOV",onClick:this.openModal}),Object(j.jsx)("video",{src:"/cs185-pa3/videos/IMG_1039.MOV",onClick:this.openModal}),Object(j.jsx)("video",{src:"/cs185-pa3/videos/IMG_0833.MOV",onClick:this.openModal}),Object(j.jsx)("video",{src:"/cs185-pa3/videos/IMG_0490.MOV",onClick:this.openModal})]})})]})}}]),c}(s.Component),x=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(e){var s;return Object(o.a)(this,c),(s=t.call(this,e)).state={submitMsg:"",email:""},s.handleChange=s.handleChange.bind(Object(h.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(h.a)(s)),s}return Object(r.a)(c,[{key:"handleChange",value:function(e){this.setState({email:e.target.value})}},{key:"handleSubmit",value:function(e){""!=this.state.email&&(this.state.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/)?this.setState({submitMsg:"Email successfully recorded."}):this.setState({submitMsg:"Invalid email address."})),e.preventDefault()}},{key:"render",value:function(){return Object(j.jsxs)("div",{class:"email-form",children:[Object(j.jsx)("h3",{children:"Enter an email and click submit"}),Object(j.jsxs)("form",{name:"email",onSubmit:this.handleSubmit,children:[Object(j.jsx)("input",{type:"text",name:"input",value:this.state.email,onChange:this.handleChange}),Object(j.jsx)("input",{type:"submit",value:"Submit"}),Object(j.jsx)("p",{id:"submitMsg",children:this.state.submitMsg})]})]})}}]),c}(s.Component),v=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){var e=this;return function(){var t=e.props.activeTab;return 1===t?Object(j.jsxs)("div",{class:"body",children:[Object(j.jsx)("h1",{children:"ERIN'S MUSIC BLOG"}),Object(j.jsx)(b,{})]}):2===t?Object(j.jsxs)("div",{class:"body",children:[Object(j.jsx)("h1",{children:"ERIN'S MUSIC BLOG"}),Object(j.jsx)(u,{})]}):3===t?Object(j.jsxs)("div",{class:"body",children:[Object(j.jsx)("h1",{children:"ERIN'S MUSIC BLOG"}),Object(j.jsx)(m,{})]}):4===t?Object(j.jsxs)("div",{class:"body",children:[Object(j.jsx)("h1",{children:"ERIN'S MUSIC BLOG"}),Object(j.jsx)(p,{})]}):5===t?Object(j.jsxs)("div",{class:"body",children:[Object(j.jsx)("h1",{children:"ERIN'S MUSIC BLOG"}),Object(j.jsx)(x,{})]}):void 0}()}}]),c}(s.Component),g=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(e){var s;return Object(o.a)(this,c),(s=t.call(this,e)).handleScroll=function(){var e=document.documentElement.scrollHeight-document.documentElement.clientHeight;document.documentElement.scrollTop/e>=.25?s.setState({isVisible:!0}):s.setState({isVisible:!1})},s.scrollToTop=function(){document.documentElement.scrollTo({top:0,behavior:"smooth"})},s.state={isVisible:!1},s}return Object(r.a)(c,[{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return Object(j.jsx)("button",{className:this.state.isVisible?"showButton":"hideButton",id:"scrollToTopBtn",onClick:this.scrollToTop,children:"\u2b06"})}}]),c}(s.Component);var f=function(e){return Object(j.jsxs)("button",{style:e.out.id===e.activeTab?{backgroundColor:"teal",color:"white",fontSize:"20px",display:"flexbox",padding:"10px 60px",border:"0",outline:"0"}:{backgroundColor:"darkslategray",color:"white",fontSize:"20px",display:"flexbox",padding:"10px 60px",border:"0",outline:"0"},onClick:e.changeTab.bind(this,e.out.id),children:[" ",e.out.title]})},M=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){var e=this;return this.props.tabs.map((function(t){return Object(j.jsx)(f,{out:t,activeTab:e.props.activeTab,changeTab:e.props.changeTab})}))}}]),c}(s.Component),y=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;return Object(o.a)(this,c),(e=t.call(this)).state={active:1},e.changeTab=function(t){e.setState({active:t})},e}return Object(r.a)(c,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"tab-bar",children:Object(j.jsx)(M,{tabs:[{id:1,title:"Text"},{id:2,title:"Image"},{id:3,title:"Video"},{id:4,title:"Table"},{id:5,title:"Email"}],activeTab:this.state.active,changeTab:this.changeTab})}),Object(j.jsx)(v,{activeTab:this.state.active})]})}}]),c}(s.Component),C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),s(e),i(e),n(e),a(e)}))};a.a.render(Object(j.jsxs)(i.a.StrictMode,{children:[Object(j.jsx)(y,{}),Object(j.jsx)(g,{id:"scrollToTopBtn"})]}),document.getElementById("root")),C()}},[[16,1,2]]]);
//# sourceMappingURL=main.87787243.chunk.js.map