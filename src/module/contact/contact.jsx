import phoneIcon from "../../assets/phoneIcon.png"
import emailIcon from "../../assets/emailIcon.png"
import githubIcon from "../../assets/github-logo.png"
import instagramIcon from "../../assets/instagram-logo.png"
import linkedinIcon from "../../assets/LinkedIn_icon.svg.png"

function Contact() {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center gap-6 px-[10vw] pt-[14vh] pb-[4vh] box-border">
      <h2
        className="font-bold tracking-[0.2em] uppercase m-0"
        style={{
          fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
          background: "linear-gradient(135deg, #ffffff 0%, #ffffff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Contact
      </h2>
      <p className="text-[1.1rem] text-white/65 m-0">Feel free to reach out — I'm always open to new opportunities.</p>
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <img src={phoneIcon} alt="Phone Icon" className="w-5 h-5" />
          <span className="text-base text-[#ffffff] tracking-[0.06em]">+1 (437) 986-6348</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={emailIcon} alt="Email Icon" className="w-5 h-5" />
          <span className="text-base text-[#ffffff] tracking-[0.06em]">carsonchan050505@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={instagramIcon} alt="Instagram Icon" className="w-5 h-5" />
          <span className="text-base text-[#ffffff] tracking-[0.06em]"><a
          className="text-base text-[#ffffff] no-underline tracking-[0.06em] border-b border-transparent transition-colors duration-200 hover:border-[#ffffff]"
          href="https://www.instagram.com/lokk_0555/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a></span>
        </div>
        <div className="flex items-center gap-2">
          <img src={linkedinIcon} alt="LinkedIn Icon" className="w-5 h-5" />
          <span className="text-base text-[#ffffff] tracking-[0.06em]"><a
          className="text-base text-[#ffffff] no-underline tracking-[0.06em] border-b border-transparent transition-colors duration-200 hover:border-[#ffffff]"
          href="https://www.linkedin.com/in/lok-yung-chan-116051327/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a></span>
        </div>
      </div>
    </section>
  )
}

export default Contact
