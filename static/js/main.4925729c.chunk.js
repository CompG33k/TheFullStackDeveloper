(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(55),o=n.n(i),c=n(9),r=n(1),s=n(2),u=n(4),m=n(3),d=n(5),p=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement("div",{className:"logo"},l.a.createElement("ul",null,"Nick J. Velasco",l.a.createElement("li",null,'"Silverback"'))),l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",{className:"first"},l.a.createElement(c.c,{to:"/Home"},"Home")),l.a.createElement("li",null,l.a.createElement(c.c,{to:"/History"},"History")),l.a.createElement("li",{className:"last"},l.a.createElement(c.c,{to:"/Resume"},"Resume")))))}}]),t}(l.a.Component),h=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",{className:"first"},l.a.createElement(c.c,{to:"/HomeMobile"},"Home")),l.a.createElement("li",null,l.a.createElement(c.c,{to:"/History"},"History")),l.a.createElement("li",{className:"last"},l.a.createElement(c.c,{to:"/Resume"},"Resume")))))}}]),t}(l.a.Component),b=(l.a.Component,function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("h1",null,"The Full Stack Developer"),l.a.createElement("p1",null,"My name is ",l.a.createElement("strong",null,"Nick Velasco"),", I am a full stack engineer/developer. ",l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("p",null,l.a.createElement("ul",{id:"list2"},l.a.createElement("li",null,"I am fluent in Java/c#  MYSQL/Aurora/SQL aws/azure XAML, WPF, .NET framework, ECS"),l.a.createElement("li",null,"Used for year or less:  python,script,bash,react.js"))),l.a.createElement("p1",null,"Software development and maintenance for ongoing client/server, web application, and database development projects. Assist with performing analysis, design, and testing.Gather requirements and translate these into functional designs. Locate and fix bugs in a timely manner. Design and Build new connections using (but not limited to) GP's E connect.., Bug fixes on existing in house .Net Applications. Contribute new ideas and solution to a growing business."))}}]),t}(l.a.Component)),E=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("h1",null,"Nick J. Velasco"),l.a.createElement("p",null,"My name is Nick Velasco, I am a full stack engineer/developer.",l.a.createElement("li",null,"I am fluent in Java/c#  MYSQL/SQL aws/azure"),l.a.createElement("p1",null,"Software development and maintenance for ongoing client/server, web application, and database development projects. Assist with performing analysis, design, and testing.Gather requirements and translate these into functional designs. Locate and fix bugs in a timely manner. Design and Build new connections using (but not limited to) GP's E connect.., Bug fixes on existing in house .Net Applications. Contribute new ideas and solution to a growing business.")))}}]),t}(l.a.Component),f=(n(67),function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("h1",null,"My History",l.a.createElement("br",null)),l.a.createElement("p1",null,"( click below for details )",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("ul",{id:"list2"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/CompG33k",target:"_blank"},"Work in GitHub")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/nick-velasco-b9ba5114/",target:"_blank"},"LinkedIn profile")))))}}]),t}(l.a.Component)),w=n(41),g={cMapUrl:"cmaps/",cMapPacked:!0},v=(a.Component,n(108),function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"resume-container"},l.a.createElement("object",{width:"100%",height:"800px",data:"https://github.com/CompG33k/TheFullStackDeveloper/raw/gh-pages/NickJVelascoResume.pdf",type:"application/pdf"},"   "))}}]),t}(a.Component)),j=n(15),y=n(42),k=n.n(y),O={color:"gray",fontSize:"18px",backgroundImage:"url("+k.a+") 50",backgroundSize:"cover",top:"0",width:"100%",minHeight:"800px",position:"absolute"},N=(k.a,function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).handleWindowSizeChange=function(){e.setState({width:window.innerWidth,height:window.innerHeight})},e.state={width:window.innerWidth,height:window.innerHeight},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"componentDidMount",value:function(){window.onbeforeunload=function(){return this.onUnload(),""}.bind(this)}},{key:"render",value:function(){return this.state.width<500?l.a.createElement(c.b,null,l.a.createElement("div",{className:"App",style:O},l.a.createElement(h,null),l.a.createElement(c.a,{exact:!0,path:"/",component:function(){return l.a.createElement(j.a,{to:"/HomeMobile",component:E})}}),l.a.createElement(j.b,{exact:!0,path:"/HomeMobile",component:E}),l.a.createElement(j.b,{exact:!0,path:"/History",component:f}),l.a.createElement(j.b,{exact:!0,path:"/Resume",component:v}),l.a.createElement("div",null))):l.a.createElement(c.b,null,l.a.createElement("div",{className:"App",style:O},l.a.createElement(p,null),l.a.createElement(j.b,{exact:!0,path:"/",component:function(){return l.a.createElement(j.a,{to:"/Home",component:b})}}),l.a.createElement(j.b,{path:"/Home",component:b}),l.a.createElement(j.b,{exact:!0,path:"/History",component:f}),l.a.createElement(j.b,{exact:!0,path:"/Resume",component:v})))}}]),t}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(c.b,null,l.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},32:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=32},42:function(e,t,n){e.exports=n.p+"static/media/GorillaSuit.3d0ba7d0.PNG"},58:function(e,t,n){e.exports=n(109)},67:function(e,t,n){},71:function(e,t){},73:function(e,t){},74:function(e,t){},75:function(e,t){},76:function(e,t){}},[[58,1,2]]]);
//# sourceMappingURL=main.4925729c.chunk.js.map