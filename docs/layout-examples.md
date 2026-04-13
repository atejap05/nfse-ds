# Layouts de exemplo (templates)

Objetivo: oferecer no **Storybook** páginas ou stories de **nível de aplicação** que mostram componentes do DS **integrados** (não apenas isolados), como referência para o portal NFS-e.

## Escopo planejado

| Template / área        | Conteúdo esperado (exemplo) |
| ---------------------- | --------------------------- |
| **Header / topo**      | Logo ou título, ações globais, menu do usuário (`Avatar` + `DropdownMenu`), opcional `Separator`. |
| **Persona / usuário**  | Bloco com `Avatar`, nome, papel e atalhos (badges, links). |
| **Sidebar**            | Navegação vertical com grupos (`Accordion` ou lista), estado ativo, `Collapsible` para subseções. |
| **Navbar**             | Abas ou links horizontais (`Tabs` ou lista estilizada), alinhada a `Container`. |
| **Tabela + dados**     | `Table` com `Pagination`, filtros em `Card`, ações por linha (`DropdownMenu`, `Tooltip`). |
| **Shell da aplicação** | Composição: header + sidebar + área de conteúdo (`Stack`, `Container`). |

## Relação com o que já existe

- **NFS-e / Recipes** (`src/stories/Recipes.stories.tsx`): receitas pontuais de composição (barra + menu, tabela + tooltip, sheet, dialog + combobox).
- **NFS-e / Layouts** (`src/stories/Layouts.stories.tsx`): templates nomeados; o **Header** usa o componente composto exportado pelo pacote (`Header`, `HeaderInner`, … em `src/components/Header/`), com playground em **Components/Header** no Storybook.
- **Persona** (`src/components/Persona/`): `Avatar` + nome + descrição opcional; playground em **Components/Persona**; em **NFS-e / Layouts**, exemplos de **Header** com Persona no menu (barra superior).
- Esta etapa **amplia** para layouts mais completos e nomeados, reutilizando os mesmos princípios ([z-index.md](z-index.md), tokens, a11y).
- Largura da coluna de página: o `Header` é **full-bleed por defeito** (`HeaderInner` sem `max-width` no centro). Para alinhar o topo ao `Container`, use `fullWidth={false}` no `Header`. No shell legado (sidebar | coluna), a story usa esse modo para manter o cabeçalho alinhado ao conteúdo principal **na mesma coluna**.
- **App shell com Sidebar (dois padrões):**
  1. **Legado — alinhamento máximo header + conteúdo:** grelha **sidebar | coluna** com `Header` e `main` na mesma coluna (`--nfse-sidebar-width` + `1fr`). O `HeaderInner` e o `main` partilham o mesmo eixo horizontal — ideal quando o topo não precisa de largura total da viewport. Story **App shell (legado) — Sidebar | coluna Header+main** em `src/stories/Layouts.stories.tsx` (classes `appShell`, `appShellSidebar`, `appShellMainColumn`, `appShellMain`).
  2. **Caminho B — componente `AppShell`:** o `Header` ocupa a largura do contentor (comportamento predefinido); com `showNavigation`, o botão de menu lateral faz parte da anatomia do header (padrão GOV.BR DS). O componente [`AppShell`](../src/components/AppShell/AppShell.tsx) orquestra o estado e passa `navigationOpen` / `onNavigationToggle` / `navigationId` ao `Header`; a área lateral é um `<nav>` abaixo do header. Em **md+** a sidebar recolhe com largura animada; em **mobile** desliza como painel fixo (`--nfse-z-sidebar`). Stories: **App shell — Header Full-Width + Sidebar**, **App shell — Sidebar recolhida (inicial)**.
  - *Trade-off:* o `HeaderInner` não limita o conteúdo a `--nfse-layout-max-width` por defeito — alinhamento intencional com faixa institucional full-bleed; o `main` no consumidor pode continuar a usar `Container` ou `max-width` como na story.

## Variante: Header Full-Width (Caminho B)

Diferente do padrão de grelha de duas colunas, esta variante coloca o `Header` acima de toda a largura da viewport e a navegação lateral na faixa abaixo.

**Quando usar**

- Identidade de marca exige faixa de topo visualmente separada e irrestrita em largura.
- O trigger da navegação lateral deve viver na anatomia do header (padrão GOV.BR DS).

**Implementação**

- Componente `AppShell` em `src/components/AppShell/`.
- Prop `showNavigation` no `Header` (`src/components/Header/Header.tsx`); por defeito o `HeaderInner` não aplica `max-width` ao centro; use `fullWidth={false}` para o modo Container.
- Story **NFS-e / Layouts — App shell — Header Full-Width + Sidebar**.

**Restrição:** não misturar `HeaderInner` com `max-width` manual dentro de um fluxo que deveria ser full-bleed — usar `AppShell` com `headerContent` que já inclua `HeaderInner` como filho do `Header` (comportamento predefinido).
- **Cuidado:** colocar o `Header` numa faixa full-bleed e a `Sidebar` “solta” sem definir grelha/stack, scroll e breakpoints **desalinha** o header ao `main`. Os templates acima cobrem os dois casos de forma explícita.

## Critérios de pronto (por template)

1. Storybook em tela cheia ou largura realista; tema NFS-e (`theme.css` + fontes).
2. Pelo menos um fluxo de teclado verificado (Tab, Esc em overlays).
3. Referência no [roadmap](roadmap.md) quando o template for adicionado.
