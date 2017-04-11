webpackJsonp([1],[,,,,,,,,,,,function(t,n,e){e(59);var s=e(0)(e(27),e(70),"data-v-12846038",null);t.exports=s.exports},,function(t,n,e){"use strict";var s=e(1),a=e(77),i=e(69),o=e.n(i),r=e(68),c=e.n(r),l=e(67),u=e.n(l);s.default.use(a.a),n.a=new a.a({routes:[{path:"/",redirect:"/search"},{path:"/search",name:"Search",component:o.a},{path:"/player",name:"Player",component:c.a},{path:"/list",name:"List",component:u.a}]})},function(t,n,e){"use strict";var s=e(28),a=e.n(s),i=e(1),o=e(12),r=e(21);i.default.use(o.a);var c=new o.a.Store({state:{history:localStorage.history?JSON.parse(localStorage.history):[],playing:!1,searchResult:[],selectedSong:{albumid:1456626,songname:"PLEASE SELECT A SONG",singer:[{name:"to tell me which to play!!!"}]},audio:new Audio},actions:{SEARCH:function(t,n){(0,t.commit)("_search",n)},FETCH_ALBUM:function(t,n){return e.i(r.a)(n)},FETCH_LYIRC:function(t,n){return e.i(r.b)(n)},FETCH_SONG_INFO:function(t,n){return e.i(r.c)(n)}},mutations:{initList:function(t){t.searchResult.length||e.i(r.d)().then(function(n){var e=n.body.songlist;console.log(e);for(var s=0;s<e.length;s++)t.searchResult.push(e[s].data)})},_search:function(t,n){e.i(r.e)(n).then(function(n){t.searchResult=n.body.data.song.list,console.log(t.searchResult)})},selectSong:function(t,n){t.selectedSong=n,t.audio.src=e.i(r.f)(n.songid),t.audio.loop=!0,t.audio.play(),t.playing=!0,t.history.unshift(n),t.history.length>10&&t.history.splice(10),localStorage.history=a()(t.history)},togglePlaying:function(t){t.playing?(t.audio.pause(),t.playing=!1):(t.audio.play(),t.playing=!0)},clear_history:function(t){localStorage.clear(),t.history=[]},dragPlay:function(t,n){t.audio.currentTime=n}}});n.a=c},function(t,n){},function(t,n){},function(t,n){},,function(t,n,e){e(61);var s=e(0)(e(22),e(72),null,null);t.exports=s.exports},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e(1),a=e(19),i=e.n(a),o=e(13),r=e(14),c=e(17),l=(e.n(c),e(18)),u=e.n(l),f=e(15),p=(e.n(f),e(16));e.n(p);s.default.use(u.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:o.a,store:r.a,template:"<App/>",components:{App:i.a}})},function(t,n,e){"use strict";function s(t){return l.default.http.jsonp(p.search.url,{params:p.search.params(t),jsonp:"jsonpCallback"})}function a(t){return l.default.http.get(p.song_info.url,{params:p.song_info.params(t)})}function i(t){return l.default.http.jsonp(p.album.url,{params:p.album.params(t),jsonp:"jsonpCallback"})}function o(t){return l.default.http.jsonp("https://api.darlin.me/music/lyric/"+t+"/",{params:p.lyric.params(t),jsonp:"callback"})}function r(t){return"http://ws.stream.qqmusic.qq.com/"+t+".m4a?fromtag=46"}function c(){return l.default.http.jsonp(p.hotSongs.url,{params:p.hotSongs.params(),jsonp:"jsonpCallback"})}var l=e(1),u=e(76),f=e.n(u);n.e=s,n.c=a,n.a=i,n.b=o,n.f=r,n.d=c,l.default.use(f.a);var p={album:{url:"https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg",params:function(t){return{albummid:t,g_tk:5381,loginUin:0,hostUin:0,format:"jsonp",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0}}},song_info:{url:"/qq-m-api/v8/fcg-bin/fcg_play_single_song.fcg",params:function(t){return{songmid:t,format:"json"}}},search:{url:"http://c.y.qq.com/soso/fcgi-bin/search_cp?",params:function(t){return{p:1,n:15,w:t,aggr:1,lossless:1,cr:1}}},lyric:{url:"https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg",params:function(t){return{nobase64:1,musicid:t,songtype:0}}},hotSongs:{url:"https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?",params:function(){return{tpl:3,page:"detail",date:"2017_15",topid:108,type:"global",song_begin:0,song_num:15,g_tk:5381,jsonpCallback:"MusicJsonCallbacktoplist",loginUin:0,hostUin:0,format:"jsonp",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0}}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{bottomNav:location.hash.substr(2)}},methods:{handleChange:function(t){this.$router.push("/"+t)}},watch:{$route:function(t){this.bottomNav=t.path.substr(1)}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e(30),a=e.n(s),i=e(12);n.default={computed:a()({},e.i(i.b)(["audio","playing"])),data:function(){return{currentTime:0,totalTime:0}},mounted:function(){var t=this;setInterval(function(){t.currentTime=t.audio.currentTime,t.totalTime=t.audio.duration},1e3)},methods:{togglePlaying:function(){this.$store.commit("togglePlaying")},dragToTime:function(t){this.$store.commit("dragPlay",t)}},filters:{formatTime:function(t){var n=Math.floor(t/60%60),e=Math.floor(t%60);return e<10&&(e="0"+e),n<10&&(n="0"+n),n+":"+e}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e(11),a=e.n(s);n.default={computed:{history:function(){return this.$store.state.history}},methods:{clear:function(){this.$store.commit("clear_history")}},components:{songList:a.a}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e(66),a=e.n(s);n.default={computed:{song:function(){return this.$store.state.selectedSong},albumImgUrl:function(){return"http://imgcache.qq.com/music/photo/album_300/"+this.song.albumid%100+"/300_albumpic_"+this.song.albumid+"_0.jpg"},playing:function(){return this.$store.state.playing}},watch:{playing:function(){this.playing?this.$refs.album.style.animationPlayState="running":this.$refs.album.style.animationPlayState="paused"}},components:{controls:a.a}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e(11),a=e.n(s);n.default={data:function(){return{word:""}},computed:{Songs:function(){return this.$store.state.searchResult}},methods:{search:function(){this.$store.dispatch("SEARCH",this.word)}},mounted:function(){this.$store.commit("initList")},components:{songList:a.a}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{songs:{type:Array,required:!0},showBadge:{type:Boolean,default:!0}},data:function(){return{aniClass:"ani1"}},watch:{songs:"fresh"},methods:{selectSong:function(t){console.log(t),this.$store.commit("selectSong",t),this.$router.push("/player")},fresh:function(){var t=this;this.aniClass="hide",setTimeout(function(){t.aniClass="ani1"},300)}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n,e){t.exports=e.p+"static/img/border.637a7bd.png"},function(t,n,e){e(64);var s=e(0)(e(23),e(75),null,null);t.exports=s.exports},function(t,n,e){e(60);var s=e(0)(e(24),e(71),"data-v-52b3ffa2",null);t.exports=s.exports},function(t,n,e){e(62);var s=e(0)(e(25),e(73),"data-v-6b45f6b2",null);t.exports=s.exports},function(t,n,e){e(63);var s=e(0)(e(26),e(74),null,null);t.exports=s.exports},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"song-list",class:t.aniClass},[t._l(t.songs,function(n,s){return e("div",{staticClass:"song",on:{click:function(e){t.selectSong(n)}}},[t.showBadge?e("mu-badge",{attrs:{content:s+1+" ",circle:""}}):t._e(),t._v(" "),e("span",{staticClass:"title"},[t._v(t._s(n.songname))]),t._v(" "),e("span",{staticClass:"singer"},[t._v(t._s(n.singer[0].name))])],1)}),t._v(" "),0===t.songs.length?e("div",{staticClass:"tip"},[t._v("暂无歌曲信息...")]):t._e()],2)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"list"},[e("song-list",{attrs:{songs:t.history,showBadge:!1}}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.history.length,expression:"history.length"}],staticClass:"clear-button",on:{click:t.clear}},[e("i",{staticClass:"material-icons"},[t._v("clear_circle_outline")])])],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("mu-paper",{staticStyle:{position:"fixed",top:"0",left:"0",right:"0","box-shadow":"none","z-index":"100"}},[e("mu-bottom-nav",{attrs:{value:t.bottomNav,shift:""},on:{change:t.handleChange}},[e("mu-bottom-nav-item",{attrs:{value:"search",title:"Search",icon:"search"}}),t._v(" "),e("mu-bottom-nav-item",{attrs:{value:"player",title:"Player",icon:"music_note"}}),t._v(" "),e("mu-bottom-nav-item",{attrs:{value:"list",title:"List",icon:"list"}})],1)],1),t._v(" "),e("keep-alive",[e("router-view",{staticStyle:{"margin-top":"55px","z-index":"100"}})],1)],1)},staticRenderFns:[]}},function(t,n,e){t.exports={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"player"},[s("div",{ref:"album",staticClass:"album-wrapper rotating"},[s("img",{staticClass:"album",attrs:{src:t.albumImgUrl,width:"132",height:"132"}}),t._v(" "),s("img",{staticClass:"border-img",attrs:{src:e(65),width:"209",height:"209"}})]),t._v(" "),s("div",{staticClass:"info"},[s("div",{staticClass:"name"},[t._v(t._s(t.song.songname))]),t._v(" "),s("div",{staticClass:"singer"},[t._v(t._s(t.song.singer[0].name))])]),t._v(" "),s("controls")],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"search"},[e("div",{staticClass:"mu-banner"},[e("div",{staticClass:"banner-container"},[e("div",{staticClass:"logo"},[t._v("M")]),t._v(" "),e("h2",{staticClass:"title"},[t._v("163 Music")]),t._v(" "),e("h4",{staticClass:"sub-title"},[t._v("Embrace Vue, Enjoy Life")]),t._v(" "),e("div",{staticClass:"actions",on:{keydown:function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13))return null;t.search(n)}}},[e("mu-text-field",{attrs:{hintText:"search song or singer",icon:"search",iconClass:"color-white",hintTextClass:"color-white",inputClass:"color-white",underlineClass:"border-white",underlineFocusClass:"border-white",fullWidth:"",type:"search"},model:{value:t.word,callback:function(n){t.word=n},expression:"word"}})],1)])]),t._v(" "),e("song-list",{attrs:{songs:t.Songs}})],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"controls"},[e("div",{staticClass:"control-button",on:{click:t.togglePlaying}},[e("i",{staticClass:"material-icons"},[t._v(t._s(t.playing?"pause_circle_outline":"play_circle_outline"))])]),t._v(" "),e("mu-content-block",[e("mu-flexbox",[e("span",{staticClass:"cur-time"},[t._v(t._s(t._f("formatTime")(t.currentTime)))]),t._v(" "),e("mu-flexbox-item",{staticClass:"flex-slider"},[e("mu-slider",{staticClass:"slider",attrs:{max:t.totalTime,value:t.currentTime},on:{change:t.dragToTime}})],1),t._v(" "),e("span",{staticClass:"totalTime"},[t._v(t._s(t._f("formatTime")(t.totalTime)))])],1)],1)],1)},staticRenderFns:[]}},,,,,function(t,n){}],[20]);
//# sourceMappingURL=app.b9ffef3268474576b114.js.map