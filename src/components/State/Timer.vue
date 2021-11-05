<template>
  <radial-progress-bar
    class="progress_bar"
    :diameter="300"
    :completed-steps="completedSteps"
    :total-steps="totalSteps"
    :is-clockwise="false"
    :stroke-width='15'
    :inner-stroke-width='15'
    inner-stroke-color="#2c3e50"
    start-color="#42b883"
    stop-color="#35495e"
  >
    <span class="time">{{ local_timer }}</span>
  </radial-progress-bar>
</template>

<script>
import RadialProgressBar from "vue-radial-progress";
import moment from "moment";

export default {
  components: {
    RadialProgressBar,
  },
  props: {
    timer: {
      type: String,
      required: true,
    },
    isPlaying: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      local_timer: "",
      timerDiameter: 512,
    };
  },
  computed: {
    totalSteps() {
      return this.timeToNum(this.timer);
    },
    completedSteps() {
      return this.timeToNum(this.local_timer) - Math.abs(this.totalSteps);
    },
  },
  mounted() {
    this.setTimerWidth()
    this.setTimer(this.timer);
  },
  watch: {
    timer(value) {
      this.setTimer(value);
      if (this.isPlaying) {
        this.stopTimer();
        this.startTimer();
      }
    },
    isPlaying(playing) {
      if (playing) {
        this.startTimer();
      } else {
        this.stopTimer();
      }
    },
    local_timer(value, oldValue) {
      if (oldValue === "00:01" && value === "00:00") {
        setTimeout(() => {
          this.stopTimer();
          this.setTimeFinished();
        }, 1000);
      }
    },
  },

  methods: {
    setTimerWidth(){
      const {width} = window.screen;
      if (width <= 450){
        this.timerDiameter = 300
      }
      else if (width < 350){
        this.timerDiameter = 250
      }else{
        this.timerDiameter = 400;
      }
    },
    setTimeFinished() {
      this.$emit("timeFinished");
    },
    timeToNum(time) {
      let [min, sec] = time.split(":");
      sec = parseInt(sec) / 60;
      return parseInt(min) + sec;
    },
    setTimer(time) {
      this.local_timer = time;
    },
    countDown() {
      const newTime = moment(this.local_timer, "mm:ss")
        .subtract(1, "seconds")
        .format("mm:ss");
      this.setTimer(newTime);
    },
    startTimer() {
      this.timerInterval = setInterval(() => {
        this.countDown();
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.timerInterval);
    },
  },
};
</script>

<style>
.progress_bar{
  margin: auto;
}
.time{
  font-size: 4rem;
}
</style>