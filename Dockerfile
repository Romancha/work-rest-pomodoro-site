#build react app
FROM node:21.6.1-alpine3.19 AS builder

WORKDIR /app
COPY package*.json /app/
RUN yarn install
COPY ./ /app/
RUN yarn run build

#copy builded site to nginx
FROM jonasal/nginx-certbot:3.1.2

COPY --from=builder /app/build/ /var/www/wrpomodoro