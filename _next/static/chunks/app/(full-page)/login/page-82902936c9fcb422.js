(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[681],{5670:function(e,t,a){!function(e){e.defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")},week:{dow:1,doy:4}})}(a(2067))},8890:function(e,t,a){!function(e){"use strict";function relativeTimeWithPlural(e,t,a){var i,r;return"m"===a?t?"хвилина":"хвилину":"h"===a?t?"година":"годину":e+" "+(i=+e,r=({ss:t?"секунда_секунди_секунд":"секунду_секунди_секунд",mm:t?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:t?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"})[a].split("_"),i%10==1&&i%100!=11?r[0]:i%10>=2&&i%10<=4&&(i%100<10||i%100>=20)?r[1]:r[2])}function processHoursFunction(e){return function(){return e+"о"+(11===this.hours()?"б":"")+"] LT"}}e.defineLocale("uk",{months:{format:"січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),standalone:"січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")},monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekdays:function(e,t){var a={nominative:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),accusative:"неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),genitive:"неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")};return!0===e?a.nominative.slice(1,7).concat(a.nominative.slice(0,1)):e?a[/(\[[ВвУу]\]) ?dddd/.test(t)?"accusative":/\[?(?:минулої|наступної)? ?\] ?dddd/.test(t)?"genitive":"nominative"][e.day()]:a.nominative},weekdaysShort:"нд_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"},calendar:{sameDay:processHoursFunction("[Сьогодні "),nextDay:processHoursFunction("[Завтра "),lastDay:processHoursFunction("[Вчора "),nextWeek:processHoursFunction("[У] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return processHoursFunction("[Минулої] dddd [").call(this);case 1:case 2:case 4:return processHoursFunction("[Минулого] dddd [").call(this)}},sameElse:"L"},relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",ss:relativeTimeWithPlural,m:relativeTimeWithPlural,mm:relativeTimeWithPlural,h:"годину",hh:relativeTimeWithPlural,d:"день",dd:relativeTimeWithPlural,M:"місяць",MM:relativeTimeWithPlural,y:"рік",yy:relativeTimeWithPlural},meridiemParse:/ночі|ранку|дня|вечора/,isPM:function(e){return/^(дня|вечора)$/.test(e)},meridiem:function(e,t,a){return e<4?"ночі":e<12?"ранку":e<17?"дня":"вечора"},dayOfMonthOrdinalParse:/\d{1,2}-(й|го)/,ordinal:function(e,t){switch(t){case"M":case"d":case"DDD":case"w":case"W":return e+"-й";case"D":return e+"-го";default:return e}},week:{dow:1,doy:7}})}(a(2067))},7861:function(e,t,a){Promise.resolve().then(a.bind(a,1972))},1972:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return page}});var i=a(7437),r=a(2265),n=a(7510),s=a(9851),telegram_login_widget=()=>((0,r.useEffect)(()=>{var e;let t=document.createElement("script"),a=localStorage.getItem("lng")||"uk";t.src="https://telegram.org/js/telegram-widget.js?22",t.setAttribute("data-telegram-login","".concat("homer_fisher_bot")),t.setAttribute("data-size","medium"),t.setAttribute("data-onauth","onTelegramAuth(user)"),t.setAttribute("data-userpic","false"),t.setAttribute("data-request-access","write"),t.setAttribute("data-lang",a),t.async=!0,null===(e=document.getElementById("telegram-login"))||void 0===e||e.appendChild(t),window.onTelegramAuth=async e=>{try{let t=await fetch("".concat("https://au-homer-fisher-go-953161734119.europe-west1.run.app/api","/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw Error("Authentication failed");let a=t.headers.get("Authorization");if(a&&a.startsWith("Bearer ")){let e=a.split(" ")[1];localStorage.setItem("token",e),window.location.href="/"}else console.error("Token not found in headers")}catch(e){console.error("Error:",e)}}},[]),(0,i.jsx)("div",{id:"telegram-login"})),l=a(251),o=a(2838);a(8890),a(5670);var d=a(5580),page=()=>{(0,r.useEffect)(()=>{let e=localStorage.getItem("lng");e&&((0,d.K)(e),o.Z.locale(e))},[]);let{layoutConfig:e}=(0,r.useContext)(n.V),{t}=(0,l.$G)(),a=(0,s.AK)("surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden",{"p-input-filled":"filled"===e.inputStyle});return(0,i.jsx)("div",{className:a,children:(0,i.jsx)("div",{className:"flex flex-column align-items-center justify-content-center",children:(0,i.jsx)("div",{style:{borderRadius:"56px",padding:"0.3rem",background:"linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"},children:(0,i.jsxs)("div",{className:"w-full surface-card py-8 px-5 sm:px-8",style:{borderRadius:"53px"},children:[(0,i.jsxs)("div",{className:"text-center mb-5",children:[(0,i.jsx)("div",{className:"text-900 text-3xl font-medium mb-3",children:t("login.header")}),(0,i.jsx)("span",{className:"text-600 font-medium",children:t("login.message")})]}),(0,i.jsx)("div",{className:"text-center mb-5",children:(0,i.jsx)(telegram_login_widget,{})})]})})})})}},5580:function(e,t,a){"use strict";a.d(t,{K:function(){return i18nextChangeLanguage}});var i=a(3968),r=a(251);i.ZP.use(r.Db).init({resources:{en:{translation:{common:{"input-search":"Search...","btn-new-request":"Create new request"},table:{header:{status:"Status",number:"Number","max-price":"Price","max-delivery-days":"Delivery","min-delivery-rating":"Rating",note:"Note","last-update":"Updated","last-min-price":"Last Minimal Price"},tooltips:{status:"Status",number:"Number","max-price":"Max Price","max-delivery-days":"Max Delivery Days","min-delivery-rating":"Min Delivery Rating",note:"Note","last-update":"Last update","last-min-price":"Last Minimal Price"},fields:{created:"created: ","last-update":"updated: ","last-min-price-time":"When the minimal price were updated: ","no-last-min-price":"No minimal price updates"},common:{"no-request-found":"No requests found."},pagination:"Showing {first} to {last} of {totalRecords} requests"},dialog:{new:{header:"Request Details",labels:{number:"Detail number:",brands:"Brands","max-price":"Max Price","max-delivery-days":"Max Delivery Days","min-delivery-rating":"Min Delivery Rating",note:"Note","current-min-price":"Current Minimal Price"},placeholders:{brands:"Possible Brands"},errors:{number:"Number is required.","max-price":"Max price is required.","max-delivery-days":"Max delivery days is required."}},delete:{header:"Confirm Delete",msg:"Are you sure you want to delete"},scanner:{header:"Scanner Configuration",labels:{interval:"Scanner Interval:","time-units":"Time Units:",minutes:"Minutes",hours:"Hours",days:"Days"},helper:"Scanner will update requests every {{interval}} {{unit}}.",nextFiretTime:"Next fire time: {{time}}"},common:{cancel:"Cancel",save:"Save",yes:"Yes",no:"No"}},toast:{summary:{successful:"Successful"},details:{created:"Request Created",updated:"Request Updated",deleted:"Request Deleted","status-changed":"Request {{number}} status was changed to {{status}}.","scanner-update":"Scanner Updated Successfuly"}},login:{header:"Welcome!",message:"Sign in to continue"},topbar:{profile:{menu:{header:"Profile",settings:"Settings",language:{title:"Language",uk:"Ukrainian",en:"English"},logout:"Logout"},toast:{summary:"Info",detail:'Menu item "Settings" under construction'}}}}},uk:{translation:{common:{"input-search":"Пошук...","btn-new-request":"Створити новий запит"},table:{header:{status:"Статус",number:"Номер","max-price":"Ціна","max-delivery-days":"Доставка","min-delivery-rating":"Рейтинг",note:"Примітки","last-update":"Оновлено","last-min-price":"Остання Ціна"},tooltips:{status:"Статус",number:"Номер","max-price":"Макс. ціна","max-delivery-days":"Макс. днів доставки","min-delivery-rating":"Мін. рейтинг доставки",note:"Примітки","last-update":"Оновлено","last-min-price":"Остання мінімальна ціна"},fields:{created:"створено:","last-update":"оновлено:","last-min-price-time":"Оновлено: ","no-last-min-price":"Немає оновлень"},common:{"no-request-found":"Запитів не знайдено."},pagination:"Показано від {first} до {last} з {totalRecords} запитів"},dialog:{new:{header:"Деталі запиту",labels:{number:"Номер деталі:",brands:"Бренди","max-price":"Макс. ціна","max-delivery-days":"Макс. днів доставки","min-delivery-rating":"Мін. рейтинг доставки",note:"Примітки","current-min-price":"Поточна мінімальна ціна"},placeholders:{brands:"Можливі бренди"},errors:{number:"Номер обов'язковий.","max-price":"Максимальна ціна обов'язкова.","max-delivery-days":"Максимальна кількість днів доставки обов'язкова."}},delete:{header:"Підтвердити видалити",msg:"Ви впевнені, що хочете видалити"},scanner:{header:"Конфігурація сканера",labels:{interval:"Інтервал сканера:","time-units":"Одиниці часу:",minutes:"Хвилини",hours:"Години",days:"Дні"},helper:"Оновлення запитів {{interval}}.",nextFiretTime:"Наступний запуск: {{time}}"},common:{cancel:"Скасувати",save:"Зберегти",yes:"Так",no:"Ні"}},toast:{summary:{successful:"Успішно"},details:{created:"Запит Створено",updated:"Запит Оновлено",deleted:"Запит Видалено","status-changed":"Статус запиту {{number}} було змінено на {{status}}.","scanner-update":"Сканер успішно оновлено"}},login:{header:"Ласкаво просимо!",message:"Увійдіть, щоб продовжити"},topbar:{profile:{menu:{header:"Профіль",settings:"Налаштування",language:{title:"Мова",uk:"Українська",en:"Англійська"},logout:"Вийти"},toast:{summary:"Увага",detail:"Пункт меню \xabНалаштування\xbb в розробці"}}}}}},fallbackLng:"uk",interpolation:{escapeValue:!1}});let i18nextChangeLanguage=e=>{i.ZP.changeLanguage(e),localStorage.setItem("lng",e)}},2838:function(e,t,a){"use strict";var i=a(3968),r=a(2067),n=a.n(r);a(8890),a(5670),n().locale(i.ZP.language),t.Z=n()},7510:function(e,t,a){"use strict";a.d(t,{V:function(){return n},a:function(){return LayoutProvider}});var i=a(7437),r=a(2265);let n=(0,r.createContext)({}),LayoutProvider=e=>{let{children:t}=e,[a,s]=(0,r.useState)({ripple:!1,inputStyle:"outlined",menuMode:"overlay",colorScheme:"light",theme:"vela-green",scale:14}),[l,o]=(0,r.useState)({staticMenuDesktopInactive:!1,overlayMenuActive:!1,profileSidebarVisible:!1,configSidebarVisible:!1,staticMenuMobileActive:!1,menuHoverActive:!1}),isOverlay=()=>"overlay"===a.menuMode,isDesktop=()=>window.innerWidth>991;return(0,i.jsx)(n.Provider,{value:{layoutConfig:a,setLayoutConfig:s,layoutState:l,setLayoutState:o,onMenuToggle:()=>{isOverlay()&&o(e=>({...e,overlayMenuActive:!e.overlayMenuActive})),isDesktop()?o(e=>({...e,staticMenuDesktopInactive:!e.staticMenuDesktopInactive})):o(e=>({...e,staticMenuMobileActive:!e.staticMenuMobileActive}))},showProfileSidebar:()=>{o(e=>({...e,profileSidebarVisible:!e.profileSidebarVisible}))}},children:t})}}},function(e){e.O(0,[990,220,164,971,472,744],function(){return e(e.s=7861)}),_N_E=e.O()}]);