import "./name.css"
import linkedinIcon from '../../assets/LinkedIn_icon.svg.png'
import githubIcon from '../../assets/github-logo.png'

function Name() {
  return (
    <section className="name">
      <div className="name-block">
        <span className="Fullname">Lok Yung Chan</span>
        <span className="Englishname">Carson</span>
        <div className="animation">Software Engineer</div>
        <div className="introduction">
          <div className="intro-item">Passionate and dedicated software engineering 3rd year student at Ontario Tech University</div>
          <div className="intro-item">Experienced in full-stack development, agile development practices and CI/CD pipeline development</div>
          <div className="intro-item">Proficient in Python, Javascript, C, C++, MySQL</div>
        </div>
        <div className="link-section" style={{display: 'flex', gap: '1em', marginTop: '1em'}}>
          <span style={{color: 'rgba(255, 255, 255, 0.55)'}}>Find me on: </span>
          <span><a href="https://www.linkedin.com/in/lok-yung-chan-116051327/" target="_blank" rel="noopener noreferrer"><img style={{width:'2em', height:'2em'}} src={linkedinIcon} alt="LinkedIn" /></a></span> |
          <span><a href="https://github.com/cc555cc" target="_blank" rel="noopener noreferrer"><img style={{width:'2em', height:'2em'}} src={githubIcon} alt="GitHub" /></a></span>
        </div>
        <div className="buttons">
          <button className="quickaccess">Projects</button>
          <button className="quickaccess">Skills</button>
          <button className="quickaccess">Resume</button>
        </div>
      </div>
    </section>
  )
}

export default Name
