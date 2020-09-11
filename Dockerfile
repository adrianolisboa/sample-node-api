FROM node:10.22.0-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY . /usr/src/app/

RUN yarn install

EXPOSE 3000

CMD [ "yarn", "start" ]
