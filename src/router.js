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
    },
    {
        path: '/quiz',
        name: 'quiz',
        component: () => import('./components/Quiz.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;