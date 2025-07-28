import React, { useState } from 'react';
import '../styles/Chatbot.css';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! I’m Career Buddy 🤖 – How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (input.trim() === '') return;
    const newMessages = [...messages, { type: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    // Fake bot response (you can later integrate OpenAI API here)
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: "Thanks for your query! We'll guide you soon 🚀" }]);
    }, 1000);
  };

  return (
    <div className="chatbot-container">
      <button className="chat-toggle" onClick={toggleChat}>
        💬
      </button>

      {isOpen && (
        <div className="chat-window shadow">
          <div className="chat-header">
            <span>Career Buddy</span>
            <button onClick={toggleChat}>×</button>
          </div>
          <div className="chat-body">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.type}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask something..."
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage}>➤</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
