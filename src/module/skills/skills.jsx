import "./skills.css"
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

const CATEGORIES = [
  {
    label: "Frontend",
    skills: [
      { name: "HTML",        logo: logoHTML },
      { name: "CSS",         logo: logoCSS },
      { name: "JavaScript",  logo: logoJS },
      { name: "TypeScript",  logo: logoTS },
      { name: "React",       logo: logoReact },
      { name: "Next.js",     logo: logoNextJS },
      { name: "TailwindCSS", logo: logoTailwind },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Python", logo: logoPython,  removeBg: true },
      { name: "PHP",    logo: logoPHP,     removeBg: true },
      { name: "MySQL",  logo: logoMySQL },
    ],
  },
  {
    label: "Data / ML",
    skills: [
      { name: "Pandas", logo: logoPandas,  removeBg: true },
      { name: "NLTK",   logo: logoNLTK,   removeBg: true },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "GitHub Actions", logo: logoGitHubActions },
      { name: "YAML",           logo: logoYAML,          removeBg: true },
    ],
  },
]

function Skills() {
  return (
    <section className="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-categories">
        {CATEGORIES.map((cat) => (
          <div className="skills-category" key={cat.label}>
            <h3 className="skills-category-label">{cat.label}</h3>
            <div className="skills-grid">
              {cat.skills.map((skill) => (
                <div className="skill-tile" key={skill.name}>
                  <img src={skill.logo} alt={skill.name} className={skill.removeBg ? "remove-bg" : ""} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
