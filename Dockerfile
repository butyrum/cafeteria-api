FROM node:22-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .


ARG DATABASE_URL

ENV DATABASE_URL=$DATABASE_URL

RUN npx prisma generate
# ----------------------------------------

EXPOSE 3333

CMD ["npm", "run", "dev"]