(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-record-details"],{"00d8":function(e,t,i){"use strict";function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},o=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),o.forEach(function(t){n(e,t,i[t])})}return e}function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="USER_KEY",r="TOKEN_KEY",c=function(){var e="";return e=uni.getStorageSync(a),e||{avatar:"../../static/img/avatar.png",bottom_text:"广州锐合技术支持QQ：8396048",level_name:"普通会员",nickname:"锐合网络",uid:0,icode:"18024553545"}},d=function(e){uni.setStorage({key:a,data:e})},s=function(e){uni.setStorageSync(r,e)},u=function(){return uni.getStorageSync(r)},l=function(){uni.clearStorage()},f=function(e){uni.setStorageSync("uid",e)},v=function(){return uni.getStorageSync("uid")},g=function(e){uni.setStorageSync("logid",e)},m=function(){return uni.getStorageSync("logid")},b="http://blockcat.8396048.com/",p={index:b+"default/index",home:{info:b+"port/member/info"},main:{bazaar:b+"port/index/index",order:b+"port/index/appointment"},center:{code:b+"port/member/verifycode",password:b+"port/member/changePwd",passtwo:b+"port/member/changePwd2",pid:b+"port/member/realname",close:b+"port/member/changeMethodStatus",card:b+"port/member/myPaymentMethod",type:b+"port/member/getPaymentType",submit:b+"port/member/submitMethod",message:b+"port/member/systemMessage",team:b+"port/member/myTeam"},service:{insert:b+"port/server_center/workorder",submit:b+"port/server_center/submitWorkorder",order:b+"port/server_center/submitWorkorder"},login:{login:b+"port/login",logo:b+"port/login/get_enter_logo",forget:b+"port/login/forgetpwd"},reg:{register:b+"port/login/register",code:b+"port/login/verifycode"},interests:{integral:b+"port/member/integralLog",roll:b+"port/member/givingIntegral"},record:{pay:b+"port/order/pay",adopt:b+"port/order/index",make:b+"port/member/appointment",update:b+"port/order/pay",passtwo:b+"record/payment",submit:b+"record/payment",complaint:b+"record/payment"}},h=function(e,t,i,n){var a=this,r=uni.getStorageSync("token");""==r&&uni.reLaunch({url:"/pages/login/login"});i=o({token:uni.getStorageSync("token")},i);uni.request({url:t,method:"GET",data:i,success:function(t){t=t.data;1==t.code?n(e,t):400==t.code?(uni.setStorageSync("token",""),setTimeout(function(){uni.reLaunch({url:"/pages/login/login"})},2e3)):uni.showToast({icon:"none",title:t.msg})},fail:function(e){uni.showToast({icon:"none",title:"网站消息获取错误"})},complete:function(e){e=e.data;13==e.code&&(uni.showToast({icon:"none",title:e.msg}),a.removeToken(),uni.reLaunch({url:"/pages/login/login"})),uni.hideLoading()}})},w={api:p,auth:h,setToken:s,getToken:u,removeToken:l,getUserInfo:c,setUserInfo:d,setId:f,getId:v,setLogid:g,getLogid:m};t.default=w},"0a58":function(e,t,i){"use strict";var o=i("6863"),n=i.n(o);n.a},"1f64":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".footer[data-v-3cddadaa]{left:0;bottom:0;width:100%;color:#fff;height:%?100?%;position:fixed;background-color:#181e30}.footer_item[data-v-3cddadaa]{float:left;width:33.3%;height:%?100?%;font-size:%?24?%;text-align:center;color:#7a7e83}.footer_item uni-image[data-v-3cddadaa]{top:%?10?%;width:%?46?%;height:%?46?%;margin-bottom:%?10?%}.footer_item.big_item[data-v-3cddadaa]{top:%?-40?%;position:relative}.footer_item.big_item uni-image[data-v-3cddadaa]{width:%?100?%;height:%?100?%}.active[data-v-3cddadaa]{color:#5d8afc}",""])},"22c1":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={methods:{jump:function(e){uni.navigateTo({url:e})},change_nav:function(e){this.$store.commit("change_page",e)}},computed:{footer_nav:function(){return this.$store.state.footer_store.footer_nav},now_index:function(){return uni.getStorageSync("css")}}};t.default=o},3444:function(e,t,i){"use strict";i.r(t);var o=i("d8ed"),n=i("d96f");for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);i("94bf");var r=i("2877"),c=Object(r["a"])(n["default"],o["a"],o["b"],!1,null,"3cddadaa",null);t["default"]=c.exports},"36ba":function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"text"},[e._v("区块编号：201904014084022099101"),i("br"),e._v("区块鱼：桌登"),i("br"),e._v("价值：1983≈1064.9839WIA"),i("br"),e._v("智能合约收益：1天/5%"),i("br"),e._v("转让时间：2019-04-01 20:02:00"),i("br"),e._v("转让方：123456789012"),i("br"),e._v("转让方联系电话：123456789012"),i("br"),e._v("捕捞方：海宏科技"),i("br"),e._v("捕捞方联系电话：123456789012"),i("br"),e._v("区块状态：待付款"),i("br"),e._v("收益状态：等待收益"),i("br")]),i("v-uni-view",{staticClass:"account"},[i("v-uni-view",{staticClass:"title"},[e._v("转让方收款账号")]),i("v-uni-view",{staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[i("v-uni-view",{staticClass:"uni-list-cell-navigate uni-navigate-right uni-media-list"},[i("v-uni-view",{staticClass:"uni-media-list-logo"},[i("v-uni-image",{attrs:{src:"../../static/pay/WeChat.png"}})],1),i("v-uni-view",{staticClass:"uni-media-list-body"},[i("v-uni-view",{staticClass:"uni-media-list-text-top"},[e._v("账户名称：")]),i("v-uni-view",{staticClass:"uni-media-list-text-top"},[e._v("账户账号：")]),i("v-uni-view",{staticClass:"uni-media-list-text-top"},[e._v("账户类型：")])],1)],1)],1)],1),i("v-uni-view",{staticClass:"credentials"},[i("v-uni-view",{staticClass:"title1"},[e._v("付款凭证")]),e.imageSrc?[i("v-uni-image",{staticClass:"image",attrs:{src:e.imageSrc,mode:"widthFix"},on:{click:function(t){t=e.$handleEvent(t),e.chooseImage(t)}}})]:[i("v-uni-view",{staticClass:"img1"},[i("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(t){t=e.$handleEvent(t),e.chooseImage(t)}}},[e._v("+")])],1)]],2),i("footerNav")],1)},n=[];i.d(t,"a",function(){return o}),i.d(t,"b",function(){return n})},"5f6f":function(e,t,i){var o=i("1f64");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=i("4f06").default;n("fbc8b054",o,!0,{sourceMap:!1,shadowMode:!1})},6863:function(e,t,i){var o=i("be61");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=i("4f06").default;n("46adfb68",o,!0,{sourceMap:!1,shadowMode:!1})},"768f":function(e,t,i){"use strict";i.r(t);var o=i("8592"),n=i.n(o);for(var a in o)"default"!==a&&function(e){i.d(t,e,function(){return o[e]})}(a);t["default"]=n.a},8592:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(i("00d8")),n=a(i("3444"));function a(e){return e&&e.__esModule?e:{default:e}}o.default.getUserInfo();var r={components:{footerNav:n.default},data:function(){return{imageSrc:""}},onShow:function(){},methods:{chooseImage:function(){var e=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(t){var i=t.tempFilePaths[0];e.imageSrc=i;uni.uploadFile({url:o.default.api.record.update,filePath:e.imageSrc,name:"file",formData:{},success:function(e){if(e=e.data,console.log(e),1!=e.code)return console.log(e.msg),void uni.showToast({icon:"none",title:e.msg});uni.navigateTo({url:"/pages/record/successful"})}})},fail:function(e){console.log("chooseImage fail",e)}})}}};t.default=r},"94bf":function(e,t,i){"use strict";var o=i("5f6f"),n=i.n(o);n.a},be61:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".account[data-v-0e8bad05],.credentials[data-v-0e8bad05],.text[data-v-0e8bad05]{padding:%?26?%;background:#fff;border-bottom:%?2?% solid #bbb}.text[data-v-0e8bad05]{color:#333;font-size:%?30?%;line-height:%?70?%}.title[data-v-0e8bad05]{color:#333;font-size:%?36?%;padding-bottom:%?20?%;border-bottom:%?2?% solid #c8c7cc}.title1[data-v-0e8bad05]{color:#333;font-size:%?36?%;padding-bottom:%?20?%}.uni-media-list[data-v-0e8bad05]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?10?% %?20?%;-webkit-box-sizing:border-box}.uni-list-cell[data-v-0e8bad05]{background-color:#fff;border-bottom:%?2?% solid #c8c7cc}.uni-list-cell-hover[data-v-0e8bad05]{background-color:#ddd}.uni-media-list-logo[data-v-0e8bad05]{width:30%;height:%?110?%}.uni-media-list-logo uni-image[data-v-0e8bad05]{width:%?110?%;height:%?110?%}.uni-media-list-body[data-v-0e8bad05]{flex:1;width:30%;-ms-flex:1;height:100%;-webkit-flex:1;-webkit-box-flex:1;padding-right:%?40?%;display:-webkit-flex;-webkit-flex-direction:column}.uni-media-list-text-top[data-v-0e8bad05]{width:100%;font-size:%?28?%;line-height:%?40?%}.uni-ellipsis[data-v-0e8bad05],.uni-media-list-text-bottom[data-v-0e8bad05],.uni-media-list-text-top[data-v-0e8bad05]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis}.img1[data-v-0e8bad05]{color:#ddd;width:%?360?%;height:%?360?%;font-size:%?200?%;text-align:center;line-height:%?360?%;background-color:#eee;border:%?4?% solid #ddd}.image[data-v-0e8bad05]{height:%?360?%}.credentials[data-v-0e8bad05]{margin-bottom:%?100?%}",""])},d8ed:function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"footer"},e._l(e.footer_nav,function(t,o){return i("v-uni-view",{key:o,class:"footer_item "+("big"==t.size?"big_item":""),staticStyle:{width:"33.3%"},on:{click:function(t){t=e.$handleEvent(t),e.change_nav(o)}}},[i("v-uni-view",{on:{click:function(i){i=e.$handleEvent(i),e.jump(t.pagePath)}}},[i("v-uni-image",{attrs:{src:o==e.now_index?t.select_icon:t.icon,mode:""}}),i("v-uni-view",{class:o==e.now_index?"active":""},[e._v(e._s(t.name))])],1)],1)}))],1)},n=[];i.d(t,"a",function(){return o}),i.d(t,"b",function(){return n})},d96f:function(e,t,i){"use strict";i.r(t);var o=i("22c1"),n=i.n(o);for(var a in o)"default"!==a&&function(e){i.d(t,e,function(){return o[e]})}(a);t["default"]=n.a},d9e9:function(e,t,i){"use strict";i.r(t);var o=i("36ba"),n=i("768f");for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);i("0a58");var r=i("2877"),c=Object(r["a"])(n["default"],o["a"],o["b"],!1,null,"0e8bad05",null);t["default"]=c.exports}}]);