import "./resume_module.css"
import { useEffect, useRef, useState } from "react"
import resumePdf from "../../assets/Carson's resume.pdf"

const HIGHLIGHTS = [
  "3.81 GPA · President's Honour List",
  "Python · React · TypeScript · SQL",
  "5+ shipped projects",
]

function Resume() {
  const cardRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="resume-section">
      <h2 className="resume-title">Resume</h2>

      <div ref={cardRef} className={`resume-card ${visible ? "resume-card--visible" : ""}`}>
        <div className="download-buttons">
          <p className="resume-desc">DOWNLOAD MY RESUME HERE</p>

          <ul className="resume-highlights">
            {HIGHLIGHTS.map(item => (
              <li key={item} className="resume-chip">{item}</li>
            ))}
          </ul>

          <a className="resume-btn" href={resumePdf} download="Carson_Resume.pdf">
            Download Resume
          </a>
        </div>

        <div className="resume-preview-frame">
          <embed src={resumePdf} type="application/pdf" className="resume-preview" />
        </div>
      </div>
    </section>
  )
}

export default Resume
