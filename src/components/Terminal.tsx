import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Terminal = () => {
  const [text, setText] = useState("");
  const fullText = "mern_developer --init --nextjs_specialist --build_scalable_apps";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="terminal-window p-6 max-w-2xl mx-auto"
    >
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <div className="font-mono text-sm">
        <div className="text-muted-foreground mb-2">
          alabizakariyyah@portfolio:~$
        </div>
        <div className="code-green">
          $ {text}
          <span className="animate-pulse">▊</span>
        </div>
        {text === fullText && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-2 text-muted-foreground"
          >
            <div>&gt; Initializing MERN development environment...</div>
            <div>&gt; Loading React, Node.js, Express, MongoDB...</div>
            <div className="code-green">&gt; System ready ✓</div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
