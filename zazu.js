module.exports = {
  name: 'Calculator',
  version: '0.0.1',
  description: 'Calculate stuff.',
  icon: 'icon.png',
  blocks: {
    input: [
      {
        id: 'Service',
        type: 'RootNodeScript',
        script: 'calculator.js',
        connections: ['Copy'],
      },
    ],
    output: [
      {
        id: 'Copy',
        type: 'CopyToClipboard',
        text: '{value}',
      },
    ],
  },
}
