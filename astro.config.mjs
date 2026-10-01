// @ts-check
import { defineConfig } from 'astro/config';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';

// TODO(confirmar): domínio definitivo do site. Usado em canonical, sitemap e Open Graph.
const SITE_URL = process.env.SITE_URL ?? 'https://recriarte.com.br';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize: (item) => ({ ...item, lastmod: new Date().toISOString(), changefreq: ChangeFreqEnum.MONTHLY, priority: item.url.replace(/\/$/, '') === SITE_URL.replace(/\/$/, '') ? 1 : 0.8 }),
    }),
  ],
  devToolbar: { enabled: false },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
});
