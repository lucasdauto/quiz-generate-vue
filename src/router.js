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
    path: "/quiz/:schoolSubjects/:difficultyLevel",
    name: "quiz",
    component: () => import("./components/Quiz.vue"),
    props: true,
  },
  {
    path: "/gerador-por-pdf",
    name: "pdf",
    component: () => import("./components/FormPDF.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
