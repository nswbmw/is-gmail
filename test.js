var assert = require('assert');
var isGmail = require('./');

describe('Gmail', function () {
  it('nswbmw@gmail.com', function (done) {
    isGmail('nswbmw@gmail.com', function (result) {
      assert.equal(result, true, 'nswbmw@gmail.com should be google apps email');
      done();
    });
  });
  it('nswbmw@google.com', function (done) {
    isGmail('nswbmw@google.com', function (result) {
      assert.equal(result, true, 'nswbmw@google.com should be google apps email');
      done();
    });
  });
  it('nswbmw@googlemail.com', function (done) {
    isGmail('nswbmw@googlemail.com', function (result) {
      assert.equal(result, true, 'nswbmw@googlemail.com should be google apps email');
      done();
    });
  });
  it('nswbmw@github.com', function (done) {
    isGmail('nswbmw@github.com', function (result) {
      assert.equal(result, true, 'nswbmw@github.com should be google apps email');
      done();
    });
  });
  it('nswbmw@waveapp.im', function (done) {
    isGmail('nswbmw@waveapp.im', function (result) {
      assert.equal(result, true, 'nswbmw@waveapp.im should be google apps email');
      done();
    });
  });
});

describe('Not Gmail', function () {
  it('nswbmw@just.best', function (done) {
    isGmail('nswbmw@just.best', function (result) {
      assert.equal(result, false, 'nswbmw@just.best should not be google apps email');
      done();
    });
  });
  it('nswbmw@126.com', function (done) {
    isGmail('nswbmw@126.com', function (result) {
      assert.equal(result, false, 'nswbmw@126.com should not be google apps email');
      done();
    });
  });
  it('nswbmw@qq.com', function (done) {
    isGmail('nswbmw@qq.com', function (result) {
      assert.equal(result, false, 'nswbmw@qq.com should not be google apps email');
      done();
    });
  });
  it('nswbmw@nswbmw.com', function (done) {
    isGmail('nswbmw@nswbmw.com', function (result) {
      assert.equal(result, false, 'nswbmw@nswbmw.com should not be google apps email');
      done();
    });
  });
});