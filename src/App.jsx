import './App.css'
import Navbar from './module/navbar/navbar'
import Chatbot from './module/chatbot/chatbot'
import Name from './module/name/name'
import Introduction from './module/introduction/introduction'
import Project from './module/project/project'
import Skills from './module/skills/skills'
import Resume_Section from './module/Resume/resume_module'
import Contact from './module/contact/contact'
import avatar from './assets/avatar.png'

function App(){
  return (
    <div className="App">
      <Chatbot />
      <Navbar />
      <div className="scroll-container">

        <div id="about" className="scroll-section">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '0 5vw'}} className="aboutMe">
            <div style={{ flex: 1, minWidth: 0 }}>
              <Name />
            </div>
            <div style={{ flexShrink: 0 }}>
              <img src={avatar} alt="Avatar" style={{ width: '40vw', maxWidth: '500px', height: 'auto' }}/>
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
