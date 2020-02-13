FROM node:alpine as bithela-frontend
WORKDIR /app
COPY . .
RUN npm install 
CMD ["npm", "run", "build"]

FROM nginx 
EXPOSE 80
COPY --from=bithela-frontend /app/build /usr/share/nginx/html


