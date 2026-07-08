import OTUlogo from '../../assets/OTUlogo.jpg'
import pythonIcon from '../../assets/python_logo.png'
import javascriptIcon from '../../assets/JavaScript-logo.png'
import reactIcon from '../../assets/React-icon.svg.png'
import mysqlIcon from '../../assets/MySQL_logo.png'
import phpIcon from '../../assets/php_logo.jpeg'

function Introduction() {
  return (
    <section className="w-full h-full flex flex-col items-center gap-6 px-[10vw] pt-[14vh] pb-[4vh] box-border">
      <h2
        className="font-bold tracking-[0.2em] uppercase m-0 text-center"
        style={{
          fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
          background: "linear-gradient(135deg, #ffffff 0%, #ffffff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Things to Know About Me
      </h2>
      <div className="flex flex-row items-center gap-8 ">
        <p
          className="font-light tracking-[0.2em] uppercase leading-[1.8] fontSize-[clamp(0.3rem, 1.8vw, 1.8rem)] text-[#ffffff] animate-fade-in"
          style={{
            fontSize: "clamp(0.8rem, 1.8vw, 1.8rem)",
            background: "linear-gradient(135deg, #ffffff 0%, #ffffff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
         I am a Software Engineering year 4 student at Ontario Tech University ...
        </p>
        <img
          src={OTUlogo}
          alt="Ontario Tech University Logo"
          className="h-[10em] w-auto flex-shrink-0 rounded-2xl"
        />
      </div>
      <div className="text-sm text-white/60 leading-relaxed my-2  before:text-[rgba(255, 255, 255,0.6)]">
          <p className="font-light tracking-[0.2em] uppercase leading-[1.8] fontSize-[clamp(0.3rem, 1.8vw, 1.8rem)] text-[#ffffff]"
          style={{
            fontSize: "clamp(0.8rem, 1.8vw, 1.8rem)",
            background: "linear-gradient(135deg, #ffffff 0%, #ffffff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}> Most of my experience comes from academic and private projects. I like to create convenient solutions for real-world problems.
          </p>
      </div>
      <div className="text-sm text-white/60 leading-relaxed my-2  before:text-[rgba(255, 255, 255,0.6)]" style={{ display: 'flex', flexDirection: 'row', gap: '1em', flexWrap: 'wrap' }}>
          <p className="font-light tracking-[0.2em] uppercase leading-[1.8] fontSize-[clamp(0.3rem, 1.8vw, 1.8rem)] text-[#ffffff]"
          style={{
            fontSize: "clamp(0.8rem, 1.8vw, 1.8rem)",
            background: "linear-gradient(135deg, #ffffff 0%, #ffffff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}> I am most familiar with Full-Stack Web Development, using tools like...
          </p>
          <div className="w-full flex flex-row items-center justify-center gap-4 flex-wrap">
            <img src={pythonIcon} alt="Python" className="h-[5em] w-auto flex-shrink-0 rounded-2xl mr-10" />
            <img src={javascriptIcon} alt="JavaScript" className="h-[5em] w-auto flex-shrink-0 rounded-2xl mr-10" />
            <img src={reactIcon} alt="React" className="h-[5em] w-auto flex-shrink-0 rounded-2xl mr-10" />
            <img src={mysqlIcon} alt="MySQL" className="h-[5em] w-auto flex-shrink-0 rounded-2xl mr-10" />
            <img src={phpIcon} alt="PHP" className="h-[5em] w-auto flex-shrink-0 rounded-2xl mr-10" />
            </div>
      </div>
      <div className="text-sm text-white/60 leading-relaxed my-2  before:text-[rgba(255, 255, 255,0.6)]">
          <p className="font-light tracking-[0.2em] uppercase leading-[1.8] fontSize-[clamp(0.3rem, 1vw, 1rem)] text-[#ffffff]"
          style={{
            fontSize: "clamp(0.3rem, 1vw, 1rem)",
            background: "linear-gradient(135deg, #ffffff 0%, #ffffff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>  Checkout more of my work in the Projects section</p>
      </div>
    </section>
  )
  /** Hi, I am Carson. I am a Software Engineering year 4 student at Ontario Tech University. I am experienced in building
            full-stack applications, software development pipelines, using programming languages like Python, Java, C++ and more.
            I also have knowledge in data structures & algorithms and agile development practices. I'm passionate about
            creating software tool that improve quality of life and I like working along with other passionate developers. */
}

export default Introduction
