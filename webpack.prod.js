const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	...common,
	mode: 'production',
	entry: path.join(__dirname, 'src', 'main.js'),
	output: {
		filename: 'bundle-[hash].js',
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
		new webpack.ProgressPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.join(__dirname, 'src', 'index.html'),
			minify: {
				collapseWhitespace: true,
				removeComments: true
			}
		}),
	]
};
