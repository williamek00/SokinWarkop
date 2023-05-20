import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Warkop from '../views/Warkop.vue'
import WarkopDetail from '../views/WarkopDetail.vue'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Favourite from '../views/Favourite.vue'
import Weather from '../views/Weather.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/warkop',
      name: 'warkop',
      component: Warkop
    },
    {
      path: '/warkop/:id',
      name: 'warkopDetail',
      component: WarkopDetail
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/favourite',
      name: 'favourite',
      component: Favourite
    },
    {
      path: '/weather/:id',
      name: 'weather',
      component: Weather
    }
  ]
})

router.beforeEach(async (to,from) => {
  if (!localStorage.access_token && to.name === "favourite") {
    return { path : "/login"};
  } else if (localStorage.access_token && to.name === "login") {
    return {path : "/warkop"};
  } 
})

export default router
