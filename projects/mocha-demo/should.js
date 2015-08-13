var should = require('chai').should();

var a = [];

describe('Array', function() {
  describe('#indexOf()', function () {

    beforeEach(function(){
        a = [1, 2, 3];
        console.log(a);
    });

    it('should return -1 when the value is not present', function () {
      a.indexOf(5).should.to.equal(-1);
    });
    it('should return -1 when the value is not present', function () {
      a.indexOf(5).should.to.equal(-1);
    });
  });
});

describe('async', function(){
    it('should return -1 after 1000 ms', function(done){
        setTimeout(function(){
            //console.log(new Date());
            '1'.should.to.equal('-1');
            done();
        }, 1000);
    })
});

describe.only('a suite of tests', function() {
  this.timeout(500);

  it('should take less than 500ms', function(done){
    setTimeout(done, 700);
  });

  it('should take less than 500ms as well', function(done){
    setTimeout(done, 200);
  });
})
