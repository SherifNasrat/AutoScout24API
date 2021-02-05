FROM node:12-alpine

LABEL maintainer="Sherif Nasrat <sherif_nasrat@hotmail.com>"

WORKDIR /app

COPY package*.json ./

RUN npm install && \
    (npm audit fix || true) && \
    chown -R node:node ./

COPY --chown=node:node ./ ./

USER node

CMD npm start
