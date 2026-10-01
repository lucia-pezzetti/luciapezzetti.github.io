import { Footer, NewsList, SectionBanner, SiteHeader } from "../components/SiteChrome";

export const metadata = {
  title: "News | Lucia Pezzetti",
  description: "Latest news and updates from Lucia Pezzetti.",
};

export default function News() {
  return (
    <div className="page-shell">
      <SiteHeader active="news" />
      <main className="page-content">
        <section className="section-panel">
          <SectionBanner>News</SectionBanner>
          <NewsList />
        </section>
      </main>
      <Footer />
    </div>
  );
}
