"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[4984],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(t),u=i,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return t?n.createElement(f,s(s({ref:r},p),{},{components:t})):n.createElement(f,s({ref:r},p))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=u;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a[m]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8498:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=t(3117),i=(t(7294),t(3905));const o={title:"Metrics Server"},s=void 0,a={unversionedId:"config-options/add-ons/metrics-server/metrics-server",id:"config-options/add-ons/metrics-server/metrics-server",title:"Metrics Server",description:"By default, RKE deploys Metrics Server to provide metrics on resources in your cluster.",source:"@site/docs/config-options/add-ons/metrics-server/metrics-server.md",sourceDirName:"config-options/add-ons/metrics-server",slug:"/config-options/add-ons/metrics-server/",permalink:"/config-options/add-ons/metrics-server/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/add-ons/metrics-server/metrics-server.md",tags:[],version:"current",lastUpdatedAt:1698957780,formattedLastUpdatedAt:"Nov 2, 2023",frontMatter:{title:"Metrics Server"},sidebar:"mySidebar",previous:{title:"K8s Ingress Controllers",permalink:"/config-options/add-ons/ingress-controllers/"},next:{title:"User-Defined Add-Ons",permalink:"/config-options/add-ons/user-defined-add-ons/"}},l={},c=[{value:"Tolerations",id:"tolerations",level:3},{value:"Metrics Server Priority Class Name",id:"metrics-server-priority-class-name",level:3},{value:"Disabling the Metrics Server",id:"disabling-the-metrics-server",level:3}],p={toc:c},m="wrapper";function d(e){let{components:r,...t}=e;return(0,i.kt)(m,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"By default, RKE deploys ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-incubator/metrics-server"},"Metrics Server")," to provide metrics on resources in your cluster."),(0,i.kt)("p",null,"RKE will deploy Metrics Server as a Deployment."),(0,i.kt)("p",null,"The image used for Metrics Server is under the ",(0,i.kt)("a",{parentName:"p",href:"/config-options/system-images/"},(0,i.kt)("inlineCode",{parentName:"a"},"system_images")," directive"),". For each Kubernetes version, there is a default image associated with the Metrics Server, but these can be overridden by changing the image tag in ",(0,i.kt)("inlineCode",{parentName:"p"},"system_images"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#tolerations"},"Tolerations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#metrics-server-priority-class-name"},"Priority Class Name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#disabling-the-metrics-server"},"Disabling the Metrics Server"))),(0,i.kt)("h3",{id:"tolerations"},"Tolerations"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v1.2.4")),(0,i.kt)("p",null,"The configured tolerations apply to the ",(0,i.kt)("inlineCode",{parentName:"p"},"metrics-server")," Deployment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'monitoring:\n  tolerations:\n  - key: "node.kubernetes.io/unreachable"\n    operator: "Exists"\n    effect: "NoExecute"\n    tolerationseconds: 300\n  - key: "node.kubernetes.io/not-ready"\n    operator: "Exists"\n    effect: "NoExecute"\n    tolerationseconds: 300\n')),(0,i.kt)("p",null,"To check for applied tolerations on the ",(0,i.kt)("inlineCode",{parentName:"p"},"metrics-server")," Deployment, use the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl -n kube-system get deploy metrics-server -o jsonpath='{.spec.template.spec.tolerations}'\n")),(0,i.kt)("h3",{id:"metrics-server-priority-class-name"},"Metrics Server Priority Class Name"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of RKE v1.2.6+")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption/#pod-priority"},"pod priority")," is set by configuring a priority class name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"monitoring:\n  provider: metrics-server\n  metrics_server_priority_class_name: system-cluster-critical\n")),(0,i.kt)("h3",{id:"disabling-the-metrics-server"},"Disabling the Metrics Server"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v0.2.0")),(0,i.kt)("p",null,"You can disable the default controller by specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," to the monitoring ",(0,i.kt)("inlineCode",{parentName:"p"},"provider")," directive in the cluster configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"monitoring:\n  provider: none\n")))}d.isMDXComponent=!0}}]);