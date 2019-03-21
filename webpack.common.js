const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		beerList: path.join(__dirname, 'src', 'beer-list.js'),
		beerDetail: path.join(__dirname, 'src', 'beer-detail.js')
	},
	output: {
		filename: 'bundle-[hash].js',
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
		new CleanWebpackPlugin(['dist'])
	],
};
