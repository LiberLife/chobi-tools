(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12146693"],{"04f4":function(t,e,a){"use strict";var s=a("629b"),n=a.n(s);n.a},"213e":function(t,e,a){},2270:function(t,e,a){},4949:function(t,e,a){"use strict";var s=function(){function t(){}return Object.defineProperty(t,"errorMessage",{get:function(){return t._errorMessage},enumerable:!0,configurable:!0}),t.convertFromRpn=function(e){t._errorMessage="";for(var a="",s=[],n=0;n<e.length;n++)if(e[n].match(/^[0-9]+$/))s.push(e[n]);else{if(e[n].match(/^[0-9]+$/))s.push(e[n]);else if(2<=s.length){var r=s.pop(),o=s.pop();switch(e[n]){case"+":case"-":case"*":case"/":case"^":case"%":s.push("("+o+" "+e[n]+" "+r+")")}}else t._errorMessage="式が正しくありません。";if(""!==t._errorMessage)break}return""===t._errorMessage&&(1===s.length?a=s[0].replace(/(^\(|\)$)/g,""):t._errorMessage="式が正しくありません。"),a},t.calc=function(e){t._errorMessage="";for(var a=0,s=[],n=0;n<e.length;n++)if(e[n].match(/^[0-9]+$/))s.push(Number(e[n]));else{if(e[n].match(/^[0-9]+$/))s.push(Number(e[n]));else if(2<=s.length){var r=s.pop(),o=s.pop();switch(e[n]){case"+":s.push(o+r);break;case"-":s.push(o-r);break;case"*":s.push(o*r);break;case"/":0===r?t._errorMessage="エラーです。0除算が発生しました。":s.push(o/r);break;case"^":s.push(Math.pow(o,r));break;case"%":0===r?t._errorMessage="エラーです。0除算が発生しました。":s.push(o%r);break}}else t._errorMessage="式が正しくありません。";if(""!==t._errorMessage)break}return""===t._errorMessage&&(1===s.length?a=s.pop():t._errorMessage="式が正しくありません。"),a},t.analyzeFormula=function(t){for(var e=[],a="",s=0;s<t.length;s++){var n=t.charAt(s);n.match(/[\+\-\*\/\^\%]/)?(""!==a&&(e.push(a),a=""),e.push(n)):n.match(/[0-9]/)?a+=n:""!==a&&(e.push(a),a="")}return e},t._errorMessage="",t}();e["a"]=s},"629b":function(t,e,a){},"839c":function(t,e,a){"use strict";var s=a("213e"),n=a.n(s);n.a},adb4:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"c-selector-sample"},[t._v("\n  例: \n  "),a("select",{attrs:{name:"sample"},domProps:{value:t.dataSampleIndex},on:{change:function(e){return t.listenOnSelectSample(e)}}},t._l(t.dataSamples,function(e,s){return a("option",{key:s,domProps:{value:s,innerHTML:t._s(e.caption)}})}),0)])},n=[],r=a("9ab4"),o=a("60a3"),i=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.dataSamples=e.samples,e.dataSampleIndex=e.sampleIndex,e}return r["b"](e,t),e.prototype.emitSelectSample=function(){return this.dataSampleIndex},e.prototype.listenOnSelectSample=function(t){this.dataSampleIndex=Number(t.target.value),this.emitSelectSample()},r["a"]([Object(o["c"])()],e.prototype,"samples",void 0),r["a"]([Object(o["c"])()],e.prototype,"sampleIndex",void 0),r["a"]([Object(o["b"])("selectSample")],e.prototype,"emitSelectSample",null),e=r["a"]([o["a"]],e),e}(o["d"]),c=i,l=c,p=(a("dd95"),a("2877")),u=Object(p["a"])(l,s,n,!1,null,"59407ce8",null);e["a"]=u.exports},d805:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"c-button"},[a("button",{staticClass:"button ripple",attrs:{type:"button"},on:{click:function(e){return t.listenClick(e)}}},[t._v("\n    "+t._s(t.dataButtonText)+"\n    "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.dataPosition,expression:"dataPosition"}],staticClass:"spread",style:t.dataPosition})])])},n=[],r=a("9ab4"),o=a("60a3"),i=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.dataButtonText=e.buttonText,e.dataPosition="",e}return r["b"](e,t),e.prototype.onValueChange=function(t,e){},e.prototype.emitClickButton=function(){},e.prototype.listenClick=function(t){var e=this,a=512,s=t.target,n=s.offsetWidth,r=s.getBoundingClientRect(),o=Number(t.pageX)-r.left-window.pageXOffset-n/2,i=Number(t.pageY)-r.top-window.pageYOffset-n/2,c="";c+="left:"+o+"px;",c+="top:"+i+"px;",c+="width:"+n+"px;",c+="height:"+n+"px;",this.dataPosition=c,setTimeout(function(){e.dataPosition=""},a),this.emitClickButton()},r["a"]([Object(o["c"])()],e.prototype,"buttonText",void 0),r["a"]([Object(o["e"])("dataPosition")],e.prototype,"onValueChange",null),r["a"]([Object(o["b"])("clickButton")],e.prototype,"emitClickButton",null),e=r["a"]([o["a"]],e),e}(o["d"]),c=i,l=c,p=(a("04f4"),a("2877")),u=Object(p["a"])(l,s,n,!1,null,"722269f6",null);e["a"]=u.exports},d89f:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rpn"},[t._m(0),a("div",{staticClass:"card"},[a("h2",{staticClass:"title"},[t._v("計算式")]),a("p",[t._v("逆ポーランド記法による計算式を入力してください。")]),t._m(1),t._m(2),t._m(3),t._m(4),a("CSelectorSample",{attrs:{samples:t.dataSamples,sampleIndex:t.dataSampleIndex},on:{selectSample:function(e){return t.listenOnSampleSelect(e)}}}),a("div",[a("input",{staticClass:"formula",attrs:{type:"text",placeholder:"ここに式を入力してください"},domProps:{value:t.dataFormula},on:{change:function(e){return t.listenInputText(e)}}})]),a("CButton",{attrs:{buttonText:t.dataButtonText},on:{clickButton:function(e){return t.solve()}}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.dataProcesses.length,expression:"dataProcesses.length"}],staticClass:"card"},[a("h2",{staticClass:"title"},[t._v("解答と処理")]),a("p",[t._v("解答です。")]),a("ul",{staticClass:"result"},[a("li",[a("span",{domProps:{innerHTML:t._s(t.dataAnswer)}})])]),a("p",[t._v("中間記法での式です。")]),a("ul",{staticClass:"result"},[a("li",[""!==t.dataConvertErrorMessage?a("span",{domProps:{innerHTML:t._s(t.dataConvertErrorMessage)}}):a("span",{domProps:{innerHTML:t._s(t.dataConvertedFormula)}})])]),a("p",[t._v("スタックを利用した処理の全過程です。")]),t._m(5),t._m(6),t._m(7),t._m(8),t._l(t.dataProcesses,function(e,s){return a("table",{key:s,staticClass:"rpn-table"},[a("caption",{staticClass:"process-number",domProps:{innerHTML:t._s(s+1)}}),a("tr",[a("td",{staticClass:"pre-text",domProps:{innerHTML:t._s(e.preText)}}),a("td",{staticClass:"processing-char",domProps:{innerHTML:t._s(e.processingChar)}}),a("td",{staticClass:"post-text",domProps:{innerHTML:t._s(e.postText)}})]),a("tr",[a("td",{attrs:{colspan:"3"}},[a("div",{staticClass:"stacks"},t._l(e.stacks,function(e,s){return a("span",{key:s,staticClass:"stack",domProps:{innerHTML:t._s(e)}})}),0)])])])})],2),a("CFormula",{attrs:{linkTitle:t.dataLinkTitle}})],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("h1",{staticClass:"page_title"},[t._v("逆ポーランド記法")]),a("p",[t._v("\n      逆ポーランド記法の計算をし、スタックを利用した計算過程を表示します。\n    ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"note"},[a("i",{staticClass:"fa fa-warning"}),t._v(" \n      利用できる演算子は、加算「+」、減算「-」、乗算「*」、除算「/」、べき乗「^」、剰余「%」です。\n    ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"note"},[a("i",{staticClass:"fa fa-warning"}),t._v(" \n      数値と数値の間は空白で区切ってください。\n      例えば、「2 1」は「2」と「1」という2つの数値で、「21」は「ニジュウイチ」という1つの数値です。\n      なお、演算子同士、もしくは数値と演算子の間は、空白を入れても入れなくても問題ありません。\n    ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"note"},[a("i",{staticClass:"fa fa-warning"}),t._v(" \n      演算子と数値以外の記号は、すべて空白と同じものとみなされます。\n      したがって「2 1」の代わりに「2,1」のように書くこともできます。\n    ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"note"},[a("i",{staticClass:"fa fa-warning"}),t._v(" \n      数値として指定できるのは、0以上の整数のみです。\n    ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"note"},[a("i",{staticClass:"fa fa-coffee"}),t._v(" \n      式は左から順に処理されます。\n    ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"note"},[a("i",{staticClass:"fa fa-coffee"}),t._v(" \n      赤で示したものが処理中のデータです。\n    ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"note"},[a("i",{staticClass:"fa fa-coffee"}),t._v(" \n      処理中のデータは、数値ならばスタックに格納されます。\n      また、演算子ならばスタック領域から2つの数値を取り出した上で、演算子にしたがって計算します。\n      計算後は、その値が再びスタック領域に格納されます。\n    ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"note"},[a("i",{staticClass:"fa fa-coffee"}),t._v(" \n      全ての処理が終了した後、最後にスタック領域に1つだけ残っているのが解答です。\n    ")])}],r=a("9ab4"),o=a("60a3"),i=a("39cf"),c=a("d805"),l=a("adb4"),p=a("4949"),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.dataLinkTitle="関連リンク一覧",e.dataButtonText="解答と処理",e.dataFormula="",e.dataProcesses=[],e.dataAnswer="",e.dataConvertedFormula="",e.dataConvertErrorMessage="",e.dataSamples=[{name:"none",caption:"",content:""},{name:"simple",caption:"1 2 3-+",content:"1 2 3-+"},{name:"simple2",caption:"1 2+ 3- 4* 5^ 6/",content:"1 2+ 3- 4* 5^ 6/"},{name:"complex",caption:"1 2 3* 4- 6 20 10//*+",content:"1 2 3* 4- 6 20 10//*+"},{name:"seconds",caption:"年間の秒数",content:"365 24 60 60***"}],e.dataSampleIndex=0,e}return r["b"](e,t),e.prototype.listenOnSampleSelect=function(t){this.dataFormula=this.dataSamples[Number(t)].content},e.prototype.listenInputText=function(t){this.dataFormula=t.target.value},e.prototype.solve=function(){this.dataProcesses.length=0,this.dataAnswer="";var t=[],e=p["a"].analyzeFormula(this.dataFormula);this.convert(e);for(var a=0;a<e.length;a++){if(e[a].match(/^[0-9]+$/))t.push(Number(e[a]));else if(2<=t.length){var s=t.pop(),n=t.pop();switch(e[a]){case"+":t.push(n+s);break;case"-":t.push(n-s);break;case"*":t.push(n*s);break;case"/":0===s?this.dataAnswer="エラーです。0除算が発生しました。":t.push(n/s);break;case"^":t.push(Math.pow(n,s));break;case"%":0===s?this.dataAnswer="エラーです。0除算が発生しました。":t.push(n%s);break}}else this.dataAnswer="式が正しくありません。";if(""!==this.dataAnswer)break;var r={preText:0<a?e.slice(0,a).join(" "):"",processingChar:e[a],postText:a+1<e.length?e.slice(a+1).join(" "):"",stacks:t.slice(0)};this.dataProcesses.push(r)}""===this.dataAnswer&&(1===t.length?this.dataAnswer=String(t.pop()):this.dataAnswer="式が正しくありません。")},e.prototype.convert=function(t){this.dataConvertedFormula=p["a"].convertFromRpn(t),this.dataConvertErrorMessage=p["a"].errorMessage},e=r["a"]([Object(o["a"])({components:{CFormula:i["a"],CButton:c["a"],CSelectorSample:l["a"]},head:{title:{inner:"逆ポーランド記法"}}})],e),e}(o["d"]),d=u,f=d,m=(a("839c"),a("2877")),h=Object(m["a"])(f,s,n,!1,null,"86d18454",null);e["default"]=h.exports},dd95:function(t,e,a){"use strict";var s=a("2270"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-12146693.f92b6797.js.map