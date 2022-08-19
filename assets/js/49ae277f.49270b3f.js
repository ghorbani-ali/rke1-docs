"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[1663],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),o=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=o(e.components);return i.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=o(r),p=a,g=d["".concat(l,".").concat(p)]||d[p]||f[p]||n;return r?i.createElement(g,c(c({ref:t},u),{},{components:r})):i.createElement(g,c({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,c=new Array(n);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var o=2;o<n;o++)c[o]=r[o];return i.createElement.apply(null,c)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5522:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return f}});var i=r(7462),a=r(3366),n=(r(7294),r(3905)),c=["components"],s={title:"Certificate Management",weight:150},l=void 0,o={unversionedId:"cert-mgmt/cert-mgmt",id:"cert-mgmt/cert-mgmt",title:"Certificate Management",description:"Available as of v0.2.0",source:"@site/docs/cert-mgmt/cert-mgmt.md",sourceDirName:"cert-mgmt",slug:"/cert-mgmt/",permalink:"/cert-mgmt/",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/cert-mgmt/cert-mgmt.md",tags:[],version:"current",lastUpdatedAt:1660918540,formattedLastUpdatedAt:"8/19/2022",frontMatter:{title:"Certificate Management",weight:150},sidebar:"mySidebar",previous:{title:"Troubleshooting",permalink:"/etcd-snapshots/troubleshooting/"},next:{title:"Adding and Removing Nodes",permalink:"/managing-clusters/"}},u={},f=[{value:"Generating Certificate Signing Requests (CSRs) and Keys",id:"generating-certificate-signing-requests-csrs-and-keys",level:2},{value:"Certificate Rotation",id:"certificate-rotation",level:2},{value:"Rotating all Service Certificates while using the same CA",id:"rotating-all-service-certificates-while-using-the-same-ca",level:3},{value:"Rotating a Certificate on an Individual Service while using the same CA",id:"rotating-a-certificate-on-an-individual-service-while-using-the-same-ca",level:3},{value:"Rotating the CA and all service certificates",id:"rotating-the-ca-and-all-service-certificates",level:3}],d={toc:f};function p(e){var t=e.components,r=(0,a.Z)(e,c);return(0,n.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v0.2.0")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:"),' This is not "TLS Certificates management in Kubernetes". Refer the ',(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tls/managing-tls-in-a-cluster/"},"Kubernetes documentation")," and RKE ",(0,n.kt)("a",{parentName:"p",href:"example-yamls/"},"cluster.yaml example")," for more details.")),(0,n.kt)("p",null,"Certificates are an important part of Kubernetes clusters and are used for all Kubernetes cluster components. RKE has a ",(0,n.kt)("inlineCode",{parentName:"p"},"rke cert")," command to help work with certificates."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#generating-certificate-signing-requests-csrs-and-keys"},"Ability to generate certificate sign requests for the Kubernetes components")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#certificate-rotation"},"Rotate Auto-Generated Certificates"))),(0,n.kt)("h2",{id:"generating-certificate-signing-requests-csrs-and-keys"},"Generating Certificate Signing Requests (CSRs) and Keys"),(0,n.kt)("p",null,"If you want to create and sign the certificates by a real Certificate Authority (CA), you can use RKE to ",(0,n.kt)("a",{parentName:"p",href:"installation/certs/#generating-certificate-signing-requests-csrs-and-keys"},"generate a set of Certificate Signing Requests (CSRs) and keys"),"."),(0,n.kt)("p",null,"You can use the CSRs and keys to sign the certificates by a real CA. After the certificates are signed, these custom certificates can be used by RKE to as ",(0,n.kt)("a",{parentName:"p",href:"installation/certs/"},"custom certificates")," for the Kubernetes cluster."),(0,n.kt)("h2",{id:"certificate-rotation"},"Certificate Rotation"),(0,n.kt)("p",null,"By default, Kubernetes clusters require certificates and RKE will automatically generate certificates for the clusters. Rotating these certificates are important before the certificates expire as well as if a certificate is compromised."),(0,n.kt)("p",null,"After the certificates are rotated, the Kubernetes components are automatically restarted. Certificates can be rotated for the following services:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"etcd"),(0,n.kt)("li",{parentName:"ul"},"kubelet (node certificate)"),(0,n.kt)("li",{parentName:"ul"},"kubelet (serving certificate, if ",(0,n.kt)("a",{parentName:"li",href:"config-options/services/#kubelet-options"},"enabled"),")"),(0,n.kt)("li",{parentName:"ul"},"kube-apiserver"),(0,n.kt)("li",{parentName:"ul"},"kube-proxy"),(0,n.kt)("li",{parentName:"ul"},"kube-scheduler"),(0,n.kt)("li",{parentName:"ul"},"kube-controller-manager")),(0,n.kt)("p",null,"RKE has the ability to rotate the auto-generated certificates with some simple commands:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Rotating all service certificates while using the same CA"),(0,n.kt)("li",{parentName:"ul"},"Rotating a certificate on an individual service while using the same CA"),(0,n.kt)("li",{parentName:"ul"},"Rotating the CA and all service certificates")),(0,n.kt)("p",null,"Whenever you're trying to rotate certificates, the ",(0,n.kt)("inlineCode",{parentName:"p"},"cluster.yml")," that was used to deploy the Kubernetes cluster is required. You can reference a different location for this file by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"--config")," option when running ",(0,n.kt)("inlineCode",{parentName:"p"},"rke cert rotate"),"."),(0,n.kt)("h3",{id:"rotating-all-service-certificates-while-using-the-same-ca"},"Rotating all Service Certificates while using the same CA"),(0,n.kt)("p",null,"To rotate the service certificates for all the Kubernetes services, run the following command, i.e. ",(0,n.kt)("inlineCode",{parentName:"p"},"rke cert rotate"),". After all the service certificates are rotated, these services will automatically be restarted to start using the new certificate."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ rke cert rotate\nINFO[0000] Initiating Kubernetes cluster                \nINFO[0000] Rotating Kubernetes cluster certificates     \nINFO[0000] [certificates] Generating Kubernetes API server certificates\nINFO[0000] [certificates] Generating Kube Controller certificates\nINFO[0000] [certificates] Generating Kube Scheduler certificates\nINFO[0001] [certificates] Generating Kube Proxy certificates\nINFO[0001] [certificates] Generating Node certificate   \nINFO[0001] [certificates] Generating admin certificates and kubeconfig\nINFO[0001] [certificates] Generating Kubernetes API server proxy client certificates\nINFO[0001] [certificates] Generating etcd-xxxxx certificate and key\nINFO[0001] [certificates] Generating etcd-yyyyy certificate and key\nINFO[0002] [certificates] Generating etcd-zzzzz certificate and key\nINFO[0002] Successfully Deployed state file at [./cluster.rkestate]\nINFO[0002] Rebuilding Kubernetes cluster with rotated certificates\n.....\nINFO[0050] [worker] Successfully restarted Worker Plane..\n")),(0,n.kt)("h3",{id:"rotating-a-certificate-on-an-individual-service-while-using-the-same-ca"},"Rotating a Certificate on an Individual Service while using the same CA"),(0,n.kt)("p",null,"To rotate the certificate for an individual Kubernetes service, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"--service")," option when rotating certificates to specify the service. After the specified Kubernetes service has had its certificate rotated, it is automatically restarted to start using the new certificate."),(0,n.kt)("p",null,"Example of rotating the certificate for only the ",(0,n.kt)("inlineCode",{parentName:"p"},"kubelet"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ rke cert rotate --service kubelet\nINFO[0000] Initiating Kubernetes cluster                \nINFO[0000] Rotating Kubernetes cluster certificates     \nINFO[0000] [certificates] Generating Node certificate   \nINFO[0000] Successfully Deployed state file at [./cluster.rkestate]\nINFO[0000] Rebuilding Kubernetes cluster with rotated certificates\n.....\nINFO[0033] [worker] Successfully restarted Worker Plane..\n")),(0,n.kt)("h3",{id:"rotating-the-ca-and-all-service-certificates"},"Rotating the CA and all service certificates"),(0,n.kt)("p",null,"If the CA certificate needs to be rotated, you are required to rotate all the services certificates as they need to be signed with the newly rotated CA certificate. To include rotating the CA with the service certificates, add the ",(0,n.kt)("inlineCode",{parentName:"p"},"--rotate-ca")," option. After the CA and all the service certificates are rotated, these services will automatically be restarted to start using the new certificate."),(0,n.kt)("p",null,"Rotating the CA certificate will result in restarting other system pods, that will also use the new CA certificate. This includes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Networking pods (canal, calico, flannel, and weave)"),(0,n.kt)("li",{parentName:"ul"},"Ingress Controller pods"),(0,n.kt)("li",{parentName:"ul"},"KubeDNS pods")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ rke cert rotate --rotate-ca      \nINFO[0000] Initiating Kubernetes cluster                \nINFO[0000] Rotating Kubernetes cluster certificates     \nINFO[0000] [certificates] Generating CA kubernetes certificates\nINFO[0000] [certificates] Generating Kubernetes API server aggregation layer requestheader client CA certificates\nINFO[0000] [certificates] Generating Kubernetes API server certificates\nINFO[0000] [certificates] Generating Kube Controller certificates\nINFO[0000] [certificates] Generating Kube Scheduler certificates\nINFO[0000] [certificates] Generating Kube Proxy certificates\nINFO[0000] [certificates] Generating Node certificate   \nINFO[0001] [certificates] Generating admin certificates and kubeconfig\nINFO[0001] [certificates] Generating Kubernetes API server proxy client certificates\nINFO[0001] [certificates] Generating etcd-xxxxx certificate and key\nINFO[0001] [certificates] Generating etcd-yyyyy certificate and key\nINFO[0001] [certificates] Generating etcd-zzzzz certificate and key\nINFO[0001] Successfully Deployed state file at [./cluster.rkestate]\nINFO[0001] Rebuilding Kubernetes cluster with rotated certificates\n")))}p.isMDXComponent=!0}}]);