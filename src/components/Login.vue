<template>
  <div id="Pinlock">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="container">
      <vue-pincode ref="pincodeInput" @pincode="checkPincode" />
    </div>
  </div>
</template>

<script>
import VuePincode from "./pincode/Pincode";
export default {
  name: "Login",
  components: {
    VuePincode
  },
  methods: {
    checkPincode(pincode) {
      setTimeout(() => {
        if (pincode === "1234") {
          this.$refs.pincodeInput.triggerSuccess();
        } else {
          this.$refs.pincodeInput.triggerMiss();
        }
      }, 700);
    }
  }
};
</script>

<style lang="scss">
#Pinlock {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  max-width: 320px;
  margin: auto;
}
body {
  background: #e5e5e5;
}
</style>
