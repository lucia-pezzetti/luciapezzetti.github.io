import { Footer, SectionBanner, SiteHeader } from "../components/SiteChrome";
import Image from "next/image";

const CVPage = () => {
  return (
    <div className="page-shell cv-page-shell">
      <SiteHeader active="cv" />

      <main className="page-content">
        <section className="section-panel" style={{ padding: 0, textAlign: 'left' }}>
          <SectionBanner>CV</SectionBanner>
          <div className="mt-4" style={{ padding: '20px' }}>
            <h2 className="text-3xl font-bold mb-2" style={{ color: '#3a2d28' }}>Lucia Pezzetti</h2>
            <p className="text-gray-600 text-lg">
              PhD at ETH AI Center | Multi-Agent Reinforcement Learning | Mean Field Games | Optimal Transport
            </p>
          </div>
        </section>

        <div className="mt-10" style={{ backgroundColor: '#f4e6d7', padding: '20px', textAlign: 'left'}}>
          <h2 className="text-2xl font-bold text-gray-800">Education</h2>
        </div>
        <div className="mt-4 flex flex-col gap-6" style={{ padding: '20px' }}>
          <div className="flex items-center gap-6">
            <Image src="/eth-logo.png" alt="ETH Zurich Logo" width={96} height={96} className="w-24 h-auto" />
            <Image src="/aicenter-logo.png" alt="ETH AI Center Logo" width={96} height={96} className="w-24 h-auto" />
            <div className="text-gray-700">
              <p>In September 2024 I started my Ph.D. in Computer Science at ETH Zurich as an ETH AI Center Fellow, advised by Prof. Florian Dörfler and Prof. Giorgia Ramponi.</p>
              <p>My research focuses on scalable decision-making for multi-agent systems, using tools from reinforcement learning, mean field models, optimal transport, and data-driven control.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-6">
              <Image src="/unito-logo.png" alt="University of Torino Logo" width={96} height={96} className="w-24 h-auto" />
              <Image src="/cca-logo.png" alt="Collegio Carlo Alberto Logo" width={96} height={96} className="w-24 h-auto" />
              <div className="text-gray-700">
                <p>Before that, I received my M.Sc. degree in Stochastic and Data Science from the University of Torino in 2024 with a focus in Statistical Machine Learning.</p>
                <p>Simultaneously, I was awarded a two-year full scholarship at Collegio Carlo Alberto, from which I received a Master of Arts in Applied Mathematics, Statistics and Economics in 2024.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3"></div> {/* Empty space for alignment */}
              <Image src="/uzh-logo.svg.png" alt="University of Zurich Logo" width={176} height={96} className="w-44 h-auto" />
              <div className="w-3"></div> {/* Empty space for alignment */}
              <div className="text-gray-700">
                <p>During my studies, I was a visiting student at the University of Zurich.</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
          <div className="w-6"></div> {/* Empty space for alignment */}
            <Image src="/unimi-logo.png" alt="University of Milan Logo" width={144} height={96} className="w-36 h-auto" />
            <div className="w-8"></div> {/* Empty space for alignment */}
            <div className="text-gray-700">
              <p>I received my B.Sc. in Mathematics from the University of Milan in 2022.</p>
              <p>During my Bachelor, I was awarded a full three-year INDAM scholarship on the basis of a national test and academic performances.</p>
            </div>
          </div>
        </div>

        {/*
        <div className="mt-10" style={{ backgroundColor: '#f4e6d7', padding: '20px', textAlign: 'center'}}>
          <h2 className="text-2xl font-bold text-gray-800">Experience</h2>
        </div>
        */}

        <div className="mt-10" style={{ backgroundColor: '#f4e6d7', padding: '20px', textAlign: 'left'}}>
          <h2 className="text-2xl font-bold text-gray-800">Hobbies</h2>
        </div>
        <div className="mt-4" style={{ padding: '20px' }}>
          <Image
            src="/Hobbies_abstract_cropped.png"
            alt="Abstract illustration of outdoor hobbies"
            width={1200}
            height={600}
            className="w-full"
            style={{ display: 'block', height: 'auto' }}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CVPage;
