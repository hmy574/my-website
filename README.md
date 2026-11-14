# 我的个人网站
用 Claude Code + Mimo 从零做的个人网站。
线上网址：课后部署完成后填在这里。

## 本地运行

```bash
npm install
npm run dev
```

打开终端给出的地址（默认 http://localhost:5173）。构建命令是 `npm run build`，产物目录 `dist/`，预览构建结果用 `npm run preview`。

## 换成你自己的信息

全站文字集中在 `src/content.js`，**只改这一个文件**，三个页面会同步更新。值为 `null` 或空数组的地方，页面会显示醒目的 `［待填：xxx］` 占位，不会编造姓名、学校、经历、奖项或作品。

要填的字段：`name`、`tagline`、`school`、`intro`、`interests`、`aboutParagraphs`、`highlights`、`email`、`github`。照片放进 `public/` 后把路径填给 `photo`，首页右侧的圆形装饰会自动换成照片。

## 提交状态

本仓库已 `git init`、切到 `main`，并完成两次本地提交：`init: 初始化仓库` 和 `feat: 网站初版`。

由于 git 全局 `user.name` / `user.email` 尚未设置，而姓名和邮箱不能替你编造，提交时用的是**仅本仓库生效**的占位身份（本机账号名 `h1915` + 本地域邮箱 `h1915@localhost`）：没有写进全局配置，也不是你的真实邮箱。

**推送到 GitHub 前请换成你自己的**，否则提交作者无法关联到你的 GitHub 账号：

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
git config --local --unset user.name
git config --local --unset user.email
git commit --amend --reset-author --no-edit
```

最后一条只修正最新一次提交；第一条 `init` 的作者信息如需一并替换，配置好身份后告诉我，我来批量改。

之后在 github.com 建一个**完全空的** Public 仓库（不勾 README / .gitignore / license），再执行：

```bash
git remote add origin https://github.com/<你的用户名>/my-website.git
git push -u origin main
```

第一次 push 用浏览器登录或个人访问令牌（勾 repo，只显示一次）。令牌别写进代码、别发到聊天里。
