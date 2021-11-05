<template>

  <div class="timer">
    <div class="header">
      <h3>Pomodoro Timer</h3>
      <h4>Example of state management, passing data to components and callbacks with the help of VueX</h4>
    </div>
    <p class="title">{{ step.title }}</p>
    <timer :timer="step.time" :isPlaying="isPlaying" @timeFinished="setNextStep" />
    <p class="rounds">{{ round }}/{{ rounds }} rounds</p>
    <controller
      @togglePlaying="setPlaying"
      @skip="setNextStep"
      @setForm="setForm"
    />
    <documentation/>
  </div>
</template>

<script>
import Timer from "./Timer.vue";
import Controller from "./Controller.vue";
import timer from "./enums/timer";
import Documentation from './Documentation.vue';

const { FOCUS, SHORT, LONG, ROUNDS } = timer;

export default {
  components: { Timer, Controller, Documentation },
  name: "Pomodoro",
  data() {
    return {
      round: 1,
      rounds: ROUNDS,
      isPlaying: false,
      step: null,
      steps: {
        focus: {
          time: FOCUS.TIME,
          title: FOCUS.LABEL,
        },
        shortBreak: {
          time: SHORT.TIME,
          title: SHORT.LABEL,
        },
        longBreak: {
          time: LONG.TIME,
          title: LONG.LABEL,
        },
      },
    };
  },
  created() {
    this.setStep(this.steps.focus);
  },
  computed: {
    stepClass() {
      if (!this.step) return "";
      const getstep = {
        [FOCUS.LABEL]: "focus",
        [SHORT.LABEL]: "short",
        [LONG.LABEL]: "long",
      };
      return `page--${getstep[this.step.title]}`;
    },
  },
  methods: {
    setNextStep() {
      const { title } = this.step;
      if (title === LONG.LABEL) {
        this.setRound(1);
        this.setStep(this.steps.focus);
      } else if (title === FOCUS.LABEL && this.round === this.rounds) {
        this.setStep(this.steps.longBreak);
      } else if (title === FOCUS.LABEL && this.round !== this.rounds) {
        this.setStep(this.steps.shortBreak);
      } else if (title === SHORT.LABEL && this.round !== this.rounds) {
        this.setStep(this.steps.focus);
        this.setRound(this.round + 1);
      }
    },
    setPlaying(playing) {
      this.isPlaying = playing;
    },
    setStep(step) {
      this.step = step;
    },
    setRound(round) {
      this.round = round;
    },
    setForm(steps) {
      Object.entries(steps).forEach(([key, val]) => {
        if (key === "rounds") {
          this.rounds = Math.abs(val);
        } else {
          this.steps[key].time = val;
        }
        this.setRound(1);
        this.setStep(this.steps.focus);
      });
    },
  },
};
</script>

<style scoped>

.header{
  width: 100%;
  text-align: center;
}

.title{
  width: 100%;
  text-align: center;
  font-size: 2rem;
}

.rounds{
  width: 100%;
  text-align: center;
  font-size: 2rem;
}

</style>