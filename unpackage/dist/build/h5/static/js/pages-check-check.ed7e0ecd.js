(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-check-check"],{"0576f":function(t,a,d){"use strict";d("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,d("a9e3"),d("acd8"),d("ac1f"),d("00b4"),d("5319");var i={name:"u-count-to",props:{startVal:{type:[Number,String],default:0},endVal:{type:[Number,String],default:0,required:!0},duration:{type:[Number,String],default:2e3},autoplay:{type:Boolean,default:!0},decimals:{type:[Number,String],default:0},useEasing:{type:Boolean,default:!0},decimal:{type:[Number,String],default:"."},color:{type:String,default:"#303133"},fontSize:{type:[Number,String],default:50},bold:{type:Boolean,default:!1},separator:{type:String,default:""}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:Number(this.duration),startTime:null,timestamp:null,remaining:null,rAF:null,lastTime:0}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start()},methods:{easingFn:function(t,a,d,i){return d*(1-Math.pow(2,-10*t/i))*1024/1023+a},requestAnimationFrame:function(t){var a=(new Date).getTime(),d=Math.max(0,16-(a-this.lastTime)),i=setTimeout((function(){t(a+d)}),d);return this.lastTime=a+d,i},cancelAnimationFrame:function(t){clearTimeout(t)},start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=this.requestAnimationFrame(this.count)},reStart:function(){this.paused?(this.resume(),this.paused=!1):(this.stop(),this.paused=!0)},stop:function(){this.cancelAnimationFrame(this.rAF)},resume:function(){this.startTime=null,this.localDuration=this.remaining,this.localStartVal=this.printVal,this.requestAnimationFrame(this.count)},reset:function(){this.startTime=null,this.cancelAnimationFrame(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var a=t-this.startTime;this.remaining=this.localDuration-a,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(a,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(a,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(a/this.localDuration):this.printVal=this.localStartVal+(this.endVal-this.localStartVal)*(a/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),a<this.localDuration?this.rAF=this.requestAnimationFrame(this.count):this.$emit("end")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=Number(t),t=t.toFixed(Number(this.decimals)),t+="";var a=t.split("."),d=a[0],i=a.length>1?this.decimal+a[1]:"",e=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))while(e.test(d))d=d.replace(e,"$1"+this.separator+"$2");return d+i},destroyed:function(){this.cancelAnimationFrame(this.rAF)}}};a.default=i},"3cbe":function(t,a,d){"use strict";d.r(a);var i=d("0576f"),e=d.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){d.d(a,t,(function(){return i[t]}))}(n);a["default"]=e.a},"3d30":function(t,a,d){"use strict";d("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{}},methods:{goNext:function(){uni.navigateTo({url:"/pages/selfie/selfie"})}}};a.default=i},"529b":function(t,a,d){"use strict";var i=d("9349"),e=d.n(i);e.a},"5b2f":function(t,a,d){"use strict";var i=d("9a9d"),e=d.n(i);e.a},"70d9":function(t,a,d){"use strict";d.d(a,"b",(function(){return i})),d.d(a,"c",(function(){return e})),d.d(a,"a",(function(){}));var i=function(){var t=this.$createElement,a=this._self._c||t;return a("v-uni-view",{staticClass:"u-count-num",style:{fontSize:this.fontSize+"rpx",fontWeight:this.bold?"bold":"normal",color:this.color}},[this._v(this._s(this.displayValue))])},e=[]},7846:function(t,a,d){"use strict";d.r(a);var i=d("70d9"),e=d("3cbe");for(var n in e)["default"].indexOf(n)<0&&function(t){d.d(a,t,(function(){return e[t]}))}(n);d("5b2f");var o=d("f0c5"),f=Object(o["a"])(e["default"],i["b"],i["c"],!1,null,"63f9dd1d",null,!1,i["a"],void 0);a["default"]=f.exports},8248:function(t,a,d){"use strict";d.d(a,"b",(function(){return e})),d.d(a,"c",(function(){return n})),d.d(a,"a",(function(){return i}));var i={uCountTo:d("7846").default},e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("v-uni-view",{staticClass:"container df fdc aic jcc"},[i("v-uni-image",{staticClass:"img",attrs:{src:d("8c3d"),mode:""}}),i("p",{staticClass:"fwb fz16"},[t._v(t._s(t.$t("check.check.5qzxsk7izhk0")))]),i("p",{staticClass:"fwb fz16"},[t._v(t._s(t.$t("check.check.5qzxsk7j0yc0")))])],1),i("v-uni-view",{staticClass:"df aic jcc mt64"},[i("u-count-to",{attrs:{"start-val":3,"end-val":0,duration:1e3,useEasing:!1},on:{end:function(a){arguments[0]=a=t.$handleEvent(a),t.goNext.apply(void 0,arguments)}}})],1)],1)},n=[]},"8c3d":function(t,a,d){t.exports=d.p+"static/img/check.43bbee61.svg"},"911e":function(t,a,d){"use strict";d.r(a);var i=d("3d30"),e=d.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){d.d(a,t,(function(){return i[t]}))}(n);a["default"]=e.a},9349:function(t,a,d){var i=d("e0b9");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=d("4f06").default;e("45027472",i,!0,{sourceMap:!1,shadowMode:!1})},"9a9d":function(t,a,d){var i=d("dd28");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=d("4f06").default;e("180fb01e",i,!0,{sourceMap:!1,shadowMode:!1})},dd28:function(t,a,d){var i=d("24fb");a=i(!1),a.push([t.i,".all[data-v-63f9dd1d]{padding:0 16px}*[data-v-63f9dd1d]{padding:%?0?%;margin:%?0?%;box-sizing:border-box}.df[data-v-63f9dd1d]{display:-webkit-box;display:-webkit-flex;display:flex}.jcsb[data-v-63f9dd1d]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.jcsa[data-v-63f9dd1d]{-webkit-justify-content:space-around;justify-content:space-around}.jcse[data-v-63f9dd1d]{-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;justify-content:space-evenly}.jcc[data-v-63f9dd1d]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.jce[data-v-63f9dd1d]{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.jcs[data-v-63f9dd1d]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.aic[data-v-63f9dd1d]{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.aifs[data-v-63f9dd1d]{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.aife[data-v-63f9dd1d]{-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.fn[data-v-63f9dd1d]{-webkit-box-flex:0;-webkit-flex:none;flex:none}.f1[data-v-63f9dd1d]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.fdc[data-v-63f9dd1d]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.mt10[data-v-63f9dd1d]{margin-top:10px}.mt20[data-v-63f9dd1d]{margin-top:20px}.mt16[data-v-63f9dd1d]{margin-top:16px}.mt35[data-v-63f9dd1d]{margin-top:35px}.mt40[data-v-63f9dd1d]{margin-top:40px}.mt50[data-v-63f9dd1d]{margin-top:50px}.md16[data-v-63f9dd1d]{margin-bottom:16px}.mr8[data-v-63f9dd1d]{margin-right:8px}.mr32[data-v-63f9dd1d]{margin-right:16px}.mr9[data-v-63f9dd1d]{margin-right:9px}.mr15[data-v-63f9dd1d]{margin-right:15px}.mr10[data-v-63f9dd1d]{margin-right:5px}.ml8[data-v-63f9dd1d]{margin-left:8px}.mt8[data-v-63f9dd1d]{margin-top:8px}.mt64[data-v-63f9dd1d]{margin-top:64px}.mb30[data-v-63f9dd1d]{margin-bottom:30px}.mb10[data-v-63f9dd1d]{margin-bottom:10px}.mb50[data-v-63f9dd1d]{margin-bottom:57px}.mb41[data-v-63f9dd1d]{margin-bottom:41px}.m[data-v-63f9dd1d]{margin:23px 0}.mt9[data-v-63f9dd1d]{margin-top:9px}.mb8[data-v-63f9dd1d]{margin-bottom:8px}.mb4[data-v-63f9dd1d]{margin-bottom:4px}a[data-v-63f9dd1d]{text-decoration:none}.fz14[data-v-63f9dd1d]{font-size:14px}.fz12[data-v-63f9dd1d]{font-size:12px}.fz18[data-v-63f9dd1d]{font-size:18px}.fz20[data-v-63f9dd1d]{font-size:20px}.fz16[data-v-63f9dd1d]{font-size:16px}.fz40[data-v-63f9dd1d]{font-size:40px}.fz28[data-v-63f9dd1d]{font-size:28px}.fz10[data-v-63f9dd1d]{font-size:10px}.fz24[data-v-63f9dd1d]{font-size:24px}.fz32[data-v-63f9dd1d]{font-size:32px}.fwb[data-v-63f9dd1d]{font-weight:700}.fwn[data-v-63f9dd1d]{font-weight:400}.fwm[data-v-63f9dd1d]{font-size:14px}.gray[data-v-63f9dd1d]{color:#757575}.nineD[data-v-63f9dd1d]{color:#9d9e9e}.fff[data-v-63f9dd1d]{color:#fff}.f75[data-v-63f9dd1d]{color:#f75555}.twoOne[data-v-63f9dd1d]{color:#212121}.green[data-v-63f9dd1d]{color:#12d18e}.c71[data-v-63f9dd1d]{color:#717171}.privacy[data-v-63f9dd1d]{text-decoration:underline}.black[data-v-63f9dd1d]{color:#000}.sign[data-v-63f9dd1d]{color:#12d18e}.cs[data-v-63f9dd1d]{border:1px solid #12d18e}.option[data-v-63f9dd1d]{width:295px;height:48px;border-radius:16px;margin-bottom:8px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 20px}.option[data-v-63f9dd1d]:hover{color:#fff;background-color:#12d18e}.img[data-v-63f9dd1d]{width:24px;height:24px}.wh8[data-v-63f9dd1d]{width:8px;height:8px}.wh14[data-v-63f9dd1d]{width:14px;height:14px}.wh16[data-v-63f9dd1d]{width:16px;height:16px}.wh24[data-v-63f9dd1d]{width:24px;height:24px}.wh32[data-v-63f9dd1d]{width:32px;height:32px}.changeLanguage[data-v-63f9dd1d]{width:88px;height:32px;border-radius:32px}.u-count-num[data-v-63f9dd1d]{display:inline-block;text-align:center}",""]),t.exports=a},e0b9:function(t,a,d){var i=d("24fb");a=i(!1),a.push([t.i,".all[data-v-7ad2f0b8]{padding:0 16px}*[data-v-7ad2f0b8]{padding:%?0?%;margin:%?0?%;box-sizing:border-box}.df[data-v-7ad2f0b8]{display:-webkit-box;display:-webkit-flex;display:flex}.jcsb[data-v-7ad2f0b8]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.jcsa[data-v-7ad2f0b8]{-webkit-justify-content:space-around;justify-content:space-around}.jcse[data-v-7ad2f0b8]{-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;justify-content:space-evenly}.jcc[data-v-7ad2f0b8]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.jce[data-v-7ad2f0b8]{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.jcs[data-v-7ad2f0b8]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.aic[data-v-7ad2f0b8]{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.aifs[data-v-7ad2f0b8]{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.aife[data-v-7ad2f0b8]{-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.fn[data-v-7ad2f0b8]{-webkit-box-flex:0;-webkit-flex:none;flex:none}.f1[data-v-7ad2f0b8]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.fdc[data-v-7ad2f0b8]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.mt10[data-v-7ad2f0b8]{margin-top:10px}.mt20[data-v-7ad2f0b8]{margin-top:20px}.mt16[data-v-7ad2f0b8]{margin-top:16px}.mt35[data-v-7ad2f0b8]{margin-top:35px}.mt40[data-v-7ad2f0b8]{margin-top:40px}.mt50[data-v-7ad2f0b8]{margin-top:50px}.md16[data-v-7ad2f0b8]{margin-bottom:16px}.mr8[data-v-7ad2f0b8]{margin-right:8px}.mr32[data-v-7ad2f0b8]{margin-right:16px}.mr9[data-v-7ad2f0b8]{margin-right:9px}.mr15[data-v-7ad2f0b8]{margin-right:15px}.mr10[data-v-7ad2f0b8]{margin-right:5px}.ml8[data-v-7ad2f0b8]{margin-left:8px}.mt8[data-v-7ad2f0b8]{margin-top:8px}.mt64[data-v-7ad2f0b8]{margin-top:64px}.mb30[data-v-7ad2f0b8]{margin-bottom:30px}.mb10[data-v-7ad2f0b8]{margin-bottom:10px}.mb50[data-v-7ad2f0b8]{margin-bottom:57px}.mb41[data-v-7ad2f0b8]{margin-bottom:41px}.m[data-v-7ad2f0b8]{margin:23px 0}.mt9[data-v-7ad2f0b8]{margin-top:9px}.mb8[data-v-7ad2f0b8]{margin-bottom:8px}.mb4[data-v-7ad2f0b8]{margin-bottom:4px}a[data-v-7ad2f0b8]{text-decoration:none}.fz14[data-v-7ad2f0b8]{font-size:14px}.fz12[data-v-7ad2f0b8]{font-size:12px}.fz18[data-v-7ad2f0b8]{font-size:18px}.fz20[data-v-7ad2f0b8]{font-size:20px}.fz16[data-v-7ad2f0b8]{font-size:16px}.fz40[data-v-7ad2f0b8]{font-size:40px}.fz28[data-v-7ad2f0b8]{font-size:28px}.fz10[data-v-7ad2f0b8]{font-size:10px}.fz24[data-v-7ad2f0b8]{font-size:24px}.fz32[data-v-7ad2f0b8]{font-size:32px}.fwb[data-v-7ad2f0b8]{font-weight:700}.fwn[data-v-7ad2f0b8]{font-weight:400}.fwm[data-v-7ad2f0b8]{font-size:14px}.gray[data-v-7ad2f0b8]{color:#757575}.nineD[data-v-7ad2f0b8]{color:#9d9e9e}.fff[data-v-7ad2f0b8]{color:#fff}.f75[data-v-7ad2f0b8]{color:#f75555}.twoOne[data-v-7ad2f0b8]{color:#212121}.green[data-v-7ad2f0b8]{color:#12d18e}.c71[data-v-7ad2f0b8]{color:#717171}.privacy[data-v-7ad2f0b8]{text-decoration:underline}.black[data-v-7ad2f0b8]{color:#000}.sign[data-v-7ad2f0b8]{color:#12d18e}.cs[data-v-7ad2f0b8]{border:1px solid #12d18e}.option[data-v-7ad2f0b8]{width:295px;height:48px;border-radius:16px;margin-bottom:8px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 20px}.option[data-v-7ad2f0b8]:hover{color:#fff;background-color:#12d18e}.img[data-v-7ad2f0b8]{width:24px;height:24px}.wh8[data-v-7ad2f0b8]{width:8px;height:8px}.wh14[data-v-7ad2f0b8]{width:14px;height:14px}.wh16[data-v-7ad2f0b8]{width:16px;height:16px}.wh24[data-v-7ad2f0b8]{width:24px;height:24px}.wh32[data-v-7ad2f0b8]{width:32px;height:32px}.changeLanguage[data-v-7ad2f0b8]{width:88px;height:32px;border-radius:32px}.img[data-v-7ad2f0b8]{width:88px;height:88px;margin-top:200px;margin-bottom:48px}",""]),t.exports=a},ed71:function(t,a,d){"use strict";d.r(a);var i=d("8248"),e=d("911e");for(var n in e)["default"].indexOf(n)<0&&function(t){d.d(a,t,(function(){return e[t]}))}(n);d("529b");var o=d("f0c5"),f=Object(o["a"])(e["default"],i["b"],i["c"],!1,null,"7ad2f0b8",null,!1,i["a"],void 0);a["default"]=f.exports}}]);