function Contact() {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center gap-6 px-[10vw] pt-[14vh] pb-[4vh] box-border">
      <h2
        className="font-bold tracking-[0.2em] uppercase m-0"
        style={{
          fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
          background: "linear-gradient(135deg, #ccffcc 0%, #39ff14 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Contact
      </h2>
      <p className="text-[1.1rem] text-white/65 m-0">Feel free to reach out — I'm always open to new opportunities.</p>
      <div className="flex flex-col items-center gap-3">
        <a
          className="text-base text-[#39ff14] no-underline tracking-[0.06em] border-b border-transparent transition-colors duration-200 hover:border-[#39ff14]"
          href="mailto:carsonchan050505@gmail.com"
        >
          carsonchan050505@gmail.com
        </a>
        <a
          className="text-base text-[#39ff14] no-underline tracking-[0.06em] border-b border-transparent transition-colors duration-200 hover:border-[#39ff14]"
          href="https://github.com/cc555cc"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="text-base text-[#39ff14] no-underline tracking-[0.06em] border-b border-transparent transition-colors duration-200 hover:border-[#39ff14]"
          href="https://www.linkedin.com/in/lok-yung-chan-116051327/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Contact
