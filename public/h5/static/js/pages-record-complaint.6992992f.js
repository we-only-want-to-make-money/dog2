(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-record-complaint"],{"052b":function(t,e,n){var o=n("121c");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("2f18332f",o,!0,{sourceMap:!1,shadowMode:!1})},"08dd":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.now_index<3?void 0:[n("v-uni-view",{staticClass:"footer1"},[t._l(t.tabBar,function(e,o){return n("v-uni-view",{key:o,staticClass:"footer_item",staticStyle:{width:"33.3%"}},[n("v-uni-view",{on:{click:function(n){n=t.$handleEvent(n),t.jump(e.pagePath,e.id)}}},[n("v-uni-image",{attrs:{src:e.id==t.now_index?e.selectedIconPath:e.iconPath,mode:""}}),n("v-uni-view",{class:"tab_text "+(e.id==t.now_index?"actives1":"")},[t._v(t._s(e.text))])],1)],1)}),n("v-uni-view",{staticClass:"footer_item",staticStyle:{width:"33.3%"}},[n("v-uni-view",{on:{click:function(e){e=t.$handleEvent(e),t.order()}}},[n("v-uni-image",{attrs:{src:"/static/tabbar/main.png",mode:""}}),n("v-uni-view",{staticClass:"tab_text1"},[t._v("返回貓窩")])],1)],1)],2)]],2)},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},"0ea1":function(t,e,n){"use strict";n.r(e);var o=n("1716"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=a.a},"0ed4":function(t,e,n){"use strict";var o=n("052b"),a=n.n(o);a.a},"121c":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"uni-page-body[data-v-b40ddab4]{background:#f7f7f7}.top[data-v-b40ddab4]{color:#929292;font-size:%?30?%;text-indent:%?32?%;line-height:%?60?%;background:#f5eda8}.body[data-v-b40ddab4]{padding:%?30?% 5%}.text[data-v-b40ddab4]{color:#999;font-size:%?30?%;line-height:%?60?%}.text1[data-v-b40ddab4]{color:#666;font-size:%?34?%;text-indent:%?20?%;line-height:%?64?%}.textarea uni-textarea[data-v-b40ddab4]{width:90%;height:%?200?%;line-height:%?50?%;background:#fff;padding:%?0?% %?32?%;border:%?2?% solid #5d8afc}body.?%PAGE?%[data-v-b40ddab4]{background:#f7f7f7}",""])},1328:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("v-uni-view",{staticClass:"back"},[n("uni-icon",{attrs:{size:"28",type:"arrowleft"},on:{click:function(e){e=t.$handleEvent(e),t.back()}}})],1),n("v-uni-view",{staticClass:"top"},[t._v("申訴後由客服人員介入調查！")]),n("v-uni-view",{staticClass:"body"},[n("v-uni-view",{staticClass:"text"},[t._v("訂單編號")]),n("v-uni-view",{staticClass:"text1"},[t._v(t._s(t.cat.ordersn))]),n("v-uni-view",{staticClass:"text"},[t._v("訂單金額")]),n("v-uni-view",{staticClass:"text1"},[t._v(t._s(t.cat.price))]),n("v-uni-view",{staticClass:"text"},[t._v("對方名稱")]),n("v-uni-view",{staticClass:"text1"},[t._v(t._s(t.cat.nickname))]),n("v-uni-view",{staticClass:"text"},[t._v("申訴理由")]),n("v-uni-view",{staticClass:"textarea"},[n("v-uni-textarea",{attrs:{placeholder:"寫下申訴的理由",maxlength:"200"},model:{value:t.reason,callback:function(e){t.reason=e},expression:"reason"}})],1),n("v-uni-button",{staticClass:"btn-area",on:{click:function(e){e=t.$handleEvent(e),t.present(e)}}},[t._v("提交申訴")])],1),n("footerNav")],1)},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},"168c":function(t,e,n){"use strict";n.r(e);var o=n("9241"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=a.a},1716:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{tabBar:[{id:3,iconPath:"/static/tabbar/refer.png",selectedIconPath:"/static/tabbar/referHL.png",pagePath:"/pages/service/repair",text:"提交工單"},{id:4,iconPath:"/static/tabbar/order.png",selectedIconPath:"/static/tabbar/orderHL.png",pagePath:"/pages/service/order",text:"我的工單"}],footer_nav:[{id:0,name:"貓貓集市",icon:"/static/tabbar/template.png",select_icon:"/static/tabbar/templateHL.png",pagePath:"/pages/main/bazaar"},{id:1,name:"服務中心",icon:"/static/tabbar/api.png",select_icon:"/static/tabbar/apiHL.png",pagePath:"/pages/main/service"},{id:2,name:"我的貓窩",icon:"/static/tabbar/component.png",select_icon:"/static/tabbar/componentHL.png",pagePath:"/pages/main/shack"}],now_index:uni.getStorageSync("css")}},methods:{jump:function(t,e){uni.setStorageSync("css",e),this.now_index=e,uni.reLaunch({url:t})},order:function(){uni.switchTab({url:"/pages/main/shack"})}}};e.default=o},"1b6e":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".footer[data-v-5f7461c0]{left:0;bottom:0;width:100%;color:#fff;z-index:1000;height:%?100?%;position:fixed;background:#181e30}.footer1[data-v-5f7461c0]{left:0;bottom:0;width:100%;color:#fff;height:%?100?%;position:fixed;background-color:#fff}.footer_item[data-v-5f7461c0]{float:left;width:33.3%;height:%?100?%;font-size:%?24?%;text-align:center;color:#7a7e83}.footer_item uni-image[data-v-5f7461c0]{margin-top:%?10?%;width:%?46?%;height:%?46?%;margin-bottom:%?0?%}.footer_item.big_item[data-v-5f7461c0]{top:%?-40?%;position:relative}.footer_item.big_item uni-image[data-v-5f7461c0]{width:%?100?%;height:%?100?%}.actives[data-v-5f7461c0]{color:#5d8afc}.actives1[data-v-5f7461c0]{color:#5d8afc}.tab_text1[data-v-5f7461c0]{color:#fdb513}",""])},"26c5":function(t,e,n){"use strict";n.r(e);var o=n("4219"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=a.a},4219:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};e.default=o},5572:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},on:{click:function(e){e=t.$handleEvent(e),t.onClick()}}})},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},5692:function(t,e,n){"use strict";n.r(e);var o=n("5572"),a=n("26c5");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);var r=n("2877"),c=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=c.exports},"6dfa":function(t,e,n){"use strict";n.r(e);var o=n("1328"),a=n("168c");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("0ed4");var r=n("2877"),c=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,"b40ddab4",null);e["default"]=c.exports},9241:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("db84")),a=r(n("5692")),i=r(n("b807"));function r(t){return t&&t.__esModule?t:{default:t}}var c={components:{uniIcon:a.default,footerNav:i.default},data:function(){return{reason:"",cat:[],details:uni.getStorageSync("details"),token:uni.getStorageSync("token")}},methods:{back:function(){uni.setStorageSync("tabbar",2),uni.reLaunch({url:"/pages/record/transfer"})},present:function(){self=this,""!=self.reason?uni.showModal({content:"確認提交申訴嗎？",cancelText:"取消",confirmText:"確認",confirmColor:"#FFAE00",cancelColor:"#D2D2D2",success:function(t){t.confirm&&uni.request({url:o.default.api.record.submit,method:"GET",data:{id:self.details.id,token:self.token,reason:self.reason},success:function(t){t=t.data;uni.showToast({icon:"none",title:t.msg}),1==t.code&&(uni.setStorageSync("tabbar",3),setTimeout(function(){uni.setStorageSync("cat_time",1),uni.navigateBack({delta:1})},1e3))}})}}):uni.showToast({icon:"none",title:"申訴理由不能為空"})}},onLoad:function(){o.default.auth(this,o.default.api.record.transfer+"?token="+this.token,{type:this.details.type,page:this.details.page},function(t,e){if(1==e.code)for(var n=e.data.orderlist.data,o=0;o<n.length;o++)n[o].id==t.details.id&&(t.cat=n[o],t.card_list=n[o].seller_paymentmethod)})}};e.default=c},b807:function(t,e,n){"use strict";n.r(e);var o=n("08dd"),a=n("0ea1");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("ef44");var r=n("2877"),c=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,"5f7461c0",null);e["default"]=c.exports},db84:function(t,e,n){"use strict";function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){a(t,e,n[e])})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i="USER_KEY",r="TOKEN_KEY",c=function(){var t="";return t=uni.getStorageSync(i),t||{avatar:"../../static/img/avatar.png",bottom_text:"广州锐合技术支持QQ：8396048",level_name:"普通会员",nickname:"锐合网络",uid:0,icode:"18024553545"}},s=function(t){uni.setStorage({key:i,data:t})},u=function(t){uni.setStorageSync(r,t)},d=function(){return uni.getStorageSync(r)},l=function(){uni.clearStorage()},f=function(t){uni.setStorageSync("uid",t)},p=function(){return uni.getStorageSync("uid")},g=function(t){uni.setStorageSync("logid",t)},v=function(){return uni.getStorageSync("logid")},b="http://blockcat.8396048.com/",m={index:b+"default/index",home:{info:b+"port/member/info"},main:{bazaar:b+"port/index/index",order:b+"port/index/appointment",adopt:b+"port/index/adopt",result:b+"port/index/adoptResult",info:b+"port/index/confInfo",notice:b+"port/index/notice"},center:{code:b+"port/member/verifycode",password:b+"port/member/changePwd",passtwo:b+"port/member/changePwd2",pid:b+"port/member/realname",close:b+"port/member/changeMethodStatus",card:b+"port/member/myPaymentMethod",type:b+"port/member/getPaymentType",submit:b+"port/member/submitMethod",message:b+"port/member/systemMessage",team:b+"port/member/myTeam",friends:b+"port/member/inviteFriends"},service:{insert:b+"port/server_center/workorder",submit:b+"port/server_center/submitWorkorder",order:b+"port/server_center/workorderList"},login:{login:b+"port/login",logo:b+"port/login/get_enter_logo",forget:b+"port/login/forgetpwd"},reg:{register:b+"port/login/register",code:b+"port/login/verifycode",agree:b+"port/login/get_user_regagree"},interests:{qrcode:b+"port/member/recharge",integral:b+"port/member/integralLog",roll:b+"port/member/givingIntegral",sell:b+"port/member/assetSale",submit:b+"port/member/rechargeSubmit",earnings:b+"port/member/incomeLog"},record:{pay:b+"port/order/pay",adopt:b+"port/order/index",make:b+"port/member/appointment",update:b+"port/order/pay",passtwo:b+"port/order/auditPass",submit:b+"port/order/complaint",complaint:b+"record/payment",transfer:b+"port/order/transfer",details:b+"port/order/detail",undo:b+"port/order/revoke"}},h=function(t,e,n,a){var i=this,r=uni.getStorageSync("token");""==r&&(uni.setStorageSync("token",""),uni.navigateTo({url:"/pages/login/login"}));n=o({token:uni.getStorageSync("token")},n);uni.request({url:e,method:"GET",data:n,success:function(e){e=e.data;1==e.code?a(t,e):400==e.code?(uni.setStorageSync("token",""),setTimeout(function(){uni.navigateTo({url:"/pages/login/login"})},2e3)):uni.showToast({icon:"none",title:e.msg})},fail:function(t){console.log(t),uni.showToast({icon:"none",title:"网站消息获取错误"})},complete:function(t){t=t.data;13==t.code&&(uni.showToast({icon:"none",title:t.msg}),i.removeToken(),uni.reLaunch({url:"/pages/login/login"})),uni.hideLoading()}})},_={api:m,auth:h,setToken:u,getToken:d,removeToken:l,getUserInfo:c,setUserInfo:s,setId:f,getId:p,setLogid:g,getLogid:v};e.default=_},e82f:function(t,e,n){var o=n("1b6e");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("3bdf2f52",o,!0,{sourceMap:!1,shadowMode:!1})},ef44:function(t,e,n){"use strict";var o=n("e82f"),a=n.n(o);a.a}}]);