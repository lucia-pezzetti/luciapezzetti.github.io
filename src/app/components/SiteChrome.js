"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { newsItems, publications } from "../content";

const navLinks = [
  { href: "/", label: "Home", key: "about" },
  { href: "/publications", label: "Publications", key: "publications" },
  { href: "/news", label: "News", key: "news" },
  { href: "/research", label: "Research", key: "research" },
  { href: "/teaching", label: "Teaching", key: "teaching" },
  { href: "/CV", label: "CV", key: "cv" },
];

const zurichTimeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Zurich",
  weekday: "short",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

function getZurichStatus(date) {
  const parts = Object.fromEntries(
    zurichTimeFormatter
      .formatToParts(date)
      .filter(({ type }) => type !== "literal")
      .map(({ type, value }) => [type, value]),
  );
  const hour = Number(parts.hour);
  const isBollicinaEvening =
    (hour >= 20 && ["Fri", "Sat"].includes(parts.weekday)) ||
    (hour < 1 && ["Sat", "Sun"].includes(parts.weekday));

  let moment;

  if (hour >= 1 && hour < 8) {
    moment = { icon: "😴", label: "zzz..." };
  } else if (hour >= 8 && hour < 12) {
    moment = { icon: "☕", label: "Cappuccino time" };
  } else if (hour >= 12 && hour < 18) {
    moment = { icon: "☕", label: "Espresso time" };
  } else if (hour >= 18 && hour < 20) {
    moment = { icon: "🍹", label: "Spritz time" };
  } else if (isBollicinaEvening) {
    moment = { icon: "🥂", label: "Bollicina time" };
  } else {
    moment = { icon: "🍵", label: "Fruit tea time" };
  }

  return {
    ...moment,
    time: `${parts.hour}:${parts.minute}`,
  };
}

export function SiteHeader({ active }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [timeStatus, setTimeStatus] = useState(null);

  useEffect(() => {
    const updateTimeStatus = () => setTimeStatus(getZurichStatus(new Date()));
    updateTimeStatus();

    const timer = window.setInterval(updateTimeStatus, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <header className="site-header">
      <div className="site-nav-wrap">
        {timeStatus && (
          <div
            className="time-drink"
            title={`${timeStatus.time} in Zurich · ${timeStatus.label}`}
            aria-label={`CET time ${timeStatus.time}. ${timeStatus.label}`}
          >
            <span className="time-zone">CET time {timeStatus.time}</span>
            <span className="time-divider" aria-hidden="true">·</span>
            <span aria-hidden="true">{timeStatus.icon}</span>
            <span>{timeStatus.label}</span>
          </div>
        )}
        <nav
          id="primary-navigation"
          className={`site-nav ${menuOpen ? "site-nav-open" : ""}`}
          aria-label="Primary navigation"
        >
          <ul className="site-nav-list">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`site-nav-link ${
                    active === item.key ? "site-nav-link-active" : ""
                  }`}
                  aria-current={active === item.key ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <i className="fas fa-bars" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} Lucia Pezzetti. All rights reserved.</p>
    </footer>
  );
}

export function SectionBanner({ children }) {
  return (
    <div className="section-banner">
      <h1 className="section-banner-title">{children}</h1>
    </div>
  );
}

export function NewsList({ limit }) {
  const visibleItems = limit ? newsItems.slice(0, limit) : newsItems;

  return (
    <div className="news-list">
      {visibleItems.map((item) => (
        <article className="news-item" key={item.date}>
          <div className="news-date">{item.date}</div>
          <div className="news-content">{item.content}</div>
        </article>
      ))}
    </div>
  );
}

export function PublicationsList({ limit }) {
  const visiblePublications = limit ? publications.slice(0, limit) : publications;

  return (
    <div className="publications-list">
      {visiblePublications.map((publication) => {
        const publicationLinks = [
          { href: publication.pdfUrl, label: "PDF" },
          { href: publication.bibtexUrl, label: "BibTeX" },
        ].filter((link) => link.href);

        return (
          <article className="publication-item" key={publication.title}>
            <div className="publication-tag">{publication.tag}</div>
            <div className="publication-content">
              {publication.paperUrl ? (
                <a
                  href={publication.paperUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="publication-title hover-link"
                >
                  {publication.title}
                </a>
              ) : (
                <span className="publication-title">{publication.title}</span>
              )}
              <div className="publication-authors">{publication.authors}</div>
              <div className="publication-venue">{publication.venue}</div>
              {publicationLinks.length > 0 && (
                <div className="publication-actions">
                  {publicationLinks.map((link) => (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="bibtex-button"
                      key={link.label}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function ViewAllLink({ href, children }) {
  return (
    <div className="view-all-link">
      <Link href={href}>{children}</Link>
    </div>
  );
}
