(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-null"],{"248e":function(e,t,r){"use strict";var n=r("2e73"),o=r.n(n);o.a},"2e73":function(e,t,r){var n=r("fae8");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=r("4f06").default;o("113fadc9",n,!0,{sourceMap:!1,shadowMode:!1})},"3c2a":function(e,t,r){"use strict";r.r(t);var n=r("f109"),o=r("f0b9");for(var i in o)"default"!==i&&function(e){r.d(t,e,function(){return o[e]})}(i);r("248e");var a=r("2877"),u=Object(a["a"])(o["default"],n["a"],n["b"],!1,null,"f476a8de",null);t["default"]=u.exports},"4b55":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r("db84"));function o(e){return e&&e.__esModule?e:{default:e}}var i={onLoad:function(){uni.request({url:n.default.api.center.friends,method:"GET",data:{token:uni.getStorageSync("token")},success:function(e){e=e.data;1==e.code?uni.reLaunch({url:"/pages/main/bazaar"}):uni.reLaunch({url:"/pages/login/login"})}})}};t.default=i},db84:function(e,t,r){"use strict";function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){o(e,t,r[t])})}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i="USER_KEY",a="TOKEN_KEY",u=function(){var e="";return e=uni.getStorageSync(i),e||{avatar:"../../static/img/avatar.png",bottom_text:"广州锐合技术支持QQ：8396048",level_name:"普通会员",nickname:"锐合网络",uid:0,icode:"18024553545"}},c=function(e){uni.setStorage({key:i,data:e})},s=function(e){uni.setStorageSync(a,e)},d=function(){return uni.getStorageSync(a)},l=function(){uni.clearStorage()},p=function(e){uni.setStorageSync("uid",e)},g=function(){return uni.getStorageSync("uid")},f=function(e){uni.setStorageSync("logid",e)},m=function(){return uni.getStorageSync("logid")},b="http://bc.hhwl168.com/",v={index:b+"default/index",home:{info:b+"port/member/info"},main:{bazaar:b+"port/index/index",order:b+"port/index/appointment",adopt:b+"port/index/adopt",result:b+"port/index/adoptResult",info:b+"port/index/confInfo",notice:b+"port/index/notice"},center:{code:b+"port/member/verifycode",password:b+"port/member/changePwd",passtwo:b+"port/member/changePwd2",pid:b+"port/member/realname",close:b+"port/member/changeMethodStatus",card:b+"port/member/myPaymentMethod",type:b+"port/member/getPaymentType",submit:b+"port/member/submitMethod",message:b+"port/member/systemMessage",team:b+"port/member/myTeam",friends:b+"port/member/inviteFriends"},service:{insert:b+"port/server_center/workorder",submit:b+"port/server_center/submitWorkorder",order:b+"port/server_center/workorderList"},login:{login:b+"port/login",logo:b+"port/login/get_enter_logo",forget:b+"port/login/forgetpwd"},reg:{register:b+"port/login/register",code:b+"port/login/verifycode",agree:b+"port/login/get_user_regagree"},interests:{qrcode:b+"port/member/recharge",integral:b+"port/member/integralLog",roll:b+"port/member/givingIntegral",sell:b+"port/member/assetSale",submit:b+"port/member/rechargeSubmit",earnings:b+"port/member/incomeLog",assets:b+"port/member/myAssets"},record:{pay:b+"port/order/pay",adopt:b+"port/order/index",make:b+"port/member/appointment",update:b+"port/order/pay",passtwo:b+"port/order/auditPass",submit:b+"port/order/complaint",complaint:b+"record/payment",transfer:b+"port/order/transfer",details:b+"port/order/detail",undo:b+"port/order/revoke"}},y=function(e,t,r,o){var i=this,a=uni.getStorageSync("token");""==a&&(uni.setStorageSync("token",""),uni.reLaunch({url:"/pages/login/login"}));r=n({token:uni.getStorageSync("token")},r);uni.request({url:t,method:"GET",data:r,success:function(t){t=t.data;1==t.code?o(e,t):400==t.code?(uni.setStorageSync("token",""),setTimeout(function(){uni.reLaunch({url:"/pages/login/login"})},2e3)):uni.showToast({icon:"none",title:t.msg})},fail:function(e){console.log(e),uni.showToast({icon:"none",title:"网站消息获取错误"})},complete:function(e){e=e.data;13==e.code&&(uni.showToast({icon:"none",title:e.msg}),i.removeToken(),uni.reLaunch({url:"/pages/login/login"})),uni.hideLoading()}})},S={api:v,auth:y,setToken:s,getToken:d,removeToken:l,getUserInfo:u,setUserInfo:c,setId:p,getId:g,setLogid:f,getLogid:m};t.default=S},f0b9:function(e,t,r){"use strict";r.r(t);var n=r("4b55"),o=r.n(n);for(var i in n)"default"!==i&&function(e){r.d(t,e,function(){return n[e]})}(i);t["default"]=o.a},f109:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view")},o=[];r.d(t,"a",function(){return n}),r.d(t,"b",function(){return o})},fae8:function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,"uni-page-body[data-v-f476a8de]{background:#252831}body.?%PAGE?%[data-v-f476a8de]{background:#252831}",""])}}]);