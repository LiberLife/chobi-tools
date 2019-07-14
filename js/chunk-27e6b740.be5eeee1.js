(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27e6b740"],{"04f4":function(t,e,n){"use strict";var a=n("629b"),i=n.n(a);i.a},"08e9":function(t,e,n){},"3e77":function(t,e,n){"use strict";var a=n("08e9"),i=n.n(a);i.a},"629b":function(t,e,n){},a800:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"multi-permutation"},[t._m(0),n("div",{staticClass:"card"},[n("h2",{staticClass:"title"},[t._v("設定")]),n("p",[t._v("\n      単語を設定してください。また選択する個数を指定してください。\n      同じ単語を2つ以上入力することは入力できません。\n    ")]),n("p",{staticClass:"note"},[n("i",{staticClass:"fa fa-coffee"}),t._v(" \n      探索に負荷がかかるため、単語は"+t._s(t.dataTextMaxLength)+"個までに制限しています。\n    ")]),t._m(1),t._m(2),t._m(3),n("div",{staticClass:"digit-count-selector"},[t._v("\n      サンプル: \n      "),n("select",{attrs:{name:"sample"},domProps:{value:t.dataSampleIndex},on:{change:function(e){return t.listenOnSelectSample(e)}}},t._l(t.dataSamples,function(e,a){return n("option",{key:a,domProps:{value:a,innerHTML:t._s(e.caption)}})}),0)]),n("div",[n("input",{staticClass:"permutation-text",attrs:{type:"text"},domProps:{value:t.dataText},on:{input:function(e){return t.listenInputText(e)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.dataSpecifiedCount,expression:"dataSpecifiedCount"}],staticClass:"permutation-count",attrs:{type:"number",pattern:"^([0-9]|[1-9][0-9]+)$"},domProps:{value:t.dataSpecifiedCount},on:{change:function(e){return t.listenInputNumber(e)},input:function(e){e.target.composing||(t.dataSpecifiedCount=e.target.value)}}}),t._v(" 個\n    ")]),n("CButton",{attrs:{buttonText:t.dataButtonText},on:{clickButton:function(e){return t.generatePermutations()}}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.dataPermutations.length,expression:"dataPermutations.length"}],staticClass:"card"},[n("h2",{staticClass:"title"},[t._v("重複順列一覧")]),n("p",[t._v("重複順列の個数です。")]),n("ul",{staticClass:"result"},[n("li",[n("span",{staticClass:"result-key"},[t._v("重複順列の個数")]),n("span",{domProps:{innerHTML:t._s(t.dataPermutations.length)}})])]),n("p",[t._v("重複順列の一覧です。")]),n("div",{staticClass:"result permutation-result"},t._l(t.dataPermutations,function(e,a){return n("span",{key:a,domProps:{innerHTML:t._s(e.join(" "))}})}),0)]),n("CPermutation",{attrs:{linkTitle:t.dataLinkTitle}})],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("h1",{staticClass:"page_title"},[t._v("重複順列一覧")]),n("p",[t._v("\n      異なるn個の単語から重複を許してr個取り出した順列をすべて列挙します。\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"note"},[n("i",{staticClass:"fa fa-coffee"}),t._v(" \n      総数が数千になると、表示にかなり負荷がかかります。\n      目安は下記の通りです。\n    ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table guide"},[n("tr",[n("th",[t._v("要素数n")]),n("th",[t._v("取り出し数r")]),n("th",[t._v("総数")])]),n("tr",[n("td",[t._v("2")]),n("td",[t._v("10")]),n("td",[t._v("1024")])]),n("tr",[n("td",[t._v("3")]),n("td",[t._v("7")]),n("td",[t._v("2187")])]),n("tr",[n("td",[t._v("4")]),n("td",[t._v("5")]),n("td",[t._v("1024")])]),n("tr",[n("td",[t._v("6")]),n("td",[t._v("4")]),n("td",[t._v("1296")])]),n("tr",[n("td",[t._v("10")]),n("td",[t._v("3")]),n("td",[t._v("1000")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"note"},[n("i",{staticClass:"fa fa-coffee"}),t._v(" \n      単語は半角空白文字で区切って記入してください。\n    ")])}],s=n("9ab4"),o=n("60a3"),r=n("8655"),u=n("d805"),c=n("eee6"),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.dataLinkTitle="関連リンク一覧",e.dataButtonText="重複順列の探索",e.dataText="",e.dataSpecifiedCount=0,e.dataPermutations=[],e.dataTextMaxLength=10,e.dataSamples=[{name:"none",caption:"",content:""},{name:"alphabeta",caption:"アルファベット",content:"A B C"},{name:"menu",caption:"寿司メニュー",content:"トロ サーモン イカ いくら エンガワ うに"},{name:"shiritori",caption:"しりとり",content:"しりとり りんご ごりら らっぱ"},{name:"digit_2",caption:"数字（2進数）",content:"0 1"},{name:"digit_6",caption:"数字（6進数）",content:"0 1 2 3 4 5"},{name:"digit_10",caption:"数字（10進数）",content:"0 1 2 3 4 5 6 7 8 9"}],e.dataSampleIndex=0,e}return s["b"](e,t),e.prototype.watchOnTextChanged=function(t,e){this.arrangeText(t)},e.prototype.listenOnSelectSample=function(t){this.dataSampleIndex=Number(t.target.value),this.dataText=this.dataSamples[this.dataSampleIndex].content},e.prototype.listenInputText=function(t){var e=t.target.value;this.arrangeText(e)},e.prototype.listenInputNumber=function(t){var e=t.target.value;this.splitTextToItems(this.dataText).length;e.match(/^([0-9]|[1-9][0-9]+)$/g)?(e=Number(e),""===this.dataText?this.dataSpecifiedCount=0:0<=e&&(this.dataSpecifiedCount=e)):this.dataSpecifiedCount=0},e.prototype.arrangeText=function(t){var e=this.splitTextToItems(t);e=e.filter(function(t,e,n){return n.indexOf(t)===e}),this.dataText=e.join(" ")},e.prototype.splitTextToItems=function(t){return t.split(/\ +/,this.dataTextMaxLength).filter(function(t){if(""!==t)return t})},e.prototype.generatePermutations=function(){this.dataPermutations.length=0,0<this.dataSpecifiedCount&&(this.dataPermutations=(new c["a"]).generateLists(this.splitTextToItems(this.dataText),this.dataSpecifiedCount))},s["a"]([Object(o["e"])("dataText")],e.prototype,"watchOnTextChanged",null),e=s["a"]([Object(o["a"])({components:{CPermutation:r["a"],CButton:u["a"]},head:{title:{inner:"重複順列一覧"}}})],e),e}(o["d"]),p=l,d=p,f=(n("3e77"),n("2877")),h=Object(f["a"])(d,a,i,!1,null,"4a8b1bd2",null);e["default"]=h.exports},d805:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-button"},[n("button",{staticClass:"button ripple",attrs:{type:"button"},on:{click:function(e){return t.listenClick(e)}}},[t._v("\n    "+t._s(t.dataButtonText)+"\n    "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.dataPosition,expression:"dataPosition"}],staticClass:"spread",style:t.dataPosition})])])},i=[],s=n("9ab4"),o=n("60a3"),r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.dataButtonText=e.buttonText,e.dataPosition="",e}return s["b"](e,t),e.prototype.onValueChange=function(t,e){},e.prototype.emitClickButton=function(){},e.prototype.listenClick=function(t){var e=this,n=512,a=t.target,i=a.offsetWidth,s=a.getBoundingClientRect(),o=Number(t.pageX)-s.left-window.pageXOffset-i/2,r=Number(t.pageY)-s.top-window.pageYOffset-i/2,u="";u+="left:"+o+"px;",u+="top:"+r+"px;",u+="width:"+i+"px;",u+="height:"+i+"px;",this.dataPosition=u,setTimeout(function(){e.dataPosition=""},n),this.emitClickButton()},s["a"]([Object(o["c"])()],e.prototype,"buttonText",void 0),s["a"]([Object(o["e"])("dataPosition")],e.prototype,"onValueChange",null),s["a"]([Object(o["b"])("clickButton")],e.prototype,"emitClickButton",null),e=s["a"]([o["a"]],e),e}(o["d"]),u=r,c=u,l=(n("04f4"),n("2877")),p=Object(l["a"])(c,a,i,!1,null,"722269f6",null);e["a"]=p.exports},e8ee:function(t,e,n){"use strict";var a=function(){function t(){this._lists=[],this._specifiedCount=-1}return t.prototype.generateLists=function(t,e){if(void 0===e&&(e=this._specifiedCount),this._lists.length=0,this._lists.length=0,this._specifiedCount=e,this._specifiedCount<0&&(this._specifiedCount=1),0<this._specifiedCount){var n=[];this.generateListsRecursively(t,n)}return this._lists},t.prototype.generateListsRecursively=function(t,e){for(var n=[],a=0;a<t.length;a++)if(n=e.concat(t[a]),n.length<this._specifiedCount){var i=[];i=this.concatSlicedItems(t,i,a),this.generateListsRecursively(i,n)}else this._lists.some(function(t){if(JSON.stringify(t)===JSON.stringify(n))return t})||this._lists.splice(this._lists.length,0,n)},t}();e["a"]=a},eee6:function(t,e,n){"use strict";var a=n("9ab4"),i=n("e8ee"),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a["b"](e,t),e.prototype.concatSlicedItems=function(t,e,n){return e.concat(t.slice(0,n),t.slice(n))},e}(i["a"]);e["a"]=s}}]);
//# sourceMappingURL=chunk-27e6b740.be5eeee1.js.map