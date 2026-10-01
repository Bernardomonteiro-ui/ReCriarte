import { company } from '@/config/company';

/**
 * Único lugar que monta links de WhatsApp.
 * O número vem de `company.whatsapp` — nunca escreva o número em outro arquivo.
 */
export function whatsappUrl(message: string) {
  const text = encodeURIComponent(message.trim());
  return company.whatsapp
    ? `https://wa.me/${company.whatsapp}?text=${text}`
    : `https://wa.me/?text=${text}`;
}

export const messages = {
  default: 'Olá, ReCriarte! Vim pelo site e gostaria de um orçamento para o meu móvel planejado.',
  b2b: 'Olá, ReCriarte! Vim pelo site e gostaria de conversar sobre uma parceria / atendimento para empresa.',
  service: (service: string) =>
    `Olá, ReCriarte! Vim pela página de ${service} e preciso de ajuda com o meu móvel planejado. Posso enviar fotos?`,

  diagnostic(issues: string[], photoCount = 0) {
    const list = issues.map((i) => `• ${i}`).join('\n');
    const photos =
      photoCount > 0
        ? `Separei ${photoCount} foto${photoCount > 1 ? 's' : ''} do móvel e vou enviar aqui na conversa.`
        : 'Vou enviar fotos do móvel.';
    return `Olá, ReCriarte! Fiz o diagnóstico no site e preciso de ajuda com:\n\n${list}\n\n${photos}`;
  },

  quote(data: { issue: string; room: string; photos: string; name: string; contact: string }) {
    const lines = [
      'Olá, ReCriarte! Fiz o pedido de orçamento pelo site.',
      '',
      `O que está acontecendo: ${data.issue}`,
      `Ambiente: ${data.room}`,
      `Fotos: ${data.photos}`,
    ];
    if (data.name) lines.push(`Meu nome: ${data.name}`);
    if (data.contact) lines.push(`Prefiro contato por: ${data.contact}`);
    return lines.join('\n');
  },
};
