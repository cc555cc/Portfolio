import Navbar from './module/navbar/navbar'
import Chatbot from './module/chatbot/chatbot'
import Name from './module/name/name'
import Introduction from './module/introduction/introduction'
import Project from './module/project/project'
import Skills from './module/skills/skills'
import Resume_Section from './module/Resume/resume_module'
import Contact from './module/contact/contact'
import avatar from './assets/avatar.jpg'

const sectionBase   = "snap-start h-[calc(100vh-60px)] flex items-center justify-center"
const sectionStretch = "snap-start h-[calc(100vh-60px)] flex items-stretch justify-center"

function App(){
  return (
    <div>
      <Chatbot />
      <Navbar />
      <div className="h-[calc(100vh-60px)] mt-[60px] overflow-y-scroll snap-y snap-mandatory [scrollbar-width:none]">

        <div id="about" className={`${sectionBase} items-start pt-[8vh]`}>
          <div className="flex justify-between items-center w-full px-[5vw] gap-[3vw]">
            <div className="flex-1 min-w-0 overflow-hidden">
              <Name />
            </div>
            <div className="shrink-0">
              <img src={avatar} alt="Avatar" style={{ width: 'clamp(240px, 34vw, 500px)', maxHeight: '80vh', objectFit: 'contain', borderRadius: '12px', border: '2px solid #ffffff', boxShadow: '0 0 18px rgba(255, 255, 255,0.45), 0 0 60px rgba(255, 255, 255,0.15)', filter: 'brightness(1.05) contrast(1.05)' }}/>
            </div>
          </div>
        </div>

        <div id="introduction" className={sectionBase}>
          <Introduction />
        </div>

        <div id="projects" className={sectionStretch}>
          <Project />
        </div>

        <div id="skills" className={sectionStretch}>
          <Skills />
        </div>

        <div id="resume" className={sectionStretch}>
          <Resume_Section />
        </div>

        <div id="contact" className={sectionStretch}>
          <Contact />
        </div>

      </div>
    </div>
  )
}

export default App
