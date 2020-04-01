'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:

function whisper(string) {
  return `*`+ string.toLowerCase() + `*`;
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof whisper, 'function');
assert.strictEqual(whisper.length, 1);
assert.strictEqual(whisper.toString().includes('*'), true);
assert.deepStrictEqual(whisper('HELLO'), '*hello*');
assert.deepStrictEqual(whisper('world'), '*world*');

// End of tests */
