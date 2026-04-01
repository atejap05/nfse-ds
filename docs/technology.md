# Tecnologia

Stack e práticas adotadas no `nfse-ds`.

## Runtime e linguagem

| Tecnologia | Uso |
|------------|-----|
| **React 19** | Biblioteca de UI; `react` e `react-dom` como **peerDependencies** (^19). |
| **TypeScript** | Tipagem estrita; declarações emitidas para consumidores. |
| **clsx** | Composição condicional de classes quando necessário (`src/utils/cn.ts`). |

## Build e tooling

| Ferramenta | Uso |
|------------|-----|
| **Vite 8** | Bundler em modo library (`vite.config.lib.ts`). |
| **vite-plugin-dts** | Geração de `.d.ts` a partir de `src/`. |
| **vite-plugin-static-copy** | Cópia dos CSS de tokens para `dist/`. |
| **ESLint** + **Prettier** | Lint e formatação; `storybook-static/` e `dist/` ignorados. |

## Documentação e testes

| Ferramenta | Uso |
|------------|-----|
| **Storybook 10** | `@storybook/react-vite`, addons **docs** e **a11y**, integração **Vitest** para testes a partir de stories. |
| **Vitest** | `npm run test` — execução dos testes configurados no ecossistema Storybook/Vite. |

## Estilos

- **CSS Modules** por componente + variáveis globais em `theme.css`.
- **Tailwind CSS v4** (no app consumidor): importar `nfse-tailwind.css` após `@import "tailwindcss"` para estender o tema com tokens NFS-e (`@theme`).

## Documentação externa (Context7)

Para APIs e padrões que mudam com frequência (**Next.js** App Router, **Tailwind** v4, **React 19**), a equipe pode consultar documentação atualizada via **Context7** (MCP): resolver o `libraryId` e usar `query-docs` com perguntas específicas (import de CSS no `layout`, `@theme`, `"use client"`, etc.). Isso complementa este repositório, não substitui o PRD nem os tokens oficiais.

## Skill frontend-design

A skill **frontend-design** (instalação global do agente) orienta composição, hierarquia, motion e refinamento visual. **No NFS-e aplicam-se exceções obrigatórias:**

- **Tipografia**: o PRD define **Roboto**; não substituir por outras fontes “para diferenciar”.
- **Cores**: paleta institucional (verde, amarelo, azul marinho, neutros) tem precedência sobre paletas criativas genéricas.
- Uso recomendado da skill: **espaçamento**, **ritmo**, **estados de foco**, **clareza de layout** e **microinterações** dentro da identidade governamental e das regras **eMAG/WCAG 2.1**.

## Acessibilidade

- Contraste e foco definidos nos tokens (`--nfse-focus-ring`, etc.).
- Componentes com `label`/`htmlFor`, `aria-*` onde aplicável; alertas com `role="alert"` quando fizer sentido.
- Verificação contínua no Storybook com o addon **a11y**.
