import { OpenAIResponse } from '@/types/OpenAIResponse';
import fetcher from './fetcher';
import { getEnv } from './getEnv';

// https://api.openai.com/v1/images/generations
// {
//   "prompt": "A cute baby sea otter",
//   "n": 2,
//   "size": "1024x1024"
// }

const generateImage = async (prompt: string) => {
  const env = getEnv();
  if (!env) {
    throw new Error('Missing env Var');
  }
  try {
    const res = await fetcher<OpenAIResponse>(
      'https://api.openai.com/v1/images/generations',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${env ?? ''}`,
        },
        body: JSON.stringify({
          prompt,
          n: 2,
          size: '1024x1024',
        }),
      },
    );
    return res.data[0];
  } catch (error) {
    throw error;
  }
};
export default generateImage;
