(function(){"use strict";var t={8239:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var a=n(144),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("MyHeader"),n("v-main",[n("router-view")],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list-item",[n("v-list-item-title",{staticClass:"text-center text-h4 mt-12"},[t._v(" TODO ")])],1),n("v-divider",{staticClass:"mt-10"}),n("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{to:e.to,link:""}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),n("v-app-bar",{attrs:{app:"",color:"teal lighten-3",prominent:"",dark:"",elevation:"1",src:"https://picsum.photos/200/300?random"}},[n("div",{staticClass:"d-flex align-center"},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1),n("v-spacer"),n("v-btn",{attrs:{href:"https://github.com/brocadeyu/sharktodo",target:"_blank",text:""}},[n("v-icon",{staticClass:"mt-2"},[t._v("mdi-github")])],1)],1)],1)},s=[],l={name:"MyHeader",data:function(){return{drawer:null,items:[{title:"待办事项",icon:"mdi-format-list-checks",to:"/todo"},{title:"日程",icon:"mdi-calendar-month",to:"/cal"},{title:"关于",icon:"mdi-information-outline",to:"/about"}]}}},c=l,u=n(1001),d=n(3453),v=n.n(d),m=n(8320),p=n(5206),f=n(680),h=n(1418),g=n(6428),_=n(6816),y=n(7620),b=n(1245),k=n(459),C=n(8903),Z=n(3631),w=(0,u.Z)(c,i,s,!1,null,null,null),V=w.exports;v()(w,{VAppBar:m.Z,VAppBarNavIcon:p.Z,VBtn:f.Z,VDivider:h.Z,VIcon:g.Z,VList:_.Z,VListItem:y.Z,VListItemContent:b.km,VListItemIcon:k.Z,VListItemTitle:b.V9,VNavigationDrawer:C.Z,VSpacer:Z.Z});var T={name:"App",components:{MyHeader:V},data:function(){return{drawer:null,items:[{title:"Todo",icon:"mdi-format-list-checks",to:"/todo"},{title:"About",icon:"mdi-information-outline",to:"/about"}]}}},x=T,E=n(7524),O=n(7877),M=(0,u.Z)(x,o,r,!1,null,null,null),D=M.exports;v()(M,{VApp:E.Z,VMain:O.Z});var L=n(4758);a.Z.use(L.Z);var $=new L.Z({}),A=n(8345),I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column pa-1 "},[n("v-card",{staticClass:"col-12",attrs:{elevation:"2",color:"#C8E6C9"}},[n("h3",[t._v("已验收")]),n("draggable",{staticClass:"list-group",attrs:{list:t.list1,group:"people"},on:{change:t.log}},t._l(t.list1,(function(e,a){return n("div",{key:e.name,staticClass:"list-group-item"},[t._v(" "+t._s(e.name)+" "+t._s(a)+" ")])})),0)],1),n("v-card",{staticClass:"col-12  ",attrs:{color:"#FFCDD2"}},[n("h3",[t._v("已完成")]),n("draggable",{staticClass:"list-group",attrs:{list:t.list2,group:"people"},on:{change:t.log}},t._l(t.list2,(function(e,a){return n("div",{key:e.name,staticClass:"list-group-item"},[t._v(" "+t._s(e.name)+" "+t._s(a)+" ")])})),0)],1),n("v-card",{staticClass:"col-12",attrs:{color:"#FFCCBC"}},[n("h3",[t._v("正在进行")]),n("draggable",{staticClass:"list-group",attrs:{list:t.list3,group:"people"},on:{change:t.log}},t._l(t.list3,(function(e,a){return n("div",{key:e.name,staticClass:"list-group-item"},[t._v(" "+t._s(e.name)+" "+t._s(a)+" ")])})),0)],1),n("v-card",{staticClass:"col-12",attrs:{color:"#B3E5FC"}},[n("h3",[t._v("待办事项")]),n("draggable",{staticClass:"list-group",attrs:{list:t.list4,group:"people"},on:{change:t.log}},t._l(t.list4,(function(e,a){return n("div",{key:e.name,staticClass:"list-group-item"},[t._v(" "+t._s(e.name)+" "+t._s(a)+" ")])})),0)],1),n("div",{staticClass:"d-flex justify-center mt-4  "},[n("v-btn",{attrs:{fab:"",rounded:"",dark:"",color:"indigo"}},[n("v-icon",{attrs:{dark:""}},[t._v(" mdi-plus ")])],1)],1)],1)},F=[],J=(n(8309),n(9980)),P=n.n(J),j={name:"TodoList",order:1,components:{draggable:P()},data:function(){return{list1:[{name:"John",id:1},{name:"Joao",id:2},{name:"Jean",id:3},{name:"Gerard",id:4}],list2:[{name:"Juan",id:5},{name:"Edgard",id:6},{name:"Johnson",id:7}],list3:[{name:"Juan1",id:8},{name:"Edgard1",id:9},{name:"Johnson1",id:10}],list4:[{name:"Juan2",id:11},{name:"Edgard2",id:12},{name:"Johnson2",id:13}]}},methods:{add:function(){this.list.push({name:"Juan"})},replace:function(){this.list=[{name:"Edgard"}]},clone:function(t){return{name:t.name+" cloned"}},log:function(t){window.console.log(t)}}},B=j,S=n(26),H=(0,u.Z)(B,I,F,!1,null,null,null),q=H.exports;v()(H,{VBtn:f.Z,VCard:S.Z,VIcon:g.Z});var R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"fill-height"},[n("v-col",[n("v-sheet",{attrs:{height:"64"}},[n("v-toolbar",{attrs:{flat:""}},[n("v-btn",{staticClass:"mr-4",attrs:{outlined:"",color:"grey darken-2"},on:{click:t.setToday}},[t._v(" Today ")]),n("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:t.prev}},[n("v-icon",{attrs:{small:""}},[t._v(" mdi-chevron-left ")])],1),n("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:t.next}},[n("v-icon",{attrs:{small:""}},[t._v(" mdi-chevron-right ")])],1),t.$refs.calendar?n("v-toolbar-title",[t._v(" "+t._s(t.$refs.calendar.title)+" ")]):t._e(),n("v-spacer"),n("v-menu",{attrs:{bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{outlined:"",color:"grey darken-2"}},"v-btn",o,!1),a),[n("span",[t._v(t._s(t.typeToLabel[t.type]))]),n("v-icon",{attrs:{right:""}},[t._v(" mdi-menu-down ")])],1)]}}])},[n("v-list",[n("v-list-item",{on:{click:function(e){t.type="day"}}},[n("v-list-item-title",[t._v("Day")])],1),n("v-list-item",{on:{click:function(e){t.type="week"}}},[n("v-list-item-title",[t._v("Week")])],1),n("v-list-item",{on:{click:function(e){t.type="month"}}},[n("v-list-item-title",[t._v("Month")])],1),n("v-list-item",{on:{click:function(e){t.type="4day"}}},[n("v-list-item-title",[t._v("4 days")])],1)],1)],1)],1)],1),n("v-sheet",{attrs:{height:"600"}},[n("v-calendar",{ref:"calendar",attrs:{color:"primary",events:t.events,"event-color":t.getEventColor,type:t.type},on:{"click:event":t.showEvent,"click:more":t.viewDay,"click:date":t.viewDay,change:t.updateRange},model:{value:t.focus,callback:function(e){t.focus=e},expression:"focus"}}),n("v-menu",{attrs:{"close-on-content-click":!1,activator:t.selectedElement,"offset-x":""},model:{value:t.selectedOpen,callback:function(e){t.selectedOpen=e},expression:"selectedOpen"}},[n("v-card",{attrs:{color:"grey lighten-4","min-width":"350px",flat:""}},[n("v-toolbar",{attrs:{color:t.selectedEvent.color,dark:""}},[n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-pencil")])],1),n("v-toolbar-title",{domProps:{innerHTML:t._s(t.selectedEvent.name)}}),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-heart")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-dots-vertical")])],1)],1),n("v-card-text",[n("span",{domProps:{innerHTML:t._s(t.selectedEvent.details)}})]),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"secondary"},on:{click:function(e){t.selectedOpen=!1}}},[t._v(" Cancel ")])],1)],1)],1)],1)],1)],1)},W=[],N={data:function(){return{name:"MyCalendar",focus:"",type:"month",typeToLabel:{month:"Month",week:"Week",day:"Day","4day":"4 Days"},selectedEvent:{},selectedElement:null,selectedOpen:!1,events:[],colors:["blue","indigo","deep-purple","cyan","green","orange","grey darken-1"],names:["Meeting","Holiday","PTO","Travel","Event","Birthday","Conference","Party"]}},mounted:function(){this.$refs.calendar.checkChange()},methods:{viewDay:function(t){var e=t.date;this.focus=e,this.type="day"},getEventColor:function(t){return t.color},setToday:function(){this.focus=""},prev:function(){this.$refs.calendar.prev()},next:function(){this.$refs.calendar.next()},showEvent:function(t){var e=this,n=t.nativeEvent,a=t.event,o=function(){e.selectedEvent=a,e.selectedElement=n.target,requestAnimationFrame((function(){return requestAnimationFrame((function(){return e.selectedOpen=!0}))}))};this.selectedOpen?(this.selectedOpen=!1,requestAnimationFrame((function(){return requestAnimationFrame((function(){return o()}))}))):o(),n.stopPropagation()},updateRange:function(t){for(var e=t.start,n=t.end,a=[],o=new Date("".concat(e.date,"T00:00:00")),r=new Date("".concat(n.date,"T23:59:59")),i=(r.getTime()-o.getTime())/864e5,s=this.rnd(i,i+20),l=0;l<s;l++){var c=0===this.rnd(0,3),u=this.rnd(o.getTime(),r.getTime()),d=new Date(u-u%9e5),v=9e5*this.rnd(2,c?288:8),m=new Date(d.getTime()+v);a.push({name:this.names[this.rnd(0,this.names.length-1)],start:d,end:m,color:this.colors[this.rnd(0,this.colors.length-1)],timed:!c})}this.events=a},rnd:function(t,e){return Math.floor((e-t+1)*Math.random())+t}}},G=N,z=n(8538),K=n(7118),Q=n(2102),U=n(9904),X=n(2877),Y=n(3385),tt=n(6656),et=n(7921),nt=(0,u.Z)(G,R,W,!1,null,null,null),at=nt.exports;v()(nt,{VBtn:f.Z,VCalendar:z.Z,VCard:S.Z,VCardActions:K.h7,VCardText:K.ZB,VCol:Q.Z,VIcon:g.Z,VList:_.Z,VListItem:y.Z,VListItemTitle:b.V9,VMenu:U.Z,VRow:X.Z,VSheet:Y.Z,VSpacer:Z.Z,VToolbar:tt.Z,VToolbarTitle:et.qW});var ot=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},rt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about  pa-6"},[n("h1",[t._v("关于")]),n("p",[t._v("... ...")])])}],it={name:"MyAbout"},st=it,lt=(0,u.Z)(st,ot,rt,!1,null,null,null),ct=lt.exports,ut=new A.Z({routes:[{path:"/todo",component:q},{path:"/cal",component:at},{path:"/about",component:ct},{path:"*",redirect:"/todo"}]});a.Z.use(A.Z),a.Z.config.productionTip=!1,new a.Z({vuetify:$,router:ut,render:function(t){return t(D)}}).$mount("#app")}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={exports:{}};return t[a].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,a,o,r){if(!a){var i=1/0;for(u=0;u<t.length;u++){a=t[u][0],o=t[u][1],r=t[u][2];for(var s=!0,l=0;l<a.length;l++)(!1&r||i>=r)&&Object.keys(n.O).every((function(t){return n.O[t](a[l])}))?a.splice(l--,1):(s=!1,r<i&&(i=r));if(s){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[a,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,r,i=a[0],s=a[1],l=a[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var u=l(n)}for(e&&e(a);c<i.length;c++)r=i[c],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(u)},a=self["webpackChunksharktodo"]=self["webpackChunksharktodo"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(8239)}));a=n.O(a)})();
//# sourceMappingURL=app-legacy.41fec46d.js.map