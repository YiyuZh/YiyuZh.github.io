// 在这里集中修改你的个人信息与项目展示内容
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
      name: '个人作品集网站',
      description: '使用纯前端技术搭建，支持响应式布局、项目筛选和在线预览。',
      link: 'https://github.com/YiyuZh'
    },
    {
      name: '任务管理工具',
      description: '支持任务分类、优先级排序和数据本地存储，提升个人效率。',
      link: 'https://github.com/YiyuZh'
    },
    {
      name: 'AI 问答 Demo',
      description: '集成大模型 API，实现对话问答、历史记录与简单提示词管理。',
      link: 'https://github.com/YiyuZh'
    }
  ]
};

const setText = (id, value) => {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = value;
  }
};

const renderProjects = () => {
  const projectList = document.getElementById('project-list');
  if (!projectList) {
    return;
  }

  const projects = Array.isArray(SITE_CONFIG.projects) ? SITE_CONFIG.projects : [];
  if (projects.length === 0) {
    projectList.innerHTML = '<p class="card">暂未添加项目。</p>';
    return;
  }

  projectList.innerHTML = projects
    .map(
      (project) => `
        <article class="card project">
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank" rel="noreferrer">查看详情 →</a>
        </article>
      `
    )
    .join('');
};

setText('brand-name', `${SITE_CONFIG.name} Blog`);
setText('hero-title', SITE_CONFIG.heroTitle);
setText('hero-intro', SITE_CONFIG.heroIntro);
setText('footer-name', SITE_CONFIG.name);

const githubLink = document.getElementById('github-link');
if (githubLink) {
  githubLink.href = SITE_CONFIG.github;
  githubLink.textContent = SITE_CONFIG.github;
}

const emailLink = document.getElementById('email-link');
if (emailLink) {
  emailLink.href = `mailto:${SITE_CONFIG.email}`;
  emailLink.textContent = SITE_CONFIG.email;
}

if (SITE_CONFIG.seoTitle) {
  document.title = SITE_CONFIG.seoTitle;
}

const descriptionMeta = document.getElementById('page-description');
if (descriptionMeta && SITE_CONFIG.seoDescription) {
  descriptionMeta.setAttribute('content', SITE_CONFIG.seoDescription);
}

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

renderProjects();
