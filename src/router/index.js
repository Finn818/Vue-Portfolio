import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/HomeComponent.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutComponent.vue')
  },
  {
    path: '/services',
    name: 'service',
    component: () => import('../views/ServicesComponent.vue')
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: () => import('../views/TestimonialsComponent.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsComponent.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactComponent.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
