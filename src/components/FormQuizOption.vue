<script setup>

function submitForm() {
    // Lógica para enviar o formulário
    console.log("Formulário enviado!");
}
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500"
  >

    <!-- Título -->
    <h1 class="text-5xl font-bold text-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] shadow-black mb-5">Quiz Generation IA</h1>

    <!-- Formulário -->
    <div class="w-1/4 mx-auto bg-white p-6 rounded-md shadow-md">

      <form v-on:submit.prevent="submitForm">
        <!-- Primeiro Select -->
        <div class="mb-4">
          <label for="select1" class="block text-sm font-medium text-gray-600"
            >Selecione a disciplina:</label
          >
          <select
            id="schoolSubjects"
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
          <label for="select2" class="block text-sm font-medium text-gray-600"
            >Selecione o nivel de dificuldade:</label
          >
          <select
            id="difficultyLevel"
            name="difficultyLevel"
            class="mt-1 p-2 w-full border rounded-md"
            required
          >
            <option value="facil">Fácil</option>
            <option value="moderado" selected>Moderado</option>
            <option value="dificil">Dificil</option>
          </select>
        </div>

        <!-- Botão de Envio -->
        <div class="w-full flex items-right justify-end">
          <button
            type="submit"
            class="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
