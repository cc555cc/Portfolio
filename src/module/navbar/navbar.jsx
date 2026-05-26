import "./navbar.css"

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function Navbar() {
  return (
    <>
      {/* From Uiverse.io by ilkhoeri */}
      <input hidden className="mode" id="theme-mode" type="checkbox" />
      <div className="container">
        <div className="wrap">
          <input hidden className="rd-1" name="radio" id="rd-1" type="radio" defaultChecked />
          <label style={{ '--index': '0' }} className="label" htmlFor="rd-1" onClick={() => scrollTo('about')}>
            <span>About Me</span>
          </label>

          <input hidden className="rd-2" name="radio" id="rd-2" type="radio" />
          <label style={{ '--index': '1' }} className="label" htmlFor="rd-2" onClick={() => scrollTo('projects')}>
            <span>Project</span>
          </label>

          <input hidden className="rd-3" name="radio" id="rd-3" type="radio" />
          <label style={{ '--index': '2' }} className="label" htmlFor="rd-3" onClick={() => scrollTo('skills')}>
            <span>Skills</span>
          </label>

          <input hidden className="rd-4" name="radio" id="rd-4" type="radio" />
          <label style={{ '--index': '3' }} className="label" htmlFor="rd-4" onClick={() => scrollTo('resume')}>
            <span>Resume</span>
          </label>

          <input hidden className="rd-5" name="radio" id="rd-5" type="radio" />
          <label style={{ '--index': '4' }} className="label" htmlFor="rd-5" onClick={() => scrollTo('contact')}>
            <span>Contact</span>
          </label>

          <div className="bar"></div>
          <div className="slidebar"></div>
        </div>
      </div>
    </>
  )
}

export default Navbar
