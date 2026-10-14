import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/',
  ssgOptions: {
    entry: 'src/main.jsx',
    mock: true,
    dirStyle: 'nested',
    beastiesOptions: false,
    crittersOptions: false,
  },
})
