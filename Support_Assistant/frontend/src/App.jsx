import { useState } from "react";
import "./App.css";

function App() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const sendMessage = () => {
        if (!message.trim()) return;

        setMessages([
            ...messages,
            {
                sender: "user",
                text: message,
            },
        ]);

        setMessage("");
    };

    return (
        <div className="app">
            <aside className="sidebar">
                <h2>🤖 AI Support</h2>

                <button>Dashboard</button>
                <button>💬 Chat</button>
                <button>🎫 Tickets</button>
                <button>📚 Knowledge Base</button>
                <button>📊 Analytics</button>
                <button>📄 Reports</button>
            </aside>

            <main className="chat-container">
                <header>
                    <h2>AI Customer Support Assistant</h2>
                    <span>🟢 Online</span>
                </header>

                <div className="chat-area">
                    <div className="welcome">
                        <h1>🤖</h1>
                        <h2>Hello! How can I help you?</h2>
                    </div>

                    {messages.map((item, index) => (
                        <div className="user-message" key={index}>
                            {item.text}
                        </div>
                    ))}
                </div>

                <div className="input-area">
                    <input
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        placeholder="Type your message..."
                    />

                    <button onClick={sendMessage}>➤</button>
                </div>
            </main>
        </div>
    );
}

export default App;