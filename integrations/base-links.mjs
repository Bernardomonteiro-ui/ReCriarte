// @ts-check
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Quando o site é publicado num subcaminho (ex.: usuario.github.io/Recriarte),
 * prefixa os links internos do HTML gerado com o `base`.
 * Os componentes continuam escrevendo caminhos simples ("/trabalhos").
 * Com domínio próprio (base "/"), não faz nada.
 *
 * @returns {import('astro').AstroIntegration}
 */
export default function baseLinks() {
  let base = '';
  return {
    name: 'recriarte:base-links',
    hooks: {
      'astro:config:done': ({ config }) => {
        base = config.base.replace(/\/$/, '');
      },
      'astro:build:done': async ({ dir, logger }) => {
        if (!base) return;
        const root = fileURLToPath(dir);
        // href="/x", src="/x", action="/x" — sem tocar em "//cdn", em caminhos já prefixados ou em URLs absolutas
        const attr = new RegExp(`\\b(href|src|action|poster)="/(?!/)(?!${base.slice(1)}(?:/|"))`, 'g');
        const files = (await readdir(root, { recursive: true })).filter((f) => f.endsWith('.html')).map((f) => join(root, f));
        let count = 0;
        for (const f of files) {
          const html = await readFile(f, 'utf8');
          const out = html.replace(attr, (_, a) => { count++; return `${a}="${base}/`; });
          if (out !== html) await writeFile(f, out);
        }
        logger.info(`${count} links internos prefixados com ${base}`);
      },
    },
  };
}
