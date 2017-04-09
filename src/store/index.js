/**
 * Created by 博文 on 2017/4/6.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import {search, fetchAlbum, fetchLyirc, fetchSongInfo, getSongSrc, getHotSongs} from './apis'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // playList: [],
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
  getters: {},
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
    // initAudio(state, src) {
    //   state.audio.src = src
    // },
    initList(state) {
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
