<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const schoolSubjects = ref("");
const difficultyLevel = ref("");

function submitForm() {
  router.push({
    name: "quiz",
    params: {
      schoolSubjects: schoolSubjects.value,
      difficultyLevel: difficultyLevel.value,
    },
  });
}
</script>

<template>
    <!-- Formulário -->
    <div class="w-1/4 mx-auto bg-white p-6 rounded-md shadow-md">
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
            v-model="schoolSubjects"
            name="schoolSubjects"
            class="mt-1 p-2 w-full border rounded-md"
            required
          >
            <option value="">Selecione</option>
            <option value="matematica">Matematica</option>
            <option value="portugues">Portugues</option>
            <option value="ingles">Ingles</option>
            <option value="espanhol">Espanhol</option>
            <option value="historia">Historia</option>
            <option value="ciencias">Ciencias</option>
            <option value="geografia">Geografia</option>
            <option value="filosofia">Filosofia</option>
            <option value="biologia">Biologia</option>
            <option value="quimica">Quimica</option>
            <option value="fisica">Fisica</option>
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
            v-model="difficultyLevel"
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

        <!-- Segundo Select -->
        <div class="mb-4">
          <label
            for="quantityOfQuestions"
            class="block text-sm font-medium text-gray-600"
            :for="quantityOfQuestions"
            >Quantidade de questões:</label
          >
          <select
            id="quantityOfQuestions"
            v-model="quantityOfQuestions"
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
