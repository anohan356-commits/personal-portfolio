import { motion } from "motion/react";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="fixed top-0 w-full z-50 bg-surface-dim/60 backdrop-blur-xl border-b border-outline-variant/10"
    >
      <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-black tracking-tighter text-primary cursor-pointer hover:opacity-80 transition-opacity">
          জোড়াতালি ইঞ্জিনিয়ারিং
        </div>
        
        <div className="hidden md:flex items-center space-x-12 lowercase tracking-tighter font-medium">
          <a href="#works" className="text-primary border-b-2 border-secondary pb-1 transition-transform active:scale-90">কীর্তিকলাপ</a>
          <a href="#process" className="text-on-surface-variant hover:text-on-surface transition-all active:scale-90">গুগল করার পদ্ধতি</a>
          <a href="#clientele" className="text-on-surface-variant hover:text-on-surface transition-all active:scale-90">ভিক্টিমদের তালিকা</a>
          <a href="#connect" className="text-on-surface-variant hover:text-on-surface transition-all active:scale-90">নক দিন</a>
        </div>

        <div className="flex items-center gap-6">
          <button className="sunset-gradient text-black px-6 py-2 rounded-full text-xs uppercase tracking-widest font-bold hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(220,143,255,0.4)]">
            সাহস থাকলে ডাকুন
          </button>
          <Menu className="text-primary md:hidden cursor-pointer" />
        </div>
      </div>
    </motion.nav>
  );
}
