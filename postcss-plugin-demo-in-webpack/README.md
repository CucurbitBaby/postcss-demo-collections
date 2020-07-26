## webpack
* JS是整个应用的核心入口(之前js,多个js,css,css之间的关系,包括图片的引用都是由html来管理的)
* 基本上只要在一个html中引入一个js，剩下的事情由这个js来掌握
* 一切资源均由JS管理依赖(js中引入样式，样式中又想引入成图片等等)
* 一切资源均由webpack来打包
* cnpm install webpack@3.12.0
* npx webpack src/05-webpack-main.js build/05-webpack-main.js
* ..main.js和module.js 共9行代码，webpack打包之后 共86行代码(不算es6语法和新特性，es7 ..)

## webpack处理css
* npx webpack src/06-webpack-main.js build/06-webpack-main.js 报错!
* 通过require引入css webpack任务require的是一个js模块， 但css文件实际是css语法 so error
* 用webpack-loader机制，css-loader就行了
* loader机制：webpack可以为指定后缀或者指定的文件提供一些处理工具，处理之后交给webpack
* webpack是处理js的，所以需要css-loader把css文件转换成js
* cnpm install css-loader sytle-loader(把css注入到html)
* 需要一个webpack配置文件指定这两个loader
* npx webpack src/06-webpack-main.js build/06-webpack-main.js