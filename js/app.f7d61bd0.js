(function(t){function e(e){for(var a,r,s=e[0],o=e[1],u=e[2],l=0,d=[];l<s.length;l++)r=s[l],c[r]&&d.push(c[r][0]),c[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==c[s]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},c={app:0},i=[];function s(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-20e27be9":"467d55da","chunk-17711101":"abd5f0f2","chunk-3984865b":"b9e5191b","chunk-fe33e0e2":"1cd30488","chunk-2d0bd977":"4f5ef103","chunk-d6a59f5a":"96ae8b4b"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n={"chunk-17711101":1,"chunk-3984865b":1,"chunk-fe33e0e2":1,"chunk-d6a59f5a":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-20e27be9":"31d6cfe0","chunk-17711101":"626d914f","chunk-3984865b":"d04188ff","chunk-fe33e0e2":"4b3b5874","chunk-2d0bd977":"31d6cfe0","chunk-d6a59f5a":"8a251926"}[t]+".css",c=o.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===c))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===a||l===c)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||c,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.request=a,delete r[t],p.parentNode.removeChild(p),n(i)},p.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){r[t]=0}));var a=c[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,n){a=c[t]=[e,n]});e.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=s(t),u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=c[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,n[1](i)}c[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"41b8":function(t,e,n){"use strict";var a=n("e2d5"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("5c07"),n("53da"),n("2556"),n("d0f8");var a=n("6e6d"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("tab-nav"),n("router-view"),n("MiniPlayer")],1)},c=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:t.logoSrc,alt:""}}),n("h1",[t._v("vue-music")])])])},s=[],o=n("9d64"),u=n.n(o),l={data:function(){return{logoSrc:u.a}},methods:{},components:{}},d=l,p=(n("750a"),n("17cc")),f=Object(p["a"])(d,i,s,!1,null,"e8eea650",null),h=f.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-nav"},[n("router-link",{attrs:{"exact-active-class":"current",to:"/"}},[t._v("推荐")]),n("router-link",{attrs:{"exact-active-class":"current",to:"/singer"}},[t._v("歌手")]),n("router-link",{attrs:{"exact-active-class":"current",to:"/search"}},[t._v("搜索")])],1)},m=[],v={data:function(){return{}},methods:{},components:{}},b=v,y=(n("a1f9"),Object(p["a"])(b,g,m,!1,null,"7475adbc",null)),A=y.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.curSong?n("div",{staticClass:"mini-player",on:{click:t.goPlayPage}},[n("div",{staticClass:"mini-player-con"},[n("div",{staticClass:"thumb",class:["playing"==t.playState?"playing-run":""]},[n("img",{attrs:{src:"https://y.gtimg.cn/music/photo_new/T002R90x90M000"+t.curSong.albummid+".jpg?max_age=2592000",alt:""}})]),n("div",{staticClass:"song-info"},[n("h3",[t._v("歌曲名称歌曲名称歌曲名称歌曲名称歌曲名称")]),n("span",{domProps:{textContent:t._s(t.curSong.singer[0].name)}})]),n("div",{staticClass:"opts",on:{click:function(t){t.stopPropagation()}}},[n("a",{staticClass:"play-pused",class:["playing"==t.playState?"pused":"play"],attrs:{href:"javascript:"},on:{click:function(e){"playing"==t.playState?t.paused():t.play()}}}),n("a",{staticClass:"list",attrs:{href:"javascript:"},on:{click:t.openList}})])]),n("div",{staticClass:"song-list",class:[t.listState?"open":"close"],on:{click:function(e){return e.stopPropagation(),t.closeList(e)}}},[n("div",{staticClass:"list-operator",on:{click:function(t){t.stopPropagation()}}},[t._m(0),n("a",{staticClass:"del",attrs:{href:"javascript:"}})]),n("ul",{staticClass:"songs",on:{click:function(t){t.stopPropagation()}}},t._l(t.songList,function(e,a){return n("li",{class:[a===t.curIndex?"current":""],on:{click:function(e){return t.selectPlay(a)}}},[n("h3",{domProps:{textContent:t._s(e.songname)}}),t._m(1,!0)])}),0),n("div",{staticClass:"close"},[t._v("关闭列表")])]),n("div",{staticClass:"player"},[n("audio",{ref:"player",attrs:{autoplay:"",src:t.curSong.src,controls:""},on:{ended:t.playEnded}}),n("p",[t._v(t._s(t.curSong.src))])])]):t._e()},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"play-mode",attrs:{href:"javascript:"}},[n("i"),t._v("\n                顺序播放\n            ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"opts"},[n("span",{staticClass:"like"}),n("span",{staticClass:"del"})])}],k=n("3f46"),j=n.n(k),E=n("3f47"),R=n("751a"),I=n("52c1"),N={data:function(){return{playState:"paused",songMid:"",playSrc:"",listState:!1}},computed:Object(E["a"])({},Object(I["b"])({curSong:"getCurSong",songList:"getPlayList",curIndex:"getCurIndex"})),watch:{curSong:function(t,e){var n=this;this.songMid=t.songmid||"",this.getVKey().then(function(t){n.getPlaySrc(t)}).catch(function(t){})}},created:function(){this.playState="playing"},methods:Object(E["a"])({},Object(I["c"])(["ADD_SRC_TO_SONG","SET_CUR_INDEX"]),{getVKey:function(){var t=this;return new j.a(function(e,n){var a="https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&cid=205361747&platform=yqq&hostUin=0&needNewCode=0&uin=0&songmid=".concat(t.songMid,"&filename=C400").concat(t.songMid,".m4a&guid=7120953682");R["a"].get(a,{}).then(function(t){var a=t.data.items;a[0]&&a[0].vkey?e(a[0].vkey):n(new Error("vKey获取失败"))})})},getPlaySrc:function(t){this.playSrc="http://dl.stream.qqmusic.qq.com/C400".concat(this.songMid,".m4a?vkey=").concat(t,"&guid=7120953682&uin=0&fromtag=66"),this.ADD_SRC_TO_SONG(this.playSrc),this.$forceUpdate()},playEnded:function(){var t=this.songList.length,e=this.curIndex+1>t-1?0:this.curIndex+1;this.SET_CUR_INDEX(e),this.$refs.player.play()},paused:function(){this.playState="pused",this.$refs.player.pause()},play:function(){this.playState="playing",this.$refs.player.play()},goPlayPage:function(){this.$router.push({name:"play",params:{song_mid:this.songMid}})},selectPlay:function(t){this.SET_CUR_INDEX(t)},closeList:function(){this.listState=!1},openList:function(){this.listState=!0}}),components:{}},x=N,D=(n("41b8"),Object(p["a"])(x,S,C,!1,null,"eec6732a",null)),O=D.exports,M={name:"app",data:function(){return{}},mounted:function(){},components:{Header:h,TabNav:A,MiniPlayer:O}},w=M,G=(n("5c0b"),Object(p["a"])(w,r,c,!1,null,null,null)),T=G.exports,Z=n("2832");a["a"].use(Z["a"]);var P,Q=new Z["a"]({mode:"hash",routes:[{path:"/",name:"home",component:function(){return Promise.all([n.e("chunk-20e27be9"),n.e("chunk-17711101")]).then(n.bind(null,"bb51"))}},{path:"/singer",name:"singer",component:function(){return Promise.all([n.e("chunk-20e27be9"),n.e("chunk-3984865b")]).then(n.bind(null,"7f433"))}},{path:"/singerDetail/:singer_mid",name:"singerDetail",component:function(){return Promise.all([n.e("chunk-20e27be9"),n.e("chunk-fe33e0e2")]).then(n.bind(null,"9c37"))}},{path:"/search",name:"search",component:function(){return n.e("chunk-2d0bd977").then(n.bind(null,"2d3b"))}},{path:"/play/:song_mid",name:"play",component:function(){return n.e("chunk-d6a59f5a").then(n.bind(null,"419b6"))}},{path:"*",redirect:{name:"home"}}]}),L=Q,X={player:{songs:[],curIndex:0}},Y=X,U={getPlayList:function(t){return t.player.songs},getCurSong:function(t){var e=t.player;return e.songs[e.curIndex]},getCurIndex:function(t){return t.player.curIndex}},z=U,B=n("b89d"),_=(n("612f"),"ADD_TO_SONG_LIST"),J="ADD_SRC_TO_SONG",W="SET_CUR_INDEX",V=(P={},Object(B["a"])(P,_,function(t,e){var n=t.player,a=0;if(n.songs.forEach(function(t,r){e.songmid===t.songmid&&(a++,n.curIndex=r)}),a>0)return"此歌曲已存在播放列表中，不能重复添加";n.songs.push(e),n.curIndex=n.songs.length-1}),Object(B["a"])(P,J,function(t,e){var n=t.player;n.songs[n.curIndex].src=e}),Object(B["a"])(P,W,function(t,e){t.player.curIndex=e}),P),H=V,F={addSrcToSongMutt:function(t,e){t.commit("ADD_SRC_TO_SONG",e)}},q=F;a["a"].use(I["a"]);var K=new I["a"].Store({state:Y,mutations:H,getters:z,actions:q}),$=n("aae9"),tt=n.n($),et=n("81a8"),nt=n.n(et);a["a"].use(tt.a,{preLoad:1.3,loading:nt.a,attempt:1}),a["a"].config.productionTip=!1,new a["a"]({router:L,store:K,render:function(t){return t(T)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("7508"),r=n.n(a);r.a},7508:function(t,e,n){},"750a":function(t,e,n){"use strict";var a=n("9bbe"),r=n.n(a);r.a},"751a":function(t,e,n){"use strict";var a=n("3f46"),r=n.n(a),c=(n("7f43"),n("f187")),i=n.n(c),s={get:function(t,e){return new r.a(function(n,a){i()(t,e,function(t,e){t?a(t):n(e)})})}};e["a"]=s},"81a8":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAIAAAC1nk4lAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU1NUNDRTIzNERCMjExRTg4MkQ5QjQwQzQ3NEI2NkRGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU1NUNDRTI0NERCMjExRTg4MkQ5QjQwQzQ3NEI2NkRGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTU1Q0NFMjE0REIyMTFFODgyRDlCNDBDNDc0QjY2REYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTU1Q0NFMjI0REIyMTFFODgyRDlCNDBDNDc0QjY2REYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5RQliZAAAEC0lEQVR42uzYf2wTVRwA8HvX611/0o1N9wud4jZYokZQWYgEUDESgggBnWbiz8R//JGQGYOa8K8GSCSaEIKKDpcaLA5iIIQfakRmBxNcV53bWDZ0mq3Xrtt619u96+6e79oxurKCBna7Ju/99dp77X3u2+/3vW8KotEolWuDpnJwEDRBEzRBEzRBEzRBE/TsoZEkCV9+jhSYS2jhsC92oFH2N+cMWo2ExW+b8GS48QsEYW6gY3t3a3FR1w/+IzX5cgA93tEh+k8DpM8BRY0ebUKCYHa0cNALLs8xXRsZHWttMTUaBtvirf5UmCeHfPoHU6NjDZ9liHHU5d8CamjApGjYdl7p7Jhmz5Zl+azfpOj496eyVufQkBnRSB5LdASzXk3ugKZDq2FejWYNJ7DbTZkeuP40LU3pALYrUKao2IxoS1GxpbRs8iV7z72TUPw41soFZkQDjmOLylDyXMEx5qoWIkXRxYCylc9nK6pMuns4122YiHr+XEvpPARlPMcZ466toywWk6LZRYtdj63RI82ytNOZQrtXPsotX3kT78LcaO0pisbzyqXe8dAAc2sRu6B6zkuv4sNvLBgAnA2pyP7Q8vz6d29uaMCN/Kkuf3dSOHIIXuwCaW9y9y1mym7TxJjn6c2J7k7ktCNRhMGApijcvHLrwmruwZrZibQ2ODD08U7Y3obbDJDxJIELTIQv3tOQap6iH22fbEXGkksd99d43qy3zC0wNNK4OR7aukX+qy+jMUpuFMDz5CbnhqekljPsXZU4reMnjgmHfBkPZq2suuX9D4HNZhyaf69eCbRlOLCAq77b+cR62sqKBw/AP3vtKx7Rwry77kWNH4zu2qGNjqSvd61e63l9i0G7h+D7KnGVWN/jiksQwwje/fy2t6X289aSUq6iSvr5J/61V+Afv895djM9NR/E40eVrk4j0Orf/SON+6Zv4i71wdYWpadbz3JEcTVLuUUP0IxeM8LX3vjxY5aCQopOux1Cgs9rBFrY90l6d5E15xjGuWo1nZfH3H5H6p1EX0/iYheGTinZluZEb8/MouGFVvFcM42uv9L93Mt0Xr6euOs3ovRMQpkfjnn3zyxaPPwNSLY+CFxrmWtjrXtTbWpuX7aCLb/zGutxsJXurhncPeRzfjUSUUODKByG/AAlSUgdxz20Hj8AaE+edX6F8/E1tiVLp5RBfz//1huqJIAsP5Hj4VX59e8YciKqKoIQaao2MjzxRS63JZkSV49EsD2y6wMtFMry07hK9jTgAjDoGP8fJ2gkMvzpbvnMj9NcAlTBMy846p43rmH6r6VTWFiwdRsM/Ap/OQt7unGaodjEWUNbrXIk5DCsYZqtQf5UJ2iCJmiCJmiCJmiCvs74V4ABADaTt8fg8dcCAAAAAElFTkSuQmCC"},"9bbe":function(t,e,n){},"9d64":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAEIUlEQVRoQ82ZTVIbRxiG32+Mq4zLLpMTWCxdiUSzQ2wCJwg+AcoJjE8Q6QRRThD5BIETIG8kdmokp7xkuIFScRFXxZ431S1GSPOj6Rk1wbMbqaf7ma/f/v5GcM/XlVJbnzbRrg/1ia+lxNdEefNMmqoLkTcBuPv9QGsf690r9J/7SkWQkQUl+/WhPvzmoSdNdQ6RgxiUEX9uXOjeuuD3ZunxnmpJIL8vAhKcPr/B9rbW03XA7wXaHL6/n+JKIFtpOHbqA93+5qAn+6oNyC9ZYD6s7d3Sq608e411te0depWV5wcSPGsM9FFViXiF/rinav8GGGVreRlxI+L2qwsdVgH3Cj1uqp6IHLuACPn2h6HuuoxNjvEGbaz8JZArdwjq+kDvuo+/G+kNOg7XZSCqhnZv0OOmuhKRWhloRDysX+h+qWcAeIEeN9WRiPxRdnGSrxtDfVr2OS/QLm4uC6zqYfQCXcZrLME/pDwmTdWHyI9lt/mhNb3KP18C2Ml6ofpgVGmnKz2UBPjQVCcU+TX5O4m/RNjNSZ4u64ORKr07vrzHZE8dIJDzFAD5HoJ+FnTVQ2jW8GJpm9ltSiiCF8vg7Mzu02nqsxt+V7UY8AJtsLIkYlJQCVBLQ69XCHiDNuCT5m4Iwcu5tSMeIsBBArqyluN5vUKnImMGdNV8Y1F2paFv9bsjoIJgi4B+BFzHPY0lmRhocwVybjzJI+GBj96HE7TtEj3FGxKtlUkR2QfRsZKgtCDsPbtB1xzSGNj0Qr4CLwVQEiGMRMLn//CyzKEshP6wp46jAF2XamS+hWQ/ELw198ayFpQwxYFJrDIzQYK9xxE6LtVMLvStdc8BKR0ASL5rDHXLQJedx6XozYQuu1BsYaPbAGybMso2a4DQ5MvmgELQEshPLhGwCDwTOtnOclqIfPeYaD/5jOmnTRxDpGv9tODFBnFmtt3CQ3rpIJReYZWXSUGXzo1NqCbaG0D4JcAxgZO5/q3LE1O87sSajQJsfaX0C8FXNCyXoHNziBxTGxChdXsq64AZa0WEafUupK1sB8CZC3ieTJagK9V5+dqxkS+74KVmhN+SDcp0lsiwMdTbyd/n0KVlUSD02Eq5aSs4BTEtKoazrG2hXfpvLofxzk/juj4cWX9cvh+SyBOZtraFrlzj5Wk90Txfd/6ktWVdS2TocB5Y4v+WPmOU2rLZYCasLetaYZFhMRIm2cb76tQ1uGS916K1xRxAEjUBaoSoQv+ZOSOuSbZXfU+ZRVkx3aTMIrd4A+56f6ngYid/AkWgNqs6bi+aZP7uomAqgHFdoevHn/yyrBjZjrjtkxRmeY7TOQ+z+qacLlU4jk/H8vvfoWMXa77imo+ijrzzYaYgfhDomMCmDSK9clZn50Ghl10ijmwOY3OZHIdAvicQ/gfa5jIzKJel4gAAAABJRU5ErkJggg=="},a1f9:function(t,e,n){"use strict";var a=n("c936"),r=n.n(a);r.a},c936:function(t,e,n){},e2d5:function(t,e,n){}});
//# sourceMappingURL=app.f7d61bd0.js.map