FROM node:7.5

RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app

RUN curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 0.20.0
ENV PATH="$HOME/.yarn/bin:$PATH"

COPY package.json yarn.lock $HOME/ma-front-end/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/ma-front-end
RUN yarn install

# USER root
COPY . $HOME/ma-front-end
# RUN chown -R app:app $HOME/*
# USER app

CMD ["yarn", "run", "start"]
