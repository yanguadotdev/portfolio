// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'
import vercel from '@astrojs/vercel'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },

  integrations: [react()],
  adapter: vercel(),
})
