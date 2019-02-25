const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');


module.exports = merge(common, {
	mode: 'development',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.sass$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						}
					}
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
		open: true,
		overlay: true,
		port: 3000,
		hot: true,
		contentBase: [
			path.join(__dirname, 'src'),
			path.join(__dirname, 'src', 'templates'),
		],
		watchContentBase: true
	}
});
