"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[88],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Dual-stack",weight:255},i=void 0,s={unversionedId:"config-options/dual-stack/dual-stack",id:"config-options/dual-stack/dual-stack",title:"Dual-stack",description:"As of RKE v1.3.0, dual-stack networking support has been added, which allows allocating both IPv4 and IPv6 addresses to pods and services.",source:"@site/docs/config-options/dual-stack/dual-stack.md",sourceDirName:"config-options/dual-stack",slug:"/config-options/dual-stack/",permalink:"/config-options/dual-stack/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/dual-stack/dual-stack.md",tags:[],version:"current",lastUpdatedAt:1677629373,formattedLastUpdatedAt:"3/1/2023",frontMatter:{title:"Dual-stack",weight:255},sidebar:"mySidebar",previous:{title:"Audit Log",permalink:"/config-options/audit-log/"},next:{title:"Add-Ons",permalink:"/config-options/add-ons/"}},l={},c=[{value:"Requirements",id:"requirements",level:3},{value:"Example RKE Configuration",id:"example-rke-configuration",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As of RKE ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.3.0"),", ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/dual-stack/"},"dual-stack")," networking support has been added, which allows allocating both IPv4 and IPv6 addresses to pods and services."),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"In order to use the dual-stack feature, RKE and the infrastructure it's deploy to must be configured as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kubernetes 1.21 or newer is used."),(0,a.kt)("li",{parentName:"ul"},"RKE is configured to use Calico as the Container Network Interface (CNI) provider. Other providers are not supported."),(0,a.kt)("li",{parentName:"ul"},"RKE is deployed on Amazon EC2 instances with the following prerequisites:"),(0,a.kt)("li",{parentName:"ul"},"Enable IPv6 support: set the network range at VPC and its subnetworks."),(0,a.kt)("li",{parentName:"ul"},"Add a IPv6 default gateway to VPC routes."),(0,a.kt)("li",{parentName:"ul"},"Add inbound/outbound rules for IPv6 traffic to your cluster's security group(s)."),(0,a.kt)("li",{parentName:"ul"},"Ensure instances have ",(0,a.kt)("inlineCode",{parentName:"li"},"Auto-assign IPv6 IP")," enabled. See the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vpc/latest/userguide/vpc-ip-addressing.html"},"AWS documentation")," for instructions."),(0,a.kt)("li",{parentName:"ul"},"Disable source/destination checks on all instances in the cluster. See the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_NAT_Instance.html#EIP_Disable_SrcDestCheck"},"AWS documentation")," for instructions.")),(0,a.kt)("p",null,"For more information on configuring your AWS enivronment for IPv6, refer to the AWS ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/userguide/get-started-IPv6.html"},"Getting started with IPv6")," documentation."),(0,a.kt)("h3",{id:"example-rke-configuration"},"Example RKE Configuration"),(0,a.kt)("p",null,"The following is an example RKE configuration that can be used to deploy RKE with dual-stack support configured:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kubernetes_version: "v1.21.1-rancher2-1"\nservices:\n  kube-api:\n    service_cluster_ip_range: 10.43.0.0/16,fd98::/108\n  kube-controller:\n    service_cluster_ip_range: 10.43.0.0/16,fd98::/108\n    cluster_cidr: 10.42.0.0/16,fd01::/64\n\nnetwork:\n  plugin: calico\n')))}p.isMDXComponent=!0}}]);