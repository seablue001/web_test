(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d6a59f5a"],{"419b6":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("transition",{attrs:{name:"playing"}},[s("div",{staticClass:"playing"},[s("div",{staticClass:"page-cover",staticStyle:{position:"fixed",top:"0",left:"0",background:"#060506",width:"100vw",height:"100vh"}}),s("div",{staticClass:"bg-img"},[s("img",{attrs:{src:"https://y.gtimg.cn/music/photo_new/T002R90x90M000"+t.curSong.albummid+".jpg?max_age=2592000",alt:""}})]),s("div",{staticClass:"playing-header"},[s("h1",[s("i",{staticClass:"down-close",on:{click:t.close}}),t._v(t._s(t.curSong.singer[0].name))]),s("p",[t._v(t._s(t.curSong.songname))])]),s("div",{ref:"cover",staticClass:"cover",class:{"playing-run":"playing"==t.playState}},[s("img",{attrs:{src:"https://y.gtimg.cn/music/photo_new/T002R90x90M000"+t.curSong.albummid+".jpg?max_age=2592000",alt:""}})]),s("div",{staticClass:"opt-area"},[s("a",{staticClass:"opt-mode",attrs:{href:"javascript:;"}}),s("a",{staticClass:"opt-prev",attrs:{href:"javascript:;"},on:{click:t.prev}}),s("a",{class:["playing"==t.playState?"opt-play-pused":"opt-play-playing"],attrs:{href:"javascript:;"},on:{click:function(a){"playing"==t.playState?t.paused():t.play()}}}),s("a",{staticClass:"opt-next",attrs:{href:"javascript:;"},on:{click:t.next}}),s("a",{staticClass:"opt-like",attrs:{href:"javascript:;"}})])])])},e=[],n=s("3f47"),c=s("52c1"),o={data:function(){return{playState:"paused",coverNode:null,sibMiniComPlayer:null}},computed:Object(n["a"])({},Object(c["b"])({curSong:"getCurSong",songList:"getPlayList",curIndex:"getCurIndex"})),created:function(){this.playState="playing"},mounted:function(){this.coverNode=this.$refs.cover,this.sibMiniComPlayer=this.$parent.$children[2].$refs.player},methods:Object(n["a"])({},Object(c["c"])(["SET_CUR_INDEX"]),{paused:function(){this.coverNode.style.animationPlayState="paused",this.playState="paused",this.sibMiniComPlayer.pause()},play:function(){this.coverNode.style.animationPlayState="running",this.playState="playing",this.sibMiniComPlayer.play()},prev:function(){var t=this.songList.length,a=this.curIndex-1<0?t-1:this.curIndex-1;this.SET_CUR_INDEX(a)},next:function(){var t=this.songList.length,a=this.curIndex+1>t-1?0:this.curIndex+1;this.SET_CUR_INDEX(a)},close:function(){this.$router.go(-1)}}),components:{}},r=o,l=(s("5d9f"),s("17cc")),p=Object(l["a"])(r,i,e,!1,null,"099facd8",null);a["default"]=p.exports},"5d9f":function(t,a,s){"use strict";var i=s("7d30"),e=s.n(i);e.a},"7d30":function(t,a,s){}}]);
//# sourceMappingURL=chunk-d6a59f5a.96ae8b4b.js.map