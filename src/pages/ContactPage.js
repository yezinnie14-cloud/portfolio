import "./ContactPage.scss";

function ContactPage() {
  const onSubmit = (e) => {
    e.preventDefault();
    alert("메시지가 준비됐어요! (나중에 EmailJS 또는 API로 연결)");
  };

  return (
    <section className="contact">
      <header className="contact-header">
        <h2 className="contact-title"># Contact</h2>
        <p className="contact-desc">환영합니다.</p>
      </header>

      <div className="contact-layout">
        {/* LEFT */}
        <div className="panel contact-form">
          <h3 className="panel-title">Send a Message</h3>

          <form className="form" onSubmit={onSubmit}>
            <label className="field">
              <span className="field-label">Name</span>
              <input className="field-input" type="text" placeholder="Your name" />
            </label>

            <label className="field">
              <span className="field-label">Email</span>
              <input
                className="field-input"
                type="email"
                placeholder="your.email@example.com"
              />
            </label>

            <label className="field">
              <span className="field-label">Message</span>
              <textarea
                className="field-textarea"
                placeholder="Your message..."
              />
            </label>

            <button className="btn" type="submit">
              <span className="btn-icon">✈</span>
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT */}
        <div className="contact-side">
          <div className="panel contact-links">
            <h3 className="panel-title">Connect with Me</h3>

            <a className="link-row" href="mailto:yezinnie14@gmail.com">
              <span className="link-icon">✉</span>
              <span className="link-text">
                <span className="link-label">Email</span>
                <span className="link-value">yezinnie14@gmail.com</span>
              </span>
            </a>

            <a
              className="link-row"
              href="https://github.com/yezinnie14"
              target="_blank"
              rel="noreferrer"
            >
              <span className="link-icon">⌂</span>
              <span className="link-text">
                <span className="link-label">GitHub</span>
                <span className="link-value">github.com/yezinnie14</span>
              </span>
            </a>

            <a
              className="link-row"
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
            >
              <span className="link-icon">in</span>
              <span className="link-text">
                <span className="link-label">LinkedIn</span>
                <span className="link-value">
                  linkedin.com/in/yourprofile
                </span>
              </span>
            </a>
          </div>

          <div className="panel availability">
            <div className="availability-badge">
              <span className="availability-dot" />
              Available for work
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="contact-bottom">
        <div className="panel info-card">
          <div className="info-icon">⚡</div>
          <div className="info-text">
            <p className="info-title">Response Time</p>
            <p className="info-desc">Usually within 24 hours</p>
          </div>
        </div>

        <div className="panel info-card">
          <div className="info-icon">🌍</div>
          <div className="info-text">
            <p className="info-title">Location</p>
            <p className="info-desc">Seoul, South Korea (KST)</p>
          </div>
        </div>

        <div className="panel info-card">
          <div className="info-icon">💬</div>
          <div className="info-text">
            <p className="info-title">Languages</p>
            <p className="info-desc">Korean, English</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
