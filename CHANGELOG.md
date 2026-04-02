# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [Unreleased]

### Changed

- **Mobile first (breaking em tipografia e gutters):** tokens `--nfse-text-h1-size` / h2 / h3 passam a ser menores no viewport base e escalam a partir de `48rem` (`--nfse-breakpoint-md`); `--nfse-layout-gutter` é mais apertado no mobile. Novos tokens: `--nfse-breakpoint-*`, `--nfse-touch-target-min`, `--nfse-layout-gutter`.
- `Container` e `HeaderInner`: padding horizontal com `max(var(--nfse-layout-gutter), env(safe-area-inset-*))`.
- `Header`: abaixo de `md` — logo e subtítulo ocultos, separadores verticais ocultos, texto da Persona em `HeaderActions` oculto (avatar permanece); `HeaderTitle` com reticências; gatilhos em `.actions` com área mínima de toque.
- `PersonaText`: atributo `data-nfse-persona-text` para integração com o cabeçalho responsivo.
- Receitas e layouts: navegação **inline** a partir de `md` e **Sheet** + botão «Menu» no mobile; story **Header — viewport mobile (375)** com moldura estreita.
- `Table`: scroll horizontal com `-webkit-overflow-scrolling: touch`; `Dialog` / `Sheet`: `box-sizing`, `max-height` com `dvh` onde aplicável, paddings com *safe-area*; `Pagination`: alvos de toque mínimos e `max-width` na navegação.
- Storybook: `utilities.css` no preview; viewports `nfseMobile` / `nfseTablet` nos parâmetros; remoção do override `a11y.test: 'todo'`.
- `nfse-tailwind.css`: `--breakpoint-sm` … `--breakpoint-xl` alinhados aos tokens.
- Storybook `NFS-e/Layouts`: exemplos **Header** com **Persona** como gatilho do menu (padrão e compacto); navegação com padrão Sheet no mobile.
- Token `--nfse-layout-max-width` (90rem): `Container` e `HeaderInner` passam a usar a mesma largura máxima de coluna para alinhar cabeçalho e conteúdo principal.
- `Header` (`HeaderNav`): links de navegação alinhados à direita na área flexível central (`justify-content: flex-end`).
- Storybook `NFS-e/Layouts`: exemplo de header sem campo de busca.

### Documentation

- [docs/roadmap.md](docs/roadmap.md): Fase H (lista estendida) marcada como entregue; novas etapas de **revisão e inspeção manual** e de **layouts de exemplo** (header, persona, sidebar, navbar, tabela, app shell); backlog residual separado.
- [docs/layout-examples.md](docs/layout-examples.md): escopo e critérios dos templates integrados no Storybook.
- [docs/README.md](docs/README.md): índice atualizado (z-index, icons, layout-examples).

### Added

- Folha `utilities.css` (classes `.nfse-u-hidden-below-md`, `.nfse-u-sr-only`); export npm `nfse-ds/utilities.css` e import no bundle principal.
- Componente `Persona` (`PersonaAvatar`, `PersonaText`, `PersonaName`, `PersonaDescription`) com `Avatar` + nome + descrição opcional; playground em **Components/Persona**.
- Componente composto `Header` e subcomponentes (`HeaderInner`, `HeaderRow`, `HeaderBrand`, `HeaderLogo`, `HeaderTitles`, `HeaderTitle`, `HeaderSubtitle`, `HeaderNav`, `HeaderActions`, `HeaderSeparator`) para layouts de aplicação; variantes `default` e `compact`, opção `sticky`.
- Storybook: grupo `NFS-e/Layouts` com exemplos de cabeçalho integrado.
- Tokens: escala de camadas `--nfse-z-*` ([docs/z-index.md](docs/z-index.md)); `NfseToaster` e `Dialog` passam a usá-la.
- Componentes: `Label`, `Separator`, `Input`, `Badge`, `Avatar`, `Card`, `Switch`, `Skeleton`, `Spinner`, `RadioGroup`, `CheckboxGroup`, `Tabs` (Radix), `Dialog` (Radix), `Table`, `Pagination`, `NfseToaster` (Sonner + tema NFS-e).
- Componentes (backlog): `Tooltip`, `Popover`, `DropdownMenu`, `Sheet`, `Collapsible`, `Accordion`, `Progress`, `Slider`, `Combobox` (busca sobre lista), `Command` (cmdk + tema NFS-e).
- Storybook: receitas em `NFS-e/Recipes` (composição entre componentes).
- Documentação: [docs/input-textfield.md](docs/input-textfield.md), [docs/calendar-rfc.md](docs/calendar-rfc.md), [docs/icons.md](docs/icons.md).
- Dependências: `@radix-ui/react-dialog`, `@radix-ui/react-tabs`, `@radix-ui/react-tooltip`, `@radix-ui/react-popover`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-accordion`, `@radix-ui/react-collapsible`, `@radix-ui/react-progress`, `@radix-ui/react-slider`, `sonner`, `cmdk`.

## [0.1.0] - 2026-04-01

### Added

- Versão inicial do pacote: componentes base (Button, TextField, TextArea, Select, Checkbox, Radio, Alert, Container, Stack, Typography), tokens CSS e Storybook.

