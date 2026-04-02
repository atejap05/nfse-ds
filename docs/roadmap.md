# Roadmap

Planejamento evolutivo do Design System NFS-e. A **Fase 1** (tokens, componentes base, Storybook, Overview) está descrita no [product-requirements.md](product-requirements.md). Este documento organiza **entregas realizadas**, **próximos passos** e **backlog**, usando [shadcn/ui](https://ui.shadcn.com/) como **inspiração de superfície de API e cobertura** — não como fork: implementação, tokens e acessibilidade permanecem alinhados ao **design NFS-e** e às regras da skill **frontend-design** (dentro das exceções de marca: Roboto e paleta oficial).

## Estado atual do repositório (visão rápida)

| Área                           | Situação                                                                             |
| ------------------------------ | ------------------------------------------------------------------------------------ |
| **API pública**                | Ver exports em `[src/index.ts](../src/index.ts)` e [npm-package.md](npm-package.md). |
| **Contrato Input / TextField** | Documentado em [input-textfield.md](input-textfield.md).                             |
| **Calendário (Fase G)**        | Apenas [RFC / pré-requisitos](calendar-rfc.md) — sem componente no pacote.           |
| **Histórico de versões**       | [CHANGELOG.md](../CHANGELOG.md).                                                     |
| **Receitas de composição**     | Storybook **NFS-e / Recipes** + [layout-examples.md](layout-examples.md) (templates planejados). |
| **Lista estendida (backlog DS)** | **Entregue** na biblioteca — ver [Fase H](#fase-h--lista-estendida-backlog-shadcn). Pendências: [revisão manual](#etapa-de-revisão-e-inspeção-manual) e [layouts de exemplo](#etapa-de-layouts-de-exemplo-integrados). |

**Componentes já exportados pela biblioteca** (além da Fase 1: Button, TextField, TextArea, Select, Checkbox, Radio, Alert, Container, Stack, Typography):

Label, Separator, Input, Badge, Avatar, Card, Switch, Skeleton, Spinner, RadioGroup (+ RadioGroupItem), CheckboxGroup (+ CheckboxGroupItem), Tabs (Radix UI), Dialog (Radix UI), Table, Pagination, NfseToaster (Sonner + tema NFS-e), Tooltip, Popover, DropdownMenu, Sheet, Collapsible, Accordion, Progress, Slider, Combobox, Command (cmdk).

**Dependências de UI além de React:** pacotes `@radix-ui/react-*` (dialog, tabs, tooltip, popover, dropdown-menu, accordion, collapsible, progress, slider), `sonner`, `cmdk` (declaradas no `package.json` do pacote).

**Documentação auxiliar:** [z-index.md](z-index.md) (camadas), [icons.md](icons.md) (estratégia de ícones no app consumidor), [layout-examples.md](layout-examples.md) (roadmap de templates de página).

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

## Fase H — Lista estendida (backlog shadcn)

**Status: entregue** no pacote (tokens de camada, componentes e receitas no Storybook).

| Item | Implementação |
| ---- | ------------- |
| **DropdownMenu** | `@radix-ui/react-dropdown-menu` — itens, separador, label, submenu, checkbox/radio. |
| **Select avançado** | `Combobox` (Popover + busca + lista); `Select` nativo mantido para casos simples. |
| **Popover** | `@radix-ui/react-popover`. |
| **Tooltip** | `@radix-ui/react-tooltip` + `TooltipProvider`. |
| **Sheet** | Radix Dialog com conteúdo lateral (`side`). |
| **Accordion** / **Collapsible** | Radix Accordion e Collapsible. |
| **Progress** / **Slider** | Radix Progress e Slider. |
| **Command** | `cmdk` com wrappers estilizados (`Command`, `CommandInput`, …). |
| **Ícones** | Documentado em [icons.md](icons.md) (biblioteca no app consumidor; sem bundle no DS). |
| **Camadas (z-index)** | Tokens `--nfse-z-*` em [z-index.md](z-index.md). |

**Storybook — receitas atuais:** grupo **NFS-e / Recipes** (`Recipes.stories.tsx`): barra com Avatar + menu, tabela com tooltip + dropdown, sheet com Stack + Card, dialog com Combobox.

---

## Etapa de revisão e inspeção manual

Objetivo: validar qualidade antes de releases (especialmente rumo a **1.0**) e após mudanças amplas no DS.

| Área | Atividades |
| ---- | ---------- |
| **Acessibilidade** | Storybook com addon **a11y**; contraste; foco visível; teclado (Tab, Esc, setas em menus/combobox); leitores de tela em amostragem (Dialog, Sheet, Dropdown, Combobox). |
| **Camadas** | Confirmar ordem de sobreposição com [z-index.md](z-index.md) (toast acima de modal; dropdown/popover abaixo de modal quando aplicável). |
| **Regressão visual** | Comparar stories antes/depois em mudanças de CSS (tokens, módulos). |
| **Integração** | Percorrer **Recipes** e fluxos com `Dialog` + `Combobox`, `Table` + `DropdownMenu`, etc. |
| **Checklist de componente** | Para cada novo componente: tokens `var(--nfse-*)`, story com estados, export em `src/index.ts`, entrada no [CHANGELOG](../CHANGELOG.md). |

**Sugestão de registro:** registrar achados e datas em issues internas ou na descrição da release; corrigir bloqueadores antes de `minor`/`major` conforme [npm-package.md](npm-package.md).

---

## Etapa de layouts de exemplo (integrados)

Objetivo: ir além das receitas pontuais e publicar **templates de página** que espelham uso real do portal (componentes trabalhando juntos).

Escopo planejado (detalhe em [layout-examples.md](layout-examples.md)):

| Entrega | Descrição |
| ------- | --------- |
| **Header** | Topo com identidade, ações globais, menu do usuário. |
| **Persona / usuário** | Bloco de conta (Avatar, metadados, atalhos). |
| **Sidebar** | Navegação vertical (Accordion/Collapsible, estado ativo). |
| **Navbar** | Navegação principal horizontal (Tabs ou lista). |
| **Listagem com tabela** | Table + Pagination + filtros em Card; ações por linha. |
| **App shell** | Composição header + sidebar + conteúdo (Container, Stack). |

**Onde implementar:** preferencialmente novas stories em `src/stories/` (ex.: grupo **NFS-e / Layouts** ou subpastas por template), reutilizando tokens e padrões das Recipes.

**Status:** em andamento — **Header** e **Persona** entregues como componentes (`src/components/Header/`, `src/components/Persona/`) com stories em **NFS-e / Layouts**; demais templates (sidebar, navbar, tabela, app shell) pendentes. Recipes continuam cobrindo parte da integração pontual.

---

## Próximos passos sugeridos (ordem)

1. **Revisão manual:** executar a [etapa de revisão e inspeção manual](#etapa-de-revisão-e-inspeção-manual) e tratar achados críticos.
2. **Layouts de exemplo:** implementar templates da [etapa de layouts](#etapa-de-layouts-de-exemplo-integrados) no Storybook (ver [layout-examples.md](layout-examples.md)).
3. **Qualidade e release:** concluir Fase A (a11y em massa, revisão de `exports` para 1.0, bump de versão **minor** — ver [npm-package.md](npm-package.md)).
4. **Testes:** estabilizar `npm run test` (Vitest/browser) em CI ou documentar requisitos de ambiente; opcionalmente testes `play` ou unitários em componentes críticos.
5. **Fase G (Calendário):** após [RFC](calendar-rfc.md), quando priorizado.

---

## Backlog residual (evoluções futuras)

Itens fora do escopo já entregue na lista estendida; priorizar com o time do portal:

| Item | Observação |
| ---- | ---------- |
| **Combobox** | Evoluções: carregamento assíncrono, multi-seleção, virtualização de lista muito grande. |
| **Command** | Integração em modal global (paleta de comandos) no app consumidor. |
| **Ícones no DS** | Subconjunto SVG institucional no pacote, se o desenho fechar com a marca. |
| **Calendar (Fase G)** | [calendar-rfc.md](calendar-rfc.md). |

---

## Versionamento das entregas

- Incrementos **minor** (`0.x.0`): novos componentes compatíveis com a API atual.
- **Major** (`x.0.0`): remoção ou mudança incompatível de props/exports — sempre com entrada no [CHANGELOG.md](../CHANGELOG.md).
