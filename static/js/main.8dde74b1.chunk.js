(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(7),s=t.n(i),c=(t(13),t(1)),m=t(2),r=t(4),o=t(3),u=t(5),h=function(e){function a(){return Object(c.a)(this,a),Object(r.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,".",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),p=function(e){function a(){return Object(c.a)(this,a),Object(r.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"./images/profilepc.jpg",alt:""})),l.a.createElement("div",{className:"seven columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,l.a.createElement("b",null,"Name:")," ",e.name," ",l.a.createElement("br",null),l.a.createElement("b",null,"D.O.B: ")," ",e.dob," ",l.a.createElement("br",null),l.a.createElement("b",null,"Nationality: ")," ",e.nationality," ",l.a.createElement("br",null),e.aboutme,l.a.createElement("br",null),e.aboutme1,l.a.createElement("br",null),e.aboutme2,l.a.createElement("br",null),e.aboutme3,l.a.createElement("br",null),e.aboutme4,l.a.createElement("br",null),e.aboutme5,l.a.createElement("br",null),e.aboutme6))))}}]),a}(n.Component),b=function(e){function a(){return Object(c.a)(this,a),Object(r.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e,a){return l.a.createElement("div",{className:"row item",key:a},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Experience"))),l.a.createElement("div",{className:"nine columns main-col"},e.experience&&e.experience.map(function(e,a){return l.a.createElement("div",{className:"row item",key:a},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"list-inline"},e.skillLinks.map(function(e,a){return l.a.createElement("li",{key:a,className:"list-inline-item"},l.a.createElement("img",{src:e.className}))}))))))}}]),a}(n.Component),E=function(e){function a(){return Object(c.a)(this,a),Object(r.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Projects"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("div",{className:"flexslider"},l.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("img",{src:e.image,alt:e.image,className:"card-img-top",height:"200px",width:"400px"}),l.a.createElement("blockquote",null,l.a.createElement("a",{href:e.link},"Check it out: "),l.a.createElement("cite",null,e.name)))})))," ")," ")," ")," ")}}]),a}(n.Component),d=function(e){function a(){return Object(c.a)(this,a),Object(r.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("h2",{className:"lead"},"Contact me: "))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Gmail:",l.a.createElement("a",{href:"mailto:".concat(e.gmail)}," ",e.gmail),l.a.createElement("br",null),"Phone number: ",e.phonenumber,l.a.createElement("br",null),"Address: ",e.address)))))}}]),a}(n.Component),g=function(e){function a(){return Object(c.a)(this,a),Object(r.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),v={imagebaseurl:"https://rbhatia46.github.io/",name:"Hoang Anh Minh",role:"Software developer",gmail:"anhminh10a2hoa@gmail.com",dob:"25/06/2000",nationality:"Vietnamese",address:"65200 Vaasa, Finland",linkedin:"https://www.linkedin.com/in/minh-hoang-110510181/",phonenumber:"0403620608",roleDescription:"",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/minh-hoang-110510181/",className:"fab fa-linkedin"},{name:"github",url:"https://github.com/anhminh10a2hoa",className:"fab fa-github"},{name:"skype",url:"https://www.facebook.com/anhminh.hoang.560",className:"fab fa-facebook-square"}],aboutme:"I am a third-year student at Vassa University of Applied Science, Software Engineering major. I have experiences and knowledge about:",aboutme1:"+ Languages: JavaScript, TypeScript, Java",aboutme2:"+ Frontend: React, Vue, Redux, HTML, CSS, Bootstrap",aboutme3:"+ Backend: Express, Node, Spring, Servlet, AWS",aboutme4:"+ Databases: MySQL, MongoDB, Postgres, MariaDB",aboutme5:"+ Map: MapBox",aboutme6:"+ Technical Practices: REST API Design",website:"https://anhminh10a2hoa.github.io/CV-REACT/",education:[{UniversityName:"Hus High School for Gifted Students",specialization:"Chemistry",MonthOfPassing:"August",YearOfPassing:"2018",Achievements:"Graduated"},{UniversityName:"Vaasa University of Applied Sciences",specialization:"Information technology",MonthOfPassing:"August",YearOfPassing:"2022",Achievements:"Present"}],experience:[{CompanyName:"ANZ Solution and Technology Joint Stock Company",specialization:"PHP & JavaScript Developer",MonthOfLeaving:"August",YearOfLeaving:"2019",Achievements:"Completed"},{CompanyName:"Vietpro Technology Academy",specialization:"PHP Web Developer",MonthOfLeaving:"August",YearOfLeaving:"2019",Achievements:"Completed"},{CompanyName:"Attract project",specialization:"React Native Developer",MonthOfLeaving:"June",YearOfLeaving:"2020",Achievements:"Completed"},{CompanyName:"Rain portal (Sky echo company)",specialization:"React Js Developer",MonthOfLeaving:"January",YearOfLeaving:"2021",Achievements:"Completed"}],skillsDescription:"PROGRAMMING LANGUAGES & TOOLS",skillLinks:[{name:"reactjs",className:"./icon/react.png"},{name:"nodejs",className:"./icon/node-js.png"},{name:"js",className:"./icon/javascript.png"},{name:"java",className:"./icon/typescript.png"},{name:"html5",className:"./icon/html.png"},{name:"css3",className:"./icon/css.png"},{name:"sass",className:"./icon/sass.png"},{name:"aws",className:"./icon/aws.png"},{name:"php",className:"./icon/php.png"},{name:"docker",className:"./icon/docker.png"},{name:"github",className:"./icon/github.png"},{name:"database",className:"./icon/database.png"},{name:"database",className:"./icon/c-sharp.png"}],testimonials:[{name:"Mobile Shop by PHP",link:"https://github.com/anhminh10a2hoa/ShopByPHP",image:"./images/ShopByPhp.png"},{name:"Shopping Web by Laravel",link:"https://github.com/anhminh10a2hoa/MVC-Laravel",image:"./images/ShopByLaravel.png"},{name:"Web visualization by ReactJs",link:"",image:"./images/WebVisualization.png"},{name:"Web visualization by ReactJs",link:"",image:"./images/webvisualizationpage.png"},{name:"Shopping website by ReactJs",link:"",image:"./images/shopping-web-react.png"},{name:"Natours Web by Nodejs",link:"https://github.com/anhminh10a2hoa/Natours-Nodejs",image:"./images/natourWeb.png"},{name:"Burger-Builder-Application-ReactJs",link:"https://github.com/anhminh10a2hoa/Burger-Builder-Application-ReactJs",image:"./images/burgerBuilder.png"},{name:"E-book Online by PHP",link:"https://github.com/anhminh10a2hoa/ebookonline",image:"./images/eBookOnline.png"},{name:"Raspberry Pi",link:"https://github.com/anhminh10a2hoa/appdev1",image:"./images/rasppi.png"},{name:"Another projects by NodeJs, ReactJs, ...",link:"https://github.com/anhminh10a2hoa?tab=repositories",image:"./images/anotherProject.jpg"}]},N=function(e){function a(){return Object(c.a)(this,a),Object(r.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,{resumeData:v}),l.a.createElement(p,{resumeData:v}),l.a.createElement(b,{resumeData:v}),l.a.createElement(E,{resumeData:v}),l.a.createElement(d,{resumeData:v}),l.a.createElement(g,{resumeData:v}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.8dde74b1.chunk.js.map