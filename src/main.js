// import './assets/main.css'
import "tailwindcss/tailwind.css";
import "flowbite";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).use(Toast).mount("#app");
