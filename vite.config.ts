import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/portfolio/',
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      ssr: false,
      static: true,
      content: {
        highlighter: 'prism',
      },
      prerender: {
        routes: [
          '/',
          '/about',
          {
            contentDir: 'src/content/project-entries',
            transform: (file) => `/projects/${file.name}`,
          },
        ],
      },
    }),
    tailwindcss()
  ],
}));