# as to give a name to a stage
FROM node:latest-alpine as build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# Every FROM instruction creates a new stage in your Dockerfile. Even if you use the same image as in the previous step
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]



