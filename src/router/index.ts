import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HelloPage/HelloPage.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView/AboutView.vue')
    },
    {
      path: '/hello',
      name: 'hello',
      component: () => import('../views/HelloPage/HelloPage.vue')
    },
    {
      path: '/drinks/seller',
      name: 'drinks-seller',
      component: () => import('../views/drinks-seller/DrinksSeller.vue')
    },
    {
      path: '/drinks/admin',
      name: 'drinks-admin',
      component: () => import('../views/drinks-admin/DrinksAdmin.vue')
    }
  ]
})

export default router
