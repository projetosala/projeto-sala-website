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
2. Use front matter com pelo menos `layout`, `title` e `date`.
3. Escreva o conteúdo em Markdown ou HTML abaixo do front matter.

Exemplo:

```md
---
layout: post
title: "Título do artigo"
date: 2026-05-08 10:00:00 -0300
tags: ["educação ambiental"]
excerpt: "Resumo curto do artigo para os cards."
---

Conteúdo do artigo.
```

Os posts em `/_posts` já recebem automaticamente a URL no formato
`/artigos/:slug/`.

## Licença

Código licenciado sob a [Licença MIT](./LICENSE).

Conteúdo e artigos © Projeto S.A.L.A.
