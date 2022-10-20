export const getEnvVariables = () => {
  return {
    VITE_API_URL: import.meta.env.VITE_API_URL,
    VITE_API_URL_IMAGEN: import.meta.env.VITE_API_URL_IMAGEN,
    VITE_API_URL_VIDEO: import.meta.env.VITE_API_URL_VIDEO
  };
};
