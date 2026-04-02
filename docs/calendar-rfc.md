# RFC — componente Calendar (Fase G)

Conforme [roadmap.md](roadmap.md), o **Calendar** não deve ser implementado neste repositório sem um **RFC interno** aprovado.

## Motivos

- Alta complexidade: localização **pt-BR**, teclado, intervalos de datas e integração com regras de negócio do portal.
- Dependência provável de biblioteca (ex.: **react-day-picker**) com **skin NFS-e** e testes de acessibilidade (APG / WCAG).

## O que o RFC deve conter

1. Casos de uso no portal NFS-e (seleção única, intervalo, mínimo/máximo).
2. Biblioteca base ou decisão de implementação própria, com impacto em bundle e manutenção.
3. Requisitos de acessibilidade e testes (Storybook + Vitest/critérios do DS).
4. Plano de tokens (`theme.css` / `nfse-tailwind.css`) e exceções de marca.

## Status

**Não iniciado** — aguardando priorização e aprovação do RFC.
