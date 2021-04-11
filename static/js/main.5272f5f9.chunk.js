(this["webpackJsonppreston-portfolio"]=this["webpackJsonppreston-portfolio"]||[]).push([[0],{27:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c.n(s),r=c(20),i=c.n(r),n=(c(27),c(8)),l=c(3),o=c(1);var j=function(){return Object(o.jsxs)("header",{className:"flex-row px-1",children:[Object(o.jsxs)("h2",{class:"title",children:[Object(o.jsx)("a",{"data-testid":"link",href:"/preston-portfolio",children:"Preston Larson"}),Object(o.jsx)("p",{class:"subtitle",children:"Web Developer"})]}),Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{className:"flex-row",children:[Object(o.jsx)("li",{className:"mx-2",children:Object(o.jsx)(n.b,{to:"/preston-portfolio",children:"About me"})}),Object(o.jsx)("li",{className:"mx-2",children:Object(o.jsx)(n.b,{to:"/portfolio",children:"Portfolio"})}),Object(o.jsx)("li",{className:"mx-2",children:Object(o.jsx)(n.b,{to:"/contact",children:"Contact"})}),Object(o.jsx)("li",{className:"mx-2",children:Object(o.jsx)(n.b,{to:"/resume",children:"Resume"})})]})})]})},h=c.p+"static/media/me.57ed353a.JPG";var b=function(){return Object(o.jsxs)("section",{children:[Object(o.jsx)("h1",{id:"about",children:"Preston Larson"}),Object(o.jsx)("p",{children:"I am a new web developer located in Utah. I currently work as a Team Lead of Customer Service at a bank. I and am looking to put my newly aquired coding skills to use at a new company."}),Object(o.jsx)("p",{children:"I am currently attending the University of Utah's Coding Bootcamp to become a Full Stack Web Developer."}),Object(o.jsx)("img",{src:h,className:"my-2",style:{width:"100%"},alt:"cover"})]})},d=c(12),m=c(17),x=c(18);var p=function(){var e=Object(s.useState)({name:"",email:"",message:""}),t=Object(x.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)(""),i=Object(x.a)(r,2),n=i[0],l=i[1],j=c.name,h=c.email,b=c.message,p=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);l(t?"":"Your email is invalid.")}else e.target.value.length?l(""):l("".concat(e.target.name," is required."));n||(a(Object(m.a)(Object(m.a)({},c),{},Object(d.a)({},e.target.name,e.target.value))),console.log("Handle Form",c))};return Object(o.jsxs)("section",{children:[Object(o.jsx)("h1",{"data-testid":"h1tag",children:"Contact me"}),Object(o.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),n||console.log("Submit Form",c)},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(o.jsx)("input",{type:"text",name:"name",defaultValue:j,onBlur:p})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(o.jsx)("input",{type:"email",name:"email",defaultValue:h,onBlur:p})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(o.jsx)("textarea",{name:"message",rows:"5",defaultValue:b,onBlur:p})]}),n&&Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"error-text",children:n})}),Object(o.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})},u=c.p+"static/media/miles-ahead.fa795fc6.PNG",O=c.p+"static/media/ISS-proximity.92387643.PNG",g=c.p+"static/media/coding-quiz.0eac6013.png",f=c.p+"static/media/note-taker.75cde096.PNG",v=c.p+"static/media/tech-blog.31b43977.png",w=c.p+"static/media/weather-dashboard.f2918959.png";var N=function(e){return Object(o.jsxs)("section",{children:[Object(o.jsx)("h2",{children:"Miles Ahead"}),Object(o.jsx)("p",{children:"A fitness tracking app"}),Object(o.jsx)("a",{href:"https://github.com/prestonrl/miles-ahead",children:"github repository"}),Object(o.jsx)("div",{className:"flex-row",children:Object(o.jsx)("a",{href:"https://miles-ahead.herokuapp.com/login",children:Object(o.jsx)("img",{src:u,alt:"Miles Ahead App",className:"img-thumbnail mx-1"})})}),Object(o.jsx)("h2",{children:"International Space Station Proximity"}),Object(o.jsx)("p",{children:"Find out how far away the ISS is"}),Object(o.jsx)("a",{href:"https://github.com/prestonrl/iss-location",children:"github repository"}),Object(o.jsx)("div",{className:"flex-row",children:Object(o.jsx)("a",{href:"https://prestonrl.github.io/iss-location/",children:Object(o.jsx)("img",{src:O,alt:"ISS location",className:"img-thumbnail mx-1"})})}),Object(o.jsx)("h2",{children:"Coding quiz"}),Object(o.jsx)("p",{children:"Challenge yourself with this quick coding quiz"}),Object(o.jsx)("a",{href:"https://github.com/prestonrl/coding-quiz",children:"github repository"}),Object(o.jsx)("div",{className:"flex-row",children:Object(o.jsx)("a",{href:"https://prestonrl.github.io/coding-quiz/",children:Object(o.jsx)("img",{src:g,alt:"coding quiz",className:"img-thumbnail mx-1"})})}),Object(o.jsx)("h2",{children:"Note Taker"}),Object(o.jsx)("p",{children:"A place to store thoughts"}),Object(o.jsx)("a",{href:"https://github.com/prestonrl/note-taker",children:"github repository"}),Object(o.jsx)("div",{className:"flex-row",children:Object(o.jsx)("a",{href:"https://note-taker-pl.herokuapp.com/",children:Object(o.jsx)("img",{src:f,alt:"Note Taker",className:"img-thumbnail mx-1"})})}),Object(o.jsx)("h2",{children:"The Tech Blog"}),Object(o.jsx)("p",{children:"A blogging site for the tech enthusiast "}),Object(o.jsx)("a",{href:"https://github.com/prestonrl/tech-blog",children:"github repository"}),Object(o.jsx)("div",{className:"flex-row",children:Object(o.jsx)("a",{href:"https://thawing-scrubland-77713.herokuapp.com/",children:Object(o.jsx)("img",{src:v,alt:"Tech Blog",className:"img-thumbnail mx-1"})})}),Object(o.jsx)("h2",{children:"Weather Dashboard"}),Object(o.jsx)("p",{children:"Check the weather around the world "}),Object(o.jsx)("a",{href:"https://github.com/prestonrl/weather-dashboard",children:"github repository"}),Object(o.jsx)("div",{className:"flex-row",children:Object(o.jsx)("a",{href:"https://prestonrl.github.io/weather-dashboard/",children:Object(o.jsx)("img",{src:w,alt:"Weather Dashboard",className:"img-thumbnail mx-1"})})})]})},y=c(11),k=c(22);var S=function(){return Object(o.jsx)("div",{class:"center",children:Object(o.jsxs)("div",{class:"footer",children:[Object(o.jsx)("a",{href:"https://github.com/prestonrl",children:Object(o.jsx)(y.a,{})}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/prestonrlarson/",children:Object(o.jsx)(y.b,{})}),Object(o.jsx)("a",{href:"https://stackoverflow.com/users/14146192/preston-larson",children:Object(o.jsx)(k.a,{})})]})})};var C=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"Click link to download my resume."}),Object(o.jsx)("div",{class:"center",children:Object(o.jsx)("a",{class:"resume",href:"/assets/ResumeFeb2020.pdf",download:!0,type:"application/pdf",children:Object(o.jsx)(y.c,{})})})]})};c(34);var F=function(){return Object(o.jsx)(n.a,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{}),Object(o.jsx)("main",{children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/preston-portfolio",component:b}),Object(o.jsx)(l.a,{exact:!0,path:"/portfolio",component:N}),Object(o.jsx)(l.a,{exact:!0,path:"/contact",component:p}),Object(o.jsx)(l.a,{exact:!0,path:"/resume",component:C})]})}),Object(o.jsx)(S,{})]})})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),r(e),i(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(F,{})}),document.getElementById("root")),I()}},[[35,1,2]]]);
//# sourceMappingURL=main.5272f5f9.chunk.js.map