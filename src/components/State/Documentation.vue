<template>
  <div class="documentation">
    <h2>Overview of how Vue was used to create this Pomodoro Demo</h2>
    <h3>Components</h3>
    <hr />
    <p>
      Multiple components were used to create this demo. The timer was split
      into 4 parts - Parent Component, Controller, Options, and Timer.
    </p>
    <ul>
      <li>
        <strong>Parent Component: </strong> Used as the base component which
        held together the other components.
      </li>
      <li>
        <strong>Timer: </strong>Clock component with the radial progress bar.
      </li>
      <li>
        <strong>Controller: </strong>Was used for the button controls under the
        timer.
      </li>
      <li>
        <strong>Options: </strong>Popup window to set options for the pomodoro
        timer.
      </li>
    </ul>
    <p>
      In order for the parent components to be able to use their child
      components, the child component has to be registered. <br />
      Registration is done in the following manner:
    </p>
    <div v-highlight class="code language-javascript">
      <pre>
          <code>export default {
            name: 'App',
            components: {
              Pomodoro
            }
          }</code>
				</pre>
    </div>
    <p>
      In this example the Pomodoro component was made available for use in the
      App component and can now be used in the template.
    </p>
    <h3>State Management</h3>
    <hr />
    <p>
      Each component has access to a variety of local variables. These variables
      are defined under the <code class="inline">data</code> field. It is
      important to keep in mind that the <code class="inline">data</code> field
      has to be a function, otherwise all objects sharing this component will
      also share the values for the returned data.
      <br />
      Example of a component's state variables:
    </p>
    <div v-highlight class="code language-javascript">
      <pre>
        <code>export default {
            components: {
              Options,
            },
            data() {
              return {
                isPlaying: false,
                isShowingForm: false,
              };
            },</code>
      </pre>
    </div>
    <p>
      These state variables can be used in the html template as well as any
      function within the component, and will cause a re-render of the component
      upon change. As an example, we can have a getter and setter function:
      <br />
    </p>
    <div v-highlight class="code language-javascript">
      <pre>
        <code>export default {
          ...,
          methods:{
            setIsPlaying(playing){
              this.isPlaying = playing;
            },
            getIsPlaying(){
              return this.isPlaying;
            }
          }
          </code>
      </pre>
    </div>
    <p>
      <strong>Note: </strong>The <code class="inline">this</code> keyword refers
      to the Vue object that is calling it.
    </p>
    <h3>Information Passing and Callbacks</h3>
    <hr />
    <p>
      Since Vue is a component based framework, we need a way to pass
      information around. This is especially common when there is a requirement
      to send data from a parent to a child component. <br />
      In Vue this is achieved in the template. To pass data to a child
      component, use
      <code class="inline"> &lt;child :var="var-value"/&gt;</code>. In my
      opinion this is not as syntatically clear as it could be, since a small
      spelling error and the compiler will not warn you, leaving you to your own
      resources to find the bug. <br />

      Callbacks are achieved using a similar syntax
      <code class="inline">&lt;child @childFunc="localCallback"/&gt;</code>
      Again, in my opinion this is not very intuitive and can cause annoyences
      when debugging.

      <br />
      A complete example of passing props and using callbacks:
    </p>
    <div v-highlight class="code language-javascript">
      <pre>
        <code>
          //Parent Component
          &lt;template&gt;
            &lt;timer @timeFinished="setNextStep" /&gt;
          &lt;/template&gt;
          &lt;script&gt;
            export defailt(){
              ...,
              methods:{
                setNextStep(){
                  ...;
                }
              }
            }
          &lt;/script&gt;
          
          //Child Component
          &lt;script&gt;
            export defailt(){
              ...,
              methods:{
                setTimeFinished(){
                  this.$emit('timeFinished');
                }
              }
            }
          &lt;/script&gt;
        </code>
      </pre>
    </div>
    <p>
      As you can see, the child component does again not call the passed
      function directly as would happen in other Frameworks such as React. The
      child component emits an event which has to exactly match the name of the
      passed in function. This will result in the passed function executing in
      the parent.
    </p>
    <h3>Templating and Styling</h3>
    <hr />
    <p v-bind:style="{marginBottom: '150px'}">
    Vue is different from other frontend framerwoks such as React since it does
    not use a separate html processign method. A Vue component is split into 3
    tags - <code class="inline">template, scripts, style</code>
    The template tags hold the markup for the page. The script tag is where the all the 
    functionality is placed into. Finally, the style tag is where you can insert the 
    css styleshets. Unlike native html, the style tag can be made scoped to only apply to the 
    scope of the current component.
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