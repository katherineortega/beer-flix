const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: {
		'beer-index': path.join(__dirname, 'src', 'beer-index.js'),
		'beer-detail': path.join(__dirname, 'src', 'beer-detail.js')
	},
	output: {
		filename: '[name]-[hash].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(jpe?g|png|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							publicPath: 'images/',
							outputPath: 'images/'
						}
					}
				],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'beer-detail.html',
			minify: {collapseWhitespace: true, removeComments: true},
			template: path.join(__dirname, 'src', 'beer-detail.html'),
			favicon: path.join(__dirname, 'src', 'favicon.ico'),
			chunks: ['beer-detail'],
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			minify: {collapseWhitespace: true, removeComments: true},
			template: path.join(__dirname, 'src', 'index.html'),
			favicon: path.join(__dirname, 'src', 'favicon.ico'),
			chunks: ['beer-index'],
		}),
		new CleanWebpackPlugin(['dist'])
	],
};
