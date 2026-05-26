import "./contact.css"

function Contact() {
  return (
    <section className="contact">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-desc">Feel free to reach out — I'm always open to new opportunities.</p>
      <div className="contact-links">
        <a className="contact-link" href="mailto:carsonchan050505@gmail.com">carsonchan050505@gmail.com</a>
        <a className="contact-link" href="https://github.com/Carson" target="_blank" rel="noreferrer">GitHub</a>
        <a className="contact-link" href="https://linkedin.com/in/Carson" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  )
}

export default Contact
