(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-leverage-leverage"],{"0726":function(t,a,e){"use strict";e.r(a);var i=e("c826"),n=e("f7a8");for(var d in n)["default"].indexOf(d)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(d);e("a81f");var r=e("f0c5"),o=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"a6d1ad56",null,!1,i["a"],void 0);a["default"]=o.exports},"39b4":function(t,a,e){var i=e("f3ca");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("a2890bf6",i,!0,{sourceMap:!1,shadowMode:!1})},9186:function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;a.default={data:function(){return{current:1,biaoti:"",show:!1,dataArr:[{name:this.$t("leverage.leverage.5qzyi9ggg4w0"),value:"100:1"},{name:this.$t("leverage.leverage.5qzyi9ggggc0"),value:"100:1"},{name:this.$t("leverage.leverage.5qzyi9gggls0"),value:"100:1"},{name:this.$t("leverage.leverage.5qzyi9gggqg0"),value:"5:1"},{name:this.$t("leverage.leverage.5qzyi9gggvo0"),value:"5:1"}],textArrOne:[{rate:"30:1",text:this.$t("leverage.leverage.5qzyi9gglgk0")},{rate:"20:1",text:this.$t("leverage.leverage.5qzyi9gglns0")},{rate:"202:1",text:this.$t("leverage.leverage.5qzyi9gglns0")},{rate:"203:1",text:this.$t("leverage.leverage.5qzyi9gglns0")},{rate:"204:1",text:this.$t("leverage.leverage.5qzyi9gglns0")},{rate:"205:1",text:this.$t("leverage.leverage.5qzyi9gglns0")}],textArrTwo:[{rate:"20:1",text:this.$t("leverage.leverage.5qzyi9ggmz40")},{rate:"10:1",text:this.$t("leverage.leverage.5qzyi9gglns0")}],textArrThree:[{rate:"20:1",text:this.$t("leverage.leverage.5qzyi9ggn7g0")},{rate:"10:1",text:this.$t("leverage.leverage.5qzyi9ggnck0")}]}},methods:{handlerEvent:function(t){t.name==this.$t("leverage.leverage.5qzyi9ggg4w0")?(this.show=!0,this.biaoti=this.$t("leverage.leverage.5qzyi9ggg4w0"),this.current=1):t.name==this.$t("leverage.leverage.5qzyi9ggggc0")?(this.show=!0,this.biaoti=this.$t("leverage.leverage.5qzyi9ggggc0"),this.current=2):t.name==this.$t("leverage.leverage.5qzyi9gggls0")&&(this.show=!0,this.biaoti=this.$t("leverage.leverage.5qzyi9gggls0"),this.current=3)},yesHandler:function(){this.show=!1}}}},9508:function(t,a,e){"use strict";e.r(a);var i=e("c21b"),n=e("d4f8");for(var d in n)["default"].indexOf(d)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(d);e("a2d1");var r=e("f0c5"),o=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"302d1b7a",null,!1,i["a"],void 0);a["default"]=o.exports},a2d1:function(t,a,e){"use strict";var i=e("a58d"),n=e.n(i);n.a},a58d:function(t,a,e){var i=e("f276");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("c7ff7ce0",i,!0,{sourceMap:!1,shadowMode:!1})},a81f:function(t,a,e){"use strict";var i=e("39b4"),n=e.n(i);n.a},c21b:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-button",{staticClass:"u-btn u-line-1 u-fix-ios-appearance",class:["u-size-"+t.size,t.plain?"u-btn--"+t.type+"--plain":"",t.loading?"u-loading":"","circle"==t.shape?"u-round-circle":"",t.hairLine?t.showHairLineBorder:"u-btn--bold-border","u-btn--"+t.type,t.disabled?"u-btn--"+t.type+"--disabled":""],style:[t.customStyle],attrs:{id:"u-wave-btn",disabled:t.disabled,"form-type":t.formType,"open-type":t.openType,"app-parameter":t.appParameter,"hover-stop-propagation":t.hoverStopPropagation,"send-message-title":t.sendMessageTitle,"send-message-path":"sendMessagePath",lang:t.lang,"data-name":t.dataName,"session-from":t.sessionFrom,"send-message-img":t.sendMessageImg,"show-message-card":t.showMessageCard,"hover-class":t.getHoverClass,loading:t.loading},on:{getphonenumber:function(a){arguments[0]=a=t.$handleEvent(a),t.getphonenumber.apply(void 0,arguments)},getuserinfo:function(a){arguments[0]=a=t.$handleEvent(a),t.getuserinfo.apply(void 0,arguments)},error:function(a){arguments[0]=a=t.$handleEvent(a),t.error.apply(void 0,arguments)},opensetting:function(a){arguments[0]=a=t.$handleEvent(a),t.opensetting.apply(void 0,arguments)},launchapp:function(a){arguments[0]=a=t.$handleEvent(a),t.launchapp.apply(void 0,arguments)},click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.click(a)}}},[t._t("default"),t.ripple?e("v-uni-view",{staticClass:"u-wave-ripple",class:[t.waveActive?"u-wave-active":""],style:{top:t.rippleTop+"px",left:t.rippleLeft+"px",width:t.fields.targetWidth+"px",height:t.fields.targetWidth+"px","background-color":t.rippleBgColor||"rgba(0, 0, 0, 0.15)"}}):t._e()],2)},n=[]},c826:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return d})),e.d(a,"a",(function(){return i}));var i={uCellGroup:e("b487").default,uCellItem:e("5a7b").default,uPopup:e("64fa").default,uButton:e("9508").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("u-cell-group",{attrs:{border:!1}},t._l(t.dataArr,(function(a){return e("u-cell-item",{key:a.name,attrs:{title:a.name,value:a.value,"border-bottom":!1,"border-top":!1,"value-style":{color:"#12D18E"},"title-style":{color:"#212121"}},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlerEvent(a)}}})})),1),e("u-popup",{attrs:{mode:"bottom","border-radius":"24",width:"500rpx",height:"260px","mask-close-able":!1},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[e("v-uni-text",{staticClass:"notice"},[t._v(t._s(t.biaoti))]),e("v-uni-text",{staticClass:"text-information"},[t._v("杠杆率最高可用:")]),e("v-uni-scroll-view",{attrs:{"scroll-y":"true"}},[e("v-uni-view",{staticStyle:{width:"100%",height:"8rem"}},[t._l(t.textArrOne,(function(a){return 1==t.current?e("v-uni-view",{key:a.rate,staticClass:"middle-box"},[e("v-uni-text",{staticClass:"noticeText"},[t._v(t._s(a.rate))]),e("v-uni-text",{staticClass:"noticeText"},[t._v(t._s(a.text))])],1):t._e()})),t._l(t.textArrTwo,(function(a){return 2==t.current?e("v-uni-view",{key:a.rate,staticClass:"middle-box"},[e("v-uni-text",{staticClass:"noticeText"},[t._v(t._s(a.rate))]),e("v-uni-text",{staticClass:"noticeText"},[t._v(t._s(a.text))])],1):t._e()})),t._l(t.textArrThree,(function(a){return 3==t.current?e("v-uni-view",{key:a.rate,staticClass:"middle-box"},[e("v-uni-text",{staticClass:"noticeText"},[t._v(t._s(a.rate))]),e("v-uni-text",{staticClass:"noticeText"},[t._v(t._s(a.text))])],1):t._e()}))],2)],1),e("v-uni-view",{staticClass:"btn"},[e("u-button",{staticClass:"yes-btn",attrs:{"hair-line":!1},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.yesHandler.apply(void 0,arguments)}}},[t._v(t._s(t.$t("leverage.leverage.5qzyi9ggems0")))])],1)],1)],1)},d=[]},d4f8:function(t,a,e){"use strict";e.r(a);var i=e("e4cf"),n=e.n(i);for(var d in i)["default"].indexOf(d)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(d);a["default"]=n.a},e4cf:function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("a9e3"),e("c975"),e("d3b7"),e("ac1f");var i={name:"u-button",props:{hairLine:{type:Boolean,default:!0},type:{type:String,default:"default"},size:{type:String,default:"default"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},formType:{type:String,default:""},appParameter:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!1},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!1},hoverBgColor:{type:String,default:""},rippleBgColor:{type:String,default:""},ripple:{type:Boolean,default:!1},hoverClass:{type:String,default:""},customStyle:{type:Object,default:function(){return{}}},dataName:{type:String,default:""},throttleTime:{type:[String,Number],default:1e3}},computed:{getHoverClass:function(){if(this.loading||this.disabled||this.ripple||this.hoverClass)return"";var t;return t=this.plain?"u-"+this.type+"-plain-hover":"u-"+this.type+"-hover",t},showHairLineBorder:function(){return["primary","success","error","warning"].indexOf(this.type)>=0&&!this.plain?"":"u-hairline-border"}},data:function(){return{rippleTop:0,rippleLeft:0,fields:{},waveActive:!1}},methods:{click:function(t){var a=this;this.$u.throttle((function(){!0!==a.loading&&!0!==a.disabled&&(a.ripple&&(a.waveActive=!1,a.$nextTick((function(){this.getWaveQuery(t)}))),a.$emit("click",t))}),this.throttleTime)},getWaveQuery:function(t){var a=this;this.getElQuery().then((function(e){var i=e[0];if(i.width&&i.width&&(i.targetWidth=i.height>i.width?i.height:i.width,i.targetWidth)){a.fields=i;var n,d;n=t.touches[0].clientX,d=t.touches[0].clientY,a.rippleTop=d-i.top-i.targetWidth/2,a.rippleLeft=n-i.left-i.targetWidth/2,a.$nextTick((function(){a.waveActive=!0}))}}))},getElQuery:function(){var t=this;return new Promise((function(a){var e="";e=uni.createSelectorQuery().in(t),e.select(".u-btn").boundingClientRect(),e.exec((function(t){a(t)}))}))},getphonenumber:function(t){this.$emit("getphonenumber",t)},getuserinfo:function(t){this.$emit("getuserinfo",t)},error:function(t){this.$emit("error",t)},opensetting:function(t){this.$emit("opensetting",t)},launchapp:function(t){this.$emit("launchapp",t)}}};a.default=i},f276:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'.all[data-v-302d1b7a]{padding:0 16px}*[data-v-302d1b7a]{padding:%?0?%;margin:%?0?%;box-sizing:border-box}.df[data-v-302d1b7a]{display:-webkit-box;display:-webkit-flex;display:flex}.jcsb[data-v-302d1b7a]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.jcsa[data-v-302d1b7a]{-webkit-justify-content:space-around;justify-content:space-around}.jcse[data-v-302d1b7a]{-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;justify-content:space-evenly}.jcc[data-v-302d1b7a]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.jce[data-v-302d1b7a]{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.jcs[data-v-302d1b7a]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.aic[data-v-302d1b7a]{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.aifs[data-v-302d1b7a]{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.aife[data-v-302d1b7a]{-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.fn[data-v-302d1b7a]{-webkit-box-flex:0;-webkit-flex:none;flex:none}.f1[data-v-302d1b7a]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.fdc[data-v-302d1b7a]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.mt10[data-v-302d1b7a]{margin-top:10px}.mt20[data-v-302d1b7a]{margin-top:20px}.mt16[data-v-302d1b7a]{margin-top:16px}.mt35[data-v-302d1b7a]{margin-top:35px}.mt40[data-v-302d1b7a]{margin-top:40px}.mt50[data-v-302d1b7a]{margin-top:50px}.md16[data-v-302d1b7a]{margin-bottom:16px}.mr8[data-v-302d1b7a]{margin-right:8px}.mr32[data-v-302d1b7a]{margin-right:16px}.mr9[data-v-302d1b7a]{margin-right:9px}.mr15[data-v-302d1b7a]{margin-right:15px}.mr10[data-v-302d1b7a]{margin-right:5px}.ml8[data-v-302d1b7a]{margin-left:8px}.mt8[data-v-302d1b7a]{margin-top:8px}.mt64[data-v-302d1b7a]{margin-top:64px}.mb30[data-v-302d1b7a]{margin-bottom:30px}.mb10[data-v-302d1b7a]{margin-bottom:10px}.mb50[data-v-302d1b7a]{margin-bottom:57px}.mb41[data-v-302d1b7a]{margin-bottom:41px}.m[data-v-302d1b7a]{margin:23px 0}.mt9[data-v-302d1b7a]{margin-top:9px}.mb8[data-v-302d1b7a]{margin-bottom:8px}.mb4[data-v-302d1b7a]{margin-bottom:4px}a[data-v-302d1b7a]{text-decoration:none}.fz14[data-v-302d1b7a]{font-size:14px}.fz12[data-v-302d1b7a]{font-size:12px}.fz18[data-v-302d1b7a]{font-size:18px}.fz20[data-v-302d1b7a]{font-size:20px}.fz16[data-v-302d1b7a]{font-size:16px}.fz40[data-v-302d1b7a]{font-size:40px}.fz28[data-v-302d1b7a]{font-size:28px}.fz10[data-v-302d1b7a]{font-size:10px}.fz24[data-v-302d1b7a]{font-size:24px}.fz32[data-v-302d1b7a]{font-size:32px}.fwb[data-v-302d1b7a]{font-weight:700}.fwn[data-v-302d1b7a]{font-weight:400}.fwm[data-v-302d1b7a]{font-size:14px}.gray[data-v-302d1b7a]{color:#757575}.nineD[data-v-302d1b7a]{color:#9d9e9e}.fff[data-v-302d1b7a]{color:#fff}.f75[data-v-302d1b7a]{color:#f75555}.twoOne[data-v-302d1b7a]{color:#212121}.green[data-v-302d1b7a]{color:#12d18e}.c71[data-v-302d1b7a]{color:#717171}.privacy[data-v-302d1b7a]{text-decoration:underline}.black[data-v-302d1b7a]{color:#000}.sign[data-v-302d1b7a]{color:#12d18e}.cs[data-v-302d1b7a]{border:1px solid #12d18e}.option[data-v-302d1b7a]{width:295px;height:48px;border-radius:16px;margin-bottom:8px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 20px}.option[data-v-302d1b7a]:hover{color:#fff;background-color:#12d18e}.img[data-v-302d1b7a]{width:24px;height:24px}.wh8[data-v-302d1b7a]{width:8px;height:8px}.wh14[data-v-302d1b7a]{width:14px;height:14px}.wh16[data-v-302d1b7a]{width:16px;height:16px}.wh24[data-v-302d1b7a]{width:24px;height:24px}.wh32[data-v-302d1b7a]{width:32px;height:32px}.changeLanguage[data-v-302d1b7a]{width:88px;height:32px;border-radius:32px}.u-btn[data-v-302d1b7a]::after{border:none}.u-btn[data-v-302d1b7a]{position:relative;border:0;display:inline-block;overflow:hidden;line-height:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;cursor:pointer;padding:0 20px;z-index:1;box-sizing:border-box;-webkit-transition:all .15s;transition:all .15s}.u-btn--bold-border[data-v-302d1b7a]{border:1px solid #fff}.u-btn--default[data-v-302d1b7a]{color:#606266;border-color:#c0c4cc;background-color:#fff}.u-btn--primary[data-v-302d1b7a]{color:#fff;border-color:#2979ff;background-color:#2979ff}.u-btn--success[data-v-302d1b7a]{color:#fff;border-color:#19be6b;background-color:#19be6b}.u-btn--error[data-v-302d1b7a]{color:#fff;border-color:#fa3534;background-color:#fa3534}.u-btn--warning[data-v-302d1b7a]{color:#fff;border-color:#f90;background-color:#f90}.u-btn--default--disabled[data-v-302d1b7a]{color:#fff;border-color:#e4e7ed;background-color:#fff}.u-btn--primary--disabled[data-v-302d1b7a]{color:#fff!important;border-color:#a0cfff!important;background-color:#a0cfff!important}.u-btn--success--disabled[data-v-302d1b7a]{color:#fff!important;border-color:#71d5a1!important;background-color:#71d5a1!important}.u-btn--error--disabled[data-v-302d1b7a]{color:#fff!important;border-color:#fab6b6!important;background-color:#fab6b6!important}.u-btn--warning--disabled[data-v-302d1b7a]{color:#fff!important;border-color:#fcbd71!important;background-color:#fcbd71!important}.u-btn--primary--plain[data-v-302d1b7a]{color:#2979ff!important;border-color:#a0cfff!important;background-color:#ecf5ff!important}.u-btn--success--plain[data-v-302d1b7a]{color:#19be6b!important;border-color:#71d5a1!important;background-color:#dbf1e1!important}.u-btn--error--plain[data-v-302d1b7a]{color:#fa3534!important;border-color:#fab6b6!important;background-color:#fef0f0!important}.u-btn--warning--plain[data-v-302d1b7a]{color:#f90!important;border-color:#fcbd71!important;background-color:#fdf6ec!important}.u-hairline-border[data-v-302d1b7a]:after{content:" ";position:absolute;pointer-events:none;box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;left:0;top:0;width:199.8%;height:199.7%;-webkit-transform:scale(.5);transform:scale(.5);border:1px solid currentColor;z-index:1}.u-wave-ripple[data-v-302d1b7a]{z-index:0;position:absolute;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1;-webkit-transform-origin:center;transform-origin:center}.u-wave-ripple.u-wave-active[data-v-302d1b7a]{opacity:0;-webkit-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,transform .4s linear;transition:opacity 1s linear,transform .4s linear,-webkit-transform .4s linear}.u-round-circle[data-v-302d1b7a]{border-radius:50px}.u-round-circle[data-v-302d1b7a]::after{border-radius:50px}.u-loading[data-v-302d1b7a]::after{background-color:hsla(0,0%,100%,.35)}.u-size-default[data-v-302d1b7a]{font-size:15px;height:40px;line-height:40px}.u-size-medium[data-v-302d1b7a]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;font-size:13px;height:35px;line-height:35px;padding:0 40px}.u-size-mini[data-v-302d1b7a]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;font-size:11px;padding-top:1px;height:25px;line-height:25px;padding:0 10px}.u-primary-plain-hover[data-v-302d1b7a]{color:#fff!important;background:#2b85e4!important}.u-default-plain-hover[data-v-302d1b7a]{color:#2b85e4!important;background:#ecf5ff!important}.u-success-plain-hover[data-v-302d1b7a]{color:#fff!important;background:#18b566!important}.u-warning-plain-hover[data-v-302d1b7a]{color:#fff!important;background:#f29100!important}.u-error-plain-hover[data-v-302d1b7a]{color:#fff!important;background:#dd6161!important}.u-info-plain-hover[data-v-302d1b7a]{color:#fff!important;background:#82848a!important}.u-default-hover[data-v-302d1b7a]{color:#2b85e4!important;border-color:#2b85e4!important;background-color:#ecf5ff!important}.u-primary-hover[data-v-302d1b7a]{background:#2b85e4!important;color:#fff}.u-success-hover[data-v-302d1b7a]{background:#18b566!important;color:#fff}.u-info-hover[data-v-302d1b7a]{background:#82848a!important;color:#fff}.u-warning-hover[data-v-302d1b7a]{background:#f29100!important;color:#fff}.u-error-hover[data-v-302d1b7a]{background:#dd6161!important;color:#fff}',""]),t.exports=a},f3ca:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".all[data-v-a6d1ad56]{padding:0 16px}*[data-v-a6d1ad56]{padding:%?0?%;margin:%?0?%;box-sizing:border-box}.df[data-v-a6d1ad56]{display:-webkit-box;display:-webkit-flex;display:flex}.jcsb[data-v-a6d1ad56]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.jcsa[data-v-a6d1ad56]{-webkit-justify-content:space-around;justify-content:space-around}.jcse[data-v-a6d1ad56]{-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;justify-content:space-evenly}.jcc[data-v-a6d1ad56]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.jce[data-v-a6d1ad56]{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.jcs[data-v-a6d1ad56]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.aic[data-v-a6d1ad56]{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.aifs[data-v-a6d1ad56]{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.aife[data-v-a6d1ad56]{-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.fn[data-v-a6d1ad56]{-webkit-box-flex:0;-webkit-flex:none;flex:none}.f1[data-v-a6d1ad56]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.fdc[data-v-a6d1ad56]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.mt10[data-v-a6d1ad56]{margin-top:10px}.mt20[data-v-a6d1ad56]{margin-top:20px}.mt16[data-v-a6d1ad56]{margin-top:16px}.mt35[data-v-a6d1ad56]{margin-top:35px}.mt40[data-v-a6d1ad56]{margin-top:40px}.mt50[data-v-a6d1ad56]{margin-top:50px}.md16[data-v-a6d1ad56]{margin-bottom:16px}.mr8[data-v-a6d1ad56]{margin-right:8px}.mr32[data-v-a6d1ad56]{margin-right:16px}.mr9[data-v-a6d1ad56]{margin-right:9px}.mr15[data-v-a6d1ad56]{margin-right:15px}.mr10[data-v-a6d1ad56]{margin-right:5px}.ml8[data-v-a6d1ad56]{margin-left:8px}.mt8[data-v-a6d1ad56]{margin-top:8px}.mt64[data-v-a6d1ad56]{margin-top:64px}.mb30[data-v-a6d1ad56]{margin-bottom:30px}.mb10[data-v-a6d1ad56]{margin-bottom:10px}.mb50[data-v-a6d1ad56]{margin-bottom:57px}.mb41[data-v-a6d1ad56]{margin-bottom:41px}.m[data-v-a6d1ad56]{margin:23px 0}.mt9[data-v-a6d1ad56]{margin-top:9px}.mb8[data-v-a6d1ad56]{margin-bottom:8px}.mb4[data-v-a6d1ad56]{margin-bottom:4px}a[data-v-a6d1ad56]{text-decoration:none}.fz14[data-v-a6d1ad56]{font-size:14px}.fz12[data-v-a6d1ad56]{font-size:12px}.fz18[data-v-a6d1ad56]{font-size:18px}.fz20[data-v-a6d1ad56]{font-size:20px}.fz16[data-v-a6d1ad56]{font-size:16px}.fz40[data-v-a6d1ad56]{font-size:40px}.fz28[data-v-a6d1ad56]{font-size:28px}.fz10[data-v-a6d1ad56]{font-size:10px}.fz24[data-v-a6d1ad56]{font-size:24px}.fz32[data-v-a6d1ad56]{font-size:32px}.fwb[data-v-a6d1ad56]{font-weight:700}.fwn[data-v-a6d1ad56]{font-weight:400}.fwm[data-v-a6d1ad56]{font-size:14px}.gray[data-v-a6d1ad56]{color:#757575}.nineD[data-v-a6d1ad56]{color:#9d9e9e}.fff[data-v-a6d1ad56]{color:#fff}.f75[data-v-a6d1ad56]{color:#f75555}.twoOne[data-v-a6d1ad56]{color:#212121}.green[data-v-a6d1ad56]{color:#12d18e}.c71[data-v-a6d1ad56]{color:#717171}.privacy[data-v-a6d1ad56]{text-decoration:underline}.black[data-v-a6d1ad56]{color:#000}.sign[data-v-a6d1ad56]{color:#12d18e}.cs[data-v-a6d1ad56]{border:1px solid #12d18e}.option[data-v-a6d1ad56]{width:295px;height:48px;border-radius:16px;margin-bottom:8px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 20px}.option[data-v-a6d1ad56]:hover{color:#fff;background-color:#12d18e}.img[data-v-a6d1ad56]{width:24px;height:24px}.wh8[data-v-a6d1ad56]{width:8px;height:8px}.wh14[data-v-a6d1ad56]{width:14px;height:14px}.wh16[data-v-a6d1ad56]{width:16px;height:16px}.wh24[data-v-a6d1ad56]{width:24px;height:24px}.wh32[data-v-a6d1ad56]{width:32px;height:32px}.changeLanguage[data-v-a6d1ad56]{width:88px;height:32px;border-radius:32px}.notice[data-v-a6d1ad56]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin:1rem 0}.noticeText[data-v-a6d1ad56]{padding:.5rem 0 0 1rem}.text-information[data-v-a6d1ad56]{padding:0 1rem .5rem 1rem}.btn[data-v-a6d1ad56]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;bottom:10px;width:100%}.btn .yes-btn[data-v-a6d1ad56]{width:90%;border-radius:6.25rem;color:#fff;background-color:#12d18e}.middle-box[data-v-a6d1ad56]{display:-webkit-box;display:-webkit-flex;display:flex}",""]),t.exports=a},f7a8:function(t,a,e){"use strict";e.r(a);var i=e("9186"),n=e.n(i);for(var d in i)["default"].indexOf(d)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(d);a["default"]=n.a}}]);