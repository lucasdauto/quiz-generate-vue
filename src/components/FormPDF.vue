<script setup>
import WhiteLogo from "./common/WhiteLogo.vue";
import { useToast } from "vue-toastification";
import { initFlowbite } from "flowbite";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});

const file = ref(null);
const toast = useToast();
const router = useRouter();
const store = useStore();

const newQuantityOfQuestions = ref("");
const newFilePDF = ref(null);

const handleFileChange = (event) => {
  const selectedFile = event.target.files[0];

  if (selectedFile) {
    const isPdf = selectedFile.name.toLowerCase().endsWith(".pdf");
    newFilePDF = selectedFile;

    if (!isPdf) {
      toast.error("Somente arquivos PDF (.pdf) são aceitos.", {
        timeout: 6000,
      });
      // Limpar o input
      event.target.value = null;
      file.value = null;
    } else {
      file.value = selectedFile;
    }
  }
};

const submitForm = () => {
  if (!file.value) {
    toast.error("Execute o upload de um arquivo PDF para continuar.", {
      timeout: 6000,
    });
    return;
  }

  store.dispatch("setQuantityOfQuestions", newQuantityOfQuestions.value);
  store.dispatch("setFilePDF", newFilePDF);
  router.push("/quiz");
};
</script>
<template>
  <div>
    <WhiteLogo />
  </div>
  <div class="w-2/5 mx-auto bg-white p-6 rounded-md shadow-md">
    <section class="mb-8" id="formDescription">
      <h4 class="text-sm font-bold mb-2">Como funciona?</h4>
      <p class="text-justify text-gray-500 text-sm">
        Ao realizar o upload de um arquivo em formato PDF sobre um tema
        específico, o sistema utiliza algoritmos de processamento de linguagem
        natural para extrair informações relevantes do texto. Com base nesses
        dados, são geradas automaticamente perguntas que abrangem os principais
        pontos abordados no documento. Essa abordagem inovadora proporciona uma
        maneira eficiente e personalizada de revisar e compreender o conteúdo,
        permitindo aos usuários testar e consolidar seus conhecimentos sobre o
        assunto de maneira interativa. Essa funcionalidade simplifica a
        aprendizagem e a avaliação, oferecendo uma abordagem dinâmica e
        adaptativa.
      </p>
    </section>
    <!-- Formulário -->

    <form class="max-w-lg mx-auto" @submit.prevent="submitForm">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        for="input-file"
        >Upload de arquivo:</label
      >
      <input
        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="input-file-help"
        id="input-file"
        type="file"
        @change="handleFileChange"
      />
      <div
        class="mt-1 text-sm text-gray-500 dark:text-gray-300"
        id="input-file-help"
      >
        Somente arquivos PDF (.pdf) são aceitos. (Tamanho máximo: 20MB)
      </div>
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
      <div class="w-full flex items-right justify-end mt-8">
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
