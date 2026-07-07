import "./name.css"
import linkedinIcon from '../../assets/LinkedIn_icon.svg.png'
import githubIcon from '../../assets/github-logo.png'
import instagramIcon from '../../assets/instagram-logo.png'

function Name() {
  return (
    <section className="name">
      <div className="name-block">
        <span className="Fullname">Lok Yung Chan</span>
        <span className="Englishname">Carson</span>
        <div className="animation" style={{marginBottom: '1em', color: '#39ff14', fontSize: '3.25em'}}>Software Engineer</div>
        <div className="intro-item text-sm text-white/60 leading-relaxed my-2">Passionate and dedicated software engineering 3rd year student at Ontario Tech University</div>
        <div className="intro-item text-sm text-white/60 leading-relaxed my-2">Experienced in full-stack development, agile development practices and CI/CD pipeline development</div>
        <div className="intro-item text-sm text-white/60 leading-relaxed my-2">Proficient in Python, Javascript, C, C++, MySQL</div>
        <div className="link-section" style={{display: 'flex', gap: '1em', marginTop: '3em', alignItems: 'center'}}>
          <span style={{color: 'rgb(255, 255, 255)', fontSize: '1.5em'}}>Find me on: </span>
          <span><a href="https://www.linkedin.com/in/lok-yung-chan-116051327/" target="_blank" rel="noopener noreferrer"><img style={{width:'2em', height:'2em'}} src={linkedinIcon} alt="LinkedIn" /></a></span>
          <span style={{color: 'rgba(255,255,255,0.4)'}}>|</span>
          <span><a href="https://github.com/cc555cc" target="_blank" rel="noopener noreferrer"><img style={{width:'2em', height:'2em', mixBlendMode: 'screen', borderRadius: '50%'}} src={githubIcon} alt="GitHub" /></a></span>
          <span style={{color: 'rgba(255,255,255,0.4)'}}>|</span>
          <span><a href="https://www.instagram.com/lokk_0555/" target="_blank" rel="noopener noreferrer"><img style={{width:'2em', height:'2em'}} src={instagramIcon} alt="Instagram" /></a></span>
        </div>
        <div className="buttons" style={{margin: '3em 0', display: 'flex', gap: '1em', flexWrap: 'wrap'}}>
          <button className="quickaccess" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</button>
          <button className="quickaccess" onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>Skills</button>
          <button className="quickaccess" onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}>Resume</button>
        </div>
      </div>
    </section>
  )
}

export default Name
