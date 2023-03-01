FROM node:14.21.3-buster

WORKDIR /app
ADD ./ ./
RUN npm i -g npm
RUN yarn install
CMD ["yarn", "run"]
