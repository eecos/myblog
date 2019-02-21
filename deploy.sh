#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

#git运行脚本
git init
git add -A
git commit -m 'deploy update . lijiating by travis'

git config --local user.name "李加廷"
git config --local user.email "mrjerryli@yeah.net"

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<USERNAME>.git master:gh-pages
#git push -f git@github.com:mrjerryli/myblog.git master:gh-pages

# 如果使用 travis 持续集成
git push -f https://${GH_TOKEN}@github.com/${USERNAME}/${REPO}.git master:${P_BRANCH}

cd -