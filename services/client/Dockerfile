FROM node:boron

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /var/lib/wallet/client

COPY ./package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mv /tmp/node_modules ../node_modules
ENV PATH /var/lib/wallet/node_modules/.bin:$PATH

COPY . .

CMD npm start
