import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      'react-open-weather': 'react-open-weather/dist/index.esm.js' // Adjust the path as per the package structure
    }
  }
});
