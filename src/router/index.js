import { createRouter, createWebHistory } from 'vue-router'
import GameApp from '../views/game-app.vue'
import GameDetails from '../views/game-details.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/game',
      component: GameApp
    },
    {
      path: '/game/:gameId',
      name: 'game - details',
      component: GameDetails
    },
    {
      // path: '/about',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
