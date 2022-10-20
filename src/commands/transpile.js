/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2022 Yegor Bugayenko
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const mvnwSync = require('../mvnw');
const path = require('path');
const parserVersion = require('../parser-version');

/**
 * Command to transpile XMIR files into target language.
 * @param {Hash} opts - All options
 */
module.exports = function(opts) {
  const sources = path.resolve(opts.target, 'generated-sources');
  mvnwSync([
    'eo:transpile',
    '-Deo.version=' + (opts.parser ? opts.parser : parserVersion()),
    opts.verbose ? '' : '--quiet',
    `-Deo.targetDir=${path.resolve(opts.target)}`,
    `-Deo.generatedDir=${sources}`,
  ]);
  console.info('Java sources generated in %s', sources);
};
