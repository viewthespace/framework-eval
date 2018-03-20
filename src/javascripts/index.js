import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import UserForm from '@routes/UserForm'

const routes = [
  { path: '/', component: App },
  {
    path: '/user/:userId',
    components: {
      default: App,
      modal: UserForm
    }
  }
]

const router = new VueRouter({ routes })
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router
})
