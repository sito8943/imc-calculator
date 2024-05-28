const {
  // cookies
  VITE_LANGUAGE,
  VITE_USER,
} = import.meta.env;

const config = {
  language: VITE_LANGUAGE,
  user: VITE_USER,
};

export default config;
