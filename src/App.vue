<template>
  <div id="app">
    <mu-paper style="position: fixed;top: 0;left: 0;right: 0;box-shadow: none;z-index: 100">
      <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
        <mu-bottom-nav-item value="search" title="Search" icon="search"/>
        <mu-bottom-nav-item value="player" title="Player" icon="music_note"/>
        <mu-bottom-nav-item value="list" title="List" icon="list"/>
      </mu-bottom-nav>
    </mu-paper>

    <transition name="fade" mode="out-in">
      <router-view style="margin-top: 55px;z-index: 100"></router-view>
    </transition>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        bottomNav: location.hash.substr(2)
      }
    },
    methods: {
      handleChange (val) {
        this.$router.push('/' + val)
      }
    },
    watch: {
      '$route'(to) {
        this.bottomNav = to.path.substr(1)
      }
    }
  }
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

</style>
