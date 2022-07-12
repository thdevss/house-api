FROM node:latest as base
LABEL authors="copy from: ..., edit by: thdevss"


WORKDIR /usr
COPY package.json ./
COPY tsconfig.json ./
COPY ormconfig.js ./
COPY nodemon.json ./

COPY src ./src
RUN ls -a
RUN npm install

CMD ["npm", "run", "dev"]