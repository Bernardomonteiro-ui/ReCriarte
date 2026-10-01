/** Equipe — TODO(confirmar): funções só quando confirmadas. */
export const team = [
  { name: 'Patrick', role: '', photo: 'equipe/patrick.jpg' },
  { name: 'Maycon', role: '', photo: 'equipe/maycon.jpg' },
];

export const processSteps = [
  { num: '01', title: 'Você manda as fotos.', text: 'Pelo WhatsApp mesmo. Mostre o móvel inteiro e o detalhe do problema.' },
  { num: '02', title: 'Avaliamos.', text: 'Olhamos o que está acontecendo e o que o seu móvel precisa — às vezes é menos do que parece.' },
  { num: '03', title: 'Você recebe a proposta.', text: 'Com o que vai ser feito, claro e sem surpresa.' },
  { num: '04', title: 'A gente faz acontecer.', text: 'Com cuidado com o seu móvel e com a sua casa.' },
];

/**
 * Avaliações reais do Google.
 * TODO(conteúdo real): copie aqui depoimentos reais (com autorização) ou
 * conecte a API do Google Places. NÃO invente textos.
 */
export interface Review { author: string; text: string; date?: string; rating: number }
export const reviews: Review[] = [];

export const nav = [
  { label: 'Diagnóstico', href: '/#diagnostico' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Trabalhos', href: '/trabalhos' },
  { label: 'Sobre', href: '/sobre' },
];

export const b2bAudiences = ['Arquitetos', 'Lojas de móveis', 'Construtoras', 'Empresas', 'Parceiros'];
