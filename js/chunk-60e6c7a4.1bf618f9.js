(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60e6c7a4"],{"04f4":function(t,n,e){"use strict";var a=e("629b"),i=e.n(a);i.a},5372:function(t,n,e){"use strict";var a=e("9ab4"),i=e("e8ee"),s=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return a["c"](n,t),n.prototype.concatSlicedItems=function(t,n,e){return n.concat(t.slice(e+1))},n.calc=function(t,n){var e=0;if(0<t&&0<n){var a=t-n<n?t-n:n;e=1;for(var i=t-a+1;i<=t;i++)e*=i/a,a--}return e},n}(i["a"]);n["a"]=s},"629b":function(t,n,e){},"8b5b":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"circular-permutation-calc"},[t._m(0),e("div",{staticClass:"card"},[e("h2",{staticClass:"title"},[t._v("設定")]),e("p",[t._v("異なる要素数nと選んで並べる個数rを指定してください。")]),e("p",{staticClass:"note"},[e("font-awesome-icon",{attrs:{icon:"exclamation-triangle",color:"#5ea1f2"}}),t._v(" \n      nを先に入力してください。\n    ")],1),e("p",{staticClass:"note"},[e("font-awesome-icon",{attrs:{icon:"exclamation-triangle",color:"#5ea1f2"}}),t._v(" \n      rはn以下に指定してください。\n    ")],1),e("div",{staticClass:"permutation-formula"},[t._v("\n      n "),e("input",{key:t.dataNKey,staticClass:"num-input",attrs:{type:"text"},domProps:{value:t.numN},on:{input:function(n){return t.listenOnNInputed(n)}}}),e("span",{staticClass:"formula-notation"},[t._v("C")]),t._v("\n      r "),e("input",{key:t.dataRKey,staticClass:"num-input",attrs:{type:"text"},domProps:{value:t.numR},on:{input:function(n){return t.listenOnRInputed(n)}}}),e("span",{staticClass:"formula-variable"},[t._v("･(r-1)!")])]),e("CButton",{attrs:{buttonText:t.dataButtonText},on:{clickButton:function(n){return t.calc()}}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.dataCount,expression:"dataCount"}],staticClass:"card"},[e("h2",{staticClass:"title"},[t._v("計算結果")]),e("p",[t._v("円順列の総数です。")]),e("ul",{staticClass:"result"},[e("li",[e("span",{staticClass:"result-key"},[t._v("総数")]),e("span",{domProps:{innerHTML:t._s(t.count.toLocaleString())}})])])]),e("div",{staticClass:"card"},[e("h2",{staticClass:"title"},[t._v("用例とトピック")]),e("p",[t._v("\n      円順列は以下のような場面で利用できます。\n    ")]),e("ul",[e("li",[e("font-awesome-icon",{attrs:{icon:"pencil-alt"}}),t._v(" 5人がそろって円卓に座る（n=5, r=5）。")],1),e("li",[e("font-awesome-icon",{attrs:{icon:"pencil-alt"}}),t._v(" 7人でレストランに行ったところ、円卓は5人掛けであった（n=7, r=5）。")],1),e("li",[e("font-awesome-icon",{attrs:{icon:"pencil-alt"}}),t._v(" 6人の中からいきものがかりを3人選んで、いきものがかりは日替わりの輪番で牛の世話をする（n=6, r=3）。")],1)]),e("p",{staticClass:"note"},[e("font-awesome-icon",{attrs:{icon:"coffee"}}),t._v(" \n      高校数学では、通常「円順列」と言えば、n個の異なる要素すべてを円に並べます。\n      ここでは、n個の異なる要素からr個選んで並べた円順列を想定しているため、高校数学の円順列はn=rの場合ということになります。\n    ")],1),e("p",{staticClass:"note"},[e("font-awesome-icon",{attrs:{icon:"coffee"}}),t._v(" \n      順列では、n個の異なる要素すべてを選んで並べた場合と(n-1)個の要素を選んで並べた場合の総数は同じです。\n      一方、円順列では、n個の異なる要素すべてを選んで並べた場合よりも、(n-1)個の要素を選んで並べた場合の方が総数が多くなります。\n    ")],1)]),e("CPermutation",{attrs:{linkTitle:t.dataLinkTitle}})],1)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card"},[e("h1",{staticClass:"page_title"},[t._v("円順列の総数")]),e("p",[t._v("\n      n個の異なる要素からr個選んで並べた円順列の総数"),e("sub",[t._v("n")]),t._v("C"),e("sub",[t._v("r")]),t._v("･(r-1)!を求めます。\n    ")])])}],s=e("9ab4"),o=e("60a3"),r=e("8655"),c=e("d805"),u=e("5372"),l=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.dataLinkTitle="関連リンク一覧",n.dataButtonText="計算",n.dataN=0,n.dataR=0,n.dataNKey=0,n.dataRKey=1,n.dataCount=0,n}return s["c"](n,t),n.prototype.created=function(){this.dataNKey=1*Math.random(),this.dataRKey=2*Math.random()},Object.defineProperty(n.prototype,"numN",{get:function(){return 0<this.dataN?this.dataN:""},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"numR",{get:function(){return 0<this.dataR?this.dataR:""},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"count",{get:function(){return 0<this.dataCount?this.dataCount:""},enumerable:!0,configurable:!0}),n.prototype.watchOnNChanged=function(t,n){this.arrangeR()},n.prototype.watchOnRChanged=function(t,n){this.arrangeR()},n.prototype.listenOnNInputed=function(t){var n=t.target.value;n.match(/^([0-9]|[1-9][0-9]+)$/g)?this.dataN=Number(n):this.dataN=0},n.prototype.listenOnRInputed=function(t){var n=t.target.value;n.match(/^([0-9]|[1-9][0-9]+)$/g)?this.dataR=Number(n):this.dataR=0},n.prototype.arrangeR=function(){this.dataN<this.dataR&&(this.dataR=this.dataN)},n.prototype.calc=function(){if(0<this.dataN&&0<this.dataR){for(var t=u["a"].calc(this.dataN,this.dataR),n=this.dataR-1;n>1;n--)t*=n;this.dataCount=t}},n.prototype.getKey=function(){return(new Date).getTime()},s["b"]([Object(o["e"])("dataN")],n.prototype,"watchOnNChanged",null),s["b"]([Object(o["e"])("dataR")],n.prototype,"watchOnRChanged",null),n=s["b"]([Object(o["a"])({components:{CPermutation:r["a"],CButton:c["a"]},head:{title:{inner:"円順列の総数"}}})],n),n}(o["d"]),p=l,d=p,f=(e("ee1d9"),e("2877")),h=Object(f["a"])(d,a,i,!1,null,"43fb7bbc",null);n["default"]=h.exports},"9cb0":function(t,n,e){},d805:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"c-button"},[e("button",{staticClass:"button ripple",attrs:{type:"button"},on:{click:function(n){return t.listenClick(n)}}},[t._v("\n    "+t._s(t.dataButtonText)+"\n    "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.dataPosition,expression:"dataPosition"}],staticClass:"spread",style:t.dataPosition})])])},i=[],s=e("9ab4"),o=e("60a3"),r=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.dataButtonText=n.buttonText,n.dataPosition="",n}return s["c"](n,t),n.prototype.onValueChange=function(t,n){},n.prototype.emitClickButton=function(){},n.prototype.listenClick=function(t){var n=this,e=512,a=t.target,i=a.offsetWidth,s=a.getBoundingClientRect(),o=Number(t.pageX)-s.left-window.pageXOffset-i/2,r=Number(t.pageY)-s.top-window.pageYOffset-i/2,c="";c+="left:"+o+"px;",c+="top:"+r+"px;",c+="width:"+i+"px;",c+="height:"+i+"px;",this.dataPosition=c,setTimeout(function(){n.dataPosition=""},e),this.emitClickButton()},s["b"]([Object(o["c"])()],n.prototype,"buttonText",void 0),s["b"]([Object(o["e"])("dataPosition")],n.prototype,"onValueChange",null),s["b"]([Object(o["b"])("clickButton")],n.prototype,"emitClickButton",null),n=s["b"]([o["a"]],n),n}(o["d"]),c=r,u=c,l=(e("04f4"),e("2877")),p=Object(l["a"])(u,a,i,!1,null,"722269f6",null);n["a"]=p.exports},e8ee:function(t,n,e){"use strict";var a=function(){function t(){this._lists=[],this._specifiedCount=-1}return t.prototype.generateLists=function(t,n){if(void 0===n&&(n=this._specifiedCount),this._lists.length=0,this._lists.length=0,this._specifiedCount=n,this._specifiedCount<0&&(this._specifiedCount=1),0<this._specifiedCount){var e=[];this.generateListsRecursively(t,e)}return this._lists},t.prototype.generateListsRecursively=function(t,n){for(var e=[],a=0;a<t.length;a++)if(e=n.concat(t[a]),e.length<this._specifiedCount){var i=[];i=this.concatSlicedItems(t,i,a),this.generateListsRecursively(i,e)}else this._lists.some(function(t){if(JSON.stringify(t)===JSON.stringify(e))return t})||this._lists.splice(this._lists.length,0,e)},t}();n["a"]=a},ee1d9:function(t,n,e){"use strict";var a=e("9cb0"),i=e.n(a);i.a}}]);
//# sourceMappingURL=chunk-60e6c7a4.1bf618f9.js.map