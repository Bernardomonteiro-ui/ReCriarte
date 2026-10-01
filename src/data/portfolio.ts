import type { Art } from '@/utils/types';

/**
 * Trabalhos.
 *
 * TODO(conteúdo real): as entradas abaixo são a ESTRUTURA do portfólio,
 * descritas por tipo de ambiente e de intervenção — sem cliente, data,
 * números ou resultados inventados. Substitua por trabalhos reais da
 * ReCriarte (fotos em src/assets/photos/trabalhos/<id>/) e ajuste os textos.
 * Use apenas categorias que correspondam a trabalhos reais.
 */

export type Category = 'manutencao' | 'adaptacao' | 'montagem' | 'sob-medida';

export const categories: { id: Category; label: string }[] = [
  { id: 'manutencao', label: 'Manutenção' },
  { id: 'adaptacao', label: 'Adaptação' },
  { id: 'montagem', label: 'Montagem' },
  { id: 'sob-medida', label: 'Sob medida' },
];

export interface Project {
  id: string;
  title: string;
  room: string;
  category: Category;
  summary: string;
  /** O que foi feito — lista curta */
  scope: string[];
  cover: { photo: string; art: Art };
  gallery?: { photo: string; art: Art; alt: string }[];
  beforeAfter?: { before: string; after: string };
  projectExecution?: { project: string; execution: string };
}

export const projects: Project[] = [
  {
    id: 'cozinha-ferragens',
    title: 'Cozinha',
    room: 'Cozinha',
    category: 'manutencao',
    summary: 'Portas, gavetas e basculantes de volta ao lugar, sem trocar o móvel.',
    scope: ['Regulagem de portas', 'Troca de corrediças', 'Troca de pistões'],
    cover: { photo: 'trabalhos/cozinha-ferragens/01.jpg', art: { kind: 'drawing', name: 'kitchen' } },
    gallery: [
      { photo: 'trabalhos/cozinha-ferragens/02.jpg', art: { kind: 'drawing', name: 'slide' }, alt: 'Corrediça de gaveta substituída' },
      { photo: 'trabalhos/cozinha-ferragens/03.jpg', art: { kind: 'drawing', name: 'piston' }, alt: 'Pistão de basculante substituído' },
    ],
    beforeAfter: { before: 'trabalhos/cozinha-ferragens/antes.jpg', after: 'trabalhos/cozinha-ferragens/depois.jpg' },
  },
  {
    id: 'closet-nova-configuracao',
    title: 'Closet',
    room: 'Closet',
    category: 'adaptacao',
    summary: 'Uma nova organização interna para uma rotina diferente.',
    scope: ['Novas divisões', 'Reposicionamento de prateleiras', 'Novo uso de módulos'],
    cover: { photo: 'trabalhos/closet-nova-configuracao/01.jpg', art: { kind: 'drawing', name: 'closet' } },
    projectExecution: {
      project: 'trabalhos/closet-nova-configuracao/projeto.jpg',
      execution: 'trabalhos/closet-nova-configuracao/execucao.jpg',
    },
  },
  {
    id: 'dormitorio-mudanca',
    title: 'Dormitório',
    room: 'Quarto',
    category: 'montagem',
    summary: 'Desmontado em um endereço, remontado e ajustado no outro.',
    scope: ['Desmontagem', 'Remontagem', 'Ajustes ao novo espaço'],
    cover: { photo: 'trabalhos/dormitorio-mudanca/01.jpg', art: { kind: 'drawing', name: 'bedroom' } },
    gallery: [
      { photo: 'trabalhos/dormitorio-mudanca/02.jpg', art: { kind: 'drawing', name: 'exploded' }, alt: 'Módulos organizados para transporte' },
    ],
  },
  {
    id: 'armario-modulo-complementar',
    title: 'Armário',
    room: 'Área de serviço',
    category: 'sob-medida',
    summary: 'Um módulo novo que parece ter estado sempre ali.',
    scope: ['Projeto da peça', 'Fabricação sob medida', 'Instalação'],
    cover: { photo: 'trabalhos/armario-modulo-complementar/01.jpg', art: { kind: 'drawing', name: 'custom' } },
    projectExecution: {
      project: 'trabalhos/armario-modulo-complementar/projeto.jpg',
      execution: 'trabalhos/armario-modulo-complementar/execucao.jpg',
    },
  },
  {
    id: 'guarda-roupa-recuperacao',
    title: 'Guarda-roupa',
    room: 'Quarto',
    category: 'manutencao',
    summary: 'Portas de correr deslizando de novo e acabamento recuperado.',
    scope: ['Ajuste de portas de correr', 'Fita de borda', 'Troca de puxadores'],
    cover: { photo: 'trabalhos/guarda-roupa-recuperacao/01.jpg', art: { kind: 'planejado', mode: 'solid' } },
    beforeAfter: {
      before: 'trabalhos/guarda-roupa-recuperacao/antes.jpg',
      after: 'trabalhos/guarda-roupa-recuperacao/depois.jpg',
    },
  },
];

export const categoryLabel = (c: Category) => categories.find((x) => x.id === c)?.label ?? c;
