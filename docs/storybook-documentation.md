# Documentação no Storybook (portal de componentes)

O Storybook do `nfse-ds` deve ser mais do que uma **galeria visual**: é a referência viva para **API**, **acessibilidade**, **tokens** e **integração** no portal NFS-e. Este documento fixa o modelo de trabalho, inspirado em portais como o [Fluent UI React Storybook](https://storybooks.fluentui.dev/react/?path=/docs/concepts-introduction--docs) (páginas de conceitos, texto explicativo e tabelas de propriedades).

## Papel do Storybook vs `docs/`

| Canal | Conteúdo |
| ----- | ---------- |
| **`docs/`** (este repositório) | Decisões de arquitetura, roadmap, contratos estáveis (npm), RFCs e guias que mudam pouco. |
| **Storybook** | Variantes e estados dos componentes, **Autodocs** gerados a partir de TypeScript, descrições por story, addon **a11y**, receitas e layouts. |

O Storybook complementa o manual em `docs/`, não o substitui.

## Padrões por componente

1. **`meta` com `tags: ['autodocs']`** quando o componente tiver ficheiro `*.stories.tsx` dedicado — gera documentação com tabela de props a partir dos tipos exportados.
2. **`parameters.docs.description`** (Markdown) no `meta` ou na story, com:
   - finalidade do componente;
   - quando usar vs alternativas;
   - referência a tokens (`var(--nfse-*)`) e ficheiros em `docs/` quando útil (ex.: [icons.md](icons.md)).
3. **Histórias nomeadas** por cenário (`Básico`, `Com erro`, `Compacto`, …), não apenas `Default` genérico, quando fizer sentido.
4. **Acessibilidade**: validar com o addon **a11y** em estados relevantes (foco, contraste, roles).

## MDX e páginas de visão geral

- Ficheiros **`*.mdx`** em `src/` podem ser usados para páginas tipo “Introdução” ou “Conceitos”, com o mesmo tema do Storybook (`preview` já importa `theme.css`).
- Use MDX para conteúdo narrativo longo; mantenha exemplos executáveis em `*.stories.tsx` quando possível.
- **Página raiz:** [`src/stories/IntroducaoNfse.mdx`](../src/stories/IntroducaoNfse.mdx) — **Introdução NFS-e** no grupo Storybook `NFS-e` (ordenada antes de *Design System Overview* na sidebar).

## Manutenção

- Novos componentes públicos: export em [`src/index.ts`](../src/index.ts), story com Autodocs e, se aplicável, entrada no [CHANGELOG](../CHANGELOG.md).
- Alterações visuais em tokens: actualizar também [`nfse-tailwind.css`](../src/tokens/nfse-tailwind.css) quando existir espelho.

## Referências

- [README do manual](README.md) — índice de `docs/`.
- [Roadmap](roadmap.md) — evolução da documentação e layouts.
- [Arquitetura](architecture.md) — papel do Storybook no ecossistema.
