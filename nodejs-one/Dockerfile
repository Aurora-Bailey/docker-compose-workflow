# syntax=docker/dockerfile:1
FROM node:current-alpine
WORKDIR /nodejs-one
COPY ["package.json", "package-lock.json*", "./"]
ENV NODE_ENV=production
ENV NODE_PORT=5000
RUN npm ci
EXPOSE 5000
COPY . .
CMD ["npm", "run", "production"]}