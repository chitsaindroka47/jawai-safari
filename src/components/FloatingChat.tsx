import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const contacts = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'bg-green-500',
      action: () => window.open('https://wa.me/918619821140?text=Hello! I am interested in booking a safari.', '_blank'),
    },
    {
      name: 'Call Now',
      icon: Phone,
      color: 'bg-blue-500',
      action: () => window.open('tel:+918619821140', '_blank'),
    },
    {
      name: 'Email',
      icon: Mail,
      color: 'bg-orange-500',
      action: () => window.open('mailto:info@wildadventures.com', '_blank'),
    },
  ];

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute bottom-20 right-0 flex flex-col gap-3"
          >
            {contacts.map((contact, index) => (
              <motion.button
                key={contact.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                onClick={() => {
                  contact.action();
                  setIsOpen(false);
                }}
                className="flex items-center gap-3 glass-card pr-4 hover:bg-primary/10 transition-colors group"
              >
                <div className={`w-12 h-12 ${contact.color} rounded-xl flex items-center justify-center`}>
                  <contact.icon size={22} className="text-white" />
                </div>
                <span className="text-sm font-medium whitespace-nowrap">{contact.name}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button - Static, no pulse */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 backdrop-blur-md ${
          isOpen 
            ? 'bg-destructive' 
            : 'bg-card/80 border border-border hover:border-primary/50'
        }`}
        style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={28} className="text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={28} className="text-primary" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

export default FloatingChat;