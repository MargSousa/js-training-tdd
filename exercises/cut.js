'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:

function cutFirst(string) {
  return string.substring(2);
};

function cutLast(string) {
  return string.slice(0, -2);
};

function cutFirstLast(string) {
  string = string.substring(2);
  string = string.slice(0, -2);
  return string;
};


//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof cutFirst, 'function');
assert.strictEqual(typeof cutLast, 'function');
assert.strictEqual(typeof cutFirstLast, 'function');
assert.strictEqual(cutFirst.length, 1);
assert.strictEqual(cutLast.length, 1);
assert.strictEqual(cutFirstLast.length, 1);
assert.strictEqual(cutFirst('aabbccddeeffgghh'), 'bbccddeeffgghh');
assert.strictEqual(cutLast('aabbccddeeffgghh'), 'aabbccddeeffgg');
assert.strictEqual(cutFirstLast('aabbccddeeffgghh'), 'bbccddeeffgg');

// End of tests */
