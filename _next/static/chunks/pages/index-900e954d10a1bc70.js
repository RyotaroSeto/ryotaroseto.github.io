(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6926:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(4625)}])},4625:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return pages}});var r=i(1527),a=i(239),t=i(959),l=i(4308),n=i(1115),m=i.n(n);let c=(0,t.memo)(e=>{let{href:s,external:i,children:a,...t}=e;return i?(0,r.jsx)(l.e,{href:s,target:"_blank",rel:"noopener noreferrer",...t,children:a}):(0,r.jsx)(m(),{href:s,children:a})});c.displayName="Link";var o=i(3350),g=i(5724);let h=(0,t.memo)(e=>{let{socials:s}=e;return(0,r.jsx)(o.Z,{position:"center",children:Object.entries(s).map(e=>{let[,s]=e;return(0,r.jsx)(c,{href:s.url,external:!0,children:(0,r.jsx)(g.E,{src:s.imageSrc,width:40,height:40,alt:s.name})},s.name)})})});h.displayName="Socials";var u=i(1776),p=i(733),x=i(5851),d=i(9068);let j=(0,t.memo)(e=>{let{user:s}=e;return(0,r.jsxs)(u.x,{children:[(0,r.jsx)(g.E,{sx:{margin:"auto"},src:"/images/profile.png",width:150,height:150,alt:""}),(0,r.jsxs)(p.K,{align:"center",spacing:"sm",children:[(0,r.jsxs)(u.x,{sx:{textAlign:"center"},children:[(0,r.jsx)(x.D,{order:2,weight:"normal",children:s.name}),(0,r.jsx)(d.x,{size:"lg",color:"gray",children:s.tag})]}),(0,r.jsx)(d.x,{sx:{textAlign:"center",whiteSpace:"pre"},children:s.description})]})]})});j.displayName="User";var k=i(8833),f=i(8814);let v=(0,t.forwardRef)((e,s)=>{let{clickable:i,...a}=e,t=(0,k.rZ)();return(0,r.jsx)(f.X,{ref:s,...a,sx:{...i&&{transition:"0.15s","&:hover":{backgroundColor:t.colors.gray[1]}},...a.sx}})});v.displayName="Paper";let buildImageStyle=(e,s)=>{let i=(()=>{switch(s){case"md":return{height:50,maxWidth:"50%"};case"lg":return{height:80,maxWidth:"50%"}}})(),r=(()=>{switch(s){case"md":return{height:60,maxWidth:"60%"};case"lg":return{height:80,maxWidth:"80%"}}})();return{...r,marginBottom:8,[e.fn.smallerThan("sm")]:{...i}}},S=(0,t.memo)(e=>{let{name:s,href:i,src:a,size:t="md"}=e,l=(0,r.jsxs)(v,{clickable:!0,px:"md",py:"sm",sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,r.jsx)(g.E,{styles:e=>({figure:{display:"flex",justifyContent:"center"},imageWrapper:{...buildImageStyle(e,t),display:"flex",justifyContent:"center"}}),fit:"contain",src:a,alt:""}),(0,r.jsx)(d.x,{size:"sm",sx:{whiteSpace:"pre-wrap",textAlign:"center"},children:s})]});return i?(0,r.jsx)(c,{href:i,external:!0,children:l}):l});S.displayName="ImageCard";var w=i(9780);let y=(0,t.memo)(e=>{let{items:s,col:i,size:a="md"}=e;return(0,r.jsx)(w.r,{children:s.map(e=>(0,r.jsx)(w.r.Col,{...i,children:(0,r.jsx)(S,{...e,size:a})},e.name))})});y.displayName="ImageCardList";let b=(0,t.memo)(e=>{let{certifications:s}=e,i=(0,t.useMemo)(()=>s.map(e=>({name:e.name,src:e.imageSrc,href:e.url})),[s]);return(0,r.jsx)(y,{items:i,size:"lg",col:{span:6,sm:3}})});b.displayName="CertificationList";var C=i(5363),N=i(5396),E=i(4434);let _=(0,t.memo)(e=>{let{email:s}=e,i=(0,k.rZ)();return(0,r.jsxs)(p.K,{sx:{alignItems:"center"},children:[(0,r.jsx)(c,{href:"mailto:".concat(s),external:!0,children:(0,r.jsx)(v,{px:"sm",py:"xs",clickable:!0,children:(0,r.jsx)(d.x,{children:(0,r.jsxs)(o.Z,{spacing:"xs",children:[(0,r.jsx)(E.G7V,{}),s]})})})}),(0,r.jsx)(C.q,{value:s,children:e=>{let{copied:s,copy:a}=e;return(0,r.jsx)(N.k,{variant:"subtle",onClick:a,sx:e=>({display:"flex",alignItems:"center",fontSize:e.fontSizes.sm}),children:s?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(E.HhX,{color:i.colors.green[9]}),"コピーしました"]}):"クリップボードにコピー"})}})]})});_.displayName="EmailButton";let z=(0,t.memo)(e=>{let{skills:s}=e,i=(0,t.useMemo)(()=>s.map(e=>({name:e.name,src:e.imageSrc,href:e.url})),[s]);return(0,r.jsx)(y,{items:i,col:{span:6,sm:3}})});z.displayName="SkillList";var K=i(3128);let A=(0,t.memo)(e=>{let{experiences:s}=e;return(0,r.jsx)(K.T,{children:s.map(e=>{var s;return(0,r.jsx)(K.T.Item,{active:!e.to,children:(0,r.jsxs)(v,{px:"md",py:"sm",children:[(0,r.jsx)(d.x,{children:e.title}),(0,r.jsxs)(d.x,{size:"sm",color:"dimmed",children:[e.from," - ",null!==(s=e.to)&&void 0!==s?s:"now"]})]})},e.title)})})});A.displayName="ExperienceTimeline";var I=i(3968),P=i(5726),T=i.n(P);let Z=T()("1996-03-03"),q=T()().diff(Z,"years"),D={user:{name:"Ryotaro Seto",tag:"Developer",description:"日本生まれ日本育ちの ".concat(q," 歳。"),email:"hahahahawaiwai321@gmail.com"},socials:{github:{name:"GitHub",url:"https://github.com/RyotaroSeto",imageSrc:"/images/social/github.svg"},zenn:{name:"Zenn",url:"https://zenn.dev/ryoneko",imageSrc:"/images/social/zenn.svg"}},certifications:[{name:"Certified Kubernetes\nAdministrator\n(CKA)",url:"https://www.credly.com/badges/ec4a76f2-4522-4322-8440-7841e51fbb40/public_url",imageSrc:"/images/certification/cka.png"},{name:"Certified KubernetesApplication Developer\n(CKAD)",url:"https://www.credly.com/earner/earned/badge/71a7c8ec-440e-42e0-ad51-f250dee8a81d",imageSrc:"/images/certification/ckad.png"}],skillGroups:[{name:"Language",skills:[{name:"Go",url:"https://golang.org/",imageSrc:"/images/skill/go.svg"},{name:"TypeScript",url:"https://www.typescriptlang.org/",imageSrc:"/images/skill/typescript.svg"},{name:"Python",url:"https://www.python.org/",imageSrc:"/images/skill/python.svg"},{name:"PHP",url:"https://php.org/",imageSrc:"/images/skill/php.svg"}]},{name:"Framework / Library",skills:[{name:"Gin",url:"https://gin-gonic.com/",imageSrc:"/images/skill/gin.svg"},{name:"gRPC",url:"https://grpc.io/",imageSrc:"/images/skill/grpc.svg"},{name:"Graphql",url:"https://graphql.org/",imageSrc:"/images/skill/graphql.svg"},{name:"Laravel",url:"https://laravel.com/",imageSrc:"/images/skill/laravel.svg"},{name:"React",url:"https://reactjs.org/",imageSrc:"/images/skill/react.svg"},{name:"Next.js",url:"https://nextjs.org/",imageSrc:"/images/skill/nextjs.svg"},{name:"Vue.js",url:"https://ja.vuejs.org/",imageSrc:"/images/skill/vue.svg"},{name:"Nuxt.js",url:"https://v2.nuxt.com/ja/",imageSrc:"/images/skill/nuxt.svg"},{name:"Flask",url:"https://msiz07-flask-docs-ja.readthedocs.io/ja/latest/",imageSrc:"/images/skill/flask.svg"},{name:"Slim",url:"https://www.slimframework.com//",imageSrc:"/images/skill/slim.svg"}]},{name:"Cloud",skills:[{name:"AWS",url:"https://aws.amazon.com/",imageSrc:"/images/skill/aws.svg"}]},{name:"CI / CD",skills:[{name:"GitHub Actions",url:"https://github.co.jp/features/actions",imageSrc:"/images/skill/githubactions.svg"}]},{name:"Other",skills:[{name:"Postgres",url:"https://www.postgresql.org/",imageSrc:"/images/skill/postgres.svg"},{name:"Redis",url:"https://redis.io/",imageSrc:"/images/skill/redis.svg"},{name:"Kafka",url:"https://kafka.apache.org/",imageSrc:"/images/skill/kafka.svg"},{name:"Docker",url:"https://www.docker.com/",imageSrc:"/images/skill/docker.svg"},{name:"Kubernetes",url:"https://kubernetes.io/",imageSrc:"/images/skill/kubernetes.svg"},{name:"Etcd",url:"https://etcd.io/",imageSrc:"/images/skill/etcd.svg"},{name:"K6",url:"https://k6.io/",imageSrc:"/images/skill/k6.svg"}]}],experiences:[{title:"株式会社ラクス SRE課に入社",from:"2022-09"},{title:"ベンチャー企業でフルスタックエンジニア",from:"2021-04",to:"2022-08"},{title:"未経験で SES 企業に入社",from:"2019-05",to:"2021-03"}]};var G=i(6566),L=i(2386),pages=()=>{let e=(0,a.useRouter)(),s=(0,t.useMemo)(()=>{let s=e.query.tab;return"about"===s?s:"about"},[e.query.tab]),i=(0,t.useCallback)(s=>{e.replace({query:{tab:s}},void 0,{scroll:!1})},[e]);return(0,r.jsxs)(u.x,{children:[(0,r.jsxs)(p.K,{spacing:"lg",mb:"md",children:[(0,r.jsx)(j,{user:D.user}),(0,r.jsx)(h,{socials:D.socials})]}),(0,r.jsxs)(G.m,{value:s,onTabChange:i,children:[(0,r.jsx)(G.m.List,{position:"center",sx:e=>({marginBottom:e.spacing.sm}),children:(0,r.jsx)(G.m.Tab,{value:"about",children:"About"})}),(0,r.jsxs)(G.m.Panel,{value:"about",children:[(0,r.jsx)(I.Z,{title:"Skill",children:(0,r.jsx)(p.K,{children:D.skillGroups.map(e=>(0,r.jsxs)(u.x,{children:[(0,r.jsx)(x.D,{order:3,mb:"sm",sx:{textAlign:"center"},children:e.name}),(0,r.jsx)(z,{skills:e.skills})]},e.name))})}),(0,r.jsx)(L.i,{}),(0,r.jsx)(I.Z,{title:"Certification",children:(0,r.jsx)(b,{certifications:D.certifications})}),(0,r.jsx)(L.i,{}),(0,r.jsx)(I.Z,{title:"Experience",sx:{display:"flex",justifyContent:"center"},children:(0,r.jsx)(A,{experiences:D.experiences})})]})]}),(0,r.jsx)(L.i,{}),(0,r.jsx)(I.Z,{title:"Contact",children:(0,r.jsxs)(p.K,{children:[(0,r.jsx)(h,{socials:D.socials}),(0,r.jsx)(_,{email:D.user.email})]})})]})}}},function(e){e.O(0,[165,289,774,888,179],function(){return e(e.s=6926)}),_N_E=e.O()}]);