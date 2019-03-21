const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
		new HtmlWebpackPlugin({
			inject: true,
			chunks: ['beerDetail'],
			template: path.join(__dirname, 'src', 'beer-detail.html'),
			favicon: path.join(__dirname, 'src', 'favicon.ico'),
		}),
		new HtmlWebpackPlugin({
			inject: true,
			chunks: ['beerList'],
			template: path.join(__dirname, 'src', 'index.html'),
			favicon: path.join(__dirname, 'src', 'favicon.ico'),
		}),
		new webpack.HotModuleReplacementPlugin()
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
