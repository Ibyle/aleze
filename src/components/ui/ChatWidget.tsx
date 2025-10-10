import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot, Clock } from 'lucide-react';
type Message = {
  id: number;
  content: string;
  sender: 'user' | 'agent' | 'bot';
  timestamp: Date;
};
export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatMode, setChatMode] = useState<'ai' | 'human'>('ai');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  // Initial bot welcome message
  useEffect(() => {
    if (messages.length === 0) {
      const initialMessage = chatMode === 'ai' ? "Hello! I'm Aleze's AI assistant. How can I help you today with dredging, construction materials, or equipment rentals?" : 'Welcome to Aleze Global! A customer service representative will be with you shortly. How can we assist you today?';
      setMessages([{
        id: 1,
        content: initialMessage,
        sender: chatMode === 'ai' ? 'bot' : 'agent',
        timestamp: new Date()
      }]);
    }
  }, [chatMode, messages.length]);
  // Scroll to bottom of chat when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }, [messages]);
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    // Simulate response based on chat mode
    setTimeout(() => {
      let responseContent = '';
      if (chatMode === 'ai') {
        // AI responses based on keywords in user message
        const lowerCaseInput = inputValue.toLowerCase();
        if (lowerCaseInput.includes('dredging') || lowerCaseInput.includes('sand')) {
          responseContent = 'Our dredging services provide high-quality sharp sand for construction projects. Would you like more information about our dredging capabilities or sand quality?';
        } else if (lowerCaseInput.includes('granite') || lowerCaseInput.includes('stone')) {
          responseContent = 'We offer various grades of granite for construction and infrastructure projects. Our granite is sourced from quality quarries. Would you like pricing information?';
        } else if (lowerCaseInput.includes('equipment') || lowerCaseInput.includes('rent') || lowerCaseInput.includes('excavator') || lowerCaseInput.includes('payloader')) {
          responseContent = 'We rent Payloaders, Excavators, and other heavy equipment for construction projects. All our equipment is well-maintained and available for flexible rental terms.';
        } else if (lowerCaseInput.includes('waterfront') || lowerCaseInput.includes('lease')) {
          responseContent = 'Our waterfront leasing options provide prime locations for commercial and industrial use. Would you like to schedule a site visit to see available properties?';
        } else if (lowerCaseInput.includes('price') || lowerCaseInput.includes('cost') || lowerCaseInput.includes('quote')) {
          responseContent = 'For accurate pricing and quotes, please provide details about your project requirements. You can also contact our sales team at 08180086527 for a personalized quote.';
        } else if (lowerCaseInput.includes('contact') || lowerCaseInput.includes('speak') || lowerCaseInput.includes('human')) {
          responseContent = 'You can reach our team at 08180086527 or email us at alezeglobalconcept56@gmail.com. Would you like me to switch you to live chat with a human agent?';
        } else {
          responseContent = 'Thank you for your message. How can I assist you with our dredging services, construction materials, or equipment rentals today?';
        }
      } else {
        // Human agent responses
        responseContent = 'Thank you for your message. Our customer service team is reviewing your inquiry and will respond shortly. For immediate assistance, please call us at 08180086527.';
      }
      const botMessage: Message = {
        id: Date.now(),
        content: responseContent,
        sender: chatMode === 'ai' ? 'bot' : 'agent',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  const toggleChatMode = () => {
    const newMode = chatMode === 'ai' ? 'human' : 'ai';
    setChatMode(newMode);
    setMessages([]);
  };
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  return <>
      {/* Chat Button */}
      <motion.button className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-primary shadow-lg flex items-center justify-center z-50 text-white hover:bg-primary-light transition-colors" onClick={toggleChat} whileHover={{
      scale: 1.1
    }} whileTap={{
      scale: 0.9
    }}>
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        y: 20,
        scale: 0.95
      }} animate={{
        opacity: 1,
        y: 0,
        scale: 1
      }} exit={{
        opacity: 0,
        y: 20,
        scale: 0.95
      }} transition={{
        duration: 0.3
      }} className="fixed bottom-24 right-6 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-lg shadow-xl z-50 flex flex-col">
            {/* Chat Header */}
            <div className="bg-primary text-white p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center">
                <img src="https://via.placeholder.com/40/1E5F8C/FFFFFF?text=AG" alt="Aleze Global" className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <h3 className="font-semibold">Aleze Global Support</h3>
                  <p className="text-xs text-gray-200">
                    {chatMode === 'ai' ? 'AI Assistant' : 'Live Chat'}
                  </p>
                </div>
              </div>
              <button onClick={toggleChatMode} className="text-xs bg-white text-primary px-2 py-1 rounded flex items-center">
                {chatMode === 'ai' ? <User size={12} className="mr-1" /> : <Bot size={12} className="mr-1" />}
                {chatMode === 'ai' ? 'Switch to Human' : 'Switch to AI'}
              </button>
            </div>
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              {messages.map(message => <div key={message.id} className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-lg p-3 ${message.sender === 'user' ? 'bg-primary text-white' : message.sender === 'bot' ? 'bg-accent-light text-neutral-dark' : 'bg-secondary text-white'}`}>
                    <p className="text-sm">{message.content}</p>
                    <div className="text-right mt-1">
                      <span className="text-xs opacity-75 flex items-center justify-end">
                        <Clock size={10} className="mr-1" />
                        {formatTime(message.timestamp)}
                      </span>
                    </div>
                  </div>
                </div>)}
              {isTyping && <div className="flex justify-start mb-4">
                  <div className="bg-gray-200 rounded-lg p-3 max-w-[80%]">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{
                  animationDelay: '0ms'
                }}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{
                  animationDelay: '150ms'
                }}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{
                  animationDelay: '300ms'
                }}></div>
                    </div>
                  </div>
                </div>}
              <div ref={messagesEndRef} />
            </div>
            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center">
                <input type="text" value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} placeholder="Type your message..." className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                <button onClick={handleSendMessage} disabled={inputValue.trim() === '' || isTyping} className={`px-4 py-2 bg-primary text-white rounded-r-md ${inputValue.trim() === '' || isTyping ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-light'}`}>
                  <Send size={20} />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                {chatMode === 'ai' ? 'AI responses are automated. For complex inquiries, please switch to human support.' : 'Our team typically responds within 15 minutes during business hours (8AM-5PM, Mon-Fri).'}
              </p>
            </div>
          </motion.div>}
      </AnimatePresence>
    </>;
};