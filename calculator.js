const equation = process.argv.slice(-1)[0]
const mathjs = require('mathjs')

try {
  const answer = mathjs.eval(equation)
  console.log(JSON.stringify([
    {
      title: answer,
      subtitle: 'Select item to copy the value to the clipboard.',
      value: answer,
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
