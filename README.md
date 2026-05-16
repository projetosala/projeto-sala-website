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
2. Use front matter com pelo menos `layout`, `title`, `publish_date` e `draft`.
3. Escreva o conteúdo em Markdown ou HTML abaixo do front matter.

Exemplo:

```md
---
layout: post
title: "Título do artigo"
created_at: 2026-05-08T10:00
publish_date: 2026-05-20T10:00
draft: true
tags: ["educação ambiental"]
excerpt: "Resumo curto do artigo para os cards."
---

Conteúdo do artigo.
```

Os posts em `/_posts` já recebem automaticamente a URL no formato
`/artigos/:slug/`.

### Drafts e agendamento

- `draft: true` mantém o post fora da listagem e mostra o artigo como indisponivel se alguem acessar a URL diretamente.
- `publish_date` passou a representar a data de publicacao e a ordenar os artigos do mais recente para o mais antigo.
- `created_at` guarda a data de criacao do texto e e a data exibida no card e no topo do artigo.
- No PagesCMS, `created_at` fica escondido e nasce automaticamente com a data e hora atuais.
- Em hospedagens estaticas, o post so entra no ar quando houver um novo build depois da `publish_date`. Se o deploy hoje so acontece em commits, sera preciso adicionar um rebuild agendado para a publicacao acontecer automaticamente no dia certo.

## Licença

Código licenciado sob a [Licença MIT](./LICENSE).

Conteúdo e artigos © Projeto S.A.L.A.
