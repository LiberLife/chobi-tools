(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-247c6bd2"],{"768e":function(a,t,e){"use strict";e.r(t);var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"image-encoder"},[a._m(0),e("CImageEncoder")],1)},s=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"card"},[e("h1",{staticClass:"page_title"},[a._v("画像エンコーダ")]),e("p",[a._v("画像をエンコードし、HTML文書中に直接挿入できるようにします。")])])}],n=e("9ab4"),i=e("60a3"),c=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"c-image-encoder"},[e("div",{staticClass:"card"},[e("h2",{staticClass:"title"},[a._v("画像")]),e("p",[a._v("画像をドロップしてください。画像サイズが大きい場合、エンコードにもたつくことがあります。")]),a._m(0),e("div",{staticClass:"drop-area",attrs:{draggable:"true",value:a.dataImage},on:{dragover:function(t){return a.listenDragover(t)},drop:function(t){return a.listenDrop(t)}}},[a._v("ここに画像をドロップしてください。")]),e("p",{directives:[{name:"show",rawName:"v-show",value:a.dataAlert,expression:"dataAlert"}],staticClass:"note alert"},[e("i",{staticClass:"fa fa-warning"}),a._v(" "),e("span",{domProps:{innerHTML:a._s(a.dataAlert)}})])]),e("div",{directives:[{name:"show",rawName:"v-show",value:a.dataImage,expression:"dataImage"}],staticClass:"card"},[e("h2",{staticClass:"title"},[a._v("エンコード結果")]),e("p",[a._v('HTMLタグは「<img src="エンコード結果" alt="ファイル名" />」の形式で出力しています。')]),e("div",{staticClass:"display-area"},[e("textarea",{domProps:{value:a.dataImageTag}}),e("div",{staticClass:"image-wrapper"},[e("img",{directives:[{name:"show",rawName:"v-show",value:a.dataImageSrc,expression:"dataImageSrc"}],attrs:{src:a.dataImageSrc,alt:a.dataImageAlt}})])])])])},l=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("p",{staticClass:"note"},[e("i",{staticClass:"fa fa-coffee"}),a._v(" HTML文書中に直接挿入する場合は、予め、画像を可能な限り圧縮しておくとよいでしょう。")])}],o=function(a){function t(){var t=null!==a&&a.apply(this,arguments)||this;return t.dataImage=null,t.dataImageSrc="",t.dataImageAlt="",t.dataImageTag="",t.dataAlert="",t}return n["b"](t,a),t.prototype.watchOnImageDropped=function(a,t){this.encodeImage()},t.prototype.listenDragover=function(a){a.stopPropagation(),a.preventDefault(),a.dropEffect="copy"},t.prototype.listenDrop=function(a){a.stopPropagation(),a.preventDefault();var t=a.dataTransfer.files;t[0].type.match(/^image\//)?(this.dataAlert="",this.dataImage=t[0]):(this.dataAlert="画像ファイルをドロップしてください。",this.dataImage=null)},t.prototype.encodeImage=function(){var a=this;if(this.dataImage){var t=new FileReader;t.readAsDataURL(this.dataImage),t.onload=function(){var e;e=t.result,a.dataImageSrc=String(e),a.dataImageAlt=a.dataImage["name"],a.dataImageTag='<img src="'+a.dataImageSrc+'" alt="'+a.dataImageAlt+'" />'}}},n["a"]([Object(i["e"])("dataImage")],t.prototype,"watchOnImageDropped",null),t=n["a"]([i["a"]],t),t}(i["d"]),d=o,p=d,m=(e("e95e"),e("2877")),u=Object(m["a"])(p,c,l,!1,null,"11813d4a",null),g=u.exports,v=function(a){function t(){return null!==a&&a.apply(this,arguments)||this}return n["b"](t,a),t=n["a"]([Object(i["a"])({components:{CImageEncoder:g},head:{title:{inner:"画像エンコーダ"}}})],t),t}(i["d"]),f=v,h=f,I=Object(m["a"])(h,r,s,!1,null,"6afa8e03",null);t["default"]=I.exports},e95e:function(a,t,e){"use strict";var r=e("ed82"),s=e.n(r);s.a},ed82:function(a,t,e){}}]);
//# sourceMappingURL=chunk-247c6bd2.d36f7230.js.map