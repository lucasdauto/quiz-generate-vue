<template>
  <h2 class="text-center text-2xl font-bold">
    {{ schoolSubjects.toUpperCase() }}
  </h2>
  <form @submit.prevent="submitForm" class="space-y-4" v-if="!showResults">
    <div
      v-for="(question, index) in questions"
      :key="index"
      class="bg-white shadow rounded px-6 py-4"
    >
      <p class="font-bold mb-2">{{ question.pergunta }}</p>
      <div
        v-for="(answer, key) in question.alternativas"
        :key="key"
        class="flex items-center space-x-2"
      >
        <input
          type="radio"
          :value="key"
          v-model="userAnswers[index]"
          :id="key"
          class="form-radio text-blue-500"
        />
        <label :for="key" class="text-gray-700">{{ answer }}</label>
      </div>
    </div>
    <button
      type="submit"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right"
    >
      Enviar resposta
    </button>
  </form>

  <div v-if="showResults" class="mt-4">
    <h2 class="text-center text-2xl font-bold">Resultados:</h2>
    <div
      v-for="(question, index) in questions"
      :key="index"
      class="bg-white shadow rounded px-6 py-4 mt-4"
    >
      <p class="font-bold mb-2">{{ question.pergunta }}</p>
      <div class="flex items-center space-x-2">
        <span
          :class="{
            'text-green-500': userAnswers[index] === question.correta,
            'text-red-500': userAnswers[index] !== question.correta,
          }"
        >
          Sua resposta está
          {{ userAnswers[index] !== question.correta ? "errada" : "correta" }}:
          {{ userAnswers[index].toUpperCase() }} -
          {{ question.alternativas[userAnswers[index]] }}
          <br />
        </span>
        <span
          v-if="userAnswers[index] === question.correta"
          class="text-green-500"
        >
          Resposta correta: {{ question.correta.toUpperCase() }} -
          {{ question.alternativas[question.correta] }}
        </span>
        <span
          v-if="userAnswers[index] !== question.correta"
          class="text-red-500"
        >
          Resposta correta: {{ question.correta.toUpperCase() }} -
          {{ question.alternativas[question.correta] }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

const props = defineProps(["questionsGenerated", "schoolSubjects"]);

const userAnswers = ref([]);
const showResults = ref(false);
let questions = [];

if (props.questionsGenerated) {
  try {
    questions = JSON.parse(props.questionsGenerated);
  } catch (error) {
    console.error("Erro ao analisar JSON em questionsGenerated:", error);
  }
}

const submitForm = () => {
  showResults.value = true;
};
</script>

<style scoped>
.text-green-500 {
  color: #48bb78;
}

.text-red-500 {
  color: #f56565;
}
</style>
