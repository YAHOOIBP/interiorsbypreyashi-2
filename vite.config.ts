import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginSitemap from 'vite-plugin-sitemap';

const routes = [
  '/',
  '/about',
  '/where-we-work',
  '/services',
  '/how-we-work',
  '/design-solutions',
  '/turnkey-solutions',
  '/portfolio',
  '/blog',
  '/faq',
  '/contact'
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginSitemap({
      hostname: 'https://interiorsbypreyashi.com',
      routes,
      readable: true
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animation: ['framer-motion'],
          firebase: ['firebase/app', 'firebase/firestore', 'firebase/analytics']
        }
      }
    }
  }
});