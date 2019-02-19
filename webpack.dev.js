const common = require('./webpack.common.js');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');


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
	plugins: [
		new CleanWebpackPlugin(['dist']),
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
