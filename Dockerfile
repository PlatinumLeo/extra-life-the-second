FROM node:gallium as base

WORKDIR /app

FROM base as dependencies
COPY package*.json ./
RUN npm ci

FROM dependencies as build
ENV NODE_ENV=production
WORKDIR /app
COPY ./ /app
RUN npm run build:prod:server
RUN npm run build:prod:client

FROM node:gallium-alpine as release
ENV NODE_ENV=production
ENV PORT=8080
WORKDIR /app
COPY --from=dependencies /app/package.json ./
RUN npm install --production
COPY --from=build /app/dist ./

EXPOSE 8080

ENTRYPOINT [ "node" ]
CMD [ "./server.js" ]
