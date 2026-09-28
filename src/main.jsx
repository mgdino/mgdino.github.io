import React from "react";
import { createRoot } from "react-dom/client";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Network,
  Rocket,
  ScrollText,
  Server,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    title: "Service Marketplace Platform",
    type: "Full-stack product",
    description:
      "A marketplace workflow for discovering services, booking schedules, managing pricing, and preparing a payment-ready architecture.",
    stack: ["Flutter", "Next.js", "Payload CMS", "MySQL"],
    featured: true,
  },
  {
    title: "ML Deployment Pipeline",
    type: "MLOps / DevOps",
    description:
      "A practical machine-learning deployment workflow bringing model packaging, containers, serving, and repeatable delivery together.",
    stack: ["Docker", "Nginx", "ML", "CI/CD"],
  },
  {
    title: "Printing Service API",
    type: "Backend engineering",
    description:
      "A Spring Boot API focused on clean service boundaries, persistence, validation, and maintainable backend architecture.",
    stack: ["Spring Boot", "Java", "REST", "SQL"],
  },
  {
    title: "PBA 4-Point Shot Sentiment Analysis",
    type: "Data + NLP",
    description:
      "A social-media analysis project combining public discussions with TF-IDF, topic modeling, and aspect-based sentiment analysis.",
    stack: ["Python", "NLP", "TF-IDF", "Topic Modeling"],
  },
  {
    title: "Pro Esports Analytics",
    type: "Data visualization",
    description:
      "An interactive analysis of professional esports data spanning 1998–2023, designed to turn historical records into readable insights.",
    stack: ["Tableau", "Data Analysis", "Visualization"],
  },

  {
    title: "Blockchain Social App",
    type: "Web3 / full-stack",
    description:
      "A social application experiment exploring decentralized identity and application flows through blockchain-oriented architecture.",
    stack: ["Web3", "React", "Backend APIs"],
  },
];

const experience = [
  {
    date: "2023",
    role: "iOS Developer Intern",
    org: "Ateneo Laboratory for Learning Sciences",
    details: [
      "Implemented iOS features in Swift based on an existing Android architecture.",
      "Supported usability testing with 20 participants.",
      "Contributed to an App Store release workflow.",
    ],
  },
  {
    date: "2023–2024",
    role: "Project Manager",
    org: "Google Developer Student Clubs — Loyola",
    details: [
      "Coordinated project teams, officers, and external collaborators.",
      "Worked across planning, delivery, communication, and sponsor-facing coordination.",
    ],
  },
  {
    date: "2023–2024",
    role: "Administrative Officer",
    org: "Ateneo Aegis",
    details: [
      "Handled organizational administration and coordination across student activities.",
    ],
  },
  {
    date: "2020",
    role: "Engineering Intern",
    org: "Parañaque City Hall",
    details: ["Worked with AutoCAD in an engineering-office environment."],
  },
];

const education = [
  {
    year: "2024–2025",
    title: "MS Computer Science",
    subtitle: "Ateneo de Manila University",
    tag: "Publication Award Recipient",
  },
  {
    year: "2020–2024",
    title: "BS Computer Science",
    subtitle: "Enterprise Systems specialization · Ateneo de Manila University",
    tag: "Enterprise Systems",
  },
];

const skills = {
  Languages: [
    "TypeScript",
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "C",
    "C#",
    "Ruby",
    "Swift",
    "PHP",
    "Dart",
  ],
  Frontend: [
    "React",
    "Next.js",
    "Vue.js",
    "Flutter",
    "Tailwind CSS",
    "SPA architecture",
  ],
  Backend: [
    "Node.js",
    "NestJS",
    "Express",
    ".NET Core",
    "Laravel",
    "Ruby on Rails",
    "Django",
    "Spring Boot",
    "REST APIs",
  ],
  Data: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis", "Tableau", "NLP"],
  Cloud: ["AWS", "GCP", "Azure", "Firebase", "Docker", "Nginx", "CI/CD"],
  Practices: [
    "OOP",
    "SOLID",
    "Design Patterns",
    "Software Architecture",
    "API Design",
    "Git",
    "Testing",
    "Agile",
  ],
};

