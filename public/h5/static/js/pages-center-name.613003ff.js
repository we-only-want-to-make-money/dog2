(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-name"],{"0e31":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".pass[data-v-7050b127]{padding:%?40?%}.body[data-v-7050b127]{padding:%?40?%}.icon[data-v-7050b127]{color:#fdb513}.banner[data-v-7050b127]{height:%?80?%;color:#333;font-size:%?36?%;text-align:center;margin:%?60?% %?16?%;-webkit-border-radius:%?10?%;border-radius:%?10?%}.icon_text[data-v-7050b127]{line-height:%?100?%;text-align:center}",""])},"14b4":function(e,t,n){"use strict";n.r(t);var i=n("52f2"),o=n("f355");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("48b9");var a=n("2877"),c=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,"ec14f616",null);t["default"]=c.exports},"176b":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};t.default=i},"22b0":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"page"},[n("v-uni-view",{staticClass:"back"},[n("uni-icon",{attrs:{size:"28",type:"arrowleft"},on:{click:function(t){t=e.$handleEvent(t),e.back()}}})],1),0==e.status?[n("v-uni-view",{staticClass:"pass"},[n("v-uni-view",{staticClass:"log-input"},[n("v-uni-text",[e._v("姓名")]),n("v-uni-input",{attrs:{type:"text",maxlength:"20",placeholder:"請輸入真實的姓名"},model:{value:e.realname,callback:function(t){e.realname=t},expression:"realname"}})],1),n("v-uni-view",{staticClass:"log-input"},[n("v-uni-text",[e._v("身份證")]),n("v-uni-input",{attrs:{type:"text",maxlength:"18",placeholder:"請輸入真實的身份證號碼"},model:{value:e.idnum,callback:function(t){e.idnum=t},expression:"idnum"}})],1),1==e.type?[n("v-uni-button",{staticClass:"btn-area",on:{click:function(t){t=e.$handleEvent(t),e.submit(t)}}},[e._v("提交")])]:[n("v-uni-button",{staticClass:"btn-area"},[e._v("提交")])]],2)]:1==e.status?[n("v-uni-view",{staticClass:"banner"},[n("uni-icon",{staticClass:"icon",attrs:{size:"50",type:"checkbox-filled"}}),n("v-uni-view",{staticClass:"icon_text"},[e._v("您已通過實名認證")])],1)]:2==e.status?[n("v-uni-view",{staticClass:"banner"},[e._v("審核中")])]:void 0,n("footerNav")],2)},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},"2ed0":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+e.type],style:{color:e.color,"font-size":e.fontSize},on:{click:function(t){t=e.$handleEvent(t),e.onClick()}}})},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},"3aeb":function(e,t,n){"use strict";n.r(t);var i=n("176b"),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=o.a},"48b9":function(e,t,n){"use strict";var i=n("5291"),o=n.n(i);o.a},"4a9b":function(e,t,n){"use strict";n.r(t);var i=n("c32c"),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=o.a},"510e":function(e,t,n){"use strict";var i=n("5242"),o=n.n(i);o.a},5242:function(e,t,n){var i=n("0e31");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("ae14a236",i,!0,{sourceMap:!1,shadowMode:!1})},5291:function(e,t,n){var i=n("c384");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("79948359",i,!0,{sourceMap:!1,shadowMode:!1})},"52f2":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[e.now_index<3?void 0:[n("v-uni-view",{staticClass:"footer1"},[e._l(e.tabBar,function(t,i){return n("v-uni-view",{key:i,staticClass:"footer_item",staticStyle:{width:"33.3%"}},[n("v-uni-view",{on:{click:function(n){n=e.$handleEvent(n),e.jump(t.pagePath,t.id)}}},[n("v-uni-image",{attrs:{src:t.id==e.now_index?t.selectedIconPath:t.iconPath,mode:""}}),n("v-uni-view",{class:"tab_text "+(t.id==e.now_index?"actives1":"")},[e._v(e._s(t.text))])],1)],1)}),n("v-uni-view",{staticClass:"footer_item",staticStyle:{width:"33.3%"}},[n("v-uni-view",{on:{click:function(t){t=e.$handleEvent(t),e.order()}}},[n("v-uni-image",{attrs:{src:"/static/tabbar/main.png",mode:""}}),n("v-uni-view",{staticClass:"tab_text1"},[e._v("返回亀窩")])],1)],1)],2)]],2)},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},"5d50":function(e,t,n){"use strict";n.r(t);var i=n("2ed0"),o=n("3aeb");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);var a=n("2877"),c=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,null,null);t["default"]=c.exports},"9df3":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{tabBar:[{id:3,iconPath:"/static/tabbar/refer.png",selectedIconPath:"/static/tabbar/referHL.png",pagePath:"/pages/service/repair",text:"提交工單"},{id:4,iconPath:"/static/tabbar/order.png",selectedIconPath:"/static/tabbar/orderHL.png",pagePath:"/pages/service/order",text:"我的工單"}],footer_nav:[{id:0,name:"亀集市",icon:"/static/tabbar/template.png",select_icon:"/static/tabbar/templateHL.png",pagePath:"/pages/main/bazaar"},{id:1,name:"服務中心",icon:"/static/tabbar/api.png",select_icon:"/static/tabbar/apiHL.png",pagePath:"/pages/main/service"},{id:2,name:"我的亀窩",icon:"/static/tabbar/component.png",select_icon:"/static/tabbar/componentHL.png",pagePath:"/pages/main/shack"}],now_index:uni.getStorageSync("css")}},methods:{jump:function(e,t){uni.setStorageSync("css",t),this.now_index=t,uni.reLaunch({url:e})},order:function(){uni.switchTab({url:"/pages/main/shack"})}}};t.default=i},c32c:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("5d50")),o=a(n("14b4")),r=a(n("e108"));function a(e){return e&&e.__esModule?e:{default:e}}var c={components:{uniIcon:i.default,footerNav:o.default},data:function(){return{status:uni.getStorageSync("user").is_idverifly,token:uni.getStorageSync("token"),realname:"",idnum:"",type:1}},methods:{back:function(){uni.reLaunch({url:"/pages/main/shack"})},submit:function(){self=this,""!=self.realname?self.idnum.length<18?uni.showToast({icon:"none",title:"請輸入18位的身份證號碼"}):/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)/.test(self.idnum)?(self.type=0,uni.request({url:r.default.api.center.pid+"?token="+self.token,method:"POST",data:{realname:self.realname,idnum:self.idnum},success:function(e){e=e.data;if(uni.showToast({icon:"none",title:e.msg}),1!=e.code)return self.realname="",self.idnum="",void(self.type=1);setTimeout(function(){self.status=2},1e3)}})):uni.showToast({icon:"none",title:"身份證號碼格式不正確"}):uni.showToast({icon:"none",title:"真實姓名不能為空"})}}};t.default=c},c384:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".footer[data-v-ec14f616]{left:0;bottom:0;width:100%;color:#fff;z-index:1000;height:%?100?%;position:fixed;background:#181e30}.footer1[data-v-ec14f616]{left:0;bottom:0;width:100%;color:#fff;height:%?100?%;position:fixed;background-color:#fff}.footer_item[data-v-ec14f616]{float:left;width:33.3%;height:%?100?%;font-size:%?24?%;text-align:center;color:#7a7e83}.footer_item uni-image[data-v-ec14f616]{margin-top:%?10?%;width:%?46?%;height:%?46?%;margin-bottom:%?0?%}.footer_item.big_item[data-v-ec14f616]{top:%?-40?%;position:relative}.footer_item.big_item uni-image[data-v-ec14f616]{width:%?100?%;height:%?100?%}.actives[data-v-ec14f616]{color:#5d8afc}.actives1[data-v-ec14f616]{color:#5d8afc}.tab_text1[data-v-ec14f616]{color:#fdb513}",""])},e108:function(e,t,n){"use strict";function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){o(e,t,n[t])})}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r="USER_KEY",a="TOKEN_KEY",c=function(){var e="";return e=uni.getStorageSync(r),e},s=function(e){uni.setStorage({key:r,data:e})},u=function(e,t){var n=[];n.push(e),n.push(t),uni.setStorageSync("User_paw",n)},l=function(e){uni.setStorageSync("memory",e)},d=function(e){uni.setStorageSync(a,e)},f=function(){return uni.getStorageSync(a)},p=function(){uni.clearStorage()},m=function(e){uni.setStorageSync("uid",e)},g=function(){return uni.getStorageSync("uid")},v=function(e){uni.setStorageSync("logid",e)},b=function(){return uni.getStorageSync("logid")},h={arch:"魚餌",receive:"捕撈",status:"繁殖中",freeze:"凍結中",species:"區塊魚"},y="http://www.91ye.top/",w={index:y+"default/index",home:{info:y+"port/member/info"},main:{bazaar:y+"port/index/index",order:y+"port/index/appointment",adopt:y+"port/index/adopt",result:y+"port/index/adoptResult",info:y+"port/index/confInfo",notice:y+"port/index/notice"},center:{code:y+"port/member/verifycode",password:y+"port/member/changePwd",passtwo:y+"port/member/changePwd2",pid:y+"port/member/realname",close:y+"port/member/changeMethodStatus",card:y+"port/member/myPaymentMethod",type:y+"port/member/getPaymentType",submit:y+"port/member/submitMethod",message:y+"port/member/systemMessage",team:y+"port/member/myTeam",friends:y+"port/member/inviteFriends"},service:{insert:y+"port/server_center/workorder",submit:y+"port/server_center/submitWorkorder",order:y+"port/server_center/workorderList",weixin:y+""},login:{login:y+"port/login",logo:y+"port/login/get_enter_logo",forget:y+"port/login/forgetpwd"},reg:{register:y+"port/login/register",code:y+"port/login/verifycode",agree:y+"port/login/get_user_regagree",reg:y+"port/member/uploadimg"},interests:{qrcode:y+"port/member/recharge",integral:y+"port/member/integralLog",roll:y+"port/member/givingIntegral",sell:y+"port/member/assetSale",submit:y+"port/member/rechargeSubmit",earnings:y+"port/member/incomeLog",assets:y+"port/member/myAssets",detailed:y+"port/member/getVirtualmoneyLog"},record:{pay:y+"port/order/pay",adopt:y+"port/order/index",make:y+"port/member/appointment",update:y+"port/order/pay",passtwo:y+"port/order/auditPass",submit:y+"port/order/complaint",complaint:y+"record/payment",transfer:y+"port/order/transfer",details:y+"port/order/detail",undo:y+"port/order/revoke"}},_=function(e,t,n,o){var r=this,a=uni.getStorageSync("token");""==a&&(uni.setStorageSync("token",""),uni.reLaunch({url:"/pages/login/login"}));n=i({token:uni.getStorageSync("token")},n);uni.request({url:t,method:"GET",data:n,success:function(t){t=t.data;1==t.code?o(e,t):400==t.code?(uni.setStorageSync("token",""),setTimeout(function(){uni.reLaunch({url:"/pages/login/login"})},2e3)):uni.showToast({icon:"none",title:t.msg})},fail:function(e){console.log(e),uni.showToast({icon:"none",title:"网站消息获取错误"})},complete:function(e){e=e.data;13==e.code&&(uni.showToast({icon:"none",title:e.msg}),r.removeToken(),uni.reLaunch({url:"/pages/login/login"})),uni.hideLoading()}})},S={api:w,auth:_,setToken:d,getToken:f,removeToken:p,getUserInfo:c,setUserInfo:s,setId:m,getId:g,setLogid:v,getLogid:b,config:h,User_paw:u,Memory:l};t.default=S},ebee:function(e,t,n){"use strict";n.r(t);var i=n("22b0"),o=n("4a9b");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("510e");var a=n("2877"),c=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,"7050b127",null);t["default"]=c.exports},f355:function(e,t,n){"use strict";n.r(t);var i=n("9df3"),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=o.a}}]);
