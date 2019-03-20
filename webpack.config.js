var path  = require('path');
//var Htmlwebpackplugin = require('html-webpack-plugin');


module.exports = {
	entry:'./src/mianjs/index.js',
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'main.min.js'
	}
}
