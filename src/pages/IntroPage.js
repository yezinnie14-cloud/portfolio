// // src/pages/IntroPage.js
// import "./IntroPage.scss";
// import { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { gsap } from "gsap";

// // ✅ 이미지/아이콘은 import로 연결하는 게 가장 안전함
// // 네가 준 이미지 파일을 src/assets/images/intro/intro-bg.png 같은 곳에 넣었다고 가정
// import introBg from "../assets/images/Intro/intro.png";
// import vscodeIcon from "../assets/images/Icons/vs.png"; // svg든 png든 OK

// export default function IntroPage() {
//   const navigate = useNavigate();

//   const rootRef = useRef(null);
//   const iconRef = useRef(null);
//   const glowRef = useRef(null);
//   const tlRef = useRef(null);
//   const hasNavigatedRef = useRef(false);

//   const goReadme = () => {
//     if (hasNavigatedRef.current) return;
//     hasNavigatedRef.current = true;

//     // ✅ 애니메이션 끝나고 이동
//     tlRef.current = gsap
//       .timeline({
//         defaults: { ease: "power2.out" },
//         onComplete: () => navigate("/"),
//       })
//       .to(glowRef.current, { opacity: 0.0, duration: 0.25 }, 0)
//       .to(iconRef.current, { scale: 0.92, duration: 0.18 }, 0)
//       .to(iconRef.current, { scale: 6.5, opacity: 0, duration: 0.65 }, 0.18)
//       .to(rootRef.current, { filter: "blur(10px)", opacity: 0, duration: 0.55 }, 0.2);
//   };

//   useEffect(() => {
//     const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//     // 인트로 등장 애니메이션
//     if (!reduce) {
//       gsap.fromTo(
//         rootRef.current,
//         { opacity: 0, filter: "blur(8px)" },
//         { opacity: 1, filter: "blur(0px)", duration: 0.7, ease: "power2.out" }
//       );

//       gsap.fromTo(
//         iconRef.current,
//         { y: 10, scale: 0.95, opacity: 0 },
//         { y: 0, scale: 1, opacity: 1, duration: 0.55, delay: 0.2, ease: "power2.out" }
//       );

//       // 은은한 펄스
//       gsap.to(glowRef.current, {
//         opacity: 0.75,
//         duration: 1.2,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//       });

//       gsap.to(iconRef.current, {
//         y: -4,
//         duration: 1.4,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//         delay: 0.4,
//       });
//     } else {
//       gsap.set(rootRef.current, { opacity: 1, filter: "none" });
//       gsap.set(iconRef.current, { opacity: 1 });
//       gsap.set(glowRef.current, { opacity: 0.4 });
//     }

//     // ✅ 자동 이동 타이머 (예: 2.4초)
//     const timer = setTimeout(() => {
//       goReadme();
//     }, 2400);

//     return () => {
//       clearTimeout(timer);
//       if (tlRef.current) tlRef.current.kill();
//     };
//   }, []);

//   return (
//     <main className="intro" ref={rootRef}>
//       <div className="intro__bg" aria-hidden>
//         <img className="intro__bgImg" src={introBg} alt="" />
//       </div>

//       <div className="intro__overlay" aria-hidden />

//       <section className="intro__content">
//         <div className="intro__hint">
//           <p className="intro__line">Click the VS Code icon</p>
//           <p className="intro__sub">or wait a moment to start</p>
//         </div>

//         <button type="button" className="intro__iconBtn" onClick={goReadme} aria-label="Open portfolio">
//           <span className="intro__glow" ref={glowRef} aria-hidden />
//           <img ref={iconRef} className="intro__icon" src={vscodeIcon} alt="VS Code" />
//         </button>
//       </section>
//     </main>
//   );
// }
