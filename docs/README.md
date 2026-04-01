# Manual do Design System NFS-e (`nfse-ds`)

Este diretório reúne a **documentação técnica** do repositório: arquitetura, organização de código, stack, roadmap de evolução e orientações para publicação como pacote npm. Complementa o **Storybook** (documentação interativa de componentes e exemplos de uso).

## Público-alvo

- **Desenvolvedores front-end** que consomem ou contribuem com a biblioteca.
- **Designers e UX** que precisam alinhar especificações aos tokens e componentes documentados (referência principal de interação visual: Storybook + este manual).

## Como usar este manual

| Recurso | Quando usar |
|--------|----------------|
| **Storybook** (`npm run dev`) | Explorar componentes, variantes, controles e acessibilidade (addon a11y) em tempo real. |
| **`docs/`** (esta pasta) | Entender decisões de arquitetura, estrutura de pastas, tecnologias, planejamento futuro e publicação npm. |
| **[README raiz](../README.md)** | Início rápido: instalação, scripts, imports em React e Next.js. |

## Índice

1. [Arquitetura](architecture.md) — camadas, tokens, build, consumidores.
2. [Estrutura do repositório](structure.md) — pastas, convenções de arquivos e nomenclatura.
3. [Tecnologia](technology.md) — stack, integração Tailwind, Context7 e skill frontend-design.
4. [Roadmap](roadmap.md) — próximas implementações e componentes (inspiração shadcn/ui).
5. [Pacote npm](npm-package.md) — visão de publicação, `exports` e versionamento.

## Documentos relacionados

- [Requisitos do produto (Fase 1)](../product-requirements.md) — escopo formal do DS no portal NFS-e.
