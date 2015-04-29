const dns = require('dns')
const isEmail = require('check-email-valid')

module.exports = async function isGmail(email) {
  if ((typeof email !== 'string') || !isEmail(email)) {
    return false
  } else {
    const domain = email.split('@')[1]
    if (~['gmail.com', 'google.com', 'googlemail.com'].indexOf(domain)) {
      return true
    } else {
      return new Promise(function (resolve, reject) {
        dns.resolveMx(domain, function (err, result) {
          if (err) {
            resolve(false)
          } else {
            resolve(result.some(function (item) {
              return !!item.exchange.match(/google(mail)?\.com$/i)
            }))
          }
        })
      })
    }
  }
}
