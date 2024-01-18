import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "form",
    component: () => import("./components/FormQuizOption.vue"),
  },
  {
    path: "/quiz/:schoolSubjects/:difficultyLevel",
    name: "quiz",
    component: () => import("./components/Quiz.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
