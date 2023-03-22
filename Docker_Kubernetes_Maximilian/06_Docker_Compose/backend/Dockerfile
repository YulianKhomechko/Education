FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

VOLUME ["/app/node_modules"]

EXPOSE 80

ENV MONGODB_USERNAME=yulian
ENV MONGODB_PASSWORD=secret

CMD ["node", "basics.js"]