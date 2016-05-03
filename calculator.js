const equation = process.argv.slice(-1)[0]

try {
  console.log(JSON.stringify([
    {title: eval(equation), subtitle: 'Select item to copy the value to the clipboard.'},
  ]))
} catch (e) {
  console.log(JSON.stringify([
    {title: '...', subtitle: 'Please enter a valid expression.'},
  ]))
}
