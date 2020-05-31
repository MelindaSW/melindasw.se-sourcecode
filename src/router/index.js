import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Projects from '../views/Projects'
import Gallery from '../views/Gallery'

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
  routes
})

export default router
