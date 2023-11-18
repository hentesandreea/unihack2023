const openAIConstants = {
  api: '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',
  prompt:
    'User Note: %\n' +
    '\n' +
    'Emotion: %\n' +
    '\n' +
    "Request: Analyze the provided note and identify three succinct triggers (each limited to 20 characters) that might contribute to the mentioned feeling. Please avoid using emotional terms or numerical values in your responses. Separate the causes using '/' within a single string.",
  promptQuotes:
    'Generate 20 sets of inspirational quotes and titles in the following format: \n' +
    '[Quote 1]/[Title 1]&[Quote 2]/[Title 2]&...&[Quote 20]/[Title 20].\n',
};
export default openAIConstants;
