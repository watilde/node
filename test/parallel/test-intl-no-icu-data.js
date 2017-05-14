// Flags: --icu-data-dir=test/fixtures/empty/
'use strict';
const assert = require('assert');
const config = process.binding('config');
const common = require('../common');

if (common.hasIntl) {
  assert.deepStrictEqual(Intl.NumberFormat.supportedLocalesOf('en'), ['en']);
} else {
  assert.deepStrictEqual(Intl.NumberFormat.supportedLocalesOf('en'), []);
}

assert.strictEqual(config.icuDataDir, 'test/fixtures/empty/');
