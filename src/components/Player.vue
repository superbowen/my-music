<template>
  <div class="player">
    <div class="album-wrapper rotating">
      <img :src="albumImgUrl" class="album" width="132" height="132">
      <img src="../styles/img/border.png" class="border-img" width="209" height="209">
    </div>
    <div class="info">
      <div class="name">{{song.songname}}</div>
      <div class="singer">{{song.singer[0].name}}</div>
    </div>

    <controls></controls>
  </div>
</template>

<script>
  import controls from './Controls'
  export default {
    computed: {
      song() {
        return this.$store.state.selectedSong
      },
      albumImgUrl() {
        return `http://imgcache.qq.com/music/photo/album_300/${this.song.albumid % 100}/300_albumpic_${this.song.albumid}_0.jpg`
      }
    },
    methods: {
      fetchData() {
        this.$store.dispatch('FETCH_SONG_INFO', this.song.songmid)
      }
    },
    components: {
      controls
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  .player
    .album-wrapper
      position: absolute
      top: 100px
      left: 50%
      margin-left: -105px;
      .album
        position: absolute
        top: 39px
        left: 38px
        z-index: -1
    .info
      position: absolute
      top: 350px
      left: 50%
      transform: translateX(-50%)
      text-align: center
      .name
        font-size: 1.5em
      .singer
        line-height: 2em

  .rotating
    animation: rotate 30s linear 0s infinite

  @keyframes rotate
    from {
      transform: rotateZ(0deg)
    }
    to {
      transform: rotateZ(360deg)
    }
</style>
