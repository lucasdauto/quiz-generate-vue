import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./components/Home.vue')
    },
    {
        path: '/form',
        name: 'form',
        component: () => import('./components/FormQuizOption.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;