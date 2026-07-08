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
    <section className="w-full h-full px-[10vw] pt-[14vh] pb-[4vh] flex flex-col items-center gap-8 overflow-hidden box-border">
      <h2
        className="font-bold tracking-[0.2em] uppercase m-0"
        style={{
          fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
          background: "linear-gradient(135deg, #ffffff 0%, #ffffff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Projects
      </h2>
      <div className="relative flex-1 w-full overflow-hidden before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:w-px before:bg-gradient-to-b before:from-transparent before:via-[rgba(255, 255, 255,0.3)] before:to-transparent before:pointer-events-none before:z-[1] after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-0 after:w-px after:bg-gradient-to-b after:from-transparent after:via-[rgba(255, 255, 255,0.3)] after:to-transparent after:pointer-events-none after:z-[1]">
        <div className="flex flex-col gap-6 items-center w-full h-full overflow-y-auto [scrollbar-width:none] [-webkit-overflow-scrolling:touch] pt-4 pb-4">
          {projects.map((p) => (
            <div
              className="border-2 border-transparent rounded-[14px] py-[1.8em] px-[2em] w-[70vw] flex flex-col gap-3 bg-transparent transition-all duration-300 cursor-pointer hover:-translate-y-1.5 hover:border-[#ffffff] hover:bg-white/5 hover:backdrop-blur-md"
              key={p.title}
            >
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="text-[1.4rem] font-bold tracking-[0.1em] uppercase text-[#ffffff] m-0">{p.title}</h3>
                <span className="text-base tracking-[0.08em] text-white/40 whitespace-nowrap shrink-0">{p.date}</span>
              </div>
              <p className="text-[1.1rem] text-white/65 leading-[1.6] m-0">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tags.map((tag) => {
                  const logo = TAG_LOGOS[tag]
                  return logo
                    ? (
                      <span key={tag} className="inline-flex items-center justify-center py-1 px-2 border-none">
                        <img src={logo.src} alt={logo.alt} className="h-7 w-auto block brightness-90" />
                      </span>
                    )
                    : (
                      <span
                        key={tag}
                        className="text-[0.95rem] tracking-[0.08em] uppercase text-[#ffffff] border border-[rgba(255, 255, 255,0.4)] rounded px-[10px] py-[3px]"
                      >
                        {tag}
                      </span>
                    )
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
