<template>
  <div class="card-primary card error-component">
    <div class="card-header">
      ERROR MESSAGE ...
    </div>
    <div class="card-body">
      <img src="../assets/img/error.png" height="30"> critical error
      <br/>
      <a class="btn btn-primary" href="/logout">GET MET OUT !</a>
    </div>
  </div>
</template>
<script>
import alertSound from '@/assets/audio/erro.mp3';

export default {
  name: 'AlertError',
  mounted() {
    const audio = new Audio(alertSound);
    audio.play();
  },
};
</script>
