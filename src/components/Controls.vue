<template>
  <div class="controls">
    <div class="control-button" @click="togglePlaying">
      <i class="material-icons">{{playing?'pause_circle_outline':'play_circle_outline'}}</i>
    </div>
    <mu-content-block>
      <mu-flexbox>
        <span class="cur-time">{{audio.currentTime | formatTime}}</span>
        <mu-flexbox-item class="flex-slider">
          <mu-slider :max="audio.duration" :value="audio.currentTime" class="slider" @change="dragToTime"></mu-slider>
        </mu-flexbox-item>
        <span class="totalTime">{{audio.duration?audio.duration:0 | formatTime}}</span>
      </mu-flexbox>
    </mu-content-block>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState([
        'audio', 'playing'
      ])
//      ...mapGetters([
//        'currentTime'
//      ])
//      currentTime() {
//        return this.$store.getters.currentTime
//      }
    },
    methods: {
      togglePlaying() {
        this.$store.commit('togglePlaying')
      },
      dragToTime(value) {
        this.$store.commit('dragPlay', value)
      }
    },
    filters: {
      formatTime(time) {
        let min = Math.floor((time / 60) % 60)
        let sec = Math.floor(time % 60)
        let cTime
        if (sec < 10) {
          sec = '0' + sec
        }
        if (min < 10) {
          min = '0' + min
        }
        cTime = min + ':' + sec
        return cTime
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .controls
    position: absolute
    top: 500px
    left: 50%
    width: 90%
    text-align center
    transform: translateX(-50%)
    .control-button
      transform: scale(2.5)
      margin-bottom: 10px
    .mu-flexbox
      .flex-slider
        margin-right: 8px
        .slider
          margin: 0
</style>
