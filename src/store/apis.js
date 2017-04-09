/**
 * Created by 博文 on 2017/4/6.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
// Vue.http.options.emulatedJSON = true
const Api = {
  album: {
    url: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg',
    params: (id) => {
      return {
        albummid: id,
        g_tk: 5381,
        loginUin: 0,
        hostUin: 0,
        format: 'jsonp',
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'yqq',
        needNewCode: 0
      }
    }
  },
  song_info: {
    url: '/qq-m-api/v8/fcg-bin/fcg_play_single_song.fcg',
    params: (mid) => {
      return {
        'songmid': mid,
        'format': 'json'
      }
    }
  },
  search: {
    url: 'http://c.y.qq.com/soso/fcgi-bin/search_cp?',
    params: (word) => {
      return {
        'p': 1,
        'n': 15,
        'w': word,
        'aggr': 1,
        'lossless': 1,
        'cr': 1
      }
    }
  },
  // search2: {
  //   method: 'POST',
  //   url() {
  //     return 'http://music.163.com/api/search/get'
  //   },
  //   body(name, limit = 3, offset = 0, type = 1) {
  //     return ({
  //       s: name,
  //       limit,
  //       offset,
  //       type
  //     })
  //   }
  // },
  lyric: {
    url: 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg',
    params: (id) => {
      return {
        nobase64: 1,
        musicid: id,
        songtype: 0
      }
    }
  },
  hotSongs: {
    url: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?',
    params() {
      return {
        tpl: 3,
        page: 'detail',
        date: '2017_15',
        topid: 108,
        type: 'global',
        song_begin: 0,
        song_num: 15,
        g_tk: 5381,
        jsonpCallback: 'MusicJsonCallbacktoplist',
        loginUin: 0,
        hostUin: 0,
        format: 'jsonp',
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'yqq',
        needNewCode: 0
      }
    }
  }
}
export function search(word) {
  let p = Vue.http.jsonp(Api.search.url, {
    params: Api.search.params(word),
    jsonp: 'jsonpCallback'
  })
  //
  // p.then(res => {
  //   console.log('搜索完毕')
  // }, res => {
  //   console.log(res)
  // })
  return p
}
// export function search2(word) {
//   let p = Vue.http.post(Api.search2.url, {
//     params: Api.search2.body(word)
//   })
//   return p
// }
export function fetchSongInfo(songmid) {
  let p = Vue.http.get(Api.song_info.url, {params: Api.song_info.params(songmid)})
  return p
}
export function fetchAlbum(albummid) {
  let p = Vue.http.jsonp(Api.album.url, {params: Api.album.params(albummid), jsonp: 'jsonpCallback'})
  return p
}
export function fetchLyirc(songid) {
  let p = Vue.http.jsonp('https://api.darlin.me/music/lyric/' + songid + '/', {
    params: Api.lyric.params(songid), jsonp: 'callback'
  })
  return p
}
export function getSongSrc(songid) {
  return `http://ws.stream.qqmusic.qq.com/${songid}.m4a?fromtag=46`
}
export function getHotSongs() {
  let p = Vue.http.jsonp(Api.hotSongs.url, {params: Api.hotSongs.params(), jsonp: 'jsonpCallback'})
  return p
}
