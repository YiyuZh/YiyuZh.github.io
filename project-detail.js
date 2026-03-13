const params = new URLSearchParams(window.location.search);
const projectId = params.get('id');

const projects = Array.isArray(SITE_CONFIG.projects) ? SITE_CONFIG.projects : [];
const project = projects.find((item) => item.id === projectId);

if (!project) {
  const container = document.getElementById('project-detail');
  if (container) {
    container.innerHTML = `
      <p class="badge">Project Detail</p>
      <h1>项目不存在</h1>
      <p>请返回项目列表并重新选择项目。</p>
      <a class="btn" href="index.html#projects">返回项目列表</a>
    `;
  }
} else {
  document.title = `${project.name} | ${SITE_CONFIG.name}`;

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = value;
    }
  };

  const renderList = (id, values) => {
    const el = document.getElementById(id);
    if (!el) {
      return;
    }
    el.innerHTML = (values || []).map((value) => `<li>${value}</li>`).join('');
  };

  setText('detail-name', project.name);
  setText('detail-description', project.description || '');
  setText('detail-content', project.detail || '');
  renderList('detail-tech', project.techStack || []);
  renderList('detail-highlights', project.highlights || []);

  const demoLink = document.getElementById('detail-demo');
  if (demoLink) {
    demoLink.href = project.demoUrl || '#';
  }

  const repoLink = document.getElementById('detail-repo');
  if (repoLink) {
    repoLink.href = project.repoUrl || '#';
  }
}
