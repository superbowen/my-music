<template>
  <div class="search">
    <div class="mu-banner">
      <div class="banner-container">
        <div class="logo">M</div>
        <h2 class="title">163 Music</h2>
        <h4 class="sub-title">Embrace Vue, Enjoy Life</h4>
        <div class="actions" @keydown.enter="search">
          <mu-text-field hintText="search song or singer"
                         icon="search"
                         iconClass="color-white"
                         hintTextClass="color-white"
                         inputClass="color-white"
                         underlineClass="border-white"
                         underlineFocusClass="border-white"
                         v-model="word"
                         fullWidth
                         type="search"
                         ></mu-text-field>
        </div>
      </div>
    </div>
    <song-list :songs="Songs"></song-list>
  </div>
</template>

<script>
  import songList from './SongList'
  export default {
    data () {
      return {
        Songs: [],
        word: ''
      }
    },
    methods: {
      search () {
        this.$store.dispatch('SEARCH', this.word).then(res => {
          this.Songs = res.body.data.song.list
          console.log(this.Songs)
        })
      }
    },
    components: {
      songList
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  .search
    width: 100%
    text-align: center
    color: #fff
    overflow: auto
    .mu-banner
      background-color: #03a9f4;
      z-index: 100;
      padding: 10px 30px 20px 30px
      .logo
        width: 100px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        background-color: #fff;
        margin: 0 auto;
        color: #03a9f4;
        font-size: 50px;
        border-radius: 50%;
        margin-bottom: 16px;
      .title, .sub-title
        color: hsla(0, 0%, 100%, .87);
        margin: 12px 0
        text-align: center;
      .title
        font-size: 2em
        font-weight: 500;
      .sub-title
        font-size: 1.3em
        margin-top: 24px
        font-weight: 200;
      .actions
        margin-right: 20px

  .color-white
    color: rgba(255, 255, 255, 0.87)!important

  .border-white-alpha
    color: rgba(255, 255, 255, 0.5)!important
    background-color: rgba(255, 255, 255, 0.5)!important

  .border-white
    color: rgba(255, 255, 255, 0.87)!important;
    background-color: rgba(255, 255, 255, 0.87)!important
</style>
