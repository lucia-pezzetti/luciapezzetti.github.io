import { Footer, SectionBanner, SiteHeader } from "../components/SiteChrome";
import ResearchProjects from "./ResearchProjects";

export const metadata = {
  title: "Research | Lucia Pezzetti",
  description: "Research by Lucia Pezzetti.",
};

export default function Research() {
  return (
    <div className="page-shell">
      <SiteHeader active="research" />
      <main className="page-content">
        <section className="section-panel">
          <SectionBanner>Research</SectionBanner>
          <ResearchProjects />
        </section>
      </main>
      <Footer />
    </div>
  );
}
