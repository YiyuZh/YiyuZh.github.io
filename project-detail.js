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

  const renderGallery = (images) => {
    const gallery = document.getElementById('detail-gallery');
    if (!gallery) {
      return;
    }

    if (!images || images.length === 0) {
      gallery.innerHTML = '<p class="detail-placeholder">暂未配置展示图。</p>';
      return;
    }

    gallery.innerHTML = images
      .slice(0, 4)
      .map(
        (image) => `
          <figure class="gallery-item">
            <img src="${image.src}" alt="${image.alt || '项目展示图'}" loading="lazy" />
          </figure>
        `
      )
      .join('');
  };

  setText('detail-name', project.name);
  setText('detail-summary', project.summary || '');
  setText('detail-content', project.detail || '');
  renderList('detail-core-points', project.corePoints || []);
  renderList('detail-tech', project.techStack || []);
  renderList('detail-future', project.futurePlans || []);
  renderGallery(project.imageGallery || []);

  const demoLink = document.getElementById('detail-demo');
  if (demoLink) {
    demoLink.href = project.demoUrl || '#';
    if (!project.demoUrl || project.demoUrl === '#') {
      demoLink.textContent = 'Live Demo（待补充链接）';
    }
  }

  const repoLink = document.getElementById('detail-repo');
  if (repoLink) {
    repoLink.href = project.repoUrl || '#';
  }
}
