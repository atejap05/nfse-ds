# Cores dos Gráficos — NFS-e Design System

## Problema

O **Recharts** (e várias APIs de gráfico em JS) **não aceitam OKLCH** diretamente nas props. Formatos típicos aceitos:

- Hexadecimal (`#709e77`)
- RGB/RGBA, HSL/HSLA
- Nomes CSS (`green`, etc.)

## Solução no nfse-ds

### 1. Tokens CSS (`src/tokens/theme.css`)

Cores de gráfico em `--nfse-color-chart-1` … `--nfse-color-chart-5`. `chart-1`, `chart-2` e `chart-4` reutilizam o verde primário, o azul marinho (`--nfse-color-navy`) e o amarelo da marca; `chart-3` e `chart-5` usam OKLCH.

### 2. Objeto para props JS (`src/tokens/chartColors.ts`)

Exportado como `chartColors` a partir do pacote `nfse-ds` — hexadecimais alinhados aos tokens acima para uso em Recharts e similares.

### 3. Tailwind (`src/tokens/nfse-tailwind.css`)

Cores `--color-nfse-chart-1` … `--color-nfse-chart-5` no `@theme`, referenciando `--nfse-color-chart-*`.

### 4. Mapeamento OKLCH → HEX

| Token CSS            | OKLCH / origem              | Hexadecimal | Uso típico                    |
| -------------------- | --------------------------- | ----------- | ----------------------------- |
| `--nfse-color-chart-1` | `var(--nfse-color-primary)` | `#709e77`   | Linhas, série principal       |
| `--nfse-color-chart-2` | `var(--nfse-color-navy)`    | `#1a3b7e`   | Barras, segunda série         |
| `--nfse-color-chart-3` | `oklch(0.6 0.03 265)`       | `#777c93`   | Grid, eixos, secundário       |
| `--nfse-color-chart-4` | `var(--nfse-color-yellow)`  | `#fde047`   | Destaques, KPI                |
| `--nfse-color-chart-5` | `oklch(0.769 0.188 70.08)`  | `#e67e22`   | Terciário                     |

Chaves em `chartColors`: `primary`, `secondary`, `muted`, `accent`, `orange` (ordem 1–5).

## Uso

### CSS

```css
.serie-a {
  stroke: var(--nfse-color-chart-1);
}
```

### Recharts (TypeScript)

```typescript
import { chartColors } from 'nfse-ds';

<Line stroke={chartColors.primary} dot={{ fill: chartColors.primary }} />
<Bar fill={chartColors.secondary} />
<CartesianGrid stroke={chartColors.muted} opacity={0.3} />
```

## Manutenção

Ao alterar tons em `theme.css`, atualize os hex em `chartColors.ts` para manter paridade com o que o navegador resolve a partir de OKLCH/`var()`.

## Referências

- [Recharts](https://recharts.org/)
- [OKLCH — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch)
- [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/#oklch)
