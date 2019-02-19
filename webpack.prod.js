const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	...common,
	mode: 'production',
	entry: path.join(__dirname, 'src', 'main.js'),
	output: {
		filename: 'bundle-[hash].js',
		path: path.join(__dirname, 'dist')
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new CleanWebpackPlugin(['dist']),
	]
};
