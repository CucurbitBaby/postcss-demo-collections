// const autoprefixer = require('autoprefixer');
// const cssnano = require('cssnano');
// const atImport = require('postcss-import');
// const cssnext = require('postcss-cssnext');
const precss = require('precss');		// 添加厂商前缀  参考网址呢？



module.exports = {
	plugins: [
		// atImport,
		// autoprefixer({
		// 	browsers: ['>10%']
		// }),
		// cssnano
		// cssnext
		precss
	]
};


// postcss src/04-precss.css -o build/04-precss.css