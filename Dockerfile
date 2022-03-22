#build react app
FROM node:17.7.2-alpine3.15 AS builder

WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build

#copy builded site to nginx
FROM jonasal/nginx-certbot:3.1.2

COPY --from=builder /app/build/ /var/www/wrpomodoro