FROM node:14.1.0-alpine3.10

# Create app directory
WORKDIR /home

# copy content
COPY /migrations .

# install dependencies
RUN yarn global add migrate-mongo
RUN yarn install

CMD [ "migrate-mongo", "up" ]
