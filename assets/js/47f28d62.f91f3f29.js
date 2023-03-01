"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[9806],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),g=r,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"AWS Cloud Provider",weight:251},l=void 0,i={unversionedId:"config-options/cloud-providers/aws/aws",id:"config-options/cloud-providers/aws/aws",title:"AWS Cloud Provider",description:"To enable the AWS cloud provider, there are no RKE configuration options. You only need to set the name as aws. In order to use the AWS cloud provider, all cluster nodes must have already been configured with an appropriate IAM role and your AWS resources must be tagged with a cluster ID.",source:"@site/docs/config-options/cloud-providers/aws/aws.md",sourceDirName:"config-options/cloud-providers/aws",slug:"/config-options/cloud-providers/aws/",permalink:"/config-options/cloud-providers/aws/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/cloud-providers/aws/aws.md",tags:[],version:"current",lastUpdatedAt:1677629373,formattedLastUpdatedAt:"3/1/2023",frontMatter:{title:"AWS Cloud Provider",weight:251},sidebar:"mySidebar",previous:{title:"Cloud Providers",permalink:"/config-options/cloud-providers/"},next:{title:"Azure Cloud Provider",permalink:"/config-options/cloud-providers/azure/"}},s={},c=[{value:"IAM Requirements",id:"iam-requirements",level:2},{value:"Tagging AWS Resources",id:"tagging-aws-resources",level:2},{value:"Tagging for Load Balancers",id:"tagging-for-load-balancers",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To enable the AWS cloud provider, there are no RKE configuration options. You only need to set the name as ",(0,r.kt)("inlineCode",{parentName:"p"},"aws"),". In order to use the AWS cloud provider, all cluster nodes must have already been configured with an ",(0,r.kt)("a",{parentName:"p",href:"#iam-requirements"},"appropriate IAM role")," and your AWS resources must be ",(0,r.kt)("a",{parentName:"p",href:"#tagging-aws-resources"},"tagged with a cluster ID"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"cloud_provider:\n    name: aws\n")),(0,r.kt)("h2",{id:"iam-requirements"},"IAM Requirements"),(0,r.kt)("p",null,"In a cluster with the AWS cloud provider enabled, nodes must have at least the ",(0,r.kt)("inlineCode",{parentName:"p"},"ec2:Describe*")," action."),(0,r.kt)("p",null,"In order to use Elastic Load Balancers (ELBs) and EBS volumes with Kubernetes, the node(s) will need to have the an IAM role with appropriate permissions."),(0,r.kt)("p",null,"IAM policy for nodes with the ",(0,r.kt)("inlineCode",{parentName:"p"},"controlplane")," role:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": [\n        "autoscaling:DescribeAutoScalingGroups",\n        "autoscaling:DescribeLaunchConfigurations",\n        "autoscaling:DescribeTags",\n        "ec2:DescribeInstances",\n        "ec2:DescribeRegions",\n        "ec2:DescribeRouteTables",\n        "ec2:DescribeSecurityGroups",\n        "ec2:DescribeSubnets",\n        "ec2:DescribeVolumes",\n        "ec2:CreateSecurityGroup",\n        "ec2:CreateTags",\n        "ec2:CreateVolume",\n        "ec2:ModifyInstanceAttribute",\n        "ec2:ModifyVolume",\n        "ec2:AttachVolume",\n        "ec2:AuthorizeSecurityGroupIngress",\n        "ec2:CreateRoute",\n        "ec2:DeleteRoute",\n        "ec2:DeleteSecurityGroup",\n        "ec2:DeleteVolume",\n        "ec2:DetachVolume",\n        "ec2:RevokeSecurityGroupIngress",\n        "ec2:DescribeVpcs",\n        "elasticloadbalancing:AddTags",\n        "elasticloadbalancing:AttachLoadBalancerToSubnets",\n        "elasticloadbalancing:ApplySecurityGroupsToLoadBalancer",\n        "elasticloadbalancing:CreateLoadBalancer",\n        "elasticloadbalancing:CreateLoadBalancerPolicy",\n        "elasticloadbalancing:CreateLoadBalancerListeners",\n        "elasticloadbalancing:ConfigureHealthCheck",\n        "elasticloadbalancing:DeleteLoadBalancer",\n        "elasticloadbalancing:DeleteLoadBalancerListeners",\n        "elasticloadbalancing:DescribeLoadBalancers",\n        "elasticloadbalancing:DescribeLoadBalancerAttributes",\n        "elasticloadbalancing:DetachLoadBalancerFromSubnets",\n        "elasticloadbalancing:DeregisterInstancesFromLoadBalancer",\n        "elasticloadbalancing:ModifyLoadBalancerAttributes",\n        "elasticloadbalancing:RegisterInstancesWithLoadBalancer",\n        "elasticloadbalancing:SetLoadBalancerPoliciesForBackendServer",\n        "elasticloadbalancing:AddTags",\n        "elasticloadbalancing:CreateListener",\n        "elasticloadbalancing:CreateTargetGroup",\n        "elasticloadbalancing:DeleteListener",\n        "elasticloadbalancing:DeleteTargetGroup",\n        "elasticloadbalancing:DescribeListeners",\n        "elasticloadbalancing:DescribeLoadBalancerPolicies",\n        "elasticloadbalancing:DescribeTargetGroups",\n        "elasticloadbalancing:DescribeTargetHealth",\n        "elasticloadbalancing:ModifyListener",\n        "elasticloadbalancing:ModifyTargetGroup",\n        "elasticloadbalancing:RegisterTargets",\n        "elasticloadbalancing:SetLoadBalancerPoliciesOfListener",\n        "iam:CreateServiceLinkedRole",\n        "kms:DescribeKey"\n      ],\n      "Resource": [\n        "*"\n      ]\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"IAM policy for nodes with the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"worker")," role:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": [\n        "ec2:DescribeInstances",\n        "ec2:DescribeRegions",\n        "ecr:GetAuthorizationToken",\n        "ecr:BatchCheckLayerAvailability",\n        "ecr:GetDownloadUrlForLayer",\n        "ecr:GetRepositoryPolicy",\n        "ecr:DescribeRepositories",\n        "ecr:ListImages",\n        "ecr:BatchGetImage"\n      ],\n      "Resource": "*"\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"tagging-aws-resources"},"Tagging AWS Resources"),(0,r.kt)("p",null,"The AWS cloud provider uses tagging to discover and manage resources, the following resources are not automatically tagged by Kubernetes or RKE:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"VPC"),": The VPC used by the cluster")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Subnet"),": The subnets used by the cluster")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"EC2 instances"),": All nodes launched for the cluster ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Security Groups"),": The security group(s) used by nodes in the cluster"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," If creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," service and there is more than one security group attached to nodes, you must tag only one of the security groups as ",(0,r.kt)("inlineCode",{parentName:"p"},"owned")," so that Kubernetes knows which group to add and remove rules. A single untagged security group is allowed, however, sharing this between clusters is not recommended.")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html"},"AWS Documentation: Tagging Your Amazon EC2 Resources")),(0,r.kt)("p",null,"You must tag with one of the following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kubernetes.io/cluster/",(0,r.kt)("inlineCode",{parentName:"td"},"<CLUSTERID>")),(0,r.kt)("td",{parentName:"tr",align:null},"shared")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<CLUSTERID>")," can be any string you choose. However, the same string must be used on every resource you tag. Setting the tag value to ",(0,r.kt)("inlineCode",{parentName:"p"},"owned")," informs the cluster that all resources tagged with the ",(0,r.kt)("inlineCode",{parentName:"p"},"<CLUSTERID>")," are owned and managed by this cluster only."),(0,r.kt)("p",null,"If you do not share resources between clusters, you can change the tag to:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kubernetes.io/cluster/",(0,r.kt)("inlineCode",{parentName:"td"},"<CLUSTERID>")),(0,r.kt)("td",{parentName:"tr",align:null},"owned")))),(0,r.kt)("h2",{id:"tagging-for-load-balancers"},"Tagging for Load Balancers"),(0,r.kt)("p",null,"When provisioning a ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," service Kubernetes will attempt to discover the correct subnets, this is also achieved by tags and requires adding additional subnet tags to ensure internet-facing and internal ELBs are created in the correct subnets."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/load-balancing.html#subnet-tagging-for-load-balancers"},"AWS Documentation: Subnet tagging for load balancers")))}d.isMDXComponent=!0}}]);