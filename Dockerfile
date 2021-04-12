FROM node:12
ENV NODE_ENV=production
RUN mkdir /home/app
WORKDIR /home/app
COPY . .
RUN npm install --production
EXPOSE 3000
CMD [ "npm", "start" ]