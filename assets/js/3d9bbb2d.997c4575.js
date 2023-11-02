"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[3014],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),d=i,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||a;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4301:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(3117),i=(r(7294),r(3905));const a={title:"Private Registries"},s=void 0,o={unversionedId:"config-options/private-registries/private-registries",id:"config-options/private-registries/private-registries",title:"Private Registries",description:"RKE supports the ability to configure multiple private Docker registries in the cluster.yml. By passing in your registry and credentials, it allows the nodes to pull images from these private registries.",source:"@site/docs/config-options/private-registries/private-registries.md",sourceDirName:"config-options/private-registries",slug:"/config-options/private-registries/",permalink:"/config-options/private-registries/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/private-registries/private-registries.md",tags:[],version:"current",lastUpdatedAt:1698957780,formattedLastUpdatedAt:"Nov 2, 2023",frontMatter:{title:"Private Registries"},sidebar:"mySidebar",previous:{title:"Nodes",permalink:"/config-options/nodes/"},next:{title:"Bastion/Jump Host Configuration",permalink:"/config-options/bastion-host/"}},l={},p=[{value:"Default Registry",id:"default-registry",level:3},{value:"Air-gapped Setups",id:"air-gapped-setups",level:3},{value:"Amazon Elastic Container Registry (ECR) Private Registry Setup",id:"amazon-elastic-container-registry-ecr-private-registry-setup",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"RKE supports the ability to configure multiple private Docker registries in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yml"),". By passing in your registry and credentials, it allows the nodes to pull images from these private registries."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"private_registries:\n    - url: registry.com\n      user: Username\n      password: password\n    - url: myregistry.com\n      user: myuser\n      password: mypassword\n")),(0,i.kt)("p",null,"If you are using a Docker Hub registry, you can omit the ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," or set it to ",(0,i.kt)("inlineCode",{parentName:"p"},"docker.io"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Although the directive is named ",(0,i.kt)("inlineCode",{parentName:"p"},"url"),", there is no need to prefix the host or IP address with ",(0,i.kt)("inlineCode",{parentName:"p"},"https://"),".")),(0,i.kt)("p",null,"Valid ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," examples include:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"url: registry.com\nurl: registry.com:5555\nurl: 1.1.1.1\nurl: 1.1.1.1:5555/artifactory\n")),(0,i.kt)("h3",{id:"default-registry"},"Default Registry"),(0,i.kt)("p",null,"As of v0.1.10, RKE supports specifying a default registry from the list of private registries to be used with all ",(0,i.kt)("a",{parentName:"p",href:"/config-options/system-images"},"system images"),". In this example, RKE will use ",(0,i.kt)("inlineCode",{parentName:"p"},"registry.com")," as the default registry for all system images, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher/rke-tools:v0.1.14")," will become ",(0,i.kt)("inlineCode",{parentName:"p"},"registry.com/rancher/rke-tools:v0.1.14"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"private_registries:\n    - url: registry.com\n      user: Username\n      password: password\n      is_default: true # All system images will be pulled using this registry.\n")),(0,i.kt)("h3",{id:"air-gapped-setups"},"Air-gapped Setups"),(0,i.kt)("p",null,"By default, all system images are being pulled from DockerHub. If you are on a system that does not have access to DockerHub, you will need to create a private registry that is populated with all the required ",(0,i.kt)("a",{parentName:"p",href:"/config-options/system-images/"},"system images"),"."),(0,i.kt)("p",null,"As of v0.1.10, you have to configure your private registry credentials, but you can specify this registry as a default registry so that all ",(0,i.kt)("a",{parentName:"p",href:"/config-options/system-images/"},"system images")," are pulled from the designated private registry. You can use the command ",(0,i.kt)("inlineCode",{parentName:"p"},"rke config --system-images")," to get the list of default system images to populate your private registry."),(0,i.kt)("p",null,"Before v0.1.10, you had to configure your private registry credentials ",(0,i.kt)("strong",{parentName:"p"},"and")," update the names of all the ",(0,i.kt)("a",{parentName:"p",href:"/config-options/system-images/"},"system images")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yml")," so that the image names would have the private registry URL appended before each image name."),(0,i.kt)("h3",{id:"amazon-elastic-container-registry-ecr-private-registry-setup"},"Amazon Elastic Container Registry (ECR) Private Registry Setup"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html"},"Amazon ECR")," is an AWS managed container image registry service that is secure, scalable, and reliable. There are two ways in which to provide ECR credentials to set up your ECR private registry: using an instance profile or adding a configuration snippet, which are hard-coded credentials in environment variables for the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubelet")," and credentials under the ",(0,i.kt)("inlineCode",{parentName:"p"},"ecrCredentialPlugin"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Instance Profile"),": An instance profile is the preferred and more secure approach to provide ECR credentials (when running in EC2, etc.). The instance profile will be autodetected and used by default. For more information on configuring an instance profile with ECR permissions, go ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonECR/latest/userguide/security-iam.html"},"here"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Configuration Snippet"),": You will use the configuration snippet below rather than an instance profile only if the following conditions exist in your node:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Node is not an EC2 instance"),(0,i.kt)("li",{parentName:"ul"},"Node is an EC2 instance but does not have an instance profile configured"),(0,i.kt)("li",{parentName:"ul"},"Node is an EC2 instance and has an instance profile configured but has no permissions for ECR")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ECR credentials are only used in the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubelet")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ecrCredentialPlugin")," areas. This is important to remember if you have issues while creating a new cluster or when pulling images during reconcile/upgrades."),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Kubelet: For add-ons, custom workloads, etc., the instance profile or credentials are used by the downstream cluster nodes"),(0,i.kt)("li",{parentName:"ul"},"Pulling system images (directly via Docker): For bootstrap, upgrades, reconcile, etc., the instance profile or credentials are used by nodes running RKE or running the Rancher pods."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  # Configuration snippet to be used when the instance profile is unavailable.\n  services:\n    kubelet:\n      extra_env:\n        - "AWS_ACCESS_KEY_ID=ACCESSKEY"\n        - "AWS_SECRET_ACCESS_KEY=SECRETKEY"\n  private_registries:\n       - url: ACCOUNTID.dkr.ecr.REGION.amazonaws.com\n         is_default: true\n         ecrCredentialPlugin:\n          aws_access_key_id: "ACCESSKEY"\n          aws_secret_access_key: "SECRETKEY"\n')))}m.isMDXComponent=!0}}]);