###
FROM    mhart/alpine-node

RUN     npm install -g http-server
RUN apk add curl
RUN apk add bash
RUN apk add git
RUN apk add build-base

RUN curl https://sh.rustup.rs -sSf | bash -s -- -y


WORKDIR /site
ADD     ./    /site

RUN echo 'source $HOME/.cargo/env' >> $HOME/.bashrc
RUN git submodule update --init ./
RUN $HOME/.cargo/bin/cargo build --manifest-path ./engine/chess/Cargo.toml

# The default port of the application
EXPOSE  8081

CMD ["bash", "./both_runs.sh"]
