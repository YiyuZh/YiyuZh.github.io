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

## 推荐的“查看详情页”方案（已实现）

当前已采用统一详情页模板：

- 首页项目卡片统一跳转到：`project.html?id=项目id`
- `project.html` 会根据 URL 参数读取对应项目内容并渲染

这样做的好处：

- 新增项目时不用再新建很多 HTML 文件
- 结构统一，维护成本低
- 页面风格一致，体验更好

## 当前结构

- `index.html`：主页结构（关于我、项目展示、博客文章、联系方式）。
- `project.html`：项目详情页模板。
- `site-data.js`：站点统一配置（个人信息 + 项目数据）。
- `script.js`：主页渲染逻辑。
- `project-detail.js`：详情页渲染逻辑。
- `styles.css`：页面样式与响应式布局。
- `.github/workflows/deploy-pages.yml`：Pages 自动部署工作流。

## 如何新增项目并设置“查看详情”

只需编辑 `site-data.js` 中 `projects` 数组，新增一个对象：

- `id`：唯一英文标识（例如 `my-new-app`）
- `name`：项目名称
- `description`：首页卡片简介
- `detail`：详情页正文
- `techStack`：技术栈数组
- `highlights`：亮点数组
- `repoUrl`：源码链接
- `demoUrl`：演示链接

示例：

```js
{
  id: 'my-new-app',
  name: '我的新项目',
  description: '一句话简介',
  detail: '这里写项目背景、目标和实现过程。',
  techStack: ['Vue', 'TypeScript', 'Node.js'],
  highlights: ['支持登录', '响应式设计', '性能优化'],
  repoUrl: 'https://github.com/xxx/xxx',
  demoUrl: 'https://xxx.com'
}
```

完成后提交发布，访问：

- 首页项目卡片点击“查看详情”
- 或直接打开：`https://yiyuzh.github.io/project.html?id=my-new-app`

## 关键说明（权限）

你的站点是 **GitHub Pages 静态站点**：

- 访客只能浏览页面，**不能修改线上内容**。
- 只有拥有你仓库写入权限的人（你自己/协作者）才能通过提交代码修改网站。
