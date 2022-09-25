# Como contribuir
> Siga os passos abaixo para contribuir com código ou sugestões de melhorias/correções no site do Projeto S.A.L.A

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
- [Ocorreu algum conflito e sua _branch_ não está atualizada?](#11-ocorreu-algum-conflito-e-sua-branch-não-está-atualizada)
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
Hooks and filters directory? [/sua-maquina/projeto-sala-website/.git/hooks]

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

Verifique no arquivo [`conventions.md`](./conventions.md) o padrão de mensagens de _commit_ que você deve seguir.

### Atenção!
Não dê pequenos commits para uma mesma atividade, dividindo ela em pequenos passos, em vez disso reúna tudo em um único commit. Se você não se sentir seguro(a) e/ou prefere fazer pequenos commits, então use o `amend`:

Após ter dado o commit com uma parte da sua feature:

```bash
git add .
git commit -m "tipo: mensagem"
```

No segundo commit para adicionar mais atualizações, no lugar de dar mais um commit, utilize:

```bash
git add .
git commit --amend --no-edit
```
Sucesso! Agora tudo que tu modificou foi adicionado ao seu commit (um único commit).
Caso você tenha errado a mensagem do commit, ou queira alterá-la, basta **remover** o `--no-edit`, assim o comando será:

```bash
git commit --amend
```

Uma mensagem irá aparecer no seu terminal possibilitando a edição da mensagem de commit. Basta editar, salvar a alteração e fechar a aba aberta. 

### Criei dois ou mais commits para a mesma atividade, e agora?

[Vídeo: **Como usar o rebase**](https://user-images.githubusercontent.com/63798776/188469735-ad4a2d5a-38f2-4843-a349-0525740e5a87.webm)

:bulb: _OBS.: nas pausas do vídeo (**0:22s** e **0:42s**), pressione as teclas `ctrl + o` e `enter` (salvar o arquivo), depois `ctrl + x` (fechar o editor)._

Se você não utilizou o `amend` não tem problema você ainda conseguirá organizar o histórico através do `squash`. Ele adiciona seu commit no commit anterior permitindo a junção de seus commits em um só. Para isso basta seguir os comandos abaixo:

```bash
git rebase -i HEAD~2 

# O número 2 aqui é apenas um exemplo. Esse número se refere a quantidade de commits que você deseja visualizar.
```

Após esse comando os commits aparecerão no terminal dessa forma:

```
pick e1410a9 feat: Criação do botão
pick 30d2fe4 update: Correção da cor do botão

# Rebase 35f2727..30d2fe4 onto 35f2727 (2 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup [-C | -c] <commit> = like "squash" but keep only the previous
#                    commit's log message, unless -C is used, in which case
#                    keep only this commit's message; -c is same as -C but
#                    opens the editor
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified); use -c <commit> to reword the commit message
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
```
Como você pode observar, o terminal trás toda a informação de como agir daqui em diante, mas basicamente a ordem de commits do mais antigo ao mais atual é de cima pra baixo. Logo se fiz 2 commits e quero juntar em um só, basta adicionar squash no último commit, assim ele irá se juntar com o commit anterior, dessa forma:

```
pick e1410a9 feat: Criação do botão
squash 30d2fe4 update: Correção da cor do botão

[...]
```
Quando tu salvar essa alteração uma visualização para alteração da mensagem será exibida. Muita atenção nessa hora pois as mensagens dos dois commits irão aparecer, sendo necessário apagar as mensagem que você não deseja deixando apenas a mensagem que tu quer. Após essa alteração dê um `git push --force` e pronto!

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

Verifique no arquivo [`conventions.md`](./conventions.md) o tipo que você deve adicionar.

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

## 11. Ocorreu algum conflito e sua _branch_ não está atualizada?

[Vídeo: **Como resolver conflitos**](https://user-images.githubusercontent.com/63798776/188469743-7bfa4f21-e4d7-4c7a-a430-7b595fc4598d.webm)

Para manter sua _branch_ atualizada com o histórico de commits intactos basta utilizar o `rebase`. Este comando atualiza a sua _branch_ com os commits da `develop` (nossa _branch_ base para desenvolvimento) e adiciona o seu commit no histórico.

```bash
git fetch origin develop:develop && git rebase develop
```
Após esse comando o surgimento de conflitos podem acontecer. Quando eles parecerem resolva os conflitos e após a resolução deles execute os seguintes comandos:

```bash
git add .
git rebase --continue
```

Para subir as atualizações execute:

```bash
git push origin HEAD --force
```

Pronto! Com os comandos acima, tu conseguirá manter sua _branch_ sempre atualizada.

## :pencil: Sugerir melhorias ou correções
Caso você ainda não sinta segurança em contribuir com código ou encontrou um problema/situação de melhoria e quer reportar, crie uma [_issue_](https://github.com/projetosala/projeto-sala-website/issues/new).

Utilize [este guia](https://docs.github.com/pt/issues/tracking-your-work-with-issues/creating-an-issue) para reportar um problema ou indicar uma melhoria através de _issues_.

---

Surgiu alguma dúvida? Entre em contato com um dos membros do repositório ;)
