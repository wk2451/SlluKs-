require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([10],{45:function(t,e,i){"use strict";var s=o(i(1)),a=o(i(46));function o(t){return t&&t.__esModule?t:{default:t}}new s.default(a.default).$mount()},46:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(48),a=i.n(s),o=i(49),c=!1;var n=function(t){c||i(47)},r=i(0)(a.a,o.a,n,null,null);r.options.__file="..\\..\\..\\..\\Documents\\HBuilderProjects\\SLLUKS\\pages\\cart\\cart.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] cart.vue: functional components are not supported with templates, they should use render functions."),e.default=r.exports},47:function(t,e){},48:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:{order:[],checked:!1,checkedAll:!1,allNames:[],checkedNames:[],total_price:0,uid:"",is_login:!1},components:{},methods:{islogin:function(){var t=this;wx.checkSession({success:function(){t.is_login=!0},fail:function(){t.is_login=!1}})},getCartInfo:function(){var e=this;this.islogin(),e.is_login?(e.uid=t.getStorageSync("uid"),wx.request({url:"https://www.slluks.com/index.php/app/member/cartList",method:"POST",data:{buyer_id:e.uid},header:{"content-type":"application/json"},success:function(i){e.order=[],e.allNames=[],e.checkedNames=[],e.total_price=0,console.log(e.uid),"[]"!=JSON.stringify(i.data.cartList)?(i.data.cartList.forEach(function(t){t.checked=!1,e.allNames.push(t.cart_id),e.order.push(t)}),i.data.message?t.showToast({title:i.data.message,duration:2e3,icon:"none"}):t.showToast({title:"加载成功",duration:2e3,icon:"none"})):t.showToast({title:"购物车空空如也",duration:2e3,icon:"none"})},fail:function(){t.showToast({title:"加载失败",duration:2e3,icon:"none"})}})):t.showToast({title:"请先登陆",duration:2e3,icon:"none"})},checkboxChange:function(t){var e=this;t.detail.value.length==this.order.length?this.checkedAll=!0:t.detail.value.length<this.order.length&&(this.checkedAll=!1),this.checkedNames=t.detail.value,this.total_price=0,this.order.forEach(function(t){e.inarray(t.cart_id,e.checkedNames)&&(e.total_price+=t.price*t.num)}),e.total_price=e.total_price.toFixed(2),console.log(t.detail.value)},checkAllChange:function(t){var e=this;if(console.log(t.detail.value[0]),"ok"==t.detail.value[0]){for(var i=0;i<this.order.length;i++)this.order[i].checked=!0;this.checkedNames=this.allNames,this.checkedAll=!0,this.total_price=0,this.order.forEach(function(t){e.inarray(t.cart_id,e.checkedNames)&&(e.total_price+=t.price*t.num)}),console.log(this.checkedNames)}else if(void 0==t.detail.value[0]){this.checkedNames=[],this.checkedAll=!1,this.total_price=0;for(i=0;i<this.order.length;i++)this.order[i].checked=!1;console.log(this.checkedNames)}},inarray:function(t,e){for(var i in e)if(e[i]==t)return!0;return!1},setOrder:function(){"[]"!=JSON.stringify(this.checkedNames)?t.navigateTo({url:"/pages/creatorder/creatorder?uid="+this.uid+"&&cart_id="+JSON.stringify(this.checkedNames)}):t.showToast({title:"没有选中商品",duration:2e3,icon:"none"})}},onLoad:function(){this.getCartInfo()},onPullDownRefresh:function(){},onReachBottom:function(){},onTabItemTap:function(){this.getCartInfo(),t.pageScrollTo({scrollTop:0,duration:300})}}}).call(e,i(2).default)},49:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"page"},[0==t.order?i("view",{staticClass:"empty"},[i("image",{attrs:{src:"../../static/images/cart.png",mode:"widthFix"}}),i("p",[t._v("购物车空空如也")]),i("navigator",{staticClass:"goshoping",attrs:{url:"/pages/goodstype/goodstype","open-type":"switchTab"}},[t._v("去购物")])],1):i("view",[i("view",{staticClass:"title"},[i("checkbox-group",{attrs:{eventid:"Erl-0",mpcomid:"Jhj-0"},on:{change:t.checkAllChange}},[i("checkbox",{staticClass:"all",attrs:{checked:t.checkedAll,value:"ok"}}),t._v("全选\n\t\t\t")],1)],1),i("checkbox-group",{staticClass:"myorder",attrs:{eventid:"aaL-1",mpcomid:"umW-1"},on:{change:t.checkboxChange}},t._l(t.order,function(e,s){return i("label",{key:s,staticClass:"eveorder"},[i("view",{staticClass:"check"},[i("checkbox",{staticClass:"checked",attrs:{value:e.cart_id,checked:e.checked}})],1),i("view",{staticClass:"pic"},[i("image",{attrs:{src:e.goods_picture,mode:"widthFix"}})]),i("view",{staticClass:"goodsinfo"},[i("view",{staticClass:"name"},[t._v("\n\t\t\t\t\t\t"+t._s(e.goods_name)+"\n\t\t\t\t\t")]),i("view",{staticClass:"price"},[t._v("\n\t\t\t\t\t\t"+t._s(e.price)+"\n\t\t\t\t\t")])]),i("view",{staticClass:"stock"},[t._v("\n\t\t\t\t\tx"+t._s(e.num)+"\n\t\t\t\t")])])}))],1),i("view",{staticClass:"foot"},[i("view",{staticClass:"total_price"},[t._v("\n\t\t\t￥"+t._s(t.total_price)+"\n\t\t")]),i("view",{staticClass:"set_order",attrs:{eventid:"rh4-2"},on:{tap:t.setOrder}},[t._v("\n\t\t\t结算\n\t\t")])])])};s._withStripped=!0;var a={render:s,staticRenderFns:[]};e.a=a}},[45]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/cart/cart.js.map