(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-631b56a6"],{"04f4":function(t,e,a){"use strict";var n=a("629b"),s=a.n(n);s.a},"0672":function(t,e,a){},"22d0":function(t,e,a){},4949:function(t,e,a){"use strict";var n=function(){function t(){}return Object.defineProperty(t,"errorMessage",{get:function(){return t._errorMessage},enumerable:!0,configurable:!0}),t.convertFromRpn=function(e){t._errorMessage="";for(var a="",n=[],s=0;s<e.length;s++)if(e[s].match(/^[0-9]+$/))n.push(e[s]);else{if(e[s].match(/^[0-9]+$/))n.push(e[s]);else if(2<=n.length){var r=n.pop(),i=n.pop();switch(e[s]){case"+":case"-":case"*":case"/":case"^":case"%":n.push("("+i+" "+e[s]+" "+r+")")}}else t._errorMessage="式が正しくありません。";if(""!==t._errorMessage)break}return""===t._errorMessage&&(1===n.length?a=n[0].replace(/(^\(|\)$)/g,""):t._errorMessage="式が正しくありません。"),a},t.calc=function(e){t._errorMessage="";for(var a=0,n=[],s=0;s<e.length;s++)if(e[s].match(/^[0-9]+$/))n.push(Number(e[s]));else{if(e[s].match(/^[0-9]+$/))n.push(Number(e[s]));else if(2<=n.length){var r=n.pop(),i=n.pop();switch(e[s]){case"+":n.push(i+r);break;case"-":n.push(i-r);break;case"*":n.push(i*r);break;case"/":0===r?t._errorMessage="エラーです。0除算が発生しました。":n.push(i/r);break;case"^":n.push(Math.pow(i,r));break;case"%":0===r?t._errorMessage="エラーです。0除算が発生しました。":n.push(i%r);break}}else t._errorMessage="式が正しくありません。";if(""!==t._errorMessage)break}return""===t._errorMessage&&(1===n.length?a=n.pop():t._errorMessage="式が正しくありません。"),a},t.analyzeFormula=function(t){for(var e=[],a="",n=0;n<t.length;n++){var s=t.charAt(n);s.match(/[\+\-\*\/\^\%]/)?(""!==a&&(e.push(a),a=""),e.push(s)):s.match(/[0-9]/)?a+=s:""!==a&&(e.push(a),a="")}return e},t._errorMessage="",t}();e["a"]=n},"629b":function(t,e,a){},aaef:function(t,e,a){"use strict";var n=function(){function t(){}return t.generateTreeDigits=function(e){t._totalDigitsLength=e;for(var a=[],n=1,s=e-1,r=n;r<=s;r++)a.push({name:e-1,operatorCount:r,accumulatedOperatorCount:r,treeDigits:null});return t.generateTreeDigitsRecursively(a,e),a},t.generateTreeDigitsRecursively=function(e,a){if(1<a)for(var n=a-1,s=n-1,r=0;r<e.length;r++){var i=[],o=t._totalDigitsLength-e[r].accumulatedOperatorCount-1,c=0;0<o&&o===s&&(c=1);for(var u=c;u<=o;u++)i.push({name:n-1,operatorCount:u,accumulatedOperatorCount:e[r].accumulatedOperatorCount+u,treeDigits:null}),t.generateTreeDigitsRecursively(i,n);e[r].treeDigits=i}},t.rollTreeDigits=function(e){return t._formulas.length=0,t.rollTreeDigitsRecursively(e,""),t._formulas},t.rollTreeDigitsRecursively=function(t,e){for(var a="#",n=0;n<t.length;n++)0===t[n].name?this._formulas.push(String(t[n].name)+a.repeat(t[n].operatorCount)+" "+e):this.rollTreeDigitsRecursively(t[n].treeDigits,String(t[n].name)+a.repeat(t[n].operatorCount)+" "+e)},t.splitEachFormula=function(t){for(var e=[],a=0;a<t.length;a++){var n=t[a].split("").filter(function(t){if(""!==t&&" "!==t)return t});e.push(n)}return e},t._totalDigitsLength=0,t._formulas=[],t}();e["a"]=n},adb4:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"c-selector-sample"},[t._v("\n  例: \n  "),a("select",{attrs:{name:"sample"},domProps:{value:t.dataSampleIndex},on:{change:function(e){return t.listenOnSelectSample(e)}}},t._l(t.dataSamples,function(e,n){return a("option",{key:n,domProps:{value:n,innerHTML:t._s(e.caption)}})}),0)])},s=[],r=a("9ab4"),i=a("60a3"),o=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.dataSamples=e.samples,e.dataSampleIndex=e.sampleIndex,e}return r["c"](e,t),e.prototype.emitSelectSample=function(){return this.dataSampleIndex},e.prototype.listenOnSelectSample=function(t){this.dataSampleIndex=Number(t.target.value),this.emitSelectSample()},r["b"]([Object(i["c"])()],e.prototype,"samples",void 0),r["b"]([Object(i["c"])()],e.prototype,"sampleIndex",void 0),r["b"]([Object(i["b"])("selectSample")],e.prototype,"emitSelectSample",null),e=r["b"]([i["a"]],e),e}(i["d"]),c=o,u=c,l=(a("c4ee"),a("2877")),p=Object(l["a"])(u,n,s,!1,null,"684531a8",null);e["a"]=p.exports},c4ee:function(t,e,a){"use strict";var n=a("22d0"),s=a.n(n);s.a},c932:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ten-puzzle"},[t._m(0),a("div",{staticClass:"card"},[a("h2",{staticClass:"title"},[t._v("数字の設定")]),a("p",[t._v("\n      4桁の数字を入力してください。\n      初期状態ではランダムな数字が入力されています。\n    ")]),a("p",{staticClass:"note"},[a("font-awesome-icon",{attrs:{icon:"exclamation-triangle",color:"#5ea1f2"}}),t._v(" \n      利用できる演算子は、加算「+」、減算「-」、乗算「*」、除算「/」です。\n    ")],1),a("p",{staticClass:"note"},[a("font-awesome-icon",{attrs:{icon:"exclamation-triangle",color:"#5ea1f2"}}),t._v(" \n      チェックを外して入れ替えを不許可にできます。\n    ")],1),a("div",{staticClass:"exchange"},[a("input",{attrs:{id:"can-exchange",type:"checkbox"},domProps:{checked:t.dataCanExchange},on:{change:function(e){return t.listenOnCheckbox(e)}}}),a("label",{attrs:{for:"can-exchange"}},[t._v("\n        各桁の入れ替えを許可\n      ")])]),a("p",{staticClass:"note"},[a("font-awesome-icon",{attrs:{icon:"coffee"}}),t._v(" \n      通常はちょうど10になるような式を探します。\n      好きな整数値を設定できます。\n      小さい数字にすると簡単な場合が多いです。\n    ")],1),a("CSelectorSample",{attrs:{samples:t.dataSamples,sampleIndex:t.dataSampleIndex},on:{selectSample:function(e){return t.listenOnSampleSelect(e)}}}),a("div",{staticClass:"puzzle-numbers"},[a("input",{staticClass:"base-number",attrs:{type:"text"},domProps:{value:t.dataBaseNumber},on:{change:function(e){return t.listenOnInputBaseNumber(e)}}}),t._v("\n      を元に\n      "),a("input",{staticClass:"target-number",attrs:{type:"text"},domProps:{value:t.dataTargetNumber},on:{change:function(e){return t.listenOnInputTargetNumber(e)}}}),t._v("\n      にする\n    ")]),a("CButton",{attrs:{buttonText:t.dataButtonText},on:{clickButton:function(e){return t.solve()}}})],1),a("div",{staticClass:"card"},[a("h2",{staticClass:"title"},[t._v("解答")]),a("p",[t._v("式の総数です。")]),a("div",{staticClass:"result"},[t._v("\n      "+t._s(t.dataFormulas.length)+"\n    ")]),0<t.dataFormulas.length?a("div",[a("p",[t._v("式の一覧です。")]),a("table",{staticClass:"table formula-table"},[t._m(1),t._l(t.dataFormulas,function(e,n){return a("tr",{key:n,staticClass:"definition"},[a("td",[t._v(t._s(e.rpn))]),a("td",[t._v(t._s(e.in))])])})],2)]):t._e()]),a("CChobiGame",{attrs:{linkTitle:t.dataLinkTitle}})],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("h1",{staticClass:"page_title"},[t._v("10パズル")]),a("p",[t._v("\n      4桁の数字をバラバラにして、各桁を自由な順序で、加算「+」、減算「-」、乗算「*」、除算「/」してちょうど10になるようにするパズルです。\n    ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("逆ポーランド記法")]),a("th",[t._v("中間記法")])])}],r=a("9ab4"),i=a("60a3"),o=a("8461"),c=a("d805"),u=a("adb4"),l=a("4949"),p=a("aaef"),h=a("e4dc"),f=a("eee6"),m=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.dataLinkTitle="関連リンク一覧",e.dataButtonText="解答",e.dataFormulas=[],e.dataBaseNumber="0000",e.dataTargetNumber="10",e.dataCanExchange=!0,e.dataSamples=[{name:"none",caption:"",content:","},{name:"question_00_01",caption:"0123（解なし）",content:"0123,10"},{name:"question_01_01",caption:"1158（解1つ）",content:"1158,10"},{name:"question_02_01",caption:"1116（解2つ、交換法則適用で1つ）",content:"1116,10"},{name:"question_02_02",caption:"1167（解2つ、交換法則適用で1つ）",content:"1167,10"},{name:"question_02_03",caption:"2289（解2つ、交換法則適用で1つ）",content:"2289,10"},{name:"question_02_04",caption:"3478（解2つ、交換法則適用で1つ）",content:"3478,10"},{name:"question_02_05",caption:"3577（解2つ、交換法則適用で1つ）",content:"3577,10"},{name:"question_03_01",caption:"6779（解3つ、交換法則適用で2つ）",content:"6779,10"},{name:"question_04_01",caption:"3466（4つの解、交換法則適用で1つ）",content:"3466,10"},{name:"question_diff_01",caption:"2459（除算を使う解が1つ）",content:"2459,10"},{name:"question_diff_02",caption:"5669（除算を2回使う解が2つ）",content:"5669,10"},{name:"question_diff_03",caption:"3667（減算だけを使う解が6個）",content:"3667,10"},{name:"question_121",caption:"5678（解121個）",content:"5678,10"},{name:"question_154",caption:"4688（解154個）",content:"4688,10"}],e.dataSampleIndex=0,e.dataAnswer="",e}return r["c"](e,t),e.prototype.created=function(){this.randamizeBaseNumber()},e.prototype.randamizeBaseNumber=function(){this.dataBaseNumber=String(this.padZero(Math.floor(1e4*Math.random()),4))},e.prototype.listenOnSampleSelect=function(t){var e=this.dataSamples[Number(t)].content.split(",");this.dataBaseNumber=e[0],this.dataTargetNumber=e[1]},e.prototype.listenOnInputBaseNumber=function(t){var e=t.target.value;e.match(/^[0-9]{4}$/g)?this.dataBaseNumber=e:this.dataBaseNumber=""},e.prototype.listenOnCheckbox=function(t){this.dataCanExchange=t.target.checked},e.prototype.listenOnInputTargetNumber=function(t){var e=t.target.value;e.match(/^(\+|\-)?([1-9][0-9]+|[0-9])(\.[0-9]+)?$/)?this.dataTargetNumber=e:this.dataTargetNumber="10"},e.prototype.solve=function(){this.dataFormulas.length=0;var t=[];if(""!==this.dataBaseNumber&&""!==this.dataTargetNumber)for(var e=this.dataCanExchange?(new h["a"]).generateLists(this.dataBaseNumber.split(""),this.dataBaseNumber.length):[this.dataBaseNumber.split("")],a=(new f["a"]).generateLists("+-*/".split(""),this.dataBaseNumber.length-1),n=p["a"].splitEachFormula(p["a"].rollTreeDigits(p["a"].generateTreeDigits(this.dataBaseNumber.length))),s=0;s<e.length;s++)for(var r=0;r<n.length;r++){for(var i=[],o=0;o<n[r].length;o++)i=n[r][o].match(/^[0-9]+$/)?i.concat(e[s][Number(n[r][o])]):i.concat(n[r][o]);for(var c=0;c<a.length;c++){for(var u=i.concat(),m=a[c].concat(),d=0;d<u.length;d++)"#"===u[d]&&(u[d]=m.shift());l["a"].calc(u)===Number(this.dataTargetNumber)&&""===l["a"].errorMessage&&t.push({rpn:u.join(" "),in:l["a"].convertFromRpn(u)})}}this.dataFormulas=t},e.prototype.padZero=function(t,e){return("0".repeat(e)+String(t)).slice(-e)},e=r["b"]([Object(i["a"])({components:{CChobiGame:o["a"],CButton:c["a"],CSelectorSample:u["a"]},head:{title:{inner:"10パズル"}}})],e),e}(i["d"]),d=m,g=d,v=(a("dfea"),a("2877")),_=Object(v["a"])(g,n,s,!1,null,"36207549",null);e["default"]=_.exports},d805:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"c-button"},[a("button",{staticClass:"button ripple",attrs:{type:"button"},on:{click:function(e){return t.listenClick(e)}}},[t._v("\n    "+t._s(t.dataButtonText)+"\n    "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.dataPosition,expression:"dataPosition"}],staticClass:"spread",style:t.dataPosition})])])},s=[],r=a("9ab4"),i=a("60a3"),o=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.dataButtonText=e.buttonText,e.dataPosition="",e}return r["c"](e,t),e.prototype.onValueChange=function(t,e){},e.prototype.emitClickButton=function(){},e.prototype.listenClick=function(t){var e=this,a=512,n=t.target,s=n.offsetWidth,r=n.getBoundingClientRect(),i=Number(t.pageX)-r.left-window.pageXOffset-s/2,o=Number(t.pageY)-r.top-window.pageYOffset-s/2,c="";c+="left:"+i+"px;",c+="top:"+o+"px;",c+="width:"+s+"px;",c+="height:"+s+"px;",this.dataPosition=c,setTimeout(function(){e.dataPosition=""},a),this.emitClickButton()},r["b"]([Object(i["c"])()],e.prototype,"buttonText",void 0),r["b"]([Object(i["e"])("dataPosition")],e.prototype,"onValueChange",null),r["b"]([Object(i["b"])("clickButton")],e.prototype,"emitClickButton",null),e=r["b"]([i["a"]],e),e}(i["d"]),c=o,u=c,l=(a("04f4"),a("2877")),p=Object(l["a"])(u,n,s,!1,null,"722269f6",null);e["a"]=p.exports},dfea:function(t,e,a){"use strict";var n=a("0672"),s=a.n(n);s.a},e4dc:function(t,e,a){"use strict";var n=a("9ab4"),s=a("e8ee"),r=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n["c"](e,t),e.prototype.concatSlicedItems=function(t,e,a){return e.concat(t.slice(0,a),t.slice(a+1))},e}(s["a"]);e["a"]=r},e8ee:function(t,e,a){"use strict";var n=function(){function t(){this._lists=[],this._specifiedCount=-1}return t.prototype.generateLists=function(t,e){if(void 0===e&&(e=this._specifiedCount),this._lists.length=0,this._lists.length=0,this._specifiedCount=e,this._specifiedCount<0&&(this._specifiedCount=1),0<this._specifiedCount){var a=[];this.generateListsRecursively(t,a)}return this._lists},t.prototype.generateListsRecursively=function(t,e){for(var a=[],n=0;n<t.length;n++)if(a=e.concat(t[n]),a.length<this._specifiedCount){var s=[];s=this.concatSlicedItems(t,s,n),this.generateListsRecursively(s,a)}else this._lists.some(function(t){if(JSON.stringify(t)===JSON.stringify(a))return t})||this._lists.splice(this._lists.length,0,a)},t}();e["a"]=n},eee6:function(t,e,a){"use strict";var n=a("9ab4"),s=a("e8ee"),r=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n["c"](e,t),e.prototype.concatSlicedItems=function(t,e,a){return e.concat(t.slice(0,a),t.slice(a))},e}(s["a"]);e["a"]=r}}]);
//# sourceMappingURL=chunk-631b56a6.4ee2708a.js.map