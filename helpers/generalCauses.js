import axios from "axios";
import openAIConstants from "../constants/OpenAIConstants";
import OpenAIConstants from "../constants/OpenAIConstants";
async function generateCauses({journalNote, emotion}) {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/engines/text-davinci-003/completions',
            {
                prompt: openAIConstants.prompt.replace("%", journalNote).replace("%", emotion),
                max_tokens: 200
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${OpenAIConstants.api}`
                }
            }
        );
        return (response.data.choices[0].text.trim());
    } catch (error) {
        console.error('Error generating required answer:', error);
        throw error;
    }
}

export {
    generateCauses
}