# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
# echo 'note.harahozi.cn' > CNAME

git init
git add -A
git commit -m 'auto commit'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:Elgar17/Elgar17.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
# git push -f https://github.com/Elgar17/Elgar17.github.io/tree/master/note.git master:gh-pages
git push -f git@github.com:Elgar17/docs.git master:gh-pages

cd -