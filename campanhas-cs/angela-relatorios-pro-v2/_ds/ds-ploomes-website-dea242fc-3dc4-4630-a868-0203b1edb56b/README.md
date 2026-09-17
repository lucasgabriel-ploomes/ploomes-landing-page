# Ploomes Design System

A reusable visual + interaction foundation for **Ploomes** — a Brazilian B2B CRM
focused on commercial teams that sell complex products: a unified place for
contacts, opportunities, proposals, automations and analytics.

> "Ploomes is the most complete CRM for sales teams that work with complex
> commercial processes." — pulled from product positioning.

Everything in this folder is meant to be lifted directly: tokens, fonts,
logos, product screenshots, and React UI-kit components. Sample slides + a
clickable CRM prototype show the system in use.

**Regras de marca** — estratégia, valores, tom de voz, logo, submarcas,
grafismo e estilo fotográfico — vivem em **`brandbook.md`** (transcrição
operacional do Brandbook oficial v1.0.3). Este README cobre a aplicação em
componentes e tokens; o brandbook cobre a *regra*.

---

## Sources

| Source                              | How it arrived                                 |
| ----------------------------------- | ---------------------------------------------- |
| Brand logos (Horizontal / Vertical, color / mono / negative) | Uploaded SVG + WEBP package — see `assets/logos/` |
| Brand icon set                      | `Icone Roxo / Branco / Preto` — uploaded SVGs |
| Wallpaper / brand pattern           | `wallpaper.webp` — uploaded                   |
| Typography poster ("Manrope")       | `Tipografia.webp` — uploaded                  |
| Product screenshots (CRM, Workflow, Analytics, Propostas, Segmentações, Clientes, Histórico, Dados, Centralização, Automações) | Uploaded marketing tiles |
| Favicons                            | `Favicon 1–3.webp` — uploaded                 |
| Manrope + Lora font files           | Self-hosted in `fonts/` (variable + static cuts, TTF). |
| **Brandbook Ploomes v1.0.3** (out/2024) | PDF oficial da marca — regras transcritas em `brandbook.md`; PDF, papel timbrado A4 e cartela de ícones em `assets/brand/` |
| **Recursos de Marca** (grafismos, assinatura by Sankhya, fotos) | Pacote oficial de marketing — `assets/graphics/`, `assets/logos/sankhya/` |
| **ploomes.com site structure**      | Web-scraped from homepage, product pages, segment pages (`ploomes-design-system.md`) |
| **Figma libraries** (Foundations, Brandbook, Design System / Gráfico, Assets de produto) | Attached `.fig` files — the design-team source of truth for the color token system (Figma Variables) and typography. |

Color tokens are now transcribed **verbatim from the Figma Variable collections**
(Primitive / Semantic) rather than sampled from screenshots — see
the token-audit notes in §Colors of this README for the before/after. UI patterns for the **CRM prototype**
and the **landing page kit** are built from the live ploomes.com site structure
(Webflow-based) cross-checked against the Figma files.

Public product site for reference: **ploomes.com**.

---

## Index

```
.
├── README.md                  ← you are here (component index + foundations)
├── SKILL.md                   ← agent-skill entry point: regras que viajam para quem consome
├── CLAUDE.md                  ← regras de processo deste projeto (assets, cobertura do kit)
├── brandbook.md               ← regras da marca (estratégia, voz, logo, submarcas, grafismo, fotografia) — Brandbook v1.0.3
├── ploomes-design-system.md   ← full design system extraction from ploomes.com (tokens, components, patterns)
├── styles.css                 ← global stylesheet lido pelo compilador (importa colors_and_type.css)
├── colors_and_type.css        ← all tokens (CSS custom properties)
├── thumbnail.html             ← tile do sistema na home
├── fonts/                     ← Manrope + Lora (variable TTF)
├── assets/
│   ├── brand/                 ← PDFs oficiais: Brandbook v1.0.3, papel timbrado A4, cartela de ícones
│   ├── graphics/              ← elemento gráfico (asas): 9 variações oficiais do brandbook
│   ├── logos/                 ← all logo variants (SVG + WEBP) + icons + favicon
│   │   ├── clients/           ← real client logos (Moura, Unimed, Philips, Lockton, Facchini, Truckvan, Sansuy…)
│   │   └── sankhya/           ← assinatura conjunta "Ploomes by Sankhya" (5 fundos)
│   ├── icones-dos-modulos-ploomes/            ← 7 ícones de módulo (gradient roxo): analytics, cpq, workflow, biblioteca IA, propostas/docs, formulários, produtos
│   ├── cases/                 ← case-study cover photos (Grupo Moura, Philips, Truckvan, Unimed) — depoimentos em vídeo
│   ├── fotos-internas-time-ploomes/           ← 7 fotos internas reais: foto-de-time, foto-corporativa(-natural, -natural-2), reuniao-presencial, reuniao-online(-2)
│   ├── fotos-pessoas-ilustrativas/            ← 11 pessoas por segmento (indústria, tecnologia, consultoria, seguros, serviços, facilities…)
│   ├── imagery/               ← wallpaper, typography poster, review badges, avaliações públicas
│   └── ilustracoes-de-produto-ploomes-shots/  ← 68 ilustrações de produto, pasta plana: tiles de marketing + telas reais (Funil, Workflow, CPQ, Propostas, Relatórios, IA, Integrações…)
├── preview/                   ← Design-System-tab cards (Type, Colors, Spacing, Brand, Components, Media, UI Kit)
├── components/                ← primitivas curadas da marca — uma pasta por componente (.jsx + .d.ts + @dsCard)
│   └── kit/                   ← kit extraído do Figma + seções Career + aliases de nome-caminho
└── ui_kits/
    ├── crm/                   ← clickable CRM prototype + React components (monta em #crm-root)
    └── landing/               ← homepage kit based on ploomes.com
        ├── index.html
        ├── README.md
        └── *.jsx
```

