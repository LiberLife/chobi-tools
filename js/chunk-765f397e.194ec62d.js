(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-765f397e"],{"04f4":function(t,n,a){"use strict";var e=a("629b"),i=a.n(e);i.a},2358:function(t,n,a){"use strict";var e=function(){function t(){this._lists=[],this._specifiedCount=-1}return t.prototype.generateLists=function(t,n){if(void 0===n&&(n=this._specifiedCount),this._lists.length=0,this._lists.length=0,this._specifiedCount=n,this._specifiedCount<0&&(this._specifiedCount=1),0<this._specifiedCount){var a=[];this.generateListsRecursively(t,a)}return this._lists},t.prototype.generateListsRecursively=function(t,n){for(var a=[],e=0;e<t.length;e++)if(a=n.concat(t[e]),a.length<this._specifiedCount){var i=[];i=this.concatSlicedItems(t,i,e),this.generateListsRecursively(i,a)}else this._lists.some(function(t){if(JSON.stringify(t)===JSON.stringify(a))return t})||this._lists.splice(this._lists.length,0,a)},t}();n["a"]=e},"629b":function(t,n,a){},6380:function(t,n,a){},d805:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"c-button"},[a("button",{staticClass:"button ripple",attrs:{type:"button"},on:{click:function(n){return t.listenClick(n)}}},[t._v("\n    "+t._s(t.dataButtonText)+"\n    "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.dataPosition,expression:"dataPosition"}],staticClass:"spread",style:t.dataPosition})])])},i=[],s=a("9ab4"),o=a("60a3"),r=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.dataButtonText=n.buttonText,n.dataPosition="",n}return s["b"](n,t),n.prototype.onValueChange=function(t,n){},n.prototype.emitClickButton=function(){},n.prototype.listenClick=function(t){var n=this,a=512,e=t.target,i=e.offsetWidth,s=e.getBoundingClientRect(),o=Number(t.pageX)-s.left-window.pageXOffset-i/2,r=Number(t.pageY)-s.top-window.pageYOffset-i/2,c="";c+="left:"+o+"px;",c+="top:"+r+"px;",c+="width:"+i+"px;",c+="height:"+i+"px;",this.dataPosition=c,setTimeout(function(){n.dataPosition=""},a),this.emitClickButton()},s["a"]([Object(o["c"])()],n.prototype,"buttonText",void 0),s["a"]([Object(o["e"])("dataPosition")],n.prototype,"onValueChange",null),s["a"]([Object(o["b"])("clickButton")],n.prototype,"emitClickButton",null),n=s["a"]([o["a"]],n),n}(o["d"]),c=r,u=c,l=(a("04f4"),a("2877")),p=Object(l["a"])(u,e,i,!1,null,"722269f6",null);n["a"]=p.exports},d956:function(t,n,a){"use strict";var e=a("9ab4"),i=a("2358"),s=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e["b"](n,t),n.prototype.concatSlicedItems=function(t,n,a){return n.concat(t.slice(a+1))},n.calc=function(t,n){var a=0;if(0<t&&0<n){var e=t-n<n?t-n:n;a=1;for(var i=t-e+1;i<=t;i++)a*=i/e,e--}return a},n}(i["a"]);n["a"]=s},ee92:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"multi-combination-calc"},[a("div",{staticClass:"card"},[a("h1",{staticClass:"page_title"},[t._v("重複組み合わせの総数")]),t._m(0),a("p",[t._v("\n      重複組み合わせの一覧化については、「"),a("router-link",{attrs:{to:"/multi-combination/"}},[t._v("重複組み合わせ一覧")]),t._v("」を参照してください。\n    ")],1)]),a("div",{staticClass:"card"},[a("h2",{staticClass:"title"},[t._v("設定")]),a("p",[t._v("異なる要素数nと選んで並べる個数rを指定してください。")]),t._m(1),a("div",{staticClass:"multi-combination-formula"},[t._v("\n      n "),a("input",{key:t.dataNKey,staticClass:"num-input",attrs:{type:"text"},domProps:{value:t.numN},on:{input:function(n){return t.listenOnNInputed(n)}}}),a("span",{staticClass:"formula-notation"},[t._v("H")]),t._v("\n      r "),a("input",{key:t.dataRKey,staticClass:"num-input",attrs:{type:"text"},domProps:{value:t.numR},on:{input:function(n){return t.listenOnRInputed(n)}}})]),a("CButton",{attrs:{buttonText:t.dataButtonText},on:{clickButton:function(n){return t.calc()}}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.dataCount,expression:"dataCount"}],staticClass:"card"},[a("h2",{staticClass:"title"},[t._v("計算結果")]),a("p",[t._v("重複組み合わせの総数です。")]),a("ul",{staticClass:"result"},[a("li",[a("span",{staticClass:"result-key"},[t._v("総数")]),a("span",{domProps:{innerHTML:t._s(t.count.toLocaleString())}})])])]),t._m(2)])},i=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("p",[t._v("\n      n個の異なる要素からr個選んだ重複組み合わせの総数"),a("sub",[t._v("n")]),t._v("H"),a("sub",[t._v("r")]),t._v("を求めます。\n    ")])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("p",{staticClass:"note"},[a("i",{staticClass:"fa fa-warning"}),t._v(" \n      nを先に入力してください。\n    ")])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"card"},[a("h2",{staticClass:"title"},[t._v("用例")]),a("p",[t._v("\n      重複組み合わせは以下のような場面で利用できます。\n    ")]),a("ul",[a("li",[a("i",{staticClass:"fa fa-pencil note"}),t._v(" \n          ネタ切れなしのすし屋で30種類の品のなかから8皿食べる組み合わせ（n=30, r=8）。\n      ")]),a("li",[a("i",{staticClass:"fa fa-pencil note"}),t._v(" \n          10個のサイコロを振ったときの出目の組み合わせ（n=6, r=10）。\n      ")]),a("li",[a("i",{staticClass:"fa fa-pencil note"}),t._v(" \n          コイントスを5回実施して、表と裏が出た組み合わせ（n=2, r=5）。\n      ")]),a("li",[a("i",{staticClass:"fa fa-pencil note"}),t._v(" \n          0埋めされた4桁の正の整数の各桁順不同の組み合わせ（n=10, r=4）。これは、0から9という10個の異なるものから、重複を許して4個取り出すのと同義だから。\n        ")])])])}],s=a("9ab4"),o=a("60a3"),r=a("d805"),c=a("d956"),u=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.dataButtonText="計算",n.dataN=0,n.dataR=0,n.dataNKey=0,n.dataRKey=1,n.dataCount=0,n}return s["b"](n,t),n.prototype.created=function(){this.dataNKey=1*Math.random(),this.dataRKey=2*Math.random()},Object.defineProperty(n.prototype,"numN",{get:function(){return 0<this.dataN?this.dataN:""},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"numR",{get:function(){return 0<this.dataR?this.dataR:""},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"count",{get:function(){return 0<this.dataCount?this.dataCount:""},enumerable:!0,configurable:!0}),n.prototype.watchOnNChanged=function(t,n){this.arrangeR()},n.prototype.watchOnRChanged=function(t,n){this.arrangeR()},n.prototype.listenOnNInputed=function(t){var n=t.target.value;n.match(/^([0-9]|[1-9][0-9]+)$/g)?this.dataN=Number(n):this.dataN=0},n.prototype.listenOnRInputed=function(t){var n=t.target.value;n.match(/^([0-9]|[1-9][0-9]+)$/g)?this.dataR=Number(n):this.dataR=0},n.prototype.arrangeR=function(){0===this.dataN&&(this.dataR=0)},n.prototype.calc=function(){var t=this.dataN+this.dataR-1;this.dataCount=c["a"].calc(t,this.dataR)},s["a"]([Object(o["e"])("dataN")],n.prototype,"watchOnNChanged",null),s["a"]([Object(o["e"])("dataR")],n.prototype,"watchOnRChanged",null),n=s["a"]([Object(o["a"])({components:{CButton:r["a"]},head:{title:{inner:"重複組み合わせの総数"}}})],n),n}(o["d"]),l=u,p=l,f=(a("f2aa"),a("2877")),d=Object(f["a"])(p,e,i,!1,null,"4690cfc3",null);n["default"]=d.exports},f2aa:function(t,n,a){"use strict";var e=a("6380"),i=a.n(e);i.a}}]);
//# sourceMappingURL=chunk-765f397e.194ec62d.js.map