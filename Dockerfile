FROM node:14 as cache
# Step 1 Download npm dependencies and additionnal packages (chrome,etc.)
LABEL maintainer="cedric.badjah@emvista.com"
LABEL build=true

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

# install node packages
RUN npm set progress=false && npm config set depth 0
RUN npm install

# Installs latest Chromium package for test
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

RUN npm install -g @angular/cli@~13.2.0

FROM cache as environment
#Step 2 Copy dev environment
COPY . .

FROM environment as test
RUN npm run test-ci


FROM test as build
RUN npm run build-prod


FROM nginx:1.18-alpine as docker_image

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*
WORKDIR /usr/share/nginx/html

COPY src/assets/config/config.json .
COPY src/assets/config/application.json .
COPY --from=build /app/dist/d3-project/ .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
