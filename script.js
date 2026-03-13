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
          <a href="project.html?id=${project.id}">查看详情 →</a>
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
