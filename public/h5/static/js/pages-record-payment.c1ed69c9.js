(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-record-payment"],{"00d8":function(e,t,i){"use strict";function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),n.forEach(function(t){o(e,t,i[t])})}return e}function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="USER_KEY",r="TOKEN_KEY",s=function(){var e="";return e=uni.getStorageSync(a),e||{avatar:"../../static/img/avatar.png",bottom_text:"广州锐合技术支持QQ：8396048",level_name:"普通会员",nickname:"锐合网络",uid:0,icode:"18024553545"}},c=function(e){uni.setStorage({key:a,data:e})},u=function(e){uni.setStorageSync(r,e)},l=function(){return uni.getStorageSync(r)},d=function(){uni.clearStorage()},f=function(e){uni.setStorageSync("uid",e)},p=function(){return uni.getStorageSync("uid")},v=function(e){uni.setStorageSync("logid",e)},g=function(){return uni.getStorageSync("logid")},m="/",h={index:m+"default/index",home:{info:m+"port/member/info"},main:{bazaar:m+"port/index/index",order:m+"port/index/appointment",adopt:m+"port/index/adopt",info:m+"port/index/confInfo",notice:m+"port/index/notice"},center:{code:m+"port/member/verifycode",password:m+"port/member/changePwd",passtwo:m+"port/member/changePwd2",pid:m+"port/member/realname",close:m+"port/member/changeMethodStatus",card:m+"port/member/myPaymentMethod",type:m+"port/member/getPaymentType",submit:m+"port/member/submitMethod",message:m+"port/member/systemMessage",team:m+"port/member/myTeam",friends:m+"port/member/inviteFriends"},service:{insert:m+"port/server_center/workorder",submit:m+"port/server_center/submitWorkorder",order:m+"port/server_center/workorderList"},login:{login:m+"port/login",logo:m+"port/login/get_enter_logo",forget:m+"port/login/forgetpwd"},reg:{register:m+"port/login/register",code:m+"port/login/verifycode",agree:m+"port/login/get_user_regagree"},interests:{qrcode:m+"port/member/recharge",integral:m+"port/member/integralLog",roll:m+"port/member/givingIntegral",sell:m+"port/member/assetSale",submit:m+"port/member/rechargeSubmit",earnings:m+"port/member/incomeLog"},record:{pay:m+"port/order/pay",adopt:m+"port/order/index",make:m+"port/member/appointment",update:m+"port/order/pay",passtwo:m+"port/order/auditPass",submit:m+"port/order/complaint",complaint:m+"record/payment",transfer:m+"port/order/transfer",details:m+"port/order/detail",undo:m+"port/order/detail"}},b=function(e,t,i,o){var a=this,r=uni.getStorageSync("token");""==r&&uni.reLaunch({url:"/pages/login/login"});i=n({token:uni.getStorageSync("token")},i);uni.request({url:t,method:"GET",data:i,success:function(t){t=t.data;1==t.code?o(e,t):400==t.code?(uni.setStorageSync("token",""),setTimeout(function(){uni.reLaunch({url:"/pages/login/login"})},2e3)):uni.showToast({icon:"none",title:t.msg})},fail:function(e){console.log(e),uni.showToast({icon:"none",title:"网站消息获取错误"})},complete:function(e){e=e.data;13==e.code&&(uni.showToast({icon:"none",title:e.msg}),a.removeToken(),uni.reLaunch({url:"/pages/login/login"})),uni.hideLoading()}})},_={api:h,auth:b,setToken:u,getToken:l,removeToken:d,getUserInfo:s,setUserInfo:c,setId:f,getId:p,setLogid:v,getLogid:g};t.default=_},"14b4":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".footer[data-v-04c0d9bb]{left:0;bottom:0;width:100%;color:#fff;z-index:1000;height:%?100?%;position:fixed;background-color:#181e30}.footer_item[data-v-04c0d9bb]{float:left;width:33.3%;height:%?100?%;font-size:%?24?%;text-align:center;color:#7a7e83}.footer_item uni-image[data-v-04c0d9bb]{top:%?10?%;width:%?46?%;height:%?46?%;margin-bottom:%?10?%}.footer_item.big_item[data-v-04c0d9bb]{top:%?-40?%;position:relative}.footer_item.big_item uni-image[data-v-04c0d9bb]{width:%?100?%;height:%?100?%}.active[data-v-04c0d9bb]{color:#5d8afc}",""])},"22c1":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={methods:{jump:function(e){uni.navigateTo({url:e})},change_nav:function(e){this.$store.commit("change_page",e)}},computed:{footer_nav:function(){return this.$store.state.footer_store.footer_nav},now_index:function(){return uni.getStorageSync("css")}}};t.default=n},"2bde":function(e,t,i){"use strict";i.r(t);var n=i("7869"),o=i("8a4c");for(var a in o)"default"!==a&&function(e){i.d(t,e,function(){return o[e]})}(a);var r=i("2877"),s=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},3444:function(e,t,i){"use strict";i.r(t);var n=i("5dbd"),o=i("d96f");for(var a in o)"default"!==a&&function(e){i.d(t,e,function(){return o[e]})}(a);i("7e0f");var r=i("2877"),s=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,"04c0d9bb",null);t["default"]=s.exports},"434e":function(e,t,i){"use strict";i.r(t);var n=i("b56c"),o=i("e38b");for(var a in o)"default"!==a&&function(e){i.d(t,e,function(){return o[e]})}(a);i("c2f0");var r=i("2877"),s=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,"1aead418",null);t["default"]=s.exports},"5dbd":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"footer"},e._l(e.footer_nav,function(t,n){return i("v-uni-view",{key:n,class:"footer_item "+("big"==t.size?"big_item":""),staticStyle:{width:"33.3%"},on:{click:function(t){t=e.$handleEvent(t),e.change_nav(n)}}},[i("v-uni-view",{on:{click:function(i){i=e.$handleEvent(i),e.jump(t.pagePath)}}},[i("v-uni-image",{attrs:{src:n==e.now_index?t.select_icon:t.icon,mode:""}}),i("v-uni-view",{class:n==e.now_index?"active":""},[e._v(e._s(t.name))])],1)],1)}))],1)},o=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})},"757e":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".uni-mask[data-v-1aead418]{position:fixed;z-index:998;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.3)}.uni-popup[data-v-1aead418]{position:fixed;z-index:999;background-color:#fff;-webkit-box-shadow:0 0 %?30?% rgba(0,0,0,.1);box-shadow:0 0 %?30?% rgba(0,0,0,.1)}.uni-popup-middle[data-v-1aead418]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:70%;height:auto;border-radius:%?30?%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:%?30?%}.uni-popup-top[data-v-1aead418]{top:0;left:0;width:100%;height:%?100?%;line-height:%?100?%;text-align:center}.uni-popup-bottom[data-v-1aead418]{left:0;bottom:0;width:100%;height:%?100?%;line-height:%?100?%;text-align:center}",""])},7869:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+e.type],style:{color:e.color,"font-size":e.fontSize},on:{click:function(t){t=e.$handleEvent(t),e.onClick()}}})},o=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})},"7e0f":function(e,t,i){"use strict";var n=i("a465"),o=i.n(n);o.a},"8a4c":function(e,t,i){"use strict";i.r(t);var n=i("ceb8"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);t["default"]=o.a},9979:function(e,t,i){"use strict";i.r(t);var n=i("e7d9"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);t["default"]=o.a},a0f3:function(e,t,i){"use strict";var n=i("a9ac"),o=i.n(n);o.a},a105:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"back"},[i("uni-icon",{attrs:{size:"28",type:"arrowleft"},on:{click:function(t){t=e.$handleEvent(t),e.back("/pages/record/adopt")}}})],1),i("v-uni-view",{staticClass:"list"},[e._v("消耗積分"),i("v-uni-view",{staticClass:"list_right"},[e._v(e._s(e.adopt.integral))])],1),i("v-uni-view",{staticClass:"list"},[e._v("轉讓方"),i("v-uni-view",{staticClass:"list_right"},[e._v(e._s(e.adopt.seller_nickname))])],1),i("v-uni-view",{staticClass:"list"},[e._v("轉讓方手機"),i("v-uni-view",{staticClass:"list_right"},[e._v(e._s(e.adopt.seller_account))])],1),i("v-uni-view",{staticClass:"list"},[e._v("區塊金額"),i("v-uni-view",{staticClass:"list_right"},[e._v(e._s(e.adopt.price))])],1),i("v-uni-view",{staticClass:"account"},[i("v-uni-view",{staticClass:"title"},[e._v("轉讓方收款賬號")]),e._l(e.card_list,function(t,n){return i("v-uni-view",{key:n,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[i("v-uni-view",{staticClass:"uni-list-cell-navigate uni-navigate-right uni-media-list",on:{click:function(i){i=e.$handleEvent(i),e.popup(t.paymentcode)}}},[i("v-uni-view",{staticClass:"uni-media-list-logo"},[i("v-uni-image",{attrs:{src:t.logo}})],1),i("v-uni-view",{staticClass:"uni-media-list-body"},[i("v-uni-view",{staticClass:"uni-media-list-text-top"},[e._v("賬戶名稱："+e._s(t.titleofaccount))]),i("v-uni-view",{staticClass:"uni-media-list-text-top"},[e._v("賬戶賬號："+e._s(t.account))]),i("v-uni-view",{staticClass:"uni-media-list-text-top"},[e._v("賬戶類型："+e._s(t.typename))])],1)],1)],1)})],2),i("uni-popup",{attrs:{show:e.showPopup,type:"middle"},on:{hidePopup:function(t){t=e.$handleEvent(t),e.hidePopup(t)}}},[i("v-uni-view",{staticClass:"popup"},[i("uni-icon",{staticClass:"pop-false",attrs:{type:"closeempty",size:"30"},on:{click:function(t){t=e.$handleEvent(t),e.shut(t)}}}),i("v-uni-image",{attrs:{src:e.picture}})],1)],1),i("v-uni-view",{staticClass:"body"},[i("v-uni-view",{staticClass:"text1"},[e._v("付款憑證：")]),e.imageSrc?[i("v-uni-image",{staticClass:"image",attrs:{src:e.imageSrc,mode:"widthFix"},on:{click:function(t){t=e.$handleEvent(t),e.chooseImage(t)}}},[e._v("上傳付款憑證")])]:[i("v-uni-view",{staticClass:"img1"},[i("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(t){t=e.$handleEvent(t),e.chooseImage(t)}}},[e._v("+")])],1)]],2),i("v-uni-view",{staticClass:"body"},[i("v-uni-view",{staticClass:"log-input"},[i("v-uni-text",[e._v("二級密碼")]),i("v-uni-input",{attrs:{type:"text",name:"passtwo",password:"true",maxlength:"6",placeholder:"輸入二級密碼"},model:{value:e.passtwo,callback:function(t){e.passtwo=t},expression:"passtwo"}})],1),i("v-uni-button",{staticClass:"btn-area",on:{click:function(t){t=e.$handleEvent(t),e.submit(t)}}},[e._v("確認付款")])],1),i("footerNav")],1)},o=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})},a465:function(e,t,i){var n=i("14b4");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("803dff7a",n,!0,{sourceMap:!1,shadowMode:!1})},a9ac:function(e,t,i){var n=i("b7fb");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("a03a3208",n,!0,{sourceMap:!1,shadowMode:!1})},b56c:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"uni-mask",style:{top:e.offsetTop+"px"},on:{click:function(t){t=e.$handleEvent(t),e.hide(t)}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],class:["uni-popup","uni-popup-"+e.type]},[e._v(e._s(e.msg)),e._t("default")],2)],1)},o=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})},b695:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={props:{show:{type:Boolean,default:!1},type:{type:String,default:"middle"},msg:{type:String,default:""}},data:function(){var e=0;return{offsetTop:e}},methods:{hide:function(){this.$emit("hidePopup")}}};t.default=n},b7fb:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".account[data-v-434e8c04],.credentials[data-v-434e8c04],.text[data-v-434e8c04]{padding:%?26?%;background:#fff;border-bottom:%?2?% solid #eee}.text[data-v-434e8c04]{color:#333;font-size:%?30?%;line-height:%?70?%}.title[data-v-434e8c04]{color:#333;font-size:%?36?%;padding-bottom:%?20?%}.uni-media-list[data-v-434e8c04]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?10?% %?20?%;-webkit-box-sizing:border-box}.uni-list-cell[data-v-434e8c04]{background-color:#fff;border-bottom:%?2?% solid #c8c7cc}.uni-list-cell-hover[data-v-434e8c04]{background-color:#ddd}.uni-media-list-logo[data-v-434e8c04]{width:30%;height:%?110?%}.uni-media-list-logo uni-image[data-v-434e8c04]{width:%?110?%;height:%?110?%}.uni-media-list-body[data-v-434e8c04]{flex:1;width:30%;-ms-flex:1;height:100%;-webkit-flex:1;-webkit-box-flex:1;padding-right:%?40?%;display:-webkit-flex;-webkit-flex-direction:column}.uni-media-list-text-top[data-v-434e8c04]{width:100%;font-size:%?28?%;line-height:%?40?%}.uni-ellipsis[data-v-434e8c04],.uni-media-list-text-bottom[data-v-434e8c04],.uni-media-list-text-top[data-v-434e8c04]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis}.pop-false[data-v-434e8c04]{float:right}.popup[data-v-434e8c04]{width:100%}.popup uni-image[data-v-434e8c04]{width:%?480?%;height:%?480?%;margin:0 5%}.list[data-v-434e8c04]{width:100%;height:%?100?%;font-size:%?30?%;text-indent:%?40?%;line-height:%?100?%;background-color:#fff;border-bottom:%?3?% solid #f1f1f1}.list_right[data-v-434e8c04]{color:#fdb513;text-align:right;margin-right:%?40?%;margin-top:%?-100?%;line-height:%?100?%}.log-input[data-v-434e8c04]{background:#f1f1f1}.body[data-v-434e8c04]{padding:%?26?%;background-color:#fff;border-bottom:%?1?% solid #eee}.img1[data-v-434e8c04]{color:#ddd;height:%?300?%;font-size:%?200?%;text-align:center;line-height:%?300?%;background-color:#eee;border:%?4?% dashed #ddd}.text1[data-v-434e8c04]{font-size:%?36?%;line-height:%?65?%}",""])},c2f0:function(e,t,i){"use strict";var n=i("d59a"),o=i.n(n);o.a},ceb8:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};t.default=n},d59a:function(e,t,i){var n=i("757e");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("26636524",n,!0,{sourceMap:!1,shadowMode:!1})},d96f:function(e,t,i){"use strict";i.r(t);var n=i("22c1"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);t["default"]=o.a},e38b:function(e,t,i){"use strict";i.r(t);var n=i("b695"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);t["default"]=o.a},e7d9:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _service=_interopRequireDefault(__webpack_require__("00d8")),_uniIcon=_interopRequireDefault(__webpack_require__("2bde")),_uniPopup=_interopRequireDefault(__webpack_require__("434e")),_footer_nav=_interopRequireDefault(__webpack_require__("3444"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var userInfo=_service.default.getUserInfo(),_default={components:{uniIcon:_uniIcon.default,uniPopup:_uniPopup.default,footerNav:_footer_nav.default},data:function(){return{id:uni.getStorageSync("adopt_id"),token:uni.getStorageSync("token"),user:uni.getStorageSync("user"),showPopup:!1,imageSrc:"",passtwo:"",picture:"",card_list:[],adopt:""}},onLoad:function(e){this.id=e.id,_service.default.auth(this,_service.default.api.record.details+"?token="+this.token,{id:e.id},function(e,t){1==t.code&&(e.adopt=t.data.detail,e.card_list=t.data.detail.seller_paymentmethod)}),_service.default.auth(this,_service.default.api.center.type+"?token="+this.token,{},function(e,t){if(1==t.code){var i=t.data.typelist;e.type_list=i}})},methods:{back:function(e){uni.navigateTo({url:e})},chooseImage:function(){var e=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(t){var i=t.tempFilePaths[0];e.imageSrc=i},fail:function(e){console.log("chooseImage fail",e)}})},submit:function submit(){if(console.log(self.passtwo),""!=this.imageSrc)if(this.passtwo.length<6)uni.showToast({icon:"none",title:"請輸入六位的二級密碼"});else var uploadTask=uni.uploadFile({url:_service.default.api.record.update+"?token="+this.token,filePath:this.imageSrc,name:"file",formData:{id:this.id,pwd2:this.passtwo},success:function success(res){res=res.data,res=eval("("+res+")"),uni.showToast({icon:"none",title:res.msg}),1==res.code&&(uni.setStorageSync("tabbar",1),setTimeout(function(){uni.navigateTo({url:"/pages/record/adopt"})},1e3))}});else uni.showToast({icon:"none",title:"請上傳付款憑證"})},hidePopup:function(){this.showPopup=!1},shut:function(){this.showPopup=!1},popup:function(e){this.picture=e,this.showPopup=!0}}};exports.default=_default},f267:function(e,t,i){"use strict";i.r(t);var n=i("a105"),o=i("9979");for(var a in o)"default"!==a&&function(e){i.d(t,e,function(){return o[e]})}(a);i("a0f3");var r=i("2877"),s=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,"434e8c04",null);t["default"]=s.exports}}]);