FROM node:16-slim
ARG NPM_TOKEN
WORKDIR /builder
RUN npm install --production

FROM node:16-slim
WORKDIR /app
COPY --from=builder --chrow=node:node /builder .
RUN shown node:node /app
USER node
CMD ["node", "index.js"]
