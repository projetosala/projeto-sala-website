# Como contribuir
> Siga os passos abaixo para contribuir com código ou sugestões de melhorias/correções no site do Quest Ambiental

## :open_file_folder: Conteúdo:
- [Pré-Requisitos](#1-pré-requisitos)
- [Instalação](#2-siga-os-passos-do-guia-de-instalação)
- [Organização de branches](#3-organize-as-branches)
- [Sincronização](#4-antes-de-tudo-sincronize-com-o-repositório-remoto)
- [Criar uma _branch_](#5-crie-uma-branch)
- [Realizar as alterações](#6-realize-as-alterações-necessárias)
- [Registrar as alterações](#7-registre-as-alterações-realizadas)
- [Submeter contribuição](#8-enviar-as-modificações-para-análise)
- [Solicitar avaliação](#9-abra-um-pull-request-pr-para-os-mais-íntimos)
- [O PR foi aprovado?](#10-o-pr-foi-aprovado)
- :pencil: [Sugerir melhorias ou correções](#pencil-sugerir-melhorias-ou-correções)

---

## 1. Pré-Requisitos
- [Git](https://git-scm.com/downloads) - versionamento de código;  
- [NodeJS](https://nodejs.org/en/) - desenvolvimento do site;
- Editor de código (ex.: [Visual Studio Code](https://code.visualstudio.com/Download));

## 2. Siga os passos do [Guia de Instalação](../../README.md#compass-guia-de-instalação)
Com isso, você terá tudo o que é necessário para executar a aplicação.

Após seguir todos os passos do guia, execute as seguintes instruções:

## 3. Organize as _branches_
O seu ambiente de desenvolvimento deve possuir a seguinte estrutura de _branches_:

```bash
# git branch
  develop
  main
* feature/sua-branch
```

No momento em que você clonar o repositório, apenas a _branch_ `main` estará disponível. Para atualizar para a estrutura, execute:

```bash
git flow init
```

Após executar o comando, vão surgir algumas perguntas. O seu terminal deverá ser parecido com isso:

```bash
Which branch should be used for bringing forth production releases?
   - main
Branch name for production releases: [main] 
Branch name for "next release" development: [develop] 

How to name your supporting branch prefixes?
Feature branches? [feature/] 
Bugfix branches? [bugfix/] 
Release branches? [release/] 
Hotfix branches? [hotfix/] 
Support branches? [support/] 
Version tag prefix? [] 
Hooks and filters directory? [/sua-maquina/quest-ambiental-website/.git/hooks]

# Se as recomendações forem como essas (ex.: "[main]", "[develop]"...), basta apertar ENTER.
```

Após isso, você terá a seguinte estrutura:

```bash
# git branch
* develop
  main
```

Agora é só seguir os próximos passos do guia ;)

## 4. Antes de tudo, sincronize com o repositório remoto
Para evitar conflitos com o código principal que está no repositório remoto do GitHub, **SEMPRE** execute o comando abaixo antes de realizar qualquer modificação:

```bash
git pull origin develop
```

Assim, você evitará muitos problemas e todo mundo fica feliz ;)

## 5. Inicie a _branch_ de funcionalidade
> Não sabe o que é uma _branch_? Não tem problema, [clique aqui](https://git-scm.com/book/pt-br/v2/Branches-no-Git-Branches-em-poucas-palavras) para entender.

```bash
git flow feature start <nome-da-branch>

# Troque <nome-da-branch> pelo nome da funcionalidade que você implementará (ex.: header-component)
```

## 6. Realize as alterações necessárias
Agora você pode modificar os arquivos existentes no projeto ou até criar novos arquivos e pastas, caso seja necessário.

## 7. Registre as alterações realizadas
Após alterar o código, adicione as alterações ao Git com os seguintes comandos:

```bash
git add .

# "." vai adicionar todos os arquivos de uma vez
# Caso queira adicionar um arquivo específico, troque "." pelo endereço do arquivo (ex.: "git add src/components/Header/index.jsx")
```

```bash
git commit -m "tipo: mensagem"
```

Verifique no arquivo [`semantics.md`](./semantics.md) o padrão de mensagens de _commit_ que você deve seguir.

## 8. Enviar as modificações para análise
Após fazer e registrar as alterações, é necessário enviá-las para o repositório remoto. Assim, todos poderão ver a sua contribuição.

Para enviar suas modificações, execute o seguinte comando:

```bash
git push origin <nome-da-branch>

# Troque <nome-da-branch> pelo nome da branch que você criou no passo 5 deste guia
```

## 9. Abra um _Pull Request_ (PR para os mais íntimos)
> Não sabe o que é um _Pull Request_? [Clique aqui](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) para entender.

Você pode seguir [este guia](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) para criar um _pull request_.

Na criação do PR, siga o padrão abaixo na definição do título:

```
tipo: Breve descrição
```

Verifique no arquivo [`semantics.md`](./semantics.md) o tipo que você deve adicionar.

Após a criação do PR, espere alguém analisar o seu código e indicar o que deve ser feito.

Caso seja exigida alguma alteração, você pode realizar as correções, seguindo do [passo 6](#6-realize-as-alterações-necessárias) deste guia em diante.

## 10. O PR foi aprovado?
> Só siga esse passo se tiver certeza de que o PR foi aprovado. Caso tenha dúvida, pergunte ;)

Se o PR foi aprovado, você pode fechar a _branch_ que criou no [passo 5](#5-inicie-a-branch-de-funcionalidade) e enviar as alterações realizadas para a _branch_ de desenvolvimento.

Para fazer isso, execute o comando abaixo:

```bash
git flow feature finish <nome-da-branch>

# Troque <nome-da-branch> pelo nome da branch que você criou no passo 5 deste guia
```

Agora, envie a _branch_ de desenvolvimento para o repositório remoto:

```bash
# Baixe a versão atualizada da branch de desenvolvimento:
git pull origin develop

# Envie as suas modificações:
git push origin develop
```

## :pencil: Sugerir melhorias ou correções
Caso você ainda não sinta segurança em contribuir com código ou encontrou um problema/situação de melhoria e quer reportar, crie uma [_issue_](https://github.com/QuestAmbiental/quest-ambiental-website/issues/new).

Utilize [este guia](https://docs.github.com/pt/issues/tracking-your-work-with-issues/creating-an-issue) para reportar um problema ou indicar uma melhoria através de _issues_.

---

Surgiu alguma dúvida? Entre em contato com um dos membros do repositório ;)
