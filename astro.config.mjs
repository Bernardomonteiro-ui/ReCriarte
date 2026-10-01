// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO(confirmar): domínio definitivo do site. Usado em canonical, sitemap e Open Graph.
const SITE_URL = process.env.SITE_URL ?? 'https://recriarte.com.br';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
  devToolbar: { enabled: false },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
});
