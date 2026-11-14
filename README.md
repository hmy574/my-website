# 我的个人网站
用 Claude Code + Mimo 从零做的个人网站。
线上网址：https://wbapp-nniudi37piopgtrbvkig23.app.workbuddy.host/?sharecode=JZXLI5G34D

> 这是通过 WorkBuddy 内置发布上线的地址，不需要额外账号。讲义课后作业要求的 Cloudflare Pages 部署请用自己的 Cloudflare 账号完成后，替换上面这一行。

## 本地运行

```bash
npm install
npm run dev
```

打开终端给出的地址（默认 http://localhost:5173）。构建命令是 `npm run build`，产物目录 `dist/`，预览构建结果用 `npm run preview`。

## 换成你自己的信息

全站文字集中在 `src/content.js`，**只改这一个文件**，三个页面会同步更新。值为 `null` 或空数组的地方，页面会显示醒目的 `［待填：xxx］` 占位，不会编造姓名、学校、经历、奖项或作品。

要填的字段：`name`、`tagline`、`school`、`intro`、`interests`、`aboutParagraphs`、`highlights`、`email`、`github`。照片放进 `public/` 后把路径填给 `photo`，首页右侧的圆形装饰会自动换成照片。

## 提交与仓库状态

- 已推送到 **https://github.com/hmy574/my-website**（Public，默认分支 `main`），远端 `main` 与本地一致。
- 提交历史：`init: 初始化仓库`、`feat: 网站初版`，以及文档更新与图标微调两次提交，共四次。
- 提交作者目前是**仅本仓库生效**的占位身份 `h1915 <h1915@localhost>`：git 全局姓名/邮箱未设置，而姓名邮箱不能替你编造。它不会关联到你的 GitHub 账号，也不会计入贡献图。想修正的话，先设置你自己的身份：

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
git config --local --unset user.name
git config --local --unset user.email
```

然后告诉我，我会批量重写这几条提交的作者并同步到远端（需要一次 force push）。

## 课后作业：部署到 Cloudflare Pages

本地构建已验证：`npm run build`，产物目录 `dist/`。在 Cloudflare 连接这个仓库后，生产分支填 `main`、构建命令填 `npm run build`、产物目录填 `dist`。部署完成后把 `*.pages.dev` 网址填到本文件第 3 行，并补 100–200 字复盘，再提交推送一次。

推送认证走系统的 Git 凭据管理器（浏览器授权），令牌不进代码、不进仓库、不进聊天。

## 复盘（课后本人补写）

待补 100–200 字：总提示词原文、AI 给的惊喜、微调改了什么。这里不代写，避免编造个人体验。
