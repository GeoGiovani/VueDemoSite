<template>
  <div id="Promodoro">
    <pomodoro />
  </div>
</template>

<script>
import Pomodoro from './components/State/Pomodoro.vue'

export default {
  name: 'Promodoro',
  components: {
    Pomodoro,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:500');
#Promodoro {
  font-family: 'Montserrat';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
