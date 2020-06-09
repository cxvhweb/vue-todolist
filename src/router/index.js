import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home/index.vue'
import Notfind from '@/pages/Home/404.vue'

import Testrouter from '@/pages/Testrouter/index.vue'

import PageA from '@/pages/Testrouter/a.vue'
import PageB from '@/pages/Testrouter/b.vue'
import PageC from '@/pages/Testrouter/c.vue'

import VuexPage from '@/pages/Vuex/index.vue'

Vue.use(VueRouter)
/*
export default new Router({
  routes: [
    {
      path: '/',
      name: 'todolist',
      component: Home
    },
    {
      path: '/a',
      name: 'test Router a',
      component: PageA
    },
    {
      path: '/b',
      name: 'test Router b',
      component: PageB
    }
  ]
})
*/
// 路由守卫使用
const routes=[
    {
      path: '/',
      name: 'todolist',
      component: Home
    },
    {
      path: '/test',
      name: 'Testrouter',
      component: Testrouter
    },
    {
      path: '/a',
      name: 'page a',
      component: PageA
    },
    {
      path: '/b',
      name: 'page b',
      component: PageB
    },
    {
      path: '/c',
      name: 'page c',
      component: PageC
    },
    {
      path: '/vuex',
      name: 'VuexPage',
      component: VuexPage
    },
    {
      path: '*',
      name: '404',
      component: Notfind
    }
];
const router=new VueRouter({
  mode:'history'||'hash',
  routes
})
router.beforeEach((to, from, next) => {
  const isshow=localStorage.isshow&&localStorage.isshow==="true"?true:false;
  if(
    to.path=='/'||
    to.path=='/test'||
    to.path=='/a'||
    to.path=='/b'||
    to.path=='/vuex'
  ){
    next();
  }else{
    // 拦截c /c
    console.log(isshow)
    isshow?next():next('/test');
  }
})

export default router;
