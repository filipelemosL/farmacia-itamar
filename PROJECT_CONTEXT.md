# Contexto do Projeto

## Stack base

- Angular `16.x`
- Arquitetura baseada em `NgModule`, sem `standalone`
- Estilizacao padronizada em `CSS`
- Rotas lazy-loaded por dominio

## Estrutura adotada

- `src/app/core`
  Responsavel por layout principal, shell da aplicacao e recursos globais singleton.
- `src/app/shared`
  Componentes reutilizaveis, modulos compartilhados e utilitarios de interface.
- `src/app/features`
  Modulos funcionais separados por dominio de negocio.

## Modulos atuais

- `dashboard`
  Biblioteca principal de conhecimento, com busca, filtros e fichas por topico comum.
- `products`
  Estrutura recomendada para organizacao do acervo de conhecimento.
- `sales`
  Ideias de valor agregado mantendo o foco no conhecimento do Itamar.

## Padroes para continuidade

- Todo novo dominio deve nascer em `src/app/features/<dominio>`.
- Cada feature deve ter ao menos:
  - `pages/` para telas roteaveis
  - `components/` para blocos visuais internos
  - `services/` para integracao e regras de negocio
- Componentes compartilhados entre modulos devem ficar em `shared`.
- Recursos globais de layout, guards, interceptors e servicos singleton devem ficar em `core`.
- Novos componentes devem usar `css`, nunca `scss`.
- Preferir lazy loading para features principais.
- O objetivo central do produto e preservar o conhecimento tecnico do Itamar em formato de consulta rapida.
- Sempre que novas fichas forem criadas, incluir sintomas, medicamentos, dosagem, intervalo, alertas e observacao pratica.

## Convencoes de nomenclatura

- Modulos: `something.module.ts`
- Rotas: `something-routing.module.ts`
- Componentes: `feature-name.component.ts`
- Pages: `pages/<nome>/<nome>.component.ts`
- Seletores: prefixo `app-`

## Proximos passos recomendados

- Criar modulo de autenticacao se houver area restrita.
- Definir camada de `services` por feature antes de conectar API.
- Introduzir modelos e interfaces em `shared/models` quando o dominio comecar a crescer.
- Adicionar testes por feature conforme as telas reais forem entrando.
