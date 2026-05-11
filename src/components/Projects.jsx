import React, { useState } from 'react';
import '../styles/Projects.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: '모던한 이커머스 플랫폼 디자인 및 개발',
      image: '🛍️',
      technologies: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Mobile App Design',
      category: 'mobile',
      description: '직관적인 모바일 애플리케이션 UI/UX',
      image: '📱',
      technologies: ['React Native', 'Figma'],
    },
    {
      id: 3,
      title: 'Brand Identity',
      category: 'design',
      description: '완벽한 브랜드 아이덴티티 시스템 구축',
      image: '🎨',
      technologies: ['Illustrator', 'Photoshop'],
    },
    {
      id: 4,
      title: 'Dashboard Analytics',
      category: 'web',
      description: '데이터 시각화 대시보드',
      image: '📊',
      technologies: ['React', 'Chart.js', 'API'],
    },
    {
      id: 5,
      title: 'Social Media App',
      category: 'mobile',
      description: '소셜 네트워크 애플리케이션',
      image: '💬',
      technologies: ['Flutter', 'Firebase'],
    },
    {
      id: 6,
      title: 'Marketing Website',
      category: 'web',
      description: '매력적인 마케팅 웹사이트',
      image: '🚀',
      technologies: ['Next.js', 'Tailwind'],
    },
  ];

  const categories = ['all', 'web', 'mobile', 'design'];

  const filtered = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-label">포트폴리오</div>
        <h2 className="section-title">최근 프로젝트</h2>

        <div className="filter-buttons">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat === 'all' ? '전체' : cat === 'web' ? '웹' : cat === 'mobile' ? '모바일' : '디자인'}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href="#" className="project-link">자세히 보기 →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
