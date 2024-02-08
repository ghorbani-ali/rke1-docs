"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[3831],{7300:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=s(5893),o=s(1151);const i={title:"K8s Ingress Controllers",description:"By default, RKE deploys the NGINX ingress controller. Learn how to schedule and disable default k8s ingress controllers, and how to configure NGINX controller"},t=void 0,l={id:"config-options/add-ons/ingress-controllers/ingress-controllers",title:"K8s Ingress Controllers",description:"By default, RKE deploys the NGINX ingress controller. Learn how to schedule and disable default k8s ingress controllers, and how to configure NGINX controller",source:"@site/docs/config-options/add-ons/ingress-controllers/ingress-controllers.md",sourceDirName:"config-options/add-ons/ingress-controllers",slug:"/config-options/add-ons/ingress-controllers/",permalink:"/config-options/add-ons/ingress-controllers/",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/add-ons/ingress-controllers/ingress-controllers.md",tags:[],version:"current",lastUpdatedAt:1707351282,formattedLastUpdatedAt:"Feb 8, 2024",frontMatter:{title:"K8s Ingress Controllers",description:"By default, RKE deploys the NGINX ingress controller. Learn how to schedule and disable default k8s ingress controllers, and how to configure NGINX controller"},sidebar:"mySidebar",previous:{title:"DNS providers",permalink:"/config-options/add-ons/dns/"},next:{title:"Metrics Server",permalink:"/config-options/add-ons/metrics-server/"}},c={},d=[{value:"Default Ingress",id:"default-ingress",level:3},{value:"Scheduling Ingress Controllers",id:"scheduling-ingress-controllers",level:3},{value:"Ingress Priority Class Name",id:"ingress-priority-class-name",level:3},{value:"Tolerations",id:"tolerations",level:3},{value:"Disabling the Default Ingress Controller",id:"disabling-the-default-ingress-controller",level:3},{value:"Configuring NGINX Ingress Controller",id:"configuring-nginx-ingress-controller",level:3},{value:"Disabling NGINX Ingress Default Backend",id:"disabling-nginx-ingress-default-backend",level:3},{value:"Configuring network options",id:"configuring-network-options",level:3},{value:"Configuring an NGINX Default Certificate",id:"configuring-an-nginx-default-certificate",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{TabItem:s,Tabs:i}=n;return s||g("TabItem",!0),i||g("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"default-ingress",children:"Default Ingress"}),"\n",(0,r.jsx)(n.p,{children:"By default, RKE deploys the NGINX ingress controller on all schedulable nodes."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"As of v0.1.8, only workers are considered schedulable nodes, but before v0.1.8, worker and controlplane nodes were considered schedulable nodes."})}),"\n",(0,r.jsxs)(n.p,{children:["RKE will deploy the ingress controller as a DaemonSet with ",(0,r.jsx)(n.code,{children:"hostNetwork: true"}),", so ports ",(0,r.jsx)(n.code,{children:"80"}),", and ",(0,r.jsx)(n.code,{children:"443"})," will be opened on each node where the controller is deployed."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["As of v1.1.11, the network options of the ingress controller are configurable. See ",(0,r.jsx)(n.a,{href:"#configuring-network-options",children:"Configuring network options"}),"."]})}),"\n",(0,r.jsxs)(n.p,{children:["The images used for ingress controller is under the ",(0,r.jsxs)(n.a,{href:"/config-options/system-images/",children:[(0,r.jsx)(n.code,{children:"system_images"})," directive"]}),". For each Kubernetes version, there are default images associated with the ingress controller, but these can be overridden by changing the image tag in ",(0,r.jsx)(n.code,{children:"system_images"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"scheduling-ingress-controllers",children:"Scheduling Ingress Controllers"}),"\n",(0,r.jsxs)(n.p,{children:["If you only wanted ingress controllers to be deployed on specific nodes, you can set a ",(0,r.jsx)(n.code,{children:"node_selector"})," for the ingress. The label in the ",(0,r.jsx)(n.code,{children:"node_selector"})," would need to match the label on the nodes for the ingress controller to be deployed."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"nodes:\n- address: 1.1.1.1\n  role: [controlplane,worker,etcd]\n  user: root\n  labels:\n    app: ingress\n\ningress:\n  provider: nginx\n  node_selector:\n    app: ingress\n"})}),"\n",(0,r.jsx)(n.h3,{id:"ingress-priority-class-name",children:"Ingress Priority Class Name"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Available as of RKE v1.2.6+"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption/#pod-priority",children:"pod priority"})," is set by configuring a priority class name:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"ingress:\n  provider: nginx\n  ingress_priority_class_name: system-cluster-critical\n"})}),"\n",(0,r.jsx)(n.h3,{id:"tolerations",children:"Tolerations"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Available as of v1.2.4"})}),"\n",(0,r.jsxs)(n.p,{children:["The configured tolerations apply to the ",(0,r.jsx)(n.code,{children:"default-http-backend"})," Deployment."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'ingress:\n  tolerations:\n  - key: "node.kubernetes.io/unreachable"\n    operator: "Exists"\n    effect: "NoExecute"\n    tolerationseconds: 300\n  - key: "node.kubernetes.io/not-ready"\n    operator: "Exists"\n    effect: "NoExecute"\n    tolerationseconds: 300\n'})}),"\n",(0,r.jsxs)(n.p,{children:["To check for applied tolerations ",(0,r.jsx)(n.code,{children:"default-http-backend"})," Deployment, use the following commands:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl -n ingress-nginx get deploy default-http-backend -o jsonpath='{.spec.template.spec.tolerations}'\n"})}),"\n",(0,r.jsx)(n.h3,{id:"disabling-the-default-ingress-controller",children:"Disabling the Default Ingress Controller"}),"\n",(0,r.jsxs)(n.p,{children:["You can disable the default controller by specifying ",(0,r.jsx)(n.code,{children:"none"})," to  the ingress ",(0,r.jsx)(n.code,{children:"provider"})," directive in the cluster configuration."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"ingress:\n    provider: none\n"})}),"\n",(0,r.jsx)(n.h3,{id:"configuring-nginx-ingress-controller",children:"Configuring NGINX Ingress Controller"}),"\n",(0,r.jsxs)(n.p,{children:["For the configuration of NGINX, there are configuration options available in Kubernetes. There are a ",(0,r.jsx)(n.a,{href:"https://github.com/kubernetes/ingress-nginx/blob/master/docs/user-guide/nginx-configuration/configmap.md",children:"list of options for the NGINX config map"})," , ",(0,r.jsx)(n.a,{href:"https://github.com/kubernetes/ingress-nginx/blob/master/docs/user-guide/cli-arguments.md",children:"command line extra_args"})," and ",(0,r.jsx)(n.a,{href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/",children:"annotations"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'ingress:\n  provider: nginx\n  options:\n    map-hash-bucket-size: "128"\n    ssl-protocols: SSLv2\n  extra_args:\n    enable-ssl-passthrough: ""\n'})}),"\n",(0,r.jsx)(n.h3,{id:"disabling-nginx-ingress-default-backend",children:"Disabling NGINX Ingress Default Backend"}),"\n",(0,r.jsxs)(n.p,{children:["As of v0.20.0, you can disable the ",(0,r.jsx)(n.a,{href:"https://kubernetes.github.io/ingress-nginx/user-guide/default-backend/",children:"default backend service"})," for the ingress controller. This is possible because ",(0,r.jsx)(n.code,{children:"ingress-nginx"})," will fall back to a local 404 page, and does not require a backend service. The service can be enabled/disabled with a boolean value."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"ingress:\n  default_backend: false\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"What happens if the field is omitted?",type:"info",children:(0,r.jsxs)(n.p,{children:["The value of ",(0,r.jsx)(n.code,{children:"default_backend"})," will default to ",(0,r.jsx)(n.code,{children:"true"}),". This maintains behavior with older versions of ",(0,r.jsx)(n.code,{children:"rke"}),". However, a future version of ",(0,r.jsx)(n.code,{children:"rke"})," will change the default value to ",(0,r.jsx)(n.code,{children:"false"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"configuring-network-options",children:"Configuring network options"}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)(s,{value:"v1.3.x",children:(0,r.jsxs)(n.p,{children:["For Kubernetes v1.21 and up, the NGINX ingress controller no longer runs in ",(0,r.jsx)(n.code,{children:"hostNetwork: true"})," but uses hostPorts for port ",(0,r.jsx)(n.code,{children:"80"})," and port ",(0,r.jsx)(n.code,{children:"443"}),". This was done so the admission webhook can be configured to be accessed using ClusterIP so it can only be reached inside the cluster. If you want to change the mode and/or the ports, see the options below."]})}),(0,r.jsx)(s,{value:"v1.1.11 and up & v1.2.x",children:(0,r.jsxs)(n.p,{children:["By default, the nginx ingress controller is configured using ",(0,r.jsx)(n.code,{children:"hostNetwork: true"})," on the default ports ",(0,r.jsx)(n.code,{children:"80"})," and ",(0,r.jsx)(n.code,{children:"443"}),". If you want to change the mode and/or the ports, see the options below."]})})]}),"\n",(0,r.jsxs)(n.p,{children:["Here's an example of how to configure the nginx ingress controller using ",(0,r.jsx)(n.code,{children:"hostPort"})," and override the default ports:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"ingress:\n  provider: nginx\n  network_mode: hostPort\n  http_port: 9090\n  https_port: 9443\n  extra_args:\n    http-port: 3080\n    https-port: 3443\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Here's an example of how to configure the nginx ingress controller using ",(0,r.jsx)(n.code,{children:"hostNetwork"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"ingress:\n  provider: nginx\n  network_mode: hostNetwork\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Here's an example of how to configure the nginx ingress controller with no network mode which will make it run on the overlay network (for example, if you want to expose the nginx ingress controller using a ",(0,r.jsx)(n.code,{children:"LoadBalancer"}),") and override the default ports:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"ingress:\n  provider: nginx\n  network_mode: none\n  extra_args:\n    http-port: 8080\n    https-port: 8443\n"})}),"\n",(0,r.jsx)(n.h3,{id:"configuring-an-nginx-default-certificate",children:"Configuring an NGINX Default Certificate"}),"\n",(0,r.jsx)(n.p,{children:"When configuring an ingress object with TLS termination, you must provide it with a certificate used for encryption/decryption. Instead of explicitly defining a certificate each time you configure an ingress, you can set up a custom certificate that's used by default."}),"\n",(0,r.jsx)(n.p,{children:"Setting up a default certificate is especially helpful in environments where a wildcard certificate is used, as the certificate can be applied in multiple subdomains."}),"\n",(0,r.jsx)(n.admonition,{title:"Prerequisites",type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Access to the ",(0,r.jsx)(n.code,{children:"cluster.yml"})," used to create the cluster."]}),"\n",(0,r.jsx)(n.li,{children:"The PEM encoded certificate you will use as the default certificate."}),"\n"]})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Obtain or generate your certificate key pair in a PEM encoded form."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Generate a Kubernetes secret from your PEM encoded certificate with the following command, substituting your certificate for ",(0,r.jsx)(n.code,{children:"mycert.cert"})," and ",(0,r.jsx)(n.code,{children:"mycert.key"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl -n ingress-nginx create secret tls ingress-default-cert --cert=mycert.cert --key=mycert.key -o yaml --dry-run=true > ingress-default-cert.yaml\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Include the contents of ",(0,r.jsx)(n.code,{children:"ingress-default-cert.yml"})," inline with your RKE ",(0,r.jsx)(n.code,{children:"cluster.yml"})," file. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"addons: |-\n  ---\n  apiVersion: v1\n  data:\n    tls.crt: [ENCODED CERT]\n    tls.key: [ENCODED KEY]\n  kind: Secret\n  metadata:\n    creationTimestamp: null\n    name: ingress-default-cert\n    namespace: ingress-nginx\n  type: kubernetes.io/tls\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Define your ingress resource with the following ",(0,r.jsx)(n.code,{children:"default-ssl-certificate"})," argument, which references the secret we created earlier under ",(0,r.jsx)(n.code,{children:"extra_args"})," in your ",(0,r.jsx)(n.code,{children:"cluster.yml"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'ingress:\n  provider: "nginx"\n  extra_args:\n    default-ssl-certificate: "ingress-nginx/ingress-default-cert"\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Optional:"})," If you want to apply the default certificate to ingresses in a cluster that already exists, you must delete the NGINX ingress controller pods to have Kubernetes schedule new pods with the newly configured ",(0,r.jsx)(n.code,{children:"extra_args"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl delete pod -l app=ingress-nginx -n ingress-nginx\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}function g(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>t});var r=s(7294);const o={},i=r.createContext(o);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);