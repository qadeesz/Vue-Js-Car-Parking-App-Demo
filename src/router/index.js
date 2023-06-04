import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


function auth(to, from, next) {
  if (!localStorage.getItem('access_token')) {
    return next({ name: "login" });
  }
  next();
}

function guest(to, from, next) {
  if (localStorage.getItem('access_token')) {
    return next({ name: "vehicles.index" });
  }
  next();
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      beforeEnter: guest,
      component: () => import('@/Views/Auth/RegisterView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      beforeEnter: guest,
      component: () => import('@/Views/Auth/LoginView.vue'),
    },
    {
      path: '/profile',
      name: 'profile.edit',
      beforeEnter: auth,
      component: () => import('@/Views/Profile/EditView.vue'),
    },
    {
      path: '/profile/change-password',
      name: 'profile.change-password',
      beforeEnter: auth,
      component: () => import('@/Views/Profile/ChangePassword.vue'),
    },
    {
      path: '/vehicles',
      name: 'vehicles.index',
      beforeEnter: auth,
      component: () => import('@/Views/Vehicles/IndexView.vue'),
    },
  ]
})

export default router
