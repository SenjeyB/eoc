/*
 * SPDX-FileCopyrightText: Copyright (c) 2022-2025 Objectionary.com
 * SPDX-License-Identifier: MIT
 */

const rel = require('relative');
const {mvnw, flags} = require('../../mvnw');
const path = require('path');

/**
 * Command to transpile XMIR files into target language.
 * @param {Object} opts - All options
 * @return {Promise} of transpile task
 */
module.exports = function(opts) {
  const sources = path.resolve(opts.target, 'generated-sources');
  return mvnw(['eo:transpile'].concat(flags(opts)), opts.target, opts.batch).then((r) => {
    console.info('Java sources generated in %s', rel(sources));
    return r;
  });
};
