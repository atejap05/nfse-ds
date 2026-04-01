# Estrutura do repositório

Visão orientada a quem clona o projeto ou publica o pacote.

## Árvore principal

```
nfse-ds/
├── .storybook/          # Configuração Storybook (main, preview, CSS global do canvas)
├── assets/              # Ativos de referência (ex.: logo oficial NFS-e)
├── dist/                # Saída do `npm run build` (não versionar em fluxos que publicam artefato separado)
├── docs/                # Documentação técnica (este manual)
├── public/              # Estáticos servidos pelo Storybook (ex.: logo para stories)
├── scripts/             # Scripts de build (ex.: flatten-token-css.mjs)
├── src/
│   ├── components/      # Um diretório por componente
│   ├── stories/           # Stories de página (ex.: Design System Overview)
│   ├── tokens/            # theme.css, theme-fonts.css, nfse-tailwind.css, typography
│   ├── utils/             # Utilitários (ex.: cn)
│   ├── index.ts           # API pública da biblioteca
│   ├── App.tsx / main.tsx # Legado do template Vite (não usados pelo fluxo principal Storybook/lib)
├── vite.config.lib.ts     # Build da biblioteca
├── package.json
├── product-requirements.md
└── README.md
```

## Convenção por componente

Cada componente vive em `src/components/NomeDoComponente/`:

| Arquivo | Função |
|--------|--------|
| `NomeDoComponente.tsx` | Props tipadas, marcação acessível, lógica mínima. |
| `NomeDoComponente.module.css` | Estilos com variáveis `--nfse-*`. |
| `NomeDoComponente.stories.tsx` | Storybook (variantes, estados, documentação autodocs quando aplicável). |

Barrel exports centralizados em `src/index.ts` — novos componentes públicos devem ser exportados ali.

## Pastas de suporte

- **`src/stories/`**: stories que não são “um componente isolado”, por exemplo a página **NFS-e / Design System Overview**.
- **`src/tokens/`**: única área para definição de tokens; `typography.module.css` apoia o componente `Typography`.
- **`.storybook/preview.ts`**: import global de `theme-fonts.css` e `theme.css` para todas as stories.

## Artefatos de build (`dist/`)

Após `npm run build`:

- `index.js` / `index.css` — bundle ESM dos componentes + CSS agregado dos módulos.
- `theme.css`, `theme-fonts.css`, `nfse-tailwind.css` — entradas expostas em `package.json` → `exports`.
- Árvore de `.d.ts` espelhando a API TypeScript.

Consulte também [npm-package.md](npm-package.md) para o contrato de publicação.
