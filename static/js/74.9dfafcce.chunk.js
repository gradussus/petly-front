"use strict";(self.webpackChunkpetly_front=self.webpackChunkpetly_front||[]).push([[74],{6074:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var i=t(9439),r=t(2791);var o,d,a,s,c,l,u,p=t.p+"static/media/found.bfca6fcedc5cfe6513c08fbd070244cf.svg",f=t(5705),h=t(6727),x=t(3949),m=t(168),g=t(7691),b=g.ZP.button(o||(o=(0,m.Z)(["\nposition: absolute;\ntext-align: center;\nright: 0;\n\nwidth: 40px;\nheight: 40px;\nborder-radius: 50%;\nborder: ",";\nbackground-color: ",";\n\n"])),(function(n){return n.theme.borders.none}),(function(n){return n.theme.colors.white})),j=(0,g.ZP)(f.gN)(d||(d=(0,m.Z)(["\n/* position: relative; */\nwidth: 280px;\npadding: 9px 12px;\nborder: ",";\nborder-radius: 20px;\nmargin-left: auto;\nmargin-right: auto;\n@media screen  and (","){\n    width: 608px;\npadding: 8px 20px;\n&::placeholder{\n   font-weight: ",";\nfont-size: ",";\nline-height: ",";\n}\n}\n@media screen  and (","){\n    font-weight: ",";\nfont-size: ",";\nline-height: ",";\n}\n\n"])),(function(n){return n.theme.borders.none}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.fontWeights.middle}),(function(n){return n.theme.fontSizes.mx}),(function(n){return n.theme.lineHeights.heading}),(function(n){return n.theme.media.desktop}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.ml}),(function(n){return n.theme.lineHeights.heading})),v=(0,g.ZP)(f.l0)(a||(a=(0,m.Z)(["\nposition: relative;\ndisplay: flex;\nmargin: 28px 0px;\njustify-content: center;\n\n"]))),w=(g.ZP.label(s||(s=(0,m.Z)(["\ndisplay: flex;\n    justify-content: center;\n    align-items: center;\n\n"]))),t(3329)),Z=h.Ry().shape({namePets:h.Z_().min(3,"Too Short!").max(10,"Too Long!").required("Required")}),k=function(n){var e=n.handleFoundPets,t=(0,r.useState)(""),o=(0,i.Z)(t,2),d=o[0],a=o[1];e((function(){return d}));return(0,w.jsx)(f.J9,{initialValues:{namePets:""},onSubmit:function(n,e){var t=e.resetForm;a(n),t(),console.log("kindPets",d)},validationSchema:Z,children:(0,w.jsx)(v,{children:(0,w.jsxs)(x.__,{children:[(0,w.jsx)(j,{placeholder:"Search",type:"text",name:"namePets"}),(0,w.jsx)(f.Bc,{name:"namePets"}),(0,w.jsx)(b,{type:"submit",children:(0,w.jsx)(x.o2,{src:p,alt:"found"})})]})})})},P=t(1607),y=t(1087),C=g.ZP.div(c||(c=(0,m.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  /* @media screen and (",") {\n    display: grid;\n    grid-template-columns: 1fr 80px;\n  } */\n"])),P.r.media.mobile),S={NoticesCategoriesNavLink:(0,g.ZP)(y.OL)(l||(l=(0,m.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  text-align: center;\n  letter-spacing: 0.04em;\n  color: ",";\n  @media screen and (",") {\n    font-size: ",";\n    line-height: 1.357;\n    padding: 8px 28px;\n  }\n  font-size: 20px;\n  line-height: 1.35;\n  padding: 10px 28px;\n  background-color: ",";\n  border: 2px solid ",";\n  border-radius: 40px;\n  transition: background-color 200ms, color 200ms;\n  &:hover,\n  &:focus, &.active {\n    background-color: ",";\n    color: ",";\n  }\n  cursor: pointer;\n"])),P.r.fonts.manrope,P.r.fontWeights.middle,P.r.colors.primeText,P.r.media.mobile,P.r.fontSizes.s,P.r.colors.white,P.r.colors.accent,P.r.colors.accent,P.r.colors.white),Container:C,ContainerBtn:g.ZP.div(u||(u=(0,m.Z)(["\n @media screen and (",") {\n    display: flex;\n    flex-wrap: wrap;\n    grid-column: 1;\n  }\n\n"])),P.r.media.mobile)},z=t(7689);var F=t.p+"static/media/cross2.aa39fd889d4f7c9c15b186d5d0949541.svg",T=function(n){n.onChangeModal;return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(x.wP,{children:[(0,w.jsx)(x.P,{children:"Add pet"})," ",(0,w.jsxs)(x.ow,{type:"button",children:[(0,w.jsx)(x.Ei,{src:F,alt:"Cross"}),(0,w.jsx)(x.Dr,{children:"Add pet"})]})]})})},N=S.NoticesCategoriesNavLink,_=S.Container;var L,H,W=function(n){var e=n.onTypeChanged,t=(0,z.TH)().pathname;return(0,r.useEffect)((function(){t.includes("sell")?e("sell"):t.includes("lost-found")?e("lost-found"):t.includes("for-free")?e("for-free"):t.includes("own")?e("own"):t.includes("favorite")&&e("favorite")})),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(_,{children:[(0,w.jsx)(N,{to:"sell",onClick:function(){return e("sell")},children:"sell"}),(0,w.jsx)(N,{to:"lost-found",onClick:function(){return e("lost-found")},children:"lost/found"}),(0,w.jsx)(N,{to:"for-free",onClick:function(){return e("for-free")},children:"in good hands"}),(0,w.jsx)(N,{onClick:function(){return e("own")},children:"own"}),(0,w.jsx)(N,{onClick:function(){return e("favorite")},children:"favorite"})]}),(0,w.jsx)(T,{})]})},q=t(9738),A={Section:g.ZP.section(L||(L=(0,m.Z)(["\n  background-color: ",";\n  height: auto;\n  padding-top: 42px ;\n  padding-bottom: 100px;\n  \n  @media screen and (",") {\n    padding-top: 90px;\n  }\n  @media screen and (",") {\n    padding-top: 60px;\n    padding-bottom: 200px;\n  }\n"])),P.r.colors.background,P.r.media.tablet,P.r.media.desktop),Container:g.ZP.div(H||(H=(0,m.Z)(["\n  margin: 0 auto;\n \n  padding: 0 20px;\n    /* width: 320px; */\n  @media screen and (min-width: 768px) {\n    display: grid; \n    gap: 12px;\n    grid-template-columns: 1fr 130px;\n    padding: 0 32px;\n    width: 768px;\n  }\n  @media screen and (",") {\n   \n    gap: 12px;\n    \n    padding: 0 16px;\n    width: 1280px;\n  }\n"])),P.r.media.desktop)},B=A.Section,D=A.Container,E=function(){var n=(0,r.useState)(""),e=(0,i.Z)(n,2),t=e[0],o=e[1],d=(0,r.useState)(""),a=(0,i.Z)(d,2),s=a[0],c=a[1];console.log("foundPets",t);return(0,w.jsxs)(B,{children:[(0,w.jsx)(x.Dx,{children:"Find your favorite pet"}),(0,w.jsx)(k,{handleFoundPets:function(n){return o(n)}}),(0,w.jsx)(D,{children:(0,w.jsx)(W,{onTypeChanged:function(n){c(n)}})}),(0,w.jsx)(q.default,{type:s,foundPets:t})]})}}}]);
//# sourceMappingURL=74.9dfafcce.chunk.js.map