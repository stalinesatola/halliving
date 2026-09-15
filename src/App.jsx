import { useState } from "react";
import { translations, contact } from "./i18n";
import "./App.css";

function App() {
  const [lang, setLang] = useState("pt");
  const t = translations[lang];

  return (
    <div className="page">
      <div className="glow" aria-hidden="true" />

      <header className="topbar">
        <div className="wordmark">
          Hal<span className="wordmark-accent">living</span>
        </div>
        <div className="lang-switch" role="group" aria-label="Language">
          <button
            type="button"
            className={lang === "pt" ? "lang-btn active" : "lang-btn"}
            onClick={() => setLang("pt")}
            aria-pressed={lang === "pt"}
          >
            PT
          </button>
          <button
            type="button"
            className={lang === "en" ? "lang-btn active" : "lang-btn"}
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
          >
            EN
          </button>
        </div>
      </header>

      <main className="card">
        <span className="badge">{t.badge}</span>
        <h1 className="heading">{t.heading}</h1>
        <p className="tagline">{t.tagline}</p>
        <p className="body">{t.body}</p>

        <dl className="contact">
          <div className="contact-row">
            <dt>{t.addressLabel}</dt>
            <dd>{contact.address}</dd>
          </div>
          <div className="contact-row">
            <dt>{t.phoneLabel}</dt>
            <dd>
              <a href={`tel:+${contact.phone}`}>{contact.phone}</a>
            </dd>
          </div>
        </dl>
      </main>

      <footer className="footer">
        <span>&copy; {new Date().getFullYear()} Halliving. {t.footer}</span>
      </footer>
    </div>
  );
}

export default App;
