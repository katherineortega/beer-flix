const common = require('./webpack.common.js');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	...common,
	mode: 'development',
	devtool: 'source-map',
	entry: {
		app: path.join(__dirname, 'src', 'main.js'),
	},
	output: {
		filename: '[name].bundle.js',
		path: path.join(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: {minimize: true}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.join(__dirname, 'src', 'index.html')
		})
	],
	devServer: {
		open: true,
		overlay: true,
		port: 3000,
		hot: true,
		contentBase: [
			path.join(__dirname, 'src'),
			path.join(__dirname, 'src', 'assets', 'templates'),
		],
		watchContentBase: true
	}
};
