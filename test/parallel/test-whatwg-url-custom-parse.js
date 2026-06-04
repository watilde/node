'use strict';

// Tests below are not from WPT.

require('../common');
const assert = require('node:assert');

assert.throws(() => new URL(), {
  code: 'ERR_MISSING_ARGS',
  name: 'TypeError',
});

{
  const url = new URL('https://example.com/path?q=1#hash');
  assert.strictEqual(url.href, 'https://example.com/path?q=1#hash');
}

{
  const url = new URL('/path', 'https://example.com');
  assert.strictEqual(url.href, 'https://example.com/path');
}

assert.throws(() => URL.parse(), {
  code: 'ERR_MISSING_ARGS',
  name: 'TypeError',
});

{
  const url = URL.parse('https://example.com/');
  assert(url instanceof URL);
  assert.strictEqual(url.href, 'https://example.com/');
}

{
  const url = URL.parse('/path', 'https://example.com');
  assert(url instanceof URL);
  assert.strictEqual(url.href, 'https://example.com/path');
}

assert.strictEqual(URL.parse('not-a-url'), null);
assert.strictEqual(URL.parse(''), null);
assert.strictEqual(URL.parse('//no-scheme'), null);
