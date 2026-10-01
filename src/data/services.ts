import type { Art } from '@/utils/types';

export interface Service {
  id: 'manutencao' | 'adaptacao' | 'montagem' | 'sob-medida';
  num: string;
  title: string;
  /** Palavra em serif no título editorial */
  accent: string;
  href: string;
  summary: string;
  items: string[];
  photo: string;
  art: Art;
  imageAlt: string;
}

export const services: Service[] = [
  {
    id: 'manutencao',
    num: '01',
    title: 'Manutenção',
    accent: 'volta a funcionar',
    href: '/manutencao-moveis-planejados-londrina',
    summary:
      'Portas que não fecham, gavetas que travam, basculantes que caem. Regulagem, troca de ferragens e reparos para o móvel voltar a funcionar como deveria.',
    items: ['Dobradiças e regulagem de portas', 'Corrediças de gaveta', 'Pistões de basculante', 'Puxadores e fita de borda'],
    photo: 'servicos/manutencao.jpg',
    art: { kind: 'drawing', name: 'hinge' },
    imageAlt: 'Detalhe de dobradiça de móvel planejado sendo regulada',
  },
  {
    id: 'adaptacao',
    num: '02',
    title: 'Adaptação',
    accent: 'ganha nova função',
    href: '/adaptacao-moveis-planejados',
    summary:
      'Seu espaço mudou, a rotina mudou. O móvel pode acompanhar: novas divisões, nichos, alterações de configuração e reaproveitamento do que já existe.',
    items: ['Novas divisões e nichos', 'Mudança de configuração', 'Reaproveitamento de módulos', 'Adequação a um novo ambiente'],
    photo: 'servicos/adaptacao.jpg',
    art: { kind: 'planejado', mode: 'new' },
    imageAlt: 'Móvel planejado adaptado com nicho iluminado',
  },
  {
    id: 'montagem',
    num: '03',
    title: 'Montagem e mudança',
    accent: 'muda junto com você',
    href: '/montagem-desmontagem-mudanca-londrina',
    summary:
      'Vai mudar de casa? Desmontamos com cuidado, organizamos as peças e remontamos no novo endereço — adaptando o que for preciso.',
    items: ['Desmontagem cuidadosa', 'Organização das peças', 'Remontagem no novo espaço', 'Ajustes e adaptações'],
    photo: 'servicos/montagem.jpg',
    art: { kind: 'drawing', name: 'exploded' },
    imageAlt: 'Equipe da ReCriarte montando um móvel planejado',
  },
  {
    id: 'sob-medida',
    num: '04',
    title: 'Peças sob medida',
    accent: 'completa o que já existe',
    href: '/moveis-sob-medida-londrina',
    summary:
      'Uma peça que faltava, um módulo complementar, uma solução específica para o seu móvel — feita para conversar com o que você já tem.',
    items: ['Módulos complementares', 'Prateleiras e nichos', 'Frentes e portas', 'Soluções específicas'],
    photo: 'servicos/sob-medida.jpg',
    art: { kind: 'drawing', name: 'custom' },
    imageAlt: 'Peça sob medida complementando um móvel planejado existente',
  },
];
