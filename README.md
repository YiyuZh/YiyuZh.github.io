# YiyuZh.github.io
Blog

这是一个部署在 GitHub Pages 上的个人主页/博客模板，用于展示项目经历与技术文章。

## 访问说明

- 仓库地址（代码页）：`https://github.com/YiyuZh/YiyuZh.github.io`
- 网站地址（博客页）：`https://yiyuzh.github.io`

> 要看博客，请打开 `https://yiyuzh.github.io`，不要打开 `github.com/...`。

## Pages 设置（一次性）

1. 进入 `Settings` → `Pages`。
2. `Build and deployment` 的 `Source` 选择 **GitHub Actions**。
3. 推送代码到 `main`（或在 Actions 手动运行 workflow）。

## 当前结构

- `index.html`：主页结构（项目卡片会跳到独立详情页）。
- `project.html`：项目详情页模板（独立页面）。
- `site-data.js`：统一项目数据源（主页+详情页共用）。
- `script.js`：主页渲染逻辑。
- `project-detail.js`：详情页渲染逻辑（读取 `?id=`）。
- `styles.css`：主页与详情页的共享样式。
- `.github/workflows/deploy-pages.yml`：Pages 自动部署。

## 如何添加项目并设置“查看详情”

只需要编辑 `site-data.js` 里的 `projects` 数组。

每个项目建议包含：

- `id`：唯一英文 id（例如 `hiremate-streamlit`）
- `name`：项目标题
- `description`：首页卡片简介
- `summary`：详情页标题下短描述
- `detail`：详情正文
- `imageGallery`：2~4 张展示图（`src/alt`）
- `corePoints`：核心要点列表
- `techStack`：技术栈列表
- `futurePlans`：未来扩展方向列表
- `repoUrl`：源码链接
- `demoUrl`：Demo 链接

详情页访问格式：

- `https://yiyuzh.github.io/project.html?id=你的项目id`

## 你后续需要替换的内容

### 1) 替换展示图路径
当前是占位图路径（示例）：

- `assets/hiremate-1-placeholder.svg`
- `assets/hiremate-2-placeholder.svg`
- `assets/hiremate-3-placeholder.svg`

请将真实图片放到仓库对应路径，并把 `site-data.js` 中的 `imageGallery[].src` 改成你的文件路径。

### 2) 替换 Demo 链接

在 `site-data.js` 中将 `demoUrl: '#'` 改为真实地址（例如 Streamlit 部署地址）。

### 3) 替换项目文案

在 `site-data.js` 中按项目对象修改 `name/description/summary/detail/corePoints/techStack/futurePlans`。

## 权限说明

你的站点是静态 GitHub Pages：

- 访客只能浏览，不能直接改线上内容。
- 只有拥有仓库写权限的人可提交并发布更新。
