import Vue from 'vue'
import Router from 'vue-router'

// 按需加载文件
// let HelloWorld = r => require.ensure([], () => r(require('@/components/first/HelloWorld')), 'HelloWorld')
// let FirstTest = r => require.ensure([], () => r(require('@/components/first/test')), 'test')
import HelloWorld from '@/components/first/HelloWorld'
import FirstTest from '@/components/first/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirstHelloWorld',
      component: HelloWorld
    },
    {
      path: '/cpage',
      name: 'FirstTest',
      component: FirstTest
    }
  ]
})
