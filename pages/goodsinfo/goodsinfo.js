require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([7],{50:function(t,o,s){"use strict";var e=n(s(1)),i=n(s(51));function n(t){return t&&t.__esModule?t:{default:t}}new e.default(i.default).$mount()},51:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=s(53),i=s.n(e),n=s(54),a=!1;var d=function(t){a||s(52)},c=s(0)(i.a,n.a,d,null,null);c.options.__file="..\\..\\..\\..\\Documents\\HBuilderProjects\\SLLUKS\\pages\\goodsinfo\\goodsinfo.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] goodsinfo.vue: functional components are not supported with templates, they should use render functions."),o.default=c.exports},52:function(t,o){},53:function(t,o,s){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:{goods_id:0,goods_info:[],cover:"",disabled:!1,plain:!1,loading:!1,primarySize:"default",type:"primary",nodes:"",show:!1,count:1,num:0,uid:"",is_login:!1},onLoad:function(o){this.uid=t.getStorageSync("uid"),this.goods_id=o.goodsid,this.show=!1,this.islogin(),this.reset(),this.jiazai()},components:{},methods:{jiazai:function(){var t=this;wx.request({url:"https://www.slluks.com/index.php/app/goods/goodsinfo",header:{"content-type":"application/json"},data:{goodsid:this.goods_id},success:function(o){t.goods_info=o.data,t.cover=t.goods_info.img_temp_array[0].pic_cover,t.nodes=t.goods_info.description,console.log(t.cover)}})},addtocar:function(){var o=this;o.is_login?(o.show=!1,o.disabled=!0,o.type="warn",wx.request({url:"https://www.slluks.com/index.php/app/member/addtocart",method:"POST",header:{"content-type":"application/json"},data:{buyer_id:o.uid,goods_id:o.goods_id,num:o.count,sku_id:o.goods_info.sku_list[0].sku_id,goods_picture:o.cover,goods_price:o.goods_info.price,stock:o.goods_info.stock,goods_name:o.goods_info.goods_name},success:function(s){t.showToast({title:s.data.message,duration:1e3,icon:"none"}),o.disabled=!1,o.show=!1,o.type="primary"}})):t.showToast({title:"请先登录",duration:1e3,icon:"none",success:function(){setTimeout(function(){wx.switchTab({url:"/pages/myself/myself"})},1e3)}})},reset:function(){this.type="primary",this.disabled=!1},sliderchange:function(t){console.log("slider发生 change 事件，携带值为",t.detail.value),this.count=t.detail.value,this.num=this.count*this.goods_info.price},cancel:function(){this.type="primary",this.disabled=!1,this.show=!1},showadd:function(){this.show=!0},islogin:function(){var t=this;wx.checkSession({success:function(){t.is_login=!0},fail:function(){t.is_login=!1}})}},onPullDownRefresh:function(){this.reset(),t.showToast({title:"刷新成功",duration:1e3,icon:"none"}),setTimeout(function(){t.stopPullDownRefresh()},1e3)}}}).call(o,s(2).default)},54:function(t,o,s){"use strict";var e=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("view",{staticClass:"goods_info"},[s("view",{staticClass:"content"},[s("image",{staticClass:"goods_img",attrs:{src:"https://www.slluks.com/"+t.cover,mode:"aspectFit"}}),s("p",{staticClass:"goods_name"},[t._v(t._s(t.goods_info.goods_name)+"￥"+t._s(t.goods_info.price))]),t.goods_info.stock>0?s("button",{staticClass:"add2car",attrs:{type:t.type,size:t.primarySize,loading:t.loading,plain:t.plain,disabled:t.disabled,eventid:"uu6-0"},on:{tap:t.showadd}},[t._v("\n\t\t\t加入购物车 ")]):0==t.goods_info.stock?s("button",{staticClass:"add2car",attrs:{type:"warn",size:t.primarySize,loading:t.loading,plain:t.plain,disabled:"true"}},[t._v("\n\t\t\t已售空 ")]):t._e()],1),s("view",{staticClass:"description"},[s("rich-text",{attrs:{nodes:t.nodes,mpcomid:"Vyx-0"}})],1),t.show?s("view",{staticClass:"addtocar"},[s("view",{staticClass:"name"},[t._v("\n\t\t\t"+t._s(t.goods_info.goods_name)+"\n\t\t")]),s("view",{staticClass:"price"},[t._v("\n\t\t\t总价:￥"+t._s(t.num)+".00\n\t\t")]),s("view",{staticClass:"count"},[s("view",{staticClass:"section section_gap"},[s("view",{staticClass:"body-view"},[s("slider",{attrs:{min:"1",max:t.goods_info.stock,step:"1","show-value":"",eventid:"A25-1"},on:{change:t.sliderchange}})])])]),s("view",{staticClass:"submit"},[s("button",{attrs:{type:"primary",eventid:"lJo-2"},on:{tap:t.cancel}},[t._v("取消")]),s("button",{attrs:{type:"warn",eventid:"BF2-3"},on:{tap:t.addtocar}},[t._v("加入购物车")])],1)]):t._e(),s("view",[s("navigator",{staticClass:"cart",staticStyle:{"background-image":"url(../../static/images/tocart.png)"},attrs:{"open-type":"switchTab",url:"/pages/cart/cart"}})],1)])};e._withStripped=!0;var i={render:e,staticRenderFns:[]};o.a=i}},[50]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/goodsinfo/goodsinfo.js.map