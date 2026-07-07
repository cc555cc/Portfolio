import logoCSS            from "../../assets/CSS3_logo.svg.png"
import logoHTML           from "../../assets/HTML_logo.png"
import logoJS             from "../../assets/JavaScript-logo.png"
import logoMySQL          from "../../assets/MySQL_logo.png"
import logoNextJS         from "../../assets/nextjs.png"
import logoPHP            from "../../assets/php_logo.jpeg"
import logoPython         from "../../assets/python_logo.png"
import logoNLTK           from "../../assets/Python_NLTK_logo.png"
import logoPandas         from "../../assets/python-pandas-logo-300.png"
import logoReact          from "../../assets/React-icon.svg.png"
import logoTailwind       from "../../assets/TailwindCSS_logo.png"
import logoTS             from "../../assets/Typescript_logo_2020.svg.png"
import logoGitHubActions  from "../../assets/github_action_logo.png"
import logoYAML           from "../../assets/YAML-1.jpg"

const frontend_icons = [
  { name: "HTML",        logo: logoHTML },
  { name: "CSS",         logo: logoCSS },
  { name: "JavaScript",  logo: logoJS },
  { name: "TypeScript",  logo: logoTS },
  { name: "React",       logo: logoReact },
  { name: "Next.js",     logo: logoNextJS },
  { name: "TailwindCSS", logo: logoTailwind },
]

const backend_icons = [
  { name: "Python", logo: logoPython,  removeBg: true },
  { name: "PHP",    logo: logoPHP,     removeBg: true },
  { name: "MySQL",  logo: logoMySQL },
]

const dataml_icons = [
  { name: "Pandas", logo: logoPandas,  removeBg: true },
  { name: "NLTK",   logo: logoNLTK,   removeBg: true },
]

const tools_icons = [
  { name: "GitHub Actions", logo: logoGitHubActions },
  { name: "YAML",           logo: logoYAML,          removeBg: true },
]

const IconsBlock = ({ icons, category }) => (
  <div className="flex flex-col gap-3 w-[47%] h-fi;;">
    {category && (
      <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[rgba(38,255,0,0.97)] m-0">{category}</p>
    )}
    <div className="flex flex-wrap gap-5 items-start border-[3px] border-[#00ff15] rounded-xl p-6">
      {icons.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center gap-3 py-5 px-6 border-2 border-transparent rounded-xl cursor-default transition-all duration-300 min-w-[100px] hover:-translate-y-1 hover:border-[#39ff14] hover:bg-white/5"
        >
          <img
            src={skill.logo}
            alt={skill.name}
            className={`h-14 w-auto${skill.removeBg ? " [mix-blend-mode:screen]" : ""}`}
          />
          <span className="text-sm tracking-[0.06em] text-white/90 whitespace-nowrap">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  </div>
)

function Skills() {
  return (
    <section className="w-full h-full px-[10vw] pt-[14vh] pb-[4vh] flex flex-col items-center gap-10 overflow-hidden">
      <h2
        className="font-bold tracking-[0.2em] uppercase m-0"
        style={{
          fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
          background: "linear-gradient(135deg, #ccffcc 0%, #39ff14 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Skills
      </h2>
      <div className="flex flex-col gap-8 w-full overflow-y-auto [scrollbar-width:none] pb-4">
        <div className="flex flex-row justify-between">
          <IconsBlock icons={frontend_icons} category="Frontend" />
          <IconsBlock icons={backend_icons}  category="Backend" />
        </div>
        <div className="flex flex-row justify-between">
          <IconsBlock icons={dataml_icons}   category="Data / ML" />
          <IconsBlock icons={tools_icons}    category="Tools" />
        </div>
      </div>
    </section>
  )
}

export default Skills
