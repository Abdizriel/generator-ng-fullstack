"use strict";

const GoBase = require('./go_base').GoBase;

const SERVER_TOKEN = 'echo';

class GoEcho extends GoBase {
  constructor(generator) {
    super(generator, SERVER_TOKEN);
  }
}

exports.GoEcho = GoEcho;
