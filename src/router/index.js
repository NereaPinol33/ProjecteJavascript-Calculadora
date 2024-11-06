import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import CalculatorView from '../views/CalculatorView.vue'
import Api1View from '@/views/Api1View.vue'
import Api2View from '@/views/Api2View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingView,
    },
    {
      path: '/calculadora',
      name: 'calculator',
      component: CalculatorView,
    },
    {
      path: '/api1',
      name: 'api1',
      component: Api1View,
    },
    {
      path: '/api2',
      name: 'api2',
      component: Api2View,
    },
  ],
})

export default router
