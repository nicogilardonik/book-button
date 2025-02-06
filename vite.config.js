// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',

  plugins: [react()],
  build: {
    lib: {
      entry: 'src/main.jsx', // Archivo principal de tu Web Component
      name: 'ReservationButton', // Nombre del módulo
      fileName: () => 'reservation-button.js', // Evita nombres raros en la salida
      formats: ['es', 'umd'], // Genera ES Module y UMD
    },
    assetsDir: '', // Evita que los archivos se vayan a dist/assets
    rollupOptions: {
      output: {
        entryFileNames: 'reservation-button.js', // Asegura el nombre correcto
        chunkFileNames: 'reservation-button-chunk.js', // Controla los chunks
        assetFileNames: 'reservation-button.[ext]', // Evita que assets vayan a dist/assets
      },
    },
  },
});