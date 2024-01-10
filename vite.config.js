import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

//https://vitejs.dev/config/
const ASSET_URL = process.env.ASSET_URL || '';

export default defineConfig({
  base:'./',
  plugins: [react()],
})
