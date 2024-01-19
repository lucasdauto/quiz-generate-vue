<script setup>
import { ref } from "vue";
import FormQuizOption from "./FormQuizOption.vue";
import TitleSystem from "./common/TitleSystem.vue";

const buttons = ref([
  { text: "Gerador por Disciplina", route: "/gerador-por-disciplina" },
  { text: "Gerador por PDF", route: "/gerador-por-pdf" },
]);
</script>

<template>
  <div class="flex flex-col items-center">
    <!-- Logo redacao online -->
    <img
      src="@/assets/logo-redacao-branca.svg"
      alt="Logo Redação Online"
      class="w-45 h-40 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] shadow-black"
    />
    <div class="flex space-x-8">
      <TitleSystem />
      <div class="flex flex-col space-y-8 text-center">
        <router-link
          :to="button.route"
          :key="button.text"
          v-for="button in buttons"
          class="bg-white hover:bg-white text-blue-800 font-bold py-2 px-4 border-b-4 border-White hover:border-blue-800 rounded shadow"
        >
          {{ button.text }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<!--  -->
