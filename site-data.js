// 站点统一配置：主页与项目详情页共用
const SITE_CONFIG = {
  name: 'Yiyu',
  github: 'https://github.com/YiyuZh',
  email: 'autsky6666@gmail.com',
  heroTitle: '你好，我是 Yiyu',
  heroIntro: '我是一名热爱技术与创造的开发者，这里会持续分享我做过的项目、实践经验与学习心得。',
  seoTitle: 'Yiyu 的个人博客',
  seoDescription: 'Yiyu 的个人博客：记录项目、技术总结与学习笔记。',
  projects: [
    {
      id: 'portfolio-site',
      name: '个人作品集网站',
      description: '使用纯前端技术搭建，支持响应式布局、项目筛选和在线预览。',
      detail: '这是我的个人展示网站项目，目标是把项目经历、技能栈与联系方式整合到一个清晰易读的页面中。重点在于信息结构和移动端体验。',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      highlights: ['响应式布局', '项目卡片展示', '简洁可维护结构'],
      repoUrl: 'https://github.com/YiyuZh/YiyuZh.github.io',
      demoUrl: 'https://yiyuzh.github.io'
    },
    {
      id: 'task-manager',
      name: '任务管理工具',
      description: '支持任务分类、优先级排序和数据本地存储，提升个人效率。',
      detail: '这个项目用于管理日常待办事项，支持任务状态管理和优先级划分，帮助我更高效安排学习和开发计划。',
      techStack: ['JavaScript', 'LocalStorage', 'CSS Grid'],
      highlights: ['任务分类', '优先级排序', '本地数据持久化'],
      repoUrl: 'https://github.com/YiyuZh',
      demoUrl: 'https://github.com/YiyuZh'
    },
    {
      id: 'ai-qa-demo',
      name: 'AI 问答 Demo',
      description: '集成大模型 API，实现对话问答、历史记录与简单提示词管理。',
      detail: '该项目主要用于验证 AI 问答应用的产品流程，从输入问题、调用模型、输出答案到历史记录管理，完整走通最小可用流程。',
      techStack: ['JavaScript', 'API Integration', 'Prompt Design'],
      highlights: ['多轮对话', '历史记录', '提示词管理'],
      repoUrl: 'https://github.com/YiyuZh',
      demoUrl: 'https://github.com/YiyuZh'
    }
  ]
};
