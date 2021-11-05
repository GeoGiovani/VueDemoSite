<template>
  <div class="controls">
    <button class="controls_button" @click="toggleOptions">Options</button>
    <button class="controls_button" @click="togglePlaying">
      <transition-group name="toggle-buttons">
        <span v-if="isPlaying" key="stop"> Stop </span>
        <span v-else key="play"> Start </span>
      </transition-group>
    </button>
    <button class="controls_button" @click="skip">Skip</button>
    <options v-show="isShowingForm" @setForm="setForm" @close="toggleOptions" />
  </div>
</template>

<script>
import Options from "./Options.vue";
export default {
  components: {
    Options,
  },
  data() {
    return {
      isPlaying: false,
      isShowingForm: false,
    };
  },
  methods: {
    setForm(formValues) {
      this.$emit("setForm", formValues);
    },
    skip() {
      this.$emit("skip");
    },
    togglePlaying() {
      this.isPlaying = !this.isPlaying;
      this.$emit("togglePlaying", this.isPlaying);
    },
    toggleOptions() {
      this.isShowingForm = !this.isShowingForm;
    },
  },
};
</script>

<style scoped>


.toggle-buttons-enter-active{
	transition: all 0.3s linear;
}
.toggle-buttons-enter, .toggle-buttons-leave-to{
	transform: translateY(5px);
  opacity: 0
}

.controls{
	margin: auto;
	width: 100%;
	display: flex;
	justify-content: center;
}

.controls_button{
	width: 6rem;
	background-color: #35495e;
	border-color: transparent;
	height: 2.5rem;
	font-size: 1rem;
	margin-left: 1rem;
	margin-right: 1rem;
	font-family: 'Montserrat';
	transition: 0.3s;
	border-radius: 0.25rem;
	color:white;
  box-shadow: 0px 0px 10px #888888;
}

.controls_button:hover{
	cursor: pointer;
	background-color: #42b883;
	border-radius: 1rem;
}


.controls_button:active{
  transform: translateY(6px);
}

</style>