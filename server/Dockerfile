FROM node:19.5.0

WORKDIR /
COPY package*.json /

RUN npm install
RUN npm ci --only=production

COPY . .
EXPOSE 8080
CMD [ "node", "server.js" ]


# docker build . -t node19.5.0
# docker run -p 49160:8080 -d node19.5.0

# -d is for detached mode
# docker ps
# doker logs contianer-id
# docker kill container-id

