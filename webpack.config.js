const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    signupin: path.resolve(__dirname,'./sign_in_up_button_customer/signupin.js'),
    get_hired: path.resolve(__dirname,'./get_hired.js'),
    gethiredhelper: path.resolve(__dirname,'./gethiredhelper.js'),
    gethiredbusiness: path.resolve(__dirname,'./gethiredbusiness.js'),
    fire: path.resolve(__dirname,'./helping hand profiles/fire.js')
  },
  output: {
    path: path.resolve(__dirname,'./build'),
    filename: '[name].bundle.js'
  },
  watch: true
}