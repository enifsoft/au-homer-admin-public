(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44],{8153:function(e,t,r){Promise.resolve().then(r.bind(r,9621)),Promise.resolve().then(r.bind(r,572)),Promise.resolve().then(r.bind(r,4602))},9621:function(e,t,r){"use strict";r.r(t),r.d(t,{RequestProvider:function(){return RequestProvider},useRequest:function(){return useRequest}});var a=r(7437),o=r(2265),n=r(2067),i=r.n(n),s=r(6282);let l=o.createContext(void 0),RequestProvider=e=>{let{children:t}=e,r={id:void 0,number:"",brands:[],maxPrice:.01,note:"",created:i()(),updated:i()(),status:"CLOSED",maxDeliveryDays:100,minDeliveryRate:0,notDamaged:!1,notUsed:!1,original:!1,returnable:!1,currency:"USD",lastMinPrice:0,lastMinPriceTime:i()()},[n,u]=(0,o.useState)([]),[c,d]=(0,o.useState)(r),[h,m]=(0,o.useState)([]),[p,f]=(0,o.useState)([]),fetchRequests=async()=>{await s.s.getRequests().then(e=>u(e)).catch(e=>{throw AggregateError(e,"Error fetching requests")})},saveRequest=async()=>{c&&(c.id?await s.s.updateRequest(c).then(()=>d(r)).then(()=>fetchRequests()):await s.s.createRequest(c).then(()=>d(r)).then(()=>fetchRequests()))},deleteRequest=async()=>{if(!c||!c.id)throw Error("Current request is not set");await s.s.deleteRequest(c).then(()=>fetchRequests())},fetchBrandsForCurrentRequest=async()=>{if(!c)throw Error("Current request is not set");await s.s.getAllBrandsByNumber(c.number).then(e=>m(e.map(e=>({brand:e}))))},updateStatus=async e=>{await s.s.updateStatus(e).then(()=>fetchRequests()).catch(e=>{throw AggregateError(e,"Error updating status")})};return(0,a.jsx)(l.Provider,{value:{requests:n,setRequests:u,currentRequest:c,setCurrentRequest:d,brands:h,setBrands:m,selectedBrands:p,setSelectedBrands:f,fetchRequests,saveRequest,deleteRequest,fetchBrandsForCurrentRequest,updateStatus,getEmptyRequest:()=>r},children:t})},useRequest=()=>{let e=o.useContext(l);if(!e)throw Error("useRequest must be used within a RequestProvider");return e}},572:function(e,t,r){"use strict";r.r(t),r.d(t,{ScheduleProvider:function(){return ScheduleProvider},useSchedule:function(){return useSchedule}});var a=r(7437),o=r(2265);let n={async getScanner(){let e=localStorage.getItem("token");if(!e)throw Error("Error: no token found");let t=await fetch("".concat("https://au-homer-fisher-go-953161734119.europe-west1.run.app/api","/scanner"),{headers:{"Cache-Control":"no-cache","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});if(401===t.status)throw Error("Error: unauthorized");if(!t.ok)throw Error("Error: ".concat(t.statusText));let r=await t.json();return r},async updateScanner(e){let t=localStorage.getItem("token");if(!t)throw Error("Error: no token found");let r=await fetch("".concat("https://au-homer-fisher-go-953161734119.europe-west1.run.app/api","/scanner"),{method:"PUT",headers:{"Cache-Control":"no-cache","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(e)});if(401===r.status)throw Error("Error: unauthorized");if(!r.ok)throw Error("Error: ".concat(r.statusText));let a=await r.json();return a},async enableScanner(){let e=localStorage.getItem("token");if(!e)throw Error("Error: no token found");let t=await fetch("".concat("https://au-homer-fisher-go-953161734119.europe-west1.run.app/api","/scanner/enable"),{method:"PUT",headers:{"Cache-Control":"no-cache","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});if(401===t.status)throw Error("Error: unauthorized");if(!t.ok)throw Error("Error: ".concat(t.statusText))},async disableScanner(){let e=localStorage.getItem("token");if(!e)throw Error("Error: no token found");let t=await fetch("".concat("https://au-homer-fisher-go-953161734119.europe-west1.run.app/api","/scanner/disable"),{method:"PUT",headers:{"Cache-Control":"no-cache","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});if(401===t.status)throw Error("Error: unauthorized");if(!t.ok)throw Error("Error: ".concat(t.statusText))},async getNextFireTime(){let e=localStorage.getItem("token");if(!e)throw Error("Error: no token found");let t=await fetch("".concat("https://au-homer-fisher-go-953161734119.europe-west1.run.app/api","/scanner/next-fire-time"),{headers:{"Cache-Control":"no-cache","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});if(401===t.status)throw Error("Error: unauthorized");if(!t.ok)throw Error("Error: ".concat(t.statusText));let r=await t.json();return r}};var i=r(2067),s=r.n(i);let l=o.createContext(void 0),ScheduleProvider=e=>{let{children:t}=e,[r,i]=o.useState({id:null,updatePeriod:1,time:"HOURS",status:"DISABLED"}),[u,c]=o.useState(null),fetchSchedule=async()=>{await n.getScanner().then(e=>i(e)).catch(e=>{throw AggregateError(e,"Error fetching schedule")})},saveSchedule=async()=>{await n.updateScanner(r).then(e=>i(e)).catch(e=>{throw AggregateError(e,"Error saving schedule")})},toggle=async()=>{"ENABLED"===r.status?await n.disableScanner():await n.enableScanner(),fetchSchedule().then(()=>{c(null),window.setTimeout(()=>fetchNextFireTime(),5e3)})},fetchNextFireTime=async()=>{await n.getNextFireTime().then(e=>c(s().utc(e.nextFireTime).local())).catch(e=>{throw AggregateError(e,"Error fetching next fire time")})};return(0,a.jsx)(l.Provider,{value:{schedule:r,setSchedule:i,fetchSchedule,saveSchedule,toggle,nextFireTime:u,setNextFireTime:c,fetchNextFireTime},children:t})},useSchedule=()=>{let e=o.useContext(l);if(!e)throw Error("useSchedule must be used within a ScheduleProvider");return e}},5580:function(e,t,r){"use strict";r.d(t,{K:function(){return i18nextChangeLanguage}});var a=r(3968),o=r(251);a.ZP.use(o.Db).init({resources:{en:{translation:{common:{"input-search":"Search...","btn-new-request":"Create new request"},table:{header:{status:"Status",number:"Number","max-price":"Price","max-delivery-days":"Delivery","min-delivery-rating":"Rating",note:"Note","last-update":"Updated","last-min-price":"Last Minimal Price"},tooltips:{status:"Status",number:"Number","max-price":"Max Price","max-delivery-days":"Max Delivery Days","min-delivery-rating":"Min Delivery Rating",note:"Note","last-update":"Last update","last-min-price":"Last Minimal Price"},fields:{created:"created: ","last-update":"updated: ","last-min-price-time":"When the minimal price were updated: ","no-last-min-price":"No minimal price updates"},common:{"no-request-found":"No requests found."},pagination:"Showing {first} to {last} of {totalRecords} requests"},dialog:{new:{header:"Request Details",labels:{number:"Detail number:",original:"Is Original",brands:"Brands","max-price":"Max Price","max-delivery-days":"Max Delivery Days","min-delivery-rating":"Min Delivery Rating",note:"Note","current-min-price":"Current Minimal Price"},placeholders:{brands:"Possible Brands"},errors:{number:"Number is required.","max-price":"Max price is required.","max-delivery-days":"Max delivery days is required."}},delete:{header:"Confirm Delete",msg:"Are you sure you want to delete"},scanner:{header:"Scanner Configuration",labels:{interval:"Scanner Interval:","time-units":"Time Units:",minutes:"Minutes",hours:"Hours",days:"Days"},helper:"Scanner will update requests every {{interval}} {{unit}}.",nextFiretTime:"Next fire time: {{time}}"},common:{cancel:"Cancel",save:"Save",yes:"Yes",no:"No"}},toast:{summary:{successful:"Successful"},details:{created:"Request Created",updated:"Request Updated",deleted:"Request Deleted","status-changed":"Request {{number}} status was changed to {{status}}.","scanner-update":"Scanner Updated Successfuly"}},login:{header:"Welcome!",message:"Sign in to continue"},topbar:{profile:{menu:{header:"Profile",settings:"Settings",language:{title:"Language",uk:"Ukrainian",en:"English"},logout:"Logout"},toast:{summary:"Info",detail:'Menu item "Settings" under construction'}}}}},uk:{translation:{common:{"input-search":"Пошук...","btn-new-request":"Створити новий запит"},table:{header:{status:"Статус",number:"Номер","max-price":"Ціна","max-delivery-days":"Доставка","min-delivery-rating":"Рейтинг",note:"Примітки","last-update":"Оновлено","last-min-price":"Остання Ціна"},tooltips:{status:"Статус",number:"Номер","max-price":"Макс. ціна","max-delivery-days":"Макс. днів доставки","min-delivery-rating":"Мін. рейтинг доставки",note:"Примітки","last-update":"Оновлено","last-min-price":"Остання мінімальна ціна"},fields:{created:"створено:","last-update":"оновлено:","last-min-price-time":"Оновлено: ","no-last-min-price":"Немає оновлень"},common:{"no-request-found":"Запитів не знайдено."},pagination:"Показано від {first} до {last} з {totalRecords} запитів"},dialog:{new:{header:"Деталі запиту",labels:{number:"Номер деталі:",original:"Оригінал",brands:"Бренди","max-price":"Макс. ціна","max-delivery-days":"Макс. днів доставки","min-delivery-rating":"Мін. рейтинг доставки",note:"Примітки","current-min-price":"Поточна мінімальна ціна"},placeholders:{brands:"Можливі бренди"},errors:{number:"Номер обов'язковий.","max-price":"Максимальна ціна обов'язкова.","max-delivery-days":"Максимальна кількість днів доставки обов'язкова."}},delete:{header:"Підтвердити видалити",msg:"Ви впевнені, що хочете видалити"},scanner:{header:"Конфігурація сканера",labels:{interval:"Інтервал сканера:","time-units":"Одиниці часу:",minutes:"Хвилини",hours:"Години",days:"Дні"},helper:"Оновлення запитів {{interval}}.",nextFiretTime:"Наступний запуск: {{time}}"},common:{cancel:"Скасувати",save:"Зберегти",yes:"Так",no:"Ні"}},toast:{summary:{successful:"Успішно"},details:{created:"Запит Створено",updated:"Запит Оновлено",deleted:"Запит Видалено","status-changed":"Статус запиту {{number}} було змінено на {{status}}.","scanner-update":"Сканер успішно оновлено"}},login:{header:"Ласкаво просимо!",message:"Увійдіть, щоб продовжити"},topbar:{profile:{menu:{header:"Профіль",settings:"Налаштування",language:{title:"Мова",uk:"Українська",en:"Англійська"},logout:"Вийти"},toast:{summary:"Увага",detail:"Пункт меню \xabНалаштування\xbb в розробці"}}}}}},fallbackLng:"uk",interpolation:{escapeValue:!1}});let i18nextChangeLanguage=e=>{a.ZP.changeLanguage(e),localStorage.setItem("lng",e)}},2838:function(e,t,r){"use strict";var a=r(3968),o=r(2067),n=r.n(o);r(8890),r(5670),n().locale(a.ZP.language),t.Z=n()},6282:function(e,t,r){"use strict";r.d(t,{s:function(){return a}});let a={async getRequests(){let e=localStorage.getItem("token");if(!e)throw Error("Error: no token found");let t=await fetch("".concat("https://au-homer-fisher-go-953161734119.europe-west1.run.app/api","/requests"),{headers:{"Cache-Control":"no-cache","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});if(401===t.status)throw Error("Error: unauthorized");if(!t.ok)throw Error("Error: ".concat(t.statusText));let r=await t.json();return r},async deleteRequest(e){let t=localStorage.getItem("token");if(!t)throw Error("Error: no token found");let r=await fetch("".concat("https://au-homer-fisher-go-953161734119.europe-west1.run.app/api","/requests/").concat(e.id),{method:"DELETE",headers:{"Cache-Control":"no-cache","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});if(401===r.status)throw Error("Error: unauthorized");if(!r.ok)throw Error("Error: ".concat(r.statusText))},async updateStatus(e){let t=localStorage.getItem("token");if(!t)throw Error("Error: no token found");let r=await fetch("".concat("https://au-homer-fisher-go-953161734119.europe-west1.run.app/api","/requests/status/").concat(e.id),{method:"PUT",headers:{"Cache-Control":"no-cache","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(e)});if(401===r.status)throw Error("Error: unauthorized");if(!r.ok)throw Error("Error: ".concat(r.statusText))},async createRequest(e){let t=localStorage.getItem("token");if(!t)throw Error("Error: no token found");let r=await fetch("".concat("https://au-homer-fisher-go-953161734119.europe-west1.run.app/api","/requests"),{method:"POST",headers:{"Cache-Control":"no-cache","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(e)});if(401===r.status)throw Error("Error: unauthorized");if(!r.ok)throw Error("Error: ".concat(r.statusText))},async updateRequest(e){let t=localStorage.getItem("token");if(!t)throw Error("Error: no token found");let r=await fetch("".concat("https://au-homer-fisher-go-953161734119.europe-west1.run.app/api","/requests"),{method:"PUT",headers:{"Cache-Control":"no-cache","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(e)});if(401===r.status)throw Error("Error: unauthorized");if(!r.ok)throw Error("Error: ".concat(r.statusText))},async getAllBrandsByNumber(e){let t=localStorage.getItem("token");if(!t)throw Error("Error: no token found");let r=await fetch("".concat("https://au-homer-fisher-go-953161734119.europe-west1.run.app/api","/requests/").concat(e,"/brands"),{headers:{"Cache-Control":"no-cache","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});if(401===r.status)throw Error("Error: unauthorized");if(!r.ok)throw Error("Error: ".concat(r.statusText));let a=await r.json();return a}}},4602:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return layout}});var a=r(7437),o=r(5304),n=r(2265),i=r(9851),s=r(7510),l=r(2838),layout_AppFooter=()=>{let{layoutConfig:e}=(0,n.useContext)(s.V);return(0,a.jsxs)("div",{className:"layout-footer",children:["Copyright \xa9 2018-",(0,l.Z)(l.Z.now()).format("YYYY")," Autounion. All Right Reserved."]})},u=r(1396),c=r.n(u),d=r(8089);r(1261);var h=r(2),m=r(4387),p=r(251);r(8890),r(5670);var f=r(1245),g=r(6122);let v={async getCurrentUser(){let e=localStorage.getItem("token");if(!e)throw Error("Error: no token found");let t=await fetch("".concat("https://au-homer-fisher-go-953161734119.europe-west1.run.app/api","/user/me"),{headers:{"Cache-Control":"no-cache","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});if(401===t.status)throw Error("Error: unauthorized");if(!t.ok)throw Error("Error: ".concat(t.statusText));let r=await t.json();return r},async logout(){localStorage.removeItem("token"),window.location.href="/login"}};var y=r(4033),b=r(5705),w=r(2067),E=r.n(w),x=r(3968),S=r(5580);function Profile(){var e;let t=(0,y.useRouter)(),r=[{name:"UA",code:"uk"},{name:"EN",code:"en"}],{t:o}=(0,p.$G)(),i=(0,n.useRef)(null),s=(0,n.useRef)(null),[l,u]=(0,n.useState)("/homer/default-avatar.ico"),[c,d]=(0,n.useState)("Noname"),[h,w]=(0,n.useState)(null!==(e=r.find(e=>e.code===x.ZP.language))&&void 0!==e?e:r[0]);(0,n.useEffect)(()=>{v.getCurrentUser().then(e=>{var t,r;u(e.avatar);let a=null!==(r=null!==(t=e.firstName)&&void 0!==t?t:" "+e.lastName)&&void 0!==r?r:"";d(a)}).catch(e=>{t.push("/login")})},[]),(0,n.useEffect)(()=>{if(void 0!==window.localStorage){let t=window.localStorage.getItem("lng");if(t){var e;(0,S.K)(t),E().locale(t),w(null!==(e=r.find(e=>e.code===t))&&void 0!==e?e:r[0])}}},[]);let save=()=>{i.current&&i.current.show({severity:"info",summary:o("topbar.profile.toast.summary"),detail:o("topbar.profile.toast.detail")})},changeLanguage=e=>{e&&((0,S.K)(e.code),E().locale(e.code),w(e))},C=[{label:o("topbar.profile.menu.header"),template:()=>(0,a.jsxs)("span",{className:"inline-flex align-items-center gap-2",children:[(0,a.jsx)(f.q,{image:l,className:"flex align-items-center justify-content-center ml-2 mt-1",shape:"circle",size:"normal"}),(0,a.jsx)("span",{className:"font-medium  font-semibold",children:o("topbar.profile.menu.header")})]})},{label:o("topbar.profile.menu.settings"),icon:"pi pi-cog",command:()=>{save()}},{label:o("topbar.profile.menu.language.title"),icon:"pi pi-language",items:[{label:o("topbar.profile.menu.language.uk"),command:()=>{changeLanguage({name:"UA",code:"uk"})}},{label:o("topbar.profile.menu.language.en"),command:()=>{changeLanguage({name:"EN",code:"en"})}}]},{label:o("topbar.profile.menu.logout"),icon:"pi pi-sign-out",command:()=>{localStorage.removeItem("token"),window.location.reload()}}];return(0,a.jsxs)("div",{className:"layout-profile",children:[(0,a.jsx)(m.F,{ref:i}),(0,a.jsx)(b.y,{model:C,popup:!0,ref:s}),(0,a.jsx)(g.A,{className:"flex align-items-center justify-content-center ml-2 mt-1",label:c,image:l,onClick:e=>{var t;return null===(t=s.current)||void 0===t?void 0:t.toggle(e)},"aria-controls":"popup_menu_right","aria-haspopup":!0,style:{cursor:"pointer"}})]})}var C=r(5397),k=r(753),N=r(572),dialog_schedule=e=>{let{visible:t,onHide:r,onSubmit:o,onCancel:i}=e,s=(0,n.useRef)(null),{schedule:l,setSchedule:u,fetchSchedule:c,setNextFireTime:p,fetchNextFireTime:f,saveSchedule:g}=(0,N.useSchedule)(),[v,y]=(0,n.useState)("MINUTES"===l.time?60:"HOURS"===l.time?24:7);(0,n.useEffect)(()=>{c(),f()},[]);let handleCancel=()=>{c(),r(),i()},updateScheduleTime=e=>{e&&(u({...l,time:e}),y("MINUTES"===e?60:"HOURS"===e?24:7))},updateScheduleInterval=e=>{e&&u({...l,updatePeriod:e})},b=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.z,{label:(0,x.t)("dialog.common.cancel"),icon:"pi pi-times",text:!0,onClick:handleCancel}),(0,a.jsx)(d.z,{label:(0,x.t)("dialog.common.save"),icon:"pi pi-check",text:!0,onClick:()=>{var e;p(null),g().then(()=>f()),r(),o(),null===(e=s.current)||void 0===e||e.show({severity:"success",summary:"".concat((0,x.t)("toast.details.scanner-update")),detail:"".concat("ENABLED"===l.status?"every "+l.updatePeriod+" "+l.time.toLowerCase():"Disabled"),life:3e3})}})]});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.F,{ref:s,position:"bottom-right"}),(0,a.jsxs)(C.V,{visible:t,style:{width:"450px"},header:(0,x.t)("dialog.scanner.header"),modal:!0,className:"p-fluid",footer:b,onHide:handleCancel,children:[(0,a.jsxs)("div",{className:"field",children:[(0,a.jsx)("label",{htmlFor:"scanner-chrono-unit",children:(0,x.t)("dialog.scanner.labels.time-units")}),(0,a.jsx)(h.U,{id:"scanner-chrono-unit",value:l.time,onChange:e=>updateScheduleTime(e.value),options:[{name:"".concat((0,x.t)("dialog.scanner.labels.minutes")),value:"MINUTES"},{name:"".concat((0,x.t)("dialog.scanner.labels.hours")),value:"HOURS"},{name:"".concat((0,x.t)("dialog.scanner.labels.days")),value:"DAYS"}],optionLabel:"name",optionDisabled:"constant"})]}),(0,a.jsxs)("div",{className:"field",children:[(0,a.jsx)("label",{htmlFor:"scanner-interval",children:(0,x.t)("dialog.scanner.labels.interval")}),(0,a.jsx)("div",{className:"flex-auto",children:(0,a.jsx)(k.R,{inputId:"scanner-interval",value:l.updatePeriod,onValueChange:e=>{var t;return updateScheduleInterval(null!==(t=e.value)&&void 0!==t?t:1)},mode:"decimal",showButtons:!0,min:1,max:v,size:2})})]}),(0,a.jsx)("div",{className:"field flex align-items-center justify-content-center",children:(0,x.t)("dialog.scanner.helper",{interval:((e,t)=>{let r={hours:{single:"годину",few:"години",many:"годин"},minutes:{single:"хвилину",few:"хвилини",many:"хвилин"},days:{single:"день",few:"дні",many:"днів"}};return 1===e?"кожну ".concat(e," ").concat(r[t].single):e>=2&&e<=4?"кожні ".concat(e," ").concat(r[t].few):"кожні ".concat(e," ").concat(r[t].many)})(l.updatePeriod,l.time.toLowerCase())})})]})]})};let j=(0,n.forwardRef)((e,t)=>{let{t:r}=(0,p.$G)(),{layoutConfig:o,layoutState:l,onMenuToggle:u,showProfileSidebar:f}=(0,n.useContext)(s.V),g=(0,n.useRef)(null),v=(0,n.useRef)(null),y=(0,n.useRef)(null),[b,w]=(0,n.useState)(!1),{schedule:x,nextFireTime:S,toggle:C}=(0,N.useSchedule)(),k=(0,n.useRef)(null);return(0,n.useImperativeHandle)(t,()=>({menubutton:g.current,topbarmenu:v.current,topbarmenubutton:y.current})),(0,a.jsxs)("div",{className:"layout-topbar",children:[(0,a.jsx)(m.F,{ref:k,position:"bottom-right"}),(0,a.jsx)(c(),{href:"/",className:"layout-topbar-logo",children:(0,a.jsx)("span",{children:"HomerAssistant"})}),(0,a.jsxs)("div",{ref:v,className:(0,i.AK)("layout-topbar-menu",{"layout-topbar-menu-mobile-active":l.profileSidebarVisible}),children:[(0,a.jsx)(h.U,{id:"scanner-status",value:x.status,onChange:()=>C().then(()=>{var e;null===(e=k.current)||void 0===e||e.show({severity:"success",summary:"".concat(r("toast.details.scanner-update")),detail:"".concat("ENABLED"===x.status?"every "+x.updatePeriod+" "+x.time.toLowerCase():"Disabled"),life:3e3})}),options:[{name:"On",value:"ENABLED"},{name:"Off",value:"DISABLED"}],optionLabel:"name",optionDisabled:"constant",className:"mr-2"}),(0,a.jsx)(d.z,{icon:"pi pi-clock",size:"small","aria-label":"Search",onClick:()=>{w(!0)},className:"mr-4",children:(0,a.jsxs)("p",{className:"ml-2",children:[S&&S.isAfter(E()())?r("dialog.scanner.nextFiretTime",{time:S.format("HH:mm:ss")}):r("dialog.scanner.nextFiretTime",{time:"..."})," "]})}),(0,a.jsx)(Profile,{})]}),(0,a.jsx)(dialog_schedule,{visible:b,onHide:()=>{w(!1)},onSubmit:()=>{},onCancel:()=>{}})]})});j.displayName="AppTopbar";var R=r(5752),q=r(6568),layout=e=>{let{children:t}=e,{layoutConfig:r,layoutState:l,setLayoutState:u}=(0,n.useContext)(s.V),{setRipple:c}=(0,n.useContext)(q.Ou),d=(0,n.useRef)(null),h=(0,n.useRef)(null),[m,p]=(0,o.OR)({type:"click",listener:e=>{var t,r,a,o,n,i;let s=!((null===(t=h.current)||void 0===t?void 0:t.isSameNode(e.target))||(null===(r=h.current)||void 0===r?void 0:r.contains(e.target))||(null===(o=d.current)||void 0===o?void 0:null===(a=o.menubutton)||void 0===a?void 0:a.isSameNode(e.target))||(null===(i=d.current)||void 0===i?void 0:null===(n=i.menubutton)||void 0===n?void 0:n.contains(e.target)));s&&hideMenu()}}),f=(0,y.usePathname)(),g=(0,y.useSearchParams)();(0,n.useEffect)(()=>{hideMenu(),hideProfileMenu()},[f,g]);let[v,b]=(0,o.OR)({type:"click",listener:e=>{var t,r,a,o,n,i,s,l;let u=!((null===(r=d.current)||void 0===r?void 0:null===(t=r.topbarmenu)||void 0===t?void 0:t.isSameNode(e.target))||(null===(o=d.current)||void 0===o?void 0:null===(a=o.topbarmenu)||void 0===a?void 0:a.contains(e.target))||(null===(i=d.current)||void 0===i?void 0:null===(n=i.topbarmenubutton)||void 0===n?void 0:n.isSameNode(e.target))||(null===(l=d.current)||void 0===l?void 0:null===(s=l.topbarmenubutton)||void 0===s?void 0:s.contains(e.target)));u&&hideProfileMenu()}}),hideMenu=()=>{u(e=>({...e,overlayMenuActive:!1,staticMenuMobileActive:!1,menuHoverActive:!1})),p(),unblockBodyScroll()},hideProfileMenu=()=>{u(e=>({...e,profileSidebarVisible:!1})),b()},blockBodyScroll=()=>{document.body.classList?document.body.classList.add("blocked-scroll"):document.body.className+=" blocked-scroll"},unblockBodyScroll=()=>{document.body.classList?document.body.classList.remove("blocked-scroll"):document.body.className=document.body.className.replace(RegExp("(^|\\b)"+"blocked-scroll".split(" ").join("|")+"(\\b|$)","gi")," ")};(0,o.nw)(()=>{c(r.ripple)}),(0,n.useEffect)(()=>{(l.overlayMenuActive||l.staticMenuMobileActive)&&m(),l.staticMenuMobileActive&&blockBodyScroll()},[l.overlayMenuActive,l.staticMenuMobileActive]),(0,n.useEffect)(()=>{l.profileSidebarVisible&&v()},[l.profileSidebarVisible]),(0,o.zq)(()=>{p(),b()});let w=(0,i.AK)("layout-wrapper",{"layout-overlay":"overlay"===r.menuMode,"layout-static":"static"===r.menuMode,"layout-static-inactive":l.staticMenuDesktopInactive&&"static"===r.menuMode,"layout-overlay-active":l.overlayMenuActive,"layout-mobile-active":l.staticMenuMobileActive,"p-input-filled":"filled"===r.inputStyle,"p-ripple-disabled":!r.ripple});return(0,a.jsx)(n.Fragment,{children:(0,a.jsxs)("div",{className:w,children:[(0,a.jsx)(j,{ref:d}),(0,a.jsx)("div",{ref:h,className:"layout-sidebar"}),(0,a.jsxs)("div",{className:"layout-main-container",children:[(0,a.jsx)("div",{className:"layout-main",children:t}),(0,a.jsx)(layout_AppFooter,{})]}),(0,a.jsx)(R.default,{}),(0,a.jsx)("div",{className:"layout-mask"})]})})}}},function(e){e.O(0,[990,220,164,568,902,18,276,725,752,971,472,744],function(){return e(e.s=8153)}),_N_E=e.O()}]);