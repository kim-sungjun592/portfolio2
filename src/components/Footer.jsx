import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Portfolio</h3>
            <p className="footer-text">
              사용자 경험을 중심으로 한 디자인과 개발을 통해 
              멋진 웹 경험을 만들어냅니다.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">빠른 링크</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">팔로우</h4>
            <ul className="footer-links">
              <li><a href="#">GitHub</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">서비스</h4>
            <ul className="footer-links">
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Brand Design</a></li>
              <li><a href="#">Consulting</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <div className="footer-links-bottom">
            <a href="#">Privacy Policy</a>
            <span className="divider">·</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      <button 
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title="Scroll to top"
      >
        ↑
      </button>
    </footer>
  );
}
