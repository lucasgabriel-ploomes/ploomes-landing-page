# DS Apresentações — Ploomes

> Design system para decks de apresentação institucionais da Ploomes
> (capas, lançamentos de produto "Novidades de produto", roadmaps,
> sessions internas).
>
> Tudo aqui — tokens, tipografia, ilustrações e padrões de slide — vem
> do **Brandbook v1.0.3** (agosto/2024) e do Figma de referência
> **"Novidades de produto (white model)"** (16 frames, 1 página).

## Origem

| Fonte | Onde | Notas |
|------|-------|-------|
| Brandbook | `assets/brandbook-v1.0.3.pdf` | **Fonte canônica.** Logo (arranjos, respiro, fundos fotográficos), submarcas, paleta expandida de 12 tons + Pantone, tipografia, elemento gráfico, estilo fotográfico, tom de voz |
| Figma | "Novidades de produto (white model).fig" | 16 frames: capa, headers de seção, mocks mobile/web, "Momento Demo", paleta callout |
| Voz da marca | _Diretrizes de Tom de Voz_ — persona "Maurício", PT-BR | Resumida em CONTENT FUNDAMENTALS |
| Logo SVG | `assets/logo-ploomes-*.svg` (5 versões) | Arranjo horizontal — uma por tipo de fundo: padrão, negativo, fundo-roxo, mono branco/preto |
| Logo — outros arranjos | `assets/logo/` (7 arquivos) | Vertical (4) + ícone isolado (3). Ambos são exceção — ver §Logo no SKILL |
| Submarca Sankhya | `assets/logo-sankhya/` (5 SVGs) | Lockup "Ploomes by Sankhya", uma versão por fundo |
| Ilustrações | `assets/illustrations/leaves-*.webp` (8 arquivos) | Elemento gráfico principal — a jornada comercial em formas de **asa** (nome de arquivo diz "leaves" por histórico) |
| Mocks de dispositivo | `assets/iphone-15-pro-*.png`, `assets/macbook-air-silver.png`, `assets/screen-placeholder.png` | Para apresentar telas de produto |
| Banco de imagens | `assets/produto/` (46 screenshots), `assets/ilustracoes-produto/` (22 ilustrações transparentes), `assets/clientes/` (26 logos), `assets/cases/` (4 capas), `assets/equipe/` (7 fotos), `assets/genericas/` (11 personas), `assets/icones/` (7 ícones de módulo), `assets/icons-ui/` (110 ícones duotone), `assets/marketing/` | Banco oficial Ploomes — material real, nunca stock genérico |
| Decorativos | `assets/pattern-prancheta.png` | Textura de fundo (máx. 10% de opacidade) |
| Fontes | `fonts/Manrope-*.ttf` (7 pesos), `fonts/Lora-*.ttf` (8 cortes) | Arquivos oficiais hospedados localmente — não há mais Google Fonts |

## O que a Ploomes faz

Ploomes é uma plataforma B2B brasileira de CRM e automação comercial,
focada em indústria e distribuição. Este design system existe para
materializar o **deck de apresentação** que a empresa usa internamente
e com clientes — não cobre a UI do produto. Os mocks dentro dos slides
são intencionalmente vazios para receber screenshots reais de qualquer
parte do produto Ploomes.

## Índice

