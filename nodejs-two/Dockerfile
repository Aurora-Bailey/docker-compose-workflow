# syntax=docker/dockerfile:1
FROM node:current-alpine
WORKDIR /nodejs-two
COPY ["package.json", "package-lock.json*", "./"]
ENV NODE_ENV=production
ENV NODEJS_TWO_PORT=6000
RUN npm ci
EXPOSE 6000
COPY . .
CMD ["npm", "run", "production"]}