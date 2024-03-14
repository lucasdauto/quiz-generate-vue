<template>
  <section>
    <div ref="componentQuizToConvert">
      <div v-for="(question, index) in questions" :key="index" class="bg-white shadow rounded px-6 py-4">
        <p class="font-bold mb-2">{{ index }}) {{ question.pergunta }}</p>
        <div v-for="(answer, key) in question.alternativas" :key="key" class="flex items-center space-x-2">
          <p :for="key" class="text-gray-700">{{ key }}) {{ answer }}</p>
        </div>
      </div>
      <footer>
        <button @click="generatePDF(componentQuizToConvert)">Download Prova</button>
      </footer>
    </div>
    <div ref="componentTemplateQuizToConvert">
      <p>Vai aqui o gabarito</p>
      <footer>
        <button @click="generatePDF(componentTemplateQuizToConvert)">Download Gabarito</button>
      </footer>
    </div>
  </section>
</template>

<script setup>
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { defineProps, ref } from "vue";

const componentQuizToConvert = ref(null);
const componentTemplateQuizToConvert = ref(null);
const props = defineProps(["questionsGenerated", "schoolSubjects"]);

let questions = [];

if (props.questionsGenerated) {
  try {
    const response = JSON.parse(props.questionsGenerated);
    questions = response.response;
  } catch (error) {
    console.error("Erro ao analisar JSON em questionsGenerated:", error);
  }
}

function generatePDF(component) {
  const elementToConvert = component.value;

  html2canvas(elementToConvert).then(canvas => {
    const imageData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const width = pdf.internal.pageSize.getWidth();
    const height = pdf.internal.pageSize.getHeight();

    pdf.addImage(imageData, 'PNG', 0, 0, width, height);
    pdf.save('componente.pdf');
  });
}
</script>
