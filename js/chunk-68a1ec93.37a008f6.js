(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68a1ec93"],{b882:function(t,a,i){"use strict";var s=i("cf41"),n=i.n(s);n.a},cf41:function(t,a,i){},eb8a:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"timer"},[t._m(0),i("CStopwatch")],1)},n=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"card"},[i("h1",{staticClass:"page_title"},[t._v("ストップウォッチ")]),i("p",[t._v("時間を計測します。")])])}],e=i("9ab4"),o=i("60a3"),r=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"c-stopwatch"},[i("div",{staticClass:"card"},[i("h2",{staticClass:"title"},[t._v("実行")]),t._m(0),i("p",{staticClass:"timer-icons"},["play"===t.dataState?i("span",{staticClass:"timer-icon-wrapper"},[i("i",{staticClass:"fa fa-pause fa-2x timer-pause timer-icon",on:{click:function(a){return t.listenPause(a)}}}),t._v(" ")]):"pause"===t.dataState?i("span",{staticClass:"timer-icon-wrapper"},[i("i",{staticClass:"fa fa-play fa-2x timer-play timer-replay timer-icon",on:{click:function(a){return t.listenPlay(a)}}}),t._v(" ")]):i("span",{staticClass:"timer-icon-wrapper"},[i("i",{staticClass:"fa fa-play fa-2x timer-play timer-icon",on:{click:function(a){return t.listenPlay(a)}}}),t._v(" ")]),i("span",{staticClass:"timer-icon-wrapper"},[i("i",{staticClass:"fa fa-stop fa-2x timer-stop timer-icon",on:{click:function(a){return t.listenStop(a)}}}),t._v(" ")]),"play"===t.dataState?i("span",{staticClass:"timer-icon-wrapper"},[i("i",{staticClass:"fa fa-flag fa-lg timer-flag timer-icon",on:{click:function(a){return t.listenFlag(a)}}}),t._v(" ")]):t._e()])]),i("div",{staticClass:"card"},[i("h2",{staticClass:"title"},[t._v("計測")]),i("p",[t._v("経過時間です。")]),i("ul",{staticClass:"result"},[i("li",[i("span",{domProps:{innerHTML:t._s(t.dataPointDiffs[0].hour)}}),t._v(":"),i("span",{domProps:{innerHTML:t._s(t.padZero(t.dataPointDiffs[0].minute,2))}}),t._v(":"),i("span",{domProps:{innerHTML:t._s(t.padZero(t.dataPointDiffs[0].second,2))}}),t._v("."),i("span",{domProps:{innerHTML:t._s(t.padZero(t.dataPointDiffs[0].milli,t.dataMilliLength))}})])]),i("p",[t._v("スプリットタイムとラップタイムです。")]),i("table",{staticClass:"time-table"},[i("col",{staticClass:"col-flag"}),i("col",{staticClass:"col-time"}),i("col",{staticClass:"col-time"}),t._m(1),t._l(t.dataPointDiffs,function(a,s){return i("tr",{key:s},[0!==s?i("th",{staticClass:"flag",domProps:{innerHTML:t._s(a.flag)}}):t._e(),0!==s?i("td",[i("span",{domProps:{innerHTML:t._s(a.hour)}}),t._v(":"),i("span",{domProps:{innerHTML:t._s(t.padZero(a.minute,2))}}),t._v(":"),i("span",{domProps:{innerHTML:t._s(t.padZero(a.second,2))}}),t._v("."),i("span",{domProps:{innerHTML:t._s(t.padZero(a.milli,t.dataMilliLength))}})]):t._e(),0!==s?i("td",[i("span",{domProps:{innerHTML:t._s(t.calcLapTime(s,a))}})]):t._e()])})],2)])])},c=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("p",[t._v("計測中に表示される「"),i("i",{staticClass:"fa fa-flag"}),t._v("」アイコンを押下すると、計測を止めずにフラグを刺していくことができます。")])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("tr",[i("th",[t._v("-")]),i("th",[t._v("スプリット")]),i("th",[t._v("ラップ")])])}],l=i("c1df"),d=i.n(l),p=function(t){function a(){var a=null!==t&&t.apply(this,arguments)||this;return a.dataMilliLength=4,a.dataState="stop",a.dataTimerId=0,a.dataStartMoment=d()(new Date),a.dataElapsedMoment=a.dataStartMoment.clone(),a.dataPointDiffs=[{flag:"",hour:0,minute:0,second:0,milli:0}],a.dataHours=[],a.dataMinutesAndSeconds=[],a}return e["b"](a,t),a.prototype.onStateChange=function(t,a){},a.prototype.onElapsedMomentChange=function(t,a){this.diffDatetime()},a.prototype.created=function(){this.initHours(),this.initMinutesAndSeconds()},a.prototype.initHours=function(){for(var t=24,a=0;a<t;a++)this.dataHours.push(a)},a.prototype.initMinutesAndSeconds=function(){for(var t=60,a=0;a<t;a++)this.dataMinutesAndSeconds.push(a)},a.prototype.initPointDiff=function(){var t={flag:"",hour:0,minute:0,second:0,milli:0};this.dataPointDiffs.length=0,o["d"].set(this.dataPointDiffs,0,t)},a.prototype.startMoment=function(){this.dataStartMoment=d()(new Date),this.dataElapsedMoment=this.dataStartMoment.clone()},a.prototype.restartMoment=function(){this.dataStartMoment=d()(new Date),this.dataElapsedMoment=this.dataStartMoment.clone(),this.dataStartMoment.subtract(this.dataPointDiffs[0].hour,"hours"),this.dataStartMoment.subtract(this.dataPointDiffs[0].minute,"minutes"),this.dataStartMoment.subtract(this.dataPointDiffs[0].second,"seconds"),this.dataStartMoment.subtract(this.dataPointDiffs[0].milli,"milliseconds")},a.prototype.traceElapsedMoment=function(){var t=this;this.dataTimerId=setInterval(function(){t.dataElapsedMoment=d()(new Date),t.diffDatetime()},1)},a.prototype.ringChime=function(){var t=document.getElementById("ring");t.currentTime=0,t.play()},a.prototype.stopElapsedMoment=function(){clearInterval(this.dataTimerId)},a.prototype.diffDatetime=function(){var t=this.dataElapsedMoment.clone();o["d"].set(this.dataPointDiffs,0,this.pickPointUp(t,""))},a.prototype.pushPointDiff=function(t){var a=this.dataElapsedMoment.clone();this.dataPointDiffs.push(this.pickPointUp(a,t))},a.prototype.pickPointUp=function(t,a){var i={flag:a,hour:0,minute:0,second:0,milli:0},s=t.diff(this.dataStartMoment,"hours");i.hour=s,t.subtract(s,"hours");var n=t.diff(this.dataStartMoment,"minutes");i.minute=n,t.subtract(n,"minutes");var e=t.diff(this.dataStartMoment,"seconds");i.second=e,t.subtract(e,"second");var o=t.diff(this.dataStartMoment,"milliseconds");return i.milli=o,i},a.prototype.listenPlay=function(t){"stop"===this.dataState?(this.initPointDiff(),this.startMoment()):this.restartMoment(),this.dataState="play",this.traceElapsedMoment()},a.prototype.listenPause=function(t){this.dataState="pause",this.stopElapsedMoment(),this.pushPointDiff("pause")},a.prototype.listenStop=function(t){"stop"!==this.dataState&&(this.dataState="stop",this.stopElapsedMoment(),this.pushPointDiff("stop"))},a.prototype.listenFlag=function(t){this.pushPointDiff("flag")},a.prototype.calcLapTime=function(t,a){var i={flag:a.flag,hour:a.hour,minute:a.minute,second:a.second,milli:a.milli};if(1<t){var s=d()(new Date),n=s.clone();n.add(this.dataPointDiffs[t-1].hour,"hours"),n.add(this.dataPointDiffs[t-1].minute,"minutes"),n.add(this.dataPointDiffs[t-1].second,"seconds"),n.add(this.dataPointDiffs[t-1].milli,"milliseconds");var e=s.clone();e.add(a.hour,"hours"),e.add(a.minute,"minutes"),e.add(a.second,"seconds"),e.add(a.milli,"milliseconds"),i.hour=e.diff(n,"hours"),e.subtract(i.hour,"hours"),i.minute=e.diff(n,"minutes"),e.subtract(i.minute,"minutes"),i.second=e.diff(n,"seconds"),e.subtract(i.second,"seconds"),i.milli=e.diff(n,"milliseconds")}return String(i.hour)+":"+this.padZero(i.minute,2)+":"+this.padZero(i.second,2)+"."+this.padZero(i.milli,this.dataMilliLength)},a.prototype.padZero=function(t,a){return("0".repeat(a)+String(t)).slice(-a)},e["a"]([Object(o["e"])("dataState")],a.prototype,"onStateChange",null),e["a"]([Object(o["e"])("dataElapsedMoment")],a.prototype,"onElapsedMomentChange",null),a=e["a"]([o["a"]],a),a}(o["d"]),f=p,u=f,m=(i("b882"),i("2877")),h=Object(m["a"])(u,r,c,!1,null,"3528b19d",null),v=h.exports,_=function(t){function a(){return null!==t&&t.apply(this,arguments)||this}return e["b"](a,t),a=e["a"]([Object(o["a"])({components:{CStopwatch:v},head:{title:{inner:"ストップウォッチ"}}})],a),a}(o["d"]),M=_,P=M,y=Object(m["a"])(P,s,n,!1,null,"b38b6742",null);a["default"]=y.exports}}]);
//# sourceMappingURL=chunk-68a1ec93.37a008f6.js.map