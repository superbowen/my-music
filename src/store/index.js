/**
 * Created by 博文 on 2017/4/6.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import {search, fetchAlbum, fetchLyirc, fetchSongInfo, getSongSrc} from './apis'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // playList: [],
    playing: false,
    Songs: [],
    selectedSong: {
      albumid: 1656856,
      songid: 200790315,
      songmid: '003TLWoN0gQnP5',
      songname: '成都',
      singer: [{
        name: '赵雷'
      }]
    },
    audio: new Audio()
  },
  getters: {},
  actions: {
    SEARCH ({commit}, word) {
      let p = search(word)
      return p
    },
    FETCH_ALBUM(context, albummid) {
      let p = fetchAlbum(albummid)
      return p
    },
    FETCH_LYIRC(context, songid) {
      let p = fetchLyirc(songid)
      return p
    },
    FETCH_SONG_INFO(context, songmid) {
      let p = fetchSongInfo(songmid)
      return p
    }
  },
  mutations: {
    init(state, src) {
      state.audio.src = src
    },
    selectSong(state, song) {
      state.selectedSong = song
      state.audio.src = getSongSrc(song.songid)
      state.audio.play()
      state.playing = true
    },
    togglePlaying(state) {
      if (state.playing) {
        state.audio.pause()
        state.playing = false
      } else {
        state.audio.play()
        state.playing = true
      }
    }
  }
})
export default store
