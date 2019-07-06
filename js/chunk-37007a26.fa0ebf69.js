(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37007a26"],{"04f4":function(t,n,a){"use strict";var e=a("629b"),i=a.n(e);i.a},2358:function(t,n,a){"use strict";var e=function(){function t(){this._lists=[],this._specifiedCount=-1}return t.prototype.generateLists=function(t,n){if(void 0===n&&(n=this._specifiedCount),this._lists.length=0,this._lists.length=0,this._specifiedCount=n,this._specifiedCount<0&&(this._specifiedCount=1),0<this._specifiedCount){var a=[];this.generateListsRecursively(t,a)}return this._lists},t.prototype.generateListsRecursively=function(t,n){for(var a=[],e=0;e<t.length;e++)if(a=n.concat(t[e]),a.length<this._specifiedCount){var i=[];i=this.concatSlicedItems(t,i,e),this.generateListsRecursively(i,a)}else this._lists.some(function(t){if(JSON.stringify(t)===JSON.stringify(a))return t})||this._lists.splice(this._lists.length,0,a)},t}();n["a"]=e},"46fb":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"circular-permutation-calc"},[a("div",{staticClass:"card"},[a("h1",{staticClass:"page_title"},[t._v("円順列の総数")]),t._m(0),a("p",[t._v("\n      円順列の一覧化については、「"),a("router-link",{attrs:{to:"/circular-permutation/"}},[t._v("円順列一覧")]),t._v("」を参照してください。\n    ")],1)]),a("div",{staticClass:"card"},[a("h2",{staticClass:"title"},[t._v("設定")]),a("p",[t._v("異なる要素数nと選んで並べる個数rを指定してください。")]),t._m(1),t._m(2),a("div",{staticClass:"permutation-formula"},[t._v("\n      n "),a("input",{key:t.dataNKey,staticClass:"num-input",attrs:{type:"text"},domProps:{value:t.numN},on:{input:function(n){return t.listenOnNInputed(n)}}}),a("span",{staticClass:"formula-notation"},[t._v("C")]),t._v("\n      r "),a("input",{key:t.dataRKey,staticClass:"num-input",attrs:{type:"text"},domProps:{value:t.numR},on:{input:function(n){return t.listenOnRInputed(n)}}}),a("span",{staticClass:"formula-variable"},[t._v("･r(r-1)!")])]),a("CButton",{attrs:{buttonText:t.dataButtonText},on:{clickButton:function(n){return t.calc()}}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.dataCount,expression:"dataCount"}],staticClass:"card"},[a("h2",{staticClass:"title"},[t._v("計算結果")]),a("p",[t._v("円順列の総数です。")]),a("ul",{staticClass:"result"},[a("li",[a("span",{staticClass:"result-key"},[t._v("総数")]),a("span",{domProps:{innerHTML:t._s(t.count.toLocaleString())}})])])]),t._m(3)])},i=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("p",[t._v("\n      n個の異なる要素からr個選んで並べた円順列の総数"),a("sub",[t._v("n")]),t._v("C"),a("sub",[t._v("r")]),t._v("･(r-1)!を求めます。\n    ")])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("p",{staticClass:"note"},[a("i",{staticClass:"fa fa-warning"}),t._v(" \n      nを先に入力してください。\n    ")])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("p",{staticClass:"note"},[a("i",{staticClass:"fa fa-warning"}),t._v(" \n      rはn以下に指定してください。\n    ")])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"card"},[a("h2",{staticClass:"title"},[t._v("用例とトピック")]),a("p",[t._v("\n      円順列は以下のような場面で利用できます。\n    ")]),a("ul",[a("li",[a("i",{staticClass:"fa fa-pencil note"}),t._v(" 5人がそろって円卓に座る（n=5, r=5）。")]),a("li",[a("i",{staticClass:"fa fa-pencil note"}),t._v(" 7人でレストランに行ったところ、円卓は5人掛けであった（n=7, r=5）。")]),a("li",[a("i",{staticClass:"fa fa-pencil note"}),t._v(" 6人の中からいきものがかりを3人選んで、いきものがかりは日替わりで1ヵ月間順番に牛の世話をする（n=6, r=3）。")])]),a("p",{staticClass:"note"},[a("i",{staticClass:"fa fa-coffee"}),t._v(" \n      高校数学では、通常「円順列」と言えば、n個の異なる要素すべてを円に並べます。\n      ここでは、n個の異なる要素からr個選んで並べた円順列を想定しているため、高校数学の円順列はn=rの場合ということになります。\n    ")]),a("p",{staticClass:"note"},[a("i",{staticClass:"fa fa-coffee"}),t._v(" \n      順列では、n個の異なる要素すべてを選んで並べた場合と(n-1)個の要素を選んで並べた場合の総数は同じです。\n      一方、円順列では、n個の異なる要素すべてを選んで並べた場合よりも、(n-1)個の要素を選んで並べた場合の方が総数が多くなります。\n    ")])])}],s=a("9ab4"),o=a("60a3"),r=a("d805"),c=a("d956"),u=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.dataButtonText="計算",n.dataN=0,n.dataR=0,n.dataNKey=0,n.dataRKey=1,n.dataCount=0,n}return s["b"](n,t),n.prototype.created=function(){this.dataNKey=1*Math.random(),this.dataRKey=2*Math.random()},Object.defineProperty(n.prototype,"numN",{get:function(){return 0<this.dataN?this.dataN:""},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"numR",{get:function(){return 0<this.dataR?this.dataR:""},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"count",{get:function(){return 0<this.dataCount?this.dataCount:""},enumerable:!0,configurable:!0}),n.prototype.watchOnNChanged=function(t,n){this.arrangeR()},n.prototype.watchOnRChanged=function(t,n){this.arrangeR()},n.prototype.listenOnNInputed=function(t){var n=t.target.value;n.match(/^([0-9]|[1-9][0-9]+)$/g)?this.dataN=Number(n):this.dataN=0},n.prototype.listenOnRInputed=function(t){var n=t.target.value;n.match(/^([0-9]|[1-9][0-9]+)$/g)?this.dataR=Number(n):this.dataR=0},n.prototype.arrangeR=function(){this.dataN<this.dataR&&(this.dataR=this.dataN)},n.prototype.calc=function(){if(0<this.dataN&&0<this.dataR){for(var t=c["a"].calc(this.dataN,this.dataR),n=this.dataR-1;n>1;n--)t*=n;this.dataCount=t}},n.prototype.getKey=function(){return(new Date).getTime()},s["a"]([Object(o["e"])("dataN")],n.prototype,"watchOnNChanged",null),s["a"]([Object(o["e"])("dataR")],n.prototype,"watchOnRChanged",null),n=s["a"]([Object(o["a"])({components:{CButton:r["a"]},head:{title:{inner:"円順列の総数"}}})],n),n}(o["d"]),l=u,p=l,f=(a("91c6"),a("2877")),d=Object(f["a"])(p,e,i,!1,null,"7064e469",null);n["default"]=d.exports},"629b":function(t,n,a){},"91c6":function(t,n,a){"use strict";var e=a("c37d"),i=a.n(e);i.a},c37d:function(t,n,a){},d805:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"c-button"},[a("button",{staticClass:"button ripple",attrs:{type:"button"},on:{click:function(n){return t.listenClick(n)}}},[t._v("\n    "+t._s(t.dataButtonText)+"\n    "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.dataPosition,expression:"dataPosition"}],staticClass:"spread",style:t.dataPosition})])])},i=[],s=a("9ab4"),o=a("60a3"),r=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.dataButtonText=n.buttonText,n.dataPosition="",n}return s["b"](n,t),n.prototype.onValueChange=function(t,n){},n.prototype.emitClickButton=function(){},n.prototype.listenClick=function(t){var n=this,a=512,e=t.target,i=e.offsetWidth,s=e.getBoundingClientRect(),o=Number(t.pageX)-s.left-window.pageXOffset-i/2,r=Number(t.pageY)-s.top-window.pageYOffset-i/2,c="";c+="left:"+o+"px;",c+="top:"+r+"px;",c+="width:"+i+"px;",c+="height:"+i+"px;",this.dataPosition=c,setTimeout(function(){n.dataPosition=""},a),this.emitClickButton()},s["a"]([Object(o["c"])()],n.prototype,"buttonText",void 0),s["a"]([Object(o["e"])("dataPosition")],n.prototype,"onValueChange",null),s["a"]([Object(o["b"])("clickButton")],n.prototype,"emitClickButton",null),n=s["a"]([o["a"]],n),n}(o["d"]),c=r,u=c,l=(a("04f4"),a("2877")),p=Object(l["a"])(u,e,i,!1,null,"722269f6",null);n["a"]=p.exports},d956:function(t,n,a){"use strict";var e=a("9ab4"),i=a("2358"),s=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e["b"](n,t),n.prototype.concatSlicedItems=function(t,n,a){return n.concat(t.slice(a+1))},n.calc=function(t,n){var a=0;if(0<t&&0<n){var e=t-n<n?t-n:n;a=1;for(var i=t-e+1;i<=t;i++)a*=i/e,e--}return a},n}(i["a"]);n["a"]=s}}]);
//# sourceMappingURL=chunk-37007a26.fa0ebf69.js.map