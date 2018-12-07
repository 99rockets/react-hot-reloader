FROM node:boron

ENV NPM_CONFIG_LOGLEVEL warn
ENV APP_DIR /opt/react-hot-reloader/client

WORKDIR $APP_DIR

COPY ./package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mv /tmp/node_modules ../node_modules
ENV PATH /opt/react-hot-reloader/node_modules/.bin:$PATH

COPY . .

EXPOSE 8080

CMD npm run dev
