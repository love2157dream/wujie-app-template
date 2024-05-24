import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MicroAppView from '../views/MicroAppView.vue'
import React18 from '../views/React18.vue'
import Vue3 from '../views/Vue3.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/react18',
      name: 'react18',
      component: React18,
    },
    {
      path: '/vue3',
      name: 'vue3',
      component: Vue3,
    }
  ]
})

export default router
