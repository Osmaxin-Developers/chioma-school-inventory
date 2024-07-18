import { getDirname } from '@adonisjs/core/helpers'
import inertia from '@adonisjs/inertia/client'
import adonisjs from '@adonisjs/vite/client'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    inertia({ ssr: { enabled: false } }),
    react(),
    adonisjs({
      entrypoints: ['inertia/app/app.tsx'],
      reload: ['resources/views/**/*.edge'],
      assetsUrl: '/assets',
    }),
  ],

  /**
   * Define aliases for importing modules from
   * your frontend code
   */
  resolve: {
    alias: {
      '~/': `${getDirname(import.meta.url)}/inertia/`,
    },
  },

  build: {
    outDir: 'public/assets',
    manifest: true,
    rollupOptions: {
      input: './inertia/app/app.tsx',
      output: {
        entryFileNames: 'app.js',
        // Ensure all chunks are bundled into the same file
        manualChunks: () => 'app',
        assetFileNames: `[name].[ext]`,
      },
    },
  },
})
