# Input e TextField — contrato de API

## Decisão

- **`Input`**: primitivo de uma linha (`<input>`) com estados visuais **error** e **success**, tokens NFS-e e **sem** label embutido. Use com **`Label`** e mensagens de ajuda/erro no app ou com **`TextField`** para o padrão completo.
- **`TextField`**: campo de formulário de alto nível: **label** (via `Label`), **hint**, **error/success**, `aria-*` e id estáveis — equivalente ao padrão já usado no portal (acessível por padrão).

## Quando usar cada um

| Cenário | Componente |
|--------|------------|
| Formulário padrão com legenda e dica | `TextField` |
| Layout customizado, label em outra coluna, ou composição manual | `Label` + `Input` + texto de erro |
| Apenas estilizar o controle sem wrapper | `Input` |

## Compatibilidade

`TextField` é implementado com `Label` + `Input` internamente; a API pública de `TextField` permanece estável (props existentes).
