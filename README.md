## is-gmail

Check if an given email is gmail or GSuit email.

### Install

```
npm i is-gmail --save
```

### Usage

```
const isGmail = require('is-gmail')

;(async function () {
  console.log(await isGmail('example@gmail.com')) // true
  console.log(await isGmail('example@google.com')) // true
  console.log(await isGmail('example@googlemail.com')) // true
  console.log(await isGmail('example@github.com')) // true

  console.log(await isGmail('example@126.com')) // false
  console.log(await isGmail('example@qq.com')) // false
  console.log(await isGmail('example@example.com')) // false
})()
```

### Test

```
npm test
```

### License

MIT
