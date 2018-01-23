import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/second/HelloJdb'
import secondtest from '@/components/second/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SecondHelloWorld',
      component: HelloWorld
    },
    {
      path: '/cpage',
      name: 'SecondtTest',
      component: secondtest
    }
  ]
})
