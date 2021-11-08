FROM node:gallium as base

WORKDIR /app

FROM base as dependencies
COPY package*.json ./
RUN npm ci

FROM dependencies as build
WORKDIR /app
COPY ./ /app
RUN npm run buildProd

FROM node:gallium-alpine as release
WORKDIR /app
COPY --from=dependencies /app/package.json ./
RUN npm install --only=production
COPY --from=build /app/dist ./

ENTRYPOINT [ "node" ]
CMD [ "./server.js" ]
