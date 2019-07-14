(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72e2edee"],{"04f4":function(t,e,n){"use strict";var i=n("629b"),a=n.n(i);a.a},"0ac4":function(t,e,n){},"157d":function(t,e,n){"use strict";var i=n("0ac4"),a=n.n(i);a.a},"629b":function(t,e,n){},b860:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"multi-combination"},[n("div",{staticClass:"card"},[n("h1",{staticClass:"page_title"},[t._v("重複組み合わせ一覧")]),n("p",[t._v("\n      異なるn個の単語から重複を許してr個取り出した組み合わせをすべて列挙します。\n    ")]),n("p",[t._v("\n      例えば各桁を自由に入れ替えてよい4桁の数字の組み合わせは、重複組み合わせです。\n      この場合、0から9までの異なる10個の単語から重複を許して4個取り出した組み合わせになります。\n    ")]),n("p",[t._v("\n      順列については、「"),n("router-link",{attrs:{to:"/permutation/"}},[t._v("順列一覧")]),t._v("」を参照してください。\n      また、重複を含まない組み合わせについては、「"),n("router-link",{attrs:{to:"/combination/"}},[t._v("組み合わせ一覧")]),t._v("」を参照してください。\n    ")],1)]),n("div",{staticClass:"card"},[n("h2",{staticClass:"title"},[t._v("設定")]),n("p",[t._v("\n      単語を設定してください。\n      また選択する個数を指定してください。\n      同じ単語を2つ以上入力することは入力できません。\n    ")]),n("p",{staticClass:"note"},[n("i",{staticClass:"fa fa-coffee"}),t._v(" \n      探索に負荷がかかるため、単語は"+t._s(t.dataTextMaxLength)+"個までに制限しています。\n      ただし、単語の多寡を問わず、出力結果が数千を超えると、概して処理が重くなります。\n      目安は下記の通りです。\n    ")]),t._m(0),t._m(1),t._m(2),n("div",{staticClass:"digit-count-selector"},[t._v("\n      サンプル: \n      "),n("select",{attrs:{name:"sample"},domProps:{value:t.dataSampleIndex},on:{change:function(e){return t.listenOnSelectSample(e)}}},t._l(t.dataSamples,function(e,i){return n("option",{key:i,domProps:{value:i,innerHTML:t._s(e.caption)}})}),0)]),n("div",[n("input",{staticClass:"multi-combination-text",attrs:{type:"text"},domProps:{value:t.dataText},on:{input:function(e){return t.listenInputText(e)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.dataSpecifiedCount,expression:"dataSpecifiedCount"}],staticClass:"multi-combination-count",attrs:{type:"number",pattern:"^([0-9]|[1-9][0-9]+)$"},domProps:{value:t.dataSpecifiedCount},on:{change:function(e){return t.listenInputNumber(e)},input:function(e){e.target.composing||(t.dataSpecifiedCount=e.target.value)}}}),t._v(" 個\n    ")]),n("CButton",{attrs:{buttonText:t.dataButtonText},on:{clickButton:function(e){return t.generateMultiChooses()}}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.dataMultiChoose.length,expression:"dataMultiChoose.length"}],staticClass:"card"},[n("h2",{staticClass:"title"},[t._v("重複組み合わせ一覧")]),n("p",[t._v("重複組み合わせの個数です。")]),n("ul",{staticClass:"result"},[n("li",[n("span",{staticClass:"result-key"},[t._v("重複組み合わせの個数")]),n("span",{domProps:{innerHTML:t._s(t.dataMultiChoose.length)}})])]),n("p",[t._v("重複組み合わせの一覧です。")]),n("div",{staticClass:"result multi-combination-result"},t._l(t.dataMultiChoose,function(e,i){return n("span",{key:i,domProps:{innerHTML:t._s(e.join(" "))}})}),0)])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table guide"},[n("tr",[n("th",[t._v("要素数n")]),n("th",[t._v("取り出し数r")]),n("th",[t._v("総数")])]),n("tr",[n("td",[t._v("2")]),n("td",[t._v("50")]),n("td",[t._v("51")])]),n("tr",[n("td",[t._v("8")]),n("td",[t._v("6")]),n("td",[t._v("1716")])]),n("tr",[n("td",[t._v("10")]),n("td",[t._v("4")]),n("td",[t._v("715")])]),n("tr",[n("td",[t._v("10")]),n("td",[t._v("5")]),n("td",[t._v("2002")])]),n("tr",[n("td",[t._v("16")]),n("td",[t._v("3")]),n("td",[t._v("816")])]),n("tr",[n("td",[t._v("16")]),n("td",[t._v("4")]),n("td",[t._v("3876")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"note"},[n("i",{staticClass:"fa fa-coffee"}),t._v(" \n      単語は半角空白文字で区切って記入してください。\n    ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"note"},[n("i",{staticClass:"fa fa-warning"}),t._v(" \n      焼き肉の注文は、8品か9品くらいまでにしておきましょう。\n    ")])}],s=n("9ab4"),o=n("60a3"),c=n("d805"),r=n("e8ee"),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s["b"](e,t),e.prototype.concatSlicedItems=function(t,e,n){return e.concat(t.slice(n))},e}(r["a"]),l=u,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.dataButtonText="重複組み合わせの探索",e.dataText="",e.dataSpecifiedCount=0,e.dataMultiChoose=[],e.dataTextMaxLength=16,e.dataSamples=[{name:"none",caption:"",content:""},{name:"alphabeta",caption:"アルファベット",content:"A B C D E F"},{name:"coin",caption:"コイントス",content:"表 裏"},{name:"menu",caption:"焼き肉メニュー",content:"黒ホル ハツ タン カワ ナンコツ レバー"},{name:"digit_2",caption:"数字（2進数）",content:"0 1"},{name:"digit_8",caption:"数字（8進数）",content:"0 1 2 3 4 5 6 7"},{name:"digit_10",caption:"数字（10進数）",content:"0 1 2 3 4 5 6 7 8 9"},{name:"digit_16",caption:"数字（16進数）",content:"0 1 2 3 4 5 6 7 8 9 A B C D E F"}],e.dataSampleIndex=0,e}return s["b"](e,t),e.prototype.watchOnTextChanged=function(t,e){this.arrangeText(t)},e.prototype.listenOnSelectSample=function(t){this.dataSampleIndex=Number(t.target.value),this.dataText=this.dataSamples[this.dataSampleIndex].content},e.prototype.listenInputText=function(t){var e=t.target.value;this.arrangeText(e)},e.prototype.listenInputNumber=function(t){var e=t.target.value;e.match(/^([0-9]|[1-9][0-9]+)$/g)?(e=Number(e),""===this.dataText?this.dataSpecifiedCount=0:this.dataSpecifiedCount=e):this.dataSpecifiedCount=0},e.prototype.arrangeText=function(t){var e=this.splitTextToItems(t);e=e.filter(function(t,e,n){return n.indexOf(t)===e}),this.dataText=e.join(" ")},e.prototype.splitTextToItems=function(t){return t.split(/\ +/,this.dataTextMaxLength).filter(function(t){if(""!==t)return t})},e.prototype.generateMultiChooses=function(){this.dataMultiChoose.length=0,0<this.dataSpecifiedCount&&(this.dataMultiChoose=(new l).generateLists(this.splitTextToItems(this.dataText),this.dataSpecifiedCount))},s["a"]([Object(o["e"])("dataText")],e.prototype,"watchOnTextChanged",null),e=s["a"]([Object(o["a"])({components:{CButton:c["a"]},head:{title:{inner:"重複組み合わせ一覧"}}})],e),e}(o["d"]),d=p,f=d,h=(n("157d"),n("2877")),v=Object(h["a"])(f,i,a,!1,null,"ab8741ba",null);e["default"]=v.exports},d805:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-button"},[n("button",{staticClass:"button ripple",attrs:{type:"button"},on:{click:function(e){return t.listenClick(e)}}},[t._v("\n    "+t._s(t.dataButtonText)+"\n    "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.dataPosition,expression:"dataPosition"}],staticClass:"spread",style:t.dataPosition})])])},a=[],s=n("9ab4"),o=n("60a3"),c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.dataButtonText=e.buttonText,e.dataPosition="",e}return s["b"](e,t),e.prototype.onValueChange=function(t,e){},e.prototype.emitClickButton=function(){},e.prototype.listenClick=function(t){var e=this,n=512,i=t.target,a=i.offsetWidth,s=i.getBoundingClientRect(),o=Number(t.pageX)-s.left-window.pageXOffset-a/2,c=Number(t.pageY)-s.top-window.pageYOffset-a/2,r="";r+="left:"+o+"px;",r+="top:"+c+"px;",r+="width:"+a+"px;",r+="height:"+a+"px;",this.dataPosition=r,setTimeout(function(){e.dataPosition=""},n),this.emitClickButton()},s["a"]([Object(o["c"])()],e.prototype,"buttonText",void 0),s["a"]([Object(o["e"])("dataPosition")],e.prototype,"onValueChange",null),s["a"]([Object(o["b"])("clickButton")],e.prototype,"emitClickButton",null),e=s["a"]([o["a"]],e),e}(o["d"]),r=c,u=r,l=(n("04f4"),n("2877")),p=Object(l["a"])(u,i,a,!1,null,"722269f6",null);e["a"]=p.exports},e8ee:function(t,e,n){"use strict";var i=function(){function t(){this._lists=[],this._specifiedCount=-1}return t.prototype.generateLists=function(t,e){if(void 0===e&&(e=this._specifiedCount),this._lists.length=0,this._lists.length=0,this._specifiedCount=e,this._specifiedCount<0&&(this._specifiedCount=1),0<this._specifiedCount){var n=[];this.generateListsRecursively(t,n)}return this._lists},t.prototype.generateListsRecursively=function(t,e){for(var n=[],i=0;i<t.length;i++)if(n=e.concat(t[i]),n.length<this._specifiedCount){var a=[];a=this.concatSlicedItems(t,a,i),this.generateListsRecursively(a,n)}else this._lists.some(function(t){if(JSON.stringify(t)===JSON.stringify(n))return t})||this._lists.splice(this._lists.length,0,n)},t}();e["a"]=i}}]);
//# sourceMappingURL=chunk-72e2edee.ff9de3e1.js.map