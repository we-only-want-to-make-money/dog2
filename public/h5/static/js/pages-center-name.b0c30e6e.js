(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-name"],{"08dd":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.now_index<3?void 0:[n("v-uni-view",{staticClass:"footer1"},[t._l(t.tabBar,function(e,i){return n("v-uni-view",{key:i,staticClass:"footer_item",staticStyle:{width:"33.3%"}},[n("v-uni-view",{on:{click:function(n){n=t.$handleEvent(n),t.jump(e.pagePath,e.id)}}},[n("v-uni-image",{attrs:{src:e.id==t.now_index?e.selectedIconPath:e.iconPath,mode:""}}),n("v-uni-view",{class:"tab_text "+(e.id==t.now_index?"actives1":"")},[t._v(t._s(e.text))])],1)],1)}),n("v-uni-view",{staticClass:"footer_item",staticStyle:{width:"33.3%"}},[n("v-uni-view",{on:{click:function(e){e=t.$handleEvent(e),t.order()}}},[n("v-uni-image",{attrs:{src:"/static/tabbar/main.png",mode:""}}),n("v-uni-view",{staticClass:"tab_text1"},[t._v("返回貓窩")])],1)],1)],2)]],2)},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"0c22":function(t,e,n){"use strict";var i=n("ec7f"),o=n.n(i);o.a},"0ea1":function(t,e,n){"use strict";n.r(e);var i=n("38be"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},"1b6e":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".footer[data-v-5f7461c0]{left:0;bottom:0;width:100%;color:#fff;z-index:1000;height:%?100?%;position:fixed;background:#181e30}.footer1[data-v-5f7461c0]{left:0;bottom:0;width:100%;color:#fff;height:%?100?%;position:fixed;background-color:#fff}.footer_item[data-v-5f7461c0]{float:left;width:33.3%;height:%?100?%;font-size:%?24?%;text-align:center;color:#7a7e83}.footer_item uni-image[data-v-5f7461c0]{margin-top:%?10?%;width:%?46?%;height:%?46?%;margin-bottom:%?0?%}.footer_item.big_item[data-v-5f7461c0]{top:%?-40?%;position:relative}.footer_item.big_item uni-image[data-v-5f7461c0]{width:%?100?%;height:%?100?%}.actives[data-v-5f7461c0]{color:#5d8afc}.actives1[data-v-5f7461c0]{color:#5d8afc}.tab_text1[data-v-5f7461c0]{color:#fdb513}",""])},"26c5":function(t,e,n){"use strict";n.r(e);var i=n("b722"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},"307a":function(t,e,n){"use strict";n.r(e);var i=n("61ae"),o=n("d3fd");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("0c22");var r=n("2877"),c=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"799c0243",null);e["default"]=c.exports},"38be":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{tabBar:[{id:3,iconPath:"/static/tabbar/refer.png",selectedIconPath:"/static/tabbar/referHL.png",pagePath:"/pages/service/repair",text:"提交工單"},{id:4,iconPath:"/static/tabbar/order.png",selectedIconPath:"/static/tabbar/orderHL.png",pagePath:"/pages/service/order",text:"我的工單"}],footer_nav:[{id:0,name:"貓貓集市",icon:"/static/tabbar/template.png",select_icon:"/static/tabbar/templateHL.png",pagePath:"/pages/main/bazaar"},{id:1,name:"服務中心",icon:"/static/tabbar/api.png",select_icon:"/static/tabbar/apiHL.png",pagePath:"/pages/main/service"},{id:2,name:"我的貓窩",icon:"/static/tabbar/component.png",select_icon:"/static/tabbar/componentHL.png",pagePath:"/pages/main/shack"}],now_index:uni.getStorageSync("css")}},methods:{jump:function(t,e){uni.setStorageSync("css",e),this.now_index=e,uni.reLaunch({url:t})},order:function(){uni.switchTab({url:"/pages/main/shack"})}}};e.default=i},"4df5":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"uni-page-body[data-v-799c0243]{background:#f7f7f7}.pass[data-v-799c0243]{padding:%?40?%}.body[data-v-799c0243]{padding:%?40?%}.icon[data-v-799c0243]{color:#fdb513}.banner[data-v-799c0243]{height:%?80?%;color:#333;font-size:%?36?%;text-align:center;margin:%?60?% %?16?%;border-radius:%?10?%}.icon_text[data-v-799c0243]{line-height:%?100?%;text-align:center}body.?%PAGE?%[data-v-799c0243]{background:#f7f7f7}",""])},5572:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},on:{click:function(e){e=t.$handleEvent(e),t.onClick()}}})},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},5692:function(t,e,n){"use strict";n.r(e);var i=n("5572"),o=n("26c5");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);var r=n("2877"),c=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports},"61ae":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("v-uni-view",{staticClass:"back"},[n("uni-icon",{attrs:{size:"28",type:"arrowleft"},on:{click:function(e){e=t.$handleEvent(e),t.back()}}})],1),0==t.status?[n("v-uni-view",{staticClass:"pass"},[n("v-uni-view",{staticClass:"log-input"},[n("v-uni-text",[t._v("姓名")]),n("v-uni-input",{attrs:{type:"text",maxlength:"20",placeholder:"請輸入真實的姓名"},model:{value:t.realname,callback:function(e){t.realname=e},expression:"realname"}})],1),n("v-uni-view",{staticClass:"log-input"},[n("v-uni-text",[t._v("身份證")]),n("v-uni-input",{attrs:{type:"text",maxlength:"18",placeholder:"請輸入真實的身份證號碼"},model:{value:t.idnum,callback:function(e){t.idnum=e},expression:"idnum"}})],1),1==t.type?[n("v-uni-button",{staticClass:"btn-area",on:{click:function(e){e=t.$handleEvent(e),t.submit(e)}}},[t._v("提交")])]:[n("v-uni-button",{staticClass:"btn-area"},[t._v("提交")])]],2)]:1==t.status?[n("v-uni-view",{staticClass:"banner"},[n("uni-icon",{staticClass:"icon",attrs:{size:"50",type:"checkbox-filled"}}),n("v-uni-view",{staticClass:"icon_text"},[t._v("您已通過實名認證")])],1)]:2==t.status?[n("v-uni-view",{staticClass:"banner"},[t._v("審核中")])]:void 0,n("footerNav")],2)},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"8c8b":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("5692")),o=r(n("b807")),a=r(n("db84"));function r(t){return t&&t.__esModule?t:{default:t}}var c={components:{uniIcon:i.default,footerNav:o.default},data:function(){return{status:uni.getStorageSync("user").is_idverifly,token:uni.getStorageSync("token"),realname:"",idnum:"",type:1}},methods:{back:function(){uni.reLaunch({url:"/pages/main/shack"})},submit:function(){self=this,""!=self.realname?self.idnum.length<18?uni.showToast({icon:"none",title:"請輸入18位的身份證號碼"}):/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)/.test(self.idnum)?(self.type=0,uni.request({url:a.default.api.center.pid+"?token="+self.token,method:"POST",data:{realname:self.realname,idnum:self.idnum},success:function(t){t=t.data;if(uni.showToast({icon:"none",title:t.msg}),1!=t.code)return self.realname="",self.idnum="",void(self.type=1);setTimeout(function(){self.status=2},1e3)}})):uni.showToast({icon:"none",title:"身份證號碼格式不正確"}):uni.showToast({icon:"none",title:"真實姓名不能為空"})}}};e.default=c},b722:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},b807:function(t,e,n){"use strict";n.r(e);var i=n("08dd"),o=n("0ea1");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("ef44");var r=n("2877"),c=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"5f7461c0",null);e["default"]=c.exports},d3fd:function(t,e,n){"use strict";n.r(e);var i=n("8c8b"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},db84:function(t,e,n){"use strict";function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){o(t,e,n[e])})}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a="USER_KEY",r="TOKEN_KEY",c=function(){var t="";return t=uni.getStorageSync(a),t||{avatar:"../../static/img/avatar.png",bottom_text:"广州锐合技术支持QQ：8396048",level_name:"普通会员",nickname:"锐合网络",uid:0,icode:"18024553545"}},s=function(t){uni.setStorage({key:a,data:t})},u=function(t){uni.setStorageSync(r,t)},d=function(){return uni.getStorageSync(r)},l=function(){uni.clearStorage()},f=function(t){uni.setStorageSync("uid",t)},p=function(){return uni.getStorageSync("uid")},m=function(t){uni.setStorageSync("logid",t)},g=function(){return uni.getStorageSync("logid")},v="http://bc.hhwl168.com/",b={index:v+"default/index",home:{info:v+"port/member/info"},main:{bazaar:v+"port/index/index",order:v+"port/index/appointment",adopt:v+"port/index/adopt",result:v+"port/index/adoptResult",info:v+"port/index/confInfo",notice:v+"port/index/notice"},center:{code:v+"port/member/verifycode",password:v+"port/member/changePwd",passtwo:v+"port/member/changePwd2",pid:v+"port/member/realname",close:v+"port/member/changeMethodStatus",card:v+"port/member/myPaymentMethod",type:v+"port/member/getPaymentType",submit:v+"port/member/submitMethod",message:v+"port/member/systemMessage",team:v+"port/member/myTeam",friends:v+"port/member/inviteFriends"},service:{insert:v+"port/server_center/workorder",submit:v+"port/server_center/submitWorkorder",order:v+"port/server_center/workorderList"},login:{login:v+"port/login",logo:v+"port/login/get_enter_logo",forget:v+"port/login/forgetpwd"},reg:{register:v+"port/login/register",code:v+"port/login/verifycode",agree:v+"port/login/get_user_regagree"},interests:{qrcode:v+"port/member/recharge",integral:v+"port/member/integralLog",roll:v+"port/member/givingIntegral",sell:v+"port/member/assetSale",submit:v+"port/member/rechargeSubmit",earnings:v+"port/member/incomeLog",assets:v+"port/member/myAssets"},record:{pay:v+"port/order/pay",adopt:v+"port/order/index",make:v+"port/member/appointment",update:v+"port/order/pay",passtwo:v+"port/order/auditPass",submit:v+"port/order/complaint",complaint:v+"record/payment",transfer:v+"port/order/transfer",details:v+"port/order/detail",undo:v+"port/order/revoke"}},h=function(t,e,n,o){var a=this,r=uni.getStorageSync("token");""==r&&(uni.setStorageSync("token",""),uni.reLaunch({url:"/pages/login/login"}));n=i({token:uni.getStorageSync("token")},n);uni.request({url:e,method:"GET",data:n,success:function(e){e=e.data;1==e.code?o(t,e):400==e.code?(uni.setStorageSync("token",""),setTimeout(function(){uni.reLaunch({url:"/pages/login/login"})},2e3)):uni.showToast({icon:"none",title:e.msg})},fail:function(t){console.log(t),uni.showToast({icon:"none",title:"网站消息获取错误"})},complete:function(t){t=t.data;13==t.code&&(uni.showToast({icon:"none",title:t.msg}),a.removeToken(),uni.reLaunch({url:"/pages/login/login"})),uni.hideLoading()}})},y={api:b,auth:h,setToken:u,getToken:d,removeToken:l,getUserInfo:c,setUserInfo:s,setId:f,getId:p,setLogid:m,getLogid:g};e.default=y},e82f:function(t,e,n){var i=n("1b6e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("3bdf2f52",i,!0,{sourceMap:!1,shadowMode:!1})},ec7f:function(t,e,n){var i=n("4df5");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("75625746",i,!0,{sourceMap:!1,shadowMode:!1})},ef44:function(t,e,n){"use strict";var i=n("e82f"),o=n.n(i);o.a}}]);