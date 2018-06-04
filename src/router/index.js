import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import LoginScreen from '@/components/LoginScreen'
import ChatScreen from '@/components/ChatScreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginScreen',
      component: LoginScreen
    },
    {
      path: '/chat',
      name: 'ChatScreen',
      component: ChatScreen
    }
  ]
})
