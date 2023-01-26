"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[5924],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>d});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),f=p(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||l[d]||i;return n?r.createElement(m,a(a({ref:e},s),{},{components:n})):r.createElement(m,a({ref:e},s))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=f;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:o,a[1]=u;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5172:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={title:"Authorization",weight:240},a=void 0,u={unversionedId:"config-options/authorization/authorization",id:"config-options/authorization/authorization",title:"Authorization",description:"Kubernetes supports multiple Authorization Modules. Currently, RKE only supports the RBAC module.",source:"@site/docs/config-options/authorization/authorization.md",sourceDirName:"config-options/authorization",slug:"/config-options/authorization/",permalink:"/config-options/authorization/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/authorization/authorization.md",tags:[],version:"current",lastUpdatedAt:1674774141,formattedLastUpdatedAt:"1/26/2023",frontMatter:{title:"Authorization",weight:240},sidebar:"mySidebar",previous:{title:"Authentication",permalink:"/config-options/authentication/"},next:{title:"Rate Limiting",permalink:"/config-options/rate-limiting/"}},c={},p=[],s={toc:p};function l(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kubernetes supports multiple ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/authorization/#authorization-modules"},"Authorization Modules"),". Currently, RKE only supports the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"RBAC module"),"."),(0,o.kt)("p",null,"By default, RBAC is already enabled. If you wanted to turn off RBAC support, ",(0,o.kt)("strong",{parentName:"p"},"which isn't recommended"),", you set the authorization mode to ",(0,o.kt)("inlineCode",{parentName:"p"},"none")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.yml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"authorization:\n    # Use `mode: none` to disable authorization\n    mode: rbac\n")))}l.isMDXComponent=!0}}]);