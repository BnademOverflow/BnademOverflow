FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json /usr/src/app/
USER node
RUN npm install

# Bundle app source
COPY --chown=node:node . /usr/src/app
RUN npm install serve
RUN npm run build
EXPOSE 5000

CMD [ "serve", "public/" ]