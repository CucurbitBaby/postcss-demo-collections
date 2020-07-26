# PostCss支持的构建工具
* CLI命令行工具
* webpack postcss-loader
* gulp gulp-postcss
* Grunt grunt-postcss
* Rollup rollup-postcss
* ..

## gulp 
* 一款非常流行的构建任务管理工具
* 本身也没有什么构建功能的， 全靠插件
* 本身提供的功能也就是文件的输入输出，使用流将各个插件串起来，本身是一个任务调度工具
* 类似gulp babel这样的包，面向项目安装用npx 比较好，避免版本的混淆
* nvm 切换不同node版本安装的全局包  不同node版本环境不共享
* nvm 切换不同node版本安装的项目包  共享
* gulp@3.9.1 适用于 node 10.x
* npx gulp postcss
