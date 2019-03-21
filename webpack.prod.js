const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.sass$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html'),
			minify: {collapseWhitespace: true, removeComments: true},
			inject: true,
			chunks: ['beerList'],
			favicon: path.join(__dirname, 'src', 'favicon.ico')
		}),
		new HtmlWebpackPlugin({
			inject: true,
			chunks: ['beerDetail'],
			minify: {collapseWhitespace: true, removeComments: true},
			template: path.join(__dirname, 'src', 'beer-detail.html'),
			favicon: path.join(__dirname, 'src', 'favicon.ico'),
		})
	]
});
