<template>
  <div class="song-list" :class="aniClass">
    <div class="song" v-for="(song, index) in songs" @click="selectSong(song)">
      <mu-badge v-if="showBadge" :content="(index+1)+' '" circle></mu-badge>
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
      },
      showBadge: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        aniClass: 'ani1'
      }
    },
    watch: {
      'songs': 'fresh'
    },
    methods: {
      selectSong (song) {
        console.log(song)
        this.$store.commit('selectSong', song)
        this.$router.push('/player')
      },
      fresh() {
        this.aniClass = 'hide'
        setTimeout(() => {
          this.aniClass = 'ani1'
        }, 300)
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
      &:last-child
        border none
      .title
        margin-left: 1.5em
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
      .singer
        font-size: 0.6em
        margin-left: .7em;
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis

  .hide
    display: none

  .ani1
    for i in 1..15
      .song:nth-child({i})
        animation-name: animationStyle1
        animation-duration: 200ms * i
        animation-timing-function: ease-in-out
        animation-fill-mode: forwards

  @keyframes animationStyle1
    0%
      opacity: .1;
      transform: translate3d(500px, 100px, 0)
    100%
      opacity: 1;
      transform: translate3d(0, 0, 0)


</style>
