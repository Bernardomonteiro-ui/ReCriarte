/**
 * Perguntas frequentes. Respostas baseadas apenas no que foi confirmado
 * (processo por fotos + WhatsApp, serviços oferecidos, Londrina).
 * TODO(confirmar): ao confirmar prazos, garantias ou regiões atendidas, acrescente aqui.
 */
export type Faq = { q: string; a: string };

export const homeFaq: Faq[] = [
  {
    q: 'Meu móvel planejado precisa ser trocado?',
    a: 'Muitas vezes, não. Portas desalinhadas, gavetas travando, basculantes caindo e fita de borda soltando costumam ter solução com manutenção, troca de ferragens ou adaptação — sem substituir o móvel.',
  },
  {
    q: 'Como peço um orçamento?',
    a: 'Mande fotos do móvel pelo WhatsApp: uma do móvel inteiro e outras do detalhe do problema. A ReCriarte avalia e envia a proposta.',
  },
  {
    q: 'A ReCriarte atende em Londrina?',
    a: 'Sim. A ReCriarte é de Londrina — PR e atende móveis planejados na cidade.',
  },
];

export const maintenanceFaq: Faq[] = [
  {
    q: 'Vocês fazem conserto de armário planejado em Londrina?',
    a: 'Sim. A ReCriarte faz manutenção e conserto de móveis planejados em Londrina: portas, gavetas, basculantes, portas de correr, puxadores e fita de borda. Mande fotos pelo WhatsApp para a avaliação.',
  },
  {
    q: 'Como se regula uma porta de armário planejado?',
    a: 'As dobradiças de caneco costumam ter parafusos de regulagem de altura, de lateral e de profundidade. Pequenos ajustes já realinham a porta; quando a dobradiça cedeu ou a furação está danificada, o caminho é trocar a peça ou recuperar a fixação.',
  },
  {
    q: 'Porta de armário desalinhada tem conserto?',
    a: 'Na maioria das vezes, sim. O desalinhamento costuma vir da regulagem ou do desgaste da dobradiça. Pelas fotos já dá para ter uma ideia do que é preciso.',
  },
  {
    q: 'Gaveta travando: é a corrediça?',
    a: 'É a causa mais comum. Corrediças gastas, empenadas ou soltas fazem a gaveta pesar, sair do trilho ou não fechar. A troca da corrediça normalmente resolve.',
  },
  {
    q: 'O basculante do armário aéreo não para aberto. O que fazer?',
    a: 'Geralmente o pistão perdeu a força. A troca do pistão devolve o funcionamento da porta.',
  },
  {
    q: 'Fita de borda descolando tem solução?',
    a: 'Sim. A fita pode ser recolada ou substituída, dependendo do estado da chapa e do acabamento.',
  },
];

export const adaptationFaq: Faq[] = [
  {
    q: 'Dá para mudar a configuração de um móvel planejado que já tenho?',
    a: 'Em muitos casos, sim: novas divisões, nichos, mudança de função de um módulo ou adequação a um novo espaço. Mande fotos e conte o que você precisa.',
  },
  {
    q: 'Posso reaproveitar meu planejado em outro cômodo?',
    a: 'Depende das medidas e da estrutura do móvel. A avaliação mostra o que pode ser reaproveitado e o que precisa ser adaptado.',
  },
];

export const movingFaq: Faq[] = [
  {
    q: 'Vou mudar de casa. Meu planejado vai junto?',
    a: 'Pode ir. A ReCriarte faz a desmontagem, a remontagem no novo endereço e os ajustes necessários para o móvel se adaptar ao novo espaço.',
  },
  {
    q: 'O móvel pode precisar de adaptação no novo endereço?',
    a: 'Sim, quando as medidas do novo ambiente são diferentes. Isso é avaliado antes, a partir das fotos e das informações do novo espaço.',
  },
];

export const customFaq: Faq[] = [
  {
    q: 'A ReCriarte faz móveis planejados completos?',
    a: 'O foco da ReCriarte é resolver o que você já tem: peças complementares, módulos, prateleiras, frentes e soluções específicas para o móvel existente.',
  },
  {
    q: 'A peça nova combina com o móvel que eu já tenho?',
    a: 'A ideia é exatamente essa: uma peça pensada para conversar com o móvel existente. Mande fotos do móvel e do espaço para a avaliação.',
  },
];
