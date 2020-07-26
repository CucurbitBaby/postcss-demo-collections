const autoprefixer = require('autoprefixer')
const atImport = require('postcss-import');
const cssnano = require('cssnano');
// const cssnext = require('postcss-cssnext');
// const precss = require('precss');		// 添加厂商前缀  参考网址呢？



module.exports = {
	plugins: [
		atImport,
    autoprefixer({overrideBrowserslist: ['> 0.15% in CN']}),
		cssnano
		// cssnext
		// precss
	]
};


// // postcss src/04-precss.css -o build/04-precss.css

// postcss src/01-precss.css -o build/01-precss.css --no-map