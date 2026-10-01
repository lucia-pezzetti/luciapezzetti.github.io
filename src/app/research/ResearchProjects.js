"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, publications } from "../content";
import MathFormula from "../components/MathFormula";

function RichMathText({ parts }) {
  return parts.map((part, index) =>
    typeof part === "string" ? (
      part
    ) : (
      <MathFormula key={`${part.latex}-${index}`} label={part.label}>
        {part.latex}
      </MathFormula>
    )
  );
}

function BoundedLPStory({ content }) {
  return (
    <div className="learn-more-panel learn-more-story bounded-story">
      <section className="bounded-opening">
        <div className="bounded-opening-copy">
          <p className="learn-more-eyebrow">{content.eyebrow}</p>
          <p className="learn-more-lead">{content.lead}</p>
        </div>
        <div className="bounded-opening-visual" aria-label="The boundedness problem">
          <div className="bounded-visual-node">
            <span>observed data</span>
            <MathFormula label="state action transition and cost samples">
              {String.raw`(x_i,u_i,x_i^+,\ell_i)`}
            </MathFormula>
          </div>
          <span className="bounded-visual-arrow" aria-hidden="true">→</span>
          <div className="bounded-visual-node">
            <span>sampled Bellman LP</span>
            <MathFormula label="Phi transpose alpha is less than or equal to ell">
              {String.raw`\Phi^\top\alpha\leq\ell`}
            </MathFormula>
          </div>
          <span className="bounded-visual-arrow" aria-hidden="true">→</span>
          <div className="bounded-visual-node bounded-visual-question">
            <span>finite optimum?</span>
            <strong>objective geometry decides</strong>
          </div>
        </div>
      </section>

      <section className="story-process bounded-process">
        <div className="learn-more-subheading story-section-heading">
          <span>From transitions to a controller</span>
          <h3>A four-step data-driven construction</h3>
        </div>
        <div className="learn-more-method" aria-label="Moment-matching workflow">
          {content.methodSteps.map((step, index) => (
            <div className="learn-more-step" key={step.title}>
              <span className="learn-more-step-number">0{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <MathFormula className="bounded-step-formula" label={step.formulaAlt}>
                  {step.formula}
                </MathFormula>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="learn-more-foundations story-foundations bounded-foundations">
        <div className="learn-more-subheading story-section-heading">
          <span>Why the sampled LP can fail</span>
          <h3>Feasibility does not guarantee a finite solution</h3>
        </div>
        <div className="foundation-grid">
          {content.foundations.map((foundation) => (
            <article className="foundation-card" key={foundation.title}>
              <span className="foundation-symbol" aria-hidden="true">
                {foundation.symbolLatex ? (
                  <MathFormula label={foundation.symbolAlt}>
                    {foundation.symbolLatex}
                  </MathFormula>
                ) : (
                  foundation.symbol
                )}
              </span>
              <h4>{foundation.title}</h4>
              <p>{foundation.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="story-proof bounded-proof">
        <aside className="separation-callout">
          <div className="separation-callout-label">Boundedness characterization</div>
          <MathFormula
            display
            className="separation-formula bounded-theorem-formula"
            label={content.theorem.formulaAlt}
          >
            {content.theorem.formula}
          </MathFormula>
          <p>
            <RichMathText parts={content.theorem.explanation} />
          </p>
          <div className="separation-cases">
            {content.theorem.cases.map((item) => (
              <span key={item.label}>
                <strong>{item.label}</strong> {item.description}
              </span>
            ))}
          </div>
        </aside>
      </section>

      <section className="bounded-results">
        <div className="learn-more-subheading story-section-heading bounded-results-heading">
          <span>Experimental evidence</span>
          <h3>Finite solutions that still control well</h3>
        </div>
        <div className="bounded-results-grid">
          {content.results.map((result) => (
            <figure className="bounded-result-card" key={result.title}>
              <div className="bounded-result-title">{result.title}</div>
              <Image
                src={result.image}
                alt={result.imageAlt}
                width={result.imageWidth}
                height={result.imageHeight}
              />
              <figcaption>{result.caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="learn-more-highlights" aria-label="Selected results">
          {content.highlights.map((highlight) => (
            <div className="learn-more-highlight" key={highlight.value}>
              <strong>{highlight.value}</strong>
              <span>{highlight.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function RelatedPublications({ titles }) {
  const related = publications.filter((publication) =>
    titles.includes(publication.title)
  );

  return (
    <div className="related-publications">
      {related.map((publication) => (
        <article key={publication.title} className="related-publication">
          <h3>{publication.title}</h3>
          <p className="related-publication-authors">{publication.authors}</p>
          <p className="related-publication-venue">{publication.venue}</p>
          {publication.pdfUrl && (
            <a
              className="text-link"
              href={publication.pdfUrl}
              target="_blank"
              rel="noreferrer"
            >
              Read paper <span aria-hidden="true">→</span>
            </a>
          )}
        </article>
      ))}
    </div>
  );
}

function LearnMoreContent({ content }) {
  if (content.storyType === "bounded-lp") {
    return <BoundedLPStory content={content} />;
  }

  if (content.featureMedia) {
    return (
      <div className="learn-more-panel learn-more-story">
        <section className="story-opening">
          <div className="story-opening-copy">
            <p className="learn-more-eyebrow">{content.eyebrow}</p>
            <p className="learn-more-lead">{content.lead}</p>
          </div>
          <figure className="learn-more-figure story-opening-figure">
            <Image
              src={content.image}
              alt={content.imageAlt}
              width={content.imageWidth}
              height={content.imageHeight}
              className="learn-more-image"
            />
            <figcaption>{content.imageCaption}</figcaption>
          </figure>
        </section>

        <section className="story-process" aria-labelledby="salt-process-title">
          <div className="learn-more-subheading story-section-heading">
            <span>From one agent to a fleet</span>
            <h3 id="salt-process-title">How SALT turns structure into an algorithm</h3>
          </div>
          <div className="learn-more-method" aria-label="How SALT works">
            {content.methodSteps.map((step, index) => (
              <div className="learn-more-step" key={step.title}>
                <span className="learn-more-step-number">0{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="learn-more-foundations story-foundations">
          <div className="learn-more-subheading story-section-heading">
            <span>Why separation is possible</span>
            <h3>The problem has just enough structure</h3>
          </div>
          <div className="foundation-grid">
            {content.foundations.map((foundation) => (
              <article className="foundation-card" key={foundation.title}>
                <span className="foundation-symbol" aria-hidden="true">
                  {foundation.symbolLatex ? (
                    <MathFormula label={foundation.symbolAlt}>
                      {foundation.symbolLatex}
                    </MathFormula>
                  ) : (
                    foundation.symbol
                  )}
                </span>
                <h4>{foundation.title}</h4>
                <p>{foundation.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="story-proof">
          <aside className="separation-callout">
            <div className="separation-callout-label">Separation principle</div>
            <MathFormula
              display
              className="separation-formula"
              label={content.theorem.formulaAlt}
            >
              {content.theorem.formula}
            </MathFormula>
            <p>
              <RichMathText parts={content.theorem.explanation} />
            </p>
            <div className="separation-cases">
              {content.theorem.cases.map((item) => (
                <span key={item.label}>
                  <strong>{item.label}</strong> {item.description}
                </span>
              ))}
            </div>
          </aside>
        </section>

        <section className="story-applications">
          <div className="learn-more-subheading story-section-heading">
            <span>{content.applications.eyebrow}</span>
            <h3>{content.applications.title}</h3>
          </div>
          <div className="application-case-study">
            <figure className="application-map">
              <Image
                src={content.applications.main.image}
                alt={content.applications.main.imageAlt}
                width={content.applications.main.imageWidth}
                height={content.applications.main.imageHeight}
              />
              <figcaption>Learned vehicle routes on the South Manhattan road network.</figcaption>
            </figure>
            <div className="application-case-copy">
              <p className="application-kicker">Main case study</p>
              <h4>{content.applications.main.title}</h4>
              <p className="application-description">
                {content.applications.main.description}
              </p>
              <div className="application-steps">
                {content.applications.main.steps.map((step, index) => (
                  <div className="application-step" key={step.title}>
                    <span>{index + 1}</span>
                    <div>
                      <h5>{step.title}</h5>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="application-facts" aria-label="Case study scale">
                {content.applications.main.facts.map((fact) => (
                  <span key={fact}>{fact}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="application-more">
            <div className="application-more-heading">
              <span>More generally</span>
              <div aria-hidden="true" />
            </div>
            <div className="application-grid">
              {content.applications.additional.map((application) => (
                <article className="application-card" key={application.title}>
                  <Image
                    src={application.image}
                    alt={application.imageAlt}
                    width={640}
                    height={640}
                  />
                  <h4>{application.title}</h4>
                  <p>{application.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="story-results">
          <div className="learn-more-subheading story-section-heading results-heading">
            <span>Empirical results</span>
            <h3>One learner, fleets of different sizes</h3>
          </div>
          <div className="results-main">
            <figure className="learn-more-video-figure story-video">
              <video controls preload="metadata" poster={content.videoPoster}>
                <source src={content.video} type="video/mp4" />
                Your browser does not support the video element.
              </video>
              <figcaption>
                SALT coordinating vehicles on the time-varying South Manhattan
                road network.
              </figcaption>
            </figure>
            <div className="results-summary">
              <p>{content.paragraphs[0]}</p>
            </div>
          </div>
          <div className="learn-more-highlights" aria-label="Selected results">
            {content.highlights.map((highlight) => (
              <div className="learn-more-highlight" key={highlight.value}>
                <strong>{highlight.value}</strong>
                <span>{highlight.label}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="learn-more-panel">
      <div className="learn-more-copy">
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="learn-more-media">
        <figure className="learn-more-figure">
          <Image
            src={content.image}
            alt={content.imageAlt}
            width={content.imageWidth || 1105}
            height={content.imageHeight || 1430}
            className="learn-more-image"
          />
          {content.imageCaption && (
            <figcaption>{content.imageCaption}</figcaption>
          )}
        </figure>
        {content.video && (
          <figure className="learn-more-video-figure">
            <video controls preload="metadata" poster={content.videoPoster}>
              <source src={content.video} type="video/mp4" />
              Your browser does not support the video element.
            </video>
            <figcaption>
              SALT coordinating vehicles on the time-varying South Manhattan
              road network.
            </figcaption>
          </figure>
        )}
      </div>
    </div>
  );
}

export default function ResearchProjects() {
  const [openProject, setOpenProject] = useState(null);
  const [openLearnMore, setOpenLearnMore] = useState(null);

  return (
    <div className="project-list">
      {projects.map((project, index) => {
        const projectId = `research-project-${index}`;
        const isOpen = openProject === projectId;

        return (
          <article
            className={`project-feature ${
              index % 2 === 1 ? "project-feature-image-left" : ""
            }`}
            key={project.title}
          >
            <div className="project-copy">
              <p className="project-topic">{project.topic}</p>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-keywords" aria-label="Research keywords">
                {project.keywords.map((keyword) => (
                  <span key={keyword}>{keyword}</span>
                ))}
              </div>
              <div className="project-actions">
                {project.learnMore && (
                  <button
                    type="button"
                    className="project-expand-button learn-more-button"
                    aria-expanded={openLearnMore === projectId}
                    aria-controls={`${projectId}-learn-more`}
                    onClick={() =>
                      setOpenLearnMore(
                        openLearnMore === projectId ? null : projectId
                      )
                    }
                  >
                    Learn more <span aria-hidden="true">↓</span>
                  </button>
                )}
                <button
                  type="button"
                  className="project-expand-button"
                  aria-expanded={isOpen}
                  aria-controls={projectId}
                  onClick={() => setOpenProject(isOpen ? null : projectId)}
                >
                  View related publications <span aria-hidden="true">↓</span>
                </button>
              </div>
              <div
                id={projectId}
                className={`related-publications-wrap ${
                  isOpen ? "related-publications-open" : ""
                }`}
                aria-hidden={!isOpen}
              >
                  <RelatedPublications titles={project.relatedPublications} />
              </div>
            </div>
            <div className="project-image-panel">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 760px) 100vw, 42vw"
                className="project-image"
              />
            </div>
            {project.learnMore && (
              <div
                id={`${projectId}-learn-more`}
                className={`learn-more-wrap ${
                  openLearnMore === projectId ? "learn-more-open" : ""
                }`}
                aria-hidden={openLearnMore !== projectId}
                inert={openLearnMore !== projectId}
              >
                <LearnMoreContent content={project.learnMore} />
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
