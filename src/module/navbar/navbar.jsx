import "./navbar.css"

function Navbar() {
    var num_section = 5;
    return (
    <>
      {/* From Uiverse.io by ilkhoeri */}
      <input hidden className="mode" id="theme-mode" type="checkbox" />
      <div className="container">
        <div className="wrap">
          <input
            hidden
            className="rd-1"
            name="radio"
            id="rd-1"
            type="radio"
            defaultChecked
          />

          {/*sections: 5*/}
          <label style={{ '--index': '0' }} className="label" htmlFor="rd-1">
            <span>About Me</span>
          </label>

          <input hidden className="rd-2" name="radio" id="rd-2" type="radio" />
          <label style={{ '--index': '1' }} className="label" htmlFor="rd-2">
            <span>Project</span>
          </label>

          <input hidden className="rd-3" name="radio" id="rd-3" type="radio" />
          <label style={{ '--index': '2' }} className="label" htmlFor="rd-3">
            <span>Skills</span>
          </label>

          <input hidden className="rd-4" name="radio" id="rd-4" type="radio" />
          <label style={{ '--index': '3' }} className="label" htmlFor="rd-4">
            <span>Resume</span>
          </label>

          <input hidden className="rd-5" name="radio" id="rd-5" type="radio" />
          <label style={{ '--index': '4' }} className="label" htmlFor="rd-5">
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
