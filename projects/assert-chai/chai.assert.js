var assert = require('chai').assert,
    foo = 'bar',
    beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

assert.typeOf(foo, 'string'); // without optional message
assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
assert.equal(foo, 'bar', 'foo equal `bar`');
assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');

assert.isAbove(5, 2, '5 is strictly greater than 2');

assert.typeOf(/tea/, 'regexp', 'we have a regular expression');
assert.typeOf(null, 'null', 'we have a null');

assert.include([ 1, 2, 3 ], 3, 'array contains value');

assert.property({ tea: { green: 'matcha' }}, 'tea');

assert.deepProperty({ tea: { green: 'matcha' }}, 'tea.green');

assert.propertyVal({ tea: 'is good' }, 'tea', 'is good');

assert.lengthOf([1,2,3], 3, 'array has length of 3');
assert.lengthOf('foobar', 6, 'string has length of 6');

assert.operator(1, '<', 2, 'everything is ok');

var obj = { val: 10 };
var fn = function() { obj.val = 22 };
assert.changes(fn, obj, 'val');
