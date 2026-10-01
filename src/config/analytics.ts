/**
 * Analytics centralizado.
 *
 * Nenhum ID é inserido aqui por padrão. Preencha quando houver conta real.
 * Os eventos são enviados para `window.dataLayer` (GTM) e/ou `gtag` (GA4)
 * apenas se existirem na página.
 */
export const analytics = {
  /** TODO(confirmar): ex.: 'GTM-XXXXXXX' */
  gtmId: '',
  /** TODO(confirmar): ex.: 'G-XXXXXXXXXX' (use se não houver GTM) */
  ga4Id: '',
  /** Loga eventos no console durante o desenvolvimento. */
  debug: import.meta.env.DEV,
};

export const EVENTS = [
  'diagnostic_opened',
  'diagnostic_issue_selected',
  'diagnostic_completed',
  'diagnostic_whatsapp_clicked',
  'whatsapp_clicked',
  'service_page_viewed',
  'portfolio_project_viewed',
  'before_after_interacted',
  'quote_started',
  'quote_completed',
] as const;

export type AnalyticsEvent = (typeof EVENTS)[number];
