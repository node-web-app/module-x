var assert = require('chai').assert;

describe('get /', function() {
  it('should greet with \'Hello from module x\'', function() {
    browser.get('/');
    element(by.css('body')).getText().then(function(text) {
      assert.equal(text, 'Hello from module x');
    });
  });
});
