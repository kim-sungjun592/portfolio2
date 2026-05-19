import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projects = document.getElementById('projects');
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        
        {/* 좌측: 텍스트 영역 */}
        <div className={`hero-text ${isLoaded ? 'loaded' : ''}`}>
          <span className="availability">AVAILABLE FOR NEW PROJECTS</span>
          
          <h1 className="hero-title">
            React, Node.js, Figma를 <br />
            다루는 크리에이티브 개발자
          </h1>
          
          <p className="hero-subtitle">
            저는 React, Node.js, Figma를 다루는 크리에이티브 개발자로, <br />
            복잡한 공학 설계와 인간 중심 디자인 사이의 그 깊은 간극을 잇고 있<br />
            는 개발자입니다.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToProjects}>
              내 작업 보기
            </button>
            <button className="btn btn-secondary" onClick={scrollToContact}>
              연락하세요
            </button>
          </div>
        </div>

        {/* 우측: 배경 타이포그래피 및 그래픽 영역 */}
        <div className={`hero-visual ${isLoaded ? 'loaded' : ''}`}>
          <div className="bg-typography">
            
            {/* 🔥 수정된 부분: 글자를 하나씩 쪼개서 span으로 렌더링합니다. */}
            <div className="bg-text">
              {"FULL STAC".split('').map((char, index) => (
                <span 
                  key={index} 
                  className="char" 
                  // 0.4초부터 시작해서 한 글자당 0.1초씩 지연되어 나타남
                  style={{ transitionDelay: `${0.4 + (index * 0.1)}s` }}
                >
                  {char === ' ' ? '\u00A0' : char} {/* 띄어쓰기 인식 처리 */}
                </span>
              ))}
            </div>
            
            <div className="bg-text">
              {"DEVELOPE".split('').map((char, index) => (
                <span 
                  key={index} 
                  className="char" 
                  // 첫 번째 줄이 끝날 때쯤인 1.2초부터 이어서 등장
                  style={{ transitionDelay: `${1.2 + (index * 0.1)}s` }}
                >
                  {char}
                </span>
              ))}
            </div>

          </div>
          {/* 노란색 반원 장식 */}
          <div className="yellow-arc arc-top"></div>
          <div className="yellow-arc arc-bottom"></div>
        </div>
        
      </div>
    </section>
  );
}