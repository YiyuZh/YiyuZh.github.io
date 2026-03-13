# YiyuZh.github.io
Blog

这是一个部署在 GitHub Pages 上的个人主页/博客模板，用于展示项目经历与技术文章。

## 你截图里为什么是“YiyuZh.github.io / Blog”

你打开的是**仓库页面**（`github.com/...`），它默认展示的是 `README.md`，所以看起来像一页文档。

- 仓库地址（代码页）：`https://github.com/YiyuZh/YiyuZh.github.io`
- 网站地址（博客页）：`https://yiyuzh.github.io`

> 要看博客，请打开 `https://yiyuzh.github.io`，不要打开 `github.com/...`。

## 一次性设置（保证可访问）

我已经加了自动部署工作流：`.github/workflows/deploy-pages.yml`。

你只需要在仓库里确认：

1. 进入 `Settings` → `Pages`。
2. `Build and deployment` 的 `Source` 选择 **GitHub Actions**。
3. 推送一次代码到 `main`（或在 Actions 页手动运行一次 workflow）。
4. 等待 1~3 分钟后访问：`https://yiyuzh.github.io`。

## 关键说明（权限）

你的站点是 **GitHub Pages 静态站点**：

- 访客只能浏览页面，**不能修改线上内容**。
- 只有拥有你仓库写入权限的人（你自己/协作者）才能通过提交代码修改网站。

## 当前结构

- `index.html`：主页结构（关于我、项目展示、博客文章、联系方式）。
- `styles.css`：页面样式与响应式布局。
- `script.js`：个人信息配置 + 项目展示列表渲染 + 自动更新页脚年份。
- `.github/workflows/deploy-pages.yml`：Pages 自动部署工作流。

## 已为你预设的信息

- GitHub：`https://github.com/YiyuZh`
- Email：`autsky6666@gmail.com`

## 如何修改内容（仅你自己在仓库里改）

### 1) 修改个人信息
编辑 `script.js` 顶部的 `SITE_CONFIG`：

- `name`
- `github`
- `email`
- `heroTitle`
- `heroIntro`
- `seoTitle`
- `seoDescription`

### 2) 修改项目列表
同样编辑 `script.js` 中的 `SITE_CONFIG.projects` 数组。每个项目包含：

- `name`：项目名称
- `description`：项目简介
- `link`：项目链接

### 3) 修改博客文章
编辑 `index.html` 中 `#blog` 区块里的文章卡片内容。
