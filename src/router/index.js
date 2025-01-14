import { createRouter, createWebHistory } from 'vue-router'
import Search from '../views/Search.vue'
import PartyPlanner from '../views/PartyPlanner.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'search',
      component: Search,
    },
    {
      path: '/party-planner',
      name: 'PartyPlanner',
      component: PartyPlanner,
    },
  ],
})

export default router
