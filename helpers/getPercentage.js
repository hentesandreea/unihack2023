import axios from 'axios';
import openAIConstants from '../constants/OpenAIConstants';
import OpenAIConstants from '../constants/OpenAIConstants';

// the reason for why this prompt is here is that if is not here the response is very wierd
export default async function getPercentageTime(emotionsList, selectedPeriod) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/text-davinci-003/completions',
      {
        prompt: `
Given the following list of emotions with associated causes and dates:
${JSON.stringify(emotionsList, null, 2)}

Analyze this list specifically within the ${selectedPeriod} timeframe.

- Identify the most frequent emotions during this period.
- Produce the output as a clear list showing each emotion alongside its percentage representation, without any additional details or explanations.
- Format the result as follows: "Anxious: 33%, Scared: 33%, Confident: 33%".

Provide the final output containing only the emotions and their respective percentages.
`,
        max_tokens: 200,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OpenAIConstants.api}`,
        },
      }
    );
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error generating required answer:', error);
    throw error;
  }
}
