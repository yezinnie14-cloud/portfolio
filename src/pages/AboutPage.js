// src/pages/AboutPage.js
import "./AboutPage.scss";
import { useState } from "react";

export default function AboutPage() {
  const [active, setActive] = useState("why");
  const [open, setOpen] = useState({});

  const sections = [
    { id: "why", label: "WHY.md", title: "WHY THIS PORTFOLIO" },
    { id: "design", label: "DESIGN.system", title: "DESIGN SYSTEM" },
    { id: "interaction", label: "INTERACTION.js", title: "INTERACTION" },
    { id: "structure", label: "STRUCTURE.json", title: "STRUCTURE" },
    { id: "values", label: "VALUES.txt", title: "VALUES" }
  ];

  const content = {
    why: {
      headline: "설명 가능한 선택을 보여주는 포트폴리오",
      keywords: ["기준", "흐름", "설명 가능성"],
      blocks: [
        {
          k: "의도",
          v: "결과물 나열이 아니라, ‘왜 이렇게 만들었는지’를 빠르게 이해할 수 있는 구조를 목표로 했습니다."
        },
        {
          k: "사용자",
          v: "면접관을 사용자로 두고, 짧은 시간 안에 핵심이 보이도록 리스트 → 디테일 흐름을 우선했습니다."
        }
      ]
    },

    design: {
      headline: "정제된 톤 + 정보 위계",
      keywords: ["Calm", "Hierarchy", "Readability"],
      blocks: [
        { k: "Color", v: "강한 대비보다는 차분한 톤을 중심으로, 포인트는 필요한 순간에만 사용합니다." },
        { k: "Typography", v: "긴 설명도 읽히도록 가독성 우선. 제목/본문 위계를 확실히 나눴습니다." },
        { k: "Layout", v: "한 번에 다 보여주기보다, 사용자가 단계적으로 이해하도록 정보 단위를 분리했습니다." }
      ]
    },

    interaction: {
      headline: "움직임은 ‘멋’이 아니라 ‘피드백’",
      keywords: ["Feedback", "Purpose", "Restraint"],
      blocks: [
        { k: "기준", v: "애니메이션은 사용자의 행동에 대한 피드백이 필요할 때만 사용합니다." },
        { k: "Skills", v: "빠른 인지가 중요해서 CSS hover 중심으로 가볍게 처리합니다." },
        { k: "Intro/Clone", v: "흐름 전달이 중요해서 GSAP을 절제해서 사용합니다(등장/전환 중심)." }
      ]
    },

    structure: {
      headline: "확장 가능한 구조를 먼저 잡기",
      keywords: ["Reusable", "Scalable", "Predictable"],
      blocks: [
        { k: "Routing", v: "URL과 페이지 구조를 일관되게 설계해 사용자가 현재 위치를 쉽게 알 수 있게 했습니다." },
        { k: "Data", v: "프로젝트 정보는 JSON 기반으로 관리해 카드/리스트를 반복 생성 가능하게 했습니다." },
        { k: "Components", v: "공통 컴포넌트(common)와 페이지 전용 컴포넌트를 분리해 유지보수를 쉽게 했습니다." }
      ]
    },

    values: {
      headline: "끝까지 마무리하는 개발",
      keywords: ["Responsibility", "Context", "Finish"],
      blocks: [
        { k: "책임감", v: "‘일단 되게 만들기’보다, 디테일까지 책임지고 마무리하는 과정을 중요하게 생각합니다." },
        { k: "맥락", v: "기획 의도를 이해하고 UI로 풀어내는 것을 좋아합니다." },
        { k: "성장", v: "프로젝트마다 회고(배운 점/개선 계획)를 남겨 다음 선택의 기준으로 삼습니다." }
      ]
    }
  };

  const data = content[active];

  const toggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="about-page">
      <header className="about-page__header">
        <h2 className="about-page__title"># About</h2>
        <p className="about-page__desc">
          이 페이지는 ‘저를 소개’하기보다, 이 포트폴리오가 어떤 기준으로 설계되었는지 설명하는 공간입니다.
        </p>
      </header>

      <div className="about-layout">
        {/* LEFT: file tree */}
        <aside className="about-nav">
          <p className="about-nav__label">ABOUT/</p>

          <div className="about-nav__list">
            {sections.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`about-nav__item ${active === s.id ? "is-active" : ""}`}
                onClick={() => setActive(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </aside>

        {/* RIGHT: content */}
        <main className="about-panel">
          <div className="about-panel__top">
            <p className="about-panel__file">{sections.find((x) => x.id === active)?.label}</p>
            <h3 className="about-panel__title">{data.title || sections.find((x) => x.id === active)?.title}</h3>
            <p className="about-panel__headline">{data.headline}</p>

            <div className="about-keywords">
              {data.keywords.map((k) => (
                <span key={k} className="about-keywords__chip">
                  {k}
                </span>
              ))}
            </div>
          </div>

          <div className="about-accordion">
            {data.blocks.map((b) => (
              <div key={b.k} className="about-item">
                <button
                  type="button"
                  className="about-item__head"
                  onClick={() => toggle(`${active}-${b.k}`)}
                >
                  <span className="about-item__dot">•</span>
                  <span className="about-item__key">{b.k}</span>
                  <span className="about-item__chev">{open[`${active}-${b.k}`] ? "–" : "+"}</span>
                </button>

                {open[`${active}-${b.k}`] ? (
                  <div className="about-item__body">
                    <p className="about-item__text">{b.v}</p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
}
