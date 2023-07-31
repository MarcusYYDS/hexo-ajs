# hexo-ajs
为了主题作者更好的让用户自定义js内容
## 安装
安装插件,在博客根目录[Blogroot]下打开终端，运行以下指令：
```shell
npm install hexo-ajs --save
```
## 添加配置信息
以下为写法示例 在站点配置文件`_config.yml`或者主题配置文件`_config.acrylic.yml`中添加
```yml
# ajs config
ajs:
  input_path: "themes/Acrylic/source/js"
  output_path: "source/js"
```
## 使用方法
填写配置项<br/>
在input_path的文件夹中创建`.ajs`文件<br/>
使用`"#{theme.xxx}"`或者`"#{config.xxx}"`<br/>
执行`hexo ajs`来生成`.js`文件<br/>
可以将博客根目录下`package.json`中的`scripts.build`更改为`hexo generate&&hexo ajs`<br/>
执行`npm run build`即可
## 最后
hexo cl&&hexo g&&hexo ajs&&hexo s
