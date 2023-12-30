###
FROM    mhart/alpine-node

RUN     npm install -g http-server
EXPOSE  8081

CMD ["http-server", "-p8081", "./"]
