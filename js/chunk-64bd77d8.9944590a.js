(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64bd77d8"],{"04f4":function(t,n,e){"use strict";var a=e("629b"),i=e.n(a);i.a},5372:function(t,n,e){"use strict";var a=e("9ab4"),i=e("e8ee"),s=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return a["c"](n,t),n.prototype.concatSlicedItems=function(t,n,e){return n.concat(t.slice(e+1))},n.calc=function(t,n){var e=0;if(0<t&&0<n){var a=t-n<n?t-n:n;e=1;for(var i=t-a+1;i<=t;i++)e*=i/a,a--}return e},n}(i["a"]);n["a"]=s},"629b":function(t,n,e){},"71b8":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"combination-calc"},[t._m(0),e("div",{staticClass:"card"},[e("h2",{staticClass:"title"},[t._v("設定")]),e("p",[t._v("異なる要素数nと選んで並べる個数rを指定してください。")]),e("p",{staticClass:"note"},[e("font-awesome-icon",{attrs:{icon:"exclamation-triangle",color:"#5ea1f2"}}),t._v(" \n      nを先に入力してください。\n    ")],1),e("p",{staticClass:"note"},[e("font-awesome-icon",{attrs:{icon:"exclamation-triangle",color:"#5ea1f2"}}),t._v(" \n      rはn以下に指定してください。\n    ")],1),e("div",{staticClass:"combination-formula"},[t._v("\n      n "),e("input",{key:t.dataNKey,staticClass:"num-input",attrs:{type:"text"},domProps:{value:t.numN},on:{input:function(n){return t.listenOnNInputed(n)}}}),e("span",{staticClass:"formula-notation"},[t._v("C")]),t._v("\n      r "),e("input",{key:t.dataRKey,staticClass:"num-input",attrs:{type:"text"},domProps:{value:t.numR},on:{input:function(n){return t.listenOnRInputed(n)}}})]),e("CButton",{attrs:{buttonText:t.dataButtonText},on:{clickButton:function(n){return t.calc()}}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.dataCount,expression:"dataCount"}],staticClass:"card"},[e("h2",{staticClass:"title"},[t._v("計算結果")]),e("p",[t._v("組み合わせの総数です。")]),e("ul",{staticClass:"result"},[e("li",[e("span",{staticClass:"result-key"},[t._v("総数")]),e("span",{domProps:{innerHTML:t._s(t.count.toLocaleString())}})])])]),e("div",{staticClass:"card"},[e("h2",{staticClass:"title"},[t._v("用例")]),e("p",[t._v("\n      組み合わせは以下のような場面で利用できます。\n    ")]),e("ul",[e("li",[e("font-awesome-icon",{attrs:{icon:"pencil-alt"}}),t._v(" \n        色の異なる5個のボールから3個を選ぶ（n=5, r=3）。\n      ")],1),e("li",[e("font-awesome-icon",{attrs:{icon:"pencil-alt"}}),t._v(" \n        5人の中からいきものがかりを2人選ぶ（n=5, r=2）。\n      ")],1)])]),e("CPermutation",{attrs:{linkTitle:t.dataLinkTitle}})],1)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card"},[e("h1",{staticClass:"page_title"},[t._v("組み合わせの総数")]),e("p",[t._v("\n      n個の異なる要素からr個選んだ組み合わせの総数"),e("sub",[t._v("n")]),t._v("C"),e("sub",[t._v("r")]),t._v("を求めます。\n    ")])])}],s=e("9ab4"),o=e("60a3"),r=e("8655"),c=e("d805"),u=e("5372"),l=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.dataLinkTitle="関連リンク一覧",n.dataButtonText="計算",n.dataN=0,n.dataR=0,n.dataNKey=0,n.dataRKey=1,n.dataCount=0,n}return s["c"](n,t),n.prototype.created=function(){this.dataNKey=1*Math.random(),this.dataRKey=2*Math.random()},Object.defineProperty(n.prototype,"numN",{get:function(){return 0<this.dataN?this.dataN:""},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"numR",{get:function(){return 0<this.dataR?this.dataR:""},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"count",{get:function(){return 0<this.dataCount?this.dataCount:""},enumerable:!0,configurable:!0}),n.prototype.watchOnNChanged=function(t,n){this.arrangeR()},n.prototype.watchOnRChanged=function(t,n){this.arrangeR()},n.prototype.listenOnNInputed=function(t){var n=t.target.value;n.match(/^([0-9]|[1-9][0-9]+)$/g)?this.dataN=Number(n):this.dataN=0},n.prototype.listenOnRInputed=function(t){var n=t.target.value;n.match(/^([0-9]|[1-9][0-9]+)$/g)?this.dataR=Number(n):this.dataR=0},n.prototype.arrangeR=function(){this.dataN<this.dataR&&(this.dataR=this.dataN)},n.prototype.calc=function(){this.dataCount=u["a"].calc(this.dataN,this.dataR)},s["b"]([Object(o["f"])("dataN")],n.prototype,"watchOnNChanged",null),s["b"]([Object(o["f"])("dataR")],n.prototype,"watchOnRChanged",null),n=s["b"]([Object(o["a"])({components:{CPermutation:r["a"],CButton:c["a"]},head:{title:{inner:"組み合わせの総数"}}})],n),n}(o["e"]),p=l,d=p,f=(e("860c"),e("2877")),h=Object(f["a"])(d,a,i,!1,null,"c642109c",null);n["default"]=h.exports},"860c":function(t,n,e){"use strict";var a=e("8749"),i=e.n(a);i.a},8749:function(t,n,e){},d805:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"c-button"},[e("button",{staticClass:"button ripple",attrs:{type:"button"},on:{click:function(n){return t.listenClick(n)}}},[t._v("\n    "+t._s(t.dataButtonText)+"\n    "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.dataPosition,expression:"dataPosition"}],staticClass:"spread",style:t.dataPosition})])])},i=[],s=e("9ab4"),o=e("60a3"),r=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.dataButtonText=n.buttonText,n.dataPosition="",n}return s["c"](n,t),n.prototype.onValueChange=function(t,n){},n.prototype.emitClickButton=function(){},n.prototype.listenClick=function(t){var n=this,e=512,a=t.target,i=a.offsetWidth,s=a.getBoundingClientRect(),o=Number(t.pageX)-s.left-window.pageXOffset-i/2,r=Number(t.pageY)-s.top-window.pageYOffset-i/2,c="";c+="left:"+o+"px;",c+="top:"+r+"px;",c+="width:"+i+"px;",c+="height:"+i+"px;",this.dataPosition=c,setTimeout(function(){n.dataPosition=""},e),this.emitClickButton()},s["b"]([Object(o["d"])()],n.prototype,"buttonText",void 0),s["b"]([Object(o["f"])("dataPosition")],n.prototype,"onValueChange",null),s["b"]([Object(o["b"])("clickButton")],n.prototype,"emitClickButton",null),n=s["b"]([o["a"]],n),n}(o["e"]),c=r,u=c,l=(e("04f4"),e("2877")),p=Object(l["a"])(u,a,i,!1,null,"722269f6",null);n["a"]=p.exports},e8ee:function(t,n,e){"use strict";var a=function(){function t(){this._lists=[],this._specifiedCount=-1}return t.prototype.generateLists=function(t,n){if(void 0===n&&(n=this._specifiedCount),this._lists.length=0,this._lists.length=0,this._specifiedCount=n,this._specifiedCount<0&&(this._specifiedCount=1),0<this._specifiedCount){var e=[];this.generateListsRecursively(t,e)}return this._lists},t.prototype.generateListsRecursively=function(t,n){for(var e=[],a=0;a<t.length;a++)if(e=n.concat(t[a]),e.length<this._specifiedCount){var i=[];i=this.concatSlicedItems(t,i,a),this.generateListsRecursively(i,e)}else this._lists.some(function(t){if(JSON.stringify(t)===JSON.stringify(e))return t})||this._lists.splice(this._lists.length,0,e)},t}();n["a"]=a}}]);
//# sourceMappingURL=chunk-64bd77d8.9944590a.js.map