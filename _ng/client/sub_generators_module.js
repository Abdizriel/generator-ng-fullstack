'use strict';

const knownPaths = require('../utils/known_paths');
const optionsParser = require('../utils/options_parser');
const utils = require('../utils/utils');
const FeatureMissingError = require('../utils/errors').FeatureMissingError;
const AngularFactory = require('./angular').AngularFactory;

exports.ModuleSubGenerator = class ModuleSubGenerator {
  constructor(generator) {
    this.wrapper = generator;
    this.wrapper.ngVersion = this.wrapper.config.get('client');
    this.wrapper.appName = this.wrapper.config.get('appName');
    this.wrapper.testsSeparated = this.wrapper.config.get('testsSeparated');
  }

  initializing() {
    this.wrapper.argument('name', {
      required: true,
      type: String,
      desc: 'module'
    });
  }

  writing() {
    let _feature = optionsParser.getFeature(this.wrapper.options);

    if (!_feature.length) {
      throw new FeatureMissingError();
    }

    AngularFactory.build(this.wrapper.ngVersion, this.wrapper).copyModule();
  }
};
