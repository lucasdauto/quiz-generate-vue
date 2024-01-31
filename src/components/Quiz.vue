<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import Test from "./Test.vue";
import axios from 'axios';

const route = useRoute();
const store = useStore();

let loading = ref(true);
let responseData = ref(null);

 const requestQuestions = async () => {
    const formData = new FormData();
    formData.append("schoolSubjects", store.state.schoolSubjects);
    formData.append("difficultyLevel", store.state.difficultyLevel);
    formData.append("quantityOfQuestions", store.state.quantityOfQuestions);

    try {
        const response = await axios.post("http://localhost/api/adaptive-quiz/form", formData, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            }
        });
        loading.value = false;
        responseData = response.data;
    } catch (error) {
        console.error('Error:', error);
    }
}

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
    <Test :responseData="responseData" />
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
