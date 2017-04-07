<template>
  <div class="controls">
    <div class="control-button">
      <i class="material-icons">{{playing?'pause_circle_outline':'play_circle_outline'}}</i>
    </div>
    <!--<mu-content-block>-->
      <!--<mu-flexbox>-->
        <!--<span class="cur-time">{currentTime}}</span>-->
        <!--<mu-flexbox-item class="flex-slider">-->
          <!--<mu-slider></mu-slider>-->
        <!--</mu-flexbox-item>-->
        <!--<span class="totalTime">{totalTime}}</span>-->
      <!--</mu-flexbox>-->
    <!--</mu-content-block>-->
  </div>
</template>

<script>
  export default {
    computed: {
      playing() {
        return this.$store.state.playing
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .controls
    position: absolute
    top: 440px
    left: 50%
    transform: translateX(-50%)
    .control-button
      transform: scale(2.0)
      width: 30px
</style>
