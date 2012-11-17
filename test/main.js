var should = require('should');
var toolbox = require('../lib/main');

describe('sleepsort', function() {
  describe('with no arguments', function() {
    it('returns an empty array', function(done) {
      try {
        toolbox.search("patio", function (err, results) {
          toolbox.should.eql(null);
          console.log('%j', results);
        });
      } catch(e) {
        toolbox.should.eql(null);
      }
      done();
    });
  });
});
