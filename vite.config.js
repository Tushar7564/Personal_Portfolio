import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: '/Personal_Portfolio/', // Set the base URL for GitHub Pages
    define: {
      'process.env.SOME_KEY': JSON.stringify(env.SOME_KEY),
    },
    plugins: [react()],
  };
});