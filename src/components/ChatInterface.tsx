import React, { useState } from 'react';
import { Send, Play, Download } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

interface ChatInterfaceProps {
  moduleTitle: string;
  moduleDescription: string;
}

function ChatInterface({ moduleTitle, moduleDescription }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    // TODO: Integrate with backend AI service
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm a mock response. In the future, I'll be powered by AI!",
        sender: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);
  };

  const handleStartAnalysis = () => {
    // TODO: Implement analysis start
    console.log('Starting analysis...');
  };

  const handleDownloadAnalysis = () => {
    // TODO: Implement analysis download
    console.log('Downloading analysis...');
  };

  return (
    <div className="flex flex-col h-full">
      {/* Module Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-3xl font-heading font-bold text-light-text dark:text-dark-text">
          {moduleTitle}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          {moduleDescription}
        </p>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.sender === 'user'
                    ? 'bg-light-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-light-text dark:text-dark-text'
                }`}
              >
                <p>{message.content}</p>
                <span className="text-xs opacity-70 mt-1 block">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <form onSubmit={handleSendMessage} className="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-light-primary dark:bg-dark-primary text-white rounded-lg hover:opacity-90"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatInterface;
