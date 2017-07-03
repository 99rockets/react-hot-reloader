FROM node:boron

ENV NPM_CONFIG_LOGLEVEL warn
ENV PORT 3000
ENV APP_DIR /opt/wallet/server

WORKDIR $APP_DIR

COPY ./services/server/package.json /tmp/package.json

RUN cd /tmp && npm install
RUN mv /tmp/node_modules $APP_DIR/node_modules

COPY ./services/server/ .

CMD npm start
