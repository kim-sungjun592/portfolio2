import React, { useEffect, useRef, useState } from "react";
import "../styles/ProjectShorts.css";

export default function ProjectShorts() {
  // 스크롤 감지를 위한 상태와 Ref 설정
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // 한 번 화면에 들어오면 감지 해제
        }
      },
      { threshold: 0.1 }, // 섹션이 화면에 10% 정도 살짝 걸릴 때 애니메이션 바로 가동
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const projectShorts = [
    {
      id: 1,
      title: "wifi spot",
      tech: ["REACT", "NODE.JS", "FIREBASE"],
      desc: "사용자의 실시간 위치(Geolocation) 데이터와 외부 공공 API를 매끄럽게 연동하여, 주변의 가용 와이파이 스폿을 지도상에 실시간으로 매핑하고 시각화한 위치 기반(LBS) 풀스택 웹 애플리케이션입니다.",
      image: "/images/wifi-spot.png",
      liveLink: "http://localhost:5174/map",
      codeLink: "https://github.com/kim-sungjun592/Wifi-Spot.git",
    },
    {
      id: 2,
      title: "끝말잇기",
      tech: ["REACT", "NODE.JS", "FIREBASE"],
      desc: "추억의 고전 놀이를 감각적인 UI와 실시간 인터랙션으로 재해석하여, 남녀노소 누구나 가볍고 중독성 있게 즐길 수 있는 두뇌 회전 웹 게임입니다.",
      image: "/images/game.png",
      liveLink: "https://world-game-zeta.vercel.app",
      codeLink: "https://github.com/kim-sungjun592/world-game.git",
    },
    {
      id: 3,
      title: "타이머 앱",
      tech: ["REACT", "NODE.JS", "FIREBASE"],
      desc: "오차 없는 정밀한 시간 데이터 제어와 직관적인 상태 관리를 통해, 사용자의 업무 및 학습 효율을 극대화하는 생산성 웹 애플리케이션입니다.",
      image: "/images/timer.png",
      liveLink: "https://timer-six-psi.vercel.app",
      codeLink: "https://github.com/kim-sungjun592/timer.git",
    },
    {
      id: 4,
      title: "Todolist",
      tech: ["REACT", "NODE.JS", "FIREBASE"],
      desc: "컴포넌트 단위의 유기적인 상태 관리와 유저 데이터의 안정적인 영속성(Persistence)을 기반으로, 일상의 할 일을 가장 직관적으로 제어할 수 있도록 설계한 일정 관리 애플리케이션입니다.",
      image: "/images/todolist.png",
      liveLink: "https://todolist-ver2-sigma.vercel.app",
      codeLink: "https://github.com/kim-sungjun592/todolist-ver2.git",
    },
    {
      id: 5,
      title: "감성 일기장",
      tech: ["REACT", "NODE.JS", "FIREBASE"],
      desc: "바쁜 일상 속에서 쉽게 휘발되는 감정의 조각들을 따뜻한 비주얼로 기록하고, 소란했던 하루를 차분히 되돌아보는 시간을 선물하는 힐링 로그 플랫폼입니다.",
      image: "/images/emotion-diary.png",
      liveLink: "https://emotion-diary-ashen-rho.vercel.app",
      codeLink: "https://github.com/kim-sungjun592/emotion-diary.git",
    },
    {
      id: 6,
      title: "weather app",
      tech: ["REACT", "NODE.JS", "FIREBASE"],
      desc: "실시간 기상 API 데이터를 유기적으로 가공하여, 유저에게 필요한 날씨 정보를 직관적인 그래픽과 감각적인 UI로 시각화한 애플리케이션입니다",
      image: "/images/weather.png",
      liveLink: "https://weather-app-x6wq.vercel.app",
      codeLink: "https://github.com/kim-sungjun592/weather-app.git",
    },
  ];

  return (
    // ✅ section에 ref를 적용하고, isVisible 상태에 따라 클래스를 동적으로 붙입니다.
    <section
      id="project-shorts"
      className={`shorts-section ${isVisible ? "animate-on-scroll" : ""}`}
      ref={sectionRef}
    >
      <div className="shorts-container">
        <div className="shorts-header">
          <h2 className="shorts-main-title">Project Shorts</h2>
          <p className="shorts-subtitle">
            견고한 백엔드 로직과 직관적인 시각적 디자인이 조화를 이루는, 엄선된
            소규모 프로젝트 모음입니다.
            <br />
          </p>
        </div>

        <div className="shorts-grid">
          {projectShorts.map((project) => (
            <div key={project.id} className="short-card">
              <div className="short-image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="short-image"
                />
              </div>
              <div className="short-content">
                <h3 className="short-title">{project.title}</h3>
                <div className="short-tech-list">
                  {project.tech.map((t, index) => (
                    <span key={index} className="short-tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="short-desc">{project.desc}</p>

                <div className="short-actions">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-short yellow"
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxSizing: "border-box",
                    }}
                  >
                    VIEW PROJECT
                  </a>

                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-short outline"
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxSizing: "border-box",
                    }}
                  >
                    VIEW CODE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
