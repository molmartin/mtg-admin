import{Q as Qe,a as yt,u as lt,b as pt,M as gt,c as wt}from"./MainHeader.12a8eac0.js";import{h as C,c as X,a as d,d as xe,g as N,P as St,e as zt,f as A,n as qt,l as _t,j as ue,p as ge,k as Re,s as we,m as $e,o as Se,q as Ae,r as _,t as Ct,w as T,v as ot,x as kt,y as ve,z as Tt,A as Ee,H as Fe,B as Bt,C as rt,D as ce,E as j,F as Mt,G as Lt,I as $t,J as ze,K as We,L as Et,M as Pt,N as xt,O as At,Q as Ot,R as Oe,S as de,T as Dt,U as L,V as Q,W as De,X as Ht,Y as Vt,Z as Qt,_ as Rt,$ as Ft,u as Pe,a0 as Wt,a1 as jt}from"./index.4c3aec77.js";import{u as ae,a as le,s as je,b as qe,g as It,c as Xt,h as Nt}from"./InputSearch.9cc77d70.js";import"./query.a51d996e.js";const Yt=C("div",{class:"q-space"});var Ut=X({name:"QSpace",setup(){return()=>Yt}}),Kt=X({name:"QList",props:{...ae,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:a}){const u=N(),c=le(e,u.proxy.$q),t=d(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(c.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>C(e.tag,{class:t.value},xe(a.default))}});const He={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Gt=Object.keys(He);He.all=!0;function Ie(e){const a={};for(const u of Gt)e[u]===!0&&(a[u]=!0);return Object.keys(a).length===0?He:(a.horizontal===!0?a.left=a.right=!0:a.left===!0&&a.right===!0&&(a.horizontal=!0),a.vertical===!0?a.up=a.down=!0:a.up===!0&&a.down===!0&&(a.vertical=!0),a.horizontal===!0&&a.vertical===!0&&(a.all=!0),a)}const Jt=["INPUT","TEXTAREA"];function Xe(e,a){return a.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof a.handler=="function"&&Jt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(a.uid)===-1)}function Zt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),St.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function _e(e,a,u){const c=$e(e);let t,o=c.left-a.event.x,i=c.top-a.event.y,l=Math.abs(o),v=Math.abs(i);const m=a.direction;m.horizontal===!0&&m.vertical!==!0?t=o<0?"left":"right":m.horizontal!==!0&&m.vertical===!0?t=i<0?"up":"down":m.up===!0&&i<0?(t="up",l>v&&(m.left===!0&&o<0?t="left":m.right===!0&&o>0&&(t="right"))):m.down===!0&&i>0?(t="down",l>v&&(m.left===!0&&o<0?t="left":m.right===!0&&o>0&&(t="right"))):m.left===!0&&o<0?(t="left",l<v&&(m.up===!0&&i<0?t="up":m.down===!0&&i>0&&(t="down"))):m.right===!0&&o>0&&(t="right",l<v&&(m.up===!0&&i<0?t="up":m.down===!0&&i>0&&(t="down")));let n=!1;if(t===void 0&&u===!1){if(a.event.isFirst===!0||a.event.lastDir===void 0)return{};t=a.event.lastDir,n=!0,t==="left"||t==="right"?(c.left-=o,l=0,o=0):(c.top-=i,v=0,i=0)}return{synthetic:n,payload:{evt:e,touch:a.event.mouse!==!0,mouse:a.event.mouse===!0,position:c,direction:t,isFirst:a.event.isFirst,isFinal:u===!0,duration:Date.now()-a.event.time,distance:{x:l,y:v},offset:{x:o,y:i},delta:{x:c.left-a.event.lastX,y:c.top-a.event.lastY}}}}let ea=0;var te=zt({name:"touch-pan",beforeMount(e,{value:a,modifiers:u}){if(u.mouse!==!0&&A.has.touch!==!0)return;function c(o,i){u.mouse===!0&&i===!0?Ae(o):(u.stop===!0&&we(o),u.prevent===!0&&Re(o))}const t={uid:"qvtp_"+ea++,handler:a,modifiers:u,direction:Ie(u),noop:qt,mouseStart(o){Xe(o,t)&&_t(o)&&(ue(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(o,!0))},touchStart(o){if(Xe(o,t)){const i=o.target;ue(t,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),t.start(o)}},start(o,i){if(A.is.firefox===!0&&ge(e,!0),t.lastEvt=o,i===!0||u.stop===!0){if(t.direction.all!==!0&&(i!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const m=o.type.indexOf("mouse")>-1?new MouseEvent(o.type,o):new TouchEvent(o.type,o);o.defaultPrevented===!0&&Re(m),o.cancelBubble===!0&&we(m),Object.assign(m,{qKeyEvent:o.qKeyEvent,qClickOutside:o.qClickOutside,qAnchorHandled:o.qAnchorHandled,qClonedBy:o.qClonedBy===void 0?[t.uid]:o.qClonedBy.concat(t.uid)}),t.initialEvent={target:o.target,event:m}}we(o)}const{left:l,top:v}=$e(o);t.event={x:l,y:v,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:l,lastY:v}},move(o){if(t.event===void 0)return;const i=$e(o),l=i.left-t.event.x,v=i.top-t.event.y;if(l===0&&v===0)return;t.lastEvt=o;const m=t.event.mouse===!0,n=()=>{c(o,m);let z;u.preserveCursor!==!0&&u.preservecursor!==!0&&(z=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),m===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Zt(),t.styleCleanup=y=>{if(t.styleCleanup=void 0,z!==void 0&&(document.documentElement.style.cursor=z),document.body.classList.remove("non-selectable"),m===!0){const B=()=>{document.body.classList.remove("no-pointer-events--children")};y!==void 0?setTimeout(()=>{B(),y()},50):B()}else y!==void 0&&y()}};if(t.event.detected===!0){t.event.isFirst!==!0&&c(o,t.event.mouse);const{payload:z,synthetic:y}=_e(o,t,!1);z!==void 0&&(t.handler(z)===!1?t.end(o):(t.styleCleanup===void 0&&t.event.isFirst===!0&&n(),t.event.lastX=z.position.left,t.event.lastY=z.position.top,t.event.lastDir=y===!0?void 0:z.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||m===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){n(),t.event.detected=!0,t.move(o);return}const q=Math.abs(l),g=Math.abs(v);q!==g&&(t.direction.horizontal===!0&&q>g||t.direction.vertical===!0&&q<g||t.direction.up===!0&&q<g&&v<0||t.direction.down===!0&&q<g&&v>0||t.direction.left===!0&&q>g&&l<0||t.direction.right===!0&&q>g&&l>0?(t.event.detected=!0,t.move(o)):t.end(o,!0))},end(o,i){if(t.event!==void 0){if(Se(t,"temp"),A.is.firefox===!0&&ge(e,!1),i===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(_e(o===void 0?t.lastEvt:o,t).payload);const{payload:l}=_e(o===void 0?t.lastEvt:o,t,!0),v=()=>{t.handler(l)};t.styleCleanup!==void 0?t.styleCleanup(v):v()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,u.mouse===!0){const o=u.mouseCapture===!0||u.mousecapture===!0?"Capture":"";ue(t,"main",[[e,"mousedown","mouseStart",`passive${o}`]])}A.has.touch===!0&&ue(t,"main",[[e,"touchstart","touchStart",`passive${u.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,a){const u=e.__qtouchpan;u!==void 0&&(a.oldValue!==a.value&&(typeof value!="function"&&u.end(),u.handler=a.value),u.direction=Ie(a.modifiers))},beforeUnmount(e){const a=e.__qtouchpan;a!==void 0&&(a.event!==void 0&&a.end(),Se(a,"main"),Se(a,"temp"),A.is.firefox===!0&&ge(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete e.__qtouchpan)}});function V(e,a,u){return u<=a?a:Math.min(u,Math.max(a,e))}const Ne=["vertical","horizontal"],Ce={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Ye={prevent:!0,mouse:!0,mouseAllDir:!0},Ue=e=>e>=250?50:Math.ceil(e/5);var ta=X({name:"QScrollArea",props:{...ae,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:a,emit:u}){const c=_(!1),t=_(!1),o=_(!1),i={vertical:_(0),horizontal:_(0)},l={vertical:{ref:_(null),position:_(0),size:_(0)},horizontal:{ref:_(null),position:_(0),size:_(0)}},{proxy:v}=N(),m=le(e,v.$q);let n=null,q;const g=_(null),z=d(()=>"q-scrollarea"+(m.value===!0?" q-scrollarea--dark":""));l.vertical.percentage=d(()=>{const s=l.vertical.size.value-i.vertical.value;if(s<=0)return 0;const f=V(l.vertical.position.value/s,0,1);return Math.round(f*1e4)/1e4}),l.vertical.thumbHidden=d(()=>(e.visible===null?o.value:e.visible)!==!0&&c.value===!1&&t.value===!1||l.vertical.size.value<=i.vertical.value+1),l.vertical.thumbStart=d(()=>l.vertical.percentage.value*(i.vertical.value-l.vertical.thumbSize.value)),l.vertical.thumbSize=d(()=>Math.round(V(i.vertical.value*i.vertical.value/l.vertical.size.value,Ue(i.vertical.value),i.vertical.value))),l.vertical.style=d(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${l.vertical.thumbStart.value}px`,height:`${l.vertical.thumbSize.value}px`})),l.vertical.thumbClass=d(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(l.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),l.vertical.barClass=d(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(l.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),l.horizontal.percentage=d(()=>{const s=l.horizontal.size.value-i.horizontal.value;if(s<=0)return 0;const f=V(Math.abs(l.horizontal.position.value)/s,0,1);return Math.round(f*1e4)/1e4}),l.horizontal.thumbHidden=d(()=>(e.visible===null?o.value:e.visible)!==!0&&c.value===!1&&t.value===!1||l.horizontal.size.value<=i.horizontal.value+1),l.horizontal.thumbStart=d(()=>l.horizontal.percentage.value*(i.horizontal.value-l.horizontal.thumbSize.value)),l.horizontal.thumbSize=d(()=>Math.round(V(i.horizontal.value*i.horizontal.value/l.horizontal.size.value,Ue(i.horizontal.value),i.horizontal.value))),l.horizontal.style=d(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[v.$q.lang.rtl===!0?"right":"left"]:`${l.horizontal.thumbStart.value}px`,width:`${l.horizontal.thumbSize.value}px`})),l.horizontal.thumbClass=d(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(l.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),l.horizontal.barClass=d(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(l.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const y=d(()=>l.vertical.thumbHidden.value===!0&&l.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),B=[[te,s=>{oe(s,"vertical")},void 0,{vertical:!0,...Ye}]],k=[[te,s=>{oe(s,"horizontal")},void 0,{horizontal:!0,...Ye}]];function w(){const s={};return Ne.forEach(f=>{const S=l[f];s[f+"Position"]=S.position.value,s[f+"Percentage"]=S.percentage.value,s[f+"Size"]=S.size.value,s[f+"ContainerSize"]=i[f].value}),s}const h=Ct(()=>{const s=w();s.ref=v,u("scroll",s)},0);function p(s,f,S){if(Ne.includes(s)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(s==="vertical"?je:qe)(g.value,f,S)}function R({height:s,width:f}){let S=!1;i.vertical.value!==s&&(i.vertical.value=s,S=!0),i.horizontal.value!==f&&(i.horizontal.value=f,S=!0),S===!0&&x()}function K({position:s}){let f=!1;l.vertical.position.value!==s.top&&(l.vertical.position.value=s.top,f=!0),l.horizontal.position.value!==s.left&&(l.horizontal.position.value=s.left,f=!0),f===!0&&x()}function F({height:s,width:f}){l.horizontal.size.value!==f&&(l.horizontal.size.value=f,x()),l.vertical.size.value!==s&&(l.vertical.size.value=s,x())}function oe(s,f){const S=l[f];if(s.isFirst===!0){if(S.thumbHidden.value===!0)return;q=S.position.value,t.value=!0}else if(t.value!==!0)return;s.isFinal===!0&&(t.value=!1);const $=Ce[f],U=i[f].value,fe=(S.size.value-U)/(U-S.thumbSize.value),me=s.distance[$.dist],ie=q+(s.direction===$.dir?1:-1)*me*fe;G(ie,f)}function re(s,f){const S=l[f];if(S.thumbHidden.value!==!0){const $=s[Ce[f].offset];if($<S.thumbStart.value||$>S.thumbStart.value+S.thumbSize.value){const U=$-S.thumbSize.value/2;G(U/i[f].value*S.size.value,f)}S.ref.value!==null&&S.ref.value.dispatchEvent(new MouseEvent(s.type,s))}}function Y(s){re(s,"vertical")}function P(s){re(s,"horizontal")}function x(){c.value=!0,n!==null&&clearTimeout(n),n=setTimeout(()=>{n=null,c.value=!1},e.delay),e.onScroll!==void 0&&h()}function G(s,f){g.value[Ce[f].scroll]=s}function O(){o.value=!0}function J(){o.value=!1}let W=null;return T(()=>v.$q.lang.rtl,s=>{g.value!==null&&qe(g.value,Math.abs(l.horizontal.position.value)*(s===!0?-1:1))}),ot(()=>{W={top:l.vertical.position.value,left:l.horizontal.position.value}}),kt(()=>{if(W===null)return;const s=g.value;s!==null&&(qe(s,W.left),je(s,W.top))}),ve(h.cancel),Object.assign(v,{getScrollTarget:()=>g.value,getScroll:w,getScrollPosition:()=>({top:l.vertical.position.value,left:l.horizontal.position.value}),getScrollPercentage:()=>({top:l.vertical.percentage.value,left:l.horizontal.percentage.value}),setScrollPosition:p,setScrollPercentage(s,f,S){p(s,f*(l[s].size.value-i[s].value)*(s==="horizontal"&&v.$q.lang.rtl===!0?-1:1),S)}}),()=>C("div",{class:z.value,onMouseenter:O,onMouseleave:J},[C("div",{ref:g,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[C("div",{class:"q-scrollarea__content absolute",style:y.value},Tt(a.default,[C(Qe,{debounce:0,onResize:F})])),C(yt,{axis:"both",onScroll:K})]),C(Qe,{debounce:0,onResize:R}),C("div",{class:l.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:Y}),C("div",{class:l.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:P}),Ee(C("div",{ref:l.vertical.ref,class:l.vertical.thumbClass.value,style:l.vertical.style.value,"aria-hidden":"true"}),B),Ee(C("div",{ref:l.horizontal.ref,class:l.horizontal.thumbClass.value,style:l.horizontal.style.value,"aria-hidden":"true"}),k)])}});function aa(e,a,u){let c;function t(){c!==void 0&&(Fe.remove(c),c=void 0)}return ve(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){c={condition:()=>u.value===!0,handler:a},Fe.add(c)}}}const la={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},oa=["beforeShow","show","beforeHide","hide"];function ra({showing:e,canShow:a,hideOnRouteChange:u,handleShow:c,handleHide:t,processOnMount:o}){const i=N(),{props:l,emit:v,proxy:m}=i;let n;function q(h){e.value===!0?y(h):g(h)}function g(h){if(l.disable===!0||h!==void 0&&h.qAnchorHandled===!0||a!==void 0&&a(h)!==!0)return;const p=l["onUpdate:modelValue"]!==void 0;p===!0&&(v("update:modelValue",!0),n=h,ce(()=>{n===h&&(n=void 0)})),(l.modelValue===null||p===!1)&&z(h)}function z(h){e.value!==!0&&(e.value=!0,v("beforeShow",h),c!==void 0?c(h):v("show",h))}function y(h){if(l.disable===!0)return;const p=l["onUpdate:modelValue"]!==void 0;p===!0&&(v("update:modelValue",!1),n=h,ce(()=>{n===h&&(n=void 0)})),(l.modelValue===null||p===!1)&&B(h)}function B(h){e.value!==!1&&(e.value=!1,v("beforeHide",h),t!==void 0?t(h):v("hide",h))}function k(h){l.disable===!0&&h===!0?l["onUpdate:modelValue"]!==void 0&&v("update:modelValue",!1):h===!0!==e.value&&(h===!0?z:B)(n)}T(()=>l.modelValue,k),u!==void 0&&Bt(i)===!0&&T(()=>m.$route.fullPath,()=>{u.value===!0&&e.value===!0&&y()}),o===!0&&rt(()=>{k(l.modelValue)});const w={show:g,hide:y,toggle:q};return Object.assign(m,w),w}let Z=0,ke,Te,ee,Be=!1,Ke,Ge,Je,I=null;function ia(e){na(e)&&Ae(e)}function na(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const a=Mt(e),u=e.shiftKey&&!e.deltaX,c=!u&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=u||c?e.deltaY:e.deltaX;for(let o=0;o<a.length;o++){const i=a[o];if(Nt(i,c))return c?t<0&&i.scrollTop===0?!0:t>0&&i.scrollTop+i.clientHeight===i.scrollHeight:t<0&&i.scrollLeft===0?!0:t>0&&i.scrollLeft+i.clientWidth===i.scrollWidth}return!0}function Ze(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function se(e){Be!==!0&&(Be=!0,requestAnimationFrame(()=>{Be=!1;const{height:a}=e.target,{clientHeight:u,scrollTop:c}=document.scrollingElement;(ee===void 0||a!==window.innerHeight)&&(ee=u-a,document.scrollingElement.scrollTop=c),c>ee&&(document.scrollingElement.scrollTop-=Math.ceil((c-ee)/8))}))}function et(e){const a=document.body,u=window.visualViewport!==void 0;if(e==="add"){const{overflowY:c,overflowX:t}=window.getComputedStyle(a);ke=It(window),Te=Xt(window),Ke=a.style.left,Ge=a.style.top,Je=window.location.href,a.style.left=`-${ke}px`,a.style.top=`-${Te}px`,t!=="hidden"&&(t==="scroll"||a.scrollWidth>window.innerWidth)&&a.classList.add("q-body--force-scrollbar-x"),c!=="hidden"&&(c==="scroll"||a.scrollHeight>window.innerHeight)&&a.classList.add("q-body--force-scrollbar-y"),a.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,A.is.ios===!0&&(u===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",se,j.passiveCapture),window.visualViewport.addEventListener("scroll",se,j.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ze,j.passiveCapture))}A.is.desktop===!0&&A.is.mac===!0&&window[`${e}EventListener`]("wheel",ia,j.notPassive),e==="remove"&&(A.is.ios===!0&&(u===!0?(window.visualViewport.removeEventListener("resize",se,j.passiveCapture),window.visualViewport.removeEventListener("scroll",se,j.passiveCapture)):window.removeEventListener("scroll",Ze,j.passiveCapture)),a.classList.remove("q-body--prevent-scroll"),a.classList.remove("q-body--force-scrollbar-x"),a.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,a.style.left=Ke,a.style.top=Ge,window.location.href===Je&&window.scrollTo(ke,Te),ee=void 0)}function ua(e){let a="add";if(e===!0){if(Z++,I!==null){clearTimeout(I),I=null;return}if(Z>1)return}else{if(Z===0||(Z--,Z>0))return;if(a="remove",A.is.ios===!0&&A.is.nativeMobile===!0){I!==null&&clearTimeout(I),I=setTimeout(()=>{et(a),I=null},100);return}}et(a)}function sa(){let e;return{preventBodyScroll(a){a!==e&&(e!==void 0||a===!0)&&(e=a,ua(a))}}}function ca(){let e=null;const a=N();function u(){e!==null&&(clearTimeout(e),e=null)}return ot(u),ve(u),{removeTimeout:u,registerTimeout(c,t){u(),Lt(a)===!1&&(e=setTimeout(c,t))}}}const tt=150;var da=X({name:"QDrawer",inheritAttrs:!1,props:{...la,...ae,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...oa,"onLayout","miniState"],setup(e,{slots:a,emit:u,attrs:c}){const t=N(),{proxy:{$q:o}}=t,i=le(e,o),{preventBodyScroll:l}=sa(),{registerTimeout:v,removeTimeout:m}=ca(),n=$t(Et,ze);if(n===ze)return console.error("QDrawer needs to be child of QLayout"),ze;let q,g=null,z;const y=_(e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint),B=d(()=>e.mini===!0&&y.value!==!0),k=d(()=>B.value===!0?e.miniWidth:e.width),w=_(e.showIfAbove===!0&&y.value===!1?!0:e.modelValue===!0),h=d(()=>e.persistent!==!0&&(y.value===!0||U.value===!0));function p(r,b){if(oe(),r!==!1&&n.animate(),E(0),y.value===!0){const M=n.instances[s.value];M!==void 0&&M.belowBreakpoint===!0&&M.hide(!1),D(1),n.isContainer.value!==!0&&l(!0)}else D(0),r!==!1&&be(!1);v(()=>{r!==!1&&be(!0),b!==!0&&u("show",r)},tt)}function R(r,b){re(),r!==!1&&n.animate(),D(0),E(x.value*k.value),ye(),b!==!0?v(()=>{u("hide",r)},tt):m()}const{show:K,hide:F}=ra({showing:w,hideOnRouteChange:h,handleShow:p,handleHide:R}),{addToHistory:oe,removeFromHistory:re}=aa(w,F,h),Y={belowBreakpoint:y,hide:F},P=d(()=>e.side==="right"),x=d(()=>(o.lang.rtl===!0?-1:1)*(P.value===!0?1:-1)),G=_(0),O=_(!1),J=_(!1),W=_(k.value*x.value),s=d(()=>P.value===!0?"left":"right"),f=d(()=>w.value===!0&&y.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:k.value:0),S=d(()=>e.overlay===!0||e.miniToOverlay===!0||n.view.value.indexOf(P.value?"R":"L")>-1||o.platform.is.ios===!0&&n.isContainer.value===!0),$=d(()=>e.overlay===!1&&w.value===!0&&y.value===!1),U=d(()=>e.overlay===!0&&w.value===!0&&y.value===!1),fe=d(()=>"fullscreen q-drawer__backdrop"+(w.value===!1&&O.value===!1?" hidden":"")),me=d(()=>({backgroundColor:`rgba(0,0,0,${G.value*.4})`})),ie=d(()=>P.value===!0?n.rows.value.top[2]==="r":n.rows.value.top[0]==="l"),it=d(()=>P.value===!0?n.rows.value.bottom[2]==="r":n.rows.value.bottom[0]==="l"),nt=d(()=>{const r={};return n.header.space===!0&&ie.value===!1&&(S.value===!0?r.top=`${n.header.offset}px`:n.header.space===!0&&(r.top=`${n.header.size}px`)),n.footer.space===!0&&it.value===!1&&(S.value===!0?r.bottom=`${n.footer.offset}px`:n.footer.space===!0&&(r.bottom=`${n.footer.size}px`)),r}),ut=d(()=>{const r={width:`${k.value}px`,transform:`translateX(${W.value}px)`};return y.value===!0?r:Object.assign(r,nt.value)}),st=d(()=>"q-drawer__content fit "+(n.isContainer.value!==!0?"scroll":"overflow-auto")),ct=d(()=>`q-drawer q-drawer--${e.side}`+(J.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(i.value===!0?" q-drawer--dark q-dark":"")+(O.value===!0?" no-transition":w.value===!0?"":" q-layout--prevent-focus")+(y.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(S.value===!0||$.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ie.value===!0?" q-drawer--top-padding":""))),dt=d(()=>{const r=o.lang.rtl===!0?e.side:s.value;return[[te,ht,void 0,{[r]:!0,mouse:!0}]]}),vt=d(()=>{const r=o.lang.rtl===!0?s.value:e.side;return[[te,Ve,void 0,{[r]:!0,mouse:!0}]]}),ft=d(()=>{const r=o.lang.rtl===!0?s.value:e.side;return[[te,Ve,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function he(){bt(y,e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint)}T(y,r=>{r===!0?(q=w.value,w.value===!0&&F(!1)):e.overlay===!1&&e.behavior!=="mobile"&&q!==!1&&(w.value===!0?(E(0),D(0),ye()):K(!1))}),T(()=>e.side,(r,b)=>{n.instances[b]===Y&&(n.instances[b]=void 0,n[b].space=!1,n[b].offset=0),n.instances[r]=Y,n[r].size=k.value,n[r].space=$.value,n[r].offset=f.value}),T(n.totalWidth,()=>{(n.isContainer.value===!0||document.qScrollPrevented!==!0)&&he()}),T(()=>e.behavior+e.breakpoint,he),T(n.isContainer,r=>{w.value===!0&&l(r!==!0),r===!0&&he()}),T(n.scrollbarWidth,()=>{E(w.value===!0?0:void 0)}),T(f,r=>{H("offset",r)}),T($,r=>{u("onLayout",r),H("space",r)}),T(P,()=>{E()}),T(k,r=>{E(),pe(e.miniToOverlay,r)}),T(()=>e.miniToOverlay,r=>{pe(r,k.value)}),T(()=>o.lang.rtl,()=>{E()}),T(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(mt(),n.animate())}),T(B,r=>{u("miniState",r)});function E(r){r===void 0?ce(()=>{r=w.value===!0?0:k.value,E(x.value*r)}):(n.isContainer.value===!0&&P.value===!0&&(y.value===!0||Math.abs(r)===k.value)&&(r+=x.value*n.scrollbarWidth.value),W.value=r)}function D(r){G.value=r}function be(r){const b=r===!0?"remove":n.isContainer.value!==!0?"add":"";b!==""&&document.body.classList[b]("q-body--drawer-toggle")}function mt(){g!==null&&clearTimeout(g),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),J.value=!0,g=setTimeout(()=>{g=null,J.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function ht(r){if(w.value!==!1)return;const b=k.value,M=V(r.distance.x,0,b);if(r.isFinal===!0){M>=Math.min(75,b)===!0?K():(n.animate(),D(0),E(x.value*b)),O.value=!1;return}E((o.lang.rtl===!0?P.value!==!0:P.value)?Math.max(b-M,0):Math.min(0,M-b)),D(V(M/b,0,1)),r.isFirst===!0&&(O.value=!0)}function Ve(r){if(w.value!==!0)return;const b=k.value,M=r.direction===e.side,ne=(o.lang.rtl===!0?M!==!0:M)?V(r.distance.x,0,b):0;if(r.isFinal===!0){Math.abs(ne)<Math.min(75,b)===!0?(n.animate(),D(1),E(0)):F(),O.value=!1;return}E(x.value*ne),D(V(1-ne/b,0,1)),r.isFirst===!0&&(O.value=!0)}function ye(){l(!1),be(!0)}function H(r,b){n.update(e.side,r,b)}function bt(r,b){r.value!==b&&(r.value=b)}function pe(r,b){H("size",r===!0?e.miniWidth:b)}return n.instances[e.side]=Y,pe(e.miniToOverlay,k.value),H("space",$.value),H("offset",f.value),e.showIfAbove===!0&&e.modelValue!==!0&&w.value===!0&&e["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!0),rt(()=>{u("onLayout",$.value),u("miniState",B.value),q=e.showIfAbove===!0;const r=()=>{(w.value===!0?p:R)(!1,!0)};if(n.totalWidth.value!==0){ce(r);return}z=T(n.totalWidth,()=>{z(),z=void 0,w.value===!1&&e.showIfAbove===!0&&y.value===!1?K(!1):r()})}),ve(()=>{z!==void 0&&z(),g!==null&&(clearTimeout(g),g=null),w.value===!0&&ye(),n.instances[e.side]===Y&&(n.instances[e.side]=void 0,H("size",0),H("offset",0),H("space",!1))}),()=>{const r=[];y.value===!0&&(e.noSwipeOpen===!1&&r.push(Ee(C("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),dt.value)),r.push(We("div",{ref:"backdrop",class:fe.value,style:me.value,"aria-hidden":"true",onClick:F},void 0,"backdrop",e.noSwipeBackdrop!==!0&&w.value===!0,()=>ft.value)));const b=B.value===!0&&a.mini!==void 0,M=[C("div",{...c,key:""+b,class:[st.value,c.class]},b===!0?a.mini():xe(a.default))];return e.elevated===!0&&w.value===!0&&M.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(We("aside",{ref:"content",class:ct.value,style:ut.value},M,"contentclose",e.noSwipeClose!==!0&&y.value===!0,()=>vt.value)),C("div",{class:"q-drawer-container"},r)}}}),at=X({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:a}){const u=d(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>C("div",{class:u.value},xe(a.default))}}),va=X({name:"QItem",props:{...ae,...Pt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:a,emit:u}){const{proxy:{$q:c}}=N(),t=le(e,c),{hasLink:o,linkAttrs:i,linkClass:l,linkTag:v,navigateOnClick:m}=xt(),n=_(null),q=_(null),g=d(()=>e.clickable===!0||o.value===!0||e.tag==="label"),z=d(()=>e.disable!==!0&&g.value===!0),y=d(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(o.value===!0&&e.active===null?l.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(z.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),B=d(()=>{if(e.insetLevel===void 0)return null;const p=c.lang.rtl===!0?"Right":"Left";return{["padding"+p]:16+e.insetLevel*56+"px"}});function k(p){z.value===!0&&(q.value!==null&&(p.qKeyEvent!==!0&&document.activeElement===n.value?q.value.focus():document.activeElement===q.value&&n.value.focus()),m(p))}function w(p){if(z.value===!0&&At(p,13)===!0){Ae(p),p.qKeyEvent=!0;const R=new MouseEvent("click",p);R.qKeyEvent=!0,n.value.dispatchEvent(R)}u("keyup",p)}function h(){const p=Ot(a.default,[]);return z.value===!0&&p.unshift(C("div",{class:"q-focus-helper",tabindex:-1,ref:q})),p}return()=>{const p={ref:n,class:y.value,style:B.value,role:"listitem",onClick:k,onKeyup:w};return z.value===!0?(p.tabindex=e.tabindex||"0",Object.assign(p,i.value)):g.value===!0&&(p["aria-disabled"]="true"),C(v.value,p,h())}}});const fa={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},Me={xs:2,sm:4,md:8,lg:16,xl:24};var ma=X({name:"QSeparator",props:{...ae,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const a=N(),u=le(e,a.proxy.$q),c=d(()=>e.vertical===!0?"vertical":"horizontal"),t=d(()=>` q-separator--${c.value}`),o=d(()=>e.inset!==!1?`${t.value}-${fa[e.inset]}`:""),i=d(()=>`q-separator${t.value}${o.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(u.value===!0?" q-separator--dark":"")),l=d(()=>{const v={};if(e.size!==void 0&&(v[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const m=e.spaced===!0?`${Me.md}px`:e.spaced in Me?`${Me[e.spaced]}px`:e.spaced,n=e.vertical===!0?["Left","Right"]:["Top","Bottom"];v[`margin${n[0]}`]=v[`margin${n[1]}`]=m}return v});return()=>C("hr",{class:i.value,style:l.value,"aria-orientation":c.value})}});const Le=Oe({__name:"MenuItem",props:{label:{},icon:{},to:{},separator:{type:Boolean}},setup(e){const a=e;return(u,c)=>(de(),Dt("div",null,[L(va,{clickable:"",to:u.to},{default:Q(()=>[L(at,{avatar:""},{default:Q(()=>[L(Vt,{name:a.icon},null,8,["name"])]),_:1}),L(at,null,{default:Q(()=>[Qt(Rt(a.label),1)]),_:1})]),_:1},8,["to"]),a.separator?(de(),De(ma,{key:0})):Ht("",!0)]))}}),ha=Oe({__name:"DrawerMenu",setup(e){const a=lt(),u=Ft(),c=d({get:()=>a.drawer,set:t=>a.setDrawer(t)});return(t,o)=>(de(),De(da,{"model-value":c.value,side:"left",overlay:"",bordered:"",dark:""},{default:Q(()=>[L(ta,{class:"fit"},{default:Q(()=>[L(Kt,null,{default:Q(()=>[L(Ut),L(Le,{icon:"home",label:"Home",to:{name:"index"},onClick:o[0]||(o[0]=i=>c.value=!1)}),L(Le,{icon:"photo_camera",label:"Scanner",to:{name:"scanner"},onClick:o[1]||(o[1]=i=>c.value=!1)}),L(Le,{icon:"logout",label:"Logout","path-name":"login",to:{name:"login",query:{query:Pe(u).query.query}}},null,8,["to"])]),_:1})]),_:1})]),_:1},8,["model-value"]))}}),Sa=Oe({__name:"MainLayout",props:{hideSearch:{type:Boolean}},setup(e){const a=e,{toggleDrawer:u}=lt();return(c,t)=>{const o=Wt("router-view");return de(),De(pt,{view:"hHh lpR lFr"},{default:Q(()=>{var i;return[L(gt,{onToggleLeftDrawer:Pe(u),"hide-search":(i=a.hideSearch)!=null?i:!1},null,8,["onToggleLeftDrawer","hide-search"]),L(Pe(ha)),L(wt,null,{default:Q(()=>[jt(c.$slots,"default",{},()=>[L(o)])]),_:3})]}),_:3})}}});export{Sa as default};
