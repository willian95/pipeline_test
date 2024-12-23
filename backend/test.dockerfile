FROM node:23-alpine AS starter
WORKDIR /var/www/app
COPY package*.json ./
RUN npm ci && npm cache clean --force
COPY . .
ENV NODE_OPTIONS=--max-old-space-size=8192
CMD ["npm", "run", "test"]