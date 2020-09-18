<template>
  <div class="card-primary card error-component">
    <div class="card-header">
      ERROR MESSAGE ...
    </div>
    <div class="card-body">
      <img src="../assets/img/error.png" height="30"> critical error
      <br/>
        Error 200<br/>
        Are you sure you want to do this?<br/>
        Don’t leave us please, we are nice!<br/><br/>
      <a class="btn btn-primary" href="/logout">Let me go !</a><br/>
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
