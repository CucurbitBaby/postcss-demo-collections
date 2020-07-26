# posttcss
* postcss可以和很多构建工具相结合，也有自己的cli: npm i postcss-cli
* 课程已久，postcss-cli 高版本的API: https://www.npmjs.com/package/postcss-cli
* ./node_modules/.bin/postcss a.css命令需要Linux的终端, windows下npx postcss或全局安装
* npx postcss a.css --no-map 默认不添加sourcemap  
* postcss完全靠插件玩, 配置文件 postcss-config.js


## autoprefixer
* npm i autoprefixer
* 新版配置项也不同: http://www.mamicode.com/info-detail-2746932.html
* 指定兼容浏览器范围的数据来源: caniuse.com


## postcss-import
* cnpm i postcss-import
* 原生 @import css; 会多一次http请求
* ./node_modules/.bin/postcss src/02-plugins-main.css -o build/02-plugins-main.css --no-map


## cssnano
* cnpm i cssnano 
* cssnano 一般放在最后
* 合并两个css中的.box{} .boxP{}(包括@import css文件中的.box); 压缩成min.css; 多个main属性压缩成简写;

## 还有很多插件, 看文档啦

## cssnext
* 已经形成了自己的一套语法系统
* 把一些规范中已经提出来的已经定稿的还没有实现的东西，现在就用起来
* 跟我们用babel browserfiy使用es6 7..一样的原理
