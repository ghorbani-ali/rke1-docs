"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[5758],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return r?n.createElement(g,o(o({ref:t},d),{},{components:r})):n.createElement(g,o({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8919:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(3117),a=(r(7294),r(3905));const i={title:"Maintaining Availability for Applications During Upgrades"},o=void 0,l={unversionedId:"upgrades/maintaining-availability/maintaining-availability",id:"upgrades/maintaining-availability/maintaining-availability",title:"Maintaining Availability for Applications During Upgrades",description:"Available as of v1.1.0",source:"@site/docs/upgrades/maintaining-availability/maintaining-availability.md",sourceDirName:"upgrades/maintaining-availability",slug:"/upgrades/maintaining-availability/",permalink:"/upgrades/maintaining-availability/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/upgrades/maintaining-availability/maintaining-availability.md",tags:[],version:"current",lastUpdatedAt:1686343754,formattedLastUpdatedAt:"Jun 9, 2023",frontMatter:{title:"Maintaining Availability for Applications During Upgrades"},sidebar:"mySidebar",previous:{title:"How Upgrades Work",permalink:"/upgrades/how-upgrades-work/"},next:{title:"Configuring the Upgrade Strategy",permalink:"/upgrades/configuring-strategy/"}},s={},u=[{value:"1. Kubernetes Version Requirement",id:"1-kubernetes-version-requirement",level:3},{value:"2. Cluster Requirements",id:"2-cluster-requirements",level:3},{value:"3. Workload Requirements",id:"3-workload-requirements",level:3}],d={toc:u},p="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v1.1.0")),(0,a.kt)("p",null,"In this section, you'll learn the requirements to prevent downtime for your applications when you upgrade the cluster using ",(0,a.kt)("inlineCode",{parentName:"p"},"rke up"),"."),(0,a.kt)("p",null,"An upgrade without downtime is one in which your workloads are available on at least a single node, and all critical addon services, such as Ingress and DNS, are available during the upgrade."),(0,a.kt)("p",null,"The way that clusters are upgraded changed in RKE v1.1.0. For details, refer to ",(0,a.kt)("a",{parentName:"p",href:"/upgrades/how-upgrades-work/"},"How Upgrades Work.")),(0,a.kt)("p",null,"This availability is achieved by upgrading worker nodes in batches of a configurable size, and ensuring that your workloads run on a number of nodes that exceeds that maximum number of unavailable worker nodes."),(0,a.kt)("p",null,"To avoid downtime for your applications during an upgrade, you will need to configure your workloads to continue running despite the rolling upgrade of worker nodes. There are also requirements for the cluster architecture and Kubernetes target version."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#1-kubernetes-version-requirement"},"Kubernetes Version Requirement")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#2-cluster-requirements"},"Cluster Requirements")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#3-workload-requirements"},"Workload Requirements"))),(0,a.kt)("h3",{id:"1-kubernetes-version-requirement"},"1. Kubernetes Version Requirement"),(0,a.kt)("p",null,"When upgrading to a newer Kubernetes version, the upgrade must be from a minor release to the next minor version, or to within the same patch release series."),(0,a.kt)("h3",{id:"2-cluster-requirements"},"2. Cluster Requirements"),(0,a.kt)("p",null,"The following must be true of the cluster that will be upgraded:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The cluster has three or more etcd nodes."),(0,a.kt)("li",{parentName:"ol"},"The cluster has two or more controlplane nodes."),(0,a.kt)("li",{parentName:"ol"},"The cluster has two or more worker nodes."),(0,a.kt)("li",{parentName:"ol"},"The Ingress, DNS, and other addons are schedulable to a number of nodes that exceeds the maximum number of unavailable worker nodes, also called the batch size. By default, the minimum number of unavailable worker nodes is 10 percent of worker nodes, rounded down to the nearest node, with a minimum batch size of one node.")),(0,a.kt)("h3",{id:"3-workload-requirements"},"3. Workload Requirements"),(0,a.kt)("p",null,"The following must be true of the cluster's applications:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The application and Ingress are deployed across a number of nodes exceeding the maximum number of unavailable worker nodes, also called the batch size. By default, the minimum number of unavailable worker nodes is 10 percent of worker nodes, rounded down to the nearest node, with a minimum batch size of one node."),(0,a.kt)("li",{parentName:"ol"},"The applications must make use of liveness and readiness probes.")),(0,a.kt)("p",null,"For information on how to use node selectors to assign pods to nodes, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/assign-pod-node/"},"official Kubernetes documentation.")),(0,a.kt)("p",null,"For information on configuring the number of replicas for each addon, refer to ",(0,a.kt)("a",{parentName:"p",href:"/upgrades/configuring-strategy/"},"this section.")))}c.isMDXComponent=!0}}]);