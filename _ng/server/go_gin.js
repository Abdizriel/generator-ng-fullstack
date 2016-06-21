"use strict";

const GoBase = require('./go_base').GoBase;

const SERVER_TOKEN = 'gin';

class GoGin extends GoBase {
  constructor(generator) {
    super(generator, SERVER_TOKEN);
  }
}

exports.GoGin = GoGin;
