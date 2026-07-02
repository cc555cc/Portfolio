import { useState, useRef, useEffect } from 'react'
import resumePdf from '../../assets/Carson\'s resume.pdf'
import chatIcon from '../../assets/chat-bubble.svg'

const INITIAL_MESSAGE = {
    from: 'bot',
    text: "Hi! I'm a chatbot created by Carson. I was created as a restaurant themed rule-based but is now adjusted to reply to questions regarding his skills, projects, resume, or how to get in touch. Unfortunately, as a rule-based chatbot, my ability to answer is limited by the keywords that I was trained on. If you ask me something that I don't know, I will let you know.",
}

function Chatbot() {
    const [open, setOpen] = useState(false)
    const [messages, setMessages] = useState([INITIAL_MESSAGE])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const bottomRef = useRef(null)

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages, open])

    async function sendMessage() {
        const trimmed = input.trim()
        if (!trimmed || loading) return

        setMessages(prev => [...prev, { from: 'user', text: trimmed }])
        setInput('')
        setLoading(true)

        try {
            const res = await fetch('https://portfolio-production-7d71.up.railway.app/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: trimmed }),
            })
            const data = await res.json()
            const reply = data.reply

            if (reply && typeof reply === 'object' && reply.action === 'download_resume') {
                setMessages(prev => [...prev, { from: 'bot', text: reply.text, action: 'download_resume' }])
            } else {
                setMessages(prev => [...prev, { from: 'bot', text: String(reply) }])
            }
        } catch {
            setMessages(prev => [
                ...prev,
                { from: 'bot', text: "Couldn't connect to the server. Make sure the chatbot backend is running." },
            ])
        } finally {
            setLoading(false)
        }
    }

    function handleKey(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            sendMessage()
        }
    }

    return (
        <>
            <button
                className="fixed bottom-6 right-6 z-50 bg-transparent border-0 cursor-pointer p-0 [filter:drop-shadow(0_0_8px_rgba(57,255,20,0.4))] transition-[filter] duration-200 hover:[filter:drop-shadow(0_0_18px_rgba(57,255,20,0.75))]"
                onClick={() => setOpen(o => !o)}
                aria-label="Toggle chat"
            >
                <img src={chatIcon} alt="Chat" width={48} height={48} draggable="false" />
            </button>

            {open && (
                <div className="fixed bottom-[5.5rem] right-6 w-[340px] h-[480px] bg-[#0d0d0d] border border-[rgba(57,255,20,0.3)] rounded-xl flex flex-col z-50 shadow-[0_0_30px_rgba(57,255,20,0.1)] overflow-hidden">
                    <div className="flex justify-between items-center px-4 py-3 border-b border-[rgba(57,255,20,0.2)] shrink-0">
                        <span className="text-[#39ff14] font-semibold text-[0.9rem] tracking-[0.05em]">Carson's Assistant</span>
                        <button
                            className="bg-transparent border-0 text-white/45 cursor-pointer text-base leading-none p-1 transition-colors duration-150 hover:text-white"
                            onClick={() => setOpen(false)}
                            aria-label="Close chat"
                        >✕</button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-[0.6rem] chatbot-scrollbar">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`max-w-[82%] px-3 py-2 rounded-xl text-sm leading-6 flex flex-col gap-[0.4rem] whitespace-pre-line ${
                                    msg.from === 'bot'
                                        ? 'self-start bg-[rgba(57,255,20,0.07)] border border-[rgba(57,255,20,0.18)] text-white/[0.88]'
                                        : 'self-end bg-[rgba(57,255,20,0.14)] border border-[rgba(57,255,20,0.32)] text-white'
                                }`}
                            >
                                <span>{msg.text}</span>
                                {msg.action === 'download_resume' && (
                                    <a
                                        href={resumePdf}
                                        download="Carson_Resume.pdf"
                                        className="inline-block mt-1 px-3 py-[0.35rem] border border-[#39ff14] rounded-md text-[#39ff14] text-[0.8rem] font-semibold no-underline text-center transition-[background,color] duration-200 hover:bg-[#39ff14] hover:text-black"
                                    >
                                        Download Resume
                                    </a>
                                )}
                            </div>
                        ))}
                        {loading && (
                            <div className="self-start max-w-[82%] px-3 py-2 rounded-xl text-sm bg-[rgba(57,255,20,0.07)] border border-[rgba(57,255,20,0.18)] flex flex-row items-center gap-[0.2rem] text-white/50 italic">
                                <span>Thinking</span>
                                <span className="flex">
                                    <span className="animate-chatbot-blink">.</span>
                                    <span className="animate-chatbot-blink [animation-delay:0.2s]">.</span>
                                    <span className="animate-chatbot-blink [animation-delay:0.4s]">.</span>
                                </span>
                            </div>
                        )}
                        <div ref={bottomRef} />
                    </div>

                    <div className="flex gap-2 p-3 border-t border-[rgba(57,255,20,0.2)] shrink-0">
                        <input
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={handleKey}
                            placeholder="Ask me anything..."
                            disabled={loading}
                            autoFocus
                            className="flex-1 bg-white/[0.04] border border-[rgba(57,255,20,0.28)] rounded-md px-3 py-2 text-white text-sm outline-none transition-[border-color] duration-200 focus:border-[#39ff14] placeholder:text-white/30 disabled:opacity-50"
                        />
                        <button
                            onClick={sendMessage}
                            disabled={loading || !input.trim()}
                            className="px-4 py-2 bg-[#39ff14] border-0 rounded-md text-black text-sm font-bold cursor-pointer transition-opacity duration-200 hover:opacity-85 disabled:opacity-40 disabled:cursor-default whitespace-nowrap"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Chatbot
