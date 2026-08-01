import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Bot, Trash2, Share2, Mic, Image, Calculator, CheckCircle2 } from 'lucide-react';
import { AIChatMessage } from '../types';
import { apiService } from '../services/api';

export const AIConsultantPage: React.FC = () => {
  const [messages, setMessages] = useState<AIChatMessage[]>([
    {
      id: 'm-1',
      sender: 'ai',
      text: `👋 **Namaste! I am Sintu AI Planner**, your virtual event architect at Sintu Decorators (Shiv Mandir, Mungroura, Jamalpur).\n\nHow can I assist with your event planning today?\n\n• **Minimal Small Party:** Starts @ ₹50,000\n• **Minimal Wedding Event:** Starts @ ₹1.5 Lakhs - ₹2 Lakhs\n• **Moderate Wedding + Catering:** Starts @ ₹7 Lakhs - ₹8 Lakhs+\n\n*Note: Final pricing depends on guest count, decor complexity, luxury demands, and catering food dishes.*`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    'Estimate budget for 500 guest wedding + catering in Jamalpur',
    'Minimal wedding decor cost for 200 guests (under 2 Lakhs)',
    'Minimal small party decor options starting at 50k',
    'Compare German waterproof pandal vs satin drape setup',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputMessage;
    if (!query.trim()) return;

    const userMsg: AIChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    try {
      const response = await apiService.consultAI(query);
      setIsTyping(false);

      const aiMsg: AIChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: response.reply,
        suggestedBudget: response.suggestedBudget,
        recommendedServices: response.recommendedServices,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch {
      setIsTyping(false);
    }
  };

  const handleExportToWhatsApp = (text: string) => {
    const waUrl = `https://wa.me/919431200000?text=${encodeURIComponent(
      `Hi Sintu Decorators, I generated this proposal on your Sintu AI Planner:\n\n${text}`
    )}`;
    window.open(waUrl, '_blank');
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'm-1',
        sender: 'ai',
        text: `Chat cleared! Sintu AI Planner is ready for your next event query.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <div className="pt-28 pb-20 bg-white text-olive-700 min-h-screen flex flex-col font-sans">
      {/* Top Header Box */}
      <div className="max-w-5xl mx-auto px-4 w-full pt-4 pb-4 flex items-center justify-between border-b border-olive-700/10">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-olive-700 flex items-center justify-center shadow-md shrink-0">
            <Bot className="w-6 h-6 text-white animate-pulse" />
          </div>
          <div>
            <h1 className="font-serif text-lg font-bold text-olive-700 flex items-center gap-2">
              Sintu AI Planner
              <span className="px-2.5 py-0.5 text-[10px] bg-rose-700 text-white rounded-full font-extrabold uppercase tracking-widest flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                PRO
              </span>
            </h1>
            <p className="text-[10px] text-rose-700 font-extrabold uppercase tracking-widest">Modular AI Event & Catering Consultant</p>
          </div>
        </div>

        <button
          onClick={handleClearChat}
          className="p-2.5 rounded-xl text-olive-700 hover:text-rose-700 hover:bg-rose-50 transition-colors text-xs flex items-center gap-2 uppercase tracking-widest font-bold border border-rose-200"
          title="Clear Conversation"
        >
          <Trash2 className="w-5 h-5 text-rose-700" />
          <span className="hidden sm:inline">Clear Chat</span>
        </button>
      </div>

      {/* Main Chat Container */}
      <div className="max-w-5xl mx-auto px-4 w-full flex-1 flex flex-col my-4">
        <div className="flex-1 overflow-y-auto space-y-6 pr-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-9 h-9 rounded-full bg-olive-700 flex items-center justify-center shrink-0 mt-1 shadow-sm">
                  <Bot className="w-5 h-5 text-white" />
                </div>
              )}

              <div
                className={`max-w-2xl rounded-3xl p-5 shadow-sm space-y-3 ${
                  msg.sender === 'user'
                    ? 'bg-rose-700 text-white rounded-tr-none font-medium'
                    : 'bg-rose-50 border border-rose-200 text-olive-700 rounded-tl-none'
                }`}
              >
                <p className="text-xs sm:text-sm whitespace-pre-wrap leading-relaxed font-light">{msg.text}</p>

                {/* AI Budget Widget Card Box */}
                {msg.suggestedBudget && (
                  <div className="p-4 rounded-2xl bg-white border border-rose-200 space-y-2 mt-3 shadow-sm text-olive-700">
                    <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-widest">
                      <Calculator className="w-5 h-5 text-rose-700" />
                      Cost Estimation Summary
                    </div>
                    <p className="text-xl font-serif font-bold text-olive-700">
                      ₹{msg.suggestedBudget.min.toLocaleString('en-IN')} - ₹{msg.suggestedBudget.max.toLocaleString('en-IN')}
                    </p>
                    <p className="text-xs text-olive-600 font-light">{msg.suggestedBudget.description}</p>
                  </div>
                )}

                {/* Recommended Services Tags */}
                {msg.recommendedServices && msg.recommendedServices.length > 0 && (
                  <div className="pt-2 flex flex-wrap gap-2">
                    {msg.recommendedServices.map((serv, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-white border border-rose-200 text-rose-700 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-700" /> {serv}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between text-[10px] opacity-75 pt-1">
                  <span>{msg.timestamp}</span>
                  {msg.sender === 'ai' && (
                    <button
                      onClick={() => handleExportToWhatsApp(msg.text)}
                      className="flex items-center gap-1.5 text-rose-700 hover:underline font-bold uppercase tracking-wider"
                    >
                      <Share2 className="w-4 h-4 text-rose-700" />
                      Export to WhatsApp
                    </button>
                  )}
                </div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-9 h-9 rounded-full bg-olive-700 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-1 shadow-sm">
                  U
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 items-center text-olive-600 text-xs">
              <div className="w-9 h-9 rounded-full bg-olive-700 flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5 text-white animate-spin" />
              </div>
              <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 animate-pulse text-olive-700 font-medium">
                Sintu AI is computing decor estimates & themes...
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Prompt Chips */}
        <div className="py-3 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(prompt)}
              className="px-4 py-2.5 rounded-full bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 text-xs font-bold whitespace-nowrap transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-rose-700 shrink-0" />
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="pt-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2 bg-olive-50 border-2 border-olive-200 rounded-2xl p-2.5 shadow-md"
          >
            <button
              type="button"
              className="p-2.5 text-rose-700 hover:bg-white rounded-xl transition-colors"
              title="Voice Prompt"
            >
              <Mic className="w-5 h-5 text-rose-700" />
            </button>

            <button
              type="button"
              className="p-2.5 text-rose-700 hover:bg-white rounded-xl transition-colors"
              title="Image Attachment"
            >
              <Image className="w-5 h-5 text-rose-700" />
            </button>

            <input
              type="text"
              placeholder="Ask Sintu AI about wedding decor costs, mandap themes, or catering menus..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-1 bg-transparent border-none text-xs sm:text-sm text-olive-700 font-bold focus:outline-none px-2 font-sans placeholder-olive-500"
            />

            <button
              type="submit"
              disabled={!inputMessage.trim() || isTyping}
              className="p-3.5 rounded-xl bg-olive-700 hover:bg-rose-700 text-white font-bold shadow-md disabled:opacity-50 transition-all flex items-center justify-center"
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
