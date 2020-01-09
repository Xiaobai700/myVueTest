import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import WebSocketDemo from '../websocketDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/webSocketDemo',
      name: 'webSocketDemo',
      component: WebSocketDemo
    }
  ]
})
