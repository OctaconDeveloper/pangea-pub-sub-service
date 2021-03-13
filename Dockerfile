FROM node:10-alpine

WORKDIR /pub-sub

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 9002

CMD [ "npm", "start"] 