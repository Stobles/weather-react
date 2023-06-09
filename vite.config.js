import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, 'src'),
      '@img' : path.resolve(__dirname, 'src/assets'),
      '@comp' : path.resolve(__dirname, 'src/components'),
    },
  },
  define: {
    'process.env': {}
  },
  server: {
    host: true
  },
  plugins: [react()],
})
