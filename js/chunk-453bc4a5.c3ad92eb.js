(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-453bc4a5"],{"04f4":function(a,t,n){"use strict";var e=n("629b"),i=n.n(e);i.a},"11d2":function(a,t,n){"use strict";var e=n("6a18"),i=n.n(e);i.a},"629b":function(a,t,n){},"63b5":function(a,t,n){"use strict";var e=function(){function a(){}return a.keyRegExps={iso:/\{ *iso\ *\}/g,name:/\{ *name\ *\}/g,kana:/\{ *kana\ *\}/g,roman:/\{ *roman\ *\}/g,capital:/\{ *capital\ *\}/g,capital_kana:/\{ *capital_kana\ *\}/g,capital_roman:/\{ *capital_roman\ *\}/g,region:/\{ *region\ *\}/g,region_kana:/\{ *region_kana\ *\}/g,region_roman:/\{ *region_roman\ *\}/g},a.prefectures=[{iso:"01",name:"北海道",kana:"ほっかいどう",roman:"Hokkaido",capital:"札幌",capital_kana:"さっぽろ",capital_roman:"Sapporo",region_index:0},{iso:"02",name:"青森県",kana:"あおもりけん",roman:"Aomori",capital:"青森",capital_kana:"あおもり",capital_roman:"Aomori",region_index:1},{iso:"03",name:"岩手県",kana:"いわてけん",roman:"Iwate",capital:"盛岡",capital_kana:"もりおか",capital_roman:"Morioka",region_index:1},{iso:"04",name:"宮城県",kana:"みやぎけん",roman:"Miyagi",capital:"仙台",capital_kana:"せんだい",capital_roman:"Sendai",region_index:1},{iso:"05",name:"秋田県",kana:"あきたけん",roman:"Akita",capital:"秋田",capital_kana:"あきた",capital_roman:"Akita",region_index:1},{iso:"06",name:"山形県",kana:"やまがたけん",roman:"Yamagata",capital:"山形",capital_kana:"やまがた",capital_roman:"Yamagata",region_index:1},{iso:"07",name:"福島県",kana:"ふくしまけん",roman:"Fukushima",capital:"福島",capital_kana:"ふくしま",capital_roman:"Fukushima",region_index:1},{iso:"08",name:"茨城県",kana:"いばらきけん",roman:"Ibaraki",capital:"水戸",capital_kana:"みと",capital_roman:"Mito",region_index:2},{iso:"09",name:"栃木県",kana:"とちぎけん",roman:"Tochigi",capital:"宇都宮",capital_kana:"うつのみや",capital_roman:"Utsunomiya",region_index:2},{iso:"10",name:"群馬県",kana:"ぐんまけん",roman:"Gumma",capital:"前橋",capital_kana:"まえばし",capital_roman:"Maebashi",region_index:2},{iso:"11",name:"埼玉県",kana:"さいたまけん",roman:"Saitama",capital:"さいたま",capital_kana:"さいたま",capital_roman:"Saitama",region_index:2},{iso:"12",name:"千葉県",kana:"ちばけん",roman:"Chiba",capital:"千葉",capital_kana:"ちば",capital_roman:"Chiba",region_index:2},{iso:"13",name:"東京都",kana:"とうきょうと",roman:"Tokyo",capital:"新宿",capital_kana:"しんじゅく",capital_roman:"Shinjuku",region_index:2},{iso:"14",name:"神奈川県",kana:"かながわけん",roman:"Kanagawa",capital:"横浜",capital_kana:"よこはま",capital_roman:"Yokohama",region_index:2},{iso:"15",name:"新潟県",kana:"にいがたけん",roman:"Niigata",capital:"新潟",capital_kana:"にいがた",capital_roman:"Niigata",region_index:3},{iso:"16",name:"富山県",kana:"とやまけん",roman:"Toyama",capital:"富山",capital_kana:"とやま",capital_roman:"Toyama",region_index:3},{iso:"17",name:"石川県",kana:"いしかわけん",roman:"Ishikawa",capital:"金沢",capital_kana:"かなざわ",capital_roman:"Kanazawa",region_index:3},{iso:"18",name:"福井県",kana:"ふくいけん",roman:"Fukui",capital:"福井",capital_kana:"ふくい",capital_roman:"Fukui",region_index:3},{iso:"19",name:"山梨県",kana:"やまなしけん",roman:"Yamanashi",capital:"甲府",capital_kana:"こうふ",capital_roman:"Kofu",region_index:3},{iso:"20",name:"長野県",kana:"ながのけん",roman:"Nagano",capital:"長野",capital_kana:"ながの",capital_roman:"Nagano",region_index:3},{iso:"21",name:"岐阜県",kana:"ぎふけん",roman:"Gifu",capital:"岐阜",capital_kana:"ぎふ",capital_roman:"Gifu",region_index:3},{iso:"22",name:"静岡県",kana:"しずおかけん",roman:"Shizuoka",capital:"静岡",capital_kana:"しずおか",capital_roman:"Shizuoka",region_index:3},{iso:"23",name:"愛知県",kana:"あいちけん",roman:"Aichi",capital:"名古屋",capital_kana:"なごや",capital_roman:"Nagoya",region_index:3},{iso:"24",name:"三重県",kana:"みえけん",roman:"Mie",capital:"津",capital_kana:"つ",capital_roman:"Tsu",region_index:4},{iso:"25",name:"滋賀県",kana:"しがけん",roman:"Shiga",capital:"大津",capital_kana:"おおつ",capital_roman:"Otsu",region_index:4},{iso:"26",name:"京都府",kana:"きょうとふ",roman:"Kyoto",capital:"京都",capital_kana:"きょうと",capital_roman:"Kyoto",region_index:4},{iso:"27",name:"大阪府",kana:"おおさかふ",roman:"Osaka",capital:"大阪",capital_kana:"おおさか",capital_roman:"Osaka",region_index:4},{iso:"28",name:"兵庫県",kana:"ひょうごけん",roman:"Hyogo",capital:"神戸",capital_kana:"こうべ",capital_roman:"Kobe",region_index:4},{iso:"29",name:"奈良県",kana:"ならけん",roman:"Nara",capital:"奈良",capital_kana:"なら",capital_roman:"Nara",region_index:4},{iso:"30",name:"和歌山県",kana:"わかやまけん",roman:"Wakayama",capital:"和歌山",capital_kana:"わかやま",capital_roman:"Wakayama",region_index:4},{iso:"31",name:"鳥取県",kana:"とっとりけん",roman:"Tottori",capital:"鳥取",capital_kana:"とっとり",capital_roman:"Tottori",region_index:5},{iso:"32",name:"島根県",kana:"とっとりけん",roman:"Shimane",capital:"松江",capital_kana:"まつえ",capital_roman:"Matsue",region_index:5},{iso:"33",name:"岡山県",kana:"おかやまけん",roman:"Okayama",capital:"岡山",capital_kana:"おかやま",capital_roman:"Okayama",region_index:5},{iso:"34",name:"広島県",kana:"ひろしまけん",roman:"Hiroshima",capital:"広島",capital_kana:"ひろしま",capital_roman:"Hiroshima",region_index:5},{iso:"35",name:"山口県",kana:"やまぐちけん",roman:"Yamaguchi",capital:"山口",capital_kana:"やまぐち",capital_roman:"Yamaguchi",region_index:5},{iso:"36",name:"徳島県",kana:"とくしまけん",roman:"Tokushima",capital:"徳島",capital_kana:"とくしま",capital_roman:"Tokushima",region_index:6},{iso:"37",name:"香川県",kana:"かがわけん",roman:"Kagawa",capital:"高松",capital_kana:"たかまつ",capital_roman:"Takamatsu",region_index:6},{iso:"38",name:"愛媛県",kana:"えひめけん",roman:"Ehime",capital:"松山",capital_kana:"まつやま",capital_roman:"Matsuyama",region_index:6},{iso:"39",name:"高知県",kana:"こうちけん",roman:"Kochi",capital:"高知",capital_kana:"こうち",capital_roman:"Kochi",region_index:6},{iso:"40",name:"福岡県",kana:"ふくおかけん",roman:"Fukuoka",capital:"福岡",capital_kana:"ふくおか",capital_roman:"Fukuoka",region_index:7},{iso:"41",name:"佐賀県",kana:"さがけん",roman:"Saga",capital:"佐賀",capital_kana:"さが",capital_roman:"Saga",region_index:7},{iso:"42",name:"長崎県",kana:"ながさきけん",roman:"Nagasaki",capital:"長崎",capital_kana:"ながさき",capital_roman:"Nagasaki",region_index:7},{iso:"43",name:"熊本県",kana:"くまもとけん",roman:"Kumamoto",capital:"熊本",capital_kana:"くまもと",capital_roman:"Kumamoto",region_index:7},{iso:"44",name:"大分県",kana:"おおいたけん",roman:"Oita",capital:"大分",capital_kana:"おおいた",capital_roman:"Oita",region_index:7},{iso:"45",name:"宮崎県",kana:"みやざきけん",roman:"Miyazaki",capital:"宮崎",capital_kana:"みやざき",capital_roman:"Miyazaki",region_index:7},{iso:"46",name:"鹿児島県",kana:"かごしまけん",roman:"Kagoshima",capital:"鹿児島",capital_kana:"かごしま",capital_roman:"Kagoshima",region_index:7},{iso:"47",name:"沖縄県",kana:"おきなわけん",roman:"Okinawa",capital:"那覇",capital_kana:"なは",capital_roman:"Naha",region_index:8}],a.regions=[{name:"北海道",kana:"ほっかいどう",roman:"Hokkaido"},{name:"東北",kana:"とうほく",roman:"Tohoku"},{name:"関東",kana:"かんとう",roman:"Kanto"},{name:"中部",kana:"ちゅうぶ",roman:"Chube"},{name:"近畿",kana:"きんき",roman:"Kinki"},{name:"中国",kana:"ちゅうごく",roman:"Chugoku"},{name:"四国",kana:"しこく",roman:"Shikoku"},{name:"九州",kana:"きゅうしゅう",roman:"Kyushu"},{name:"沖縄",kana:"おきなわ",roman:"Okinawa"}],a}();t["a"]=e},"6a18":function(a,t,n){},d0b9:function(a,t,n){"use strict";n.r(t);var e=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"prefecture-group"},[n("div",{staticClass:"card"},[n("h1",{staticClass:"page_title"},[a._v("地方別都道府県一覧整形")]),n("p",[a._v("地方別に都道府県一覧を好きなフォーマットで取得できます。")]),n("p",[a._v("より簡便な方法でフォーマットするには、"),n("router-link",{attrs:{to:"/prefecture/"}},[a._v("都道府県一覧整形")]),a._v("がお薦めです。")],1)]),n("div",{staticClass:"card"},[n("h2",{staticClass:"title"},[a._v("フォーマット")]),n("p",[a._v("1県分のフォーマットを作成することで、47都道府県のテキストデータを出力します。")]),a._m(0),a._m(1),a._m(2),n("div",{staticClass:"samples-wrapper"},[n("span",{staticClass:"samples-caption"},[a._v("サンプル:")]),a._v(" \n      "),n("select",{attrs:{name:"samples"},domProps:{value:a.dataSelectedSampleIndex},on:{change:function(t){return a.listenSampleSelect(t)}}},a._l(a.dataSamples,function(t,e){return n("option",{key:e,domProps:{value:e,innerHTML:a._s(t.description)}})}),0)]),n("div",{staticClass:"format-caption"},[a._v("地方・前")]),n("textarea",{staticClass:"format-before",attrs:{name:"formatBefore"},domProps:{value:a.dataFormat.before},on:{change:function(t){return a.listenOnInputFormatBefore(t)}}}),n("div",{staticClass:"format-caption"},[a._v("都道府県")]),n("textarea",{staticClass:"format-main",attrs:{name:"formatMain"},domProps:{value:a.dataFormat.main},on:{change:function(t){return a.listenOnInputFormatMain(t)}}}),n("div",{staticClass:"format-caption"},[a._v("地方・後")]),n("textarea",{staticClass:"format-after",attrs:{name:"formatAfter"},domProps:{value:a.dataFormat.after},on:{change:function(t){return a.listenOnInputFormatAfter(t)}}}),n("CButton",{attrs:{buttonText:a.dataButtonText},on:{clickButton:function(t){return a.outputText()}}})],1),n("div",{staticClass:"card"},[n("h2",{staticClass:"title"},[a._v("整形結果")]),n("p",[a._v("整形結果です。")]),n("textarea",{staticClass:"result result-prefectures",attrs:{readonly:"readonly"},domProps:{value:a.dataText}})])])},i=[function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"note"},[n("i",{staticClass:"fa fa-warning"}),a._v(" \n      フォーマット中に以下の変数を利用できます。\n      フォーマットには、少なくとも1つの変数が含まれている必要があります。\n      "),n("dl",{staticClass:"format-keys"},[n("dt",[a._v("{ iso }")]),n("dd",[a._v("都道府県コード、ISO/JIS番号")]),n("dt",[a._v("{ name }")]),n("dd",[a._v("都道府県")]),n("dt",[a._v("{ kana }")]),n("dd",[a._v("読み")]),n("dt",[a._v("{ roman }")]),n("dd",[a._v("ローマ字")]),n("dt",[a._v("{ capital }")]),n("dd",[a._v("都道府県庁所在地")]),n("dt",[a._v("{ capital_kana }")]),n("dd",[a._v("都道府県庁所在地読み")]),n("dt",[a._v("{ capital_roman }")]),n("dd",[a._v("都道府県庁所在地ローマ字")])]),n("dl",{staticClass:"format-keys"},[n("dt",[a._v("{ region }")]),n("dd",[a._v("地方")]),n("dt",[a._v("{ region_kana }")]),n("dd",[a._v("地方読み")]),n("dt",[a._v("{ region_roman }")]),n("dd",[a._v("地方ローマ字")])])])},function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("p",{staticClass:"note"},[n("i",{staticClass:"fa fa-warning"}),a._v(" \n      各県のデータごとに改行したい場合は、フォーマットで最後に改行を入れてください。\n    ")])},function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("p",{staticClass:"note"},[n("i",{staticClass:"fa fa-warning"}),a._v(" \n      テキスト欄には、地方・前、都道府県、地方・後の順にフォーマットを記述します。\n    ")])}],o=n("9ab4"),r=n("60a3"),s=n("d805"),c=n("63b5"),m=function(a){function t(){var t=null!==a&&a.apply(this,arguments)||this;return t.dataButtonText="出力",t.dataFormat={before:"",main:"",after:""},t.dataText="",t.dataSelectedSampleIndex=0,t.dataKeyRegExps=c["a"].keyRegExps,t.dataPrefectures=c["a"].prefectures,t.dataRegions=c["a"].regions,t.dataSamples=[{name:"none",description:"",format:{before:"",main:"",after:""}},{name:"select",description:"HTML文書のselectタグ用",format:{before:'<optgroup label="{ region }">\n',main:'<option label="{ name }" value="{ roman }">{ name }</option>\n',after:"</optgroup>\n"}},{name:"table",description:"HTML文書のtableタグ用(1)",format:{before:'<table class="prefectures">\n<caption>{ region }（{ region_kana }）</caption>\n',main:'<tr>\n    <td class="prefecture-iso">{ iso }</td>\n    <td class="prefecture-name">{ name }</td>\n    <td class="prefecture-kana">{ kana }</td>\n    <td class="prefecture-roman">{ roman }</td>\n    <td class="prefecture-capital">{ capital }</td>\n    <td class="prefecture-capital-kana">{ capital_kana }</td>\n    <td class="prefecture-capital-roman">{ capital_roman }</td>\n</tr>\n',after:"</table>\n"}},{name:"table2",description:"HTML文書のtableタグ用(2)",format:{before:'<tr>\n    <th colspan="7">{ region }</th>\n</tr>\n',main:'<tr>\n    <td class="prefecture-iso">{ iso }</td>\n    <td class="prefecture-name">{ name }</td>\n    <td class="prefecture-kana">{ kana }</td>\n    <td class="prefecture-roman">{ roman }</td>\n    <td class="prefecture-capital">{ capital }</td>\n    <td class="prefecture-capital-kana">{ capital_kana }</td>\n    <td class="prefecture-capital-roman">{ capital_roman }</td>\n</tr>\n',after:""}},{name:"markdown",description:"マークダウン記法",format:{before:"### {region}\n\n",main:"- { name }({ kana })\n",after:"\n"}}],t}return o["b"](t,a),t.prototype.listenOnInputFormatBefore=function(a){r["d"].set(this.dataFormat,"before",a.target.value)},t.prototype.listenOnInputFormatMain=function(a){r["d"].set(this.dataFormat,"main",a.target.value)},t.prototype.listenOnInputFormatAfter=function(a){r["d"].set(this.dataFormat,"after",a.target.value)},t.prototype.listenSampleSelect=function(a){var t=Number(a.target.value);this.dataFormat=this.dataSamples[t].format,this.dataSelectedSampleIndex=t},t.prototype.outputText=function(){if(this.dataText="",""!==this.dataFormat.before||""!==this.dataFormat.main||""!==this.dataFormat.after)for(var a=Object.values(this.dataKeyRegExps),t=0;t<a.length;t++)if(this.dataFormat.before.match(a[t])||this.dataFormat.main.match(a[t])||this.dataFormat.after.match(a[t])){this.formatPrefectures();break}},t.prototype.formatPrefectures=function(){for(var a="",t="",n="",e=-1,i=0;i<this.dataPrefectures.length;i++){var o=this.dataFormat.main;e<this.dataPrefectures[i].region_index&&(a+=n,t=this.dataFormat.before,t=t.replace(this.dataKeyRegExps.region,this.dataRegions[this.dataPrefectures[i].region_index].name),t=t.replace(this.dataKeyRegExps.region_kana,this.dataRegions[this.dataPrefectures[i].region_index].kana),t=t.replace(this.dataKeyRegExps.region_roman,this.dataRegions[this.dataPrefectures[i].region_index].roman),a+=t,n=this.dataFormat.after,n=n.replace(this.dataKeyRegExps.region,this.dataRegions[this.dataPrefectures[i].region_index].name),n=n.replace(this.dataKeyRegExps.region_kana,this.dataRegions[this.dataPrefectures[i].region_index].kana),n=n.replace(this.dataKeyRegExps.region_roman,this.dataRegions[this.dataPrefectures[i].region_index].roman),e++),o=o.replace(this.dataKeyRegExps.iso,this.dataPrefectures[i].iso),o=o.replace(this.dataKeyRegExps.name,this.dataPrefectures[i].name),o=o.replace(this.dataKeyRegExps.kana,this.dataPrefectures[i].kana),o=o.replace(this.dataKeyRegExps.roman,this.dataPrefectures[i].roman),o=o.replace(this.dataKeyRegExps.capital,this.dataPrefectures[i].capital),o=o.replace(this.dataKeyRegExps.capital_kana,this.dataPrefectures[i].capital_kana),o=o.replace(this.dataKeyRegExps.capital_roman,this.dataPrefectures[i].capital_roman),a+=o}a+=n,this.dataText=a},t=o["a"]([Object(r["a"])({components:{CButton:s["a"]},head:{title:{inner:"地方別都道府県一覧整形"}}})],t),t}(r["d"]),l=m,p=l,d=(n("11d2"),n("2877")),_=Object(d["a"])(p,e,i,!1,null,"7f7e5f91",null);t["default"]=_.exports},d805:function(a,t,n){"use strict";var e=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"c-button"},[n("button",{staticClass:"button ripple",attrs:{type:"button"},on:{click:function(t){return a.listenClick(t)}}},[a._v("\n    "+a._s(a.dataButtonText)+"\n    "),n("span",{directives:[{name:"show",rawName:"v-show",value:a.dataPosition,expression:"dataPosition"}],staticClass:"spread",style:a.dataPosition})])])},i=[],o=n("9ab4"),r=n("60a3"),s=function(a){function t(){var t=null!==a&&a.apply(this,arguments)||this;return t.dataButtonText=t.buttonText,t.dataPosition="",t}return o["b"](t,a),t.prototype.onValueChange=function(a,t){},t.prototype.emitClickButton=function(){},t.prototype.listenClick=function(a){var t=this,n=512,e=a.target,i=e.offsetWidth,o=e.getBoundingClientRect(),r=Number(a.pageX)-o.left-window.pageXOffset-i/2,s=Number(a.pageY)-o.top-window.pageYOffset-i/2,c="";c+="left:"+r+"px;",c+="top:"+s+"px;",c+="width:"+i+"px;",c+="height:"+i+"px;",this.dataPosition=c,setTimeout(function(){t.dataPosition=""},n),this.emitClickButton()},o["a"]([Object(r["c"])()],t.prototype,"buttonText",void 0),o["a"]([Object(r["e"])("dataPosition")],t.prototype,"onValueChange",null),o["a"]([Object(r["b"])("clickButton")],t.prototype,"emitClickButton",null),t=o["a"]([r["a"]],t),t}(r["d"]),c=s,m=c,l=(n("04f4"),n("2877")),p=Object(l["a"])(m,e,i,!1,null,"722269f6",null);t["a"]=p.exports}}]);
//# sourceMappingURL=chunk-453bc4a5.c3ad92eb.js.map