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
          <option value="matematica">Matemática</option>
          <option value="portugues">Português</option>
          <option value="ingles">Inglês</option>
          <option value="espanhol">Espanhol</option>
          <option value="historia">História</option>
          <option value="ciencias">Ciências</option>
          <option value="geografia">Geografia</option>
          <option value="filosofia">Filosofia</option>
          <option value="biologia">Biologia</option>
          <option value="quimica">Química</option>
          <option value="fisica">Física</option>
          <option value="sociologia">Sociologia</option>

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
