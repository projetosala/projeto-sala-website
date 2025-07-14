# Projeto S.A.L.A

Caso queira contribuir com novas funcionalidades, melhorias e/ou correções no projeto, siga os passos do arquivo [CONTRIBUTING.md](./.github/doc/CONTRIBUTING.md) e dá uma conferida no nosso [Fluxo de Trabalho](./.github/doc/workflow.md).

## :art: Design
O design do site foi criado no Figma. Para acessar o protótipo, [clique aqui](https://figma.com/file/F4AeiLaW8Yi7zr4eCuLtpX/Website).

![Design](https://github.com/projetosala/projeto-sala-website/assets/40719464/a8d10a04-2760-486c-a651-dd426c73ad05)

## :wrench: Ambiente de Desenvolvimento
Para que todos tenham o ambiente de desenvolvimento o mais parecido possível e evitar problemas, certifique-se de ter as ferramentas acima com as seguintes versões:

| Ferramenta | Versão         |
| ---------- | -------------- |
| Git        | A mais recente |
| NodeJS     | v18.17.0       |

Para instalar as devidas versões, siga o passo a passo do arquivo [`dev-environment.md`](./.github/doc/dev-environment.md).

## :compass: Guia de Instalação
> Com as ferramentas devidamente instaladas, execute os comandos abaixo

### **1. Clonar repositório**
```bash
git clone https://github.com/projetosala/projeto-sala-website.git
```

### **2. Entrar na pasta do projeto**
```bash
cd projeto-sala-website
```

### **3. Instalar as dependências**
```bash
npm install
```

### **4. Criar arquivo de variáveis de ambiente**
Crie uma cópia do arquivo [`.env.example`](./.env.example) na raiz do projeto com o nome `.env` e preencha com os devidos valores.

### **5. Executar a aplicação**
```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`