```
README.md                  ← este arquivo
SKILL.md                   ← manifesto para o agent
colors_and_type.css        ← tokens (cores, fontes locais, espaçamento, sombra)
styles.css                 ← entrypoint que re-importa colors_and_type.css
thumbnail.html             ← tile do design system na home
preview/                   ← 40 cards da aba Design System

assets/
  brandbook-v1.0.3.pdf       ← brandbook oficial
  logo-ploomes-wordmark.svg     ← fundo claro (padrão)
  logo-ploomes-negativo.svg     ← fundo escuro
  logo-ploomes-fundo-roxo.svg   ← fundo Purple Ploo
  logo-ploomes-mono-branco.svg  logo-ploomes-mono-preto.svg
  iphone-15-pro-{body,shadow}.png
  macbook-air-silver.png  screen-placeholder.png
  pattern-prancheta.png
  illustrations/                 ← elemento gráfico (asas)
    leaves-mark.webp           leaves-mark-tint.webp
    leaves-fan-gradient.webp   leaves-ascending.webp
    leaves-pattern.webp        leaves-outline.webp
    leaves-isometric.webp      leaves-stack-vertical.webp
  logo/                          ← arranjos vertical + ícone isolado (7)
  logo-sankhya/                  ← lockup "Ploomes by Sankhya" (5 SVGs)

  ── banco de imagens ──────────────────────────────────────────
  produto/                       ← 46 screenshots oficiais do produto
  ilustracoes-produto/           ← 22 ilustrações de UI, fundo transparente
                                   (12 só interface + 10 `foto-*` com pessoas)
  clientes/                      ← 26 logos de clientes (prova social)
  cases/                         ← 4 capas de case
  equipe/                        ← 7 fotos reais do time
  genericas/                     ← 11 personas por segmento
  icones/                        ← 7 ícones app-tile dos módulos
  icons-ui/                      ← 110 ícones duotone de UI
  marketing/                     ← peças de campanha

fonts/
  Manrope-{ExtraLight,Light,Regular,Medium,SemiBold,Bold,ExtraBold}.ttf
  Lora-{Regular,Italic,Medium,MediumItalic,SemiBold,SemiBoldItalic,Bold,BoldItalic}.ttf

preview/                   ← cards do Design System (review pane)
  type-display.html        type-body.html         type-scale.html
  colors-brand.html        colors-neutrals.html   colors-translucent.html
  shadows.html             radii-spacing.html     gradients.html
  components-pill.html     components-color-swatch.html
  components-slide-chrome.html  components-blob.html
  brand-logo.html          logo-usage.html
  brand-illustrations.html brand-concept.html
  slide-cover.html         slide-section.html
  slide-momento-demo.html  slide-mobile.html
  slide-web.html           slide-roadmap.html
  slide-features-grid.html slide-problems.html
```

---

## CONTENT FUNDAMENTALS

A voz da marca tem nome: **Maurício**. É a persona Ploomes — jovem,
expert, moderna, atua como facilitador-orquestrador.

### Pilares

1. **Facilitadora** — fale com clareza. Sem jargão. Nenhuma pergunta é boba.
2. **Moderna** — frases curtas, parágrafos curtos. Energia. Emoji com moderação.
3. **Sofisticada** — confiante, profissional, nunca casual. Sempre cordial.

### Tom (PT-BR)

| Faça | Evite |
|----|-------|
| **"Você"** singular | "vocês" plural |
| Afirmativo ("Participe") | Negativo ("Não perca") |
| Verbo no presente / futuro do indicativo ("acontecerá") | gerúndio + locuções verbais ("vai acontecer", "estará acontecendo") |
| Hooks: _Como_, _Por que_, _Descubra_, _Melhores práticas_, _Quais técnicas_ | Clickbait ("Você não vai acreditar…") |
| Dados concretos, números reais | Afirmações genéricas |
| Perguntas provocativas que engajem | Gírias |
| Vocabulário PT-BR | Termos em inglês ou acrônimos soltos |

### Caixa & pontuação observadas no deck

- **Caixa-baixa de frase** em títulos grandes: `"Atualização de framework"`,
  `"Mapa de Clientes e Negócios"`. Só nomes próprios capitalizam.
- Labels curtos do chrome (top corners) também em caixa de frase:
  `"Mobile"`, `"Produto"`, `"Web"`.
- **Marcadores de semestre**: `1º Semestre | 2025` — ordinal com `º`
  sobrescrito e barra vertical.
- **Capa**: `Novidades de produto • Outubro` — bullet `•` separando
  assunto e período.
- **Cópia em pílula**: uma linha, caixa de frase, **sem pontuação final**:
  `Maior Performance no app`, `Redução do tempo de abertura em 50%`.
- **Códigos hex** sempre maiúsculos com `#`: `#843CFF`, `#0F2FFF`.

### Vibe

Fala como um PM moderno e afiado guiando uma sala pelo que foi entregue
— não como brochure de marketing. Confiante, declarativo, gentil.
Lê como uma pessoa para outra pessoa (você), nunca para uma plateia (vocês).

---

## VISUAL FOUNDATIONS

### Ideia central
Um palco quase monocromático em **branco** pontuado por uma única roxa
da marca (**Purple Ploo `#843CFF`**) usada como fill de halos suaves e
de pílulas CTA. A tipografia faz o trabalho pesado; o chrome é
deliberadamente vazio para que mocks e screenshots dominem a tela.

### Cor — paleta oficial

Os três nomes canônicos vêm direto do Brandbook v1.0.3:

| Nome oficial | Hex | Token | Uso |
|---|---|---|---|
| **Purple Ploo** | `#843CFF` | `--purple-ploo` / `--ploomes-purple-400` | Cor primária. Pílulas, halos, marca do logo. |
| **Light Ploo** | `#EBE5FF` | `--light-ploo` | Fundos suaves, fills decorativos, ilustração tonal. |
| **Dark Ploo** | `#1E0C45` | `--dark-ploo` / `--ploomes-purple-800` | Cor do logotipo, texto principal, fundos "dark mode". |

