import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User } from 'lucide-react';
import { AFFILIATE_LINK } from '../constants';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'agent';
  isLink?: boolean;
}

const LiveChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi there! 👋 Welcome to The Brain Song.", sender: 'agent' },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Listen for global open events (e.g. from Footer)
  useEffect(() => {
    const handleOpenChat = () => {
      setIsOpen(true);
      setUnreadCount(0);
      setHasInteracted(true);
    };

    window.addEventListener('open-chat', handleOpenChat);
    return () => window.removeEventListener('open-chat', handleOpenChat);
  }, []);

  // Auto-send a second message after a delay to grab attention
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setMessages(prev => [
          ...prev, 
          { id: 2, text: "Do you have any questions about fixing the 'Brain Leak' today?", sender: 'agent' }
        ]);
        if (!isOpen) {
            setUnreadCount(prev => prev + 1);
        }
      }
    }, 8000); // 8 seconds delay

    return () => clearTimeout(timer);
  }, [hasInteracted, isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
        scrollToBottom();
        setUnreadCount(0);
    }
  }, [isOpen, messages, isTyping]);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
        setUnreadCount(0);
        setHasInteracted(true);
    }
  };

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;
    
    const userMsg: Message = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);
    setHasInteracted(true);

    // Simulate agent typing and response
    setTimeout(() => {
        setIsTyping(false);
        const agentMsg: Message = { 
            id: Date.now() + 1, 
            text: "That's a great question! For the most accurate information regarding your specific needs, please refer to the official video presentation. It explains the scientific mechanism in detail.", 
            sender: 'agent',
            isLink: true
        };
        setMessages(prev => [...prev, agentMsg]);
    }, 2000);
  };

  return (
    <>
      {/* Chat Button */}
      <button 
        onClick={handleOpen}
        className={`fixed bottom-24 md:bottom-8 right-4 md:right-8 z-50 w-14 h-14 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 ${isOpen ? 'rotate-90 bg-slate-700 hover:bg-slate-600' : 'animate-bounce-slow'}`}
        aria-label="Toggle Live Chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
        
        {/* Unread Badge */}
        {!isOpen && unreadCount > 0 && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-slate-900 animate-pulse">
                {unreadCount}
            </div>
        )}
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-40 md:bottom-24 right-4 md:right-8 z-50 w-[350px] max-w-[calc(100vw-32px)] bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10 pointer-events-none'}`}
        style={{ height: '500px', maxHeight: '70vh' }}
      >
        {/* Header */}
        <div className="bg-indigo-900/50 p-4 rounded-t-2xl border-b border-slate-700 flex items-center gap-3">
            <div className="relative">
                <div className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-600 overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Support Agent" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-800"></div>
            </div>
            <div>
                <h4 className="font-bold text-white text-sm">Sarah - Support</h4>
                <p className="text-xs text-slate-400">Typically replies instantly</p>
            </div>
        </div>

        {/* Messages */}
        <div className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
            {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                        msg.sender === 'user' 
                        ? 'bg-indigo-600 text-white rounded-br-none' 
                        : 'bg-slate-700 text-slate-200 rounded-bl-none'
                    }`}>
                        {msg.text}
                        {msg.isLink && (
                            <a href={AFFILIATE_LINK} className="block mt-3 text-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-3 rounded text-xs transition-colors">
                                Watch Video Explanation →
                            </a>
                        )}
                    </div>
                </div>
            ))}
            {isTyping && (
                <div className="flex justify-start">
                    <div className="bg-slate-700 p-3 rounded-2xl rounded-bl-none flex gap-1 items-center">
                        <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></span>
                        <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                        <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></span>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="p-3 border-t border-slate-700 bg-slate-800 rounded-b-2xl">
            <div className="relative flex items-center gap-2">
                <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your question..." 
                    className="flex-grow bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-full py-2 px-4 focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <button 
                    type="submit"
                    disabled={!inputValue.trim()}
                    className="p-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full transition-colors"
                >
                    <Send className="w-4 h-4" />
                </button>
            </div>
            <div className="text-center mt-2">
                <p className="text-[10px] text-slate-500">
                    <span className="flex items-center justify-center gap-1">
                       <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> 
                       Agent is online
                    </span>
                </p>
            </div>
        </form>
      </div>
    </>
  );
};

export default LiveChatWidget;