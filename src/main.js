import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
window.axios = require('axios');

//axios.defaults.headers.common['Authorization'] = store.api_token;
const token = localStorage.getItem('user-token')
if (token) {
    axios.defaults.headers.common['Authorization'] = token
}
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

