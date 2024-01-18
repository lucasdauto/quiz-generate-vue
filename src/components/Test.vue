<template>
  <form @submit.prevent="submitForm" class="space-y-4" v-if="!showResults">
    <div
      v-for="(question, index) in questions"
      :key="index"
      class="bg-white shadow rounded px-6 py-4"
    >
      <p class="font-bold mb-2">{{ question.enunciado }}</p>
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
        <p class="font-bold mb-2">{{ question.enunciado }}</p>
        <div class="flex items-center space-x-2">
          <span
            :class="{
              'text-green-500': userAnswers[index] === question.correta,
              'text-red-500': userAnswers[index] !== question.correta,
            }"
          >
            Sua resposta está {{ userAnswers[index] !== question.correta ? 'errada' : 'correta' }}: {{ userAnswers[index].toUpperCase() }} - {{ question.alternativas[userAnswers[index]] }}
            <br/>
          </span>
          <span
            v-if="userAnswers[index] === question.correta"
            class="text-green-500"
          >
            Resposta correta: {{ question.correta.toUpperCase() }} - {{ question.alternativas[question.correta] }}
          </span>
          <span
            v-if="userAnswers[index] !== question.correta"
            class="text-green-500"
          >
            Resposta correta: {{ question.correta.toUpperCase() }} - {{ question.alternativas[question.correta] }}
          </span>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const questions = ref([
  {
    enunciado:
      "Um carro parte do repouso e acelera uniformemente a 3 m/s² durante 10 segundos. Qual é a velocidade final do carro?",
    alternativas: {
      a: "30 m/s",
      b: "20 m/s",
      c: "40 m/s",
      d: "50 m/s",
      e: "25 m/s",
    },
    correta: "c",
  },
  {
    enunciado:
      "Um objeto é lançado verticalmente para cima a partir do solo. Considerando a aceleração devida à gravidade, qual das seguintes grandezas é máxima no ponto mais alto da trajetória?",
    alternativas: {
      a: "Velocidade",
      b: "Aceleração",
      c: "Energia cinética",
      d: "Impulso",
      e: "Altura",
    },
    correta: "e",
  },
  {
    enunciado:
      "Dois corpos, A e B, possuem massas diferentes e estão inicialmente a 2 metros de altura. Eles são abandonados simultaneamente. Qual atinge o solo primeiro?",
    alternativas: {
      a: "Corpo A",
      b: "Corpo B",
      c: "Ambos atingem ao mesmo tempo",
      d: "Depende das massas dos corpos",
      e: "Depende das velocidades iniciais",
    },
    correta: "c",
  },
  {
    enunciado:
      "Um espelho plano reflete a luz de uma vela. Se um observador se move em direção à vela, qual será o efeito na imagem refletida no espelho?",
    alternativas: {
      a: "A imagem se desloca na direção do observador",
      b: "A imagem se desloca na direção contrária ao observador",
      c: "A imagem não sofre alterações",
      d: "A imagem se inverte",
      e: "A imagem desaparece",
    },
    correta: "b",
  },
  {
    enunciado:
      "O que acontece com a resistência elétrica de um condutor metálico quando sua temperatura aumenta?",
    alternativas: {
      a: "Aumenta",
      b: "Diminui",
      c: "Permanece constante",
      d: "Depende do material",
      e: "Torna-se um supercondutor",
    },
    correta: "a",
  },
  {
    enunciado:
      "Um gás ideal está contido em um recipiente fechado. Se a temperatura do gás aumentar e a pressão permanecer constante, o que acontecerá com o volume?",
    alternativas: {
      a: "Aumentará",
      b: "Diminuirá",
      c: "Permanecerá constante",
      d: "Dependerá da quantidade de gás",
      e: "Tornar-se-á um líquido",
    },
    correta: "a",
  },
  {
    enunciado:
      "Em um circuito elétrico simples, onde uma lâmpada está ligada a uma bateria, o que acontece com a corrente elétrica se a resistência da lâmpada aumentar?",
    alternativas: {
      a: "Aumenta",
      b: "Diminui",
      c: "Permanece constante",
      d: "Depende da tensão da bateria",
      e: "Torna-se nula",
    },
    correta: "b",
  },
  {
    enunciado:
      "Um objeto de massa m é lançado verticalmente para cima. Qual é o trabalho realizado pela força gravitacional durante o trajeto completo, do lançamento até o retorno ao solo?",
    alternativas: {
      a: "Positivo",
      b: "Negativo",
      c: "Zero",
      d: "Depende da altura máxima atingida",
      e: "Depende da velocidade inicial",
    },
    correta: "c",
  },
  {
    enunciado: "O que representa o termo 'frequência' em ondas sonoras?",
    alternativas: {
      a: "Altura do som",
      b: "Intensidade do som",
      c: "Cor do som",
      d: "Número de oscilações por segundo",
      e: "Velocidade do som",
    },
    correta: "d",
  },
  {
    enunciado:
      "Um corpo em movimento circular uniforme está sujeito a uma força centrípeta. O que acontecerá com a velocidade do corpo se a força centrípeta for duplicada?",
    alternativas: {
      a: "A velocidade aumentará",
      b: "A velocidade diminuirá",
      c: "A velocidade permanecerá constante",
      d: "Dependerá da massa do corpo",
      e: "O corpo sairá da trajetória circular",
    },
    correta: "b",
  },
]);

const userAnswers = ref([]);
const showResults = ref(false);

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
