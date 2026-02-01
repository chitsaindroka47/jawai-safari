import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Leaf } from 'lucide-react';

const ThemeToggle = () => {
  const [isJungleMode, setIsJungleMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      // Default to dark (day) mode if no preference saved
      return saved === 'jungle';
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isJungleMode) {
      root.classList.add('jungle-mode');
      localStorage.setItem('theme', 'jungle');
    } else {
      root.classList.remove('jungle-mode');
      localStorage.setItem('theme', 'dark');
    }
  }, [isJungleMode]);

  return (
    <button
      onClick={() => setIsJungleMode(!isJungleMode)}
      className="p-2 rounded-full border border-border hover:border-primary/50 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isJungleMode ? 360 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isJungleMode ? (
          <Leaf size={20} className="text-primary" />
        ) : (
          <Sun size={20} className="text-primary" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
