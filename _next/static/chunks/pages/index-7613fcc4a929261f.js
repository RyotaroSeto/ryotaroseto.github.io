(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9800:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(3630)}])},3630:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return W}});var r=i(1527),t=i(1616),a=i(959),l=i(5915),n=i(6114),m=i.n(n);let c=(0,a.memo)(e=>{let{href:s,external:i,children:t,...a}=e;return i?(0,r.jsx)(l.e,{href:s,target:"_blank",rel:"noopener noreferrer",...a,children:t}):(0,r.jsx)(m(),{href:s,children:t})});c.displayName="Link";var o=i(8088),g=i(4612);let h=(0,a.memo)(e=>{let{socials:s}=e;return(0,r.jsx)(o.Z,{position:"center",children:Object.entries(s).map(e=>{let[,s]=e;return(0,r.jsx)(c,{href:s.url,external:!0,children:(0,r.jsx)(g.E,{src:s.imageSrc,width:40,height:40,alt:s.name})},s.name)})})});h.displayName="Socials";var u=i(5151),x=i(9445),d=i(7778),p=i(843);let j=(0,a.memo)(e=>{let{user:s}=e;return(0,r.jsxs)(u.x,{children:[(0,r.jsx)(g.E,{sx:{margin:"auto"},src:"/images/profile.png",width:150,height:150,alt:""}),(0,r.jsxs)(x.K,{align:"center",spacing:"sm",children:[(0,r.jsxs)(u.x,{sx:{textAlign:"center"},children:[(0,r.jsx)(d.D,{order:2,weight:"normal",children:s.name}),(0,r.jsx)(p.x,{size:"lg",color:"gray",children:s.tag})]}),(0,r.jsx)(p.x,{sx:{textAlign:"center",whiteSpace:"pre"},children:s.description})]})]})});j.displayName="User";var f=i(9751),k=i(7429);let v=(0,a.forwardRef)((e,s)=>{let{clickable:i,...t}=e,a=(0,f.rZ)();return(0,r.jsx)(k.X,{ref:s,...t,sx:{...i&&{transition:"0.15s","&:hover":{backgroundColor:a.colors.gray[1]}},...t.sx}})});v.displayName="Paper";let w=(e,s)=>{let i=(()=>{switch(s){case"md":return{height:50,maxWidth:"50%"};case"lg":return{height:80,maxWidth:"50%"}}})(),r=(()=>{switch(s){case"md":return{height:60,maxWidth:"60%"};case"lg":return{height:80,maxWidth:"80%"}}})();return{...r,marginBottom:8,[e.fn.smallerThan("sm")]:{...i}}},y=(0,a.memo)(e=>{let{name:s,href:i,src:t,size:a="md"}=e,l=(0,r.jsxs)(v,{clickable:!0,px:"md",py:"sm",sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,r.jsx)(g.E,{styles:e=>({figure:{display:"flex",justifyContent:"center"},imageWrapper:{...w(e,a),display:"flex",justifyContent:"center"}}),fit:"contain",src:t,alt:""}),(0,r.jsx)(p.x,{size:"sm",sx:{whiteSpace:"pre-wrap",textAlign:"center"},children:s})]});return i?(0,r.jsx)(c,{href:i,external:!0,children:l}):l});y.displayName="ImageCard";var S=i(2970);let b=(0,a.memo)(e=>{let{items:s,col:i,size:t="md"}=e;return(0,r.jsx)(S.r,{children:s.map(e=>(0,r.jsx)(S.r.Col,{...i,children:(0,r.jsx)(y,{...e,size:t})},e.name))})});b.displayName="ImageCardList";let C=(0,a.memo)(e=>{let{certifications:s}=e,i=(0,a.useMemo)(()=>s.map(e=>({name:e.name,src:e.imageSrc,href:e.url})),[s]);return(0,r.jsx)(b,{items:i,size:"lg",col:{span:6,sm:3}})});C.displayName="CertificationList";var N=i(7223),_=i(4970),E=i(4434);let z=(0,a.memo)(e=>{let{email:s}=e,i=(0,f.rZ)();return(0,r.jsxs)(x.K,{sx:{alignItems:"center"},children:[(0,r.jsx)(c,{href:"mailto:".concat(s),external:!0,children:(0,r.jsx)(v,{px:"sm",py:"xs",clickable:!0,children:(0,r.jsx)(p.x,{children:(0,r.jsxs)(o.Z,{spacing:"xs",children:[(0,r.jsx)(E.G7V,{}),s]})})})}),(0,r.jsx)(N.q,{value:s,children:e=>{let{copied:s,copy:t}=e;return(0,r.jsx)(_.k,{variant:"subtle",onClick:t,sx:e=>({display:"flex",alignItems:"center",fontSize:e.fontSizes.sm}),children:s?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(E.HhX,{color:i.colors.green[9]}),"コピーしました"]}):"クリップボードにコピー"})}})]})});z.displayName="EmailButton";let A=(0,a.memo)(e=>{let{skills:s}=e,i=(0,a.useMemo)(()=>s.map(e=>({name:e.name,src:e.imageSrc,href:e.url})),[s]);return(0,r.jsx)(b,{items:i,col:{span:6,sm:3}})});A.displayName="SkillList";var K=i(5066);let T=(0,a.memo)(e=>{var s;let{experiences:i}=e;return(0,r.jsx)(K.T,{children:i.map(e=>(0,r.jsx)(K.T.Item,{active:!e.to,children:(0,r.jsxs)(v,{px:"md",py:"sm",children:[(0,r.jsx)(p.x,{children:e.title}),(0,r.jsxs)(p.x,{size:"sm",color:"dimmed",children:[e.from," - ",null!==(s=e.to)&&void 0!==s?s:"now"]})]})},e.title))})});T.displayName="ExperienceTimeline";var Z=i(5469),D=i(7006),G=i.n(D);let L=G()("1996-03-03"),q=G()().diff(L,"years"),I={user:{name:"Ryotaro Seto",tag:"Developer",description:"日本生まれ日本育ちの ".concat(q," 歳。"),email:"hahahahawaiwai321@gmail.com"},socials:{github:{name:"GitHub",url:"https://github.com/RyotaroSeto",imageSrc:"/images/social/github.svg"},zenn:{name:"Zenn",url:"https://zenn.dev/ryoneko",imageSrc:"/images/social/zenn.svg"}},certifications:[{name:"Certified Kubernetes\nAdministrator\n(CKA)",url:"https://www.credly.com/badges/ec4a76f2-4522-4322-8440-7841e51fbb40/public_url",imageSrc:"/images/certification/cka.png"},{name:"Certified KubernetesApplication Developer\n(CKAD)",url:"https://www.credly.com/earner/earned/badge/71a7c8ec-440e-42e0-ad51-f250dee8a81d",imageSrc:"/images/certification/ckad.png"}],skillGroups:[{name:"Language",skills:[{name:"Go",url:"https://golang.org/",imageSrc:"/images/skill/go.svg"},{name:"TypeScript",url:"https://www.typescriptlang.org/",imageSrc:"/images/skill/typescript.svg"},{name:"Python",url:"https://www.python.org/",imageSrc:"/images/skill/python.svg"},{name:"PHP",url:"https://php.org/",imageSrc:"/images/skill/php.svg"}]},{name:"Framework / Library",skills:[{name:"Gin",url:"https://gin-gonic.com/",imageSrc:"/images/skill/gin.svg"},{name:"Laravel",url:"https://laravel.com/",imageSrc:"/images/skill/laravel.svg"},{name:"React",url:"https://reactjs.org/",imageSrc:"/images/skill/react.svg"},{name:"Next.js",url:"https://nextjs.org/",imageSrc:"/images/skill/nextjs.svg"},{name:"Vue.js",url:"https://ja.vuejs.org/",imageSrc:"/images/skill/vue.svg"},{name:"Nuxt.js",url:"https://v2.nuxt.com/ja/",imageSrc:"/images/skill/nuxt.svg"},{name:"Flask",url:"https://msiz07-flask-docs-ja.readthedocs.io/ja/latest/",imageSrc:"/images/skill/flask.svg"},{name:"Slim",url:"https://www.slimframework.com//",imageSrc:"/images/skill/slim.svg"}]},{name:"Cloud",skills:[{name:"AWS",url:"https://aws.amazon.com/",imageSrc:"/images/skill/aws.svg"}]},{name:"CI / CD",skills:[{name:"GitHub Actions",url:"https://github.co.jp/features/actions",imageSrc:"/images/skill/githubactions.svg"}]},{name:"Other",skills:[{name:"Docker",url:"https://www.docker.com/",imageSrc:"/images/skill/docker.svg"},{name:"Kubernetes",url:"https://kubernetes.io/",imageSrc:"/images/skill/kubernetes.svg"},{name:"Graphql",url:"https://graphql.org/",imageSrc:"/images/skill/graphql.svg"},{name:"K6",url:"https://k6.io/",imageSrc:"/images/skill/k6.svg"}]}],experiences:[{title:"株式会社ラクス SRE課に入社",from:"2022-09"},{title:"ベンチャー企業でフルスタックエンジニア",from:"2021-04",to:"2022-08"},{title:"未経験で SES 企業に入社",from:"2019-05",to:"2021-03"}]};var P=i(8323),R=i(3555),W=()=>{let e=(0,t.useRouter)(),s=(0,a.useMemo)(()=>{let s=e.query.tab;return"about"===s?s:"about"},[e.query.tab]),i=(0,a.useCallback)(s=>{e.replace({query:{tab:s}},void 0,{scroll:!1})},[e]);return(0,r.jsxs)(u.x,{children:[(0,r.jsxs)(x.K,{spacing:"lg",mb:"md",children:[(0,r.jsx)(j,{user:I.user}),(0,r.jsx)(h,{socials:I.socials})]}),(0,r.jsxs)(P.m,{value:s,onTabChange:i,children:[(0,r.jsx)(P.m.List,{position:"center",sx:e=>({marginBottom:e.spacing.sm}),children:(0,r.jsx)(P.m.Tab,{value:"about",children:"About"})}),(0,r.jsxs)(P.m.Panel,{value:"about",children:[(0,r.jsx)(Z.Z,{title:"Skill",children:(0,r.jsx)(x.K,{children:I.skillGroups.map(e=>(0,r.jsxs)(u.x,{children:[(0,r.jsx)(d.D,{order:3,mb:"sm",sx:{textAlign:"center"},children:e.name}),(0,r.jsx)(A,{skills:e.skills})]},e.name))})}),(0,r.jsx)(R.i,{}),(0,r.jsx)(Z.Z,{title:"Certification",children:(0,r.jsx)(C,{certifications:I.certifications})}),(0,r.jsx)(R.i,{}),(0,r.jsx)(Z.Z,{title:"Experience",sx:{display:"flex",justifyContent:"center"},children:(0,r.jsx)(T,{experiences:I.experiences})})]})]}),(0,r.jsx)(R.i,{}),(0,r.jsx)(Z.Z,{title:"Contact",children:(0,r.jsxs)(x.K,{children:[(0,r.jsx)(h,{socials:I.socials}),(0,r.jsx)(z,{email:I.user.email})]})})]})}}},function(e){e.O(0,[165,437,774,888,179],function(){return e(e.s=9800)}),_N_E=e.O()}]);