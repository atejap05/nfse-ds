# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [Unreleased]

### Documentation

- [docs/roadmap.md](docs/roadmap.md): Fase H (lista estendida) marcada como entregue; novas etapas de **revisão e inspeção manual** e de **layouts de exemplo** (header, persona, sidebar, navbar, tabela, app shell); backlog residual separado.
- [docs/layout-examples.md](docs/layout-examples.md): escopo e critérios dos templates integrados no Storybook.
- [docs/README.md](docs/README.md): índice atualizado (z-index, icons, layout-examples).

### Added

- Tokens: escala de camadas `--nfse-z-*` ([docs/z-index.md](docs/z-index.md)); `NfseToaster` e `Dialog` passam a usá-la.
- Componentes: `Label`, `Separator`, `Input`, `Badge`, `Avatar`, `Card`, `Switch`, `Skeleton`, `Spinner`, `RadioGroup`, `CheckboxGroup`, `Tabs` (Radix), `Dialog` (Radix), `Table`, `Pagination`, `NfseToaster` (Sonner + tema NFS-e).
- Componentes (backlog): `Tooltip`, `Popover`, `DropdownMenu`, `Sheet`, `Collapsible`, `Accordion`, `Progress`, `Slider`, `Combobox` (busca sobre lista), `Command` (cmdk + tema NFS-e).
- Storybook: receitas em `NFS-e/Recipes` (composição entre componentes).
- Documentação: [docs/input-textfield.md](docs/input-textfield.md), [docs/calendar-rfc.md](docs/calendar-rfc.md), [docs/icons.md](docs/icons.md).
- Dependências: `@radix-ui/react-dialog`, `@radix-ui/react-tabs`, `@radix-ui/react-tooltip`, `@radix-ui/react-popover`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-accordion`, `@radix-ui/react-collapsible`, `@radix-ui/react-progress`, `@radix-ui/react-slider`, `sonner`, `cmdk`.

## [0.1.0] - 2026-04-01

### Added

- Versão inicial do pacote: componentes base (Button, TextField, TextArea, Select, Checkbox, Radio, Alert, Container, Stack, Typography), tokens CSS e Storybook.

