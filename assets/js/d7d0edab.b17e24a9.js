"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[4020],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var a=o.createContext({}),s=function(e){var r=o.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=s(e.components);return o.createElement(a.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(t),f=n,v=d["".concat(a,".").concat(f)]||d[f]||u[f]||i;return t?o.createElement(v,c(c({ref:r},l),{},{components:t})):o.createElement(v,c({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=d;var p={};for(var a in r)hasOwnProperty.call(r,a)&&(p[a]=r[a]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var s=2;s<i;s++)c[s]=t[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2769:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var o=t(7462),n=(t(7294),t(3905));const i={title:"Cloud Providers",weight:250},c=void 0,p={unversionedId:"config-options/cloud-providers/cloud-providers",id:"config-options/cloud-providers/cloud-providers",title:"Cloud Providers",description:"RKE supports the ability to set your specific cloud provider for your Kubernetes cluster. There are specific cloud configurations for these cloud providers.",source:"@site/docs/config-options/cloud-providers/cloud-providers.md",sourceDirName:"config-options/cloud-providers",slug:"/config-options/cloud-providers/",permalink:"/config-options/cloud-providers/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/cloud-providers/cloud-providers.md",tags:[],version:"current",lastUpdatedAt:1674774141,formattedLastUpdatedAt:"1/26/2023",frontMatter:{title:"Cloud Providers",weight:250},sidebar:"mySidebar",previous:{title:"Azure Cloud Provider",permalink:"/config-options/cloud-providers/azure/"},next:{title:"Custom Cloud Provider",permalink:"/config-options/cloud-providers/custom/"}},a={},s=[],l={toc:s};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"RKE supports the ability to set your specific cloud provider for your Kubernetes cluster. There are specific cloud configurations for these cloud providers.\nTo enable a cloud provider its name as well as any required configuration options must be provided under the ",(0,n.kt)("inlineCode",{parentName:"p"},"cloud_provider")," directive in the cluster YML."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"config-options/cloud-providers/aws"},"AWS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"config-options/cloud-providers/azure"},"Azure")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"config-options/cloud-providers/openstack"},"OpenStack")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"config-options/cloud-providers/vsphere"},"vSphere"))),(0,n.kt)("p",null,"Outside of this list, RKE also supports the ability to handle any ",(0,n.kt)("a",{parentName:"p",href:"config-options/cloud-providers/custom"},"custom cloud provider"),"."))}u.isMDXComponent=!0}}]);