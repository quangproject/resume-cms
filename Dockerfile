FROM node:18-alpine AS base

WORKDIR /home/node/app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .
RUN yarn build

CMD ["node", "dist/server.js"]
