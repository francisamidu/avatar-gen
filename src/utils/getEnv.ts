export const getEnv = () => {
  try {
    return process.env.OPENAI_API_KEY;
  } catch (error) {
    throw new Error('Env not available');
  }
};
