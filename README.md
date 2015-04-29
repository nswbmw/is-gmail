## is-gmail

Check if an given email is google apps email.

### Install

```
npm i is-gmail --save
```

### Usage

```
var isGmail = require('is-gmail');

isGmail('nswbmw@gmail.com', function (result) {}) // result => true
isGmail('nswbmw@google.com', function (result) {}) // result => true
isGmail('nswbmw@googlemail.com', function (result) {}) // result => true
isGmail('nswbmw@github.com', function (result) {}) // result => true
isGmail('nswbmw@waveapp.im', function (result) {}) // result => true

isGmail('nswbmw@just.best', function (result) {}) // result => false
isGmail('nswbmw@126.com', function (result) {}) // result => false
isGmail('nswbmw@qq.com', function (result) {}) // result => false
isGmail('nswbmw@nswbmw.com', function (result) {}) // result => false
```

### Test

```
npm test
```

### License

MIT