import axios from "axios";

const sendToChatGPT = async (formInputs) => {
    try {

        const prompt = `Monte para mim um questionário de 10 perguntas similares ao ENEM sobre ${formInputs.schoolSubjects} com questões com enunciado bem elaborados para leitura com bastante informação no grau de dificuldade ${formInputs.difficulty}, trazendo no JSON e qual alternativa está correta. Desejo receber como resposta desse prompt somente o json, pois usarei a resposta em uma aplicação`

        const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
            prompt: prompt,
            max_tokens: 40000
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            },
        })

        return response.data.choices[0].text
    }
    catch (error) {
        throw error;
    }
}