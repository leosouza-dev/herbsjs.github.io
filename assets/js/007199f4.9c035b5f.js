"use strict";(self.webpackChunkherbjs=self.webpackChunkherbjs||[]).push([[3231],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=l(r),f=s,d=h["".concat(u,".").concat(f)]||h[f]||p[f]||o;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},60611:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return h}});var n=r(87462),s=r(63366),o=(r(67294),r(3905)),a=["components"],i={id:"herbsshelf",title:"6. Generating Herbs Shelf",sidebar_label:"6. Generating Herbs Shelf",slug:"/tutorial/herbsshelf"},u=void 0,l={unversionedId:"tutorial/herbsshelf",id:"tutorial/herbsshelf",isDocsHomePage:!1,title:"6. Generating Herbs Shelf",description:"Introduction to Herbs Shelf",source:"@site/docs/tutorial/herbsself.md",sourceDirName:"tutorial",slug:"/tutorial/herbsshelf",permalink:"/docs/tutorial/herbsshelf",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/tutorial/herbsself.md",tags:[],version:"current",frontMatter:{id:"herbsshelf",title:"6. Generating Herbs Shelf",sidebar_label:"6. Generating Herbs Shelf",slug:"/tutorial/herbsshelf"},sidebar:"sidebar",previous:{title:"5. Generating GraphQL Endpoint",permalink:"/docs/tutorial/graphql"},next:{title:"7. Refactoring",permalink:"/docs/tutorial/refactoring"}},c=[{value:"Introduction to Herbs Shelf",id:"introduction-to-herbs-shelf",children:[],level:2},{value:"Herbs Shelf Setup",id:"herbs-shelf-setup",children:[],level:2}],p={toc:c};function h(e){var t=e.components,i=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction-to-herbs-shelf"},"Introduction to Herbs Shelf"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Herbs Shelf is a self-generated documentation based on your use cases and entities from your domain."),(0,o.kt)("p",{parentName:"blockquote"},"\u2014 ",(0,o.kt)("a",{parentName:"p",href:"/docs/glues/herbsshelf"},"Herbs Shelf | HerbsJS"))),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(68481).Z})),(0,o.kt)("h2",{id:"herbs-shelf-setup"},"Herbs Shelf Setup"),(0,o.kt)("p",null,"To setup the automatic documentation, we need a list with all usecases to be included in the documentation. With CLI, it is in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/domain/usecases/index.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// src/domain/usecases/index.js\nmodule.exports = [\n    // the tags are to store metadata, such as the group and type of the use case\n    { usecase: require('./user/createUser'), tags: { group: 'Users', type: 'mutation'} },\n    { usecase: require('./user/updateUser'), tags: { group: 'Users', type: 'mutation'} },\n    { usecase: require('./user/deleteUser'), tags: { group: 'Users', type: 'mutation'} },\n    { usecase: require('./user/findOneUser'), tags: { group: 'Users', type: 'query'} }\n]\n")),(0,o.kt)("p",null,"Once you have this file, you can use it with ",(0,o.kt)("inlineCode",{parentName:"p"},"@herbsjs/herbsshelf")," to get the HTML content and do what you want with."),(0,o.kt)("p",null,"In this case, is set a route called ",(0,o.kt)("inlineCode",{parentName:"p"},"/herbsshelf")," in the server to provide this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// src/infra/api/rest/index.js\nconst renderShelfHTML = require('@herbsjs/herbsshelf')\n\n// Get that usecases list.\nconst usecases = require('../../../domain/usecases')\n\n// Set up the route to serve the rendered HTML\napp.get('/herbsshelf', (req, res) => {\n    res.setHeader('Content-Type', 'text/html')\n\n    const content = renderShelfHTML(usecases)\n    res.write(content)\n    res.end()\n})\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Know more about ",(0,o.kt)("a",{parentName:"p",href:"/docs/glues/herbsshelf"},"Herbs Shelf"),".")))}h.isMDXComponent=!0},68481:function(e,t,r){t.Z=r.p+"assets/images/herbsshelf_screenshot-90335a4cc0edecbe93eccb187e346f2c.gif"}}]);