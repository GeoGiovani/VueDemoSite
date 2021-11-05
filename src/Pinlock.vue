<template>
  <div>
    <div id="Pinlock">
      <login />
    </div>
    <div id="Documentation">
      <documentation />
    </div>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Documentation from './components/pincode/Documentation.vue'

export default {
  name: 'Pinlock',
  components: {
    Login,
    Documentation
  }
}
</script>

<style scoped>
#Documentation {
  text-align: left;
  margin-top: 20vh;
  padding-bottom: 3vh;
}
</style>
