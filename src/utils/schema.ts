import { company } from '@/config/company';

const clean = <T extends Record<string, unknown>>(o: T) =>
  Object.fromEntries(Object.entries(o).filter(([, v]) => v !== '' && v !== undefined && v !== null && !(Array.isArray(v) && v.length === 0)));

export function localBusiness(site: URL) {
  const sameAs = [company.instagram, company.googleProfile].filter(Boolean);
  return clean({
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': new URL('/#empresa', site).href,
    name: company.name,
    description: 'Manutenção, adaptação, montagem e peças sob medida para móveis planejados em Londrina — PR.',
    url: site.href,
    image: new URL('/og.png', site).href,
    telephone: company.whatsapp ? `+${company.whatsapp}` : undefined,
    taxID: company.cnpj || undefined,
    address: clean({
      '@type': 'PostalAddress',
      streetAddress: company.address || undefined,
      addressLocality: company.city,
      addressRegion: company.state,
      addressCountry: 'BR',
    }),
    areaServed: company.areaServed.map((name) => ({ '@type': 'City', name })),
    sameAs,
    aggregateRating: company.rating.confirmed
      ? { '@type': 'AggregateRating', ratingValue: company.rating.value, reviewCount: company.rating.count, bestRating: 5 }
      : undefined,
  });
}

export function service(site: URL, opts: { name: string; description: string; path: string; serviceType: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: new URL(opts.path, site).href,
    provider: { '@id': new URL('/#empresa', site).href },
    areaServed: { '@type': 'City', name: company.city },
  };
}

export function faq(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
  };
}

export function breadcrumbs(site: URL, items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((i, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: i.name,
      item: new URL(i.href, site).href,
    })),
  };
}
