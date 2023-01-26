"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[3639],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),y=i,m=d["".concat(l,".").concat(y)]||d[y]||u[y]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={title:"Encrypting Secret Data at Rest",weight:230},o=void 0,s={unversionedId:"config-options/secrets-encryption/secrets-encryption",id:"config-options/secrets-encryption/secrets-encryption",title:"Encrypting Secret Data at Rest",description:"As of version v0.3.1 RKE adds the support for managing secret data encryption at rest, which is supported by Kubernetes since version v1.13.",source:"@site/docs/config-options/secrets-encryption/secrets-encryption.md",sourceDirName:"config-options/secrets-encryption",slug:"/config-options/secrets-encryption/",permalink:"/config-options/secrets-encryption/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/secrets-encryption/secrets-encryption.md",tags:[],version:"current",lastUpdatedAt:1674774141,formattedLastUpdatedAt:"1/26/2023",frontMatter:{title:"Encrypting Secret Data at Rest",weight:230},sidebar:"mySidebar",previous:{title:"Default Kubernetes Services",permalink:"/config-options/services/"},next:{title:"Authentication",permalink:"/config-options/authentication/"}},l={},c=[{value:"Enable Encryption",id:"enable-encryption",level:3},{value:"Disable Encryption",id:"disable-encryption",level:3},{value:"Rotating Keys with the RKE CLI",id:"rotating-keys-with-the-rke-cli",level:3},{value:"Rotating Keys by Disabling and Re-enabling Encryption in cluster.yml",id:"rotating-keys-by-disabling-and-re-enabling-encryption-in-clusteryml",level:3},{value:"Example: Using Custom Encryption Configuration with User Provided 32-byte Random Key",id:"example-using-custom-encryption-configuration-with-user-provided-32-byte-random-key",level:3},{value:"Example: Using Custom Encryption Configuration with Amazon KMS",id:"example-using-custom-encryption-configuration-with-amazon-kms",level:3},{value:"How to Prevent Restore Failures after Rotating Keys",id:"how-to-prevent-restore-failures-after-rotating-keys",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As of version ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.3.1")," RKE adds the support for managing secret data encryption at rest, which is ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/#before-you-begin"},"supported by Kubernetes")," since version ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.13"),"."),(0,i.kt)("p",null,"At-rest data encryption is required for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Compliance requirements"),(0,i.kt)("li",{parentName:"ul"},"Additional layer of security"),(0,i.kt)("li",{parentName:"ul"},"Reduce security impact of etcd node compromise"),(0,i.kt)("li",{parentName:"ul"},"Reduce security impact of etcd backups compromise"),(0,i.kt)("li",{parentName:"ul"},"Ability to use external Key Management Systems")),(0,i.kt)("p",null,"RKE provides users with two paths of configuration to enable at-rest data encryption:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Managed at-rest data encryption"),(0,i.kt)("li",{parentName:"ul"},"Custom configuration for at-rest data encryption")),(0,i.kt)("p",null,"Both configuration options can be added during initial cluster provisioning or by updating an existing cluster."),(0,i.kt)("p",null,"To utilize this feature, a new field ",(0,i.kt)("inlineCode",{parentName:"p"},"secrets_encryption_config")," is added to the ",(0,i.kt)("a",{parentName:"p",href:"%7B%7B%3Cbaseurl%3E%7D%7D//rke/latest/en/config-options/services/#kubernetes-api-server"},"Kubernetes API service configuration"),". A full custom configuration looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n  kube-api:\n    secrets_encryption_config:\n      enabled: true\n      custom_config:\n        apiVersion: apiserver.config.k8s.io/v1\n        kind: EncryptionConfiguration\n        resources:\n        - resources:\n          - secrets\n          providers:\n          - aescbc:\n              keys:\n              - name: k-fw5hn\n                secret: RTczRjFDODMwQzAyMDVBREU4NDJBMUZFNDhCNzM5N0I=\n          - identity: {}\n\n")),(0,i.kt)("h1",{id:"managed-at-rest-data-encryption"},"Managed At-Rest Data Encryption"),(0,i.kt)("p",null,"Enabling and disabling at-rest data encryption in Kubernetes is a relatively complex process that requires several steps to be performed by the Kubernetes cluster administrator. The managed configuration aims to reduce this overhead and provides a simple abstraction layer to manage the process."),(0,i.kt)("h3",{id:"enable-encryption"},"Enable Encryption"),(0,i.kt)("p",null,"Managed at-rest data encryption is disabled by default and can be enabled by using the following configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n  kube-api:\n    secrets_encryption_config:\n      enabled: true\n")),(0,i.kt)("p",null,"Once enabled, RKE will perform the following ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/#encrypting-your-data"},"actions")," to enable at-rest data encryption:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generate a new random 32-byte encryption key"),(0,i.kt)("li",{parentName:"ul"},"Generate an encryption provider configuration file using the new key The default ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/#providers"},"provider")," used is ",(0,i.kt)("inlineCode",{parentName:"li"},"aescbc")),(0,i.kt)("li",{parentName:"ul"},"Deploy the provider configuration file to all nodes with ",(0,i.kt)("inlineCode",{parentName:"li"},"controlplane")," role"),(0,i.kt)("li",{parentName:"ul"},"Update the ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-apiserver")," container arguments to point to the provider configuration file."),(0,i.kt)("li",{parentName:"ul"},"Restart the ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-apiserver")," container.")),(0,i.kt)("p",null,"After the ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-api server")," is restarted, data encryption is enabled. However, all existing secrets are still stored in plain text. RKE will ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/#ensure-all-secrets-are-encrypted"},"rewrite")," all secrets to ensure encryption is fully in effect."),(0,i.kt)("h3",{id:"disable-encryption"},"Disable Encryption"),(0,i.kt)("p",null,"To disable encryption, you can either set the ",(0,i.kt)("inlineCode",{parentName:"p"},"enabled")," flag to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", or simply remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"secrets_encryption_config")," block entirely from cluster.yml."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n  kube-api:\n    secrets_encryption_config:\n      enabled: false\n")),(0,i.kt)("p",null,"Once encryption is disabled in ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yml"),", RKE will perform the following ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/#encrypting-your-data"},"actions")," to disable encryption in your cluster:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generate a new provider configuration file with the no-encryption ",(0,i.kt)("inlineCode",{parentName:"li"},"identity{}")," provider as the first provider, and the previous ",(0,i.kt)("inlineCode",{parentName:"li"},"aescbc")," set in the second place. This will allow Kubernetes to use the first entry to write the secrets, and the second one to decrypt them."),(0,i.kt)("li",{parentName:"ul"},"Deploy the new provider configuration and restart ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-apiserver"),"."),(0,i.kt)("li",{parentName:"ul"},"Rewrite all secrets. This is required because, at this point, new data will be written to disk in plain text, but the existing data is still encrypted using the old provider. By rewriting all secrets, RKE ensures that all stored data is decrypted."),(0,i.kt)("li",{parentName:"ul"},"Update ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-apiserver")," arguments to remove the encryption provider configuration and restart the ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-apiserver"),"."),(0,i.kt)("li",{parentName:"ul"},"Remove the provider configuration file.")),(0,i.kt)("h1",{id:"key-rotation"},"Key Rotation"),(0,i.kt)("p",null,"Sometimes there is a need to rotate encryption config in your cluster. For example, the key is compromised. There are two ways to rotate the keys: with an RKE CLI command, or by disabling and re-enabling encryption in ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yml"),"."),(0,i.kt)("h3",{id:"rotating-keys-with-the-rke-cli"},"Rotating Keys with the RKE CLI"),(0,i.kt)("p",null,"With managed configuration, RKE CLI has the ability to perform the key rotation process documented ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/#rotating-a-decryption-key"},"here")," with one command. To perform this operation, the following subcommand is used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ ./rke encrypt rotate-key --help\nNAME:\n   rke encrypt rotate-key - Rotate cluster encryption provider key\n\nUSAGE:\n   rke encrypt rotate-key [command options] [arguments...]\n\nOPTIONS:\n   --config value           Specify an alternate cluster YAML file (default: "cluster.yml") [$RKE_CONFIG]\n   --ssh-agent-auth         Use SSH Agent Auth defined by SSH_AUTH_SOCK\n   --ignore-docker-version  Disable Docker version check\n\n')),(0,i.kt)("p",null,"This command will perform the following actions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generate a new random 32-byte encryption key"),(0,i.kt)("li",{parentName:"ul"},"Generate a new provider configuration with the new key as the first provider and the old key as the second provider. When the secrets are rewritten, the first key will be used to encrypt the data on the write operation, while the second key (the old key) will be used to decrypt the stored data during the the read operation"),(0,i.kt)("li",{parentName:"ul"},"Deploy the new provider configuration to all ",(0,i.kt)("inlineCode",{parentName:"li"},"controlplane")," nodes and restart the ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-apiserver")),(0,i.kt)("li",{parentName:"ul"},"Rewrite all secrets. This process will re-encrypt all the secrets with the new key."),(0,i.kt)("li",{parentName:"ul"},"Update the configuration to remove the old key and restart the ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-apiserver"))),(0,i.kt)("h3",{id:"rotating-keys-by-disabling-and-re-enabling-encryption-in-clusteryml"},"Rotating Keys by Disabling and Re-enabling Encryption in cluster.yml"),(0,i.kt)("p",null,"For a cluster with encryption enabled, you can rotate the encryption keys by updating ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yml"),". If you disable and re-enable the data encryption in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yml"),", RKE will not reuse old keys. Instead, it will generate new keys every time, yielding the same result as a key rotation with the RKE CLI."),(0,i.kt)("h1",{id:"custom-at-rest-data-encryption-configuration"},"Custom At-Rest Data Encryption Configuration"),(0,i.kt)("p",null,"With managed configuration, RKE provides the user with a very simple way to enable and disable encryption with minimal interaction and configuration. However, it doesn't allow for any customization to the configuration."),(0,i.kt)("p",null,"With custom encryption configuration, RKE allows the user to provide their own configuration. Although RKE will help the user to deploy the configuration and rewrite the secrets if needed, it doesn't provide a configuration validation on user's behalf. It's the user responsibility to make sure their configuration is valid."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Warning:")," Using invalid Encryption Provider Configuration could cause several issues with your cluster, ranging from crashing the Kubernetes API service, ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-api"),",  to completely losing access to encrypted data.")),(0,i.kt)("h3",{id:"example-using-custom-encryption-configuration-with-user-provided-32-byte-random-key"},"Example: Using Custom Encryption Configuration with User Provided 32-byte Random Key"),(0,i.kt)("p",null,"The following describes the steps required to configure custom encryption with a user provided 32-byte random key."),(0,i.kt)("p",null,"Step 1: Generate a 32-byte random key and base64 encode it. If you're on Linux or macOS, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"head -c 32 /dev/urandom | base64\n")),(0,i.kt)("p",null,"Place that value in the secret field."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"kube-api:\n    secrets_encryption_config:\n      enabled: true\n      custom_config:\n        apiVersion: apiserver.config.k8s.io/v1\n        kind: EncryptionConfiguration\n        resources:\n        - Providers:\n            - AESCBC:\n                Keys:\n                    - Name: key1\n                    Secret: <BASE 64 ENCODED SECRET>\n              resources:\n                - secrets\n            - identity: {}\n")),(0,i.kt)("h3",{id:"example-using-custom-encryption-configuration-with-amazon-kms"},"Example: Using Custom Encryption Configuration with Amazon KMS"),(0,i.kt)("p",null,"An example for custom configuration would be enabling an external key management system like ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/kms/"},"Amazon KMS"),". The following is an example of the configuration for AWS KMS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'\nservices:\n  kube-api:\n    extra_binds:\n      - "/var/run/kmsplugin/:/var/run/kmsplugin/"\n    secrets_encryption_config:\n      enabled: true\n      custom_config:\n        apiVersion: apiserver.config.k8s.io/v1\n        kind: EncryptionConfiguration\n        resources:\n          - resources:\n            - secrets\n            providers:\n            - kms:\n                name: aws-encryption-provider\n                endpoint: unix:///var/run/kmsplugin/socket.sock\n                cachesize: 1000\n                timeout: 3s\n            - identity: {}\n')),(0,i.kt)("p",null,"Documentation for AWS KMS can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/aws-encryption-provider"},"here"),". When Custom Configuration is set to to enable the AWS KMS provider, you should consider the following points:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Since RKE runs the ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-api"),"  service in a container, it's required that you use the ",(0,i.kt)("inlineCode",{parentName:"li"},"extra_binds")," feature to bind-mount the KMS provider socket location inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-api")," container."),(0,i.kt)("li",{parentName:"ul"},"The AWS KMS provider runs as a pod in the cluster. Therefor, the proper way to enable it is to:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Deploy your cluster with at-rest encryption disabled."),(0,i.kt)("li",{parentName:"ol"},"Deploy the KMS pod and make sure it's working correctly."),(0,i.kt)("li",{parentName:"ol"},"Update your cluster with the custom encryption configuration to utilize the KMS provider."))),(0,i.kt)("li",{parentName:"ul"},"Kube API connects to the KMS provider using a Unix socket. You should configure your KMS deployment to run pods on all ",(0,i.kt)("inlineCode",{parentName:"li"},"controlplane")," nodes in the cluster."),(0,i.kt)("li",{parentName:"ul"},"Your ",(0,i.kt)("inlineCode",{parentName:"li"},"controlplane")," node should be configured with an AMI profile that has access to the KMS key you used in your configuration.")),(0,i.kt)("h3",{id:"how-to-prevent-restore-failures-after-rotating-keys"},"How to Prevent Restore Failures after Rotating Keys"),(0,i.kt)("p",null,"It's important to understand that enabling encryption for you cluster means that you can no longer access encrypted data in your etcd database and/or etcd database backups without using your encryption keys."),(0,i.kt)("p",null,"The encryption configuration is stored in the cluster state file ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.rkestate"),", which is decoupled from the etcd backups. For example, in any of the following backup cases, the restore process will fail:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The snapshot is taken while encryption is enabled and restored when it's disabled. In this case, the encryption keys are no longer stored in the cluster state."),(0,i.kt)("li",{parentName:"ul"},"The snapshot is taken before the keys are rotated and restore is attempted after. In this case, the old keys used for encryption at the time of the snapshot no longer exist in the cluster state file.")),(0,i.kt)("p",null,"Therefore, we recommend that when you enable or disable encryption, or when you rotate keys, you should ",(0,i.kt)("a",{parentName:"p",href:"etcd-snapshots/one-time-snapshots/"},"create a snapshot")," so that your backup requires the same keys that you have access to."),(0,i.kt)("p",null,"This also means you should not rotate the keys during the restore process, because you would lose the encryption keys in ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.rkestate"),"."),(0,i.kt)("p",null,"The same applies to the custom configuration use case, however in this case it will depend on the user-provided encryption configuration."))}u.isMDXComponent=!0}}]);