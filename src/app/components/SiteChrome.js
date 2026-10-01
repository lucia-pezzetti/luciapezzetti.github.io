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

export function SiteHeader({ active }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [drink, setDrink] = useState(null);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      setDrink({ icon: "☕", label: "Cappuccino time" });
    } else if (hour >= 12 && hour < 18) {
      setDrink({ icon: "☕", label: "Espresso time" });
    } else {
      setDrink({ icon: "🍵", label: "Fruit tea time" });
    }
  }, []);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem("color-theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <header className="site-header">
      <div className="site-nav-wrap">
        {drink && (
          <div className="time-drink" title={drink.label} aria-label={drink.label}>
            <span aria-hidden="true">{drink.icon}</span>
            <span>{drink.label}</span>
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
        <div className="site-header-actions">
          <button
            type="button"
            className="theme-toggle"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            aria-pressed={theme === "dark"}
            onClick={toggleTheme}
          >
            <i
              className={theme === "dark" ? "fas fa-sun" : "fas fa-moon"}
              aria-hidden="true"
            />
            <span>{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
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
