<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import Test from "./Test.vue";
import axios from "axios";

const route = useRoute();
const store = useStore();

let loading = ref(true);
let responseData = ref(null);
let schoolSubjects = ref(store.state.schoolSubjects ? store.state.schoolSubjects : "");
let url = ref("");
let content = ref("");
const api = import.meta.env.VITE_API_URL;

const requestQuestions = async () => {
  const formData = new FormData();
  formData.append("quantityOfQuestions", store.state.quantityOfQuestions);

  if (!store.state.filePdf && store.state.schoolSubjects) {
    formData.append("schoolSubjects", store.state.schoolSubjects);
    formData.append("difficultyLevel", store.state.difficultyLevel);

    url = `${api}/form`;
    content = "application/x-www-form-urlencoded";
  }

  if (store.state.filePdf && !store.state.schoolSubjects) {
    formData.append("pdf", store.state.filePdf);
    url = `${api}/pdf`;
    content = "multipart/form-data";
  }

  try {
    console.log(url);
    const token = sessionStorage.getItem('token_user'); // Obtém o token do sessionStorage
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": content,
        "Accept": "application/json",
        "Authorization": `Bearer ${token}` // Adiciona o token ao cabeçalho da requisição
      },
    });
    loading.value = false;
    responseData.value = response.data;

    console.log(responseData.value);
  } catch (error) {
    console.error("Error:", error);
  }

  if (responseData.value) {
    store.dispatch("setSchoolSubjects", null);
    store.dispatch("setDifficultyLevel", null);
    store.dispatch("setQuantityOfQuestions", null);
    store.dispatch("setFilePdf", null);
  }
};

onMounted(() => {
  requestQuestions();
});
</script>

<template>
  <div v-if="loading">
    <span class="loader"></span>
    <p class="text-white font-bold">Carregando...</p>
  </div>
  <div
      class="w-2/5 mx-auto bg-white p-6 rounded-md shadow-md mt-10 mb-10"
      v-else
  >
    <Test
        :questionsGenerated="responseData"
        :schoolSubjects="schoolSubjects"
    />
  </div>
</template>

<style scoped>
.loader {
  font-size: 48px;
  color: #fff;
  width: 1em;
  height: 1em;
  box-sizing: border-box;
  background-color: currentcolor;
  position: relative;
  border-radius: 50%;
  transform: rotateX(-60deg) perspective(1000px);
}
.loader:before,
.loader:after {
  content: "";
  display: block;
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  animation: flowerFlow 1s ease-out infinite;
}
.loader:after {
  animation-delay: 0.4s;
}

@keyframes flowerFlow {
  0% {
    opacity: 1;
    transform: rotate(0deg);
    box-shadow: 0 0 0 -0.5em currentcolor, 0 0 0 -0.5em currentcolor,
    0 0 0 -0.5em currentcolor, 0 0 0 -0.5em currentcolor,
    0 0 0 -0.5em currentcolor, 0 0 0 -0.5em currentcolor,
    0 0 0 -0.5em currentcolor, 0 0 0 -0.5em currentcolor;
  }
  100% {
    opacity: 0;
    transform: rotate(180deg);
    box-shadow: -1em -1em 0 -0.35em currentcolor,
    0 -1.5em 0 -0.35em currentcolor, 1em -1em 0 -0.35em currentcolor,
    -1.5em 0 0 -0.35em currentcolor, 1.5em -0 0 -0.35em currentcolor,
    -1em 1em 0 -0.35em currentcolor, 0 1.5em 0 -0.35em currentcolor,
    1em 1em 0 -0.35em currentcolor;
  }
}
</style>
