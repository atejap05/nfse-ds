# nfse-ds

Design System em **React 19** e TypeScript para interfaces da **Nota Fiscal de Serviço eletrônica (NFS-e)**. Inclui tokens CSS, componentes acessíveis (base WCAG 2.1), documentação no **Storybook** e extensão de tema para **Tailwind CSS v4** em apps Next.js.

**Versão:** 0.1.0

## Documentação

Manual técnico (arquitetura, estrutura do repositório, stack, roadmap e publicação npm): **[docs/README.md](docs/README.md)**.

## Requisitos

- Node.js 20+
- Peer dependencies: `react` e `react-dom` **^19.0.0**

## Desenvolvimento

```bash
npm install
npm run dev
```

Abre o Storybook em `http://localhost:6006` (componentes, página **NFS-e / Design System Overview**, addon de acessibilidade).

### Scripts

| Script               | Descrição                                      |
| -------------------- | ---------------------------------------------- |
| `npm run dev`        | Storybook em modo desenvolvimento              |
| `npm run build`      | Build da biblioteca (`dist/`)                  |
| `npm run build-storybook` | Site estático do Storybook (`storybook-static/`) |
| `npm run lint`       | ESLint                                         |
| `npm run typecheck`  | `tsc -b`                                       |
| `npm run test`       | Vitest (testes gerados a partir das stories)   |

## Uso em aplicações React (Vite ou bundler ESM)

1. Instale o pacote (localmente: `npm link` ou `file:../nfse-ds` durante o desenvolvimento).

2. Importe estilos globais **antes** dos componentes:

```tsx
import 'nfse-ds/theme-fonts.css';
import 'nfse-ds/theme.css';
import { Button, TextField } from 'nfse-ds';
```

`theme-fonts.css` carrega a família **Roboto** (Google Fonts). Em ambientes sem acesso à internet, substitua por `@fontsource/roboto` no seu projeto.

## Uso em Next.js (App Router) + Tailwind CSS v4

1. No `app/globals.css` (ou equivalente), importe o Tailwind e, em seguida, o tema NFS-e:

```css
@import 'tailwindcss';
@import 'nfse-ds/nfse-tailwind.css';
```

2. Importe também os tokens base e fontes no **root layout** (Server Component):

```tsx
import 'nfse-ds/theme-fonts.css';
import 'nfse-ds/theme.css';
```

3. Componentes com estado ou eventos (`Button`, campos de formulário, `Alert` dispensável, etc.) devem ser usados em Client Components; adicione `'use client'` no arquivo que os utiliza ou importe-os a partir de um wrapper cliente.

## Pacote publicado

Após `npm run build`, a pasta `dist/` contém:

- `index.js` / `index.css` — componentes e estilos empacotados
- `theme.css`, `theme-fonts.css`, `nfse-tailwind.css` — entradas documentadas em `package.json` (`exports`)

## Estrutura do repositório

- `src/tokens/` — variáveis CSS e tema Tailwind v4
- `src/components/` — componentes e stories
- `assets/` — referência do logo oficial (cópia local; origem: portal NFSe)
- `product-requirements.md` — escopo do projeto (Fase 1)

## Licença e marca

O uso do nome e da identidade visual deve seguir as diretrizes oficiais da NFS-e. O logo em `assets/` é para documentação e desenvolvimento alinhados ao portal público.