Além desses, há um ramp expandido (`--ploomes-purple-50…800`) para gradientes
e ilustrações; um cinza grafite (`#1E1E1E`, `--ploomes-graphite`) reservado
aos display gigantes; branco como canvas; e dois callouts pontuais —
**`#0F2FFF`** (azul) e **`#CD3DFF`** (magenta) — que aparecem na paleta
do "Momento Demo" mas **nunca em texto**.

### Tipografia — duas famílias, ambas locais

Conforme Brandbook v1.0.3 §Tipografia, o sistema tem **somente duas
famílias**. Nenhuma fonte externa é permitida. Ambas servem de
`fonts/` (TTFs oficiais hospedados no projeto):

- **Manrope** — fonte principal. Usada em **todo** texto. Pesos disponíveis:
  200 / 300 / 400 / 500 / 600 / 700 / 800. Pesos em uso no deck:
  300 (body H3), 400 (chrome / display / pílula), 500 (UI / hex),
  700 (H2 / Mega).
- **Lora** — fonte de destaque, **somente em itálico**. Para pull-quotes
  editoriais e frases-conceito ("_Estamos sempre construindo, juntos._").
  Pesos: 400/500/600/700, com seus respectivos italics. Nunca usar
  Lora sozinha, em corpo de texto, ou em roman.
- **Tracking**: `-0.020em` em H2 e Mega; `-0.010em` em H1 e H3.
- **Line-height**: 1.10 capa / 1.20 H2 / 1.31 display / 1.36 body / 1.40 chrome.

Não há Inter, Helvetica, Arial ou qualquer outra fonte registrada — os
fallbacks no CSS são apenas genéricos (`sans-serif` / `serif`).

### Espaçamento & layout
- Slides são **1920 × 1080** fixos. Sempre.
- O chrome do topo (`Mobile`, `Produto`, `1º Semestre | 2025` + logo
  centralizado) fica em `top: 60px` com **28px de altura** — todos os três
  elementos na mesma linha, vertical-centrados via flex.
- Margem lateral padrão de corpo: `left: 128px`.
- Block de texto em slides hero/title fica em `left: 128px`, largura
  máxima 680–720px.

### Logo
O logo é um lockup fixo de ícone (a "marca de folhas" Purple Ploo) +
logotipo Ploomes. Regras do brandbook:

- **Três tratamentos sancionados**:
  - Ícone Purple Ploo + logotipo Dark Ploo (default, em fundo claro)
  - Ícone Purple Ploo + logotipo branco (em fundo escuro)
  - Ícone Dark Ploo + logotipo branco (somente em fundo Purple Ploo)
  - Mais as versões monocromáticas em preto ou branco para impressão
- **Área de respiro = altura do logo** em todos os quatro lados.
- **Tamanho mínimo: 14px** de altura. Abaixo disso, abandone o logotipo
  e use só o ícone.
- **Nunca** rotacione, distorça, recolora, aplique efeitos (sombra, brilho,
  relevo), rearranje a posição/proporção dos elementos, ou use o logotipo
  sem o ícone.

**O fundo determina o arquivo** — nunca recolora com filtro CSS. Tabela
completa em `SKILL.md` §Logo e no card `preview/logo-fundos.html`.
Resumo: claro → `wordmark`, escuro → `negativo`, Purple Ploo →
`fundo-roxo`, foto → `mono-branco`.

### Fundos — 5 motivos para escolher

1. **Branco puro** — slides de conteúdo com mocks.
2. **Dois halos roxos suaves** em rotações opostas (`+15°` superior-esq,
   `−25°…−40°` inferior-dir). Borda sempre esfumaçada via
   `filter: blur(60–140px)` sobre container rotacionado com
   `var(--gradient-halo-soft)`. **Nunca** use uma forma de borda rígida.
3. **Halos pareados** sob mocks de iPhone (motivo Frame8 do Figma).
4. **Pattern prancheta** repetido a 10% de opacidade, full-bleed.
5. **Halos nos 4 cantos** (soft no topo-esq/baixo-dir, violet no
   topo-dir/baixo-esq) — motivo de capa e do "Momento Demo".

### Ilustrações — o elemento gráfico principal

Conforme Brandbook §Elemento gráfico principal, o sistema visual gira em
torno de uma metáfora: cada **folha** representa um estágio da **jornada
comercial** — _lead gerado → conversão → fidelização_. O projeto traz 8
ilustrações .webp prontas, listadas em SKILL.md. **Nunca recrie variações
em SVG; sempre use os arquivos oficiais.**

