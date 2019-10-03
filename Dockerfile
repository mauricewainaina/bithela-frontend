FROM node:10 AS bithela-frontend-app
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build 
FROM httpd:alpine
RUN apk add --update nodejs nodejs-npm
RUN npm i serve -g
WORKDIR /app
COPY --from=bithela-frontend-app /app/build .
EXPOSE 2030
CMD ["serve", "-s", ".", "-p", "2030" ]
