(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-record-complaint"],{"00d8":function(e,t,n){"use strict";function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i="USER_KEY",a="TOKEN_KEY",c=function(){var e="";return e=uni.getStorageSync(i),e||{avatar:"../../static/img/avatar.png",bottom_text:"广州锐合技术支持QQ：8396048",level_name:"普通会员",nickname:"锐合网络",uid:0,icode:"18024553545"}},u=function(e){uni.setStorage({key:i,data:e})},s=function(e){uni.setStorageSync(a,e)},d=function(){return uni.getStorageSync(a)},l=function(){uni.clearStorage()},f=function(e){uni.setStorageSync("uid",e)},g=function(){return uni.getStorageSync("uid")},v=function(e){uni.setStorageSync("logid",e)},p=function(){return uni.getStorageSync("logid")},m="/",h={index:m+"default/index",home:{info:m+"port/member/info"},main:{bazaar:m+"port/index/index",order:m+"port/index/appointment",adopt:m+"port/index/adopt"},center:{code:m+"port/member/verifycode",password:m+"port/member/changePwd",passtwo:m+"port/member/changePwd2",pid:m+"port/member/realname",close:m+"port/member/changeMethodStatus",card:m+"port/member/myPaymentMethod",type:m+"port/member/getPaymentType",submit:m+"port/member/submitMethod",message:m+"port/member/systemMessage",team:m+"port/member/myTeam",friends:m+"port/member/inviteFriends"},service:{insert:m+"port/server_center/workorder",submit:m+"port/server_center/submitWorkorder",order:m+"port/server_center/submitWorkorder"},login:{login:m+"port/login",logo:m+"port/login/get_enter_logo",forget:m+"port/login/forgetpwd"},reg:{register:m+"port/login/register",code:m+"port/login/verifycode"},interests:{qrcode:m+"port/member/integralLog",integral:m+"port/member/integralLog",roll:m+"port/member/givingIntegral",sell:m+"port/member/assetSale"},record:{pay:m+"port/order/pay",adopt:m+"port/order/index",make:m+"port/member/appointment",update:m+"port/order/pay",passtwo:m+"port/order/auditPass",submit:m+"port/order/complaint",complaint:m+"record/payment",transfer:m+"port/order/transfer",details:m+"port/order/detail",undo:m+"port/order/detail"}},b=function(e,t,n,r){var i=this,a=uni.getStorageSync("token");""==a&&uni.reLaunch({url:"/pages/login/login"});n=o({token:uni.getStorageSync("token")},n);uni.request({url:t,method:"GET",data:n,success:function(t){t=t.data;1==t.code?r(e,t):400==t.code?(uni.setStorageSync("token",""),setTimeout(function(){uni.reLaunch({url:"/pages/login/login"})},2e3)):uni.showToast({icon:"none",title:t.msg})},fail:function(e){console.log(e),uni.showToast({icon:"none",title:"网站消息获取错误"})},complete:function(e){e=e.data;13==e.code&&(uni.showToast({icon:"none",title:e.msg}),i.removeToken(),uni.reLaunch({url:"/pages/login/login"})),uni.hideLoading()}})},_={api:h,auth:b,setToken:s,getToken:d,removeToken:l,getUserInfo:c,setUserInfo:u,setId:f,getId:g,setLogid:v,getLogid:p};t.default=_},"0394":function(e,t,n){"use strict";var o=n("1f66"),r=n.n(o);r.a},"1f64":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".footer[data-v-3cddadaa]{left:0;bottom:0;width:100%;color:#fff;height:%?100?%;position:fixed;background-color:#181e30}.footer_item[data-v-3cddadaa]{float:left;width:33.3%;height:%?100?%;font-size:%?24?%;text-align:center;color:#7a7e83}.footer_item uni-image[data-v-3cddadaa]{top:%?10?%;width:%?46?%;height:%?46?%;margin-bottom:%?10?%}.footer_item.big_item[data-v-3cddadaa]{top:%?-40?%;position:relative}.footer_item.big_item uni-image[data-v-3cddadaa]{width:%?100?%;height:%?100?%}.active[data-v-3cddadaa]{color:#5d8afc}",""])},"1f66":function(e,t,n){var o=n("60c6");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("4f06").default;r("4693440c",o,!0,{sourceMap:!1,shadowMode:!1})},"22c1":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={methods:{jump:function(e){uni.navigateTo({url:e})},change_nav:function(e){this.$store.commit("change_page",e)}},computed:{footer_nav:function(){return this.$store.state.footer_store.footer_nav},now_index:function(){return uni.getStorageSync("css")}}};t.default=o},3444:function(e,t,n){"use strict";n.r(t);var o=n("d8ed"),r=n("d96f");for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);n("94bf");var a=n("2877"),c=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,"3cddadaa",null);t["default"]=c.exports},"5f6f":function(e,t,n){var o=n("1f64");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("4f06").default;r("fbc8b054",o,!0,{sourceMap:!1,shadowMode:!1})},"60c6":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".top[data-v-63c2c1dc]{color:#929292;font-size:%?30?%;text-indent:%?32?%;line-height:%?60?%;background:#f5eda8}.body[data-v-63c2c1dc]{padding:%?30?% 5%}.text[data-v-63c2c1dc]{color:#999;font-size:%?30?%;line-height:%?60?%}.text1[data-v-63c2c1dc]{color:#666;font-size:%?34?%;text-indent:%?20?%;line-height:%?64?%}.textarea uni-textarea[data-v-63c2c1dc]{width:90%;height:%?200?%;line-height:%?50?%;background:#fff;padding:%?0?% %?32?%;border:%?2?% solid #5d8afc}",""])},7945:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("00d8")),r=i(n("3444"));function i(e){return e&&e.__esModule?e:{default:e}}var a={components:{footerNav:r.default},data:function(){return{reason:"",cat:[],id:uni.getStorageSync("number"),token:uni.getStorageSync("token")}},methods:{present:function(){""!=this.reason?(uni.showLoading({title:"提交申诉中..."}),uni.request({url:o.default.api.record.submit+"?token="+this.token,method:"GET",data:{id:this.id,reason:this.reason},success:function(e){e=e.data;uni.showToast({icon:"none",title:e.msg}),1==e.code&&setTimeout(function(){uni.navigateTo({url:"/pages/record/transfer"})},1e3)}})):uni.showToast({icon:"none",title:"申诉理由不能为空"})}},onLoad:function(){var e=uni.getStorageSync("number");o.default.auth(this,o.default.api.record.transfer+"?token="+this.token,{type:2},function(t,n){if(console.log(n),1==n.code)for(var o=n.data.orderlist,r=0;r<o.length;r++)o[r].id==e&&(t.cat=o[r])})}};t.default=a},"8e1b":function(e,t,n){"use strict";n.r(t);var o=n("7945"),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=r.a},"94bf":function(e,t,n){"use strict";var o=n("5f6f"),r=n.n(o);r.a},b434:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"top"},[e._v("申诉后由客服人员介入调查！")]),n("v-uni-view",{staticClass:"body"},[n("v-uni-view",{staticClass:"text"},[e._v("订单编号")]),n("v-uni-view",{staticClass:"text1"},[e._v(e._s(e.cat.ordersn))]),n("v-uni-view",{staticClass:"text"},[e._v("订单金额")]),n("v-uni-view",{staticClass:"text1"},[e._v(e._s(e.cat.price))]),n("v-uni-view",{staticClass:"text"},[e._v("对方名称")]),n("v-uni-view",{staticClass:"text1"},[e._v(e._s(e.cat.nickname))]),n("v-uni-view",{staticClass:"text"},[e._v("申诉理由")]),n("v-uni-view",{staticClass:"textarea"},[n("v-uni-textarea",{attrs:{placeholder:"写下申诉的理由",maxlength:"200"},model:{value:e.reason,callback:function(t){e.reason=t},expression:"reason"}})],1),n("v-uni-button",{staticClass:"btn-area",on:{click:function(t){t=e.$handleEvent(t),e.present(t)}}},[e._v("提交申诉")])],1),n("footerNav")],1)},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},d8ed:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"footer"},e._l(e.footer_nav,function(t,o){return n("v-uni-view",{key:o,class:"footer_item "+("big"==t.size?"big_item":""),staticStyle:{width:"33.3%"},on:{click:function(t){t=e.$handleEvent(t),e.change_nav(o)}}},[n("v-uni-view",{on:{click:function(n){n=e.$handleEvent(n),e.jump(t.pagePath)}}},[n("v-uni-image",{attrs:{src:o==e.now_index?t.select_icon:t.icon,mode:""}}),n("v-uni-view",{class:o==e.now_index?"active":""},[e._v(e._s(t.name))])],1)],1)}))],1)},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},d96f:function(e,t,n){"use strict";n.r(t);var o=n("22c1"),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=r.a},f3b3:function(e,t,n){"use strict";n.r(t);var o=n("b434"),r=n("8e1b");for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);n("0394");var a=n("2877"),c=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,"63c2c1dc",null);t["default"]=c.exports}}]);