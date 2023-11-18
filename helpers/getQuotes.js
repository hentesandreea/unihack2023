import axios from "axios";
import openAIConstants from "../constants/OpenAIConstants";
import OpenAIConstants from "../constants/OpenAIConstants";

const getQuotes = async () => {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/engines/text-davinci-003/completions',
            {
                prompt: openAIConstants.promptQuotes,
                max_tokens: 200
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${OpenAIConstants.api}`
                }
            }
        );
        let firstFormating = response.data.choices[0].text.trim().split("&")
        return (firstFormating.map(el => el.split("/")));
    } catch (error) {
        console.error('Error generating required answer:', error);
        throw error;
    }
}

export {
    getQuotes
}