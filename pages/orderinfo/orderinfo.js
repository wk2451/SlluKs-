require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{75:function(e,o,t){"use strict";var r=n(t(1)),s=n(t(76));function n(e){return e&&e.__esModule?e:{default:e}}new r.default(s.default).$mount()},76:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=t(78),s=t.n(r),n=t(79),i=!1;var a=function(e){i||t(77)},d=t(0)(s.a,n.a,a,null,null);d.options.__file="..\\..\\..\\..\\Documents\\HBuilderProjects\\SLLUKS\\pages\\orderinfo\\orderinfo.vue",d.esModule&&Object.keys(d.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),d.options.functional&&console.error("[vue-loader] orderinfo.vue: functional components are not supported with templates, they should use render functions."),o.default=d.exports},77:function(e,o){},78:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{order_id:"",order_info:[],order_gooods_info:[]}},methods:{getOrderInfo:function(e){var o=this;wx.request({url:"https://www.slluks.com/index.php/app/order/wechatOrderDetail",data:{order_id:e},header:{"content-type":"application/json"},success:function(e){o.order_info=e.data,o.order_gooods_info=e.data.goods_info,console.log(e.data.goods_info)}})}},onLoad:function(e){this.order_id=e.order_id,this.getOrderInfo(this.order_id)}}},79:function(e,o,t){"use strict";var r=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("view",{staticClass:"page"},[t("view",{staticClass:"order_info"},[e._v("\n\t\t订单号 : "+e._s(e.order_info.order_no)+"\n\t")]),t("view",{staticClass:"order_info"},[e._v("\n\t\t订单创建时间 : "+e._s(e.order_info.create_time)+"\n\t")]),t("view",{staticClass:"goods_info"},[e._v("商品名称 : ")]),t("view",{staticClass:"goods_info"},[e._v("商品单价 : ")]),t("view",{staticClass:"goods_info"},[e._v("商品数量 : ")]),e._l(e.order_gooods_info,function(o,r){return t("view",{key:r},[t("view",{staticClass:"goods_info"},[e._v(e._s(o.goods_name))]),t("view",{staticClass:"goods_info"},[e._v("￥"+e._s(o.price))]),t("view",{staticClass:"goods_info"},[e._v(e._s(o.num))])])}),t("view",{staticClass:"order_info"},[e._v("\n\t\t支付金额 : ￥"+e._s(e.order_info.pay_money)+".00\n\t")]),t("view",{staticClass:"order_info"},[e._v("\n\t\t订单状态 : "+e._s(e.order_info.order_status)+"\n\t")]),0==e.order_info.order_status&&1==e.order_info.pay_status?t("view",{},[t("button",{attrs:{type:"primary"}},[e._v("去支付")])],1):e._e()],2)};r._withStripped=!0;var s={render:r,staticRenderFns:[]};o.a=s}},[75]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/orderinfo/orderinfo.js.map