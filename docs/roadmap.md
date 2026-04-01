# Roadmap

Planejamento evolutivo do Design System NFS-e. A **Fase 1** (tokens, componentes base, Storybook, Overview) está descrita no [product-requirements.md](../product-requirements.md). Este documento organiza **próximas entregas** e componentes adicionais, usando [shadcn/ui](https://ui.shadcn.com/) como **inspiração de superfície de API e cobertura** — não como fork: implementação, tokens e acessibilidade permanecem alinhados ao **design NFS-e** e às regras da skill **frontend-design** (dentro das exceções de marca: Roboto e paleta oficial).

## Critérios para qualquer novo componente

1. **Tokens**: cores, espaçamento e tipografia via `var(--nfse-*)` (e tema Tailwind quando o app usar `nfse-tailwind.css`).
2. **Acessibilidade**: teclado, foco visível, ARIA e, quando possível, padrões do [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/).
3. **Documentação**: Storybook com variantes e estados; testes alinhados ao setup Vitest/Storybook do repositório.
4. **Dependências**: preferir HTML nativo + CSS Modules; para padrões complexos (diálogo, abas), avaliar primitives estáveis (ex.: Radix) com tema NFS-e — decisão caso a caso.

## Fase A — Consolidação da biblioteca npm (pré-1.0 ou 1.0)

- Congelar contrato público de `package.json` (`exports`, peers).
- Documentar breaking changes em CHANGELOG (ver [npm-package.md](npm-package.md)).
- Revisão de contraste e checklist a11y nos componentes existentes.
- Opcional: exemplo mínimo `examples/next-app/` para validar Next + Tailwind + DS (fora do escopo obrigatório deste roadmap).

## Fase B — Primitivos de UI (inspiração shadcn)

Ordem sugerida (dependências leves primeiro):

| Componente | Notas |
|------------|--------|
| **Label** | Associar texto a controles; pode extrair padrão já usado em `TextField`/`TextArea`. |
| **Separator** | Divisor horizontal/vertical com tokens de cor e espessura. |
| **Input** | Evolução ou unificação com `TextField` (tipos `text`, `password`, `search`, etc.). |
| **Badge** | Estados neutros, sucesso, aviso, erro, info — cores semânticas já nos tokens. |
| **Avatar** | Imagem + fallback iniciais; tamanhos sm/md/lg. |
| **Card** | Container com cabeçalho, corpo e rodapé opcionais. |
| **Switch** | Alternador acessível (semântica de checkbox ou switch conforme APG). |
| **Skeleton** | Placeholders de carregamento alinhados a `--nfse-color-gray-light`. |
| **Spinner** | Indicador de carregamento inline ou em bloco (preferir CSS/SVG antes de libs pesadas). |

## Fase C — Formulários e agrupamento

| Componente | Notas |
|------------|--------|
| **RadioGroup** | Agrupar `Radio` com nome/estado único e `fieldset`/`legend` acessível. |
| **CheckboxGroup** | Lista de opções com semântica de grupo. |
| **Tabs** | Painéis com teclado e `aria-selected` / `role="tablist"` (primitive ou implementação guiada por APG). |

## Fase D — Dados e navegação em listas

| Componente | Notas |
|------------|--------|
| **Table** | Tabela semântica (`table`, `th`, `scope`); variante zebra opcional com tokens. |
| **Pagination** | Controles numerados + anterior/próximo; estados desabilitados. |

## Fase E — Overlays

| Componente | Notas |
|------------|--------|
| **Dialog** | Modal com foco preso, `aria-modal`, fechar com Esc; avaliar `@radix-ui/react-dialog` ou implementação APG. |

## Fase F — Feedback global (toasts)

| Abordagem | Descrição |
|-----------|-----------|
| **Sonner (ou similar)** | Wrapper com tema NFS-e (cores, tipografia, sombras discretas) e posicionamento acessível. Documentar peer opcional ou dependência do pacote. |
| **Implementação própria** | Maior controle e menor dependência; maior custo de manutenção. |

**Decisão recomendada**: prototipar com biblioteca leve conhecida (ex. Sonner), documentar tokens aplicados e fallback se o pacote não for aceito no ambiente governamental.

## Fase G — Calendário e datas

| Componente | Notas |
|------------|--------|
| **Calendar** | Alta complexidade (localização pt-BR, teclado, intervalos). Última fase ou dependência explícita (ex. react-day-picker) com skin NFS-e. Requer RFC interno antes de implementar. |

## Lista estendida (backlog)

Componentes frequentes em design systems tipo shadcn que podem entrar após as fases acima, conforme demanda do portal:

- **DropdownMenu** / **Select** avançado (já existe `Select` nativo; evolução para busca/async se necessário).
- **Popover**, **Tooltip**, **Sheet** (gaveta lateral).
- **Accordion**, **Collapsible**.
- **Progress**, **Slider**.
- **Command** (paleta de comandos) — baixa prioridade para contexto NFS-e salvo requisito explícito.

## Versionamento das entregas

- Incrementos **minor** (`0.x.0`): novos componentes compatíveis com a API atual.
- **Major** (`x.0.0`): remoção ou mudança incompatível de props/exports — sempre com entrada no CHANGELOG.
