export const getEnv = () => {
  try {
    return import.meta.env.VITE_OPENAI_API_KEY;
  } catch (error) {
    throw new Error('Env not available');
  }
};
