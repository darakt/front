FROM node:14.17.0

WORKDIR /app

#ENV PATH /app/node_module/.bin:PATH


COPY package.json /app/package.json

RUN npm install @vue/cli@4.5.13 -g
RUN npm install

CMD ["npm", "run", "serve"]

