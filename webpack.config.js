var webpack = require('webpack');//压缩
var ET = require('extract-text-webpack-plugin');//抽离css代码

module.exports = {
	entry:__dirname + '/src/app.js',

	output:{
		path:__dirname + '/prd/',
		filename:'bundle.js'
	},
	devtool:'source-map',

	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:'style!css'
			},

			{
				test:/\.js$/,
				loader:'babel-loader?presets[]=es2015'
			},

			{
				test:/\.scss$/,
				// loader:'style!css!sass'
				loader:ET.extract('style','css!sass')
				//抽离
			}
		]
	},

	// devServer: {
	// 	contentBase: __dirname + '/prd',
	// 	port: 80,
	// 	host: 'localhost',
	// 	inline:true,
	// 	hot:true,
	// 	proxy:{
	// 		'/api':{
	// 		    target: 'http://localhost:8080',
	// 		    pathRewrite: {
	// 		      '^/api': ''
	// 		    }
	// 	    }
	// 	}
	// },
	plugins:[
		// new webpack.optimize.UglifyJsPlugin(),压缩代码
		new ET('bundle.css')//抽离css代码
	]
}