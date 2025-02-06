// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Establece la ruta base desde donde se servirán los archivos
  // Esto es útil si tu aplicación estará alojada en una subruta.
  // Por ejemplo, si se servirá en "https://tusitio.com/ruta-constante/", usa:
  base: '/',

  plugins: [react()],

  build: {
    // Define el directorio de salida del compilado
    outDir: 'dist',

    // Opcional: configura la nomenclatura de los archivos generados
    rollupOptions: {
      output: {
        // Puedes personalizar los nombres de los archivos para que siempre sean iguales
        entryFileNames: 'reservation-button.js',
        chunkFileNames: 'reservation-button.js',
        assetFileNames: 'reservation-button.[ext]'
      }
    }
  }
});
