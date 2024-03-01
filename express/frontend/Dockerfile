FROM node:20-alpine

WORKDIR /app

COPY package.json ./

COPY . .

RUN ls

RUN npm i

EXPOSE 3000

CMD [ "npm","run","dev" ]