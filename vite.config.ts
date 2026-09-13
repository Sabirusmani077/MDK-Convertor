import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-icons': ['lucide-react'],
          'vendor-jspdf': ['jspdf'],
          'vendor-pdfjs': ['pdfjs-dist'],
          'vendor-jszip': ['jszip'],
          'vendor-confetti': ['canvas-confetti']
        }
      }
    }
  }
});
