<template>
  <div class="list">
    <!--<div class="title-wrapper">-->
    <!--<span class="title">History</span>-->
    <!--<span class="clear" @click="clear">clear</span>-->
    <!--</div>-->
    <song-list :songs="history" :showBadge="false"></song-list>
    <div class="clear-button" v-show="history.length" @click="clear">
      <i class="material-icons">clear_circle_outline</i>
    </div>
  </div>

</template>

<script>
  import songList from './SongList'
  export default {
    computed: {
      history() {
        return this.$store.state.history
      }
    },
    methods: {
      clear() {
        this.$store.commit('clear_history')
      }
    },
    components: {
      songList
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  .list
    .clear-button
      text-align center
      position: fixed
      bottom: 0
      left: 50%
      transform: translateX(-50%)
      i
        /*margin 0 auto*/
        font-size: 2.5em
        width: 1em
        font-weight: 200
        color: gray
        opacity: .3

  /*position: absolute
  left: 50%
  transform: translateX(-50%)*/

</style>
