(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-name"],{"00d8":function(e,t,n){"use strict";function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){i(e,t,n[t])})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r="USER_KEY",a="TOKEN_KEY",u=function(){var e="";return e=uni.getStorageSync(r),e||{avatar:"../../static/img/avatar.png",bottom_text:"广州锐合技术支持QQ：8396048",level_name:"普通会员",nickname:"锐合网络",uid:0,icode:"18024553545"}},c=function(e){uni.setStorage({key:r,data:e})},s=function(e){uni.setStorageSync(a,e)},d=function(){return uni.getStorageSync(a)},l=function(){uni.clearStorage()},f=function(e){uni.setStorageSync("uid",e)},m=function(){return uni.getStorageSync("uid")},p=function(e){uni.setStorageSync("logid",e)},v=function(){return uni.getStorageSync("logid")},g="/",h={index:g+"default/index",home:{info:g+"port/member/info"},main:{bazaar:g+"port/index/index",order:g+"port/index/appointment",adopt:g+"port/index/adopt"},center:{code:g+"port/member/verifycode",password:g+"port/member/changePwd",passtwo:g+"port/member/changePwd2",pid:g+"port/member/realname",close:g+"port/member/changeMethodStatus",card:g+"port/member/myPaymentMethod",type:g+"port/member/getPaymentType",submit:g+"port/member/submitMethod",message:g+"port/member/systemMessage",team:g+"port/member/myTeam",friends:g+"port/member/inviteFriends"},service:{insert:g+"port/server_center/workorder",submit:g+"port/server_center/submitWorkorder",order:g+"port/server_center/submitWorkorder"},login:{login:g+"port/login",logo:g+"port/login/get_enter_logo",forget:g+"port/login/forgetpwd"},reg:{register:g+"port/login/register",code:g+"port/login/verifycode"},interests:{qrcode:g+"port/member/integralLog",integral:g+"port/member/integralLog",roll:g+"port/member/givingIntegral",sell:g+"port/member/assetSale"},record:{pay:g+"port/order/pay",adopt:g+"port/order/index",make:g+"port/member/appointment",update:g+"port/order/pay",passtwo:g+"port/order/auditPass",submit:g+"port/order/complaint",complaint:g+"record/payment",transfer:g+"port/order/transfer",details:g+"port/order/detail",undo:g+"port/order/detail"}},b=function(e,t,n,i){var r=this,a=uni.getStorageSync("token");""==a&&uni.reLaunch({url:"/pages/login/login"});n=o({token:uni.getStorageSync("token")},n);uni.request({url:t,method:"GET",data:n,success:function(t){t=t.data;1==t.code?i(e,t):400==t.code?(uni.setStorageSync("token",""),setTimeout(function(){uni.reLaunch({url:"/pages/login/login"})},2e3)):uni.showToast({icon:"none",title:t.msg})},fail:function(e){console.log(e),uni.showToast({icon:"none",title:"网站消息获取错误"})},complete:function(e){e=e.data;13==e.code&&(uni.showToast({icon:"none",title:e.msg}),r.removeToken(),uni.reLaunch({url:"/pages/login/login"})),uni.hideLoading()}})},_={api:h,auth:b,setToken:s,getToken:d,removeToken:l,getUserInfo:u,setUserInfo:c,setId:f,getId:m,setLogid:p,getLogid:v};t.default=_},"1f64":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".footer[data-v-3cddadaa]{left:0;bottom:0;width:100%;color:#fff;height:%?100?%;position:fixed;background-color:#181e30}.footer_item[data-v-3cddadaa]{float:left;width:33.3%;height:%?100?%;font-size:%?24?%;text-align:center;color:#7a7e83}.footer_item uni-image[data-v-3cddadaa]{top:%?10?%;width:%?46?%;height:%?46?%;margin-bottom:%?10?%}.footer_item.big_item[data-v-3cddadaa]{top:%?-40?%;position:relative}.footer_item.big_item uni-image[data-v-3cddadaa]{width:%?100?%;height:%?100?%}.active[data-v-3cddadaa]{color:#5d8afc}",""])},"22c1":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={methods:{jump:function(e){uni.navigateTo({url:e})},change_nav:function(e){this.$store.commit("change_page",e)}},computed:{footer_nav:function(){return this.$store.state.footer_store.footer_nav},now_index:function(){return uni.getStorageSync("css")}}};t.default=o},"2bde":function(e,t,n){"use strict";n.r(t);var o=n("7c0f"),i=n("8a4c");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);var a=n("2877"),u=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=u.exports},3444:function(e,t,n){"use strict";n.r(t);var o=n("d8ed"),i=n("d96f");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);n("94bf");var a=n("2877"),u=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"3cddadaa",null);t["default"]=u.exports},"5f6f":function(e,t,n){var o=n("1f64");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("4f06").default;i("fbc8b054",o,!0,{sourceMap:!1,shadowMode:!1})},7228:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"page"},[1==e.status?[n("v-uni-view",{staticClass:"banner"},[n("uni-icon",{staticClass:"icon",attrs:{size:"36",type:"checkbox-filled"}}),e._v("您已通过实名认证！")],1)]:2==e.status?[n("v-uni-view",{staticClass:"banner"},[e._v("审核中")])]:[n("v-uni-view",{staticClass:"pass"},[n("v-uni-view",{staticClass:"log-input"},[n("v-uni-text",[e._v("姓名")]),n("v-uni-input",{attrs:{type:"text",maxlength:"20",placeholder:"请输入真实的姓名"},model:{value:e.realname,callback:function(t){e.realname=t},expression:"realname"}})],1),n("v-uni-view",{staticClass:"log-input"},[n("v-uni-text",[e._v("身份证")]),n("v-uni-input",{attrs:{type:"text",maxlength:"18",placeholder:"请输入真实的身份证号码"},model:{value:e.idnum,callback:function(t){e.idnum=t},expression:"idnum"}})],1),n("v-uni-button",{staticClass:"btn-area",on:{click:function(t){t=e.$handleEvent(t),e.submit(t)}}},[e._v("提交")])],1)],n("footerNav")],2)},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},"79c2":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("2bde")),i=a(n("3444")),r=a(n("00d8"));function a(e){return e&&e.__esModule?e:{default:e}}var u={components:{uniIcon:o.default,footerNav:i.default},data:function(){return{user:uni.getStorageSync("user"),token:uni.getStorageSync("token"),status:0,realname:"",idnum:""}},onShow:function(){this.status=this.user.is_idverifly,r.default.auth(this,r.default.api.home.info+"?token="+this.token,{},function(e,t){})},methods:{submit:function(){var e=this;""!=this.realname?this.idnum.length<18?uni.showToast({icon:"none",title:"请输入18位的身份证号码"}):/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)/.test(this.idnum)?uni.request({url:r.default.api.center.pid+"?token="+this.token,method:"POST",data:{realname:this.realname,idnum:this.idnum},success:function(t){console.log(t);t=t.data;if(1!=t.code)return e.realname="",e.idnum="",void uni.showToast({icon:"none",title:t.msg});e.bannerShow=!0,e.nameShow=!1,setTimeout(function(){uni.navigateTo({url:"/pages/main/shack"})},1e3)}}):uni.showToast({icon:"none",title:"身份证号码格式不正确"}):uni.showToast({icon:"none",title:"真实姓名不能为空"})}}};t.default=u},"7c0f":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+e.type],style:{color:e.color,"font-size":e.fontSize},on:{click:function(t){t=e.$handleEvent(t),e.onClick()}}})},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},"8a4c":function(e,t,n){"use strict";n.r(t);var o=n("ceb8"),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);t["default"]=i.a},"8b42":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".page[data-v-d0080292]{width:100%}.pass[data-v-d0080292]{padding:%?40?%}.body[data-v-d0080292]{padding:%?40?%}.icon[data-v-d0080292]{color:#fdb513;margin-right:%?30?%}.banner[data-v-d0080292]{color:#333;font-size:%?36?%;text-align:center;margin:%?60?% %?16?%;padding:%?20?% %?0?%;border-radius:%?10?%}",""])},"93e5":function(e,t,n){"use strict";n.r(t);var o=n("7228"),i=n("a013");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);n("ce43");var a=n("2877"),u=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"d0080292",null);t["default"]=u.exports},"94bf":function(e,t,n){"use strict";var o=n("5f6f"),i=n.n(o);i.a},a013:function(e,t,n){"use strict";n.r(t);var o=n("79c2"),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);t["default"]=i.a},ce43:function(e,t,n){"use strict";var o=n("d949"),i=n.n(o);i.a},ceb8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};t.default=o},d8ed:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"footer"},e._l(e.footer_nav,function(t,o){return n("v-uni-view",{key:o,class:"footer_item "+("big"==t.size?"big_item":""),staticStyle:{width:"33.3%"},on:{click:function(t){t=e.$handleEvent(t),e.change_nav(o)}}},[n("v-uni-view",{on:{click:function(n){n=e.$handleEvent(n),e.jump(t.pagePath)}}},[n("v-uni-image",{attrs:{src:o==e.now_index?t.select_icon:t.icon,mode:""}}),n("v-uni-view",{class:o==e.now_index?"active":""},[e._v(e._s(t.name))])],1)],1)}))],1)},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},d949:function(e,t,n){var o=n("8b42");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("4f06").default;i("fa6a6d44",o,!0,{sourceMap:!1,shadowMode:!1})},d96f:function(e,t,n){"use strict";n.r(t);var o=n("22c1"),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);t["default"]=i.a}}]);