(No `slides/` folder — no slide-template was provided. Ask the user to
share a deck or screenshot pack if you'd like one built.)

---

## Components

Two layers, both exposed on `window.DsPloomesWebsite_dea242`:

**Curated brand primitives** (`components/*/`, 19) — hand-built, token-driven,
brand-correct, each with a `@dsCard` preview. Prefer these for new work:
`Logo`, `LogoSymbol`, `ButtonBrand`, `AvatarBrand`, `AvatarGroup`, `Badge`, `Card`, `Eyebrow`, `Input`, `Tabs`, `Stat`, `Accordion`, `ClientLogos`, `ClientLogo`, `MenuModule`, `SidebarNav`.

`Logo` é a **fonte única de verdade** para aplicação de marca: passe `background`
(`light` / `dark` / `brand` / `photo`) e ele resolve a variante — o erro do logo
escuro sobre fundo colorido fica estruturalmente impossível.

`MenuModule` + `SidebarNav` build the Ploomes dark-violet sidebar — one icon+label
nav row with active / hover / collapsed states, plus label+icon **presets for every
real product module** (Resumos, Clientes, Processos, Negócios, Documentos, Produtos,
Relatórios, Administração, Biblioteca). This is the brand-correct, curated home for
the Figma `.Vertical Menu / Option / Modules / *` family: each Figma "module" (… /
Clientes / Large, … / Documentos / Large, …) is a **preset of this one component**,
not a separate file.

`ClientLogos` renders the customer / "trusted by" wall (22 real client brands —
Philips, Baterias Moura, Unimed, Sankhya, Lockton, Facchini, Truckvan, Sansuy,
Forza, AutoAvaliar, Alterdata, Acrisure, Apisul, Carraro Seguros, Patrimonial,
Hellner, Soulan, Brasfort, Crescimentum, Minascopy, Aliança Global, Bullla);
`ClientLogo` renders one by key. Each logo is embedded as a data URI, so the
components are fully self-contained (no asset copying). Source files also live in
`assets/logos/clients/`.

**Figma-extracted kit** (`components/kit/`, 343) — bulk-materialized from the
attached Figma: the Relume section/UI library, Ploomes product components, and
icons. Faithful to the file but heavier and less brand-polished; use as reference
or raw material. Names:

`About1`, `About2`, `About3`, `About4`, `About5`, `AdobeApps`, `Akira`, `AltHero`, `ApplicationShell1`, `ApplicationShell10`, `ApplicationShell11`, `ApplicationShell12`, `ApplicationShell13`, `ApplicationShell14`, `ApplicationShell15`, `ApplicationShell16`, `ApplicationShell2`, `ApplicationShell3`, `ApplicationShell4`, `ApplicationShell5`, `ApplicationShell6`, `ApplicationShell7`, `ApplicationShell8`, `ApplicationShell9`, `AsiconOutlineArrow3`, `AsiconOutlineProfile2user`, `AsiconOutlineSetting2`, `AsiconOutlineSetting4`, `Avatar`, `BackgroundButton`, `Banner1`, `Banner10`, `Banner11`, `Banner12`, `Banner13`, `Banner14`, `Banner15`, `Banner16`, `Banner2`, `Banner3`, `Banner4`, `Banner5`, `Banner6`, `Banner7`, `Banner8`, `Banner9`, `BaseButtonLarge`, `BaseButtonSmall`, `BaseFeatureTextCenter`, `BaseFeatureTextLeft`, `BaseListItem`, `BasisButtonAnatomySizes`, `Bia`, `Blog1`, `Blog10`, `Blog11`, `Blog12`, `Blog13`, `Blog14`, `Blog15`, `Blog16`, `Blog17`, `Blog18`, `Blog19`, `Blog2`, `Blog20`, `Blog21`, `Blog22`, `Blog23`, `Blog24`, `Blog25`, `Blog26`, `Blog27`, `Blog28`, `Blog29`, `Blog3`, `Blog30`, `Blog31`, `Blog32`, `Blog33`, `Blog34`, `Blog35`, `Blog36`, `Blog37`, `Blog38`, `Blog39`, `Blog4`, `Blog40`, `Blog41`, `Blog42`, `Blog43`, `Blog44`, `Blog45`, `Blog46`, `Blog47`, `Blog48`, `Blog49`, `Blog5`, `Blog50`, `Blog51`, `Blog52`, `Blog53`, `Blog54`, `Blog55`, `Blog56`, `Blog57`, `Blog58`, `Blog59`, `Blog6`, `Blog60`, `Blog61`, `Blog62`, `Blog63`, `Blog64`, `Blog65`, `Blog66`, `Blog67`, `Blog68`, `Blog7`, `Blog8`, `Blog9`, `BlogPost1`, `BlogPost2`, `BlogPost3`, `BlogPost4`, `BlogPost5`, `BlogPostHeader1`, `BlogPostHeader2`, `BlogPostHeader3`, `BlogPostHeader4`, `BlogPostHeader5`, `BrandLogos`, `ButtonAction`, `ButtonAnatomy`, `ButtonAuxiliaryAnatomy`, `ButtonAuxiliaryAnatomyStyledActionLarge`, `ButtonAuxiliaryAnatomyStyledActionShort`, `ButtonAuxiliaryAnatomyStyledSoft`, `ButtonAuxiliaryAnatomyStyledSoft10`, `ButtonAuxiliaryAnatomyStyledSoft11`, `ButtonAuxiliaryAnatomyStyledSoft12`, `ButtonAuxiliaryAnatomyStyledSoft13`, `ButtonAuxiliaryAnatomyStyledSoft14`, `ButtonAuxiliaryAnatomyStyledSoft15`, `ButtonAuxiliaryAnatomyStyledSoft16`, `ButtonAuxiliaryAnatomyStyledSoft2`, `ButtonAuxiliaryAnatomyStyledSoft3`, `ButtonAuxiliaryAnatomyStyledSoft4`, `ButtonAuxiliaryAnatomyStyledSoft5`, `ButtonAuxiliaryAnatomyStyledSoft6`, `ButtonAuxiliaryAnatomyStyledSoft7`, `ButtonAuxiliaryAnatomyStyledSoft8`, `ButtonAuxiliaryAnatomyStyledSoft9`, `ButtonAuxiliaryAnatomyStyledSoftActionAlertLargeDarkMode`, `ButtonAuxiliaryAnatomyStyledSoftActionAlertLargeLightMode`, `ButtonAuxiliaryAnatomyStyledSoftActionAlertShortDarkMode`, `ButtonAuxiliaryAnatomyStyledSoftActionAlertShortLightMode`, `ButtonAuxiliaryAnatomyStyledSoftActionConfirmationLargeDarkMode`, `ButtonAuxiliaryAnatomyStyledSoftActionConfirmationLargeLightMode`, `ButtonAuxiliaryAnatomyStyledSoftActionConfirmationShortDarkMode`, `ButtonAuxiliaryAnatomyStyledSoftActionConfirmationShortLightMode`, `ButtonAuxiliaryAnatomyStyledSoftActionDangerLargeDarkMode`, `ButtonAuxiliaryAnatomyStyledSoftActionDangerLargeLightMode`, `ButtonAuxiliaryAnatomyStyledSoftActionDangerShortDarkMode`, `ButtonAuxiliaryAnatomyStyledSoftActionDangerShortLightMode`, `ButtonAuxiliaryAnatomyStyledSoftLargeDarkMode`, `ButtonAuxiliaryAnatomyStyledSoftLargeLightMode`, `ButtonAuxiliaryAnatomyStyledSoftShortDarkMode`, `ButtonAuxiliaryAnatomyStyledSoftShortLightMode`, `ButtonAuxiliaryNestedButtonDark`, `ButtonAuxiliaryNestedButtonDark2`, `ButtonAuxiliaryNestedButtonDark3`, `ButtonAuxiliaryNestedButtonDarkModeNormal25`, `ButtonAuxiliaryNestedButtonDarkModeNormalBig30`, `ButtonAuxiliaryNestedButtonDarkModeSmall20`, `ButtonAuxiliaryNestedButtonLight`, `ButtonAuxiliaryNestedButtonLight2`, `ButtonAuxiliaryNestedButtonLight3`, `ButtonAuxiliaryNestedButtonLight4`, `ButtonAuxiliaryNestedButtonLightModeNormal25`, `ButtonAuxiliaryNestedButtonLightModeNormalBig30`, `ButtonAuxiliaryNestedButtonLightModeSmall20`, `ButtonAuxiliaryNotify`, `ButtonIconHelpCircle`, `ButtonIconHelpCircle2`, `ButtonSoft`, `ButtonSoft2`, `ButtonSoftOld`, `ButtonSoftToAction`, `ButtonSoftToAction2`, `CTA1`, `CTA12_`, `CTA2`, `CTA8`, `Card2`, `CardButton`, `CardHeader1`, `CardHeader2`, `Career1`, `Career10`, `Career11`, `Career12`, `Career13`, `Career14`, `Career15`, `Career16`, `Career2`, `Career3`, `Career4`, `Career5`, `Career6`, `Career7`, `Career8`, `Career9`, `CheckoutPlaceOrderCard`, `CheckoutProductsCard`, `CheckoutTab`, `ColorItem`, `Column`, `CompanyLogo`, `Contact29`, `Content30`, `Content32`, `DigitalOcean`, `Dropbox`, `DropdownAuxiliary`, `Footer1`, `FooterPrimary`, `Header110Desktop`, `Header23`, `Header30`, `Header46`, `Header49`, `Header93Desktop`, `HeaderColumn`, `Icon`, `Icon2`, `Icon3`, `IconAddToQueue`, `IconAlarmAdd`, `IconAlarmOff`, `IconAlignJustify`, `IconAlignMiddle`, `IconAlignRight`, `IconAngry`, `IconApple`, `IconArch`, `IconArchive`, `IconArchiveIn`, `IconArchiveOut`, `IconArrowFromBottom`, `IconArrowFromTop`, `IconArrowToBottom`, `IconArrowToTop`, `IconBarChartAlt2`, `IconBell`, `IconCheck`, `IconChevronDown`, `IconChevronDown2`, `IconChevronRight`, `IconCog`, `IconCreditCard`, `IconCreditCard2`, `IconDotsHorizontalRounded`, `IconDribble`, `IconFacebook`, `IconFacebook2`, `IconFile`, `IconHome`, `IconInstagram`, `IconInstagram2`, `IconLinkAlt`, `IconLinkedIn`, `IconLinkedIn2`, `IconMap`, `IconMenu`, `IconPieChartAlt2`, `IconRelume2`, `IconSearch`, `IconSearch2`, `IconStar`, `IconTimeFive`, `IconTrendingUp`, `IconX`, `IconX2`, `IconYoutube`, `IconYoutube2`, `Logo1`, `Logo4`, `LogomarkWhite`, `Logos`, `MenuBarItemButton`, `Navbar1`, `NavbarPrimary`, `NestedButtonDarkNormal25`, `NestedButtonDarkNormalBig30`, `NestedButtonDarkSmall20`, `NestedButtonNormal25`, `NestedButtonNormalBig30`, `NestedButtonSmall20`, `NotifyBadge`, `NotifyBadge2`, `ProfileImage`, `StatusBarBattery`, `StatusBarDynamicIsland`, `StatusBarTime`, `TabState`, `Team16`, `Team4`, `Team8`, `Team9`, `Testimonial18`, `Testimonial22_`, `Testimonial4`, `Text`, `Text2`, `TextInput`, `TextInput3`, `TooltipIconLayer`, `VerticalMenuAuxiliaryOptionModules`, `VerticalMenuAuxiliaryOptionModules2`, `VerticalMenuAuxiliaryOptionModules3`, `VerticalMenuAuxiliaryOptionModules4`, `VerticalMenuAuxiliaryOptionModules5`, `VerticalMenuAuxiliaryOptionModules6`, `VerticalMenuAuxiliaryOptionModules7`, `VerticalMenuAuxiliaryOptionModulesAdministracaoLarge`, `VerticalMenuAuxiliaryOptionModulesAdministraoLarge`, `VerticalMenuAuxiliaryOptionModulesClientesLarge`, `VerticalMenuAuxiliaryOptionModulesDocumentosLarge`, `VerticalMenuAuxiliaryOptionModulesNegciosLarge`, `VerticalMenuAuxiliaryOptionModulesNegociosLarge`, `VerticalMenuAuxiliaryOptionModulesProdutosLarge`, `VerticalMenuAuxiliaryOptionModulesRelatoriosLarge`, `VerticalMenuAuxiliaryOptionModulesRelatriosLarge`, `VerticalMenuAuxiliaryOptionModulesResumoLarge`, `VerticalTextButton16`, `VuesaxBoldBuildings`, `VuesaxBoldCategory`, `VuesaxBoldCategory2`, `VuesaxBoldPeople`, `VuesaxBoldUser`, `VuesaxBoldWallet`.

Also in the kit: the iOS status-bar product primitives `StatusBarBattery`,
`StatusBarTime`, `StatusBarDynamicIsland` (used in the app-mockup frames).

**Figma-named aliases.** Twenty-one thin components expose the exact Figma family names, so
a name copied from the file resolves in code. Sidebar options (aliases of `MenuModule`
presets): `VerticalMenuOptionAdministracao`, `VerticalMenuOptionClientes`,
`VerticalMenuOptionDocumentos`, `VerticalMenuOptionNegocios`,
`VerticalMenuOptionProdutos`, `VerticalMenuOptionRelatorios`. Full-path aliases of the
same family, named exactly as the Figma path reads: `VerticalMenuAuxiliaryOptionModulesResumoLarge`,
`VerticalMenuAuxiliaryOptionModulesClientesLarge`, `VerticalMenuAuxiliaryOptionModulesNegociosLarge`,
`VerticalMenuAuxiliaryOptionModulesDocumentosLarge`, `VerticalMenuAuxiliaryOptionModulesProdutosLarge`,
`VerticalMenuAuxiliaryOptionModulesRelatoriosLarge`, `VerticalMenuAuxiliaryOptionModulesAdministracaoLarge`.
Nested buttons (aliases of
the numbered `ButtonAuxiliaryNestedButton*` files, whose suffix order does not reveal the
size): `NestedButtonNormal25`, `NestedButtonNormalBig30`, `NestedButtonSmall20`,
`NestedButtonDarkNormal25`, `NestedButtonDarkNormalBig30`, `NestedButtonDarkSmall20`,
plus the full-path pair `ButtonAuxiliaryNestedButtonLightModeNormal25` and
`ButtonAuxiliaryNestedButtonLightModeNormalBig30`.
Full translation table: the **Figma → código** card.

> **Coverage note.** The Figma kit declares **1688 component families**; this system
> implements **367** — the complete *reachable* set, plus full-path aliases so any name
> copied from Figma resolves in code. **The remaining gap is a closed decision, not a
> backlog** (see `CLAUDE.md`): what is left is third-party Relume bulk — numbered
> `Career / N`, `Blog / N`, `Banner / N`, `Content / N`, `Application Shell / N`
> placeholder variants. Every Ploomes *product* family is built. The name→component
> translation for
> the families the compiler flags is documented in the **Figma → código** card
> (`preview/components-figma-map.html`). The gap is **structural, not a
> backlog** — proven empirically with the file mounted (jul/2026):
>
> 1. **The materializer dedups variant-families into one component.** The Figma counts
>    every *variant permutation* as a "family"; the compiler (correctly) represents a
>    variant-set as **one prop-driven component**. Concretely: the check lists
>    `.Vertical Menu / Option / Modules / Administração / Large`, `… / Clientes / Large`,
>    `… / Documentos / Large`, etc. as "missing" — but they are all the **same** component
>    (`VerticalMenuAuxiliaryOptionModules`, whose own source header reads *"Modules /
>    Resumo / Large (4 variants)"*), switched by a `text1`/`state` prop. We also ship a
>    clean curated version, `MenuModule`, where each is a `module="clientes"` preset.
>    Likewise the `.Button / Nested Button` sizes ship as the numbered files
>    `ButtonAuxiliaryNestedButtonLight` → `…Light4` (suffix = size, in file order),
>    with `state`/`outline` as props — built, just not named after the Figma variant. So the per-family counter (1688) can **never**
>    equal the compiled count, no matter how much is materialized.
> 2. **The ~848-glyph icon library is not enumerable.** The Figma VFS lists only
>    *used* components; unused icon symbols have no file/name to grep, and in the
>    designs icons are swapped through one `Icon / Relume` slot, so there is no
>    usage to pull them through either. Individual glyphs resolve *by name* through
>    `fig_materialize` (see `components/kit/icon-data.js`) but the full name list
>    cannot be retrieved from the file.
> 3. **Unthemed Relume bulk.** Most remaining sets are generic black/square Relume
>    placeholders (Blog/Banner/About/Application Shell variants) already represented
>    by one component each; duplicating every breakpoint variant would only bloat the
>    bundle (`Icon2.jsx` alone is 666 KB).
>
> Net: every *named, distinct, reachable* family is built. Icon glyphs are best
> consumed via `components/kit/icon-data.js` + `<Icon>`. See the token-audit notes in §Colors of this README.

---

## CONTENT FUNDAMENTALS

Ploomes is a Brazilian product; **all in-product and marketing copy is in
Portuguese (pt-BR)**. The voice is professional but conversational — the
product talks to commercial / sales people who want fewer steps and more
results, not to engineers.

**Tone.** Direct, action-oriented, light on jargon. Verbs come first.
The customer is addressed informally as **"você"** (never the formal "o
senhor / a senhora"), but never abbreviated to "vc". Internal team is
referenced as **"o time"** or **"sua equipe"**.

**Casing.**
- Buttons, nav items, tabs: **Sentence case** ("Novo", "Linha do tempo",
  "Mais recentes", "Propostas", "Documentos").
- Section titles, kanban columns, big metric labels: **Sentence case**
  with no terminal punctuation ("Vendas realizadas nos últimos meses",
  "Ticket Médio no Mês", "Clientes ativos").
- Status pills: First-letter capitalised ("Aprovado", "Provável",
  "Oportunidade"). Single word when possible.
- Acronyms unchanged: CRM, MRR, WhatsApp, BI, API.
- Currency always **R$ 12.345,00** (Brazilian convention — `.` thousands,
  `,` decimal, space after R$).
- Time always 24-hour `09:00`, dates `01/01/2022`.
- Months abbreviated lowercase: `jan, fev, mar, abr, mai, jun, jul`.

**No emoji** in product UI. The brand never uses them — interaction icons
are line-icon SVGs (chat, headset, group, phone, mail, pin, WhatsApp logo).

**Voz de marca completa** (os três adjetivos — facilitadora, moderna,
sofisticada —, a matriz de tom de voz e as listas *para usar* / *para não
usar*, com exemplos errado → certo): `brandbook.md` §2 e o card
**Brand → Tom de voz**. Missão, valores e a persona "Maurício" (útil para
escrever manifesto, deck institucional e página Quem Somos): `brandbook.md`
§1 e o card **Brand → Estratégia de marca**.
Marketing material occasionally uses a green ✓ glyph inside a pill, but it
is a designed SVG, not the Unicode emoji.

**Sample copy** (verbatim from the marketing tiles):
- Button labels — "Novo", "Visualizar", "Pesquisar"
- Section names — "Linha do tempo", "Cards", "Propostas", "Documentos",
  "Todos os clientes", "Clientes ativos", "Indústria", "Mais recentes"
- Metric labels — "Ticket Médio no Mês", "Clientes ativos", "MRR Atual
  Real", "Vendas realizadas nos últimos meses"
- Status / kanban — "Oportunidade", "Provável", "Aprovado",
  "Cliente inativo", "Mandar mensagem", "Reunião agendada",
  "Reunião marcada", "Apresentação do produto", "Envio de Proposta",
  "Mudança de estágio"
- Notifications — "Oportunidade criada", "Mariana Novais — Whatsapp",
  "Oi Ana, boa tarde. Tudo bem? Acabei de compartilhar no seu e-mail
  a proposta comercial. Qualquer dúvida, me coloco à disposição."
- Form placeholders — "Marque um usuário com @", "Pesquisar"
- Onboarding stages — "Aos cuidados de:", "Cliente:", "Assinaturas:"
- Document filenames keep extensions in lowercase — "Proposta.pdf".

**Numbers in metrics** are spelled with the brazilian comma decimal but
abbreviated K / m for thousands ("1,2k", "17,500k"). Growth deltas are
shown as `▲50%` in green or `▼12%` in red — always with a triangle glyph,
never the words "up" / "down".

**The vibe**: confident, optimistic, decisive — the CRM is the
co-pilot, not the bureaucracy. Avoid hedging ("may", "could", "talvez");
prefer "veja", "acompanhe", "feche", "centralize".

---

## VISUAL FOUNDATIONS

### Palette (Figma Variables — ground truth)
- **Primary — Purple Ploo `#843CFF`** (`Color Brand/purple ploo`, the site
  theme-color). High-saturation, vivid. This is the brand: primary buttons,
  active nav, key data-viz, links.
- **Secondary — Purple Ploo 2 `#7C40FF`** (`Color Brand/purple ploo 2`). Used
  in alt / mode contexts; do not confuse with the primary.
- **Ink — Dark Ploo `#1E0C45`** (`Color Brand/dark ploo`). Near-black violet.
  Headlines, primary text, dark sections — never pure black.
- **Light Ploo `#EBE5FF`** — soft brand tint for card borders, fills, dividers.
- **Ploo brand ramp** (real Figma values): `#F5F1FF · #DCD3FF · #C6AFFF ·
  #AA82FF · #8429FF · #7714EB · #6210C6 · #5211A1 · #33086F` (10 → 90).
- **Neutrals** are **plain greys** (`#F4F4F4 · #E0E0E0 · #C6C6C6 · #8D8D8D ·
  #666666 · #525252 · #393939 · #161616`) — not violet-tinted. The violet
  tone lives in the brand ramp; secondary/tertiary *text* uses ink at 65% / 45%.
- **Semantic**: green `#027A48` on `#ECFDF3` (success / approvals), red
  `#B42318` on `#FEF3F2` (error), amber `#F59E0B` ("Provável", site convention),
  green `#C8F7CE` for the WhatsApp pill.
- **No dark mode** in the marketing tiles. App is light-only.

### Typography
- **Manrope** (variable, 200–800) for **everything** — UI, headings,
  metrics, body, microcopy. Confirmed by the "Tipografia" poster.
- Weights actually used: 400 body, 500 nav, 600 labels, 700 headings,
  800 display.
- Tracking is slightly tight on heads (-0.02em) and tightest on display
  (-0.04em). Body sits at 0.
- Numbers are tabular-friendly — Manrope's defaults work; no need to
  enable `font-feature-settings: 'tnum'` unless tables get jittery.
- A secondary **Lora** italic is reserved for marketing pull-quotes
  only. Never inside the product.

### Backgrounds
- **App canvas** is `#FAFAFC` — slightly cooler than pure white.
- **Card surfaces** are pure white `#FFF` with a soft shadow.
- **Marketing tiles** use one of three treatments:
  1. *White-on-purple*: solid `#843CFF` panel with white cards floating on it.
  2. *Purple frame*: a rounded `#843CFF` block as a backdrop with cards
     half-overlapping the edge for depth.
  3. *Dot grid*: light grey dot grid on white (visible in the Workflow tile).
- **Brand wallpaper** (`assets/imagery/wallpaper.webp`) is a curved
  ribbon pattern in two violets (`#9006F3 → #8572FF`) — used as a
  desktop / hero backdrop, never inside the product.
- No photographic textures in product UI. Photos appear as 1:1 circular
  avatars or as company "logo" squares with rounded corners.

### Animation
- Easings: `cubic-bezier(0.22, 1, 0.36, 1)` for entrances (a soft
  overshoot-out), `cubic-bezier(0.65, 0, 0.35, 1)` for state changes.
- Durations: 140ms (hover / focus), 220ms (panel open / tab swap),
  420ms (page transitions).
- No bouncy springs, no parallax. Fades + small translateY (8–12px).
- Marketing tiles imply layered float — cards have subtle drop-shadows
  and a tiny tilt on hover; never a full 3D card flip.

### Hover & press
- **Primary button (purple)**: base `--ploomes-purple` (`#843CFF`), hover →
  `--ploomes-purple-deep` (`#7714EB`). Press → same colour + scale(0.98) +
  slightly tighter shadow.
- **Secondary / ghost button**: hover → `--purple-50` background, ink
  text unchanged.
- **Icon button in sidebar**: hover → background lifts to white at 12%
  opacity (on the dark sidebar); active item gets a solid white pill
  behind the icon.
- **Link / inline action**: hover → underline appears, colour stays.
- Hover transitions all run at `--dur-fast` (140ms).
- Focus ring: 2px `--ploomes-purple` outline at `outline-offset: 2px`,
  no glow — accessibility-first, calm.

### Borders & shadows
- Default border `1px solid var(--border)` (`#E8E8EE`).
- Inputs use the same border, with focus state replacing it with
  `var(--ploomes-purple)`.
- The system has **five elevations** (`--shadow-xs` → `--shadow-xl`)
  plus one **brand glow** (`--shadow-brand`) — a soft purple drop used
  exclusively under primary CTAs and the floating "wow" cards in
  marketing tiles. All shadows tinted with the ink colour at 4–14% so
  they read warm against the warm-white canvas.
- No inner shadows. Components rely on borders + soft drop-shadows.

### Corner radii
- `--radius-sm` 8px — chips, inputs, small buttons
- `--radius-md` 12px — buttons, dropdowns
- `--radius-lg` 16px — **default card**, list rows, mini-modals
- `--radius-xl` 20px — hero cards
- `--radius-2xl` 28px — full-bleed marketing tiles, the big purple panels
- `--radius-pill` — status pills, kanban pill-buttons, primary CTAs are
  *medium* (not pill) but secondary toggles and tags are pill.

### Transparency & blur
- Used sparingly. The only blur in the marketing tiles is on the soft
  brand-glow under the floating "notification" card; the system never
  glassmorphs entire panels.
- Sidebar overlays on mobile dim the canvas with `rgba(29, 13, 71, 0.48)`
  — ink-violet at 48%, not black.

### Layout rules
- App shell is **fixed**: a narrow dark-violet sidebar (left, ~80px wide)
  + a sticky top bar (~64px tall) + a scrolling canvas with 24–32px
  outer padding.
- Cards are 16–24px internal padding; the breathing room between cards
  is 16–24px.
- Marketing pages use a 12-column grid, 80–120px outer margin on
  desktop, with hero copy capped at ~640px max-width.
- Imagery in cards is always **circular** (avatars, company photos) or
  rounded-rect (proposal hero strip). No raw square photos.

### Color of imagery
- Photos are bright, natural, **warm-cool architectural** shots
  (buildings, towers — implying "enterprise" / "industry"). They are
  not desaturated, not duotoned, not B&W. They appear as small avatars
  or 1:1 thumbnails next to a name, never full-bleed.
- Stock people photos are diverse, smiling, natural lighting; no
  filters.

### Common visual motifs to *use*
- Floating cards over a purple panel with overflow (cards extend off the
  edge by ~24px to imply they're part of a bigger surface).
- Tiny "notification" pill with brand icon + 1-line summary +
  timestamp (`1 min`, `09:00`).
- Inline avatar groups (3–4 overlapping circles, 8px overlap).
- Status pill: `4px 10px` padding, pill radius, soft tint bg + ink-tint text.
- Progress bar: 6px tall, pill, purple-500 fill on purple-100 track.
- "Show more" line link with a purple chevron-right.

### Common motifs to *avoid*
- Blue-purple gradients (the brand is pure purple, no blue blend).
- Emoji on cards.
- Drop-shadows with grey/black — they always carry the ink tint.
- Left-coloured-border accent cards.
- Glassmorphism / heavy frosted blur.
- Pure black `#000` — always reach for `--ploomes-ink`.

---

## ICONOGRAPHY

### Brand iconography
Ploomes uses a small set of **custom line icons** in the marketing tiles
that match the "Ploomes leaf" geometry — rounded ends, 1.75–2px stroke,
no fills. Confirmed icons in screenshots: chat-bubble, headset, group
(3-people), phone, envelope, pin/location, WhatsApp glyph, paperclip,
funnel, ID card, sliders, document, cloud, settings-gear, bell,
calendar, pencil/edit, magnifying-glass.

We **do not have the source icon set**. Until the user supplies one, this
system uses **[Lucide](https://lucide.dev)** as a substitution — same
stroke weight, same rounded line-cap, near-identical metaphors. Load
from CDN:

```html
<script src="https://unpkg.com/lucide@latest"></script>
<!-- or inline SVGs from https://lucide.dev/icons -->
```

The UI kit uses `lucide-react`-style inline SVGs at **20px** for nav,
**16px** for inline / pill, **24px** for primary actions, all
`stroke="currentColor" stroke-width="1.75"`. **🚩 SUBSTITUTION** — flagged
in CAVEATS; replace with the official Ploomes icon set when supplied.

### Logos

> **REGRA Nº 1 — o fundo escolhe o logo, nunca a pessoa.**
> Em **qualquer** fundo escuro, roxo, colorido ou fotográfico use o logo
> **negativo**. Nunca aplique o monocromático escuro (ink `#1E0C45`) sobre cor.
> Este é o erro de marca mais reportado pelo time de marketing.

> **Correção ago/2026 — por que o erro acontecia até nos arquivos.** Os SVGs
> exportados vinham com `<defs></defs>` **vazio**: a folha de estilo que dava cor
> a `.cls-1` (símbolo) e `.cls-2` (logotipo) foi perdida na exportação, então
> **todas** as variantes pintavam preto por padrão — negativo e mono escuro eram
> byte-idênticos. Cada `<path>` agora carrega `fill` explícito (ink `#1E0C45`,
> branco `#FFFFFF`, roxo do logo `#791AEE`), verificado por hash: nenhuma variante
> repete outra. Se você reexportar do Figma, **confira o `fill`** antes de subir.

**Use o componente `<Logo>`** — ele resolve a variante a partir do fundo, então
o erro não acontece:

```jsx
<Logo background="light" />   // ink + símbolo roxo
<Logo background="dark" />    // branco + símbolo roxo
<Logo background="brand" />   // símbolo Dark Ploo + logotipo branco (lockup oficial sobre roxo)
<Logo background="photo" />   // tudo branco
<LogoSymbol background="brand" height={24} />
```

`background` é obrigatório na prática — se omitido, assume `light`. Passar
`color` manualmente é escape hatch para impressão em uma cor só; o componente
avisa no console se isso colocar um logo escuro sobre fundo escuro.
Ver o card **Brand → Logo — aplicação**.

| Fundo | Wordmark | Símbolo | Arquivo equivalente |
| --- | --- | --- | --- |
| Claro | ink `#1E0C45` | roxo `#791AEE` | `ploomes-horizontal-color.svg` |
| Escuro | **branco** | roxo `#791AEE` | `ploomes-horizontal-color-negative.svg` |
| Roxo / marca | **branco** | ink `#1E0C45` | `ploomes-horizontal-on-purple.svg` |
| Foto / vídeo | **branco** | **branco** | `ploomes-horizontal-mono-negative.svg` |

Sobre **Purple Ploo** o símbolo vai em **Dark Ploo** e o logotipo em branco — é a
terceira versão do brandbook, reservada ao fundo da cor principal da marca
(`tone="mono"` dá a alternativa toda branca).

Outras regras: **clearspace** = **uma altura de logo** livre em todos os lados
(no arranjo vertical e no símbolo, **uma altura de ícone**); **altura mínima**
16px (horizontal), 32px (vertical), 14px (símbolo) — o manual permite reduzir
até 13px. Regras completas (uso do ícone sozinho, fundos fotográficos, 6 usos
incorretos, submarcas): **`brandbook.md` §3–§4**.

Todos os arquivos vivem em `assets/logos/`:
- `ploomes-horizontal-color.svg` — primary lockup, light bg
- `ploomes-horizontal-mono-dark.svg` — single-tone ink, light bg
- `ploomes-horizontal-mono-negative.svg` — single-tone white, dark bg
- `ploomes-horizontal-color-negative.svg` — full colour on dark
- `ploomes-horizontal-on-purple.svg` — locked composition for purple bg
- `ploomes-vertical-*.svg` — same matrix, vertical lockup
- `icon-purple.svg`, `icon-white.svg`, `icon-black.svg` — symbol only
- `favicon.webp` — app icon (rounded square, purple bg, white leaves)
- `sankhya/ploomes-sankhya-*.svg` — assinatura conjunta **Ploomes by Sankhya**
  (`color` claro · `color-negative` escuro · `on-purple` · `mono-negative`
  foto/1 cor clara · `mono-dark` impressão 1 cor). Use o arquivo oficial —
  **não recrie o lockup**. Card: **Brand → Ploomes by Sankhya**.

### Other glyphs
- **WhatsApp** — green logo SVG inside a `#C8F7CE` pill ("Whatsapp").
- **Status check** — a custom rounded check (✓) inside a purple disc,
  never the Unicode emoji `✅`.
- **Growth delta** — a small filled triangle ▲ / ▼ inline with the
  percentage, coloured success / danger.
- **Avatars** — circular photo, fallback is purple-100 bg with
  ink-coloured initial.

### Backgrounds & illustrations
- `assets/graphics/wing-*.png` — **elemento gráfico principal** (asas): 9
  variações oficiais do brandbook (trail sólido/outline, leque roxo/claro/
  branco/gradiente, escada, isometria, textura). A versão `wing-fan-white`
  só vai sobre fundo escuro, roxo ou foto. Regras de uso: `brandbook.md` §7 e
  o card **Brand → Grafismo — asas**.
- `assets/imagery/wallpaper.webp` — full-bleed brand pattern, suitable
  for desktops, lock screens, deck dividers.
- `assets/ilustracoes-de-produto-ploomes-shots/*.webp` — the original marketing tiles, kept
  for reference (do not redistribute — these are product assets).

---

## MEDIA LIBRARY

Real Ploomes photography, product captures and feature icons — the official
"Banco de imagens Ploomes". Browse them from the **Media** group in the
Design-System tab; each card doubles as the source-of-truth index.

| Card (Design-System tab → Media) | Folder | What's in it |
| --- | --- | --- |
| **Product screenshots** | `assets/ilustracoes-de-produto-ploomes-shots/` (68) | Tiles de marketing + capturas reais — Funil de vendas, Oportunidades, Workflow + automações, CPQ + propostas, Gerador/assinatura de documentos, Relatórios, Assistente/Biblioteca IA, Integrações/ERPs, Formulários externos, White label. Many ship pre-framed on the brand purple. |
| **Feature icons** | `assets/icones-dos-modulos-ploomes/` (7) | Gradient-purple app-tile icons (transparent PNG): Analytics, CPQ, Workflow, Biblioteca IA, Propostas & documentos, Formulários externos, Produtos do cliente. Use for feature grids / value-prop cards. |
| **Photography** | `assets/fotos-internas-time-ploomes/` (7) + `assets/fotos-pessoas-ilustrativas/` (11) | Fotos internas reais do time — `foto-de-time`, `foto-corporativa`, `foto-corporativa-natural(-2)`, `reuniao-presencial`, `reuniao-online(-2)` — e pessoas por segmento (indústria, tecnologia, consultoria, corretora de seguros, serviços, facilities). Warm, natural, unfiltered — see the imagery guidance above. |
| **Customer cases** | `assets/cases/` (4) | 16:9 case-study covers — Grupo Moura, Philips, Truckvan, Unimed — each linked to its YouTube testimonial (`assets/cases/…` + links in `research`/gallery). Pair with the matching brand in `ClientLogos`. |

**Naming.** Everything was re-slugged to web-safe kebab-case ASCII (no spaces
or accents) so paths need no URL-encoding — e.g. `automação de propostas e
CPQ.png` → `ilustracoes-de-produto-ploomes-shots/automacao-propostas-cpq.png`. Os nomes de pasta seguem
as pastas de trabalho do time de marketing (`fotos internas time Ploomes`,
`fotos pessoas ilustrativas`, `icones dos modulos ploomes`, `ilustracoes de produto
ploomes-shots`), também em kebab-case ASCII. Original
filenames are preserved under the original upload archive (kept outside this package).

**Use.** Photos stay bright, natural and unfiltered (never duotone/B&W). In
product UI they appear only as circular avatars or small rounded thumbnails;
full-bleed use is for marketing pages only. Product screenshots are the correct
source for landing-page feature strips (the landing kit already pulls from
`assets/ilustracoes-de-produto-ploomes-shots/`).

---

## CAVEATS

1. **Color tokens are now Figma-exact; components are still recreations.**
   The color system is transcribed verbatim from the Figma Variable
   collections (Primitive / Semantic). The UI-kit components in
   `ui_kits/crm/` remain high-fidelity **recreations** built from the live
   site — the attached Figma is dominated by an unthemed third-party
   **Relume** component library (1600+ generic black/square placeholder
   families), so exact production component code was not lifted from it.
   Attach the product repo to cross-check sidebar width, exact shadows and
   dense modes.
2. **Icon set is Lucide as a substitute**, not the Ploomes house icons.
   The attached Figma *does* contain a large icon set (~848 glyphs, mostly
   a generic outline library) — it can be materialized into the DS on
   request. Until then the kits use [Lucide](https://lucide.dev): matching
   stroke weight and metaphor, but not pixel-identical geometry.
3. **No marketing-site reference attached** — there is no `slides/`
   folder in this system because no template was provided. Share a
   screenshot pack or URL import if you'd like deck or marketing-site
   templates added.

---

## How to use this system

In any HTML artifact:

```html
<link rel="stylesheet" href="../colors_and_type.css">

<style>
  .btn {
    background: var(--ploomes-purple);
    color: var(--fg-on-brand);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-brand);
    padding: var(--space-3) var(--space-5);
    font-weight: var(--fw-semibold);
  }
</style>
```

For React JSX components, import the `colors_and_type.css` at the
top of your HTML and consume the tokens via `var(--token)`. The UI
kit components in `ui_kits/crm/` are the canonical examples.
