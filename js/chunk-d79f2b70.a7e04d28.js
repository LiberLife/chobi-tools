(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d79f2b70"],{"74be":function(t,i,a){"use strict";var n=a("c1df"),e=a.n(n),o=function(){function t(){}return t.toDateMoment=function(t){var i=e()(new Date(t.year,t.month,1)).endOf("month").date(),a=t.day;return i<t.day&&(a=i),e()(new Date(t.year,t.month,a,t.hour,t.minute,t.second,t.millisecond))},t.toDatePoint=function(t){return{year:t.year(),month:t.month(),day:t.date(),hour:t.hour(),minute:t.minutes(),second:t.second(),millisecond:t.millisecond()}},t.diffDatePointsToTotalPointDiff=function(i,a,n){void 0===n&&(n="year");var e=t.toDateMoment(i),o=t.toDateMoment(a);return t.diffDateMomentsToTotalPointDiff(e,o,n)},t.diffDateMomentsToTotalPointDiff=function(t,i,a){void 0===a&&(a="year");var n={year:0,month:0,day:0,hour:0,minute:0,second:0,millisecond:0},e=t.clone(),o=i.clone();if(0<o.diff(e))switch(a){case"year":n.year=o.diff(e,"years"),e.add(n.year,"years");case"month":n.month=o.diff(e,"months"),e.add(n.month,"months");case"day":n.day=o.diff(e,"days"),e.add(n.day,"days");case"hour":n.hour=o.diff(e,"hours"),e.add(n.hour,"hours");case"minute":n.minute=o.diff(e,"minutes"),e.add(n.minute,"minutes");case"second":n.second=o.diff(e,"seconds"),e.add(n.second,"seconds");default:n.millisecond=o.diff(e,"milliseconds")}return n},t.diffDatePointsToEachPointDiff=function(i,a){var n=t.toDateMoment(i),e=t.toDateMoment(a);return t.diffDateMomentsToEachPointDiff(n,e)},t.diffDateMomentsToEachPointDiff=function(t,i){var a={year:0,month:0,day:0,hour:0,minute:0,second:0,millisecond:0},n=t.clone(),e=i.clone();return 0<e.diff(n)&&(a.year=e.diff(n,"years"),a.month=e.diff(n,"months"),a.day=e.diff(n,"days"),a.hour=e.diff(n,"hours"),a.minute=e.diff(n,"minutes"),a.second=e.diff(n,"seconds"),a.millisecond=e.diff(n,"milliseconds")),a},t.addPointDiffToDateMoment=function(t,i){var a=i.clone();return a.add(t.year,"years"),a.add(t.month,"months"),a.add(t.day,"days"),a.add(t.hour,"hours"),a.add(t.minute,"minutes"),a.add(t.second,"seconds"),a.add(t.millisecond,"milliseconds"),a},t.subtractPointDiffToDateMoment=function(t,i){var a=i.clone();return a.subtract(t.year,"years"),a.subtract(t.month,"months"),a.subtract(t.day,"days"),a.subtract(t.hour,"hours"),a.subtract(t.minute,"minutes"),a.subtract(t.second,"seconds"),a.subtract(t.millisecond,"milliseconds"),a},t}();i["a"]=o},bdb8:function(t,i,a){"use strict";var n=a("ca3a"),e=a.n(n);e.a},ca3a:function(t,i,a){},eb8a:function(t,i,a){"use strict";a.r(i);var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"stopwatch"},[t._m(0),a("div",{staticClass:"card"},[a("h2",{staticClass:"title"},[t._v("実行")]),t._m(1),a("p",{staticClass:"timer-icons"},["play"===t.dataState?a("span",{staticClass:"timer-icon-wrapper"},[a("i",{staticClass:"fa fa-pause fa-2x timer-pause timer-icon",on:{click:function(i){return t.listenPause(i)}}}),t._v(" ")]):"pause"===t.dataState?a("span",{staticClass:"timer-icon-wrapper"},[a("i",{staticClass:"fa fa-play fa-2x timer-play timer-replay timer-icon",on:{click:function(i){return t.listenPlay(i)}}}),t._v(" ")]):a("span",{staticClass:"timer-icon-wrapper"},[a("i",{staticClass:"fa fa-play fa-2x timer-play timer-icon",on:{click:function(i){return t.listenPlay(i)}}}),t._v(" ")]),"pause"!==t.dataState?a("span",{staticClass:"timer-icon-wrapper"},[a("i",{staticClass:"fa fa-stop fa-2x timer-stop timer-icon",on:{click:function(i){return t.listenStop(i)}}}),t._v(" ")]):t._e(),"play"===t.dataState?a("span",{staticClass:"timer-icon-wrapper"},[a("i",{staticClass:"fa fa-flag fa-lg timer-flag timer-icon",on:{click:function(i){return t.listenFlag(i)}}}),t._v(" ")]):t._e()])]),a("div",{staticClass:"card"},[a("h2",{staticClass:"title"},[t._v("計測")]),a("p",[t._v("経過時間です。")]),a("ul",{staticClass:"result"},[a("li",[a("span",{domProps:{innerHTML:t._s(t.dataPointDiffs[0].pointDiff.hour)}}),t._v(":"),a("span",{domProps:{innerHTML:t._s(t.padZero(t.dataPointDiffs[0].pointDiff.minute,2))}}),t._v(":"),a("span",{domProps:{innerHTML:t._s(t.padZero(t.dataPointDiffs[0].pointDiff.second,2))}}),t._v("."),a("span",{domProps:{innerHTML:t._s(t.padZero(t.dataPointDiffs[0].pointDiff.millisecond,t.dataMilliLength))}})])]),a("p",[t._v("スプリットタイムとラップタイムです。")]),a("table",{staticClass:"time-table"},[a("col",{staticClass:"col-flag"}),a("col",{staticClass:"col-time"}),a("col",{staticClass:"col-time"}),t._m(2),t._l(t.dataPointDiffs,function(i,n){return a("tr",{key:n},[0!==n?a("th",{staticClass:"flag",domProps:{innerHTML:t._s(i.flag)}}):t._e(),0!==n?a("td",[a("span",{domProps:{innerHTML:t._s(i.pointDiff.hour)}}),t._v(":"),a("span",{domProps:{innerHTML:t._s(t.padZero(i.pointDiff.minute,2))}}),t._v(":"),a("span",{domProps:{innerHTML:t._s(t.padZero(i.pointDiff.second,2))}}),t._v("."),a("span",{domProps:{innerHTML:t._s(t.padZero(i.pointDiff.millisecond,t.dataMilliLength))}})]):t._e(),0!==n?a("td",[a("span",{domProps:{innerHTML:t._s(t.calcLapTime(n,i))}})]):t._e()])})],2)]),a("CDatetime",{attrs:{linkTitle:t.dataLinkTitle}})],1)},e=[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"card"},[a("h1",{staticClass:"page_title"},[t._v("ストップウォッチ")]),a("p",[t._v("時間を計測します。")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("p",[t._v("計測中に表示される「"),a("i",{staticClass:"fa fa-flag"}),t._v("」アイコンを押下すると、計測を止めずにフラグを刺していくことができます。")])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("tr",[a("th",[t._v("-")]),a("th",[t._v("スプリット")]),a("th",[t._v("ラップ")])])}],o=a("9ab4"),s=a("60a3"),r=a("0095"),f=a("c1df"),d=a.n(f),c=a("74be"),l=function(t){function i(){var i=null!==t&&t.apply(this,arguments)||this;return i.dataLinkTitle="関連リンク一覧",i.dataMilliLength=3,i.dataState="stop",i.dataTimerId=0,i.dataStartMoment=d()(new Date),i.dataElapsedMoment=i.dataStartMoment.clone(),i.dataPointDiffs=[{flag:"",pointDiff:{year:0,month:0,day:0,hour:0,minute:0,second:0,millisecond:0}}],i.dataHours=[],i.dataMinutesAndSeconds=[],i}return o["c"](i,t),i.prototype.onStateChange=function(t,i){},i.prototype.onElapsedMomentChange=function(t,i){this.diffDatetime()},i.prototype.created=function(){this.initHours(),this.initMinutesAndSeconds()},i.prototype.initHours=function(){for(var t=24,i=0;i<t;i++)this.dataHours.push(i)},i.prototype.initMinutesAndSeconds=function(){for(var t=60,i=0;i<t;i++)this.dataMinutesAndSeconds.push(i)},i.prototype.initPointDiff=function(){var t={flag:"",pointDiff:{year:0,month:0,day:0,hour:0,minute:0,second:0,millisecond:0}};this.dataPointDiffs.length=0,s["d"].set(this.dataPointDiffs,0,t)},i.prototype.startMoment=function(){this.dataStartMoment=d()(new Date),this.dataElapsedMoment=this.dataStartMoment.clone()},i.prototype.restartMoment=function(){this.dataStartMoment=d()(new Date),this.dataElapsedMoment=this.dataStartMoment.clone(),this.dataStartMoment=c["a"].subtractPointDiffToDateMoment(this.dataPointDiffs[0].pointDiff,this.dataStartMoment)},i.prototype.traceElapsedMoment=function(){var t=this;this.dataTimerId=setInterval(function(){t.dataElapsedMoment=d()(new Date),t.diffDatetime()},1)},i.prototype.ringChime=function(){var t=document.getElementById("ring");t.currentTime=0,t.play()},i.prototype.stopElapsedMoment=function(){clearInterval(this.dataTimerId)},i.prototype.diffDatetime=function(){var t=this.dataElapsedMoment.clone();s["d"].set(this.dataPointDiffs,0,this.pickPointUp(t,""))},i.prototype.pushPointDiff=function(t){var i=this.dataElapsedMoment.clone();this.dataPointDiffs.push(this.pickPointUp(i,t))},i.prototype.pickPointUp=function(t,i){var a={flag:i,pointDiff:{year:0,month:0,day:0,hour:0,minute:0,second:0,millisecond:0}};return a.pointDiff=c["a"].diffDateMomentsToTotalPointDiff(this.dataStartMoment,t,"hour"),a},i.prototype.listenPlay=function(t){"stop"===this.dataState?(this.initPointDiff(),this.startMoment()):this.restartMoment(),this.dataState="play",this.traceElapsedMoment()},i.prototype.listenPause=function(t){this.dataState="pause",this.stopElapsedMoment(),this.pushPointDiff("pause")},i.prototype.listenStop=function(t){"stop"!==this.dataState&&(this.dataState="stop",this.stopElapsedMoment(),this.pushPointDiff("stop"))},i.prototype.listenFlag=function(t){this.pushPointDiff("flag")},i.prototype.calcLapTime=function(t,i){var a={flag:i.flag,pointDiff:{year:i.pointDiff.year,month:i.pointDiff.month,day:i.pointDiff.day,hour:i.pointDiff.hour,minute:i.pointDiff.minute,second:i.pointDiff.second,millisecond:i.pointDiff.millisecond}};if(1<t){var n=d()(new Date),e=c["a"].addPointDiffToDateMoment(this.dataPointDiffs[t-1].pointDiff,n),o=c["a"].addPointDiffToDateMoment(i.pointDiff,n);a.pointDiff=c["a"].diffDateMomentsToTotalPointDiff(e,o,"hour")}return String(a.pointDiff.hour)+":"+this.padZero(a.pointDiff.minute,2)+":"+this.padZero(a.pointDiff.second,2)+"."+this.padZero(a.pointDiff.millisecond,this.dataMilliLength)},i.prototype.padZero=function(t,i){return("0".repeat(i)+String(t)).slice(-i)},o["b"]([Object(s["e"])("dataState")],i.prototype,"onStateChange",null),o["b"]([Object(s["e"])("dataElapsedMoment")],i.prototype,"onElapsedMomentChange",null),i=o["b"]([Object(s["a"])({components:{CDatetime:r["a"]},head:{title:{inner:"ストップウォッチ"}}})],i),i}(s["d"]),p=l,u=p,m=(a("bdb8"),a("2877")),h=Object(m["a"])(u,n,e,!1,null,"721a5612",null);i["default"]=h.exports}}]);
//# sourceMappingURL=chunk-d79f2b70.a7e04d28.js.map