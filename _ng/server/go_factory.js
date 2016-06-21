"use strict";

const GoEcho = require('./go_echo').GoEcho;
const GoGin = require('./go_gin').GoGin;

class GoFactory {
  static tokensServer() {
    return {
      ECHO: "echo",
      GIN: "gin"
    }
  }

  static build(generator) {
    switch (generator.webFrameworkServer) {
      case GoFactory.tokensServer().ECHO: return new GoEcho(generator);
      case GoFactory.tokensServer().GIN: return new GoBin(generator);
    }
  }
}

exports.GoFactory = GoFactory;
