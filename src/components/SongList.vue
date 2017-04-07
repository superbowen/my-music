<template>
  <div class="song-list">
    <div class="song" v-for="(song, index) in songs" @click="selectSong(song)">
      <mu-badge :content="(index+1)+' '" circle></mu-badge>
      <span class="title">{{song.songname}}</span>
      <span class="singer">{{song.singer[0].name}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      songs: {
        type: Array,
        required: true
      }
    },
    methods: {
      selectSong (song) {
        console.log(song)
        this.$store.commit('selectSong', song)
        this.$router.push('/player')
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  .song-list
    padding: 0 1.5em
    color: gray
    .song
      line-height: 4em
      border-bottom 1px solid #dadada
      text-align: left
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      .title
        margin-left: 1.5em
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
      .singer
        font-size: 0.7em
        margin-left: .7em;
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis


  .hide
    display: none


</style>
