(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-card"],{"14b4":function(t,e,i){"use strict";i.r(e);var n=i("52f2"),a=i("f355");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("48b9");var r=i("2877"),c=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"ec14f616",null);e["default"]=c.exports},"176b":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},2417:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=c(i("e108")),a=c(i("5d50")),o=c(i("34e3")),r=c(i("14b4"));function c(t){return t&&t.__esModule?t:{default:t}}var d={data:function(){return{card_list:[],token:uni.getStorageSync("token"),loadingType:0,contentText:{contentdown:"上拉顯示更多",contentrefresh:"正在加載...",contentnomore:"沒有更多數據了"}}},onNavigationBarButtonTap:function(t){uni.navigateTo({url:"/pages/center/insert"})},onShow:function(){this.time(this)},methods:{time:function(t){t.card_list=[],n.default.auth(this,n.default.api.center.card+"?token="+this.token,{},function(t,e){1==e.code&&(t.card_list=e.data.methodlist)})},back:function(){uni.reLaunch({url:"/pages/main/shack"})},details:function(t){uni.setStorageSync("card_id",t),uni.navigateTo({url:"/pages/center/detail"})},close:function(t,e){self=this,uni.request({url:n.default.api.center.close,method:"GET",data:{id:t,status:e,token:self.token},success:function(t){t=t.data;uni.showToast({icon:"none",title:t.msg}),1==t.code&&setTimeout(function(){self.time(self)},1e3)}})}},components:{uniIcon:a.default,uniLoadMore:o.default,footerNav:r.default}};e.default=d},"2ed0":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},on:{click:function(e){e=t.$handleEvent(e),t.onClick()}}})},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"314e":function(t,e,i){"use strict";i.r(e);var n=i("aa5c"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"34e3":function(t,e,i){"use strict";i.r(e);var n=i("f761"),a=i("314e");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("b60e");var r=i("2877"),c=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"77cdfcf2",null);e["default"]=c.exports},"3aeb":function(t,e,i){"use strict";i.r(e);var n=i("176b"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"48b9":function(t,e,i){"use strict";var n=i("5291"),a=i.n(n);a.a},"495c":function(t,e,i){var n=i("b07b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("c7c900b2",n,!0,{sourceMap:!1,shadowMode:!1})},5291:function(t,e,i){var n=i("c384");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("79948359",n,!0,{sourceMap:!1,shadowMode:!1})},"52f2":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.now_index<3?void 0:[i("v-uni-view",{staticClass:"footer1"},[t._l(t.tabBar,function(e,n){return i("v-uni-view",{key:n,staticClass:"footer_item",staticStyle:{width:"33.3%"}},[i("v-uni-view",{on:{click:function(i){i=t.$handleEvent(i),t.jump(e.pagePath,e.id)}}},[i("v-uni-image",{attrs:{src:e.id==t.now_index?e.selectedIconPath:e.iconPath,mode:""}}),i("v-uni-view",{class:"tab_text "+(e.id==t.now_index?"actives1":"")},[t._v(t._s(e.text))])],1)],1)}),i("v-uni-view",{staticClass:"footer_item",staticStyle:{width:"33.3%"}},[i("v-uni-view",{on:{click:function(e){e=t.$handleEvent(e),t.order()}}},[i("v-uni-image",{attrs:{src:"/static/tabbar/main.png",mode:""}}),i("v-uni-view",{staticClass:"tab_text1"},[t._v("返回亀窩")])],1)],1)],2)]],2)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"5d50":function(t,e,i){"use strict";i.r(e);var n=i("2ed0"),a=i("3aeb");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);var r=i("2877"),c=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},"665d":function(t,e,i){"use strict";i.r(e);var n=i("913c"),a=i("9f1e");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("89c5");var r=i("2877"),c=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"6e212730",null);e["default"]=c.exports},"79c2":function(t,e,i){var n=i("9db1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("1a977c87",n,!0,{sourceMap:!1,shadowMode:!1})},"89c5":function(t,e,i){"use strict";var n=i("495c"),a=i.n(n);a.a},"913c":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticClass:"back"},[i("uni-icon",{attrs:{size:"28",type:"arrowleft"},on:{click:function(e){e=t.$handleEvent(e),t.back()}}})],1),t._l(t.card_list,function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[i("v-uni-view",{staticClass:"uni-list-cell-navigate uni-navigate-right uni-media-list"},[i("v-uni-view",{staticClass:"uni-media-list-logo",on:{click:function(i){i=t.$handleEvent(i),t.details(e.id)}}},[i("v-uni-image",{staticClass:"card_img",attrs:{src:e.logo}})],1),i("v-uni-view",{staticClass:"uni-media-list-body",on:{click:function(i){i=t.$handleEvent(i),t.details(e.id)}}},[i("v-uni-view",{staticClass:"uni-media-list-text-top"},[t._v("賬戶名稱："+t._s(e.titleofaccount))]),i("v-uni-view",{staticClass:"uni-media-list-text-top"},[t._v("賬戶賬號："+t._s(e.account))]),i("v-uni-view",{staticClass:"uni-media-list-text-top"},[t._v("賬戶類型："+t._s(e.typename))])],1),i("v-uni-view",{staticClass:"uni-icon1"},[""!=e.paymentcode?[1==e.status?[i("v-uni-button",{staticClass:"check",on:{click:function(i){i=t.$handleEvent(i),t.close(e.id,0)}}},[t._v("關閉")])]:[i("v-uni-button",{staticClass:"check",on:{click:function(i){i=t.$handleEvent(i),t.close(e.id,1)}}},[t._v("啟用")])]]:t._e()],2)],1)],1)}),i("v-uni-view",{staticClass:"textarea"},[t._v("為確保能壹次性通過審核，請按如下幾點上傳："),i("br"),t._v("1、所有收款方式的實名信息，必須和要提交實名驗證的實名壹致。"),i("br"),t._v("2、支付寶賬號一定要確保輸入的賬號能進行付款操作，且不要關閉支付寶應用中的“通過郵箱找到我”或“通過手機號找到我”的隱私功能。"),i("br"),t._v("3、微信賬號不要關閉通過手機號添加好友的功能。"),i("br"),t._v("4、至少要上傳銀行卡、支付寶、微信三種收款方式。"),i("br"),t._v("注：請認真填寫並上傳收款方式，一旦通過審核，將不得再修改和添加，銀行卡收款方式不允許關閉。")]),i("footerNav")],2)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"9db1":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".load-more[data-v-77cdfcf2]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.loading-img[data-v-77cdfcf2]{height:24px;width:24px;margin-right:10px}.loading-text[data-v-77cdfcf2]{font-size:%?28?%;color:#777}.loading-img>uni-view[data-v-77cdfcf2]{position:absolute}.load1[data-v-77cdfcf2],.load2[data-v-77cdfcf2],.load3[data-v-77cdfcf2]{height:24px;width:24px}.load2[data-v-77cdfcf2]{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-77cdfcf2]{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.loading-img>uni-view uni-view[data-v-77cdfcf2]{width:6px;height:2px;-webkit-border-top-left-radius:1px;border-top-left-radius:1px;border-bottouni-left-radius:1px;background:#777;position:absolute;opacity:.2;transforuni-origin:50%;-webkit-animation:load-data-v-77cdfcf2 1.56s ease infinite}.loading-img>uni-view uni-view[data-v-77cdfcf2]:first-child{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.loading-img>uni-view uni-view[data-v-77cdfcf2]:nth-child(2){-webkit-transform:rotate(180deg);top:11px;right:0}.loading-img>uni-view uni-view[data-v-77cdfcf2]:nth-child(3){-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.loading-img>uni-view uni-view[data-v-77cdfcf2]:nth-child(4){top:11px;left:0}.load1 uni-view[data-v-77cdfcf2]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-77cdfcf2]:first-child{-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-77cdfcf2]:first-child{-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-77cdfcf2]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-77cdfcf2]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-77cdfcf2]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-77cdfcf2]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-77cdfcf2]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-77cdfcf2]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-77cdfcf2]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-77cdfcf2]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-77cdfcf2]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-77cdfcf2{0%{opacity:1}to{opacity:.2}}",""])},"9df3":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{tabBar:[{id:3,iconPath:"/static/tabbar/refer.png",selectedIconPath:"/static/tabbar/referHL.png",pagePath:"/pages/service/repair",text:"提交工單"},{id:4,iconPath:"/static/tabbar/order.png",selectedIconPath:"/static/tabbar/orderHL.png",pagePath:"/pages/service/order",text:"我的工單"}],footer_nav:[{id:0,name:"亀集市",icon:"/static/tabbar/template.png",select_icon:"/static/tabbar/templateHL.png",pagePath:"/pages/main/bazaar"},{id:1,name:"服務中心",icon:"/static/tabbar/api.png",select_icon:"/static/tabbar/apiHL.png",pagePath:"/pages/main/service"},{id:2,name:"我的亀窩",icon:"/static/tabbar/component.png",select_icon:"/static/tabbar/componentHL.png",pagePath:"/pages/main/shack"}],now_index:uni.getStorageSync("css")}},methods:{jump:function(t,e){uni.setStorageSync("css",e),this.now_index=e,uni.reLaunch({url:t})},order:function(){uni.switchTab({url:"/pages/main/shack"})}}};e.default=n},"9f1e":function(t,e,i){"use strict";i.r(e);var n=i("2417"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},aa5c:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"load-more",props:{loadingType:{type:Number,default:0},showImage:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉顯示更多",contentrefresh:"正在加載...",contentnomore:"沒有更多數據了"}}}},data:function(){return{}}};e.default=n},b07b:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".back[data-v-6e212730]{height:0}.uni-media-list[data-v-6e212730]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?10?% %?20?%;-webkit-box-sizing:border-box}.uni-list-cell[data-v-6e212730]{width:100%;display:block;height:%?128?%;font-size:14px;max-width:100%;background-color:#fff;border-bottom:%?2?% solid #c8c7cc}.uni-list-cell-hover[data-v-6e212730]{background-color:#ddd}.uni-media-list-logo[data-v-6e212730]{width:20%;height:%?110?%}uni-image[data-v-6e212730]{width:%?110?%;height:%?110?%}.uni-media-list-body[data-v-6e212730]{flex:1;width:30%;-ms-flex:1;height:100%;-webkit-flex:1;-webkit-box-flex:1;padding-right:%?40?%;display:-webkit-flex;-webkit-flex-direction:column}.uni-media-list-text-top[data-v-6e212730]{width:100%;font-size:%?28?%;line-height:%?40?%}.uni-ellipsis[data-v-6e212730],.uni-media-list-text-bottom[data-v-6e212730],.uni-media-list-text-top[data-v-6e212730]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis}.uni-icon1[data-v-6e212730]{width:20%;float:right;height:%?110?%}.check[data-v-6e212730]{width:%?140?%;height:%?60?%;color:#fff;font-size:%?30?%;margin-top:%?25?%;line-height:%?60?%;-webkit-border-radius:%?30?%;border-radius:%?30?%;background:-webkit-linear-gradient(336deg,#ffae00,#ffda0c);background:-o-linear-gradient(336deg,#ffae00 0,#ffda0c 100%);background:linear-gradient(114deg,#ffae00,#ffda0c)}.textarea[data-v-6e212730]{margin:%?10?%;font-size:%?26?%;padding:%?10?% %?20?%;line-height:%?40?%;color:#b2b2b2;border:%?2?% solid #8f8f94}",""])},b60e:function(t,e,i){"use strict";var n=i("79c2"),a=i.n(n);a.a},c384:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".footer[data-v-ec14f616]{left:0;bottom:0;width:100%;color:#fff;z-index:1000;height:%?100?%;position:fixed;background:#181e30}.footer1[data-v-ec14f616]{left:0;bottom:0;width:100%;color:#fff;height:%?100?%;position:fixed;background-color:#fff}.footer_item[data-v-ec14f616]{float:left;width:33.3%;height:%?100?%;font-size:%?24?%;text-align:center;color:#7a7e83}.footer_item uni-image[data-v-ec14f616]{margin-top:%?10?%;width:%?46?%;height:%?46?%;margin-bottom:%?0?%}.footer_item.big_item[data-v-ec14f616]{top:%?-40?%;position:relative}.footer_item.big_item uni-image[data-v-ec14f616]{width:%?100?%;height:%?100?%}.actives[data-v-ec14f616]{color:#5d8afc}.actives1[data-v-ec14f616]{color:#5d8afc}.tab_text1[data-v-ec14f616]{color:#fdb513}",""])},e108:function(t,e,i){"use strict";function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){a(t,e,i[e])})}return t}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o="USER_KEY",r="TOKEN_KEY",c=function(){var t="";return t=uni.getStorageSync(o),t},d=function(t){uni.setStorage({key:o,data:t})},s=function(t,e){var i=[];i.push(t),i.push(e),uni.setStorageSync("User_paw",i)},l=function(t){uni.setStorageSync("memory",t)},u=function(t){uni.setStorageSync(r,t)},f=function(){return uni.getStorageSync(r)},v=function(){uni.clearStorage()},g=function(t){uni.setStorageSync("uid",t)},m=function(){return uni.getStorageSync("uid")},p=function(t){uni.setStorageSync("logid",t)},b=function(){return uni.getStorageSync("logid")},h={arch:"魚餌",receive:"捕撈",status:"繁殖中",freeze:"凍結中",species:"區塊魚"},w="http://www.91ye.top/",y={index:w+"default/index",home:{info:w+"port/member/info"},main:{bazaar:w+"port/index/index",order:w+"port/index/appointment",adopt:w+"port/index/adopt",result:w+"port/index/adoptResult",info:w+"port/index/confInfo",notice:w+"port/index/notice"},center:{code:w+"port/member/verifycode",password:w+"port/member/changePwd",passtwo:w+"port/member/changePwd2",pid:w+"port/member/realname",close:w+"port/member/changeMethodStatus",card:w+"port/member/myPaymentMethod",type:w+"port/member/getPaymentType",submit:w+"port/member/submitMethod",message:w+"port/member/systemMessage",team:w+"port/member/myTeam",friends:w+"port/member/inviteFriends"},service:{insert:w+"port/server_center/workorder",submit:w+"port/server_center/submitWorkorder",order:w+"port/server_center/workorderList",weixin:w+""},login:{login:w+"port/login",logo:w+"port/login/get_enter_logo",forget:w+"port/login/forgetpwd"},reg:{register:w+"port/login/register",code:w+"port/login/verifycode",agree:w+"port/login/get_user_regagree",reg:w+"port/member/uploadimg"},interests:{qrcode:w+"port/member/recharge",integral:w+"port/member/integralLog",roll:w+"port/member/givingIntegral",sell:w+"port/member/assetSale",submit:w+"port/member/rechargeSubmit",earnings:w+"port/member/incomeLog",assets:w+"port/member/myAssets",detailed:w+"port/member/getVirtualmoneyLog"},record:{pay:w+"port/order/pay",adopt:w+"port/order/index",make:w+"port/member/appointment",update:w+"port/order/pay",passtwo:w+"port/order/auditPass",submit:w+"port/order/complaint",complaint:w+"record/payment",transfer:w+"port/order/transfer",details:w+"port/order/detail",undo:w+"port/order/revoke"}},k=function(t,e,i,a){var o=this,r=uni.getStorageSync("token");""==r&&(uni.setStorageSync("token",""),uni.reLaunch({url:"/pages/login/login"}));i=n({token:uni.getStorageSync("token")},i);uni.request({url:e,method:"GET",data:i,success:function(e){e=e.data;1==e.code?a(t,e):400==e.code?(uni.setStorageSync("token",""),setTimeout(function(){uni.reLaunch({url:"/pages/login/login"})},2e3)):uni.showToast({icon:"none",title:e.msg})},fail:function(t){console.log(t),uni.showToast({icon:"none",title:"网站消息获取错误"})},complete:function(t){t=t.data;13==t.code&&(uni.showToast({icon:"none",title:t.msg}),o.removeToken(),uni.reLaunch({url:"/pages/login/login"})),uni.hideLoading()}})},x={api:y,auth:k,setToken:u,getToken:f,removeToken:v,getUserInfo:c,setUserInfo:d,setId:g,getId:m,setLogid:p,getLogid:b,config:h,User_paw:s,Memory:l};e.default=x},f355:function(t,e,i){"use strict";i.r(e);var n=i("9df3"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},f761:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"load-more"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.loadingType&&t.showImage,expression:"loadingType === 1 && showImage"}],staticClass:"loading-img"},[i("v-uni-view",{staticClass:"load1"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load2"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load3"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1)],1),i("v-uni-text",{staticClass:"loading-text",style:{color:t.color}},[t._v(t._s(0===t.loadingType?t.contentText.contentdown:1===t.loadingType?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})}}]);
