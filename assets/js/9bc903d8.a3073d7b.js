"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[2972],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=d(n),s=a,g=m["".concat(p,".").concat(s)]||m[s]||k[s]||i;return n?r.createElement(g,o(o({ref:e},c),{},{components:n})):r.createElement(g,o({ref:e},c))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[m]="string"==typeof t?t:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6957:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(3117),a=(n(7294),n(3905));const i={title:"OpenStack Cloud Provider"},o=void 0,l={unversionedId:"config-options/cloud-providers/openstack/openstack",id:"config-options/cloud-providers/openstack/openstack",title:"OpenStack Cloud Provider",description:"To enable the OpenStack cloud provider, besides setting the name as openstack, there are specific configuration options that must be set. The OpenStack configuration options are grouped into different sections.",source:"@site/docs/config-options/cloud-providers/openstack/openstack.md",sourceDirName:"config-options/cloud-providers/openstack",slug:"/config-options/cloud-providers/openstack/",permalink:"/config-options/cloud-providers/openstack/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/cloud-providers/openstack/openstack.md",tags:[],version:"current",lastUpdatedAt:1686343754,formattedLastUpdatedAt:"Jun 9, 2023",frontMatter:{title:"OpenStack Cloud Provider"},sidebar:"mySidebar",previous:{title:"Azure Cloud Provider",permalink:"/config-options/cloud-providers/azure/"},next:{title:"vSphere Cloud Provider",permalink:"/config-options/cloud-providers/vsphere/"}},p={},d=[{value:"Overriding the hostname",id:"overriding-the-hostname",level:2},{value:"OpenStack Configuration Options",id:"openstack-configuration-options",level:2},{value:"Global",id:"global",level:3},{value:"Load Balancer",id:"load-balancer",level:3},{value:"Block Storage",id:"block-storage",level:3},{value:"Route",id:"route",level:3},{value:"Metadata",id:"metadata",level:3}],c={toc:d},m="wrapper";function k(t){let{components:e,...n}=t;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To enable the OpenStack cloud provider, besides setting the name as ",(0,a.kt)("inlineCode",{parentName:"p"},"openstack"),", there are specific configuration options that must be set. The OpenStack configuration options are grouped into different sections."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"cloud_provider:\n    name: openstack\n    openstackCloudProvider:\n      global:\n        username: xxxxxxxxxxxxxx\n        password: xxxxxxxxxxxxxx\n        auth-url: https://1.2.3.4/identity/v3\n        tenant-id: xxxxxxxxxxxxxx\n        domain-id: xxxxxxxxxxxxxx\n      load_balancer:\n        subnet-id: xxxxxxxxxxxxxx\n      block_storage:\n        ignore-volume-az: true\n      route:\n        router-id: xxxxxxxxxxxxxx\n      metadata:\n        search-order: xxxxxxxxxxxxxx\n")),(0,a.kt)("h2",{id:"overriding-the-hostname"},"Overriding the hostname"),(0,a.kt)("p",null,"The OpenStack cloud provider uses the instance name (as determined from OpenStack metadata) as the name of the Kubernetes Node object, you must override the Kubernetes name on the node by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"hostname_override")," for each node. If you do not set the ",(0,a.kt)("inlineCode",{parentName:"p"},"hostname_override"),", the Kubernetes node name will be set as the ",(0,a.kt)("inlineCode",{parentName:"p"},"address"),", which will cause the OpenStack cloud provider to fail."),(0,a.kt)("h2",{id:"openstack-configuration-options"},"OpenStack Configuration Options"),(0,a.kt)("p",null,"The OpenStack configuration options are divided into 5 groups."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Global"),(0,a.kt)("li",{parentName:"ul"},"Load Balancer"),(0,a.kt)("li",{parentName:"ul"},"Block Storage"),(0,a.kt)("li",{parentName:"ul"},"Route"),(0,a.kt)("li",{parentName:"ul"},"Metadata")),(0,a.kt)("h3",{id:"global"},"Global"),(0,a.kt)("p",null,"These are the options that are available under the ",(0,a.kt)("inlineCode",{parentName:"p"},"global")," directive."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"OpenStack's Global Configuration Options"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"auth_url"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"username"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"user-id"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"password"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"tenant-id"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"tenant-name"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"trust-id"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"domain-id"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"domain-name"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"region"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ca-file"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h3",{id:"load-balancer"},"Load Balancer"),(0,a.kt)("p",null,"These are the options that are available under the ",(0,a.kt)("inlineCode",{parentName:"p"},"load_balancer")," directive."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"OpenStack's Load Balancer Configuration Options"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"lb-version"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"use-octavia"),(0,a.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"subnet-id"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"floating-network-id"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"lb-method"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"lb-provider"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"manage-security-groups"),(0,a.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"create-monitor"),(0,a.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"monitor-delay"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"* if ",(0,a.kt)("inlineCode",{parentName:"td"},"create-monitor")," is true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"monitor-timeout"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"* if ",(0,a.kt)("inlineCode",{parentName:"td"},"create-monitor")," is true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"monitor-max-retries"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"* if ",(0,a.kt)("inlineCode",{parentName:"td"},"create-monitor")," is true")))),(0,a.kt)("h3",{id:"block-storage"},"Block Storage"),(0,a.kt)("p",null,"These are the options that are available under the ",(0,a.kt)("inlineCode",{parentName:"p"},"block_storage")," directive."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"OpenStack's Block Storage Configuration Options"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"bs-version"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"trust-device-path"),(0,a.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ignore-volume-az"),(0,a.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h3",{id:"route"},"Route"),(0,a.kt)("p",null,"This is the option that is available under the ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," directive."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"OpenStack's Route Configuration Option"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"router-id"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h3",{id:"metadata"},"Metadata"),(0,a.kt)("p",null,"These are the options that are available under the ",(0,a.kt)("inlineCode",{parentName:"p"},"metadata")," directive."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"OpenStack's Metadata Configuration Options"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"search-order"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"request-timeout"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("p",null,"For more information of OpenStack configurations options please refer to the official Kubernetes ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/cloud-providers/#openstack"},"documentation"),"."))}k.isMDXComponent=!0}}]);