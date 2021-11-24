FROM node:16-slim

WORKDIR /user/src/social-media

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "run dev"]