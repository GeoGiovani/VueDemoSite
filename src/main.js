import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Promodoro from './Promodoro'
import Pinlock from './Pinlock'
import RouterDocumentation from './components/router/RouterDocumentation'
import VueCodeHighlight from 'vue-code-highlight';

Vue.use(VueRouter);
Vue.use(VueCodeHighlight);
Vue.config.productionTip = false
const routes = [
    { path: '/', component: Promodoro }, // TODO, change path to '/Promodoro'
    { path: '/Pinlock', component: Pinlock },
    { path: '/Router', component: RouterDocumentation },
]

const router = new VueRouter({
    routes
})



new Vue({
    router,
    render: function(createElement){
        return createElement(App)
    }
}).$mount('#app')
