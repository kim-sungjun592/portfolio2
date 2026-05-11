import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-label">소개</div>
        <h2 className="section-title">저에 대해</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              안녕하세요! 저는 사용자 경험을 중심으로 하는 디자이너이자 개발자입니다.
              깔끔하고 효율적인 인터페이스 디자인과 그것을 구현하는 것을 좋아합니다.
            </p>
            
            <p>
              10년 이상의 경험을 바탕으로 다양한 프로젝트를 진행해왔으며,
              항상 사용자의 관점에서 생각하고 최고의 결과를 만들기 위해 노력합니다.
            </p>

            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-icon">🎯</span>
                <span className="highlight-text">사용자 중심 디자인</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon">💻</span>
                <span className="highlight-text">모던한 개발 기술</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon">⚡</span>
                <span className="highlight-text">빠른 성능 최적화</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon">🎨</span>
                <span className="highlight-text">창의적인 디자인</span>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <div className="image-content">
                <span>당신의 이미지</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
