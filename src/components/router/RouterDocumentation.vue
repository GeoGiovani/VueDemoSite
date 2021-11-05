<template>
  <div class="documentation">
    <h2>Overview of how we used Vue Router to navigate between pages</h2>

    <p class="source">This component was adapted from
      <cite><a href="https://github.com/weslinkde/vue-pincode">
        https://github.com/weslinkde/vue-pincode
      </a></cite>
    </p>

    <h3>Vue Router Integration</h3>
    <hr />
    <p>
      Integration of Vue Router into a Vue Application is as simple as defining
      a set of routes that have associated components:
    </p>
    <div v-highlight class="code language-javascript">
      <pre>
<code>
  const routes = [
    { path: '/Promodoro', component: Promodoro },
    { path: '/Pinlock', component: Pinlock },
    { path: '/Router', component: RouterDocumentation },
  ]
</code>
				</pre>
    </div>

    <p>
      And then telling Vue to use VueRouter as well as our routes:
    </p>
    <div v-highlight class="code language-javascript">
      <pre>
<code>
  import VueRouter from 'vue-router'

  const router = new VueRouter({
    routes
  })
</code>
				</pre>
    </div>

    <h3>Vue Router NavBar</h3>
    <hr />
    <p>
      To create a simple NavBar to make use of Vue Router for navigating
      between the pages of our app, we simply took a standard navbar and 
      made use of <code class="inline">&lt;router-link /&gt;</code> elements
      in-place of the typical <code class="inline">&lt;li&gt;</code> elements:
    </p>

    <div v-highlight class="code language-javascript">
      <pre>
<code>
  &lt;template&gt;
    &lt;div id="SidebarBrowser"&gt;
      &lt;ul&gt;
        &lt;router-link to="/" tag="li"&gt;Promodoro&lt;/router-link&gt;
        &lt;router-link to="/pinlock" tag="li"&gt;Pinlock&lt;/router-link&gt;
        &lt;router-link to="/router" tag="li"&gt;Router&lt;/router-link&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/template&gt;
</code>
        </pre>
    </div>

    <p>
      Note the use of the <code class="inline">tag="li"</code> directive. this
      let us style the <code class="inline">&lt;router-link /&gt;</code> 
      elements using CSS that targets <code class="inline">&lt;li&gt;</code> 
      elements.
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
  padding-top: 10vh;
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
