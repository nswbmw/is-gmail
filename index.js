var dns = require('dns');
var isEmail = require('check-email-valid');

module.exports = function isGmail(email, callback) {
  if ((typeof email !== 'string') || !isEmail(email)) {
    process.nextTick(function () {
      callback(false);
    });
  } else {
    var domain = email.split('@')[1];
    if (~['gmail.com', 'google.com', 'googlemail.com'].indexOf(domain)) {
      process.nextTick(function () {
        callback(true);
      });
    } else {
      dns.resolveMx(domain, function (err, result) {
        callback(
          err ? false : result.some(function (item) {
            return item.exchange.match(/google(mail)?\.com$/i);
          })
        );
      });
    }
  }
};