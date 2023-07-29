FROM node:14-alpine as build

ARG VITE_OGRINE_API_URL="https://example.com"
ENV VITE_OGRINE_API_URL=$VITE_OGRINE_API_URL

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM httpd:alpine

COPY --from=build /app/dist /usr/local/apache2/htdocs

EXPOSE 80

CMD ["httpd", "-D", "FOREGROUND"]
