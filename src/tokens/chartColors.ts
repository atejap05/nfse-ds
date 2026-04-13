/**
 * Hexadecimais para bibliotecas de gráfico (ex.: Recharts) que não aceitam OKLCH em props.
 * Mantém correspondência com `--nfse-color-chart-*` em `theme.css`.
 */
export const chartColors = {
  /** chart-1 — linhas, série principal */
  primary: '#709e77',
  /** chart-2 — barras, segunda série (alinhado a `--nfse-color-navy`) */
  secondary: '#1a3b7e',
  /** chart-3 — grid, eixos, elementos secundários */
  muted: '#777c93',
  /** chart-4 — destaques / KPI */
  accent: '#fde047',
  /** chart-5 — terciário */
  orange: '#e67e22',
} as const;

export type ChartColorName = keyof typeof chartColors;
