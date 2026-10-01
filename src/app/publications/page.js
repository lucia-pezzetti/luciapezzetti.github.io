import {
  Footer,
  PublicationsList,
  SectionBanner,
  SiteHeader,
} from "../components/SiteChrome";

export const metadata = {
  title: "Publications | Lucia Pezzetti",
  description: "Publications by Lucia Pezzetti.",
};

export default function Publications() {
  return (
    <div className="page-shell">
      <SiteHeader active="publications" />
      <main className="page-content">
        <section className="section-panel">
          <SectionBanner>Publications</SectionBanner>
          <PublicationsList />
        </section>
      </main>
      <Footer />
    </div>
  );
}
