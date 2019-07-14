(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f551fc3"],{"04f4":function(t,e,n){"use strict";var i=n("629b"),a=n.n(i);a.a},"629b":function(t,e,n){},"86f8":function(t,e,n){},"879b":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"circular-permutation"},[t._m(0),n("div",{staticClass:"card"},[n("h2",{staticClass:"title"},[t._v("設定")]),n("p",[t._v("単語を設定してください。また選択する個数を指定してください。")]),n("p",{staticClass:"note"},[n("i",{staticClass:"fa fa-coffee"}),t._v(" \n      探索に負荷がかかるため、単語は"+t._s(t.dataTextMaxLength)+"個までに制限しています。\n      目安は下記の通りです。\n    ")]),t._m(1),t._m(2),n("div",{staticClass:"digit-count-selector"},[t._v("\n      サンプル: \n      "),n("select",{attrs:{name:"sample"},domProps:{value:t.dataSampleIndex},on:{change:function(e){return t.listenOnSelectSample(e)}}},t._l(t.dataSamples,function(e,i){return n("option",{key:i,domProps:{value:i,innerHTML:t._s(e.caption)}})}),0)]),n("div",[n("input",{staticClass:"permutation-text",attrs:{type:"text"},domProps:{value:t.dataText},on:{input:function(e){return t.listenInputText(e)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.dataSpecifiedCount,expression:"dataSpecifiedCount"}],staticClass:"permutation-count",attrs:{type:"number",pattern:"^([0-9]|[1-9][0-9]+)$"},domProps:{value:t.dataSpecifiedCount},on:{change:function(e){return t.listenInputNumber(e)},input:function(e){e.target.composing||(t.dataSpecifiedCount=e.target.value)}}}),t._v(" 個\n    ")]),n("CButton",{attrs:{buttonText:t.dataButtonText},on:{clickButton:function(e){return t.generatePermutations()}}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.dataPermutations.length,expression:"dataPermutations.length"}],staticClass:"card"},[n("h2",{staticClass:"title"},[t._v("円順列一覧")]),n("p",[t._v("円順列の個数です。")]),n("ul",{staticClass:"result"},[n("li",[n("span",{staticClass:"result-key"},[t._v("円順列の個数")]),n("span",{domProps:{innerHTML:t._s(t.dataPermutations.length)}})])]),n("p",[t._v("円順列の一覧です。")]),n("div",{staticClass:"result permutation-result"},t._l(t.dataPermutations,function(e,i){return n("span",{key:i,domProps:{innerHTML:t._s(e.join(" "))}})}),0)]),n("CPermutation",{attrs:{linkTitle:t.dataLinkTitle}})],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("h1",{staticClass:"page_title"},[t._v("円順列一覧")]),n("p",[t._v("\n      複数の異なる単語の円順列をすべて列挙します。\n      また、同じ単語を含む円順列についても、重複のないように列挙します。\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table guide"},[n("tr",[n("th",[t._v("要素数n")]),n("th",[t._v("取り出し数r")]),n("th",[t._v("総数")])]),n("tr",[n("td",[t._v("7")]),n("td",[t._v("7")]),n("td",[t._v("720")])]),n("tr",[n("td",[t._v("7")]),n("td",[t._v("6")]),n("td",[t._v("840")])]),n("tr",[n("td",[t._v("8")]),n("td",[t._v("5")]),n("td",[t._v("1344")])]),n("tr",[n("td",[t._v("8")]),n("td",[t._v("6")]),n("td",[t._v("3360")])]),n("tr",[n("td",[t._v("9")]),n("td",[t._v("4")]),n("td",[t._v("756")])]),n("tr",[n("td",[t._v("9")]),n("td",[t._v("5")]),n("td",[t._v("3024")])]),n("tr",[n("td",[t._v("10")]),n("td",[t._v("4")]),n("td",[t._v("1260")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"note"},[n("i",{staticClass:"fa fa-coffee"}),t._v(" \n      単語は半角空白文字で区切って記入してください。\n    ")])}],s=n("9ab4"),o=n("60a3"),r=n("8655"),u=n("d805"),c=n("e4dc"),l=function(){function t(){this._specifiedCount=-1}return t.prototype.generateLists=function(t,e){void 0===e&&(e=this._specifiedCount);for(var n=[],i=[],a=function(a){n=(new c["a"]).generateLists(t.slice(a+1),e-1),0<n.length?n=n.filter(function(e){return e.unshift(t[a])}):n.push([t[a]]),i=i.concat(n)},s=0;s<=t.length-e;s++)a(s);return this.filterLists(i)},t.prototype.filterLists=function(t){for(var e=[],n=t.length-1;0<n;n--){var i=t[n].concat(t[n]),a=!1;t:for(var s=1;s<t[n].length;s++)for(var o=0;o<n;o++)if(JSON.stringify(t[o])===JSON.stringify(i.slice(s,s+t[n].length))){a=!0;break t}!1===a&&e.unshift(t[n])}return e.unshift(t[0]),e},t}(),p=l,d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.dataLinkTitle="関連リンク一覧",e.dataButtonText="円順列の探索",e.dataText="",e.dataSpecifiedCount=0,e.dataPermutations=[],e.dataTextMaxLength=10,e.dataSamples=[{name:"none",caption:"",content:""},{name:"alphabeta",caption:"アルファベット",content:"A B C D E F"},{name:"shiritori",caption:"しりとり",content:"しりとり りんご ごりら らっぱ"},{name:"duplication",caption:"重複を含んだ単語群",content:"りんご りんご りんご みかん みかん ポチ"},{name:"digit_4",caption:"数字（4桁）",content:"1 2 3 4"},{name:"digit_6",caption:"数字（6桁）",content:"0 1 2 3 4 5"}],e.dataSampleIndex=0,e}return s["b"](e,t),e.prototype.watchOnTextChanged=function(t,e){this.arrangeText(t)},e.prototype.listenOnSelectSample=function(t){this.dataSampleIndex=Number(t.target.value),this.dataText=this.dataSamples[this.dataSampleIndex].content},e.prototype.listenInputText=function(t){var e=t.target.value;this.arrangeText(e)},e.prototype.listenInputNumber=function(t){var e=t.target.value,n=this.splitTextToItems(this.dataText).length;e.match(/^([0-9]|[1-9][0-9]+)$/g)?(e=Number(e),""===this.dataText?this.dataSpecifiedCount=0:this.dataSpecifiedCount=0<=e&&e<=n?e:n):this.dataSpecifiedCount=n},e.prototype.arrangeText=function(t){var e=this.splitTextToItems(t);this.dataText=e.join(" "),this.dataSpecifiedCount=e.length},e.prototype.splitTextToItems=function(t){return t.split(/\ +/,this.dataTextMaxLength).filter(function(t){if(""!==t)return t})},e.prototype.generatePermutations=function(){this.dataPermutations.length=0,0<this.dataSpecifiedCount&&(this.dataPermutations=(new p).generateLists(this.splitTextToItems(this.dataText),this.dataSpecifiedCount))},s["a"]([Object(o["e"])("dataText")],e.prototype,"watchOnTextChanged",null),e=s["a"]([Object(o["a"])({components:{CPermutation:r["a"],CButton:u["a"]},head:{title:{inner:"円順列一覧"}}})],e),e}(o["d"]),f=d,h=f,v=(n("a031"),n("2877")),_=Object(v["a"])(h,i,a,!1,null,"1ebb4ece",null);e["default"]=_.exports},a031:function(t,e,n){"use strict";var i=n("86f8"),a=n.n(i);a.a},d805:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-button"},[n("button",{staticClass:"button ripple",attrs:{type:"button"},on:{click:function(e){return t.listenClick(e)}}},[t._v("\n    "+t._s(t.dataButtonText)+"\n    "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.dataPosition,expression:"dataPosition"}],staticClass:"spread",style:t.dataPosition})])])},a=[],s=n("9ab4"),o=n("60a3"),r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.dataButtonText=e.buttonText,e.dataPosition="",e}return s["b"](e,t),e.prototype.onValueChange=function(t,e){},e.prototype.emitClickButton=function(){},e.prototype.listenClick=function(t){var e=this,n=512,i=t.target,a=i.offsetWidth,s=i.getBoundingClientRect(),o=Number(t.pageX)-s.left-window.pageXOffset-a/2,r=Number(t.pageY)-s.top-window.pageYOffset-a/2,u="";u+="left:"+o+"px;",u+="top:"+r+"px;",u+="width:"+a+"px;",u+="height:"+a+"px;",this.dataPosition=u,setTimeout(function(){e.dataPosition=""},n),this.emitClickButton()},s["a"]([Object(o["c"])()],e.prototype,"buttonText",void 0),s["a"]([Object(o["e"])("dataPosition")],e.prototype,"onValueChange",null),s["a"]([Object(o["b"])("clickButton")],e.prototype,"emitClickButton",null),e=s["a"]([o["a"]],e),e}(o["d"]),u=r,c=u,l=(n("04f4"),n("2877")),p=Object(l["a"])(c,i,a,!1,null,"722269f6",null);e["a"]=p.exports},e4dc:function(t,e,n){"use strict";var i=n("9ab4"),a=n("e8ee"),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i["b"](e,t),e.prototype.concatSlicedItems=function(t,e,n){return e.concat(t.slice(0,n),t.slice(n+1))},e}(a["a"]);e["a"]=s},e8ee:function(t,e,n){"use strict";var i=function(){function t(){this._lists=[],this._specifiedCount=-1}return t.prototype.generateLists=function(t,e){if(void 0===e&&(e=this._specifiedCount),this._lists.length=0,this._lists.length=0,this._specifiedCount=e,this._specifiedCount<0&&(this._specifiedCount=1),0<this._specifiedCount){var n=[];this.generateListsRecursively(t,n)}return this._lists},t.prototype.generateListsRecursively=function(t,e){for(var n=[],i=0;i<t.length;i++)if(n=e.concat(t[i]),n.length<this._specifiedCount){var a=[];a=this.concatSlicedItems(t,a,i),this.generateListsRecursively(a,n)}else this._lists.some(function(t){if(JSON.stringify(t)===JSON.stringify(n))return t})||this._lists.splice(this._lists.length,0,n)},t}();e["a"]=i}}]);
//# sourceMappingURL=chunk-7f551fc3.020825b5.js.map