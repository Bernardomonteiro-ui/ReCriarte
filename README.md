# ReCriarte — site

Astro 7 + TypeScript + GSAP (ScrollTrigger). CSS próprio com design tokens (`src/styles/global.css`). Sem framework de UI: o JavaScript é escrito à mão e carregado por componente.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # astro check + build estático em dist/
npm run preview
```

Para gerar o build com o domínio definitivo: `SITE_URL=https://seudominio.com.br npm run build`.

## Deploy (GitHub Pages)

O workflow `.github/workflows/deploy.yml` compila e publica a cada push na `master`.

1. No GitHub, abra **Settings → Pages → Build and deployment → Source** e escolha **GitHub Actions**. Com "Deploy from a branch", o GitHub tenta compilar o código como Jekyll e o build falha.
2. Sem domínio próprio, o site fica em `https://<usuario>.github.io/Recriarte/`. O workflow informa o caminho (`BASE_PATH`) e a integração `integrations/base-links.mjs` prefixa os links internos.
3. Com domínio próprio (Settings → Pages → Custom domain), o site fica na raiz e nada precisa mudar.

Nos componentes, escreva os links internos sempre como `/caminho`. O prefixo é aplicado no build.

## Onde configurar

| O quê | Arquivo |
|---|---|
| WhatsApp, Instagram, Google, endereço, CNPJ, horários, avaliação | `src/config/company.ts` |
| IDs de GTM / GA4 | `src/config/analytics.ts` |
| Mensagens do WhatsApp | `src/utils/whatsapp.ts` |
| Serviços | `src/data/services.ts` |
| Pontos do diagnóstico | `src/data/issues.ts` |
| Trabalhos / portfólio | `src/data/portfolio.ts` |
| Equipe, processo, avaliações, menu | `src/data/content.ts` |
| Perguntas frequentes | `src/data/faq.ts` |
| Domínio | `astro.config.mjs` e `public/robots.txt` |

Campos vazios não aparecem no site. Nada aqui pode ser inventado.

## Fotos reais

Coloque as fotos em `src/assets/photos/`; os nomes esperados estão em `src/assets/photos/LEIA-ME.md`. Quando o arquivo existe, o componente `Frame` mostra a foto (convertida para AVIF/WebP em vários tamanhos). Quando não existe, mostra o desenho técnico correspondente.

## Pendências (TODO)

- [ ] **Número do WhatsApp** (`company.whatsapp`). Sem ele, os links abrem o WhatsApp com a mensagem pronta, mas sem destinatário.
- [ ] **Logo oficial** em SVG (`src/components/layout/Logo.astro` e `public/favicon.svg`). Hoje é um wordmark provisório.
- [ ] Domínio definitivo.
- [ ] Instagram, link do perfil no Google, horários, endereço e CNPJ.
- [ ] Funções do Patrick e do Maycon, e as fotos deles.
- [ ] **Trabalhos reais**: as 5 entradas de `portfolio.ts` são só estrutura (tipo de ambiente + tipo de serviço). Troque pelos trabalhos reais.
- [ ] Depoimentos reais (com autorização) em `content.ts → reviews`.
- [ ] Confirmar se a ReCriarte faz **transporte** na mudança. O desenho "exploded" cita transporte.
- [ ] Reconfirmar periodicamente a nota 5,0 e as 148 avaliações (`company.rating`).

## Analytics

Eventos disparados (`src/utils/track.ts`): `diagnostic_opened`, `diagnostic_issue_selected`, `diagnostic_completed`, `diagnostic_whatsapp_clicked`, `whatsapp_clicked`, `service_page_viewed`, `portfolio_project_viewed`, `before_after_interacted`, `quote_started`, `quote_completed`. Os eventos são enviados para `dataLayer` ou `gtag` quando existem na página.

## Observação técnica

Importar arquivos de fonte com `?url` no `BaseLayout` (para preload) faz o Astro 7 deixar de emitir o CSS no build. Por isso não há preload de fontes.
