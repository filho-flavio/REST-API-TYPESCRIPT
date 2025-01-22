# Use a imagem base do Node.js
FROM node:18

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos do projeto
COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src

# Instale as dependências
RUN npm install

# Compile o TypeScript
RUN npm run build

# Exponha a porta do servidor
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["node", "dist/server.js"]
