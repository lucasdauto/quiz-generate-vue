<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

const newSchoolSubjects = ref("");
const newDifficultyLevel = ref("");
const newQuantityOfQuestions = ref("");

function submitForm() {
  store.dispatch("setSchoolSubjects", newSchoolSubjects.value);
  store.dispatch("setDifficultyLevel", newDifficultyLevel.value);
  store.dispatch("setQuantityOfQuestions", newQuantityOfQuestions.value);

  router.push("/quiz");
}
</script>

<template>
  <div class="w-1/4 mx-auto bg-white p-6 rounded-md shadow-md">
    <!-- Formulário -->
    <form v-on:submit.prevent="submitForm">
      <!-- Primeiro Select -->
      <div class="mb-4">
        <label
          for="schoolSubjects"
          class="block text-sm font-medium text-gray-600"
          >Selecione a disciplina:</label
        >
        <select
          id="schoolSubjects"
          v-model="newSchoolSubjects"
          name="schoolSubjects"
          class="mt-1 p-2 w-full border rounded-md"
          required
        >
          <option value="">Selecione</option>
          <option value="Matemática">Matemática</option>
          <option value="Português">Português</option>
          <option value="Inglês">Inglês</option>
          <option value="Espanhol">Espanhol</option>
          <option value="História">História</option>
          <option value="Ciências">Ciências</option>
          <option value="Geografia">Geografia</option>
          <option value="Filosofia">Filosofia</option>
          <option value="Biologia">Biologia</option>
          <option value="Química">Química</option>
          <option value="Física">Física</option>
          <option value="Sociologia">Sociologia</option>
        </select>
      </div>

      <!-- Segundo Select -->
      <div class="mb-4">
        <label
          for="difficultyLevel"
          class="block text-sm font-medium text-gray-600"
          >Selecione o nivel de dificuldade:</label
        >
        <select
          id="difficultyLevel"
          v-model="newDifficultyLevel"
          name="difficultyLevel"
          class="mt-1 p-2 w-full border rounded-md"
          required
        >
          <option value="">Selecione nivel de dificuldade</option>
          <option value="facil">Fácil</option>
          <option value="moderado" selected>Moderado</option>
          <option value="dificil">Dificil</option>
        </select>
      </div>

      <!-- Terceiro Select -->
      <div class="mb-4">
        <label
          for="quantityOfQuestions"
          class="block text-sm font-medium text-gray-600"
          :for="quantityOfQuestions"
          >Quantidade de questões:</label
        >
        <select
          id="quantityOfQuestions"
          v-model="newQuantityOfQuestions"
          name="quantityOfQuestions"
          class="mt-1 p-2 w-full border rounded-md"
          required
        >
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>

      <!-- Botão de Envio -->
      <div class="w-full flex items-right justify-end">
        <button
          type="submit"
          class="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Gerar questões
        </button>
      </div>
    </form>
  </div>
</template>
