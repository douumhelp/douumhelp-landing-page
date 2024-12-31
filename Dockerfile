# Use uma imagem Node.js como base
FROM node:20

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o container
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todos os arquivos do projeto para o container
COPY . .

# Exponha a porta padrão do CRA
EXPOSE 3000

# Comando para iniciar o servidor de desenvolvimento do CRA
CMD ["npm", "start"]