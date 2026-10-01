import { analytics, type AnalyticsEvent } from '@/config/analytics';

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Envia um evento para GTM/GA4 se estiverem carregados. Nunca quebra a página. */
export function track(event: AnalyticsEvent, params: Params = {}) {
  try {
    if (analytics.debug) console.info('[track]', event, params);
    if (Array.isArray(window.dataLayer)) window.dataLayer.push({ event, ...params });
    else if (typeof window.gtag === 'function') window.gtag('event', event, params);
  } catch {
    /* analytics nunca deve interromper a experiência */
  }
}

const sent = new Set<string>();
/** Mesmo evento, uma única vez por página. */
export function trackOnce(event: AnalyticsEvent, params: Params = {}) {
  const key = event + JSON.stringify(params);
  if (sent.has(key)) return;
  sent.add(key);
  track(event, params);
}
