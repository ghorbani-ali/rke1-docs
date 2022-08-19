"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[3092],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},x={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,p=u["".concat(l,".").concat(h)]||u[h]||x[h]||i;return n?r.createElement(p,s(s({ref:t},d),{},{components:n})):r.createElement(p,s({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3814:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return x}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),s=["components"],a={title:"SSH Connectivity Errors",weight:100,aliases:["/rancher/v2.x/en/installation/ha/rke-add-on/troubleshooting/ssh-tunneling/"]},l=void 0,c={unversionedId:"troubleshooting/ssh-connectivity-errors/ssh-connectivity-errors",id:"troubleshooting/ssh-connectivity-errors/ssh-connectivity-errors",title:"SSH Connectivity Errors",description:"Failed to set up SSH tunneling for host [xxx.xxx.xxx.xxx]: Can't retrieve Docker Info",source:"@site/docs/troubleshooting/ssh-connectivity-errors/ssh-connectivity-errors.md",sourceDirName:"troubleshooting/ssh-connectivity-errors",slug:"/troubleshooting/ssh-connectivity-errors/",permalink:"/troubleshooting/ssh-connectivity-errors/",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/troubleshooting/ssh-connectivity-errors/ssh-connectivity-errors.md",tags:[],version:"current",lastUpdatedAt:1660918540,formattedLastUpdatedAt:"8/19/2022",frontMatter:{title:"SSH Connectivity Errors",weight:100,aliases:["/rancher/v2.x/en/installation/ha/rke-add-on/troubleshooting/ssh-tunneling/"]},sidebar:"mySidebar",previous:{title:"Troubleshooting",permalink:"/troubleshooting/"},next:{title:"Provisioning Errors",permalink:"/troubleshooting/provisioning-errors/"}},d={},x=[{value:"Failed to set up SSH tunneling for host xxx.xxx.xxx.xxx: Can&#39;t retrieve Docker Info",id:"failed-to-set-up-ssh-tunneling-for-host-xxxxxxxxxxxx-cant-retrieve-docker-info",level:3},{value:"Failed to dial to /var/run/docker.sock: ssh: rejected: administratively prohibited (open failed)",id:"failed-to-dial-to-varrundockersock-ssh-rejected-administratively-prohibited-open-failed",level:4},{value:"Failed to dial ssh using address xxx.xxx.xxx.xxx:xx: Error configuring SSH: ssh: no key found",id:"failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-error-configuring-ssh-ssh-no-key-found",level:4},{value:"Failed to dial ssh using address xxx.xxx.xxx.xxx:xx: ssh: handshake failed: ssh: unable to authenticate, attempted methods none publickey, no supported methods remain",id:"failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-ssh-handshake-failed-ssh-unable-to-authenticate-attempted-methods-none-publickey-no-supported-methods-remain",level:4},{value:"Failed to dial ssh using address xxx.xxx.xxx.xxx:xx: Error configuring SSH: ssh: cannot decode encrypted private keys",id:"failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-error-configuring-ssh-ssh-cannot-decode-encrypted-private-keys",level:4},{value:"Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?",id:"cannot-connect-to-the-docker-daemon-at-unixvarrundockersock-is-the-docker-daemon-running",level:4}],u={toc:x};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"failed-to-set-up-ssh-tunneling-for-host-xxxxxxxxxxxx-cant-retrieve-docker-info"},"Failed to set up SSH tunneling for host ","[xxx.xxx.xxx.xxx]",": Can't retrieve Docker Info"),(0,i.kt)("h4",{id:"failed-to-dial-to-varrundockersock-ssh-rejected-administratively-prohibited-open-failed"},"Failed to dial to /var/run/docker.sock: ssh: rejected: administratively prohibited (open failed)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"User specified to connect with does not have permission to access the Docker socket. This can be checked by logging into the host and running the command ",(0,i.kt)("inlineCode",{parentName:"li"},"docker ps"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ssh -i ssh_privatekey_file user@server\nuser@server$ docker ps\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES\n")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/linux/linux-postinstall/#manage-docker-as-a-non-root-user"},"Manage Docker as a non-root user")," how to set this up properly."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When using RedHat/CentOS as operating system, you cannot use the user ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," to connect to the nodes because of ",(0,i.kt)("a",{parentName:"p",href:"https://bugzilla.redhat.com/show_bug.cgi?id=1527565"},"Bugzilla #1527565"),". You will need to add a separate user and configure it to access the Docker socket. See ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/os/#red-hat-enterprise-linux-rhel-oracle-enterprise-linux-oel-centos"},"RKE OS Requirements")," for more on how to set this up.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"SSH server version is not version 6.7 or higher. This is needed for socket forwarding to work, which is used to connect to the Docker socket over SSH. This can be checked using ",(0,i.kt)("inlineCode",{parentName:"p"},"sshd -V")," on the host you are connecting to, or using netcat:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ nc xxx.xxx.xxx.xxx 22\nSSH-2.0-OpenSSH_6.6.1p1 Ubuntu-2ubuntu2.10\n")),(0,i.kt)("h4",{id:"failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-error-configuring-ssh-ssh-no-key-found"},"Failed to dial ssh using address ","[xxx.xxx.xxx.xxx:xx]",": Error configuring SSH: ssh: no key found"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The key file specified as ",(0,i.kt)("inlineCode",{parentName:"li"},"ssh_key_path")," cannot be accessed. Make sure that you specified the private key file (not the public key, ",(0,i.kt)("inlineCode",{parentName:"li"},".pub"),"), and that the user that is running the ",(0,i.kt)("inlineCode",{parentName:"li"},"rke")," command can access the private key file."),(0,i.kt)("li",{parentName:"ul"},"The key file specified as ",(0,i.kt)("inlineCode",{parentName:"li"},"ssh_key_path")," is malformed. Check if the key is valid by running ",(0,i.kt)("inlineCode",{parentName:"li"},"ssh-keygen -y -e -f private_key_file"),". This will print the public key of the private key, which will fail if the private key file is not valid.")),(0,i.kt)("h4",{id:"failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-ssh-handshake-failed-ssh-unable-to-authenticate-attempted-methods-none-publickey-no-supported-methods-remain"},"Failed to dial ssh using address ","[xxx.xxx.xxx.xxx:xx]",": ssh: handshake failed: ssh: unable to authenticate, attempted methods ","[none publickey]",", no supported methods remain"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The key file specified as ",(0,i.kt)("inlineCode",{parentName:"li"},"ssh_key_path")," is not correct for accessing the node. Double-check if you specified the correct ",(0,i.kt)("inlineCode",{parentName:"li"},"ssh_key_path")," for the node and if you specified the correct user to connect with.")),(0,i.kt)("h4",{id:"failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-error-configuring-ssh-ssh-cannot-decode-encrypted-private-keys"},"Failed to dial ssh using address ","[xxx.xxx.xxx.xxx:xx]",": Error configuring SSH: ssh: cannot decode encrypted private keys"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you want to use encrypted private keys, you should use ",(0,i.kt)("inlineCode",{parentName:"li"},"ssh-agent")," to load your keys with your passphrase. You can configure RKE to use that agent by specifying ",(0,i.kt)("inlineCode",{parentName:"li"},"--ssh-agent-auth")," on the command-line, it will use the ",(0,i.kt)("inlineCode",{parentName:"li"},"SSH_AUTH_SOCK")," environment variable in the environment where the ",(0,i.kt)("inlineCode",{parentName:"li"},"rke")," command is run.")),(0,i.kt)("h4",{id:"cannot-connect-to-the-docker-daemon-at-unixvarrundockersock-is-the-docker-daemon-running"},"Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The node is not reachable on the configured ",(0,i.kt)("inlineCode",{parentName:"li"},"address")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"port"),".")))}h.isMDXComponent=!0}}]);