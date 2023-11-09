import { createRouter, createWebHistory } from 'vue-router'
import { POKEMON_ROUTES } from '../modules/pokemon/router/router.ts'
import HomePage from '../views/Home.page.vue'
import NotFoundPage from '../views/NotFound.page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/pokemon',
      children: POKEMON_ROUTES
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundPage
    }
  ]
})

//guard global sync to use async just add async in callback function async (to, from, next)
// to use guard for only one route read beforeEnter option in routes object
router.beforeEach((to, from, next) => {
  console.log('before', to, from, next)
  const is_authenticaded = true
  // if authenticated
  if (is_authenticaded) {
    next()
  } else {
    next('/')
  }
})

export default router
