const isGmail = require('./')

;(async function () {
  console.log(await isGmail('example@gmail.com')) // true
  console.log(await isGmail('example@google.com')) // true
  console.log(await isGmail('example@googlemail.com')) // true
  console.log(await isGmail('example@github.com')) // true

  console.log(await isGmail('example@126.com')) // false
  console.log(await isGmail('example@qq.com')) // false
  console.log(await isGmail('example@example.com')) // false
})()
