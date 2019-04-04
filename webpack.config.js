const path = require('path');
module.exports = {
  entry: {
    'custom/comp1': path.resolve(__dirname, 'projects/custom/src/lib/comp1/comp1.component.ts'),
    'custom/comp2': path.resolve(__dirname, 'projects/custom/src/lib/comp2/comp2.component.ts')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
}
