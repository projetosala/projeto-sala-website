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

- `draft: true` mantém o post fora da listagem e mostra o artigo como indisponível se alguém acessar a URL diretamente.
- `publish_date` passou a representar a data de publicação e a ordenar os artigos do mais recente para o mais antigo.
- `created_at` guarda a data de criação do texto para controle interno no conteúdo.
- No PagesCMS, `created_at` fica escondido e nasce automaticamente com a data e hora atuais.
- No site, a data exibida no card e no topo do artigo é a `publish_date`.
- O repositório inclui a workflow [publish-scheduled-posts.yml](./.github/workflows/publish-scheduled-posts.yml), que usa o script [.github/scripts/publish_scheduled_posts.py](./.github/scripts/publish_scheduled_posts.py).
- Por enquanto, essa workflow está desativada para execução agendada e pode ser disparada apenas manualmente.
- Quando você quiser ativá-la, o cron sugerido no arquivo está configurado para rodar 1 vez por dia.
- A automação só publica posts que ainda estejam explicitamente com `draft: true`. Se o artigo já estiver com `draft: false`, ela não altera nada e não cria commit desnecessário.
- Quando encontra um post elegível, a workflow altera esse post para `draft: false`, faz commit e push para disparar um novo build do GitHub Pages.

## Licença

Código licenciado sob a [Licença MIT](./LICENSE).

Conteúdo e artigos © Projeto S.A.L.A.
