FROM node:lts-alpine

WORKDIR /usr/src/app2

COPY package*.json ./

RUN npm i -g pnpm
RUN pnpm i

COPY . .

EXPOSE 8080
CMD ["pnpm", "dev"]
