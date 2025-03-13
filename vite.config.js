import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Include the React plugin
  server: {
    port: 3000, // Change this to your desired port number
  },
});
