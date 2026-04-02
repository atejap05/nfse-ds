# Ícones no NFS-e Design System

O pacote **não inclui** uma família de ícones no bundle para manter o tamanho da biblioteca previsível e permitir que o portal escolha ícones alinhados à identidade visual.

## Abordagem recomendada

1. **Biblioteca como dependência do app (peer opcional)**  
   Instale no projeto consumidor, por exemplo [`lucide-react`](https://lucide.dev/), e use os ícones junto com componentes do DS (`Button`, `DropdownMenuTrigger`, células de `Table`, etc.).
   - Vantagem: manutenção e variedade de ícones fora do DS.
   - O DS documenta padrões de tamanho (ex.: 16–20px inline com texto) nos stories de receitas.

2. **SVGs institucionais**  
   Para ícones exclusivos da marca NFS-e, mantenha SVGs ou componentes no repositório do **portal**, não obrigatoriamente no `nfse-ds`.

## Acessibilidade

- Ícones puramente decorativos: `aria-hidden` no SVG e texto visível ao lado quando o significado não for óbvio.
- Ícones que são o único conteúdo do botão: `aria-label` no botão ou título acessível no SVG.
