(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b3a68fd"],{"66f9":function(t,e,a){"use strict";var n=a("d971"),i=a.n(n);i.a},"69a5":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"timer"},[t._m(0),a("div",{staticClass:"card"},[a("h2",{staticClass:"title"},[t._v("設定")]),a("p",[t._v("計測時間を設定してください。")]),a("ul",[a("li",{staticClass:"datetime-item"},[t._m(1),a("span",{staticClass:"datetime-value"},[a("select",{attrs:{name:"setPointHour",disabled:t.dataDisabled},domProps:{value:t.dataHour},on:{change:function(e){return t.listenSetPointHourChange(e)}}},t._l(t.dataHours,function(e){return a("option",{key:e,domProps:{value:e,innerHTML:t._s(e)}})}),0),t._v(" 時間 \n          "),a("select",{attrs:{name:"setPointMinute",disabled:t.dataDisabled},domProps:{value:t.dataMinute},on:{change:function(e){return t.listenSetPointMinuteChange(e)}}},t._l(t.dataMinutesAndSeconds,function(e){return a("option",{key:e,domProps:{value:e,innerHTML:t._s(e)}})}),0),t._v(" 分 \n          "),a("select",{attrs:{name:"setPointSecond",disabled:t.dataDisabled},domProps:{value:t.dataSecond},on:{change:function(e){return t.listenSetPointSecondChange(e)}}},t._l(t.dataMinutesAndSeconds,function(e){return a("option",{key:e,domProps:{value:e,innerHTML:t._s(e)}})}),0),t._v(" 秒 \n        ")])])]),a("p",[t._v("チャイムの音量を設定してください。")]),t._m(2)]),a("div",{staticClass:"card"},[a("h2",{staticClass:"title"},[t._v("実行")]),a("p",{staticClass:"timer-icons"},["play"===t.dataState?a("span",{staticClass:"timer-icon-wrapper"},[a("i",{staticClass:"fa fa-pause fa-2x timer-pause timer-icon",on:{click:function(e){return t.listenPause(e)}}}),t._v(" ")]):a("span",{staticClass:"timer-icon-wrapper"},[a("i",{staticClass:"fa fa-play fa-2x timer-play timer-icon",on:{click:function(e){return t.listenPlay(e)}}}),t._v(" ")]),a("span",{staticClass:"timer-icon-wrapper"},[a("i",{staticClass:"fa fa-stop fa-2x timer-stop timer-icon",on:{click:function(e){return t.listenStop(e)}}}),t._v(" ")])]),a("p",[t._v("残り時間です。")]),a("ul",{staticClass:"result"},[a("li",[a("span",{domProps:{innerHTML:t._s(t.dataPointDiff.hour)}}),t._v("時間 "),a("span",{domProps:{innerHTML:t._s(t.dataPointDiff.minute)}}),t._v("分 "),a("span",{domProps:{innerHTML:t._s(t.dataPointDiff.second)}}),t._v("秒\n      ")])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("h1",{staticClass:"page_title"},[t._v("タイマー")]),a("p",[t._v("指定時間を計測して、到達をお知らせします。")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"datetime-key"},[a("i",{staticClass:"fa fa-clock-o"}),t._v(" \n        ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("audio",{attrs:{id:"ring",controls:""}},[n("source",{attrs:{src:a("9341")}})])])])}],o=a("9ab4"),s=a("60a3"),d=a("c1df"),r=a.n(d),c=a("74be"),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.dataState="stop",e.dataVolume="up",e.dataDisabled=!1,e.dataTimerId=0,e.dataBaseMoment=r()(new Date).endOf("seconds"),e.dataSetMoment=e.dataBaseMoment.clone(),e.dataPointDiff={year:0,month:0,day:0,hour:0,minute:0,second:0,millisecond:0},e.dataHours=[],e.dataMinutesAndSeconds=[],e.dataHour=0,e.dataMinute=0,e.dataSecond=0,e.dataShouldRing=!1,e}return o["b"](e,t),e.prototype.onStateChange=function(t,e){"stop"===this.dataState?this.dataDisabled=!1:this.dataDisabled=!0},e.prototype.onShouldRingChange=function(t,e){},e.prototype.onBaseMomentChange=function(t,e){this.diffDatetime()},e.prototype.created=function(){this.initHours(),this.initMinutesAndSeconds()},e.prototype.initHours=function(){for(var t=24,e=0;e<t;e++)this.dataHours.push(e)},e.prototype.initMinutesAndSeconds=function(){for(var t=60,e=0;e<t;e++)this.dataMinutesAndSeconds.push(e)},e.prototype.initPointDiff=function(){s["d"].set(this.dataPointDiff,"hour",this.dataHour),s["d"].set(this.dataPointDiff,"minute",this.dataMinute),s["d"].set(this.dataPointDiff,"second",this.dataSecond)},e.prototype.resetMoment=function(){this.dataBaseMoment=r()(new Date).endOf("seconds"),this.dataSetMoment=this.dataBaseMoment.clone(),this.dataSetMoment=c["a"].addPointDiffToDateMoment(this.dataPointDiff,this.dataSetMoment)},e.prototype.traceBaseMoment=function(){var t=this;0<this.dataSetMoment.diff(this.dataBaseMoment,"seconds")?this.dataTimerId=setInterval(function(){var e=r()(new Date).endOf("seconds");t.dataBaseMoment=e,t.dataSetMoment.diff(t.dataBaseMoment,"seconds")<=0&&(clearInterval(t.dataTimerId),t.dataState="stop",t.ringChime())},1e3):(clearInterval(),this.dataState="stop")},e.prototype.ringChime=function(){var t=document.getElementById("ring");t.currentTime=0,t.play()},e.prototype.stopBaseMoment=function(){clearInterval(this.dataTimerId)},e.prototype.diffDatetime=function(){this.dataPointDiff=c["a"].diffDateMomentsToTotalPointDiff(this.dataBaseMoment,this.dataSetMoment,"hour")},e.prototype.listenSetPointHourChange=function(t){this.dataHour=Number(t.target.value),s["d"].set(this.dataPointDiff,"hour",this.dataHour)},e.prototype.listenSetPointMinuteChange=function(t){this.dataMinute=Number(t.target.value),s["d"].set(this.dataPointDiff,"minute",this.dataMinute)},e.prototype.listenSetPointSecondChange=function(t){this.dataSecond=Number(t.target.value),s["d"].set(this.dataPointDiff,"second",this.dataSecond)},e.prototype.listenPlay=function(t){"stop"===this.dataState&&this.initPointDiff(),this.dataState="play",this.resetMoment(),this.traceBaseMoment()},e.prototype.listenPause=function(t){this.dataState="pause",this.stopBaseMoment()},e.prototype.listenStop=function(t){this.dataState="stop",this.stopBaseMoment(),this.initPointDiff(),this.resetMoment()},o["a"]([Object(s["e"])("dataState")],e.prototype,"onStateChange",null),o["a"]([Object(s["e"])("dataShouldRing")],e.prototype,"onShouldRingChange",null),o["a"]([Object(s["e"])("dataBaseMoment")],e.prototype,"onBaseMomentChange",null),e=o["a"]([Object(s["a"])({components:{},head:{title:{inner:"タイマー"}}})],e),e}(s["d"]),f=u,l=f,m=(a("66f9"),a("2877")),h=Object(m["a"])(l,n,i,!1,null,"14d6dfe7",null);e["default"]=h.exports},"74be":function(t,e,a){"use strict";var n=a("c1df"),i=a.n(n),o=function(){function t(){}return t.toDateMoment=function(t){var e=i()(new Date(t.year,t.month,1)).endOf("month").date(),a=t.day;return e<t.day&&(a=e),i()(new Date(t.year,t.month,a,t.hour,t.minute,t.second,t.millisecond))},t.toDatePoint=function(t){return{year:t.year(),month:t.month(),day:t.date(),hour:t.hour(),minute:t.minutes(),second:t.second(),millisecond:t.millisecond()}},t.diffDatePointsToTotalPointDiff=function(e,a,n){void 0===n&&(n="year");var i=t.toDateMoment(e),o=t.toDateMoment(a);return t.diffDateMomentsToTotalPointDiff(i,o,n)},t.diffDateMomentsToTotalPointDiff=function(t,e,a){void 0===a&&(a="year");var n={year:0,month:0,day:0,hour:0,minute:0,second:0,millisecond:0},i=t.clone(),o=e.clone();if(0<o.diff(i))switch(a){case"year":n.year=o.diff(i,"years"),i.add(n.year,"years");case"month":n.month=o.diff(i,"months"),i.add(n.month,"months");case"day":n.day=o.diff(i,"days"),i.add(n.day,"days");case"hour":n.hour=o.diff(i,"hours"),i.add(n.hour,"hours");case"minute":n.minute=o.diff(i,"minutes"),i.add(n.minute,"minutes");case"second":n.second=o.diff(i,"seconds"),i.add(n.second,"seconds");default:n.millisecond=o.diff(i,"milliseconds")}return n},t.diffDatePointsToEachPointDiff=function(e,a){var n=t.toDateMoment(e),i=t.toDateMoment(a);return t.diffDateMomentsToEachPointDiff(n,i)},t.diffDateMomentsToEachPointDiff=function(t,e){var a={year:0,month:0,day:0,hour:0,minute:0,second:0,millisecond:0},n=t.clone(),i=e.clone();return 0<i.diff(n)&&(a.year=i.diff(n,"years"),a.month=i.diff(n,"months"),a.day=i.diff(n,"days"),a.hour=i.diff(n,"hours"),a.minute=i.diff(n,"minutes"),a.second=i.diff(n,"seconds"),a.millisecond=i.diff(n,"milliseconds")),a},t.addPointDiffToDateMoment=function(t,e){var a=e.clone();return a.add(t.year,"years"),a.add(t.month,"months"),a.add(t.day,"days"),a.add(t.hour,"hours"),a.add(t.minute,"minutes"),a.add(t.second,"seconds"),a.add(t.millisecond,"milliseconds"),a},t.subtractPointDiffToDateMoment=function(t,e){var a=e.clone();return a.subtract(t.year,"years"),a.subtract(t.month,"months"),a.subtract(t.day,"days"),a.subtract(t.hour,"hours"),a.subtract(t.minute,"minutes"),a.subtract(t.second,"seconds"),a.subtract(t.millisecond,"milliseconds"),a},t}();e["a"]=o},9341:function(t,e,a){t.exports=a.p+"media/ring.33d52053.mp3"},d971:function(t,e,a){}}]);
//# sourceMappingURL=chunk-6b3a68fd.782addd0.js.map