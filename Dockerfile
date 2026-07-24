FROM node:20-alpine AS build
WORKDIR /app
RUN apk add --no-cache curl
RUN echo "=== npmjs ===" && curl -sS -i https://registry.npmjs.org/react | head -20; \
    echo "=== npmmirror ===" && curl -sS -i https://registry.npmmirror.com/react | head -20; \
    echo "=== github (control) ===" && curl -sS -i https://api.github.com/ | head -20; \
    false
COPY package.json package-lock.json ./
RUN npm install --registry=https://registry.npmmirror.com/
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
