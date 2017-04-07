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
  lyric: {
    url: 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg',
    params: (id) => {
      return {
        nobase64: 1,
        musicid: id,
        songtype: 0
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
