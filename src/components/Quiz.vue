<script setup>
    import { ref } from 'vue';

    const loading = ref(false)
    
</script>

<template>
    <div>
        <div v-if="loading">Carregando...</div>
        <div v-else>
            carregou
        </div>
    </div>
</template>