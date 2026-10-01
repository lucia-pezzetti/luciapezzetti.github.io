import { Footer, SectionBanner, SiteHeader } from "../components/SiteChrome";

export const metadata = {
  title: "Teaching and Student Supervisions | Lucia Pezzetti",
  description: "Student projects and teaching opportunities with Lucia Pezzetti.",
};

const teachingCourses = [
  {
    course: "Signals and Systems II",
    instructor: "Prof. Dr. John Lygeros",
    institution: "ETH Zürich",
    term: "Spring 2025",
  },
  {
    course: "Reinforcement Learning",
    instructor: "Prof. Dr. Giorgia Ramponi",
    institution: "UZH",
    term: (
      <>
        Autumn 2025
        <br />
        Autumn 2026
      </>
    ),
  },
  {
    course: "Signals and Systems II",
    instructor: "Prof. Dr. Florian Dörfler",
    institution: "ETH Zürich",
    term: "Spring 2026",
  },
];

const studentProjects = [
  {
    title: "Optimal Transport for Learning to Schedule GPU Clusters",
    student: "TBD",
    type: "Semester project",
  },
  {
    title:
      "Optimal data curation for self-consuming generative models: a Gaussian analysis",
    student: "Jason Paul Mino Garcia",
    type: "Master’s thesis",
    cosupervisor: "Zhiyu He",
  },
  {
    title: "Risk-Sensitive Separation for Fleet Control",
    student: "Arthur Speich",
    type: "Semester project",
  },
  {
    title: "Stackelberg mean field games for urban planning",
    student: "Kristijan Bundaleski",
    type: "Master’s thesis",
    cosupervisor: "Paul Friedrich",
  },
  {
    title: "Self-supervised parallel manipulation learning via disagreement",
    student: "Tim Lücking",
    type: "Master’s thesis",
    cosupervisor: "Alessio Rimoldi",
  },
];

export default function Teaching() {
  return (
    <div className="page-shell">
      <SiteHeader active="teaching" />
      <main className="page-content">
        <section className="section-panel">
          <SectionBanner>Teaching and Student Supervisions</SectionBanner>
          <div className="teaching-content">
            <section>
              <h2 className="subsection-title">
                Teaching Assistantships
              </h2>
              <div className="teaching-course-list">
                {teachingCourses.map((course) => (
                  <article
                    className="teaching-course-card"
                    key={`${course.course}-${course.term}`}
                  >
                    <div className="teaching-course-details">
                      <div>
                        <h3>{course.course}</h3>
                        <p>
                          {course.instructor} · {course.institution}
                        </p>
                      </div>
                      <span className="teaching-course-term">
                        {course.term}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <div className="teaching-supervision">
              <h2 className="subsection-title">Student Supervisions</h2>
            </div>
            <div className="supervision-callout">
              <p>
                I am always looking for motivated students with interests in the
                area of multi-agent systems, reinforcement learning, mean field
                games, optimal control, and related topics.
              </p>
              <p>
                To apply, send me an email with your CV, transcript of records,
                and a short description of your interests.
              </p>
            </div>
            <div className="student-projects">
              <div className="student-project-grid">
                {studentProjects.map((project) => (
                  <article className="student-project-card" key={project.title}>
                    <h3>{project.title}</h3>
                    <p className="student-project-meta">
                      <strong>{project.student}</strong> · {project.type}
                      {project.cosupervisor && ` · with ${project.cosupervisor}`}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