### Animação, hover, press
O Figma é estático. Para versões web/interativas:

- **Animação**: fades (200–300ms `ease-out`) e slide-up suave (16–24px).
  Nunca bounce. Nunca overshoot.
- **Hover**: 0.85 opacidade, _ou_ 4% mais escuro via
  `color-mix(in oklab, var(--accent), black 4%)`.
- **Press**: `scale(0.97)` + 0.80 opacidade.
- **Focus**: outline roxa 2px a 50% de opacidade, offset 2px.

### Bordas
Quase inexistentes. Onde aparecem (em molduras de tela), são 1px sólido
preto a 100% — mas a maioria das "bordas" vem dos PNGs de device mockup,
não de CSS.

### Sombras
Dois sistemas:
- **Pílula** — `0 4.75px 19px rgba(0,0,0,0.10)`. Lift sutil.
- **Tela / device elevation** — 5 stops de sombra com tinta violeta
  (`rgba(138,56,245,0.05)` fade até nada em 280px). Elevação assinatura
  do sistema.

### Pílulas (capsules)
Chips arredondados com `radius: 9999px`, padding `12.5×24.9px`, texto
branco em Manrope 400, fill Purple Ploo, sombra de pílula. Único tipo
de chip filled do sistema.

### Imagem
- **Arte gráfica** (halos, ilustrações de folhas, blobs): fria/dessaturada
  com tom roxo dominante.
- **Fotografia**: banco real da Ploomes — equipe, personas por segmento,
  capas de case. Tom humano e natural (tom quente é aceitável nas fotos).
  Sem stock genérico frio, sem B&W.
- **Screenshots de produto**: 46 telas oficiais em `assets/produto/`.
- **Logos de clientes**: 26 marcas em `assets/clientes/` — parede mono.
- Sem grão nas artes gráficas.

### Radii
- Pílula: `9999px` (`--radius-pill`).
- Halo blob: `1988.77px` (basicamente infinito).
- Card grande (halo-card no closer): `74px` (`--radius-card-lg`).
- Card padrão: `24px` (`--radius-card`).
- Chip pequeno: `8px` (`--radius-sm`).

### Layout fixo — chrome dos slides
Em **todos** os slides, três elementos pinned:

- **Logo Ploomes** centralizado no topo (`left: 50%; top: 60px`, altura 28px).
- **Label esquerda** em `(60, 60)`, Manrope 400 22px, ink (ou branco em
  fundo escuro).
- **Label direita** em `right: 60, top: 60`, Manrope 400 22px,
  alinhada à direita.

Os três compartilham `top: 60px` + `height: 28px`, vertical-centrados
via flex — ficam sempre na mesma linha visual.

---

## ICONOGRAFIA

O sistema tem **duas famílias de ícone**, mais um fallback:

- **Biblioteca duotone (`assets/icons-ui/`)** — **fonte primária**. 110
  glyphs oficiais extraídos do deck-mestre: traço Purple Ploo (#843CFF)
  sobre fill Light Ploo, PNG de fundo transparente, nomeados por
  semântica (`box-check`, `calendar-clock`, `hand-dollar`, `head-gear-ai`,
  `factory`, `user-lock`…). Use em cards de feature, listas, diagramas e
  passos de automação, a ~44–64px, **sem recolorir**. Catálogo visual:
  `preview/brand-icons-ui.html`.
- **Ícones-tile de módulo (`assets/icones/`)** — 7 tiles grandes com
  gradiente roxo, um por módulo (analytics, CPQ, workflow…). Para
  destaques de produto, não para UI corrida.
- **Fallback: Lucide Icons** — 1.5px stroke, 20–24px, cor `var(--fg1)`
  ou `var(--accent)`, quando faltar um glyph adequado na biblioteca.
- Sem emoji em conteúdo cliente-facing, sem unicode decorativo (✓ → ←).
  O bullet `•` em "Novidades de produto • Outubro" conta como pontuação.
- O **elemento gráfico principal** (as folhas) segue como motivo
  decorativo maior — prefira composições com as 8 ilustrações.

---

## CAVEATS

- Os PNGs de mock (iPhone 15 Pro, MacBook Air M2) são fotos genéricas
  de produto — não são renders oficiais Ploomes.
- Os layouts de slide vivem como cards estáticos em `preview/slide-*.html`
  (a fonte canônica, refinada). Um deck navegável/exportável pode ser
  gerado como template (`templates/`) quando necessário.
- Mais material editorial ou ilustrativo (vídeos de produto, fotos de
  pessoas, ícones específicos) deve ser solicitado caso a deck final
  exija.
