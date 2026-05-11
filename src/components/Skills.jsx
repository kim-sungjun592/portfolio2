import React from 'react';
import '../styles/Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      category: '프론트엔드',
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'CSS/Sass', level: 88 },
        { name: 'HTML5', level: 92 },
      ],
    },
    {
      category: '백엔드',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Python', level: 78 },
        { name: 'API Design', level: 85 },
      ],
    },
    {
      category: '디자인',
      skills: [
        { name: 'Figma', level: 92 },
        { name: 'UI Design', level: 90 },
        { name: 'UX Design', level: 88 },
        { name: 'Prototyping', level: 85 },
      ],
    },
    {
      category: '도구',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Webpack', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'VS Code', level: 95 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-label">능력</div>
        <h2 className="section-title">기술 스택</h2>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div 
              key={idx} 
              className="skill-category"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="category-title">{cat.category}</h3>
              <div className="skills-list">
                {cat.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skill-extras">
          <div className="extra-item">
            <span className="extra-icon">🚀</span>
            <h4>성능 최적화</h4>
            <p>웹 성능 최적화 및 SEO 전문</p>
          </div>
          <div className="extra-item">
            <span className="extra-icon">♿</span>
            <h4>접근성</h4>
            <p>WCAG 표준 준수</p>
          </div>
          <div className="extra-item">
            <span className="extra-icon">🔒</span>
            <h4>보안</h4>
            <p>안전한 코드 작성</p>
          </div>
          <div className="extra-item">
            <span className="extra-icon">📱</span>
            <h4>반응형 디자인</h4>
            <p>모든 기기에 대응</p>
          </div>
        </div>
      </div>
    </section>
  );
}
