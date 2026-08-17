# Copyright (c) 2026 Eng. Omar Wael. All Rights Reserved.

FROM gitpod/workspace-python

USER gitpod

RUN sudo apt-get update && sudo apt-get install -y \
    nodejs \
    npm \
    && sudo rm -rf /var/lib/apt/lists/*

RUN npm install -g create-react-app
