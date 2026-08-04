import React, { useEffect, useRef, useState } from "react";
import "../styles/Projects.css";

export default function Projects() {
  // 스크롤 감지를 위한 상태와 Ref 설정
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // 한 번 등장하면 감지 해제
        }
      },
      { threshold: 0.1 }, // 섹션이 화면에 10% 정도 살짝 보이기 시작할 때 바로 트리거
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "converse UI/UX Design",
      description:
        "고품질 Figma 프로토타이핑부터 견고한 풀스택 구현까지, 포괄적인 Converse 웹 경험을 제공합니다.",
      image: "/images/converse.png",
      technologies: ["Node.js", "ui/ux", "figma"],
      liveLink: "https://canverse-tocobo.vercel.app",
      codeLink: "https://github.com/kim-sungjun592/canverse-tocobo",
    },
    {
      id: 2,
      title: "Picstory",
      description:
        "MongoDB부터 React까지, 견고한 MERN 스택 위에 사진과 일상을 유기적으로 연결한 풀스택 웹 서비스, picstory입니다",
      image: "/images/picstory.png",
      technologies: ["Node.js", "ui/ux", "figma"],

      liveLink: "http://115.68.229.252",
      codeLink: "https://github.com/kim-sungjun592/picstory.git",
    },

    {
      id: 3,
      title: "Restaurant search",
      description:
        "FastAPI와 MongoDB를 기반으로 사용자가 원하는 지역의 로컬 맛집과 감성 카페를 실시간으로 탐색하고, 나만의 미식 바구니에 저장할 수 있는 맛집 탐방 가이드 웹 애플리케이션입니다.",
      image: "/images/restaurant.png",
      technologies: ["Python (FastAPI)", "Asyncio / Aiohttp", "MongoDB"],
      liveLink: "https://bookbook-kappa.vercel.app/",
      codeLink: "https://github.com/kim-sungjun592/bookbook.git",
    },
    {
      id: 4,
      title: "Restaurant search",
      description:
        "사용자의 위치(시/도, 구, 동)를 기반으로 중고 물품을 탐색하고, 단순 금전 거래뿐만 아니라 '물품 교환(Barter) 신청'과 실시간 찜하기 기능을 지원하는 지역 밀착형 중고 거래 플랫폼입니다. 유연한 상품 명세와 대용량 트래픽 처리를 위해 비동기 백엔드 프레임워크와 NoSQL 아키텍처를 결합하여 설계했습니다.",
      image: "/images/maket.png",
      technologies: [
        "Authentication & API: Kakao OAuth 2.0",
        "Database",
        "DevOps",
      ],
      liveLink: "https://used-trade.vercel.app",
      codeLink: "https://github.com/kim-sungjun592/used-trade.git",
    },
    {
      title: "CoolRoute ",
      description:
        "배송지 위치(시/도, 구, 동)를 기반으로 최적의 물류 거점과 화물을 탐색하고, 단순 보관/배송뿐만 아니라 '화물 환적/교환 처리' 및 실시간 배송 트래킹(즐겨찾기) 기능을 지원하는 스마트 물류 플랫폼입니다. 비정형적인 화물 규격 데이터와 대용량 주문 트래픽을 지연 없이 처리할 수 있도록, 비동기 백엔드 프레임워크와 NoSQL 아키텍처를 결합하여 설계했습니다.",
      image: "/images/team.png",
      technologies: ["React", "TypeScript", "vite", "scss"],
      liveLink: "https://teamproject-ruby.vercel.app",
      codeLink: "https://github.com/kim-sungjun592/teamproject.git",
    },
    {
      title: "SMART_RAD",
      description:
        "교직원 인사·근태·급여·복지를 통합 관리하는 웹 서비스입니다. Kakao OAuth 로그인, RBAC 권한 관리, 엑셀 다운로드를 지원하며, 로그인 화면과 UI 반응형 최적화를 구현",
      image: "/images/smart.png",
      technologies: ["Next.js", "React", "TypeScript", "Kakao OAuth"],
      liveLink: "https://tsms.o-r.kr",
      codeLink: "https://github.com/kim-sungjun592/SMART_RAD",
    },
  ];

  return (
    <section
      id="projects"
      className={`high-impact-section ${isVisible ? "animate-on-scroll" : ""}`}
      ref={sectionRef}
    >
      <div className="container">
        {/* 헤더 영역 */}
        <div className="section-header">
          <h2 className="section-title">High-Impact Builds</h2>
          <p className="section-subtitle">
            복잡한 데이터를 매끄러운 사용자 경험으로 변환하는 견고한 백엔드 및
            직관적인 디자인 시스템 설계
            <br />
          </p>
        </div>

        {/* 프로젝트 리스트 영역 */}
        <div className="builds-list">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`build-item ${index % 2 !== 0 ? "reverse" : ""}`}
            >
              {/* 왼쪽/오른쪽 이미지 영역 */}
              <div className="build-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="build-image"
                />
              </div>

              {/* 텍스트 및 정보 영역 */}
              <div className="build-info">
                <div className="build-meta">
                  <div className="tech-badges">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link-icon"
                    aria-label="View Project"
                  >
                    ↗
                  </a>
                </div>

                <h3 className="build-title">{project.title}</h3>
                <p className="build-desc">{project.description}</p>

                <div className="build-actions">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-build yellow"
                    style={{
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    <span className="btn-icon">🔗</span> Live Demo
                  </a>

                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-build outline"
                    style={{
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    <span className="btn-icon">💻</span> View Code
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
