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
  '/contact',
  '/vastu-insights',
  '/numerology-insights'
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
  server: {
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
    }
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
    },
    cssCodeSplit: true,
    minify: 'esbuild'
  }
});