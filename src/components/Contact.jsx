import React, { useState } from 'react';
// 1. 맨 위에 아이콘 라이브러리를 불러옵니다!
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Formspree를 통해 실제 이메일 전송
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/mgoqvbyq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        alert('메시지 전송에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('메시지 전송에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'rlatjdwns@icloud.com',
      link: 'mailto:rlatjdwns@icloud.com',
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+82 010-5544-7419',
      link: 'tel:+821055447419',
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Seoul, Korea',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-label">연락</div>
        <h2 className="section-title">함께 일해요</h2>
        <p className="contact-subtitle">
          흥미로운 프로젝트나 제안이 있으신가요? 편하게 연락주세요!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            {contactInfo.map((info, idx) => (
              <a 
                key={idx}
                href={info.link}
                className="info-card"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <span className="info-icon">{info.icon}</span>
                <div>
                  <h4 className="info-title">{info.title}</h4>
                  <p className="info-value">{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">이름</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="당신의 이름을 입력하세요"
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">제목</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="프로젝트 제목을 입력하세요"
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">메시지</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="자세한 내용을 입력하세요..."
                disabled={isLoading}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? '⏳ 전송 중...' : submitted ? '✓ 전송되었습니다!' : '메시지 보내기'}
            </button>
          </form>
        </div>

        {/* 2. 하단 SNS 영역을 텍스트에서 아이콘으로 수정했습니다! */}
        <div className="social-links">
          <span className="social-label">Follow me on</span>
          <div className="social-icons">
            <a href="#" className="social-link" title="GitHub" target="_blank" rel="noopener noreferrer">
              <FaGithub size="24" />
            </a>
            <a href="#" className="social-link" title="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size="24" />
            </a>
            <a href="#" className="social-link" title="Twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter size="24" />
            </a>
            <a href="#" className="social-link" title="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram size="24" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}