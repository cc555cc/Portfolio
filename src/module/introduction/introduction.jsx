function Introduction() {
  return (
    <section className="flex justify-center py-[4vh] px-[10vw]">
      <div className="border-[3px] border-transparent rounded-2xl py-8 px-10 bg-transparent transition-all duration-300 ease-in-out hover:scale-[1.08] hover:border-[#39ff14] hover:bg-white/5 hover:backdrop-blur-md">
        <p
          className="font-light tracking-[0.2em] uppercase leading-[1.8] text-center"
          style={{
            fontSize: "clamp(0.8rem, 1.8vw, 1.8rem)",
            background: "linear-gradient(135deg, #ccffcc 0%, #39ff14 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Hi, I am Carson. I am a Software Engineering year 4 student at Ontario Tech University. I am experienced in building
          full-stack applications, software development pipelines, using programming languages like Python, Java, C++ and more.
          I also have knowledge in data structures & algorithms and agile development practices. I'm passionate about
          creating software tool that improve quality of life and I like working along with other passionate developers.
        </p>
      </div>
    </section>
  )
}

export default Introduction
