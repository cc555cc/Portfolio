const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const labelBase = "cursor-pointer outline-none text-base tracking-normal font-bold text-white bg-transparent py-3 px-4 flex-1 min-w-0 no-underline select-none transition-colors duration-[250ms] [outline-offset:-6px] flex items-center justify-center relative z-[2] [-webkit-tap-highlight-color:transparent] after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-[40%] after:w-px after:bg-white/25 last-of-type:after:hidden"

function Navbar() {
  return (
    <>
      {/* From Uiverse.io by ilkhoeri */}
      <input hidden id="theme-mode" type="checkbox" />
      <div className="bg-transparent fixed top-0 left-0 right-0 w-full z-[100] flex items-center justify-center py-2.5 px-4">
        <div className="relative z-[1] flex items-center w-full py-1 px-2 rounded-[10px] bg-transparent overflow-x-auto [scrollbar-width:none] [-webkit-overflow-scrolling:touch]">
          <input hidden className="peer/rd1" name="radio" id="rd-1" type="radio" defaultChecked />
          <input hidden className="peer/rd2" name="radio" id="rd-2" type="radio" />
          <input hidden className="peer/rd3" name="radio" id="rd-3" type="radio" />
          <input hidden className="peer/rd4" name="radio" id="rd-4" type="radio" />
          <input hidden className="peer/rd5" name="radio" id="rd-5" type="radio" />

          <label
            className={`peer/lb1 peer-checked/rd1:text-[#39ff14] peer-checked/rd1:[text-shadow:0_0_8px_rgba(57,255,20,0.6)] ${labelBase}`}
            htmlFor="rd-1"
            onClick={() => scrollTo('about')}
          >
            <span className="overflow-hidden line-clamp-1">About Me</span>
          </label>
          <label
            className={`peer/lb2 peer-checked/rd2:text-[#39ff14] peer-checked/rd2:[text-shadow:0_0_8px_rgba(57,255,20,0.6)] ${labelBase}`}
            htmlFor="rd-2"
            onClick={() => scrollTo('projects')}
          >
            <span className="overflow-hidden line-clamp-1">Project</span>
          </label>
          <label
            className={`peer/lb3 peer-checked/rd3:text-[#39ff14] peer-checked/rd3:[text-shadow:0_0_8px_rgba(57,255,20,0.6)] ${labelBase}`}
            htmlFor="rd-3"
            onClick={() => scrollTo('skills')}
          >
            <span className="overflow-hidden line-clamp-1">Skills</span>
          </label>
          <label
            className={`peer/lb4 peer-checked/rd4:text-[#39ff14] peer-checked/rd4:[text-shadow:0_0_8px_rgba(57,255,20,0.6)] ${labelBase}`}
            htmlFor="rd-4"
            onClick={() => scrollTo('resume')}
          >
            <span className="overflow-hidden line-clamp-1">Resume</span>
          </label>
          <label
            className={`peer/lb5 peer-checked/rd5:text-[#39ff14] peer-checked/rd5:[text-shadow:0_0_8px_rgba(57,255,20,0.6)] ${labelBase}`}
            htmlFor="rd-5"
            onClick={() => scrollTo('contact')}
          >
            <span className="overflow-hidden line-clamp-1">Contact</span>
          </label>

          <div className="flex items-center justify-center shrink-0 absolute z-0 origin-[0_0_0] transition-transform duration-500 ease-[cubic-bezier(0.33,0.83,0.99,0.98)] h-full w-[calc((100%_-_16px)/5)] left-2 peer-checked/rd1:translate-x-0 peer-checked/rd2:translate-x-full peer-checked/rd3:translate-x-[200%] peer-checked/rd4:translate-x-[300%] peer-checked/rd5:translate-x-[400%]"></div>
          <div className="absolute z-0 origin-[0_0_0] transition-transform duration-500 ease-[cubic-bezier(0.33,0.83,0.99,0.98)] rounded-none bg-transparent border-0 border-b-2 border-b-[#39ff14] left-2 h-[calc(100%_-_16px)] w-[calc((100%_-_16px)/5)] peer-checked/rd1:translate-x-0 peer-checked/rd2:translate-x-full peer-checked/rd3:translate-x-[200%] peer-checked/rd4:translate-x-[300%] peer-checked/rd5:translate-x-[400%] peer-hover/lb1:translate-x-0 peer-hover/lb2:translate-x-full peer-hover/lb3:translate-x-[200%] peer-hover/lb4:translate-x-[300%] peer-hover/lb5:translate-x-[400%]"></div>
        </div>
      </div>
    </>
  )
}

export default Navbar
