<script setup>
    import { ref } from 'vue';

    const loading = ref(false)
    const result = ref(null)
    
    const processForm = async (formData) => {
    // Simule uma chamada assíncrona
    loading.value = true;
    setTimeout(() => {
      // Lógica para processar os dados do formulário e obter resultados
      result.value = `Resultados para disciplina: ${formData.schoolSubjects}, Nível de dificuldade: ${formData.difficultyLevel}`;
      loading.value = false;
    }, 2000); // Simulando uma resposta após 2 segundos
};
</script>

<template>
    <div>
        <div v-if="loading">Carregando...</div>
        <div v-else>
            carregou
        </div>
    </div>
</template>