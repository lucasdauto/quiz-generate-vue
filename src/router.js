import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./components/Home.vue"),
  },
  {
    path: "/gerador-por-disciplina",
    name: "form",
    component: () => import("./components/FormQuizOption.vue"),
  },
  {
    path: "/quiz",
    name: "quiz",
    component: () => import("./components/Quiz.vue"),
    props: true,
  },
  {
    path: "/gerador-por-pdf",
    name: "pdf",
    component: () => import("./components/FormPDF.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./components/Login.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('token_user');
  const tokenExpiration = sessionStorage.getItem('token_expiration');

  if (to.name !== 'login') {
    if (!token || !tokenExpiration || new Date().getTime() >= parseInt(tokenExpiration, 10)) {
      next('/login');
    } else {
      const expirationTime = parseInt(tokenExpiration, 10);
      const currentTime = new Date().getTime();
      const timeRemaining = expirationTime - currentTime;

      if (timeRemaining <= 0) {
        next('/login');
      } else {
        next();
      }
    }
  } else {
    next();
  }
});

export default router;
