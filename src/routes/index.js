import Vue from 'vue'
import VueRouter from 'vue-router'
import { Home, Projects, Gallery, HaikuCreator } from '../views'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects/portfolio',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/projects/haikucreator',
    name: 'HaikuCreator',
    component: HaikuCreator
  },
  {
    path: '/*',
    name: 'Not found',
    redirect: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
