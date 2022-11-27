# Projeto S.A.L.A

Caso queira contribuir com novas funcionalidades, melhorias e/ou correções no projeto, siga os passos do arquivo [CONTRIBUTING.md](./.github/doc/CONTRIBUTING.md) e dá uma conferida no nosso [Fluxo de Trabalho](./.github/doc/workflow.md).

## :art: Design
O design do site foi criado no Figma. Para acessar o protótipo, [clique aqui](https://figma.com/file/F4AeiLaW8Yi7zr4eCuLtpX/Website).

![Design](https://user-images.githubusercontent.com/63798776/182034441-79c018d4-ccbb-45be-b306-1311de042d04.png)

## :wrench: Ambiente de Desenvolvimento
Para que todos tenham o ambiente de desenvolvimento o mais parecido possível e evitar problemas, certifique-se de ter as ferramentas acima com as seguintes versões:

| Ferramenta | Versão |
| --- | --- |
| Git | A mais recente |
| NodeJS | v16.17.0 |

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

#### Para obter os dados do Firebase, siga esse passo a passo:

1. Acesse o projeto no [Console do Firebase](https://console.firebase.google.com/project/projetosalabox/)
2. Acesse as configurações do aplicativo (clique na engrenagem):

![imagem](https://user-images.githubusercontent.com/40719464/192124820-c05fd3ee-e716-470d-a665-7b5a39948cc5.png)

3. Os dados estarão na seção "**Configuração do SDK**", na variável `firebaseConfig`
4. Insira os dados nas devidas variáveis do arquivo `.env`

#### Os dados do Blogger podem ser adquiridos seguindo estes tutoriais:

- [Chave de API](https://developers.google.com/blogger/docs/3.0/using#APIKey)
- [Blog ID](https://subinsb.com/how-to-find-blogger-blog-id/)

### **5. Executar a aplicação**
```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`