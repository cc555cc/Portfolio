import "./project.css"
import logoCSS from "../../assets/CSS3_logo.svg.png"
import logoHTML from "../../assets/HTML_logo.png"
import logoJS from "../../assets/JavaScript-logo.png"
import logoMySQL from "../../assets/MySQL_logo.png"
import logoNextJS from "../../assets/nextjs.png"
import logoPHP from "../../assets/php_logo.jpeg"
import logoPython from "../../assets/python_logo.png"
import logoNLTK from "../../assets/Python_NLTK_logo.png"
import logoPandas from "../../assets/python-pandas-logo-300.png"
import logoReact from "../../assets/React-icon.svg.png"
import logoTailwind from "../../assets/TailwindCSS_logo.png"
import logoTS from "../../assets/Typescript_logo_2020.svg.png"
import logoGitHubActions from "../../assets/github_action_logo.png"
import logoYAML from "../../assets/YAML-1.jpg"

const TAG_LOGOS = {
  "CSS":        { src: logoCSS,      alt: "CSS3" },
  "HTML":       { src: logoHTML,     alt: "HTML" },
  "JavaScript": { src: logoJS,       alt: "JavaScript" },
  "MySQL":      { src: logoMySQL,    alt: "MySQL" },
  "Next.js":    { src: logoNextJS,   alt: "Next.js" },
  "PHP":        { src: logoPHP,      alt: "PHP" },
  "Python":     { src: logoPython,   alt: "Python" },
  "NLTK":       { src: logoNLTK,     alt: "NLTK" },
  "Pandas":     { src: logoPandas,   alt: "Pandas" },
  "React":      { src: logoReact,    alt: "React" },
  "TailwindCSS":{ src: logoTailwind, alt: "TailwindCSS" },
  "TypeScript":     { src: logoTS,             alt: "TypeScript" },
  "GitHub Actions": { src: logoGitHubActions,  alt: "GitHub Actions" },
  "YAML":           { src: logoYAML,           alt: "YAML" },
}

const projects = [
  {
    title: "Student-Life Management Platform",
    date: "Sept 2025 – Present",
    tags: ["TypeScript", "React", "Next.js", "TailwindCSS", "MySQL", "JavaScript"],
    desc: "Developing a one-stop student life management platform that supports note, schedule and grade management utilizing MySQL to optimize user data management.",
  },
  {
    title: "Rule-based Chatbot",
    date: "March 2026",
    tags: ["Python", "NLTK", "React"],
    desc: "Intent detection, field extraction for reservations/delivery, and a self-learning memory layer that promotes new vocabulary over repeated observations.",
  },
  {
    title: "Battery SOH Chatbot Application",
    date: "December 2025",
    tags: ["Python", "Pandas"],
    desc: "Developed a chatbot application that answers a user's query based on given battery data. Applied knowledge on data structure to train a linear regression model with 21 cells battery pack data and optimize battery SOH prediction.",
  },
  {
    title: "ML Papers Pipeline",
    date: "May 2025",
    tags: ["Python", "Gemini API", "Arxiv API", "Discord SDK", "YAML", "GitHub Actions"],
    desc: "Developed and ran a pipeline that automatically evaluated and summarized machine learning papers; optimized JSON index and updated a knowledge store of paper URLs, allowing a $0 deployment with minimal API calls. Connected to a Discord webhook publishing daily posts.",
  },
  {
    title: "EventSphere",
    date: "December 2024",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    desc: "Developed a stateful event management platform by implementing database fetch/write mechanisms in PHP and optimizing queries with indexed lookups, improving database performance by 30%.",
  },
]

function Project() {
  return (
    <section className="project">
      <h2 className="project-title">Projects</h2>
      <div className="project-grid-wrapper">
      <div className="project-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            <div className="project-card-header">
              <h3 className="project-card-title">{p.title}</h3>
              <span className="project-card-date">{p.date}</span>
            </div>
            <p className="project-card-desc">{p.desc}</p>
            <div className="project-card-tags">
              {p.tags.map((tag) => {
                const logo = TAG_LOGOS[tag]
                return logo
                  ? <span key={tag} className="tag-logo"><img src={logo.src} alt={logo.alt} /></span>
                  : <span key={tag}>{tag}</span>
              })}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

export default Project
