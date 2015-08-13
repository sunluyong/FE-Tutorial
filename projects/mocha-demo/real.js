var should = require('chai').should();
var fn = require('./fn.js');

describe('fn', function () {
    it('add(2, 3) should return 5', function(){
        fn.add(2, 3).should.to.equal(5);
    });
})
