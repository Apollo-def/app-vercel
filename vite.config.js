import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// configurações padrão do vite para react
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Define o diretório de saída como 'build'
  },
})


