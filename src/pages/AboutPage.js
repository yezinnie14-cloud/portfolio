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
      headline: "한 줄 내용",
      keywords: ["keyword", "2", "3"],
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
        { k: "Color", v: "차분한 톤을 중심으로, 포인트는 필요한 순간에만 사용합니다." },
        { k: "Typography", v: "가독성을 최우선으로 제목/본문 위계를 명확히 나눴습니다." },
        { k: "Layout", v: "정보를 한 번에 보여주지 않고 단계적으로 노출합니다." }
      ]
    },

    interaction: {
      headline: "움직임은 ‘멋’이 아니라 ‘피드백’",
      keywords: ["Feedback", "Purpose", "Restraint"],
      blocks: [
        { k: "기준", v: "행동에 대한 피드백이 필요할 때만 애니메이션을 사용합니다." },
        { k: "Skills", v: "CSS hover 위주로 빠르게 인지되도록 설계했습니다." },
        { k: "Intro", v: "GSAP은 등장/전환 등 핵심 흐름에만 사용했습니다." }
      ]
    },

    structure: {
      headline: "확장 가능한 구조",
      keywords: ["Reusable", "Scalable", "Predictable"],
      blocks: [
        { k: "Routing", v: "URL과 페이지 구조를 일관되게 설계했습니다." },
        { k: "Data", v: "JSON 기반으로 프로젝트 데이터를 관리합니다." },
        { k: "Components", v: "공통/전용 컴포넌트를 명확히 분리했습니다." }
      ]
    },

    values: {
      headline: "끝까지 마무리하는 개발",
      keywords: ["Responsibility", "Context", "Finish"],
      blocks: [
        { k: "책임감", v: "디테일까지 책임지고 마무리합니다." },
        { k: "맥락", v: "기획 의도를 이해하고 UI로 풀어냅니다." },
        { k: "성장", v: "회고를 통해 다음 선택의 기준을 만듭니다." }
      ]
    }
  };

  const data = content[active];

  const toggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="about">
      <header className="about-header">
        <h2 className="about-title"># About</h2>
        <p className="about-desc">
          이 페이지는 저를 소개하기보다, 이 포트폴리오가 어떤 기준으로 설계되었는지를 설명합니다.
        </p>
      </header>

      <div className="about-layout">
        {/* LEFT */}
        <aside className="about-nav">
          <p className="nav-label">ABOUT/</p>

          <div className="nav-list">
            {sections.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`nav-item ${active === s.id ? "active" : ""}`}
                onClick={() => setActive(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </aside>

        {/* RIGHT */}
        <main className="about-content">
          <div className="content-top">
            <p className="content-file">
              {sections.find((x) => x.id === active)?.label}
            </p>

            <h3 className="content-title">
              {sections.find((x) => x.id === active)?.title}
            </h3>

            <p className="content-headline">{data.headline}</p>

            <div className="keyword-list">
              {data.keywords.map((k) => (
                <span key={k} className="keyword">
                  {k}
                </span>
              ))}
            </div>
          </div>

          <div className="accordion">
            {data.blocks.map((b) => {
              const key = `${active}-${b.k}`;
              return (
                <div key={key} className="accordion-item">
                  <button
                    type="button"
                    className="accordion-head"
                    onClick={() => toggle(key)}
                  >
                    <span className="dot">•</span>
                    <span className="item-key">{b.k}</span>
                    <span className="chevron">
                      {open[key] ? "–" : "+"}
                    </span>
                  </button>

                  {open[key] && (
                    <div className="accordion-body">
                      <p className="item-text">{b.v}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </section>
  );
}
