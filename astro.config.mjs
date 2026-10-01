// @ts-check
import { defineConfig } from 'astro/config';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';
import baseLinks from './integrations/base-links.mjs';

// TODO(confirmar): domínio definitivo do site. Usado em canonical, sitemap e Open Graph.
// No GitHub Pages, o workflow define SITE_URL e BASE_PATH (ex.: https://usuario.github.io + /Recriarte).
const SITE_URL = process.env.SITE_URL || 'https://recriarte.com.br';
const BASE_PATH = process.env.BASE_PATH || '/';
const HOME = new URL(BASE_PATH, SITE_URL).href.replace(/\/$/, '');

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize: (item) => ({ ...item, lastmod: new Date().toISOString(), changefreq: ChangeFreqEnum.MONTHLY, priority: item.url.replace(/\/$/, '') === HOME ? 1 : 0.8 }),
    }),
    baseLinks(),
  ],
  devToolbar: { enabled: false },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
});
