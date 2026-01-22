import "./ContactPage.scss";

function ContactPage() {
  const onSubmit = (e) => {
    e.preventDefault();
    // 최소 버전: 실제 전송 대신 콘솔/알림만
    alert("메시지가 준비됐어요! (나중에 EmailJS 또는 API로 연결하면 됨)");
  };

  return (
    <section className="contact-page">
      <header className="contact-page__header">
        <h2 className="contact-page__title"># Contact</h2>
        <p className="contact-page__desc">
          환영합니다.
        </p>
      </header>

      <div className="contact-page__grid">
        {/* LEFT: FORM */}
        <div className="panel contact-form">
          <h3 className="panel__title">Send a Message</h3>

          <form className="form" onSubmit={onSubmit}>
            <label className="field">
              <span className="field__label">Name</span>
              <input className="field__input" type="text" placeholder="Your name" />
            </label>

            <label className="field">
              <span className="field__label">Email</span>
              <input
                className="field__input"
                type="email"
                placeholder="your.email@example.com"
              />
            </label>

            <label className="field">
              <span className="field__label">Message</span>
              <textarea className="field__textarea" placeholder="Your message..." />
            </label>

            <button className="btn" type="submit">
              <span className="btn__icon">✈</span>
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT: LINKS + AVAILABILITY */}
        <div className="contact-right">
          <div className="panel contact-links">
            <h3 className="panel__title">Connect with Me</h3>

            <a className="link-row" href="mailto:yezinnie14@gmail.com">
              <span className="link-row__icon">✉</span>
              <span className="link-row__text">
                <span className="link-row__label">Email</span>
                <span className="link-row__value">yezinnie14@gmail.com</span>
              </span>
            </a>

            <a
              className="link-row"
              href="https://github.com/yezinnie14"
              target="_blank"
              rel="noreferrer"
            >
              <span className="link-row__icon">⌂</span>
              <span className="link-row__text">
                <span className="link-row__label">GitHub</span>
                <span className="link-row__value">github.com/yezinnie14</span>
              </span>
            </a>

            <a
              className="link-row"
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
            >
              <span className="link-row__icon">in</span>
              <span className="link-row__text">
                <span className="link-row__label">LinkedIn</span>
                <span className="link-row__value">linkedin.com/in/yourprofile</span>
              </span>
            </a>
          </div>

          <div className="panel availability">
            <div className="availability__badge">
              <span className="availability__dot" />
              Available for work
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM INFO */}
      <div className="contact-bottom">
        <div className="panel info-card">
          <div className="info-card__icon">⚡</div>
          <div className="info-card__text">
            <p className="info-card__title">Response Time</p>
            <p className="info-card__desc">Usually within 24 hours</p>
          </div>
        </div>

        <div className="panel info-card">
          <div className="info-card__icon">🌍</div>
          <div className="info-card__text">
            <p className="info-card__title">Location</p>
            <p className="info-card__desc">Seoul, South Korea (KST)</p>
          </div>
        </div>

        <div className="panel info-card">
          <div className="info-card__icon">💬</div>
          <div className="info-card__text">
            <p className="info-card__title">Languages</p>
            <p className="info-card__desc">Korean, English</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
