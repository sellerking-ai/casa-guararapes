import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SectorCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  whatsappLink: string;
}

export function SectorCard({ icon: Icon, title, description, whatsappLink }: SectorCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, borderColor: "#f5a800", boxShadow: "0 10px 30px -10px rgba(30, 111, 212, 0.3)" }}
      className="bg-white p-6 rounded-[32px] border-2 border-[#1e6fd4] shadow-sm flex flex-col items-center justify-between text-center h-full w-full max-w-full"
    >
      <div className="w-20 h-20 bg-[#e8f0fb] rounded-3xl flex items-center justify-center mb-6 p-4">
        <Icon size={48} className="text-[#1e6fd4]" />
      </div>

      <h3 className="text-[17px] sm:text-xl font-black mb-3 text-[#0d2d5e] uppercase tracking-tighter leading-tight">
        {title}
      </h3>

      <p className="text-gray-500 mb-8 text-sm font-medium leading-relaxed">
        {description}
      </p>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto w-full min-h-[56px] py-3 bg-[#1e6fd4] text-white font-black uppercase tracking-widest text-[14px] rounded-[999px] flex items-center justify-center text-decoration-none shadow-md"
        style={{
          fontWeight: 900,
          letterSpacing: '0.1em',
        }}
      >
        <span style={{whiteSpace: 'nowrap'}}>CONTATO</span>
      </a>
    </motion.div>
  );
}