/**
 * Created by 博文 on 2017/4/6.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import {search, fetchAlbum, fetchLyirc, fetchSongInfo} from './apis'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // playList: [],
    playing: false,
    Songs: [],
    selectedSong: {},
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
    selectSong(state, song) {
      state.selectedSong = song
    }
  }
})
export default store
