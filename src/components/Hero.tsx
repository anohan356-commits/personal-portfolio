import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-8 max-w-7xl mx-auto overflow-hidden pt-24">
      <div className="grid md:grid-cols-2 gap-12 items-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-surface-container-highest border border-outline-variant/20">
            <span className="uppercase tracking-[0.2em] text-[10px] text-tertiary-fixed font-bold">কফি শেষ না হওয়া পর্যন্ত এভেইলেবল</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] text-glow">
            ৯৯% গুগল সার্চ আর <span className="inline-block sunset-text">১% কপাল</span>—এই দিয়েই আমার সব প্রজেক্ট চলে।
          </h1>
          
          <p className="text-xl text-on-surface-variant max-w-md leading-relaxed">
            আমি ওয়েবসাইট বানাই না, বরং গুগল থেকে অন্যের বানানো কোড কপি করে জোড়াতালি দেই। আর দিনের বেলা মার্কেটিং ম্যানেজার সেজে ঘুরি।
          </p>
          
          <div className="flex items-center gap-6 pt-4">
            <button className="sunset-gradient px-8 py-4 rounded-full uppercase tracking-widest font-bold text-sm text-black shadow-[0_0_30px_rgba(220,143,255,0.3)] hover:scale-105 hover:shadow-[0_0_40px_rgba(220,143,255,0.5)] active:scale-95 transition-all duration-300">
              কীর্তিকলাপ দেখুন
            </button>
            <button className="group flex items-center gap-3 text-primary uppercase tracking-widest text-sm font-bold active:scale-95 transition-all">
              কপি-পেস্ট পদ্ধতি
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="relative aspect-square md:aspect-auto h-full"
        >
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <div className="absolute inset-0 sunset-gradient blur-[120px] opacity-20 rounded-full"></div>
            <img 
              className="w-full h-full object-cover rounded-xl border border-outline-variant/10 shadow-2xl hover:border-primary/30 transition-colors duration-500" 
              src="public/hero-image.png" 
              alt="Developer Life Illustration"
              referrerPolicy="no-referrer"
            />kr
          </motion.div>
        </motion.div>
      </div>

      {/* Atmospheric Grid Background */}
      <div className="absolute inset-0 -z-10 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #dc8fff 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
    </section>
  );
}
