import './App.css'
import Navbar from './module/navbar/navbar'
import Name from './module/name/name'
import Introduction from './module/introduction/introduction'
import Project from './module/project/project'
import avatar from './assets/avatar.png'

function App(){
  return (
    <div className="App">
      <Navbar />
      <div className="scroll-container">

        <div className="scroll-section">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '0 5vw'}} className="aboutMe">
            <div style={{ flex: 1, minWidth: 0 }}>
              <Name />
            </div>
            <div style={{ flexShrink: 0 }}>
              <img src={avatar} alt="Avatar" style={{ width: '40vw', maxWidth: '500px', height: 'auto' }}/>
            </div>
          </div>
        </div>

        <div className="scroll-section">
          <Introduction />
        </div>

        <div className="scroll-section full-height">
          <Project />
        </div>

      </div>
    </div>
  )
}

export default App
