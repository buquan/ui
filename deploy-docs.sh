#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e


# 生成静态文件
rm -rf .docz docs

npm run docz:build

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'feat: deploy'

# 如果发布到 https://<USERNAME>.github.io  USERNAME=你的用户名 
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
git push -f origin gh-pages

echo '发布成功'