export default {
  files: ['./src/**/*.mdx'],
  title: 'ifss', // 设置文档的标题
  dest: '/docs',
  base: '/ui',
  typescript: true, // 支持 typescript 语法
  themesDir: 'theme', // 主题样式放在哪个文件夹下，后面会讲
  menu: ['快速上手', '业务组件'] // 生成文档的左侧菜单分类
};
