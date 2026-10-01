/**
 * Configuração central da ReCriarte.
 *
 * REGRA: nada aqui pode ser inventado. Campos vazios ('' / null) são
 * tratados pelos componentes — eles simplesmente não aparecem no site.
 * Tudo marcado com TODO(confirmar) precisa ser validado com a empresa.
 */

export interface OpeningHours {
  /** Ex.: 'Segunda a sexta' */
  days: string;
  /** Ex.: '08h às 18h' */
  hours: string;
}

export const company = {
  name: 'ReCriarte',
  legalTagline: 'Manutenção de Móveis Planejados',
  city: 'Londrina',
  state: 'PR',
  cityLabel: 'Londrina — PR',

  /**
   * TODO(confirmar): WhatsApp no formato internacional, só dígitos.
   * Ex.: '5543999999999'. Enquanto vazio, os links abrem o WhatsApp
   * com a mensagem pronta para o usuário escolher o contato.
   */
  whatsapp: '',

  /** TODO(confirmar): telefone exibido (opcional). */
  phoneDisplay: '',

  /** TODO(confirmar): URL completa do Instagram. */
  instagram: '',

  /** TODO(confirmar): link do perfil no Google (Maps / Perfil da Empresa). */
  googleProfile: '',

  /** TODO(confirmar): endereço completo, se a empresa quiser exibir. */
  address: '',

  /** TODO(confirmar): CNPJ — só exibido quando preenchido. */
  cnpj: '',

  /** TODO(confirmar): horários de atendimento. Vazio = não exibe. */
  hours: [] as OpeningHours[],

  /**
   * Prova social. Dados confirmados no briefing.
   * Se deixarem de ser verdadeiros, troque `confirmed` para false
   * e o bloco some de todo o site.
   */
  rating: {
    confirmed: true,
    value: 5.0,
    count: 148,
    source: 'Google',
  },

  /** Áreas atendidas — por enquanto só o que foi confirmado. */
  areaServed: ['Londrina'],
} as const;

export const hasWhatsapp = company.whatsapp.length > 0;

export const ratingLabel = company.rating.value.toLocaleString('pt-BR', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});
