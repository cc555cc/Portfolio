import "./resume_module.css"
import resumePdf from "../../assets/Carson's resume.pdf"

function Resume() {
  return (
    <section className="resume">
      <h2 className="resume-title">Resume</h2>
      <p className="resume-desc">DOWNLOAD MY RESUME HERE</p>
      <a className="resume-btn" href={resumePdf} download="Carson_Resume.pdf">
        Download Resume
      </a>
    </section>
  )
}

export default Resume
