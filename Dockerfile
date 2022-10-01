FROM node:16.17

WORKDIR /srv

ADD . /srv

RUN npm install

RUN cp .env.prod .env

CMD ["node", "app.js"]
