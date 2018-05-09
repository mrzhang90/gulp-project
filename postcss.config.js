const cssnext = require('postcss-cssnext');
//处理基础的变量
const cssvariables = require('postcss-css-variables');
// const advanced = require('postcss-advanced-variables');
//预处理的css-类似sass,向写js一样写css
const precss = require('precss');
const importcss=require('postcss-import');
// const mixins = require('postcss-mixins');
const px2rem = require('postcss-px2rem');
module.exports = {
	plugins: [
		importcss({}),
		//浏览器向上3个版本,生成对应的css
		precss({
			browsers: "last 3 versions"
		}),
		cssnext({}),
		// mixins({}),
		cssvariables({}),
		// advanced({}),
		px2rem({remUnit: 75})
	]
}