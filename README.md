# ui

组件库

# 说明

完整的一套组件库设计

# 安装

npm i @buquan/ui -S 项目安装

# 使用

用同antd，es模式导入默认支持tree-shaking，cjs可通过[babel-import-plugin](https://github.com/umijs/babel-plugin-import)实现按需引入

# 组件库开发

按照src下文件夹规则新建自己的组件，使用方式见目录结构，然后可通过```npm link``` 调试

# 组件库发布

所有文件commit后，执行```npm run publish```自动升级版本并发布到npm

# 编写开发文档

建议在当前组件文件夹新建mdx文件，规则见docz，通过```npm run docz:dev```启动本地文档开发服务器



# 发布文档

执行```docs:publish```发布文档




