FROM node:10.15.0-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY . /usr/src/app/

RUN yarn install

EXPOSE 8080

CMD [ "yarn", "start" ]
