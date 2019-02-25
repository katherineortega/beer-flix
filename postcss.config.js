const autoprefix = require('autoprefixer');

module.exports = {
	plugins: [
		autoprefix({
			flexbox: true,
			grid: 'autoplace',
			browsers: [
				'>1%',
				'last 4 versions',
			]
		})
	]
};
