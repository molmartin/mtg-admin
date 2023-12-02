import{a as R,a5 as Y,w as Q,ao as J,ap as Z,aq as ee,u as _,I as te,J as D,L as re,d as se,h as S,g as z,c as ae,r as $,y as ne,al as ie,R as U,S as b,T as w,_ as ue,aa as G,ar as oe,as as le,W as C,X as ce,V as L,U as F,a8 as he}from"./index.366256f9.js";import{d as de,s as fe,f as H,q as pe}from"./InputSearch.f8709434.js";import{u as ve,Q as ye}from"./useNotify.7010450b.js";import{S as me,s as E,n as ge,i as B,a as M,t as Re,f as be,c as Qe,r as K,b as _e,d as xe,u as N,e as Ce,h as Se,j as Oe}from"./query.f9a51d04.js";import{_ as Ie}from"./CardList.6f813421.js";class ke extends me{constructor(e,t){super(),this.client=e,this.options=t,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),V(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return P(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return P(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,t){const s=this.options,a=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),E(s,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled!="undefined"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),this.updateQuery();const i=this.hasListeners();i&&j(this.currentQuery,a,this.options,s)&&this.executeFetch(),this.updateResult(t),i&&(this.currentQuery!==a||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.updateStaleTimeout();const u=this.computeRefetchInterval();i&&(this.currentQuery!==a||this.options.enabled!==s.enabled||u!==this.currentRefetchInterval)&&this.updateRefetchInterval(u)}getOptimisticResult(e){const t=this.client.getQueryCache().build(this.client,e),s=this.createResult(t,e);return De(this,s,e)&&(this.currentResult=s,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),s}getCurrentResult(){return this.currentResult}trackResult(e){const t={};return Object.keys(e).forEach(s=>{Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(s),e[s])})}),t}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...t}={}){return this.fetch({...t,meta:{refetchPage:e}})}fetchOptimistic(e){const t=this.client.defaultQueryOptions(e),s=this.client.getQueryCache().build(this.client,t);return s.isFetchingOptimistic=!0,s.fetch().then(()=>this.createResult(s,t))}fetch(e){var t;return this.executeFetch({...e,cancelRefetch:(t=e.cancelRefetch)!=null?t:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let t=this.currentQuery.fetch(this.options,e);return e!=null&&e.throwOnError||(t=t.catch(ge)),t}updateStaleTimeout(){if(this.clearStaleTimeout(),B||this.currentResult.isStale||!M(this.options.staleTime))return;const t=Re(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},t)}computeRefetchInterval(){var e;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(e=this.options.refetchInterval)!=null?e:!1}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!(B||this.options.enabled===!1||!M(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||be.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,t){const s=this.currentQuery,a=this.options,i=this.currentResult,u=this.currentResultState,o=this.currentResultOptions,c=e!==s,d=c?e.state:this.currentQueryInitialState,h=c?this.currentResult:this.previousQueryResult,{state:n}=e;let{dataUpdatedAt:l,error:v,errorUpdatedAt:m,fetchStatus:p,status:f}=n,x=!1,q=!1,g;if(t._optimisticResults){const y=this.hasListeners(),T=!y&&V(e,t),X=y&&j(e,s,t,a);(T||X)&&(p=Qe(e.options.networkMode)?"fetching":"paused",l||(f="loading")),t._optimisticResults==="isRestoring"&&(p="idle")}if(t.keepPreviousData&&!n.dataUpdatedAt&&h!=null&&h.isSuccess&&f!=="error")g=h.data,l=h.dataUpdatedAt,f=h.status,x=!0;else if(t.select&&typeof n.data!="undefined")if(i&&n.data===(u==null?void 0:u.data)&&t.select===this.selectFn)g=this.selectResult;else try{this.selectFn=t.select,g=t.select(n.data),g=K(i==null?void 0:i.data,g,t),this.selectResult=g,this.selectError=null}catch(y){this.selectError=y}else g=n.data;if(typeof t.placeholderData!="undefined"&&typeof g=="undefined"&&f==="loading"){let y;if(i!=null&&i.isPlaceholderData&&t.placeholderData===(o==null?void 0:o.placeholderData))y=i.data;else if(y=typeof t.placeholderData=="function"?t.placeholderData():t.placeholderData,t.select&&typeof y!="undefined")try{y=t.select(y),this.selectError=null}catch(T){this.selectError=T}typeof y!="undefined"&&(f="success",g=K(i==null?void 0:i.data,y,t),q=!0)}this.selectError&&(v=this.selectError,g=this.selectResult,m=Date.now(),f="error");const O=p==="fetching",I=f==="loading",k=f==="error";return{status:f,fetchStatus:p,isLoading:I,isSuccess:f==="success",isError:k,isInitialLoading:I&&O,data:g,dataUpdatedAt:l,error:v,errorUpdatedAt:m,failureCount:n.fetchFailureCount,failureReason:n.fetchFailureReason,errorUpdateCount:n.errorUpdateCount,isFetched:n.dataUpdateCount>0||n.errorUpdateCount>0,isFetchedAfterMount:n.dataUpdateCount>d.dataUpdateCount||n.errorUpdateCount>d.errorUpdateCount,isFetching:O,isRefetching:O&&!I,isLoadingError:k&&n.dataUpdatedAt===0,isPaused:p==="paused",isPlaceholderData:q,isPreviousData:x,isRefetchError:k&&n.dataUpdatedAt!==0,isStale:A(e,t),refetch:this.refetch,remove:this.remove}}updateResult(e){const t=this.currentResult,s=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,E(s,t))return;this.currentResult=s;const a={cache:!0},i=()=>{if(!t)return!0;const{notifyOnChangeProps:u}=this.options,o=typeof u=="function"?u():u;if(o==="all"||!o&&!this.trackedProps.size)return!0;const c=new Set(o!=null?o:this.trackedProps);return this.options.useErrorBoundary&&c.add("error"),Object.keys(this.currentResult).some(d=>{const h=d;return this.currentResult[h]!==t[h]&&c.has(h)})};(e==null?void 0:e.listeners)!==!1&&i()&&(a.listeners=!0),this.notify({...a,...e})}updateQuery(){const e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;const t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(t==null||t.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){const t={};e.type==="success"?t.onSuccess=!e.manual:e.type==="error"&&!_e(e.error)&&(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}notify(e){xe.batch(()=>{if(e.onSuccess){var t,s,a,i;(t=(s=this.options).onSuccess)==null||t.call(s,this.currentResult.data),(a=(i=this.options).onSettled)==null||a.call(i,this.currentResult.data,null)}else if(e.onError){var u,o,c,d;(u=(o=this.options).onError)==null||u.call(o,this.currentResult.error),(c=(d=this.options).onSettled)==null||c.call(d,void 0,this.currentResult.error)}e.listeners&&this.listeners.forEach(({listener:h})=>{h(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function Te(r,e){return e.enabled!==!1&&!r.state.dataUpdatedAt&&!(r.state.status==="error"&&e.retryOnMount===!1)}function V(r,e){return Te(r,e)||r.state.dataUpdatedAt>0&&P(r,e,e.refetchOnMount)}function P(r,e,t){if(e.enabled!==!1){const s=typeof t=="function"?t(r):t;return s==="always"||s!==!1&&A(r,e)}return!1}function j(r,e,t,s){return t.enabled!==!1&&(r!==e||s.enabled===!1)&&(!t.suspense||r.state.status!=="error")&&A(r,t)}function A(r,e){return r.isStaleByTime(e.staleTime)}function De(r,e,t){return t.keepPreviousData?!1:t.placeholderData!==void 0?e.isPlaceholderData:!E(r.getCurrentResult(),e)}function Fe(r,e,t={},s={}){var a;const i=R(()=>we(e,t,s)),u=(a=i.value.queryClient)!=null?a:ve(i.value.queryClientKey),o=R(()=>{const l=u.defaultQueryOptions(i.value);return l._optimisticResults=u.isRestoring.value?"isRestoring":"optimistic",l}),c=new r(u,o.value),d=Y(c.getCurrentResult());let h=()=>{};Q(u.isRestoring,l=>{l||(h(),h=c.subscribe(v=>{N(d,v)}))},{immediate:!0}),Q(o,()=>{c.setOptions(o.value),N(d,c.getCurrentResult())},{flush:"sync"}),J(()=>{h()});const n=()=>new Promise((l,v)=>{let m=()=>{};const p=()=>{if(o.value.enabled!==!1){const f=c.getOptimisticResult(o.value);f.isStale?(m(),c.fetchOptimistic(o.value).then(l,v)):(m(),l(f))}};p(),m=Q(o,p)});return Q(()=>d.error,l=>{if(d.isError&&!d.isFetching&&Ce(o.value.useErrorBoundary,[l,c.getCurrentQuery()]))throw l}),{...Z(ee(d)),suspense:n}}function we(r,e={},t={}){const s=_(r),a=_(e),i=_(t);let u=s;return Se(s)?typeof a=="function"?u={...i,queryKey:s,queryFn:a}:u={...a,queryKey:s}:u=s,Oe(u)}function Ee(r,e,t){const s=Fe(ke,r,e,t);return{...s,refetch:s.refetch.value,remove:s.remove.value}}const Pe={position:{type:String,default:"bottom-right",validator:r=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(r)},offset:{type:Array,validator:r=>r.length===2},expand:Boolean};function Ue(){const{props:r,proxy:{$q:e}}=z(),t=te(re,D);if(t===D)return console.error("QPageSticky needs to be child of QLayout"),D;const s=R(()=>{const n=r.position;return{top:n.indexOf("top")>-1,right:n.indexOf("right")>-1,bottom:n.indexOf("bottom")>-1,left:n.indexOf("left")>-1,vertical:n==="top"||n==="bottom",horizontal:n==="left"||n==="right"}}),a=R(()=>t.header.offset),i=R(()=>t.right.offset),u=R(()=>t.footer.offset),o=R(()=>t.left.offset),c=R(()=>{let n=0,l=0;const v=s.value,m=e.lang.rtl===!0?-1:1;v.top===!0&&a.value!==0?l=`${a.value}px`:v.bottom===!0&&u.value!==0&&(l=`${-u.value}px`),v.left===!0&&o.value!==0?n=`${m*o.value}px`:v.right===!0&&i.value!==0&&(n=`${-m*i.value}px`);const p={transform:`translate(${n}, ${l})`};return r.offset&&(p.margin=`${r.offset[1]}px ${r.offset[0]}px`),v.vertical===!0?(o.value!==0&&(p[e.lang.rtl===!0?"right":"left"]=`${o.value}px`),i.value!==0&&(p[e.lang.rtl===!0?"left":"right"]=`${i.value}px`)):v.horizontal===!0&&(a.value!==0&&(p.top=`${a.value}px`),u.value!==0&&(p.bottom=`${u.value}px`)),p}),d=R(()=>`q-page-sticky row flex-center fixed-${r.position} q-page-sticky--${r.expand===!0?"expand":"shrink"}`);function h(n){const l=se(n.default);return S("div",{class:d.value,style:c.value},r.expand===!0?l:[S("div",l)])}return{$layout:t,getStickyContent:h}}var Ae=ae({name:"QPageScroller",props:{...Pe,scrollOffset:{type:Number,default:1e3},reverse:Boolean,duration:{type:Number,default:300},offset:{default:()=>[18,18]}},emits:["click"],setup(r,{slots:e,emit:t}){const{proxy:{$q:s}}=z(),{$layout:a,getStickyContent:i}=Ue(),u=$(null);let o;const c=R(()=>a.height.value-(a.isContainer.value===!0?a.containerHeight.value:s.screen.height));function d(){return r.reverse===!0?c.value-a.scroll.value.position>r.scrollOffset:a.scroll.value.position>r.scrollOffset}const h=$(d());function n(){const f=d();h.value!==f&&(h.value=f)}function l(){r.reverse===!0?o===void 0&&(o=Q(c,n)):v()}Q(a.scroll,n),Q(()=>r.reverse,l);function v(){o!==void 0&&(o(),o=void 0)}function m(f){const x=de(a.isContainer.value===!0?u.value:a.rootRef.value);fe(x,r.reverse===!0?a.height.value:0,r.duration),t("click",f)}function p(){return h.value===!0?S("div",{ref:u,class:"q-page-scroller",onClick:m},i(e)):null}return l(),ne(v),()=>S(ie,{name:"q-transition--fade"},p)}});const qe={class:"dashboard-text mtg-font-bold"},$e=U({__name:"DashboardText",props:{text:{}},setup(r){const e=r;return(t,s)=>(b(),w("span",qe,ue(e.text),1))}});var W=G($e,[["__scopeId","data-v-5fb63788"]]);async function Le(r){var e;return r?(e=await oe(`api/card/search?q=${r}`))!=null?e:[]:[]}function Be(){const{query:r}=H();return Ee(pe.search(r),()=>Le(r.value),{retry:!1})}const Me={class:"flex flex-center full-width"},Ke=U({__name:"CardDashboard",setup(r){const{query:e}=H(),{data:t,isFetching:s}=Be(),a=R(()=>{var i;return(i=t.value)!=null?i:[]});return(i,u)=>(b(),w("div",Me,[_(s)?(b(),C(W,{key:1,text:"LOADING..."})):(b(),w(le,{key:0},[a.value.length?(b(),C(Ie,{key:0,cards:a.value,class:"card-dashboard"},null,8,["cards"])):_(e)?(b(),C(W,{key:1,text:"CAN'T FIND ANY CARD"})):ce("",!0)],64))]))}});var Ne=G(Ke,[["__scopeId","data-v-a962eacc"]]);const Xe=U({__name:"IndexPage",setup(r){return(e,t)=>(b(),C(ye,{class:"row"},{default:L(()=>[F(_(Ne)),F(Ae,{position:"bottom-right",offset:[18,18]},{default:L(()=>[F(he,{fab:"",icon:"keyboard_arrow_up",color:"black"})]),_:1})]),_:1}))}});export{Xe as default};
