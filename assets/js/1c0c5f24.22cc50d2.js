"use strict";(self.webpackChunkherbjs=self.webpackChunkherbjs||[]).push([[7929],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,f=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},12374:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],s={id:"motivation",title:"Motivation",sidebar_label:"Motivation",slug:"/project/motivation",custom_edit_url:null},l=void 0,c={unversionedId:"project/motivation",id:"project/motivation",isDocsHomePage:!1,title:"Motivation",description:"The goal of software development has always been to have happy customers through amazing features, working accurately and delivered as quickly as possible. We know that impose clear challenges for developers.",source:"@site/docs/project/motivators.md",sourceDirName:"project",slug:"/project/motivation",permalink:"/docs/project/motivation",editUrl:null,tags:[],version:"current",frontMatter:{id:"motivation",title:"Motivation",sidebar_label:"Motivation",slug:"/project/motivation",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Herbs2mongo",permalink:"/docs/glues/Herbs2mongo"},next:{title:"Architecture guidelines",permalink:"/docs/project/architecture-guidelines"}},u=[{value:"Domain-first",id:"domain-first",children:[],level:2},{value:"Code Intention",id:"code-intention",children:[],level:2},{value:"&quot;Enterprise Features&quot; Out Of The Box",id:"enterprise-features-out-of-the-box",children:[],level:2},{value:"Inspirations",id:"inspirations",children:[],level:2},{value:"History",id:"history",children:[],level:2}],p={toc:u};function h(e){var t=e.components,s=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The goal of software development has always been to have happy customers through amazing features, working accurately and delivered as quickly as possible. We know that impose clear challenges for developers. "),(0,i.kt)("p",null,"These are the major pain points in software development that Herbs tries to help solve:"),(0,i.kt)("h2",{id:"domain-first"},"Domain-first"),(0,i.kt)("p",null,"A great motivation for Herbs came to realize the huge amount of software that we write around the domain core of an application to make it work properly. It is commonplace to see layers of an application that basically share the same properties and knowledge of the core like entities, fields types, etc but changes to your domain do not reflect the rest of your code."),(0,i.kt)("p",null,"A very simple and direct manifestation of this is when it is necessary to add a new field to an entity on your domain. That means also changing the entity repository, the GraphQL type or a REST endpoint, changing the documentation, etc. This is because current libraries are not prepared to create a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Single_source_of_truth#SOLID_&_Source_Code"},"single source of truth")," for their domain."),(0,i.kt)("p",null,"Because of that, a lot of effort is put into writing low-value codes, which are not really related to the business domain."),(0,i.kt)("p",null,"We believe that we can do much better. Developers should put a lot of their efforts into writing high-impact code, focused on their business domain. For the rest, it should be generated automatically for you."),(0,i.kt)("h2",{id:"code-intention"},"Code Intention"),(0,i.kt)("p",null,"Building software that evolves is difficult, especially for those who are tasked with changing the current version to accommodate the new requirements."),(0,i.kt)("p",null,"One of the main reasons why it is difficult is because the code is a manifestation of an initial intention, but that intention is rarely captured in the code. This makes reading code basically a decoding task."),(0,i.kt)("p",null,"As your business rules become more complex, the task of reading and understanding the code becomes exponentially more difficult, thus hampering the evolution of the application."),(0,i.kt)("p",null,"So, if you are building a project that is a team effort and should be up and running in the long run, being able to keep your code understandable to the next developer is essential."),(0,i.kt)("p",null,"With Herbs we try to bring those initial intentions closer to the code. Thus, the next developer who reading the code will have a much better experience when changing and evolving your application."),(0,i.kt)("h2",{id:"enterprise-features-out-of-the-box"},'"Enterprise Features" Out Of The Box'),(0,i.kt)("p",null,'In business domains it is common the need for authorization and auditing. However, these features are treated as "enterprise" features, which usually requires an investment from the developer to incorporate these features into the application.'),(0,i.kt)("p",null,"This investment should not be necessary if your domain is aware of the actions taken by users."),(0,i.kt)("p",null,"Herbs brings these features out of the box because we simply believe they should be there, even for simple applications. That means having robust applications from the beginning with very low investment."),(0,i.kt)("h2",{id:"inspirations"},"Inspirations"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"herbsJS",src:n(44710).Z})),(0,i.kt)("p",null,"Well design libraries borrow from the past. Herbs uses the understanding gained by major thinkers in software engineering in order to innovate."),(0,i.kt)("p",null,"Clean Architecture was created by Robert C. Martin and promoted in his book ",(0,i.kt)("a",{parentName:"p",href:"https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"},"Clean Architecture: A Craftsman\u2019s Guide to Software Structure"),". Like other software design philosophies, Clean Architecture tries to provide a methodology to be used in coding, in order to facilitate code development, allow for better maintenance, updating and less dependencies. An important goal of Clean Architecture is to provide developers with a way to organize code in a way that encapsulates business logic, but keeps it separate from the delivery mechanism."),(0,i.kt)("p",null,"Similar to Clean Architecture, the concept of Domain-driven design (DDD) was initially introduced and made popular by programmer Eric Evans in his 2004 book, ",(0,i.kt)("a",{parentName:"p",href:"https://books.google.com/books?id=hHBf4YxMnWMC&redir_esc=y"},"Domain-Driven Design: Tackling Complexity in the Heart of Software"),", domain-driven design is the expansion upon and application of the domain concept, as it applies to the development of software. It aims to ease the creation of complex applications by connecting the related pieces of the software into an ever-evolving model. "),(0,i.kt)("p",null,"Even though it is not necessary to read these books to use Herbs, reading and understanding the concepts presented there will help you to understand the principles used here and know better, in addition, they are highly recommended for the development of a software developer. "),(0,i.kt)("p",null,"Of course, libraries from different ecosystems have been a great source of inspiration. Successes and mistakes of these efforts were taken into account: ",(0,i.kt)("a",{parentName:"p",href:"https://rubyonrails.org/"},"Rails"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.djangoproject.com"},"Django"),", ",(0,i.kt)("a",{parentName:"p",href:"https://trailblazer.to/"},"Trailblazer"),", ",(0,i.kt)("a",{parentName:"p",href:"https://hanamirb.org/"},"Hanami"),", ",(0,i.kt)("a",{parentName:"p",href:"https://cucumber.io/"},"Cucumber")," and many others. "),(0,i.kt)("h2",{id:"history"},"History"),(0,i.kt)("p",null,"Herbs was created in 2019 at ",(0,i.kt)("a",{parentName:"p",href:"https://vortx.com.br/"},"V\xf3rtx"),", a fintech with exponential growth, a small team and a huge list of demands."),(0,i.kt)("p",null,"Their architecture is based on microservices and required the creation of several services in a short period of time. As a financial institution, it was necessary for these services to be delivered with a high level of quality, observability and maintainability. It was in this scenario that Herbs was born."),(0,i.kt)("p",null,"Since then, Herbs has been used in production in more than 20 microservices there, became a open source project and is maintained by several people inside and outside V\xf3rtx."))}h.isMDXComponent=!0},44710:function(e,t,n){t.Z=n.p+"assets/images/herbsjs_clean_architecture-0aa8c7d4e0c35537ad601223c5fa6fd8.png"}}]);