# syntax=docker/dockerfile:1
FROM node:current-alpine
WORKDIR /nodejs-ping
COPY ["package.json", "package-lock.json*", "./"]
ENV NODE_ENV=production
RUN npm ci
COPY . .
CMD ["npm", "run", "production"]}