import axios from "axios";

/**
 * Sends a request to the ChatGPT API to generate a quiz based on specified school subjects and difficulty level.
 *
 * @param {string} schoolSubjects - The school subjects for which the quiz questions should be generated.
 * @param {string} difficulty - The difficulty level of the quiz questions.
 * @return {Promise<string>} - A Promise that resolves with the generated quiz in JSON format.
 * @throws {Error} - If there is an error while sending the request to the API.
 */

const sendToChatGPT = async (schoolSubjects, difficulty) => {
  try {
    const keyAPI = "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";

    const prompt = `Monte para mim um questionário de 10 perguntas similares ao ENEM sobre ${schoolSubjects} com questões com enunciado bem elaborados para leitura com bastante informação no grau de dificuldade ${difficulty}, trazendo no JSON e qual alternativa está correta. Desejo receber como resposta desse prompt somente o json, pois usarei a resposta em uma aplicação`;

    const response = await axios.post("https://api.openai.com/v1/models/gpt-3.5-turbo-instruct",
      {
        prompt: prompt,
        max_tokens: 40000,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${keyAPI}`,
        },
      }
    );

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default sendToChatGPT;
