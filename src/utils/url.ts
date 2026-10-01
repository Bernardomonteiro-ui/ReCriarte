/**
 * Caminhos com o `base` do site (ex.: /Recriarte no GitHub Pages sem domínio próprio).
 * Com domínio próprio o base é "/" e estas funções não mudam nada.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** "/trabalhos" → "/Recriarte/trabalhos" */
export const withBase = (path: string) => (path.startsWith('/') ? `${BASE}${path}` : path);

/** URL absoluta (canonical, Open Graph, Schema.org). */
export const absUrl = (path: string, site: URL) => new URL(withBase(path), site).href;
