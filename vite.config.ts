import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/', // La propiedad base debe estar aquí
  build: {
    outDir: 'dist', // Directorio de salida para la construcción
  },
});
