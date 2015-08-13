var assert = require('assert');

function fn (a, b) {
    return a + b;
}

function date(now){
    var n = now ? now : Date.now();
    return n % 2 === 0;
}

assert(date(2), 'ok');

assert.ok(date(2), 'ok');

assert.equal(fn(2, 3), 5);

assert.notEqual(fn(2, 3), 6, 'not equal!');

assert.equal(1, '1', '1 equals "1"'); // 1 == "1"

assert.notStrictEqual(1, '1', '1 not strictequals "1"'); // 1 === "1"

var a = [1, 2, 3];
var b = [1, 2, 3];
var c = a;

assert.notEqual(a, b);

assert.deepEqual(a, b);

assert.strictEqual(a, c);

//assert.fail(1, 1, 'message');

assert.throws(
  function() {
    throw new Error("Wrong value");
  },
  Error
);

assert.ifError(false);

// db.save(function(err){
//     assert.ifError(err);
// });
