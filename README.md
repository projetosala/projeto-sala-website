# Projeto S.A.L.A

Uma série de ferramentas para o ensino e aprendizagem da biogeografia alagoana.

## Ambiente

Para rodar localmente, instale:

- Ruby
- Bundler
- Jekyll

Com isso pronto:

```bash
bundle install
bundle exec jekyll serve
```

O site ficará disponível em `http://localhost:4000`.

Se preferir usar Docker, o repositório também inclui [compose.yml](./compose.yml):

```bash
docker compose up
```

## Publicando artigos

Para criar um novo artigo:

1. Crie um arquivo em [\_posts](./_posts) com o padrão `YYYY-MM-DD-slug.md`.
2. Use front matter com pelo menos `layout`, `title`, `date` e `permalink`.
3. Escreva o conteúdo em Markdown ou HTML abaixo do front matter.

Exemplo:

```md
---
layout: post
title: "Título do artigo"
date: 2026-05-08 10:00:00 -0300
permalink: /artigos/titulo-do-artigo/
tags: ["educação ambiental"]
excerpt: "Resumo curto do artigo para os cards."
---

Conteúdo do artigo.
```

## Deploy

O deploy no GitHub Pages está automatizado em [.github/workflows/deploy-pages.yml](./.github/workflows/deploy-pages.yml).

Para ativar:

1. No GitHub, abra `Settings > Pages`.
2. Em `Source`, selecione `GitHub Actions`.
3. Faça push na branch `main`.

## Licença

Código licenciado sob a [Licença MIT](./LICENSE).

Conteúdo e artigos © Projeto S.A.L.A.
