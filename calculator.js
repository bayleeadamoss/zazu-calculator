'use strict'

const equation = process.argv.slice(-1)[0]
const mathjs = require('mathjs')

try {
  let answer = mathjs.eval(equation)
  let value = answer
  if (typeof answer === "object") {
    value = answer.value
    answer = answer.toString()
  }
  console.log(JSON.stringify([
    {
      title: answer,
      subtitle: 'Select item to copy the value to the clipboard.',
      value: value,
    },
  ]))
} catch (e) {
  console.log(JSON.stringify([
    {
      title: '...',
      subtitle: 'Please enter a valid expression.',
      value: -1,
    },
  ]))
}
