const mathjs = require('mathjs')
const numeral = require('numeral')

module.exports = (pluginContext) => {
  return {
    respondsTo: (query) => {
      return query.match(/\d/)
    },
    search: (query, env = {}) => {
      return new Promise((resolve, reject) => {
        const answer = mathjs.eval(query.replace(/\,/g,"")).toString()
        const value = answer.match(/-?[\d.]+/g).join('')
        const title = answer.replace(/\d+/, (v) => {
          return numeral(v).format('0,0')
        })
        resolve([
          {
            icon: 'fa-calculator',
            title: title,
            subtitle: 'Select item to copy the value to the clipboard.',
            value: value,
          },
        ])
      })
    },
  }
}
