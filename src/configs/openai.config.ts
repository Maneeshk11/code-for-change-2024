
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env['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'],
  });

  async function main() {
    const params: OpenAI.Chat.ChatCompletionCreateParams = {
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'gpt-4',
    };
    const chatCompletion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create(params);
  }


main();