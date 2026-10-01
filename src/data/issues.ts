/** Pontos do diagnóstico "Onde dói o seu móvel?" — posições em % do desenho. */
export interface Issue {
  id: string;
  num: string;
  label: string;
  desc: string;
  /** data-part correspondente no desenho Planejado */
  part: 'door' | 'drawer' | 'basculante' | 'edge' | 'sliding' | 'handle' | 'niche';
  x: number;
  y: number;
  service: 'manutencao' | 'adaptacao';
}

export const issues: Issue[] = [
  {
    id: 'porta-desalinhada', num: '01', label: 'Porta desalinhada', part: 'door', x: 17, y: 30, service: 'manutencao',
    desc: 'Porta que não fecha direito, fica torta ou raspa na outra. Normalmente é regulagem ou troca de dobradiça.',
  },
  {
    id: 'gaveta-travando', num: '02', label: 'Gaveta travando', part: 'drawer', x: 47, y: 76, service: 'manutencao',
    desc: 'Gaveta pesada, que sai do trilho ou não fecha até o fim. Costuma envolver a corrediça.',
  },
  {
    id: 'basculante-caindo', num: '03', label: 'Basculante caindo', part: 'basculante', x: 38, y: 14.5, service: 'manutencao',
    desc: 'Porta de armário aéreo que não para aberta ou desce sozinha. Geralmente é o pistão.',
  },
  {
    id: 'fita-de-borda', num: '04', label: 'Fita de borda soltando', part: 'edge', x: 61, y: 43, service: 'manutencao',
    desc: 'A fita do acabamento da chapa descolou, levantou ou quebrou.',
  },
  {
    id: 'porta-de-correr', num: '05', label: 'Porta de correr pesada', part: 'sliding', x: 80, y: 50, service: 'manutencao',
    desc: 'Porta que trava, faz barulho, saiu do trilho ou exige força para abrir.',
  },
  {
    id: 'puxador-quebrado', num: '06', label: 'Puxador quebrado', part: 'handle', x: 49, y: 85, service: 'manutencao',
    desc: 'Puxador solto, quebrado ou que você simplesmente quer trocar.',
  },
  {
    id: 'adaptar', num: '07', label: 'Adaptar ou mudar', part: 'niche', x: 53, y: 29, service: 'adaptacao',
    desc: 'O móvel está bom, mas precisa de uma nova função, divisão ou configuração.',
  },
];
