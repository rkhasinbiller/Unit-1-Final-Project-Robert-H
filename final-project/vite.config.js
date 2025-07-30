import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: { // <--- Add this 'build' object
    rollupOptions: { // <--- Add this 'rollupOptions' object
      external: ['react-router-dom'] // <--- Add this 'external' array
    }
  }
});