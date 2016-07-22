module.exports = {
  name: 'Calculator',
  version: '0.0.1',
  description: 'Calculate stuff.',
  icon: 'icon.png',
  blocks: {
    input: [
      {
        id: 1,
        type: 'RootScript',
        respondsTo: (input) => {
          const hasNumbers = input.match(/\d/)
          return hasNumbers
        },
        script: 'node calculator.js "{query}"',
        connections: [2],
      },
    ],
    output: [
      {
        id: 2,
        type: 'CopyToClipboard',
        text: '{value}',
      },
    ],
  },
}
