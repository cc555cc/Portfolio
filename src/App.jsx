import './App.css'
import Navbar from './module/navbar/navbar'
import Chatbot from './module/chatbot/chatbot'
import Name from './module/name/name'
import Introduction from './module/introduction/introduction'
import Project from './module/project/project'
import Skills from './module/skills/skills'
import Resume_Section from './module/Resume/resume_module'
import Contact from './module/contact/contact'
import avatar from './assets/avatar.jpg'

function App(){
  return (
    <div className="App">
      <Chatbot />
      <Navbar />
      <div className="scroll-container">

        <div id="about" className="scroll-section">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '0 5vw', gap: '3vw'}} className="aboutMe">
            <div style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
              <Name />
            </div>
            <div style={{ flexShrink: 0 }}>
              <img src={avatar} alt="Avatar" style={{ width: 'auto', maxWidth: '40vw', height: 'calc(100vh - 240px)', objectFit: 'cover', objectPosition: 'center top', borderRadius: '12px', border: '2px solid #39ff14', boxShadow: '0 0 18px rgba(57,255,20,0.45), 0 0 60px rgba(57,255,20,0.15)', filter: 'brightness(1.05) contrast(1.05)' }}/>
            </div>
          </div>
        </div>

        <div id="introduction" className="scroll-section">
          <Introduction />
        </div>

        <div id="projects" className="scroll-section full-height">
          <Project />
        </div>

        <div id="skills" className="scroll-section full-height">
          <Skills />
        </div>

        <div id="resume" className="scroll-section full-height">
          <Resume_Section />
        </div>

        <div id="contact" className="scroll-section full-height">
          <Contact />
        </div>

      </div>
    </div>
  )
}

export default App
