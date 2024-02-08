"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[4630],{9743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=n(5893),s=n(1151);const o={title:"Example Scenarios"},d=void 0,l={id:"etcd-snapshots/example-scenarios/example-scenarios",title:"Example Scenarios",description:"These example scenarios for backup and restore are different based on your version of RKE.",source:"@site/docs/etcd-snapshots/example-scenarios/example-scenarios.md",sourceDirName:"etcd-snapshots/example-scenarios",slug:"/etcd-snapshots/example-scenarios/",permalink:"/etcd-snapshots/example-scenarios/",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/etcd-snapshots/example-scenarios/example-scenarios.md",tags:[],version:"current",lastUpdatedAt:1707351282,formattedLastUpdatedAt:"Feb 8, 2024",frontMatter:{title:"Example Scenarios"},sidebar:"mySidebar",previous:{title:"Restoring from Backup",permalink:"/etcd-snapshots/restoring-from-backup/"},next:{title:"Troubleshooting",permalink:"/etcd-snapshots/troubleshooting/"}},c={},i=[{value:"1. Back Up the Cluster",id:"1-back-up-the-cluster",level:3},{value:"2. Simulate a Node Failure",id:"2-simulate-a-node-failure",level:3},{value:"3. Add a New etcd Node to the Kubernetes Cluster",id:"3-add-a-new-etcd-node-to-the-kubernetes-cluster",level:3},{value:"4. Restore etcd on the New Node from the Backup",id:"4-restore-etcd-on-the-new-node-from-the-backup",level:3},{value:"5. Confirm that Cluster Operations are Restored",id:"5-confirm-that-cluster-operations-are-restored",level:3},{value:"Example Scenario of restoring from a Local Snapshot",id:"example-scenario-of-restoring-from-a-local-snapshot",level:3},{value:"1. Take a Local Snapshot of the Cluster",id:"1-take-a-local-snapshot-of-the-cluster",level:3},{value:"2. Store the Snapshot Externally",id:"2-store-the-snapshot-externally",level:3},{value:"3. Simulate a Node Failure",id:"3-simulate-a-node-failure",level:3},{value:"4. Remove the Kubernetes Cluster and Clean the Nodes",id:"4-remove-the-kubernetes-cluster-and-clean-the-nodes",level:3},{value:"5. Retrieve the Backup and Place it On a New Node",id:"5-retrieve-the-backup-and-place-it-on-a-new-node",level:3},{value:"6. Add a New etcd Node to the Kubernetes Cluster",id:"6-add-a-new-etcd-node-to-the-kubernetes-cluster",level:3},{value:"7. Restore etcd on the New Node from the Backup",id:"7-restore-etcd-on-the-new-node-from-the-backup",level:3},{value:"8. Restore Operations on the Cluster",id:"8-restore-operations-on-the-cluster",level:3}];function a(e){const t={a:"a",admonition:"admonition",code:"code",del:"del",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components},{TabItem:n,Tabs:o}=t;return n||u("TabItem",!0),o||u("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"These example scenarios for backup and restore are different based on your version of RKE."}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsxs)(n,{value:"RKE v0.2.0+",children:[(0,r.jsx)(t.p,{children:"This walkthrough will demonstrate how to restore an etcd cluster from a local snapshot with the following steps:"}),(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#1-back-up-the-cluster",children:"Back up the cluster"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#2-simulate-a-node-failure",children:"Simulate a node failure"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#3-add-a-new-etcd-node-to-the-kubernetes-cluster",children:"Add a new etcd node to the cluster"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#4-restore-etcd-on-the-new-node-from-the-backup",children:"Restore etcd on the new node from the backup"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#5-confirm-that-cluster-operations-are-restored",children:"Confirm that cluster operations are restored"})}),"\n"]}),(0,r.jsx)(t.p,{children:"In this example, the Kubernetes cluster was deployed on two AWS nodes."}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Name"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"IP"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Role"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"node1"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"10.0.0.1"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"[controlplane, worker]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"node2"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"10.0.0.2"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"[etcd]"})]})]})]}),(0,r.jsx)(t.h3,{id:"1-back-up-the-cluster",children:"1. Back Up the Cluster"}),(0,r.jsx)(t.p,{children:"Take a local snapshot of the Kubernetes cluster."}),(0,r.jsxs)(t.p,{children:["You can upload this snapshot directly to an S3 backend with the ",(0,r.jsx)(t.a,{href:"/etcd-snapshots/one-time-snapshots/#options-for-rke-etcd-snapshot-save",children:"S3 options"}),"."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"$ rke etcd snapshot-save --name snapshot.db --config cluster.yml\n"})}),(0,r.jsx)(t.h3,{id:"2-simulate-a-node-failure",children:"2. Simulate a Node Failure"}),(0,r.jsxs)(t.p,{children:["To simulate the failure, let's power down ",(0,r.jsx)(t.code,{children:"node2"}),"."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"root@node2:~# poweroff\n"})}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Name"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"IP"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Role"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"node1"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"10.0.0.1"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"[controlplane, worker]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.del,{children:"node2"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.del,{children:"10.0.0.2"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.del,{children:"[etcd]"})})]})]})]}),(0,r.jsx)(t.h3,{id:"3-add-a-new-etcd-node-to-the-kubernetes-cluster",children:"3. Add a New etcd Node to the Kubernetes Cluster"}),(0,r.jsxs)(t.p,{children:["Before updating and restoring etcd, you will need to add the new node into the Kubernetes cluster with the ",(0,r.jsx)(t.code,{children:"etcd"})," role. In the ",(0,r.jsx)(t.code,{children:"cluster.yml"}),", comment out the old node and add in the new node."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"nodes:\n    - address: 10.0.0.1\n      hostname_override: node1\n      user: ubuntu\n      role:\n        - controlplane\n        - worker\n#    - address: 10.0.0.2\n#      hostname_override: node2\n#      user: ubuntu\n#      role:\n#       - etcd\n    - address: 10.0.0.3\n      hostname_override: node3\n      user: ubuntu\n      role:\n        - etcd\n"})}),(0,r.jsx)(t.h3,{id:"4-restore-etcd-on-the-new-node-from-the-backup",children:"4. Restore etcd on the New Node from the Backup"}),(0,r.jsx)(t.admonition,{title:"Prerequisite",type:"note",children:(0,r.jsxs)(t.p,{children:["If the snapshot was created using RKE v1.1.4 or higher, the cluster state file should be included in the snapshot. The cluster state file will be automatically extracted and used for the restore. If the snapshot was created using RKE v1.1.3 or lower, please ensure your ",(0,r.jsx)(t.code,{children:"cluster.rkestate"})," is present before starting the restore, because this contains your certificate data for the cluster."]})}),(0,r.jsxs)(t.p,{children:["After the new node is added to the ",(0,r.jsx)(t.code,{children:"cluster.yml"}),", run the ",(0,r.jsx)(t.code,{children:"rke etcd snapshot-restore"})," to launch ",(0,r.jsx)(t.code,{children:"etcd"})," from the backup:"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"$ rke etcd snapshot-restore --name snapshot.db --config cluster.yml\n"})}),(0,r.jsxs)(t.p,{children:["The snapshot is expected to be saved at ",(0,r.jsx)(t.code,{children:"/opt/rke/etcd-snapshots"}),"."]}),(0,r.jsxs)(t.p,{children:["If you want to directly retrieve the snapshot from S3, add in the ",(0,r.jsx)(t.a,{href:"/etcd-snapshots/restoring-from-backup/#options-for-rke-etcd-snapshot-restore",children:"S3 options"}),"."]}),(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["As of v0.2.0, the file ",(0,r.jsx)(t.code,{children:"pki.bundle.tar.gz"})," is no longer required for the restore process because the certificates required to restore are preserved within the ",(0,r.jsx)(t.code,{children:"cluster.rkestate"}),"."]})}),(0,r.jsx)(t.h3,{id:"5-confirm-that-cluster-operations-are-restored",children:"5. Confirm that Cluster Operations are Restored"}),(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"rke etcd snapshot-restore"})," command triggers ",(0,r.jsx)(t.code,{children:"rke up"})," using the new ",(0,r.jsx)(t.code,{children:"cluster.yml"}),". Confirm that your Kubernetes cluster is functional by checking the pods on your cluster."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"> kubectl get pods\nNAME                     READY     STATUS    RESTARTS   AGE\nnginx-65899c769f-kcdpr   1/1       Running   0          17s\nnginx-65899c769f-pc45c   1/1       Running   0          17s\nnginx-65899c769f-qkhml   1/1       Running   0          17s\n"})})]}),(0,r.jsxs)(n,{value:"RKE before v0.2.0",children:[(0,r.jsx)(t.p,{children:"This walkthrough will demonstrate how to restore an etcd cluster from a local snapshot with the following steps:"}),(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#take-a-local-snapshot-of-the-cluster-rke-before-v0.2.0",children:"Take a local snapshot of the cluster"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#store-the-snapshot-externally-rke-before-v0.2.0",children:"Store the snapshot externally"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#simulate-a-node-failure-rke-before-v0.2.0",children:"Simulate a node failure"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#remove-the-kubernetes-cluster-and-clean-the-nodes-rke-before-v0.2.0",children:"Remove the Kubernetes cluster and clean the nodes"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#retrieve-the-backup-and-place-it-on-a-new-node-rke-before-v0.2.0",children:"Retrieve the backup and place it on a new node"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#add-a-new-etcd-node-to-the-kubernetes-cluster-rke-before-v0.2.0",children:"Add a new etcd node to the Kubernetes cluster"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#restore-etcd-on-the-new-node-from-the-backup-rke-before-v0.2.0",children:"Restore etcd on the new node from the backup"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#restore-operations-on-the-cluster-rke-before-v0.2.0",children:"Restore Operations on the Cluster"})}),"\n"]}),(0,r.jsx)(t.h3,{id:"example-scenario-of-restoring-from-a-local-snapshot",children:"Example Scenario of restoring from a Local Snapshot"}),(0,r.jsx)(t.p,{children:"In this example, the Kubernetes cluster was deployed on two AWS nodes."}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Name"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"IP"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Role"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"node1"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"10.0.0.1"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"[controlplane, worker]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"node2"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"10.0.0.2"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"[etcd]"})]})]})]}),(0,r.jsx)("a",{id:"take-a-local-snapshot-of-the-cluster-rke-before-v0.2.0"}),(0,r.jsx)(t.h3,{id:"1-take-a-local-snapshot-of-the-cluster",children:"1. Take a Local Snapshot of the Cluster"}),(0,r.jsx)(t.p,{children:"Back up the Kubernetes cluster by taking a local snapshot:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"$ rke etcd snapshot-save --name snapshot.db --config cluster.yml\n"})}),(0,r.jsx)("a",{id:"store-the-snapshot-externally-rke-before-v0.2.0"}),(0,r.jsx)(t.h3,{id:"2-store-the-snapshot-externally",children:"2. Store the Snapshot Externally"}),(0,r.jsxs)(t.p,{children:["After taking the etcd snapshot on ",(0,r.jsx)(t.code,{children:"node2"}),", we recommend saving this backup in a persistent place. One of the options is to save the backup and ",(0,r.jsx)(t.code,{children:"pki.bundle.tar.gz"})," file on an S3 bucket or tape backup."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"# If you're using an AWS host and have the ability to connect to S3\nroot@node2:~# s3cmd mb s3://rke-etcd-backup\nroot@node2:~# s3cmd \\\n  /opt/rke/etcd-snapshots/snapshot.db \\\n  /opt/rke/etcd-snapshots/pki.bundle.tar.gz \\\n  s3://rke-etcd-backup/\n"})}),(0,r.jsx)("a",{id:"simulate-a-node-failure-rke-before-v0.2.0"}),(0,r.jsx)(t.h3,{id:"3-simulate-a-node-failure",children:"3. Simulate a Node Failure"}),(0,r.jsxs)(t.p,{children:["To simulate the failure, let's power down ",(0,r.jsx)(t.code,{children:"node2"}),"."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"root@node2:~# poweroff\n"})}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Name"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"IP"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Role"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"node1"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"10.0.0.1"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"[controlplane, worker]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.del,{children:"node2"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.del,{children:"10.0.0.2"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.del,{children:"[etcd]"})})]})]})]}),(0,r.jsx)("a",{id:"remove-the-kubernetes-cluster-and-clean-the-nodes-rke-before-v0.2.0"}),(0,r.jsx)(t.h3,{id:"4-remove-the-kubernetes-cluster-and-clean-the-nodes",children:"4. Remove the Kubernetes Cluster and Clean the Nodes"}),(0,r.jsx)(t.p,{children:"The following command removes your cluster and cleans the nodes so that the cluster can be restored without any conflicts:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"rke remove --config rancher-cluster.yml\n"})}),(0,r.jsx)("a",{id:"retrieve-the-backup-and-place-it-on-a-new-node-rke-before-v0.2.0"}),(0,r.jsx)(t.h3,{id:"5-retrieve-the-backup-and-place-it-on-a-new-node",children:"5. Retrieve the Backup and Place it On a New Node"}),(0,r.jsxs)(t.p,{children:["Before restoring etcd and running ",(0,r.jsx)(t.code,{children:"rke up"}),", we need to retrieve the backup saved on S3 to a new node, e.g. ",(0,r.jsx)(t.code,{children:"node3"}),"."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"# Make a Directory\nroot@node3:~# mkdir -p /opt/rke/etcdbackup\n\n# Get the Backup from S3\nroot@node3:~# s3cmd get \\\n  s3://rke-etcd-backup/snapshot.db \\\n  /opt/rke/etcd-snapshots/snapshot.db\n\n# Get the pki bundle from S3\nroot@node3:~# s3cmd get \\\n  s3://rke-etcd-backup/pki.bundle.tar.gz \\\n  /opt/rke/etcd-snapshots/pki.bundle.tar.gz\n"})}),(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["If you had multiple etcd nodes, you would have to manually sync the snapshot and ",(0,r.jsx)(t.code,{children:"pki.bundle.tar.gz"})," across all of the etcd nodes in the cluster."]})}),(0,r.jsx)("a",{id:"add-a-new-etcd-node-to-the-kubernetes-cluster-rke-before-v0.2.0"}),(0,r.jsx)(t.h3,{id:"6-add-a-new-etcd-node-to-the-kubernetes-cluster",children:"6. Add a New etcd Node to the Kubernetes Cluster"}),(0,r.jsxs)(t.p,{children:["Before updating and restoring etcd, you will need to add the new node into the Kubernetes cluster with the ",(0,r.jsx)(t.code,{children:"etcd"})," role. In the ",(0,r.jsx)(t.code,{children:"cluster.yml"}),", comment out the old node and add in the new node. `"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"nodes:\n    - address: 10.0.0.1\n      hostname_override: node1\n      user: ubuntu\n      role:\n        - controlplane\n        - worker\n#    - address: 10.0.0.2\n#      hostname_override: node2\n#      user: ubuntu\n#      role:\n#       - etcd\n    - address: 10.0.0.3\n      hostname_override: node3\n      user: ubuntu\n      role:\n        - etcd\n"})}),(0,r.jsx)("a",{id:"restore-etcd-on-the-new-node-from-the-backup-rke-before-v0.2.0"}),(0,r.jsx)(t.h3,{id:"7-restore-etcd-on-the-new-node-from-the-backup",children:"7. Restore etcd on the New Node from the Backup"}),(0,r.jsxs)(t.p,{children:["After the new node is added to the ",(0,r.jsx)(t.code,{children:"cluster.yml"}),", run the ",(0,r.jsx)(t.code,{children:"rke etcd snapshot-restore"})," command to launch ",(0,r.jsx)(t.code,{children:"etcd"})," from the backup:"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"$ rke etcd snapshot-restore --name snapshot.db --config cluster.yml\n"})}),(0,r.jsxs)(t.p,{children:["The snapshot and ",(0,r.jsx)(t.code,{children:"pki.bundle.tar.gz"})," file are expected to be saved at ",(0,r.jsx)(t.code,{children:"/opt/rke/etcd-snapshots"})," on each etcd node."]}),(0,r.jsx)("a",{id:"restore-operations-on-the-cluster-rke-before-v0.2.0"}),(0,r.jsx)(t.h3,{id:"8-restore-operations-on-the-cluster",children:"8. Restore Operations on the Cluster"}),(0,r.jsxs)(t.p,{children:["Finally, we need to restore the operations on the cluster. We will make the Kubernetes API point to the new ",(0,r.jsx)(t.code,{children:"etcd"})," by running ",(0,r.jsx)(t.code,{children:"rke up"})," again using the new ",(0,r.jsx)(t.code,{children:"cluster.yml"}),"."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"$ rke up --config cluster.yml\n"})}),(0,r.jsx)(t.p,{children:"Confirm that your Kubernetes cluster is functional by checking the pods on your cluster."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"> kubectl get pods\nNAME                     READY     STATUS    RESTARTS   AGE\nnginx-65899c769f-kcdpr   1/1       Running   0          17s\nnginx-65899c769f-pc45c   1/1       Running   0          17s\nnginx-65899c769f-qkhml   1/1       Running   0          17s\n"})})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>d});var r=n(7294);const s={},o=r.createContext(s);function d(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);