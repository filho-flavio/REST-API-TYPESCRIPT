# API REST com Node.js e Express

Este projeto é uma API REST básica construída com Node.js e Express, que inclui tratamento de erros, validações e suporte a métodos HTTP (GET, POST, PUT, DELETE).

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- **Node.js** (versão 16 ou superior)
- **npm** (geralmente vem com o Node.js)
- **Git**

## Configuração do Projeto

### 1. Clonar o Repositório

Use o comando abaixo para clonar este repositório em sua máquina:
```bash
git clone <URL_DO_REPOSITORIO>
```

### 2. Instalar Dependências

Após clonar o repositório, navegue até o diretório do projeto e instale as dependências:
```bash
cd <NOME_DO_DIRETORIO>
npm install
```

### 3. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:
```env
PORT=3000
```

Você pode alterar a porta conforme necessário.

## Executar o Projeto

### Ambiente de Desenvolvimento

Para iniciar o servidor no modo de desenvolvimento:
```bash
npm run dev
```

Isso utilizará o `ts-node-dev` para recarregar automaticamente o servidor a cada mudança nos arquivos.

### Ambiente de Produção

1. Compile o código TypeScript para JavaScript:
   ```bash
   npm run build
   ```

2. Execute o código transpilado:
   ```bash
   npm start
   ```

O servidor estará disponível em `http://localhost:<PORT>`.

## Endpoints da API

### 1. `GET /`
Retorna uma mensagem indicando que a API está funcionando.

**Exemplo de resposta:**
```json
{
  "message": "API funcionando com sucesso!"
}
```

### 2. `POST /data`
Cria um novo recurso.

**Corpo da requisição:**
```json
{
  "name": "Nome do recurso"
}
```

**Exemplo de resposta:**
```json
{
  "message": "Olá, Nome do recurso!"
}
```

### 3. `PUT /data/:id`
Atualiza um recurso existente.

**Corpo da requisição:**
```json
{
  "name": "Novo nome"
}
```

**Exemplo de resposta:**
```json
{
  "message": "Registro com ID 1 atualizado para Novo nome."
}
```

### 4. `DELETE /data/:id`
Remove um recurso existente.

**Exemplo de resposta:**
```json
{
  "message": "Registro com ID 1 removido."
}
```

## Testar a API

### Usando cURL

1. **GET**:
   ```bash
   curl http://localhost:3000/
   ```

2. **POST**:
   ```bash
   curl -X POST -H "Content-Type: application/json" -d '{"name": "John"}' http://localhost:3000/data
   ```

3. **PUT**:
   ```bash
   curl -X PUT -H "Content-Type: application/json" -d '{"name": "John Updated"}' http://localhost:3000/data/1
   ```

4. **DELETE**:
   ```bash
   curl -X DELETE http://localhost:3000/data/1
   ```

### Usando Postman

1. Importe o projeto para o Postman.
2. Crie requisições para os endpoints descritos acima.
3. Teste os métodos e valide as respostas.

