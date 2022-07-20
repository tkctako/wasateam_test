import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',   
    name: 'home',
    component: HomeView,
    meta: {
      title: '選擇輸入樣式',
      description: '透過下拉式表單，來選擇輸入樣式。',
      backgroundColor: '#dddeee'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: '串接列表資料',
      description: '呼叫假的API，來串接列表資料，資料來源自https://wasateam.com/。',
      backgroundColor: '#e7eedd'
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.meta.description) {
    document
    .querySelector('meta[name="description"]')
    .setAttribute('content', to.meta.description);
  }
  if (to.meta.backgroundColor) {
    document
    .querySelector("body")
    .setAttribute("style", `background-color: ${ to.meta.backgroundColor }`);
  }
  next();
})

export default router
