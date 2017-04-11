/**
 * Created by 博文 on 2017/4/6.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import {search, fetchAlbum, fetchLyirc, fetchSongInfo, getSongSrc, getHotSongs} from './apis'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    history: localStorage.history ? JSON.parse(localStorage.history) : [],
    playing: false,
    searchResult: [],
    selectedSong: {
      albumid: 1456626,
      songname: 'PLEASE SELECT A SONG',
      singer: [{
        name: 'to tell me which to play!!!'
      }]
    },
    audio: new Audio()
  },
  // getters: {
  //   currentTime() {
  //     return this.state.audio.currentTime
  //   }
  // },
  actions: {
    SEARCH ({commit}, word) {
      commit('_search', word)
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
    initList(state) {
      if (state.searchResult.length) return
      getHotSongs().then(res => {
        let list = res.body.songlist
        console.log(list)
        for (let i = 0; i < list.length; i++) {
          state.searchResult.push(list[i].data)
        }
      })
    },
    _search(state, word) {
      let p = search(word)
      p.then(res => {
        state.searchResult = res.body.data.song.list
        console.log(state.searchResult)
      })
    },
    selectSong(state, song) {
      state.selectedSong = song
      state.audio.src = getSongSrc(song.songid)
      state.audio.loop = true
      state.audio.play()
      state.playing = true
      state.history.unshift(song)
      if (state.history.length > 10) {
        state.history.splice(10)
      }
      localStorage.history = JSON.stringify(state.history)
    },
    togglePlaying(state) {
      if (state.playing) {
        state.audio.pause()
        state.playing = false
      } else {
        state.audio.play()
        state.playing = true
      }
    },
    clear_history(state) {
      localStorage.clear()
      state.history = []
    },
    dragPlay(state, value) {
      state.audio.currentTime = value
    }
  }
})
export default store
