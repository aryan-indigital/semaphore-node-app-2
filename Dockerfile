FROM node:18-alpine

WORKDIR /app
COPY package.json server.js ./
RUN npm test

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["npm", "start"]
