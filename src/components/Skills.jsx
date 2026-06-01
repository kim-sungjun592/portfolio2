import React, { useEffect, useRef, useState } from 'react';
import '../styles/Skills.css';

export default function Skills() {
  // 스크롤 감지를 위한 상태와 Ref 설정
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // 애니메이션이 한 번 가동되면 감지 종료
        }
      },
      { threshold: 0.15 } // 섹션이 화면에 15% 정도 노출될 때 실행
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: '⚡',
      color: '#8b5cf6', // 보라색
      skills: [
        { name: 'React.js', percent: 90 },
        { name: 'JavaScript', percent: 85 },
        { name: 'React Hooks', percent: 92 },
        { name: 'HTML5 & CSS3', percent: 88 },
      ],
    },
    {
      title: 'Backend & Database',
      icon: '⏱️',
      color: '#10b981', // 초록색
      skills: [
        { name: 'Node.js', percent: 92 },
        { name: 'Express.js', percent: 88 },
        { name: 'MongoDB', percent: 86 },
        { name: 'Mongoose', percent: 84 },
      ],
    },
    {
      title: 'API & Advanced Logic',
      icon: '⬡',
      color: '#f97316', // 주황색
      skills: [
        { name: 'REST API / Axios', percent: 82 },
        { name: 'Geolocation API', percent: 85 },
        { name: 'Maps API Integration', percent: 80 },
        { name: 'State / Validation Logic', percent: 83 },
      ],
    },
    {
      title: 'Design & Deployment',
      icon: '✓',
      color: '#ec4899', // 핑크색
      skills: [
        { name: 'fiama', percent: 87 },
        { name: 'Vercel Deployment', percent: 95 },
        { name: 'Git & GitHub', percent: 85 },
        { name: 'Cross-Origin Resource Sharing', percent: 88 },
      ],
    },
  ];

  return (
    // ✅ section에 ref를 바인딩하고, 감지 상태에 따라 'animate-on-scroll' 클래스를 주입합니다.
    <section 
      id="skills" 
      className={`skills-tools-section ${isVisible ? 'animate-on-scroll' : ''}`} 
      ref={sectionRef}
    >
      <div className="skills-tools-container">
        
        {/* 상단 헤더 */}
        <div className="skills-header">
          <h2 className="skills-title">Skills & Tools</h2>
          <p className="skills-subtitle">
            확장 가능한 백엔드 아키텍처,
대화형 대시보드 및 최적화된 사용자 경험을 갖춘 디자인 중심의 웹 개발.<br />
            
          </p>
        </div>

        {/* 4열 스킬 카드 그리드 */}
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-card">
              
              {/* 카드 헤더 (아이콘 + 제목) */}
              <div className="skill-card-header">
                <div 
                  className="skill-icon-wrapper" 
                  style={{ backgroundColor: `${category.color}20`, color: category.color }}
                >
                  {category.icon}
                </div>
                <h3 className="skill-card-title">
                  {category.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </h3>
              </div>

              {/* 스킬 목록 및 프로그래스 바 */}
              <div className="skill-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.percent}%</span>
                    </div>
                    <div className="skill-progress-bg">
                      {/* 💡 CSS 애니메이션 연동을 위해 인라인 스타일에 CSS 변수(--target-width)를 내려줍니다. */}
                      <div 
                        className="skill-progress-fill" 
                        style={{ 
                          '--target-width': `${skill.percent}%`, 
                          backgroundColor: category.color 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}