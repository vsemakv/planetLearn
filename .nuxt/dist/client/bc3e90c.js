(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{277:function(t,e,r){var content=r(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(112).default)("37451aa0",content,!0,{sourceMap:!1})},282:function(t,e,r){"use strict";r.r(e);r(65);var n={data:function(){return{time:180,interval:180,isLow:!1,isLowSec:!1,totalTime:180,minutes:0,seconds:0}},methods:{start:function(){var t=this,e=setInterval((function(){t.minutes=Math.floor(t.totalTime/60),t.seconds=t.totalTime-60*t.minutes,t.totalTime--,t.interval--;var r=t.interval/t.time*100;t.interval>0?t.$refs.bar.style.width=r+"%":(clearInterval(e),t.$refs.bar.style="width: 0%")}),1e3)}},watch:{interval:function(){this.interval<11&&(this.isLow=!0)},seconds:function(){this.seconds>9?(this.isLowSec=!0,console.log(this.seconds)):this.isLowSec=!1}},mounted:function(){this.start()}},d=(r(289),r(49)),component=Object(d.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"timer"},[e("div",{staticClass:"timer__time"},[e("p",[t._v("0"+t._s(t.minutes))]),e("span",[t._v(":")]),e("p",[e("span",{class:{sec:t.isLowSec}},[t._v("0")]),t._v(t._s(t.seconds))])]),e("div",{staticClass:"timer__wrapper",class:{low:t.isLow}},[e("div",{ref:"bar",staticClass:"timer__bar"})])])}),[],!1,null,"3ebe0d28",null);e.default=component.exports},289:function(t,e,r){"use strict";r(277)},290:function(t,e,r){var n=r(111)(!1);n.push([t.i,".timer[data-v-3ebe0d28]{position:relative}.timer__time[data-v-3ebe0d28]{display:flex;justify-content:center;align-items:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.timer__time>p[data-v-3ebe0d28]{padding:2px}.timer__time>p[data-v-3ebe0d28],.timer__time>span[data-v-3ebe0d28]{color:#fff;font-weight:600;font-size:24px;line-height:140%}.timer__wrapper[data-v-3ebe0d28]{width:160px;height:60px;border-radius:12px;background:#000}@media screen and (min-width:360px)and (max-width:1024px){.timer__wrapper[data-v-3ebe0d28]{width:105px;height:47px}}.timer__bar[data-v-3ebe0d28]{width:160px;height:60px;border-radius:11px;background:#00ca14;display:flex;align-items:center;transition:width .3s ease-out}@media screen and (min-width:360px)and (max-width:1024px){.timer__bar[data-v-3ebe0d28]{width:105px;height:47px}}.low[data-v-3ebe0d28]{border:2px solid red;border-radius:13px;box-shadow:2px;box-shadow:0 0 15px 2px red}.sec[data-v-3ebe0d28]{display:none}",""]),t.exports=n}}]);