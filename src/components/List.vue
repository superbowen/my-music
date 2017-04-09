<template>
  <div class="list">
    <span class="title">history</span>
    <span class="clear" @click="clear">clear</span>
    <song-list :songs="history" :showBadge="false"></song-list>
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

</style>
