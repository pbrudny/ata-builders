FROM node:20-alpine AS build
WORKDIR /app
ENV HTTP_PROXY="" HTTPS_PROXY="" http_proxy="" https_proxy="" NPM_CONFIG_REGISTRY=https://registry.npmjs.org/ npm_config__auth="" npm_config_always_auth=false
COPY package.json package-lock.json ./
RUN npm config delete //registry.npmjs.org/:_authToken 2>/dev/null; \
    npm config set registry https://registry.npmjs.org/ && \
    npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
