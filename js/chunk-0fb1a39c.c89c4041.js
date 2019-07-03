(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fb1a39c"],{"04f4":function(t,e,n){"use strict";var a=n("629b"),i=n.n(a);i.a},"12e6":function(t,e,n){},"629b":function(t,e,n){},9834:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-formula"},[t._m(0),n("div",{staticClass:"card"},[n("h2",{staticClass:"title"},[t._v("設定")]),n("p",[t._v("値の個数が増えると処理が爆発的に重くなっていくため、値の個数は最大で10個までに制限しています。")]),n("p",{staticClass:"note"},[n("i",{staticClass:"fa fa-coffee"}),t._v(" \n      式の列挙は、逆ポーランド記法で行います。\n      逆ポーランド記法では、例えば中間記法の「(1 - 2) * (3 + 4)」 は「1 2- 3 4+*」と表示されます。\n      逆ポーランド記法については、「"),n("router-link",{attrs:{to:"/rpn/"}},[t._v("逆ポーランド記法")]),t._v("」のページでデモンストレーションを見ることができます。\n    ")],1),t._m(1),t._m(2),n("div",{staticClass:"digit-count-selector"},[t._v("\n      式中の数値の個数: \n      "),n("select",{attrs:{name:"digitCount"},domProps:{value:t.dataDigitCount},on:{change:function(e){return t.listenOnSelectDigitCount(e)}}},t._l(t.dataDigitCounts,function(e){return n("option",{key:e,domProps:{value:e,innerHTML:t._s(e)}})}),0)]),n("CButton",{attrs:{buttonText:t.dataButtonText},on:{clickButton:function(e){return t.generateTreeDigits()}}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.dataFormulas.length,expression:"dataFormulas.length"}],staticClass:"card"},[n("h2",{staticClass:"title"},[t._v("式一覧")]),n("p",[t._v("出力した式の個数と、4つ（例えば「+」「-」「*」「-」）の演算子を利用した場合の式の個数です。")]),n("dl",{staticClass:"definition result-count"},[n("dt",[t._v("出力した式の個数")]),n("dd",[t._v(t._s(t.dataFormulas.length.toLocaleString()))]),n("dt",[t._v("演算子が4つの場合")]),n("dd",[t._v(t._s(t.dataAllFormulasCount.toLocaleString()))])]),n("p",[t._v("順列の一覧です。")]),n("p",{staticClass:"note"},[n("i",{staticClass:"fa fa-coffee"}),t._v(" \n      出力された式は、コピーして「"),n("router-link",{attrs:{to:"/rpn/"}},[t._v("逆ポーランド記法")]),t._v("」のページで実際に計算させてみることができます。\n    ")],1),n("div",{staticClass:"result formula"},t._l(t.dataFormulas,function(e,a){return n("span",{key:a,domProps:{innerHTML:t._s(e)}})}),0)])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("h1",{staticClass:"page_title"},[t._v("式の列挙")]),n("p",[t._v("\n      値がN個存在するときに構成可能な式を列挙します。\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"note"},[n("i",{staticClass:"fa fa-coffee"}),t._v(" \n      値の個数が増えると式が大量に吐き出されることになるため、出力する式の演算子は「-」で代表させています。\n      そのため、式の値の個数をNとし、出力する式の個数をMとして、例えば利用する演算子を「+」「-」「*」「-」とした場合、実際の式の個数は「M * (4 ^ (N - 1))」個になります。\n    ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"note"},[n("i",{staticClass:"fa fa-coffee"}),t._v(" \n      出力される式の値には、左から順に「0」から「9」を割り当てています。\n    ")])}],o=n("9ab4"),s=n("60a3"),r=n("d805"),u=function(){function t(){}return t.generateTreeDigits=function(e){t._totalDigitsLength=e;for(var n=[],a=1,i=e-1,o=a;o<=i;o++)n.push({name:e-1,operatorCount:o,accumulatedOperatorCount:o,treeDigits:null});return t.generateTreeDigitsRecursively(n,e),n},t.generateTreeDigitsRecursively=function(e,n){if(1<n)for(var a=n-1,i=a-1,o=0;o<e.length;o++){var s=[],r=t._totalDigitsLength-e[o].accumulatedOperatorCount-1,u=0;0<r&&r===i&&(u=1);for(var l=u;l<=r;l++)s.push({name:a-1,operatorCount:l,accumulatedOperatorCount:e[o].accumulatedOperatorCount+l,treeDigits:null}),t.generateTreeDigitsRecursively(s,a);e[o].treeDigits=s}},t.rollTreeDigits=function(e){return t._formulas.length=0,t.rollTreeDigitsRecursively(e,""),t._formulas},t.rollTreeDigitsRecursively=function(t,e){for(var n="#",a=0;a<t.length;a++)0===t[a].name?this._formulas.push(String(t[a].name)+n.repeat(t[a].operatorCount)+" "+e):this.rollTreeDigitsRecursively(t[a].treeDigits,String(t[a].name)+n.repeat(t[a].operatorCount)+" "+e)},t._totalDigitsLength=0,t._formulas=[],t}(),l=u,c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.dataButtonText="探索",e.dataDigitCount=4,e.dataDigitCounts=[],e.dataFormulas=[],e.dataAllFormulasCount=0,e}var n;return o["b"](e,t),n=e,e.prototype.created=function(){this.dataDigitCounts=new Array(n.MAX_DIGIT_COUNT+1-n.MIN_DIGIT_COUNT).fill(n.MIN_DIGIT_COUNT).map(function(t,e){return n.MIN_DIGIT_COUNT+e})},e.prototype.listenOnSelectDigitCount=function(t){this.dataDigitCount=Number(t.target.value)},e.prototype.generateTreeDigits=function(){var t=l.generateTreeDigits(this.dataDigitCount),e=l.rollTreeDigits(t);e=e.map(function(t){return t.replace(/\#/g,"-")}),this.dataFormulas=e,this.countAllFormulas()},e.prototype.countAllFormulas=function(){this.dataAllFormulasCount=this.dataFormulas.length*Math.pow(4,this.dataDigitCount-1)},e.MIN_DIGIT_COUNT=2,e.MAX_DIGIT_COUNT=10,e=n=o["a"]([Object(s["a"])({components:{CButton:r["a"]},head:{title:{inner:"式の列挙"}}})],e),e}(s["d"]),f=c,p=f,d=(n("a7b3"),n("2877")),g=Object(d["a"])(p,a,i,!1,null,"7146821e",null);e["default"]=g.exports},a7b3:function(t,e,n){"use strict";var a=n("12e6"),i=n.n(a);i.a},d805:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-button"},[n("button",{staticClass:"button ripple",attrs:{type:"button"},on:{click:function(e){return t.listenClick(e)}}},[t._v("\n    "+t._s(t.dataButtonText)+"\n    "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.dataPosition,expression:"dataPosition"}],staticClass:"spread",style:t.dataPosition})])])},i=[],o=n("9ab4"),s=n("60a3"),r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.dataButtonText=e.buttonText,e.dataPosition="",e}return o["b"](e,t),e.prototype.onValueChange=function(t,e){},e.prototype.emitClickButton=function(){},e.prototype.listenClick=function(t){var e=this,n=512,a=t.target,i=a.offsetWidth,o=a.getBoundingClientRect(),s=Number(t.pageX)-o.left-window.pageXOffset-i/2,r=Number(t.pageY)-o.top-window.pageYOffset-i/2,u="";u+="left:"+s+"px;",u+="top:"+r+"px;",u+="width:"+i+"px;",u+="height:"+i+"px;",this.dataPosition=u,setTimeout(function(){e.dataPosition=""},n),this.emitClickButton()},o["a"]([Object(s["c"])()],e.prototype,"buttonText",void 0),o["a"]([Object(s["e"])("dataPosition")],e.prototype,"onValueChange",null),o["a"]([Object(s["b"])("clickButton")],e.prototype,"emitClickButton",null),e=o["a"]([s["a"]],e),e}(s["d"]),u=r,l=u,c=(n("04f4"),n("2877")),f=Object(c["a"])(l,a,i,!1,null,"722269f6",null);e["a"]=f.exports}}]);
//# sourceMappingURL=chunk-0fb1a39c.c89c4041.js.map