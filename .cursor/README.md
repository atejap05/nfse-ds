# Regras do Cursor (nfse-ds)

Este diretório contém regras no formato **`.mdc`** para o assistente do Cursor seguir convenções do Design System **nfse-ds**.

Documentação oficial do produto: [Regras | Cursor Docs](https://cursor.com/pt-BR/docs/rules).

## Índice das regras

| Arquivo | Escopo | Propósito |
|--------|--------|-----------|
| `rules/nfse-ds-context.mdc` | **Sempre** (`alwaysApply: true`) | Persona, stack (React 19, Vite, Storybook, Radix, CSS Modules, tokens), objetivos e como responder a pedidos vagos |
| `rules/nfse-ds-typescript-and-api.mdc` | `src/**/*.ts`, `src/**/*.tsx` | Tipagem estrita, `*Props`, extensão de atributos nativos, JSDoc na API pública, quando separar `.types.ts` |
| `rules/nfse-ds-react-components.mdc` | `src/components/**/*.tsx` | Exports nomeados, `forwardRef` com função nomeada, estrutura de pastas, composição, Radix/`asChild`, prop `as` |
| `rules/nfse-ds-css-and-responsive.mdc` | `src/**/*.module.css`, `src/App.css`, `src/index.css` | Mobile first, `min-width` para breakpoints, tokens, uso legítimo de `max-width`, touch targets |
| `rules/nfse-ds-css-tokens-global.mdc` | `src/tokens/**/*.css` | Consistência e evolução dos tokens globais |
| `rules/nfse-ds-accessibility.mdc` | `src/components/**/*.tsx` | Semântica, ARIA, teclado, foco visível |
| `rules/nfse-ds-storybook.mdc` | `**/*.stories.tsx` | `export default meta`, variantes e a11y nas stories |

## Manutenção

- Prefira **uma preocupação por arquivo** e textos **objetivos**; detalhes longos ficam em PRs ou em `docs/` do repositório.
- Ao adicionar pastas novas (ex.: testes e2e), avalie se um novo `.mdc` com `globs` específicos ajuda.
