<template>
  <transition name="modal--fade">
    <div @click.self="close" class="modal">
      <article class="modal_container" role="dialog">
        <header>
          <h1 class="modal_title">Options</h1>
          <button @click="close" class="modal_close">X</button>
        </header>
        <main class="modal_body">
          <form @submit.prevent="setForm">
            <div class="form_content">
              <div class="form_input">
                <label for="focus" class="input_label"> Focus </label>
                <input
                  v-model="form.focus"
                  v-mask="'##:##'"
                  id="focus"
                  class="input_field"
                />
              </div>
              <div class="form_input">
                <label for="short-break" class="input_label">
                  Short Break
                </label>
                <input
                  v-model="form.shortBreak"
                  v-mask="'##:##'"
                  id="short-break"
                  class="input_field"
                />
              </div>
              <div class="form_input">
                <label for="long-break" class="input_label"> Long Break </label>
                <input
                  v-model="form.longBreak"
                  v-mask="'##:##'"
                  id="long-break"
                  class="input_field"
                />
              </div>
              <div class="form_input">
                <label for="Rounds" class="input_label"> Rounds </label>
                <input
                  v-model="form.rounds"
                  id="rounds"
                  class="input_field"
                  type="number"
                  min="0"
                />
              </div>
            </div>
            <div class="form_footer">
              <button type="submit" class="controls_button">Save</button>
            </div>
          </form>
        </main>
      </article>
    </div>
  </transition>
</template>

<script>
import timer from "./enums/timer";
import { mask } from "vue-the-mask";

const { FOCUS, SHORT, LONG, ROUNDS } = timer;

export default {
  directives: { mask },
  data() {
    return {
      form: {
        focus: FOCUS.TIME,
        shortBreak: SHORT.TIME,
        longBreak: LONG.TIME,
        rounds: ROUNDS,
      },
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    setForm() {
      this.$emit("setForm", this.form);
      this.close();
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c3e50aa;
}

.modal_container {
  border-radius: 1rem;
  border: 2px solid #2c3e50;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50rem;
  padding: 1rem 1rem;
  position: relative;
}
.modal_title{
  font-size:2rem;
  text-align: center;
  font-weight: 400;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.modal_close{
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  background-color: #42b883;
  border-color: transparent;
  color: white;
  box-shadow: 0px 0px 4px #2c3e50;
  border-radius: 100%;
}

.form_content{
  display: grid;
  justify-content: space-around;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 25%);
  row-gap: 2rem;
  column-gap: 3rem;
  margin: 4rem 0
}

.form_input{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.input_label{
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 0.3rem;
}

.input_field{
  width: 100%;
  border: 1px solid #2c3e50;
  border-radius: 0.5rem;
  padding: .3rem .5rem;
  text-align:  center;
  font-size: 1.4rem;
  outline: none;
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


.modal--fade-enter,
.modal--fade-leave-active {
  opacity: 0;
  top: -10px;
}
.modal--fade-enter-active,
.modal--fade-leave-active {
  transition: all 0.4s ease;
}
</style>