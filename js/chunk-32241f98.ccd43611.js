(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32241f98"],{"269f":function(e,t,a){"use strict";a.r(t);var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"html-encoder"},[e._m(0),a("CHtmlEncoder",{attrs:{ampCheck:e.ampCheck,tagCheck:e.tagCheck,quotCheck:e.quotCheck,aposCheck:e.aposCheck,orgText:e.orgText}})],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card"},[a("h1",{staticClass:"page_title"},[e._v("HTMLエンコーダ")]),a("p",[e._v("HTML文書中の特殊文字をエンコードします。")])])}],r=a("9ab4"),o=a("60a3"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"c-html-encoder"},[a("div",{staticClass:"setting_sections"},[a("div",{staticClass:"card setting_section"},[a("h2",{staticClass:"title"},[e._v("標準的な設定")]),a("p",[e._v("標準的な変更対象です。")]),a("ul",[a("li",[a("input",{attrs:{type:"checkbox",id:"check-amp",name:"check-amp"},domProps:{checked:e.dataAmpCheck},on:{change:function(t){return e.listenAmpCheck(t)}}}),a("label",{attrs:{for:"check-amp"}},[e._v("アンパサンド（&）")])]),a("li",[a("input",{attrs:{type:"checkbox",id:"check-tag",name:"check-tag"},domProps:{checked:e.dataTagCheck},on:{change:function(t){return e.listenTagCheck(t)}}}),a("label",{attrs:{for:"check-tag"}},[e._v("開始タグと終了タグ（<, >）")])]),a("li",[a("input",{attrs:{type:"checkbox",id:"check-quot",name:"check-quot"},domProps:{checked:e.dataQuotCheck},on:{change:function(t){return e.listenQuotCheck(t)}}}),a("label",{attrs:{for:"check-quot"}},[e._v('ダブル・クオテーション（"）')])]),a("li",[a("input",{attrs:{type:"checkbox",id:"check-apos",name:"check-apos"},domProps:{checked:e.dataAposCheck},on:{change:function(t){return e.listenAposCheck(t)}}}),a("label",{attrs:{for:"check-apos"}},[e._v("シングル・クオテーション（'）")])])])]),a("div",{staticClass:"card setting_section"},[a("h2",{staticClass:"title"},[e._v("追加の設定")]),a("p",[e._v("特殊な変更対象です。BladeやSmartyのようなテンプレートエンジンでの利用を想定しています。")]),a("ul",[a("li",[a("input",{attrs:{type:"checkbox",id:"check-sharp",name:"check-sharp"},domProps:{checked:e.dataSharpCheck},on:{change:function(t){return e.listenSharpCheck(t)}}}),a("label",{attrs:{for:"check-sharp"}},[e._v("シャープ（#）")])]),a("li",[a("input",{attrs:{type:"checkbox",id:"check-at",name:"check-at"},domProps:{checked:e.dataAtCheck},on:{change:function(t){return e.listenAtCheck(t)}}}),a("label",{attrs:{for:"check-at"}},[e._v("アットマーク（@）")])]),a("li",[a("input",{attrs:{type:"checkbox",id:"check-dollar",name:"check-dollar"},domProps:{checked:e.dataDollarCheck},on:{change:function(t){return e.listenDollarCheck(t)}}}),a("label",{attrs:{for:"check-dollar"}},[e._v("ドル（$）")])]),a("li",[a("input",{attrs:{type:"checkbox",id:"check-brace",name:"check-brace"},domProps:{checked:e.dataBraceCheck},on:{change:function(t){return e.listenBraceCheck(t)}}}),a("label",{attrs:{for:"check-brace"}},[e._v("開始波括弧と終了波括弧（{, }）")])]),a("li",[a("input",{attrs:{type:"checkbox",id:"check-question",name:"check-question"},domProps:{checked:e.dataQuestionCheck},on:{change:function(t){return e.listenQuestionCheck(t)}}}),a("label",{attrs:{for:"check-question"}},[e._v("疑問符（?）")])])])]),a("div",{staticClass:"card setting_section_newline"},[a("h2",{staticClass:"title"},[e._v("改行")]),a("p",[e._v("改行タグを追加します。")]),a("ul",[a("li",[a("input",{attrs:{type:"checkbox",id:"check-newline",name:"check-newline"},domProps:{checked:e.dataNewlineCheck},on:{change:function(t){return e.listenNewlineCheck(t)}}}),a("label",{attrs:{for:"check-newline"}},[e._v("改行タグ")]),a("span",{directives:[{name:"show",rawName:"v-show",value:e.dataNewlineCheck,expression:"dataNewlineCheck"}]},[e._v("  \n            "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.dataNewlineTag,expression:"dataNewlineTag"}],attrs:{type:"radio",id:"radio-newline-with-close",name:"radio-newline",value:"<br />"},domProps:{checked:e._q(e.dataNewlineTag,"<br />")},on:{change:[function(t){e.dataNewlineTag="<br />"},function(t){return e.listenNewlineSelect(t)}]}}),a("label",{attrs:{for:"radio-newline-with-close"}},[e._v("<br />")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.dataNewlineTag,expression:"dataNewlineTag"}],attrs:{type:"radio",id:"radio-newline-without-close",name:"radio-newline",value:"<br>"},domProps:{checked:e._q(e.dataNewlineTag,"<br>")},on:{change:[function(t){e.dataNewlineTag="<br>"},function(t){return e.listenNewlineSelect(t)}]}}),a("label",{attrs:{for:"radio-newline-without-close"}},[e._v("<br>")])])])])])]),a("div",{staticClass:"card"},[a("h2",{staticClass:"title"},[e._v("テキスト")]),a("p",[e._v("エンコードするテキストを入力してください。")]),a("div",[a("textarea",{attrs:{placeholder:"ここにHTML文書を入力してください。"},domProps:{value:e.dataOrgText},on:{input:function(t){return e.listenInput(t)}}})]),a("div",[a("textarea",{attrs:{readonly:"readonly"},domProps:{value:e.dataEncodedText}})])])])},i=[],p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.dataAmpCheck=t.ampCheck,t.dataTagCheck=t.tagCheck,t.dataAposCheck=void 0!==t.aposCheck&&t.aposCheck,t.dataQuotCheck=void 0!==t.quotCheck&&t.quotCheck,t.dataSharpCheck=void 0!==t.sharpCheck&&t.sharpCheck,t.dataAtCheck=void 0!==t.atCheck&&t.atCheck,t.dataDollarCheck=void 0!==t.dollarCheck&&t.dollarCheck,t.dataBraceCheck=void 0!==t.braceCheck&&t.braceCheck,t.dataQuestionCheck=void 0!==t.questionCheck&&t.questionCheck,t.dataNewlineCheck=void 0!==t.newlineCheck&&t.newlineCheck,t.dataNewlineTag="<br />",t.dataOrgText=t.orgText,t.dataEncodedText=void 0===t.encodedText?"":t.encodedText,t.dataTargetChars=[{targetChar:"amp",regExp:/\&/g,charReference:"&amp;"},{targetChar:"tag",regExp:/\</g,charReference:"&lt;"},{targetChar:"tag",regExp:/\>/g,charReference:"&gt;"},{targetChar:"apos",regExp:/\'/g,charReference:"&apos;"},{targetChar:"quot",regExp:/\"/g,charReference:"&quot;"},{targetChar:"sharp",regExp:/\#/g,charReference:"&#x23;"},{targetChar:"at",regExp:/\@/g,charReference:"&#x40;"},{targetChar:"dollar",regExp:/\$/g,charReference:"&#x24;"},{targetChar:"brace",regExp:/\{/g,charReference:"&#x7b;"},{targetChar:"brace",regExp:/\}/g,charReference:"&#x7d;"},{targetChar:"question",regExp:/\?/g,charReference:"&#x3f;"},{targetChar:"newline",regExp:/(\n|\r\n|\r)/g,charReference:t.dataNewlineTag}],t}return r["b"](t,e),t.prototype.emitEncodeText=function(){},t.prototype.watchOnAmpChecked=function(e,t){this.encodeText()},t.prototype.watchOnTagChecked=function(e,t){this.encodeText()},t.prototype.watchOnAposChecked=function(e,t){this.encodeText()},t.prototype.watchOnQuotChecked=function(e,t){this.encodeText()},t.prototype.watchOnSharpChecked=function(e,t){this.encodeText()},t.prototype.watchOnAtChecked=function(e,t){this.encodeText()},t.prototype.watchOnDollarChecked=function(e,t){this.encodeText()},t.prototype.watchOnBraceChecked=function(e,t){this.encodeText()},t.prototype.watchOnQuestionChecked=function(e,t){this.encodeText()},t.prototype.watchOnNewlineChecked=function(e,t){this.encodeText()},t.prototype.watchOnNewlineSelected=function(e,t){this.encodeText()},t.prototype.watchOnTextInputed=function(e,t){this.encodeText()},t.prototype.listenAmpCheck=function(e){this.dataAmpCheck=e.target.checked},t.prototype.listenTagCheck=function(e){this.dataTagCheck=e.target.checked},t.prototype.listenAposCheck=function(e){this.dataAposCheck=e.target.checked},t.prototype.listenQuotCheck=function(e){this.dataQuotCheck=e.target.checked},t.prototype.listenSharpCheck=function(e){this.dataSharpCheck=e.target.checked},t.prototype.listenAtCheck=function(e){this.dataAtCheck=e.target.checked},t.prototype.listenDollarCheck=function(e){this.dataDollarCheck=e.target.checked},t.prototype.listenBraceCheck=function(e){this.dataBraceCheck=e.target.checked},t.prototype.listenQuestionCheck=function(e){this.dataQuestionCheck=e.target.checked},t.prototype.listenNewlineCheck=function(e){this.dataNewlineCheck=e.target.checked},t.prototype.listenNewlineSelect=function(e){this.dataNewlineTag=e.target.value},t.prototype.listenInput=function(e){this.dataOrgText=e.target.value},t.prototype.encodeText=function(){var e=this,t=this.dataOrgText;this.dataTargetChars.forEach(function(a){switch(a.targetChar){case"amp":e.dataAmpCheck&&(t=t.replace(a.regExp,a.charReference));break;case"tag":e.dataTagCheck&&(t=t.replace(a.regExp,a.charReference));break;case"apos":e.dataAposCheck&&(t=t.replace(a.regExp,a.charReference));break;case"quot":e.dataQuotCheck&&(t=t.replace(a.regExp,a.charReference));break;case"sharp":e.dataSharpCheck&&(t=t.replace(a.regExp,a.charReference));break;case"at":e.dataAtCheck&&(t=t.replace(a.regExp,a.charReference));break;case"dollar":e.dataDollarCheck&&(t=t.replace(a.regExp,a.charReference));break;case"brace":e.dataBraceCheck&&(t=t.replace(a.regExp,a.charReference));break;case"question":e.dataQuestionCheck&&(t=t.replace(a.regExp,a.charReference));break;case"newline":e.dataNewlineCheck&&(t=t.replace(a.regExp,e.dataNewlineTag+"$1"));break}}),this.dataEncodedText=t},r["a"]([Object(o["c"])()],t.prototype,"ampCheck",void 0),r["a"]([Object(o["c"])()],t.prototype,"tagCheck",void 0),r["a"]([Object(o["c"])()],t.prototype,"quotCheck",void 0),r["a"]([Object(o["c"])()],t.prototype,"aposCheck",void 0),r["a"]([Object(o["c"])()],t.prototype,"sharpCheck",void 0),r["a"]([Object(o["c"])()],t.prototype,"atCheck",void 0),r["a"]([Object(o["c"])()],t.prototype,"dollarCheck",void 0),r["a"]([Object(o["c"])()],t.prototype,"braceCheck",void 0),r["a"]([Object(o["c"])()],t.prototype,"questionCheck",void 0),r["a"]([Object(o["c"])()],t.prototype,"newlineCheck",void 0),r["a"]([Object(o["c"])()],t.prototype,"orgText",void 0),r["a"]([Object(o["c"])()],t.prototype,"encodedText",void 0),r["a"]([Object(o["b"])("encode-text")],t.prototype,"emitEncodeText",null),r["a"]([Object(o["e"])("dataAmpCheck")],t.prototype,"watchOnAmpChecked",null),r["a"]([Object(o["e"])("dataTagCheck")],t.prototype,"watchOnTagChecked",null),r["a"]([Object(o["e"])("dataAposCheck")],t.prototype,"watchOnAposChecked",null),r["a"]([Object(o["e"])("dataQuotCheck")],t.prototype,"watchOnQuotChecked",null),r["a"]([Object(o["e"])("dataSharpCheck")],t.prototype,"watchOnSharpChecked",null),r["a"]([Object(o["e"])("dataAtCheck")],t.prototype,"watchOnAtChecked",null),r["a"]([Object(o["e"])("dataDollarCheck")],t.prototype,"watchOnDollarChecked",null),r["a"]([Object(o["e"])("dataBraceCheck")],t.prototype,"watchOnBraceChecked",null),r["a"]([Object(o["e"])("dataQuestionCheck")],t.prototype,"watchOnQuestionChecked",null),r["a"]([Object(o["e"])("dataNewlineCheck")],t.prototype,"watchOnNewlineChecked",null),r["a"]([Object(o["e"])("dataNewlineTag")],t.prototype,"watchOnNewlineSelected",null),r["a"]([Object(o["e"])("dataOrgText")],t.prototype,"watchOnTextInputed",null),t=r["a"]([o["a"]],t),t}(o["d"]),d=p,l=d,s=(a("3050"),a("2877")),k=Object(s["a"])(l,h,i,!1,null,"11b41ffe",null),u=k.exports,C=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.ampCheck=!0,t.tagCheck=!0,t.quotCheck=!0,t.aposCheck=!0,t.orgText="",t}return r["b"](t,e),t=r["a"]([Object(o["a"])({components:{CHtmlEncoder:u},head:{title:{inner:"HTMLエンコーダ"}}})],t),t}(o["d"]),g=C,f=g,b=Object(s["a"])(f,c,n,!1,null,"8f2ba1bc",null);t["default"]=b.exports},3050:function(e,t,a){"use strict";var c=a("7c8d"),n=a.n(c);n.a},"7c8d":function(e,t,a){}}]);
//# sourceMappingURL=chunk-32241f98.ccd43611.js.map