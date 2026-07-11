import linkedinIcon from '../../assets/LinkedIn_icon.svg.png'
import githubIcon from '../../assets/github-logo.png'
import instagramIcon from '../../assets/instagram-logo.png'

function Name() {
  return (
    <section className="w-full">
      <div className="leading-none select-none space-y-[0.15em]">
        <span
          className="block font-light tracking-[0.3em] uppercase whitespace-nowrap"
          style={{
            fontSize: "clamp(1rem, 3vw, 3.5rem)",
            background: "linear-gradient(135deg, #ffffff 0%, #ffffff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Lok Yung Chan
        </span>
        <span
          className="block font-extrabold tracking-[-0.02em] uppercase whitespace-nowrap"
          style={{
            fontSize: "clamp(2rem, 8vw, 9rem)",
            background: "linear-gradient(135deg, #ffffff 0%, #ffffff 50%, #ffffff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 40px rgba(255, 255, 255, 0.6))",
            paddingLeft: "0.5em",
          }}
        >
          Carson
        </span>
        <div
          className="text-[clamp(0.75rem,1.8vw,1.8rem)] font-light tracking-[0.3em] text-[#ffffff]"
          style={{ marginBottom: '2em', paddingLeft: '10em' }}
        >
          Software Engineer
        </div>
        <div className="text-sm text-white/60 leading-relaxed my-2 before:content-['—_'] before:text-[rgb(255, 255, 255)]">
          Passionate and dedicated software engineering 3rd year student at Ontario Tech University
        </div>
        <div className="text-sm text-white/60 leading-relaxed my-2 before:content-['—_'] before:text-[rgb(255, 255, 255)]">
          Experienced in full-stack development, agile development practices and CI/CD pipeline development
        </div>
        <div className="text-sm text-white/60 leading-relaxed my-2 before:content-['—_'] before:text-[rgb(255, 255, 255)]">
          Proficient in Python, Javascript, C, C++, MySQL
        </div>
        <div style={{display: 'flex', gap: '1em', marginTop: '3em', alignItems: 'center'}}>
          <span style={{color: 'rgb(255, 255, 255)', fontSize: '1.5em'}}>Find me on: </span>
          <span><a href="https://www.linkedin.com/in/lok-yung-chan-116051327/" target="_blank" rel="noopener noreferrer"><img style={{width:'2em', height:'2em'}} src={linkedinIcon} alt="LinkedIn" /></a></span>
          <span style={{color: 'rgb(255, 255, 255)'}}>|</span>
          <span><a href="https://github.com/cc555cc" target="_blank" rel="noopener noreferrer"><img style={{width:'2em', height:'2em', mixBlendMode: 'screen', borderRadius: '50%'}} src={githubIcon} alt="GitHub" /></a></span>
          <span style={{color: 'rgb(255, 255, 255)'}}>|</span>
          <span><a href="https://www.instagram.com/lokk_0555/" target="_blank" rel="noopener noreferrer"><img style={{width:'2em', height:'2em'}} src={instagramIcon} alt="Instagram" /></a></span>
        </div>
        <div style={{margin: '3em 0', display: 'flex', gap: '1em', flexWrap: 'wrap'}}>
          <button
            className="text-[clamp(0.8rem,1.3vw,1.1rem)] font-bold tracking-[0.2em] uppercase text-[#ffffff] bg-transparent border-2 border-[rgba(255, 255, 255,0.5)] rounded-md py-[0.75em] px-[2em] cursor-pointer transition-all duration-[250ms] whitespace-nowrap [-webkit-text-fill-color:#ffffff] hover:bg-[rgba(255, 255, 255,0.1)] hover:border-[#ffffff] hover:shadow-[0_0_12px_rgba(255, 255, 255,0.35)]"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Projects
          </button>
          <button
            className="text-[clamp(0.8rem,1.3vw,1.1rem)] font-bold tracking-[0.2em] uppercase text-[#ffffff] bg-transparent border-2 border-[rgba(255, 255, 255,0.5)] rounded-md py-[0.75em] px-[2em] cursor-pointer transition-all duration-[250ms] whitespace-nowrap [-webkit-text-fill-color:#ffffff] hover:bg-[rgba(255, 255, 255,0.1)] hover:border-[#ffffff] hover:shadow-[0_0_12px_rgba(255, 255, 255,0.35)]"
            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Skills
          </button>
          <button
            className="text-[clamp(0.8rem,1.3vw,1.1rem)] font-bold tracking-[0.2em] uppercase text-[#ffffff] bg-transparent border-2 border-[rgba(255, 255, 255,0.5)] rounded-md py-[0.75em] px-[2em] cursor-pointer transition-all duration-[250ms] whitespace-nowrap [-webkit-text-fill-color:#ffffff] hover:bg-[rgba(255, 255, 255,0.1)] hover:border-[#ffffff] hover:shadow-[0_0_12px_rgba(255, 255, 255,0.35)]"
            onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Resume
          </button>
        </div>
      </div>
    </section>
  )
}

export default Name