const navItems = [
  ["Education", "#education"],
  ["Experience", "#experience"],
  ["Work", "#work"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function GithubIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.81 1.3 3.5.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.98h3.41v1.57h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.28 2.37 4.28 5.46v6.29ZM5.34 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V8.98h3.56v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.23 0Z" />
    </svg>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [menuOpen, setMenuOpen] = React.useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-shell">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />

      <div className="noise" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-overlay" />

      <header className="site-header">
        <a href="#top" className="brand" onClick={closeMenu}>
          <span className="brand-mark">MB</span>
          <span className="brand-name">Mikael Giannes Bernardino</span>
        </a>

        <nav className={`desktop-nav ${menuOpen ? "mobile-open" : ""}`}>
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            className="header-github"
            href="https://github.com/mgdino"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon size={16} />
            <span>GitHub</span>
          </a>
          <button
            className="menu-button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <Reveal>
              <div className="eyebrow">
                <span className="status-dot" /> Open to software engineering
                opportunities
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1>
                Building software
                <span className="gradient-text">
                  {" "}
                  that moves ideas forward.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="hero-description">
                I’m Gian, an MS Computer Science graduate focused on full-stack
                development, mobile engineering, cloud-ready systems, and
                applied AI/ML.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="hero-ctas">
                <a className="button button-primary" href="#work">
                  Explore my work <ArrowUpRight size={17} />
                </a>
                <a className="button button-ghost" href="#contact">
                  Let’s connect <Mail size={16} />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="hero-meta">
                <span>
                  <MapPin size={14} /> Metro Manila, Philippines
                </span>
                <span>
                  <Terminal size={14} /> Software Engineer
                </span>
                <span>
                  <Rocket size={14} /> Ready to build
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="hero-visual-wrap">
            <div className="hero-orbit-card">
              <div className="orbit orbit-a" />
              <div className="orbit orbit-b" />
              <div className="orbit-core">
                <div className="core-glow" />
                <span>MB</span>
              </div>
              <div className="floating-chip chip-top">
                <Code2 size={15} /> Full-stack
              </div>
              <div className="floating-chip chip-right">
                <Network size={15} /> Systems
              </div>
              <div className="floating-chip chip-bottom">
                <Sparkles size={15} /> AI / ML
              </div>
              <div className="floating-chip chip-left">
                <Server size={15} /> Cloud
              </div>
            </div>
          </Reveal>
        </section>

        <section className="ticker" aria-label="Technology areas">
          <div className="ticker-track">
            {[
              "React",
              "Next.js",
              "NestJS",
              "Spring Boot",
              "Python",
              "Swift",
              "PostgreSQL",
              "Docker",
              "AWS",
              "AI / ML",
              "React",
              "Next.js",
              "NestJS",
              "Spring Boot",
              "Python",
              "Swift",
              "PostgreSQL",
              "Docker",
              "AWS",
              "AI / ML",
            ].map((item, i) => (
              <span key={`${item}-${i}`}>
                {item}
                <b>✦</b>
              </span>
            ))}
          </div>
        </section>

        <section id="education" className="section container">
          <Reveal className="section-heading">
            <span className="section-kicker">01 / EDUCATION</span>
            <h2>
              Deep fundamentals.
              <br />
              <em>Applied in practice.</em>
            </h2>
          </Reveal>
          <div className="education-layout">
            <div className="education-cards">
              {education.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <article className="education-card">
                    <div className="edu-icon">
                      <GraduationCap size={21} />
                    </div>
                    <div className="edu-copy">
                      <span>{item.year}</span>
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                      <b>{item.tag}</b>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.15} className="thesis-card">
              <div className="thesis-card-head">
                <ScrollText size={20} />
                <span>Graduate research</span>
              </div>
              <h3>Online Food Delivery Problem</h3>
              <p>
                Research on scheduling and heuristics for online food delivery,
                exploring flow time, waiting behavior, and scalable tree-based
                problem structures.
              </p>
              <div className="research-pill">
                IEEE ICCTDC 2025 · Published research
              </div>
              <div className="heuristics">
                <span>FIFO</span>
                <span>ERF</span>
                <span>HDF</span>
                <span>SA</span>
                <span>GA</span>
                <span>ACO</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="experience"
          className="section container dark-panel-section"
        >
          <Reveal className="section-heading">
            <span className="section-kicker">02 / EXPERIENCE</span>
            <h2>Where I’ve learned to ship.</h2>
          </Reveal>
          <div className="timeline">
            {experience.map((item, i) => (
              <Reveal key={`${item.role}-${item.org}`} delay={i * 0.06}>
                <article className="timeline-item">
                  <div className="timeline-year">{item.date}</div>
                  <div className="timeline-marker">
                    <span />
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-org">{item.org}</span>
                    <h3>{item.role}</h3>
                    <ul>
                      {item.details.map((detail) => (
                        <li key={detail}>
                          <Check size={15} /> {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="work" className="section container">
          <Reveal className="section-heading row-heading">
            <div>
              <span className="section-kicker">03 / SELECTED WORK</span>
              <h2>Projects with a purpose.</h2>
            </div>
            <p>
              From product platforms and APIs to analytics and ML pipelines.
            </p>
          </Reveal>

          <div className="project-grid">
            {projects.map((project, i) => (
              <Reveal
                key={project.title}
                delay={Math.min(i * 0.05, 0.25)}
                className={project.featured ? "featured-project" : ""}
              >
                <article className="project-card">
                  <div className="project-topline">
                    <span>{project.type}</span>
                    {/* <ArrowUpRight size={17} /> */}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.stack.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section container skills-section">
          <Reveal className="section-heading row-heading">
            <div>
              <span className="section-kicker">04 / TOOLKIT</span>
              <h2>A versatile technical stack.</h2>
            </div>
            <div className="stack-note">
              <Layers3 size={17} /> Product-minded engineering
            </div>
          </Reveal>
          <div className="skills-grid">
            {Object.entries(skills).map(([group, list], i) => (
              <Reveal key={group} delay={i * 0.04}>
                <div className="skill-group">
                  <span className="skill-group-title">{group}</span>
                  <div className="skill-items">
                    {list.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="about" className="section container split-section">
          <Reveal className="section-heading">
            <span className="section-kicker">05 / ABOUT</span>
            <h2>
              Engineer by craft.
              <br />
              <em>Builder by instinct.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="about-body">
            <p className="lead">
              My work sits at the intersection of product thinking and software
              engineering: turning ambiguous ideas into usable systems, APIs,
              interfaces, and data workflows.
            </p>
            <p>
              My Computer Science background spans software engineering, data
              structures, databases, operating systems, networks, machine
              learning pipelines, security, business process management, and
              enterprise systems.
            </p>
            <div className="mini-stats">
              <div>
                <strong>MS</strong>
                <span>Computer Science</span>
              </div>
              <div>
                <strong>BS</strong>
                <span>CS · Enterprise Systems</span>
              </div>
              <div>
                <strong>∞</strong>
                <span>Curiosity to ship</span>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="contact" className="contact-section container">
          <Reveal>
            <div className="contact-card">
              <div className="contact-glow" />
              <div className="contact-copy">
                <span className="section-kicker">06 / CONTACT</span>
                <h2>
                  Let’s build something
                  <br />
                  <span>worth shipping.</span>
                </h2>
                <p>
                  Open to software engineering opportunities and teams building
                  thoughtful products.
                </p>
              </div>
              <div className="contact-actions">
                <a
                  className="button button-primary"
                  href="https://github.com/mgdino"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon size={17} /> GitHub <ArrowUpRight size={15} />
                </a>
                <a
                  className="button button-ghost"
                  href="https://www.linkedin.com/in/gian-bernardino"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinIcon size={17} /> LinkedIn <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="footer container">
        <span>© {new Date().getFullYear()} Mikael Giannes Bernardino</span>
        <span>Designed for the web · Built with React</span>
      </footer>

      <a className="back-to-top" href="#top" aria-label="Back to top">
        <ChevronDown size={18} />
      </a>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
