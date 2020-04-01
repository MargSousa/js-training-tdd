'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:

function keepFirst(string) {
  return string.slice(0, 2);
};

function keepLast(string) {
  return string.slice(string.length - 2, string.length );
};

function keepFirstLast(string) {
  // return string.substring(2, 4);
  return string.slice(2, 4);
};


//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof keepFirst, 'function');
assert.strictEqual(typeof keepLast, 'function');
assert.strictEqual(typeof keepFirstLast, 'function');
assert.strictEqual(keepFirst.length, 1);
assert.strictEqual(keepLast.length, 1);
assert.strictEqual(keepFirstLast.length, 1);
assert.strictEqual(keepFirst('aabbccddeeffgghh'), 'aa');
assert.strictEqual(keepLast('aabbccddeeffgghh'), 'hh');
assert.strictEqual(keepFirstLast('aabbccddeeffgghh'), 'bb');
// End of tests */
