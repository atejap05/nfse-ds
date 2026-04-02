# Camadas (z-index) — NFS-e Design System

Tokens definidos em `src/tokens/theme.css` e reutilizados nos CSS Modules dos componentes.

| Token | Valor | Uso |
|-------|--------|-----|
| `--nfse-z-base` | 0 | Conteúdo padrão |
| `--nfse-z-sticky` | 10 | Cabeçalhos / barras sticky |
| `--nfse-z-dropdown` | 1000 | Menus suspensos (`DropdownMenu`) |
| `--nfse-z-popover` | 1010 | Painéis ancorados (`Popover`, combobox) |
| `--nfse-z-tooltip` | 1020 | Dicas (acima de dropdown/popover no mesmo contexto) |
| `--nfse-z-overlay` | 1100 | Fundo escurecido de modal / sheet |
| `--nfse-z-modal` | 1101 | Conteúdo de `Dialog` e `Sheet` |
| `--nfse-z-toast` | 1200 | `NfseToaster` (Sonner) — visível acima de modais |

**Consumidores Tailwind v4:** mapeamento em `nfse-tailwind.css` como `--z-nfse-*`.

**Regra:** evitar abrir dois modais ao mesmo tempo; para combinações (ex.: menu dentro de modal), o Radix costuma portalar para o contexto correto — validar no Storybook.
