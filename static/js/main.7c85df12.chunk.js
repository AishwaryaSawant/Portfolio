(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,a,t){e.exports=t(70)},37:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),s=t.n(l),i=(t(37),t(1)),o=t(2),c=t(4),m=t(3),u=t(5),h=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{id:"home"},r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",{className:"responsive-headline"},e.name),r.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},e.role,r.a.createElement("br",null),e.roleDescription),r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url,target:"_blank"},r.a.createElement("i",{className:e.className})))})))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#about"},r.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),d=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"three columns"},r.a.createElement("img",{className:"profile-pic",src:"images/ProfilePic.png",alt:""})),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("h2",null,"About Me"),r.a.createElement("p",null,e.aboutme),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"columns contact-details"},r.a.createElement("p",{className:"scrolldown"},r.a.createElement("h2",null,r.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Let's Connect",r.a.createElement("i",{className:"icon-down-circle"})))))))))}}]),a}(n.Component),p=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("section",{id:"resume"},r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Education"))),r.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("h3",null,e.UniversityName),r.a.createElement("p",{className:"info"},e.specialization,r.a.createElement("span",null,"\u2022")," ",r.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),r.a.createElement("p",null,e.Achievements)))}))),r.a.createElement("div",{className:"row work"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Work"))),r.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("h3",null,e.CompanyName),r.a.createElement("p",{className:"info"},e.specialization,r.a.createElement("span",null,"\u2022")," ",r.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),r.a.createElement("p",null,e.Achievements)))}))),r.a.createElement("div",{className:"row skill"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Skills"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("p",null,e.skillsDescription),r.a.createElement("div",{className:"bars"},r.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return r.a.createElement("li",null,r.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),r.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),E=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("section",{id:"portfolio"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns collapsed"},r.a.createElement("h1",null,"Check Out Some of My Works."),r.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return r.a.createElement("div",{className:"columns portfolio-item"},r.a.createElement("div",{className:"item-wrap"},r.a.createElement("a",{href:"#modal-01"},r.a.createElement("img",{src:"".concat(e.imgurl),style:{height:"300px",width:"350px"}}),r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"portfolio-item-meta"},r.a.createElement("h5",null,e.name),r.a.createElement("p",null,e.description))))))})))))}}]),a}(n.Component),g=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("section",{id:"testimonials"},r.a.createElement("div",{className:"text-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"two columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Client Testimonials"))),r.a.createElement("div",{className:"ten columns flex-container"},r.a.createElement("div",{className:"flexslider"},r.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e){return r.a.createElement("li",null,r.a.createElement("blockquote",null,r.a.createElement("p",null,e.description),r.a.createElement("cite",null,e.name)))})))," ")," ")," "),"  ")}}]),a}(n.Component),f=t(7),b=t(12),v=t.n(b),w=t(29),N=t.n(w),y=t(31),k=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.bg},r.a.createElement("div",{className:"hero row-container ".concat(this.props.secondaryBg)},r.a.createElement("div",{className:"hero__content"},r.a.createElement("h1",{className:"hero__content__h1"},this.props.header),r.a.createElement("h2",{className:"hero__content__h2"},this.props.subHeader),this.props.btnPara&&r.a.createElement(y.a,{to:"/contact",className:"hero__content__button"},this.props.btnPara))))}}]),a}(r.a.Component);v.a.setAppElement("div");var j,O={content:{top:"calc(50% + 27.5px)",left:"50%",right:"auto",bottom:"auto",width:"35%",minWidth:"250px",height:"25%",minHeight:"250px",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0",borderRadius:"3px",border:"none"}},S=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",nameError:"",email:"",emailError:"",subject:"",subjectError:"",message:"",messageError:"",resData:"",modalIsOpen:!1},t.change=function(e){t.setState(Object(f.a)({},e.target.name,e.target.value))},t.closeModal=function(){t.setState({modalIsOpen:!1})},t.onSubmit=function(e){e.preventDefault(),""===t.state.name?t.setState({nameError:"Please provide your name"}):t.setState({nameError:""}),""===t.state.email?t.setState({emailError:"Please provide an email address"}):t.state.email===/^((?!@).)*$/||-1===t.state.email.indexOf(".")?t.setState({emailError:"Please provide a valid email address"}):t.setState({emailError:""}),""===t.state.subject?t.setState({subjectError:"Please provide a subject message"}):t.setState({subjectError:""}),""===t.state.message?t.setState({messageError:"Please leave a message"}):t.setState({messageError:""}),setTimeout(function(){""===t.state.nameError&&""===t.state.emailError&&""===t.state.subjectError&&""===t.state.messageError?N.a.post("/send-email",{name:t.state.name,email:t.state.email,subject:t.state.subject,message:t.state.message},{headers:{"content-type":"application/json"}}).then(function(e){t.setState({resData:e.data}),t.setState({modalIsOpen:!0}),t.setState({name:"",email:"",subject:"",message:""})}).catch(function(e){console.log(e.response)}):t.setState({resData:"Oops! Something went wrong!"})},10)},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=this.props.resumeData;return r.a.createElement("section",{id:"contact"},r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("td",{width:"50%"},r.a.createElement("div",{className:"row"},r.a.createElement("aside",{className:"eigth columns footer-widgets"},r.a.createElement("div",{className:"widget"},"Feel free to contact me for any work or suggestions below",r.a.createElement("h4",null,"LinkedIn : ",r.a.createElement("a",{href:a.linkedinId,target:"_blank"},a.linkedinId),r.a.createElement("br",null),"Phone Number : ",r.a.createElement("a",{href:"tel:{resumeData.phoneNumber}"},"+1 862-237-5676"),r.a.createElement("br",null),"Primary Email : ",r.a.createElement("a",{href:"mailto:{resumeData.emailid}"},"sawant.ai@northeastern.edu"),r.a.createElement("br",null),"Secondary Email : ",r.a.createElement("a",{href:"mailto:{resumeData.gemail}"},"aishwaryasawant697@gmail.com"),r.a.createElement("br",null),"Address : ",a.address),r.a.createElement("div",{className:"three columns"},r.a.createElement("img",{className:"contact-pic",src:"images/ContactPic.jpg",alt:""})))))),r.a.createElement("td",null,r.a.createElement("div",{className:"row"},r.a.createElement("aside",{className:"eigth columns footer-widgets"},r.a.createElement("div",{className:"widget"},r.a.createElement("div",{id:"contactForm"},r.a.createElement(k,{header:"Let's Get In Touch",subHeader:"Tell me about yourself and what I can do for you.",bg:"contact-bg"}),r.a.createElement("div",{className:"full-width-row cta-form--bg"},r.a.createElement("div",{className:"row-container"},r.a.createElement("form",{className:"cta-form"},r.a.createElement("label",{className:"cta-form__label",htmlFor:"name"},"Name"),r.a.createElement("input",{name:"name",value:this.state.name,onChange:function(a){return e.change(a)},type:"text",className:"cta-form__input",id:"name",style:{margin:"".concat(this.state.nameError.length>0?"0":"")}}),r.a.createElement("p",{className:"form-error"},this.state.nameError),r.a.createElement("label",{className:"cta-form__label",htmlFor:"email"},"Email"),r.a.createElement("input",{name:"email",value:this.state.email,onChange:function(a){return e.change(a)},type:"text",className:"cta-form__input",id:"email",style:{margin:"".concat(this.state.emailError.length>0?"0":"")}}),r.a.createElement("p",{className:"form-error"},this.state.emailError),r.a.createElement("label",{className:"cta-form__label",htmlFor:"subject"},"Subject"),r.a.createElement("input",{name:"subject",value:this.state.subject,onChange:function(a){return e.change(a)},type:"text",className:"cta-form__input",id:"subject",style:{margin:"".concat(this.state.subjectError.length>0?"0":"")}}),r.a.createElement("p",{className:"form-error"},this.state.subjectError),r.a.createElement("label",{className:"cta-form__label",htmlFor:"message"},"Message"),r.a.createElement("textarea",{name:"message",onChange:function(a){return e.change(a)},value:this.state.message,className:"cta-form__textarea",id:"message",style:{margin:"".concat(this.state.messageError.length>0?"0":"")}}),r.a.createElement("p",{className:"form-error"},this.state.messageError),r.a.createElement("div",{align:"center"},r.a.createElement("button",{className:"btn btn--white",onClick:function(a){return e.onSubmit(a)}},"Send")," ")))),r.a.createElement(v.a,{isOpen:this.state.modalIsOpen,onAfterOpen:this.afterOpenModal,onRequestClose:this.closeModal,contentLabel:"Example Modal",style:O,closeTimeoutMS:150,overlayClassName:"formOverlay"},r.a.createElement("div",{className:"modalHeader-container"},r.a.createElement("span",{className:"modalHeader-container__text"},"Your message was sent!"),r.a.createElement("i",{className:"fa fa-times modalHeader-container__close-icon","aria-hidden":"true",onClick:this.closeModal})),r.a.createElement("div",{className:"modal-body"},r.a.createElement("p",{className:"modal-body__text"},this.state.resData),r.a.createElement("p",null,"I'll be in touch with you soon.")),r.a.createElement("button",{className:"btn btn--white",style:{textAlign:"center",margin:"10px auto",display:"block"},onClick:this.closeModal},"Close"))))))))))}}]),a}(n.Component),_=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return r.a.createElement("li",null,r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))}))),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),A=(j={imagebaseurl:"https://github.com/AishwaryaSawant",name:"Aishwarya Sawant",role:"Full Stack Developer | Software Developer",linkedinId:"https://www.linkedin.com/in/aishwaryassawant/",phoneNumber:"862-237-5676",skypeid:"aishwaryasawant697",emailid:"sawant.ai@northeastern.edu",gemail:"aishwaryasawant697@gmail.com",address:"Boston, MA",roleDescription:"I like dabbling in various parts of frontend development and like to learn about new technologies, write technical articles or simply play games in my free time.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/aishwaryassawant/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/AishwaryaSawant",className:"fa fa-github"},{name:"skype",url:"http://twitter.com/rbhatia46",className:"fa fa-twitter"}],aboutme:"I am currently a pre-final year student at The LNM Institute of Information Technology and pursuing my B.Tech from here. I am a self taught Full Stack Web Developer, currently diving deeper into Machine Learning. I believe that to be successful in life, one needs to be obsessive with their dreams and keep working towards them."},Object(f.a)(j,"address","Boston, MA"),Object(f.a)(j,"website","https://github.com/AishwaryaSawant"),Object(f.a)(j,"education",[{UniversityName:"Northeastern University",specialization:"Master of Science in Information Systems",MonthOfPassing:"May",YearOfPassing:"2021",Achievements:"Some Achievements"},{UniversityName:"Some University",specialization:"Some specialization",MonthOfPassing:"Jan",YearOfPassing:"2018",Achievements:"Some Achievements"}]),Object(f.a)(j,"work",[{CompanyName:"Some Company",specialization:"Some specialization",MonthOfLeaving:"Jan",YearOfLeaving:"2018",Achievements:"Some Achievements"},{CompanyName:"Some Company",specialization:"Some specialization",MonthOfLeaving:"Jan",YearOfLeaving:"2018",Achievements:"Some Achievements"}]),Object(f.a)(j,"skillsDescription","Your skills here"),Object(f.a)(j,"skills",[{skillname:"Java"},{skillname:"HTML5"},{skillname:"CSS"},{skillname:"JavaScript"},{skillname:"React"},{skillname:"SpringMVC"},{skillname:"Hibernate"},{skillname:"CSharp"},{skillname:"Python"},{skillname:"SQL"},{skillname:"Tableau"}]),Object(f.a)(j,"portfolio",[{name:"Smart Organic Farming",description:"application",imgurl:"images/portfolio/organicFarm.jpg"},{name:"project2",description:"mobileapp",imgurl:"images/portfolio/project.jpg"},{name:"project3",description:"mobileapp",imgurl:"images/portfolio/project2.png"},{name:"project4",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"}]),Object(f.a)(j,"testimonials",[{description:"Aishwarya is a great team player with good communication skill. She is highly motivated and passionate towards her career, always willing to learn new skills and technologies. Always focused towards work and target to complete within deadlines. Aishwarya has my highest recommendation.",name:"Linesh Kulkarni, Project Manager at Quinnox"},{description:"Aishwarya is an amazing person to work with. She is very solution oriented with exceptional problem solving skills. Aishwarya\u2019s deeper understanding of technology and programming language always helped us in our project, where insights with critical thinking was required. She possess great communication skills. She is always ready to take up new challenges and to prove her mettle",name:"Mithun Pillai, Manager at Axis Bank"},{description:"I had the privilege of working with Aishwarya and she is proactive, result oriented, responsible and technically sound employee and always ready to put all her energy and time to get the job done. She has an exceptional troubleshooting and analytical skill in Sql & c# technologies. is a great asset to any company.",name:"Dhanesh Singh, Database Administrator at Investec"},{description:"It's indeed a pleasure to formally recommend my colleague and good friend Aishwarya. I have had the opportunity to closely work with Aishwarya for a P.O. automation project in Quinnox and I can strongly endorse her for abilities and skills I saw in her. She has a pretty good hold on Java language which was primarily used for programming our project.She also showed some extraordinary skills in Problem-solving and micro-management of various aspects along with her unwavering commitment to work, and her humility makes her an asset to the team.The recommendation is my humble attempt to acknowledge her contribution and appreciation for the good work she has done in Quinnox. I continue to wish Aishwarya great success in professional and personal life",name:"Vivek Singh Sengar, Assistant Manager at Federal Bank"}]),j),C=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,{resumeData:A}),r.a.createElement(d,{resumeData:A}),r.a.createElement(p,{resumeData:A}),r.a.createElement(E,{resumeData:A}),r.a.createElement(g,{resumeData:A}),r.a.createElement(S,{resumeData:A}),r.a.createElement(_,{resumeData:A}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,2,1]]]);
//# sourceMappingURL=main.7c85df12.chunk.js.map