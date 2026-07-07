import "./introduction.css"
import OTUlogo from '../../assets/OTUlogo.jpg'

function Introduction() {
  return (
    <section className="introduction">
      <div className="intro-wrapper">
      <h2 className="intro-title">About Me</h2>
      <div className="school">
        <p className="intro-text" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1em'}}>
          Hi, I am Carson. I am Software Engineering year 4 student at Ontario Tech University. I am experienced in building
          full-stack applications, software development pipelines, using programming languages like Python, Java, C++ and more. 
          I also have knowledge in data structures & algorithms and agile development practices. I'm passionate about 
          creating software tool that improve quality of life and I like working along with other passionate developers.
        </p>
        <img src={OTUlogo} alt="Ontario Tech University Logo" className="school-logo" />
      </div>
      </div>
    </section>
  )
}

export default Introduction
