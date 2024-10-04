FROM node:20.17-alpine3.20

WORKDIR /app

RUN yarn global add nx@19.8.2
