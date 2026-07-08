import { useEffect, useRef, useState } from "react"
import resumePdf from "../../assets/Carson's resume.pdf"
import { Document, Page, pdfjs } from "react-pdf"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString()

const HIGHLIGHTS = [
  "3.81 GPA · President's Honour List",
  "Python · React · TypeScript · SQL",
  "5+ shipped projects",
]

function Resume() {
  const containerRef = useRef(null)
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  const [pageSize, setPageSize] = useState(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setContainerSize({ width, height })
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const renderWidth = pageSize
    ? pageSize.originalWidth *
      Math.min(
        containerSize.width / pageSize.originalWidth,
        containerSize.height / pageSize.originalHeight
      )
    : undefined

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
        Resume
      </h2>
      <div
        ref={containerRef}
        className="flex-1 h-[90%] w-[27%] flex items-center justify-center overflow-hidden rounded-xl border"
      >
        <Document file={resumePdf}>
          <Page
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            width={renderWidth}
            onLoadSuccess={(page) =>
              setPageSize({ originalWidth: page.originalWidth, originalHeight: page.originalHeight })
            }
            className="[&_canvas]:!w-full [&_canvas]:!h-full"
          />
        </Document>
      </div>
      <p className="text-[1.1rem] text-white/65 m-0">DOWNLOAD MY RESUME HERE</p>
      <a
        className="py-3 px-8 border-2 border-[#ffffff] rounded-lg text-[#ffffff] text-base font-semibold tracking-[0.1em] no-underline uppercase transition-colors duration-[250ms] hover:bg-[#ffffff] hover:text-black"
        href={resumePdf}
        download="Carson_Resume.pdf"
      >
        Download Resume
      </a>
    </section>
  )
}

export default Resume
