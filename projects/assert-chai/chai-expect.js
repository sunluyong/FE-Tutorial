var expect = require('chai').expect,
    foo = 'bar',
    beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.length(3);
expect(beverages).to.have.property('tea').with.length(3);

var answer = 43;

// AssertionError: expected 43 to equal 42.
expect(answer).to.equal(43);

// AssertionError: topic [answer]: expected 43 to equal 42.
expect(answer, 'topic [answer]').to.equal(43);

expect(foo).to.not.equal('baz');

expect({ foo: 'baz' }).to.have.property('foo')
  .and.not.equal('bar');

//expect(foo).to.have.any.keys('bar', 'baz');

expect({ foo: 'bar' }).to.be.an('object');

expect(7).to.be.within(5,10);
