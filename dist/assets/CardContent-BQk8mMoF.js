import{g as e,a as f,s as n,r as P,u as R,_ as S,b as r,c as h,d as w,j as _,e as b}from"./index-9L7l3RGH.js";const j=e("MuiCardOverflow",["root","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid"]);function N(o){return f("MuiCardContent",o)}e("MuiCardContent",["root"]);const U=["className","component","children","orientation","slots","slotProps"],M=()=>b({root:["root"]},N,{}),z=n("div")(({ownerState:o})=>({display:"flex",flexDirection:o.orientation==="horizontal"?"row":"column",flex:9999,zIndex:1,columnGap:"var(--Card-padding)",rowGap:"max(2px, calc(0.1875 * var(--Card-padding)))",padding:"var(--unstable_padding)",[`.${j.root} > &`]:{"--unstable_padding":"calc(var(--Card-padding) * 0.75) 0px"}})),D=n(z,{name:"JoyCardContent",slot:"Root",overridesResolver:(o,t)=>t.root})({}),G=P.forwardRef(function(t,l){const s=R({props:t,name:"JoyCardContent"}),{className:i,component:a="div",children:c,orientation:d="vertical",slots:p={},slotProps:C={}}=s,u=S(s,U),m=r({},u,{component:a,slots:p,slotProps:C}),x=r({},s,{component:a,orientation:d}),v=M(),[g,y]=h("root",{ref:l,className:w(v.root,i),elementType:D,externalForwardedProps:m,ownerState:x});return _.jsx(g,r({},y,{children:c}))});export{G as C};
