(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9653:function(e,t,a){Promise.resolve().then(a.bind(a,7981))},7981:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return RootLayout}});var n=a(7437),i=a(7510),r=a(6568);a(5867),a(3229),a(1261),a(8060),a(5580);var s=a(2265),l=a(4033);function RootLayout(e){let{children:t}=e,a=(0,l.useRouter)();return(0,s.useLayoutEffect)(()=>{var e;null!==(e=localStorage.getItem("token"))&&void 0!==e||a.push("/login")}),(0,n.jsxs)("html",{lang:"en",style:{fontSize:"14px"},children:[(0,n.jsx)("head",{children:(0,n.jsx)("link",{id:"theme-css",href:"/themes/vela-green/theme.css",rel:"stylesheet"})}),(0,n.jsx)("body",{suppressHydrationWarning:!0,children:(0,n.jsx)(r.pp,{children:(0,n.jsx)(i.a,{children:t})})})]})}},5580:function(e,t,a){"use strict";a.d(t,{K:function(){return i18nextChangeLanguage}});var n=a(3968),i=a(251);n.ZP.use(i.Db).init({resources:{en:{translation:{common:{"input-search":"Search...","btn-new-request":"Create new request"},table:{header:{status:"Status",number:"Number","max-price":"Price","max-delivery-days":"Delivery","min-delivery-rating":"Rating",note:"Note","last-update":"Updated","last-min-price":"Last Minimal Price"},tooltips:{status:"Status",number:"Number","max-price":"Max Price","max-delivery-days":"Max Delivery Days","min-delivery-rating":"Min Delivery Rating",note:"Note","last-update":"Last update","last-min-price":"Last Minimal Price"},fields:{created:"created: ","last-update":"updated: ","last-min-price-time":"When the minimal price were updated: ","no-last-min-price":"No minimal price updates"},common:{"no-request-found":"No requests found."},pagination:"Showing {first} to {last} of {totalRecords} requests"},dialog:{new:{header:"Request Details",labels:{number:"Detail number:",original:"Is Original",brands:"Brands","max-price":"Max Price","max-delivery-days":"Max Delivery Days","min-delivery-rating":"Min Delivery Rating",note:"Note","current-min-price":"Current Minimal Price"},placeholders:{brands:"Possible Brands"},errors:{number:"Number is required.","max-price":"Max price is required.","max-delivery-days":"Max delivery days is required."}},delete:{header:"Confirm Delete",msg:"Are you sure you want to delete"},scanner:{header:"Scanner Configuration",labels:{interval:"Scanner Interval:","time-units":"Time Units:",minutes:"Minutes",hours:"Hours",days:"Days"},helper:"Scanner will update requests every {{interval}} {{unit}}.",nextFiretTime:"Next fire time: {{time}}"},common:{cancel:"Cancel",save:"Save",yes:"Yes",no:"No"}},toast:{summary:{successful:"Successful"},details:{created:"Request Created",updated:"Request Updated",deleted:"Request Deleted","status-changed":"Request {{number}} status was changed to {{status}}.","scanner-update":"Scanner Updated Successfuly"}},login:{header:"Welcome!",message:"Sign in to continue"},topbar:{profile:{menu:{header:"Profile",settings:"Settings",language:{title:"Language",uk:"Ukrainian",en:"English"},logout:"Logout"},toast:{summary:"Info",detail:'Menu item "Settings" under construction'}}}}},uk:{translation:{common:{"input-search":"Пошук...","btn-new-request":"Створити новий запит"},table:{header:{status:"Статус",number:"Номер","max-price":"Ціна","max-delivery-days":"Доставка","min-delivery-rating":"Рейтинг",note:"Примітки","last-update":"Оновлено","last-min-price":"Остання Ціна"},tooltips:{status:"Статус",number:"Номер","max-price":"Макс. ціна","max-delivery-days":"Макс. днів доставки","min-delivery-rating":"Мін. рейтинг доставки",note:"Примітки","last-update":"Оновлено","last-min-price":"Остання мінімальна ціна"},fields:{created:"створено:","last-update":"оновлено:","last-min-price-time":"Оновлено: ","no-last-min-price":"Немає оновлень"},common:{"no-request-found":"Запитів не знайдено."},pagination:"Показано від {first} до {last} з {totalRecords} запитів"},dialog:{new:{header:"Деталі запиту",labels:{number:"Номер деталі:",original:"Оригінал",brands:"Бренди","max-price":"Макс. ціна","max-delivery-days":"Макс. днів доставки","min-delivery-rating":"Мін. рейтинг доставки",note:"Примітки","current-min-price":"Поточна мінімальна ціна"},placeholders:{brands:"Можливі бренди"},errors:{number:"Номер обов'язковий.","max-price":"Максимальна ціна обов'язкова.","max-delivery-days":"Максимальна кількість днів доставки обов'язкова."}},delete:{header:"Підтвердити видалити",msg:"Ви впевнені, що хочете видалити"},scanner:{header:"Конфігурація сканера",labels:{interval:"Інтервал сканера:","time-units":"Одиниці часу:",minutes:"Хвилини",hours:"Години",days:"Дні"},helper:"Оновлення запитів {{interval}}.",nextFiretTime:"Наступний запуск: {{time}}"},common:{cancel:"Скасувати",save:"Зберегти",yes:"Так",no:"Ні"}},toast:{summary:{successful:"Успішно"},details:{created:"Запит Створено",updated:"Запит Оновлено",deleted:"Запит Видалено","status-changed":"Статус запиту {{number}} було змінено на {{status}}.","scanner-update":"Сканер успішно оновлено"}},login:{header:"Ласкаво просимо!",message:"Увійдіть, щоб продовжити"},topbar:{profile:{menu:{header:"Профіль",settings:"Налаштування",language:{title:"Мова",uk:"Українська",en:"Англійська"},logout:"Вийти"},toast:{summary:"Увага",detail:"Пункт меню \xabНалаштування\xbb в розробці"}}}}}},fallbackLng:"uk",interpolation:{escapeValue:!1}});let i18nextChangeLanguage=e=>{n.ZP.changeLanguage(e),localStorage.setItem("lng",e)}},7510:function(e,t,a){"use strict";a.d(t,{V:function(){return r},a:function(){return LayoutProvider}});var n=a(7437),i=a(2265);let r=(0,i.createContext)({}),LayoutProvider=e=>{let{children:t}=e,[a,s]=(0,i.useState)({ripple:!1,inputStyle:"outlined",menuMode:"overlay",colorScheme:"light",theme:"vela-green",scale:14}),[l,u]=(0,i.useState)({staticMenuDesktopInactive:!1,overlayMenuActive:!1,profileSidebarVisible:!1,configSidebarVisible:!1,staticMenuMobileActive:!1,menuHoverActive:!1}),isOverlay=()=>"overlay"===a.menuMode,isDesktop=()=>window.innerWidth>991;return(0,n.jsx)(r.Provider,{value:{layoutConfig:a,setLayoutConfig:s,layoutState:l,setLayoutState:u,onMenuToggle:()=>{isOverlay()&&u(e=>({...e,overlayMenuActive:!e.overlayMenuActive})),isDesktop()?u(e=>({...e,staticMenuDesktopInactive:!e.staticMenuDesktopInactive})):u(e=>({...e,staticMenuMobileActive:!e.staticMenuMobileActive}))},showProfileSidebar:()=>{u(e=>({...e,profileSidebarVisible:!e.profileSidebarVisible}))}},children:t})}},3229:function(){},1261:function(){},5867:function(){},8060:function(){},4033:function(e,t,a){e.exports=a(94)}},function(e){e.O(0,[608,220,164,568,299,971,472,744],function(){return e(e.s=9653)}),_N_E=e.O()}]);