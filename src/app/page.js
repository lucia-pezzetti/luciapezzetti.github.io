import {
  Footer,
  NewsList,
  PublicationsList,
  SectionBanner,
  SiteHeader,
  ViewAllLink,
} from "./components/SiteChrome";
import Image from "next/image";

export const metadata = {
  title: "Lucia Pezzetti - Research & Publications",
  description:
    "Welcome to the personal website of Lucia Pezzetti. Explore research, publications, news, and more.",
};

export default function HomePage() {
  return (
    <div className="page-shell home-page-shell">
      <SiteHeader active="about" />

      <main className="page-content">
        <div className="home-hero">
          {/* Left Section */}
          <div
            className="home-profile-pane"
          >
            {/* Lifted Rectangle */}
            <div
              className="home-profile-card"
              style={{
                backgroundColor: 'var(--sand)',
                width: '350px',
                height: '500px',
                padding: '20px',
                borderRadius: '0px',
                boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                position: 'relative',
              }}
            >
            {/* Profile Photo */}
            <div
              style={{
                width: '200px',
                height: '200px',
                margin: '0 auto',
                marginBottom: '20px',
                marginTop: '20px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '1px solid var(--ink)',
              }}
            >
              <Image
                src="/ProfessionalPhoto.JPG"
                alt="Lucia Pezzetti"
                width={200}
                height={200}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Name and Role */}
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', margin: '10px 0', color: 'var(--ink)'}}>
              Lucia Pezzetti
            </h2>
            <hr className="horizontal-line" style={{width: '30%', margin: '10px auto', height: '3px', backgroundColor: '#709f9d', display: 'block'}}/>
            <p style={{ fontSize: '18px', color: 'var(--muted)', marginBottom: '10px' }}>
              PhD Student @ ETH AI Center
            </p>
            <p style={{ fontSize: '18px', color: '#709f9d', marginBottom: '50px' }}>
              Multi-Agent RL, Mean Field Games, Optimal Transport
            </p>

            {/* Social Media Icons */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '20px', 
              backgroundColor: 'var(--surface)', 
              padding: '10px', 
              width: '100%', 
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
            }}>
              <a aria-label="LinkedIn profile" href="https://www.linkedin.com/in/lucia-pezzetti-6aaa55157/" target="_blank" rel="noreferrer" style={{ color: 'var(--ink)' }}>
                <i className="fab fa-linkedin fa-2x icon" aria-hidden="true"></i>
              </a>
              <a aria-label="Google Scholar profile" href="https://scholar.google.com/scholar?q=Lucia+Pezzetti" target="_blank" rel="noreferrer" style={{ color: 'var(--ink)' }}>
                <i className="fas fa-graduation-cap fa-2x icon" aria-hidden="true"></i>
              </a>
              <a aria-label="GitHub profile" href="https://github.com/lucia-pezzetti" target="_blank" rel="noreferrer" style={{ color: 'var(--ink)' }}>
                <i className="fab fa-github fa-2x icon" aria-hidden="true"></i>
              </a>
              <a aria-label="Email Lucia Pezzetti" href="mailto:lucia.pezzetti@ai.ethz.ch" style={{ color: 'var(--ink)' }}>
                <i className="fas fa-envelope fa-2x icon" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right White Section */}
          <div
          className="home-intro-pane"
          style={{
            backgroundColor: 'var(--surface)',
          }}
          >

          {/* Introduction Section */}
          <div className="home-intro-copy" style={{ maxWidth: '600px', marginLeft: '0px' }}>
            <p style={{ fontSize: '18px', lineHeight: '1.6', color: 'var(--muted)' }}>
              Hi! I am a PhD student at <a href='https://ai.ethz.ch/' target='_blank' rel='noreferrer' className='hover-link'>ETH Zurich </a>
              and a Doctoral Fellow at the <a href='https://ai.ethz.ch/' target='_blank' rel="noreferrer" className='hover-link'>ETH AI Center</a> 
              . I am lucky to be advised by Prof. <a href='https://dorfler.ethz.ch/florian-dörfler' target='_blank' rel="noreferrer" className='hover-link'>Florian Dörfler </a> 
              (<a href='https://control.ee.ethz.ch' target='_blank' rel="noreferrer" className='hover-link'>Automatic Control Lab </a>) 
              and Prof. <a href='https://gioramponi.github.io' target='_blank' rel="noreferrer" className='hover-link'>Giorgia Ramponi </a>
              (<a href='https://www.ifi.uzh.ch/en/alpi.html' target='_blank' rel="noreferrer" className='hover-link'>Autonomous Learning and Predictive Intelligence Lab </a>).
              My PhD research focuses on scalable methods for coordinating large
              populations of agents, combining multi-agent reinforcement
              learning, mean field games, optimal transport, and data-driven
              optimal control, with applications in mobility and urban systems.
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.6', color: 'var(--muted)', marginTop: '15px'}}>
              Before starting my PhD, I completed my MSc Degree at the University of Torino focusing on principled sampling 
              methods for wide Bayesian Neural Networks under the supervision of Prof. <a href='http://sites.carloalberto.org/favaro/' target='_blank' rel='noreferrer' className='hover-link'>Stefano Favaro </a> 
              and Dr. <a href='https://stefanopeluchetti.com' target='_blank' rel='noreferrer' className='hover-link'> Stefano Peluchetti</a>.
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.6', color: 'var(--muted)', marginTop: '15px'}}>
              Most weekends, you’ll find me outdoors, on a bike, on a trail, or halfway up a via ferrata. I love exploring new places and appreciate good company along the way.
            </p>
            <hr className="horizontal-line" style={{width: '30%', margin: '10px auto', height: '3px', backgroundColor: '#709f9d', display: 'block'}}/>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
              <i className="fas fa-map-marker-alt" aria-hidden="true" style={{ fontSize: '24px', color: 'var(--ink)' }}></i>
              <span style={{ fontSize: '18px', color: 'var(--ink)' }}>
                ETH Zurich, Switzerland
              </span>
            </div>
            {/*<div style={{display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '20px', marginLeft: '-50px'}}>
              <a href="/publications" className="bg-[#A48374] text-white px-6 py-2 rounded-md shadow hover:bg-[#567d89]">
                Publications
              </a>
              <a href="/news" className="bg-[#A48374] text-white px-6 py-2 rounded-md shadow hover:bg-[#567d89]">
                News
              </a>
            </div>*/}
          </div>
        </div>
      </div>


        <section className="section-panel">
          <SectionBanner>News</SectionBanner>
          <NewsList limit={4} />
          <ViewAllLink href="/news">See all news</ViewAllLink>
        </section>

        {/* Recent Publications */}
        <section className="section-panel">
          <SectionBanner>Recent Publications</SectionBanner>
          <PublicationsList limit={2} />
          <ViewAllLink href="/publications">See all publications</ViewAllLink>
        </section>

      </main>

      <Footer />
    </div>
  );
}
