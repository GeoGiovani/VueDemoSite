<template>
  <div class="documentation">
    <h2>Overview of how Vue powers this Pinlock Component</h2>
    <p class="source">This component was adapted from
      <cite><a href="https://github.com/weslinkde/vue-pincode">
        https://github.com/weslinkde/vue-pincode
      </a></cite>
    </p>
    <h3>Components</h3>
    <hr />
    <p>
      Various component layers have been used to produce this Pinlock:
    </p>
    <ul>
      <li>
        <strong>Pincode Parent: </strong> the base component that
        holds together the progress bar and keypad.
        <ul>
          <li>
            <strong>Progress Bar: </strong> Shows how many digits have been 
            entered 
          </li>
          <li>
            <strong>Keypad: </strong> Used to enter the passcode (1234)
          </li>
        </ul>
      </li>
      
      <li>
        <strong>Login Manager: </strong> Handles successful and unsuccessful
        attempts to unlock the lock.
      </li>
    </ul>

    <p>
      For the Login Manager to use the Pincode Parent, the child component 
      has to be registered: <br />
    </p>
    <div v-highlight class="code language-javascript">
      <pre>
          <code>import VuePincode from "./Pincode";
          export default {
            name: 'Login',
            components: {
              VuePincode
            }
          }</code>
				</pre>
    </div>

    <p>
      This makes the <code class="inline">VuePincode</code> component available
      for use in the <code class="inline">Login</code> component's template:
    </p>
    <div v-highlight class="code language-javascript">
      <pre>
  <code>&lt;template&gt;
  &lt;div id="Pinlock"&gt;
    &lt;img alt="Vue logo" src="../assets/logo.png" /&gt;
    &lt;div class="container"&gt;
      &lt;vue-pincode
        ref="pincodeInput"
        @pincode="checkPincode"
      /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;template&gt;
          </code>
        </pre>
    </div>

    <h3>State Management</h3>
    <hr />
    <p>
      The <code class="inline">VuePincode</code> component implements the core
      functionality required to enter, store, and check a passcode. The
      <code class="inline">pincode</code> local variable maintains the pincode,
      and the methods <code class="inline">clickPinButton()</code> are used to
      grow the puincode. Once the pincode reaches 4 characters in length,
      <code class="inline">pincode()</code> is used to emit an event:
    </p>
    <div v-highlight class="code language-javascript">
      <pre>
      <code>clickPinButton(pressedNumber) {
        if (this.pincodeLength &lt; 4) {
          this.pincode = this.pincode + pressedNumber;
      }

      watch: {
        pincode() {
          if (this.pincodeLength === 4) {
            this.$emit("pincode", this.pincode);
          }
        }
      }
        </code>
      </pre>
    </div>
    <p>
      The <code class="inline">Login</code> component provides the 
      <code class="inline">VuePincode</code> component with the 
      <code class="inline">pincode()</code> function, which it uses to check 
      if the entry is correct:
    </p>
    <div v-highlight class="code language-javascript">
      <pre>
    <code>
      &lt;vue-pincode 
        ref="pincodeInput" 
        @pincode="checkPincode" 
      /&gt;

      methods: {
        checkPincode(pincode) {
          setTimeout(() => {
            if (pincode === "1234") {
              this.$refs.pincodeInput.triggerSuccess();
            } else {
              this.$refs.pincodeInput.triggerMiss();
            }
          }, 700);
       }</code>
      </pre>
    </div>
    <p>
      <strong>Note: </strong>The <code class="inline">this</code> keyword refers
      to the Vue object that is calling it.
    </p>
    
    <h3>Templating and Styling - Vue Directive Magic</h3>
    <hr />
    <p>
      To create the button grid seen above, the 
      <code class="inline">VuePincode</code> component makes use of Vue's 
      powerful <code class="inline">v-for</code> directive, which allows for the
      rendering of a list from an array:
    </p>
    <div v-highlight class="code language-javascript">
      <pre>
<code>
&lt;button
  v-for="(number, idx) in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
  :key="idx"
  class="shadow"
  @click="clickPinButton(number)"
  :disabled="buttonDisabled"
&gt;
  &lt;span&gt;{{ number }}&lt;/span&gt;
&lt;/button&gt;
</code>
      </pre>
    </div>
    <p>
      To create the neomorphic effect, the creator of this Pinlock made use of
      SCSS to precompile CSS. Vue can be made to use SCSS in specific components
      by adding the <code class="inline">lang="scss"</code> tag to a 
      <code class="inline">&lt;style&gt;</code> block.
    </p>
  </div>
</template>

<script>
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";

export default {};
</script>

<style scoped>
p {
  margin-top: 2rem;
  line-height: 1.5rem;
}

.source {
  font-weight: 300;
}

.code {
  white-space: nowrap;
  display: flex;
  min-width: 250px;
  max-width: 500px;
  margin: auto;
}
.inline {
  font-size: 1rem;
  background-color: #35495e;
  color: #47ebb4;
  border-radius: 0.25rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

.documentation {
  padding-right: 15px;
  padding-left: 15px;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 768px) {
  .documentation {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .documentation {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .documentation {
    width: 1170px;
  }
}
</style>
