FROM node:8.17-buster
WORKDIR /usr/src/app
RUN mkdir xml && mkdir ts
COPY . .
RUN npm install gulp && npm install
ENTRYPOINT ["/usr/src/app/node_modules/.bin/gulp"]
