import './chatbot.css'
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
            <button className="chatbot-toggle" onClick={() => setOpen(o => !o)} aria-label="Toggle chat">
                <img src={chatIcon} alt="Chat" width={48} height={48} draggable="false" />
            </button>

            {open && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <span>Carson's Assistant</span>
                        <button onClick={() => setOpen(false)} aria-label="Close chat">✕</button>
                    </div>

                    <div className="chatbot-messages">
                        {messages.map((msg, i) => (
                            <div key={i} className={`chatbot-msg chatbot-msg--${msg.from}`}>
                                <span className="chatbot-msg-text">{msg.text}</span>
                                {msg.action === 'download_resume' && (
                                    <a
                                        href={resumePdf}
                                        download="Carson_Resume.pdf"
                                        className="chatbot-download"
                                    >
                                        Download Resume
                                    </a>
                                )}
                            </div>
                        ))}
                        {loading && (
                            <div className="chatbot-msg chatbot-msg--bot chatbot-msg--loading">
                                <span>Thinking</span>
                                <span className="chatbot-dots"><span>.</span><span>.</span><span>.</span></span>
                            </div>
                        )}
                        <div ref={bottomRef} />
                    </div>

                    <div className="chatbot-input-row">
                        <input
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={handleKey}
                            placeholder="Ask me anything..."
                            disabled={loading}
                            autoFocus
                        />
                        <button onClick={sendMessage} disabled={loading || !input.trim()}>
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Chatbot
