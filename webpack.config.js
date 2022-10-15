const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    signupin: path.resolve(__dirname,'./sign_in_up_button_customer/signupin.js')
  },
  output: {
    path: path.resolve(__dirname,'./build'),
    filename: '[name].bundle.js'
  },
  watch: true
}