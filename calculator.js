'use strict'

const equation = process.argv.slice(-1)[0]
const mathjs = require('mathjs')
const numeral = require('numeral')

try {
  let answer = mathjs.eval(equation).toString()
  let title = answer.replace(/\d+/, (v) => {
    return numeral(v).format('0,0')
  })
  let value = answer.match(/[\d.]+/g).join('')
  console.log(JSON.stringify([
    {
      title: title,
      subtitle: 'Select item to copy the value to the clipboard.',
      value: value,
    },
  ]))
} catch (e) {
  console.log(e)
  console.log(JSON.stringify([
    {
      title: '...',
      subtitle: 'Please enter a valid expression.',
      value: -1,
    },
  ]))
}
