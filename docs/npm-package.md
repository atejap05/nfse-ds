# Pacote npm

O `nfse-ds` está preparado para ser **publicado como pacote** (npm público, GitHub Packages ou registry privado da organização). Hoje o repositório usa `"private": true` no `package.json`; para publicar, remova ou ajuste esse campo conforme a política interna.

## Contrato atual (`package.json`)

| Campo | Função |
|-------|--------|
| `name` | Nome do pacote no registry (`nfse-ds`; pode ser escopado, ex. `@org/nfse-ds`). |
| `version` | [Semver](https://semver.org/) — ex.: `0.1.0`, depois `1.0.0` para primeira versão estável. |
| `main` / `module` | Ponto de entrada ESM: `./dist/index.js`. |
| `types` | Tipos TypeScript: `./dist/index.d.ts`. |
| `exports` | Subpaths: entrada principal, `./theme.css`, `./theme-fonts.css`, `./nfse-tailwind.css`. |
| `files` | Apenas `dist` é empacotado por padrão — evita enviar `src/` ao registry. |
| `peerDependencies` | `react` e `react-dom` ^19 — o app hospedeiro fornece essas versões. |

## Build antes de publicar

```bash
npm run build
```

Gera `dist/` com:

- `index.js`, `index.css`, `index.js.map`
- `theme.css`, `theme-fonts.css`, `nfse-tailwind.css` (na raiz de `dist/` após o script de flatten)
- Declarações `.d.ts` e mapas

Validações recomendadas:

```bash
npm run typecheck
npm run lint
npm run test
```

## Publicação

1. Autenticar no registry (`npm login` ou token CI).
2. Garantir que a versão em `package.json` foi bumpada.
3. Executar `npm publish` (ou `npm publish --access public` para escopos).

Para pacotes privados, configure `.npmrc` e permissões do registry corporativo.

## Consumo após publicação

```bash
npm install nfse-ds
```

```tsx
import 'nfse-ds/theme-fonts.css';
import 'nfse-ds/theme.css';
import { Button } from 'nfse-ds';
```

Consumidores TypeScript resolvem tipos via `types`/`exports`.

## Versionamento e changelog

- **Patch** (`x.y.z+1`): correções compatíveis (bugs, a11y sem quebra de API).
- **Minor** (`x.y+1.0`): novos componentes ou props opcionais.
- **Major** (`x+1.0.0`): mudanças incompatíveis (remoção de export, rename de props).

Manter um **CHANGELOG.md** na raiz (formato [Keep a Changelog](https://keepachangelog.com/)) facilita times consumidores e auditoria.

## Checklist rápido de release

- [ ] `npm run build` sem erros; inspecionar `dist/` localmente ou com `npm pack`.
- [ ] Peers documentados no README.
- [ ] Versão e CHANGELOG atualizados.
- [ ] Tag Git alinhada à versão (`v0.1.0`, etc.), se o processo usar tags.

## Nome e marca

O nome no npm e a descrição devem respeitar as **diretrizes de uso da marca NFS-e** e da Receita/órgão responsável. Ajuste `description` e metadados (`repository`, `license`) quando a política interna estiver definida.
