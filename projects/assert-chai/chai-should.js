var should = require('chai').should(), //actually call the function
    foo = 'bar',
    beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.length(4);
beverages.should.have.property('tea').with.length(3);
