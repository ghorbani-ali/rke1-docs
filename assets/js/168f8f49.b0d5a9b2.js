"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[7159],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=i,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={title:"Rate Limiting",weight:241},o=void 0,l={unversionedId:"config-options/rate-limiting/rate-limiting",id:"config-options/rate-limiting/rate-limiting",title:"Rate Limiting",description:"Using the EventRateLimit admission control enforces a limit on the number of events that the API Server will accept in a given time period. In a large multi-tenant cluster, there might be a small percentage of tenants that flood the server with event requests, which could have a significant impact on the performance of the cluster overall. Therefore, it is recommended to limit the rate of events that the API server will accept.",source:"@site/docs/config-options/rate-limiting/rate-limiting.md",sourceDirName:"config-options/rate-limiting",slug:"/config-options/rate-limiting/",permalink:"/config-options/rate-limiting/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/rate-limiting/rate-limiting.md",tags:[],version:"current",lastUpdatedAt:1674774141,formattedLastUpdatedAt:"1/26/2023",frontMatter:{title:"Rate Limiting",weight:241},sidebar:"mySidebar",previous:{title:"Authorization",permalink:"/config-options/authorization/"},next:{title:"AWS Cloud Provider",permalink:"/config-options/cloud-providers/aws/"}},s={},c=[{value:"Example Configurations",id:"example-configurations",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"EventRateLimit")," admission control enforces a limit on the number of events that the API Server will accept in a given time period. In a large multi-tenant cluster, there might be a small percentage of tenants that flood the server with event requests, which could have a significant impact on the performance of the cluster overall. Therefore, it is recommended to limit the rate of events that the API server will accept."),(0,i.kt)("p",null,"You might want to configure event rate limit as part of compliance with the CIS (Center for Internet Security) Kubernetes Benchmark. Event rate limiting corresponds to the CIS Kubernetes Benchmark 1.1.36 - Ensure that the admission control plugin ",(0,i.kt)("inlineCode",{parentName:"p"},"EventRateLimit")," is set (Scored)."),(0,i.kt)("p",null,"Rate limits can be configured for the server, a namespace, a user, or a combination of a source and an object."),(0,i.kt)("p",null,"For configuration details, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#eventratelimit"},"official Kubernetes documentation.")),(0,i.kt)("h3",{id:"example-configurations"},"Example Configurations"),(0,i.kt)("p",null,"The following configuration in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yml")," can be used to enable the event rate limit by default:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n  kube-api:\n    event_rate_limit:\n      enabled: true\n")),(0,i.kt)("p",null,"When the event rate limit is enabled, you should be able to see the default values at ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/kubernetes/admission.yaml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"...\nplugins:\n- configuration:\n    apiVersion: eventratelimit.admission.k8s.io/v1alpha1\n    kind: Configuration\n    limits:\n    - burst: 20000\n      qps: 5000\n      type: Server\n...\n")),(0,i.kt)("p",null,"To customize the event rate limit, the entire Kubernetes resource for the configuration must be provided in the ",(0,i.kt)("inlineCode",{parentName:"p"},"configuration")," directive:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n  kube-api:\n    event_rate_limit:\n      enabled: true\n      configuration:\n        apiVersion: eventratelimit.admission.k8s.io/v1alpha1\n        kind: Configuration\n        limits:\n        - type: Server\n          qps: 6000\n          burst: 30000\n")))}u.isMDXComponent=!0}}]);