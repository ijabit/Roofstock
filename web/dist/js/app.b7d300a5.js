(function(e){function t(t){for(var r,i,o=t[0],l=t[1],c=t[2],u=0,p=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},s=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},b381:function(e,t,a){"use strict";a("d281")},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center flex-grow-1"},[a("v-img",{staticClass:"shrink mr-2 hidden-sm-and-down float-left",attrs:{alt:"Vuetify Logo",contain:"",src:"https://www.roofstock.com/Content/Images/rs-logo-blue.png",transition:"scale-transition",width:"200"}}),a("div",{staticClass:"title-spacer hidden-sm-and-down"}),a("div",{staticClass:"flex-grow-1 text-center text-no-wrap text-h5 app-bar-title float-left"},[e._v(" Property Manager ")])],1)]),a("v-main",{staticStyle:{height:"100%"}},[a("Home")],1)],1)},s=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home grey lighten-2",staticStyle:{height:"100%"}},[a("v-container",[a("property-manager")],1)],1)},o=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-card",[a("v-card-title",[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.properties,"pagination.sync":"pagination","item-key":"id",loading:e.isLoading,search:e.search,"single-expand":"",expanded:e.expandedItems,"show-expand":""},on:{"update:expanded":function(t){e.expandedItems=t}},scopedSlots:e._u([{key:"item.address.address1",fn:function(t){var r=t.item;return[r.address?[e._v(" "+e._s(r.address.address1+" "+(r.address.address2||""))),a("br"),e._v(" "+e._s(r.address.city+", "+r.address.state+" "+r.address.zip)+" ")]:e._e()]}},{key:"item.financial.listPrice",fn:function(t){var a=t.item;return[a.financial?[e._v(e._s(e._f("toCurrency")(a.financial.listPrice)))]:e._e()]}},{key:"item.lease.leaseSummary.monthlyRent",fn:function(t){var a=t.item;return[a.lease?[e._v(e._s(e._f("toCurrency")(a.lease.leaseSummary.monthlyRent)))]:e._e()]}},{key:"item.financial.grossYield",fn:function(t){var a=t.item;return[a.financial&&a.lease?[e._v(e._s(e._f("toPercent")(12*a.lease.leaseSummary.monthlyRent/a.financial.listPrice,2)))]:e._e()]}},{key:"expanded-item",fn:function(t){var r=t.headers,n=t.item;return[a("td",{attrs:{colspan:r.length}},[a("v-card",{staticClass:"mx-auto my-12",attrs:{"max-width":"374"}},[null!==n.mainImageUrl?a("v-img",{attrs:{height:"250",src:n.mainImageUrl}}):e._e(),a("v-card-title",[e._v(e._s(n.address.address1+" "+(n.address.address2||""))),a("br"),e._v(" "+e._s(n.address.city+", "+n.address.state+" "+n.address.zip))]),a("v-card-text",["OffMarket"==n.status?a("div",{staticClass:"my-4 subtitle-1"},[e._v(" Off Market ")]):a("div",{staticClass:"my-4 subtitle-1"},[e._v(" Lorem ipsum ")]),a("div",[e._v("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium")])]),a("v-divider",{staticClass:"mx-4"}),n.financial&&n.lease?a("v-card-title",[e._v("Financial")]):e._e(),n.financial&&n.lease?a("v-card-text",[e._v(" List Price $"+e._s(n.financial.listPrice.toFixed(2))+" "),a("br"),e._v(" Monthly Rent $"+e._s(n.lease.leaseSummary.monthlyRent.toFixed(2))+" ")]):e._e(),a("v-card-actions",[a("v-btn",{attrs:{color:"deep-purple lighten-2",text:""}},[e._v(" Invest ")])],1)],1)],1)]}}],null,!0)})],1)],1)},c=[],d=(a("d3b7"),r["a"].extend({created:function(){var e=this;fetch("https://samplerspubcontent.blob.core.windows.net/public/properties.json").then((function(t){t.ok?t.json().then((function(t){e.properties=t.properties,e.isLoading=!1})):e.dataFetchErrorMessage=t.statusText})).catch(this.errorHandler)},data:function(){return{dataFetchErrorMessage:"",expandedItems:[],isLoading:!0,properties:[],search:""}},computed:{headers:function(){var e=[{sortable:!0,text:"Address",value:"address.address1"},{sortable:!0,text:"Year Built",value:"physical.yearBuilt"},{sortable:!0,text:"List Price",value:"financial.listPrice"},{sortable:!0,text:"Monthly Rent",value:"lease.leaseSummary.monthlyRent"},{sortable:!0,text:"Gross Yield %",value:"financial.grossYield"},{text:"",value:"data-table-expand"}];return e}},methods:{errorHandler:function(e){this.dataFetchErrorMessage=e.message}},watch:{dataFetchErrorMessage:function(e){console.error(e)}}})),u=d,p=a("2877"),f=a("6544"),m=a.n(f),v=a("8336"),h=a("b0af"),y=a("99d9"),b=a("8fea"),g=a("ce7e"),_=a("adda"),x=a("8654"),w=Object(p["a"])(u,l,c,!1,null,null,null),C=w.exports;m()(w,{VBtn:v["a"],VCard:h["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:y["c"],VDataTable:b["a"],VDivider:g["a"],VImg:_["a"],VTextField:x["a"]});var P=r["a"].extend({name:"Home",components:{PropertyManager:C}}),S=P,k=a("a523"),O=Object(p["a"])(S,i,o,!1,null,null,null),M=O.exports;m()(O,{VContainer:k["a"]});var V=r["a"].extend({name:"App",components:{Home:M}}),j=V,F=(a("b381"),a("7496")),I=a("40dc"),T=a("f6c4"),E=Object(p["a"])(j,n,s,!1,null,"d00a73b8",null),L=E.exports;m()(E,{VApp:F["a"],VAppBar:I["a"],VImg:_["a"],VMain:T["a"]});var R=a("8c4f");r["a"].use(R["a"]);var H=[{path:"/",name:"Home",component:M}],$=new R["a"]({mode:"history",base:"/",routes:H}),A=$,D=a("f309");r["a"].use(D["a"]);var U=new D["a"]({});a("4de4");r["a"].filter("toCurrency",(function(e){if("number"!==typeof e)return e;var t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0});return t.format(e)})),r["a"].filter("toPercent",(function(e,t){if("number"!==typeof e)return e;var a=new Intl.NumberFormat("en-US",{minimumFractionDigits:null!==t?t:0,style:"percent"});return a.format(e)})),r["a"].config.productionTip=!1,new r["a"]({router:A,vuetify:U,render:function(e){return e(L)}}).$mount("#app")},d281:function(e,t,a){}});
//# sourceMappingURL=app.b7d300a5.js.map