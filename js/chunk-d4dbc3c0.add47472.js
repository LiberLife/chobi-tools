(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d4dbc3c0"],{"04f4":function(t,a,n){"use strict";var e=n("629b"),i=n.n(e);i.a},"629b":function(t,a,n){},"916d":function(t,a,n){},d805:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"c-button"},[n("button",{staticClass:"button ripple",attrs:{type:"button"},on:{click:function(a){return t.listenClick(a)}}},[t._v("\n    "+t._s(t.dataButtonText)+"\n    "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.dataPosition,expression:"dataPosition"}],staticClass:"spread",style:t.dataPosition})])])},i=[],o=n("9ab4"),s=n("60a3"),r=function(t){function a(){var a=null!==t&&t.apply(this,arguments)||this;return a.dataButtonText=a.buttonText,a.dataPosition="",a}return o["b"](a,t),a.prototype.onValueChange=function(t,a){},a.prototype.emitClickButton=function(){},a.prototype.listenClick=function(t){var a=this,n=512,e=t.target,i=e.offsetWidth,o=e.getBoundingClientRect(),s=Number(t.pageX)-o.left-window.pageXOffset-i/2,r=Number(t.pageY)-o.top-window.pageYOffset-i/2,u="";u+="left:"+s+"px;",u+="top:"+r+"px;",u+="width:"+i+"px;",u+="height:"+i+"px;",this.dataPosition=u,setTimeout(function(){a.dataPosition=""},n),this.emitClickButton()},o["a"]([Object(s["c"])()],a.prototype,"buttonText",void 0),o["a"]([Object(s["e"])("dataPosition")],a.prototype,"onValueChange",null),o["a"]([Object(s["b"])("clickButton")],a.prototype,"emitClickButton",null),a=o["a"]([s["a"]],a),a}(s["d"]),u=r,c=u,l=(n("04f4"),n("2877")),p=Object(l["a"])(c,e,i,!1,null,"722269f6",null);a["a"]=p.exports},e3bf:function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"permutation-calc"},[t._m(0),n("div",{staticClass:"card"},[n("h2",{staticClass:"title"},[t._v("設定")]),n("p",[t._v("\n      異なる要素数nと選んで並べる個数rを指定してください。\n    ")]),t._m(1),n("div",{staticClass:"permutation-formula"},[t._v("\n      n "),n("input",{key:t.dataNKey,staticClass:"num-input",attrs:{type:"text"},domProps:{value:t.numN},on:{input:function(a){return t.listenOnNInputed(a)}}}),n("span",{staticClass:"formula-notation"},[t._v("^")]),t._v("\n      r "),n("input",{key:t.dataRKey,staticClass:"num-input",attrs:{type:"text"},domProps:{value:t.numR},on:{input:function(a){return t.listenOnRInputed(a)}}})]),n("CButton",{attrs:{buttonText:t.dataButtonText},on:{clickButton:function(a){return t.calc()}}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.dataCount,expression:"dataCount"}],staticClass:"card"},[n("h2",{staticClass:"title"},[t._v("計算結果")]),n("p",[t._v("重複順列の総数です。")]),n("ul",{staticClass:"result"},[n("li",[n("span",{staticClass:"result-key"},[t._v("総数")]),n("span",{domProps:{innerHTML:t._s(t.count.toLocaleString())}})])])]),t._m(2),n("CPermutation",{attrs:{linkTitle:t.dataLinkTitle}})],1)},i=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"card"},[n("h1",{staticClass:"page_title"},[t._v("重複順列の総数")]),n("p",[t._v("\n      n個の異なる要素から重複を許してr個選んだ順列の総数(n^r)を求めます。\n    ")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("p",{staticClass:"note"},[n("i",{staticClass:"fa fa-warning"}),t._v(" \n      nを先に入力してください。\n    ")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"card"},[n("h2",{staticClass:"title"},[t._v("用例")]),n("p",[t._v("\n      重複順列は以下のような場面で利用できます。\n    ")]),n("ul",[n("li",[n("i",{staticClass:"fa fa-pencil note"}),t._v(" ネタ切れなしのすし屋で20品目あるメニューから順序にこだわって6品食べる（n=20, r=6）。")]),n("li",[n("i",{staticClass:"fa fa-pencil note"}),t._v(" 誕生日順に8人がコイントスをする（n=2, r=8）。")]),n("li",[n("i",{staticClass:"fa fa-pencil note"}),t._v(" 0埋めされた5桁の16進数（n=16, r=5）。")])])])}],o=n("9ab4"),s=n("60a3"),r=n("8655"),u=n("d805"),c=function(t){function a(){var a=null!==t&&t.apply(this,arguments)||this;return a.dataLinkTitle="関連リンク一覧",a.dataButtonText="計算",a.dataN=0,a.dataR=0,a.dataNKey=0,a.dataRKey=1,a.dataCount=0,a}return o["b"](a,t),a.prototype.created=function(){this.dataNKey=1*Math.random(),this.dataRKey=2*Math.random()},Object.defineProperty(a.prototype,"numN",{get:function(){return 0<this.dataN?this.dataN:""},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"numR",{get:function(){return 0<this.dataR?this.dataR:""},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"count",{get:function(){return 0<this.dataCount?this.dataCount:""},enumerable:!0,configurable:!0}),a.prototype.watchOnNChanged=function(t,a){this.arrangeR()},a.prototype.watchOnRChanged=function(t,a){this.arrangeR()},a.prototype.listenOnNInputed=function(t){var a=t.target.value;a.match(/^([0-9]|[1-9][0-9]+)$/g)?this.dataN=Number(a):this.dataN=0},a.prototype.listenOnRInputed=function(t){var a=t.target.value;a.match(/^([0-9]|[1-9][0-9]+)$/g)?this.dataR=Number(a):this.dataR=0},a.prototype.arrangeR=function(){0===this.dataN&&(this.dataR=0)},a.prototype.calc=function(){this.dataCount=Math.pow(this.dataN,this.dataR)},o["a"]([Object(s["e"])("dataN")],a.prototype,"watchOnNChanged",null),o["a"]([Object(s["e"])("dataR")],a.prototype,"watchOnRChanged",null),a=o["a"]([Object(s["a"])({components:{CPermutation:r["a"],CButton:u["a"]},head:{title:{inner:"重複順列の総数"}}})],a),a}(s["d"]),l=c,p=l,d=(n("f863"),n("2877")),f=Object(d["a"])(p,e,i,!1,null,"823ae7b0",null);a["default"]=f.exports},f863:function(t,a,n){"use strict";var e=n("916d"),i=n.n(e);i.a}}]);
//# sourceMappingURL=chunk-d4dbc3c0.add47472.js.map