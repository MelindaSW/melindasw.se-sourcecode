import Vue from 'vue'
import VueRouter from 'vue-router'
import { Home, Projects, Gallery } from '../views'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
