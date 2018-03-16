import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

const routes = [{ path: '/', component: App }]
const router = new VueRouter({ routes })
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router
})
