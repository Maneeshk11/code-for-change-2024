FROM node:18

WORKDIR /app
COPY package*.json ./
RUN yarn install --check-files
COPY . .
EXPOSE 3000
CMD npm run dev