FROM node:latest

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production
COPY . .

CMD [ "node", "request.js" ]