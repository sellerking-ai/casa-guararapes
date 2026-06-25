import React from 'react';
import { motion } from 'framer-motion';


export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-[80px] right-4 md:bottom-6 md:right-6 z-[100] flex flex-col items-end">

      <motion.a
        href="https://api.whatsapp.com/send/?phone=5537999697190&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            "0 10px 15px -3px rgba(37, 211, 102, 0.4), 0 4px 6px -2px rgba(37, 211, 102, 0.2)",
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-[60px] h-[60px] bg-[#25d366] rounded-full flex items-center justify-center shadow-xl relative"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp"
          className="w-[36px] h-[36px]"
        />
      </motion.a>
    </div>
  );
}
