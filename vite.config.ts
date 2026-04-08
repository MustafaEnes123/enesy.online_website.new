import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        hackclub: path.resolve(__dirname, 'hackclub.html'),
        institutions: path.resolve(__dirname, 'institutions.html'),
        privacy_policy: path.resolve(__dirname, 'privacy_policy.html'),
        delete_account: path.resolve(__dirname, 'delete_account.html'),
      },
    },
  },
});
