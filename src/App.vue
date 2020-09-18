<template>
  <div id="app" @click="playSound()">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  @import "assets/scss/wrappers";
  @import "assets/scss/global";
  @import "../node_modules/@themesberg/windows-95-ui-kit/css/w95.css";
  @import "assets/scss/bubbles";
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<script>
import CLICK from '@/assets/audio/pcmouseclick1.mp3';

export default {
  methods: {
    playSound() {
      const audio = new Audio(CLICK);
      audio.play();
    },
  },
};
</script>
