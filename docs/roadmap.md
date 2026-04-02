# Roadmap

Planejamento evolutivo do Design System NFS-e. A **Fase 1** (tokens, componentes base, Storybook, Overview) está descrita no [product-requirements.md](product-requirements.md). Este documento organiza **entregas realizadas**, **próximos passos** e **backlog**, usando [shadcn/ui](https://ui.shadcn.com/) como **inspiração de superfície de API e cobertura** — não como fork: implementação, tokens e acessibilidade permanecem alinhados ao **design NFS-e** e às regras da skill **frontend-design** (dentro das exceções de marca: Roboto e paleta oficial).

## Estado atual do repositório (visão rápida)

| Área                           | Situação                                                                             |
| ------------------------------ | ------------------------------------------------------------------------------------ |
| **API pública**                | Ver exports em `[src/index.ts](../src/index.ts)` e [npm-package.md](npm-package.md). |
| **Contrato Input / TextField** | Documentado em [input-textfield.md](input-textfield.md).                             |
| **Calendário (Fase G)**        | Apenas [RFC / pré-requisitos](calendar-rfc.md) — sem componente no pacote.           |
| **Histórico de versões**       | [CHANGELOG.md](../CHANGELOG.md).                                                     |

**Componentes já exportados pela biblioteca** (além da Fase 1: Button, TextField, TextArea, Select, Checkbox, Radio, Alert, Container, Stack, Typography):

Label, Separator, Input, Badge, Avatar, Card, Switch, Skeleton, Spinner, RadioGroup (+ RadioGroupItem), CheckboxGroup (+ CheckboxGroupItem), Tabs (Radix UI), Dialog (Radix UI), Table, Pagination, NfseToaster (Sonner + tema NFS-e), Tooltip, Popover, DropdownMenu, Sheet, Collapsible, Accordion, Progress, Slider, Combobox, Command (cmdk).

**Dependências de UI além de React:** pacotes `@radix-ui/react-*` (dialog, tabs, tooltip, popover, dropdown-menu, accordion, collapsible, progress, slider), `sonner`, `cmdk` (declaradas no `package.json` do pacote).

**Documentação auxiliar:** [z-index.md](z-index.md) (camadas), [icons.md](icons.md) (estratégia de ícones no app consumidor).

---

## Critérios para qualquer novo componente

1. **Tokens**: cores, espaçamento e tipografia via `var(--nfse-*)` (e tema Tailwind quando o app usar `nfse-tailwind.css`).
2. **Acessibilidade**: teclado, foco visível, ARIA e, quando possível, padrões do [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/).
3. **Documentação**: Storybook com variantes e estados; testes alinhados ao setup Vitest/Storybook do repositório.
4. **Dependências**: preferir HTML nativo + CSS Modules; para padrões complexos (diálogo, abas), primitives estáveis (ex.: Radix) com tema NFS-e — decisão caso a caso e registrada neste roadmap quando afetar consumidores.

---

## Fase A — Consolidação da biblioteca npm (pré-1.0 ou 1.0)

**Status:** parcialmente atendida (CHANGELOG e referências em [npm-package.md](npm-package.md)); itens abaixo seguem como **próximos passos** até release estável.

- Congelar e comunicar contrato público de `package.json` (`exports`, peers) antes de `1.0.0`.
- Documentar mudanças em [CHANGELOG.md](../CHANGELOG.md) (formato Keep a Changelog).
- Revisão sistemática de contraste e checklist a11y em **todos** os componentes (Storybook + addon a11y).
- Opcional: exemplo mínimo `examples/next-app/` para validar Next + Tailwind + DS.

---

## Fase B — Primitivos de UI (inspiração shadcn)

**Status: entregue** (ordem sugerida mantida na implementação).

| Componente    | Notas                                                                                                     |
| ------------- | --------------------------------------------------------------------------------------------------------- |
| **Label**     | Inclui indicador opcional de obrigatório; usado por `TextField` / `TextArea`.                             |
| **Separator** | Horizontal/vertical; `decorative` para leitores de tela.                                                  |
| **Input**     | Primitivo sem label; `TextField` compõe `Label` + `Input` — ver [input-textfield.md](input-textfield.md). |
| **Badge**     | Variantes neutro, sucesso, aviso, erro, info.                                                             |
| **Avatar**    | Imagem, fallback por iniciais, sm/md/lg.                                                                  |
| **Card**      | Cabeçalho, corpo e rodapé opcionais.                                                                      |
| **Switch**    | `role="switch"` (APG).                                                                                    |
| **Skeleton**  | Variantes text / rect / circular.                                                                         |
| **Spinner**   | Inline ou bloco; `role="status"`.                                                                         |

---

## Fase C — Formulários e agrupamento

**Status: entregue.**

| Componente        | Notas                                                                                                     |
| ----------------- | --------------------------------------------------------------------------------------------------------- |
| **RadioGroup**    | `RadioGroup` + `RadioGroupItem`; `fieldset`/`legend`.                                                     |
| **CheckboxGroup** | `CheckboxGroup` + `CheckboxGroupItem`; valores em array.                                                  |
| **Tabs**          | **Decisão:** `@radix-ui/react-tabs` com estilos NFS-e (`Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`). |

---

## Fase D — Dados e navegação em listas

**Status: entregue.**

| Componente     | Notas                                                                             |
| -------------- | --------------------------------------------------------------------------------- |
| **Table**      | API genérica com colunas; `caption` opcional; zebra opcional.                     |
| **Pagination** | Numeração com reticências em conjuntos grandes; anterior/próximo; `aria-current`. |

---

## Fase E — Overlays

**Status: entregue.**

| Componente | Notas                                                                                                                        |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Dialog** | **Decisão:** `@radix-ui/react-dialog` — `Dialog`, `DialogTrigger`, `DialogContent`, `DialogClose` (foco, Esc, `aria-modal`). |

---

## Fase F — Feedback global (toasts)

**Status: entregue.**

| Abordagem  | Descrição                                                                                                                                                                               |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Sonner** | Componente `NfseToaster` + reexport de `toast`; tema via CSS Modules alinhado aos tokens. Dependência direta no pacote (consumidor não precisa instalar Sonner à parte para usar o DS). |

---

## Fase G — Calendário e datas

**Status: não iniciada (bloqueada por RFC).**

| Componente   | Notas                                                                                                                                          |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Calendar** | Ver [calendar-rfc.md](calendar-rfc.md). Sem implementação no pacote até aprovação do RFC e priorização (ex.: `react-day-picker` + skin NFS-e). |

---

## Próximos passos sugeridos (ordem)

1. **Qualidade e release:** concluir Fase A (a11y em massa, revisão de `exports` para 1.0, bump de versão **minor** ao adicionar componentes — ver [npm-package.md](npm-package.md)).
2. **Testes:** estabilizar `npm run test` (Vitest/browser) em CI ou documentar requisitos de ambiente; opcionalmente adicionar `play` ou testes unitários em componentes críticos.
3. **Backlog abaixo:** priorizar com o time do portal conforme demanda (nenhuma ordem fixa).

---

## Lista estendida (backlog)

Componentes e evoluções comuns em design systems tipo shadcn; entrada conforme demanda do portal:

| Item                            | Observação                                                                            |
| ------------------------------- | ------------------------------------------------------------------------------------- |
| **DropdownMenu**                | Menus de contexto / ações.                                                            |
| **Select** avançado             | Já existe `Select` nativo; busca, async, virtualização se necessário.                 |
| **Popover**                     | Ancoragem + foco; avaliar Radix vs. implementação leve.                               |
| **Tooltip**                     | Acessível, atraso e posicionamento.                                                   |
| **Sheet**                       | Gaveta lateral (mobile / painéis).                                                    |
| **Accordion** / **Collapsible** | Conteúdo expansível.                                                                  |
| **Progress** / **Slider**       | Indicadores e intervalos.                                                             |
| **Command**                     | Paleta de comandos — baixa prioridade para NFS-e salvo requisito explícito.           |
| **Ícones**                      | Conjunto oficial ou biblioteca alinhada à marca (Fase 1 menciona iconografia básica). |

---

## Versionamento das entregas

- Incrementos **minor** (`0.x.0`): novos componentes compatíveis com a API atual.
- **Major** (`x.0.0`): remoção ou mudança incompatível de props/exports — sempre com entrada no [CHANGELOG.md](../CHANGELOG.md).
