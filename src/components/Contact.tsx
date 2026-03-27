import { motion } from "motion/react";
import { Mail, Headphones } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto" id="connect">
      <div className="grid md:grid-cols-2 gap-20 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <h2 className="text-6xl font-black lowercase tracking-tighter mb-8 leading-none">
            চলুন একসাথে কিছু একটা <span className="text-primary text-glow">জোড়াতালি দেই।</span>
          </h2>
          <p className="text-on-surface-variant text-lg mb-12 max-w-sm">
            আপনার প্রজেক্টকে পরবর্তী লেভেলে নিতে চান? নিচের ফর্মটি পূরণ করুন অথবা সরাসরি নক দিন।
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6 group cursor-pointer transition-transform hover:translate-x-2 duration-300">
              <div className="w-14 h-14 rounded-full bg-surface-container-highest flex items-center justify-center border border-outline-variant/20 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(220,143,255,0.3)] transition-all">
                <Mail className="text-primary w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">সাধারণ জিজ্ঞাসা</p>
                <p className="text-xl font-bold group-hover:text-primary transition-colors">nohanahmed39@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 group cursor-pointer transition-transform hover:translate-x-2 duration-300">
              <div className="w-14 h-14 rounded-full bg-surface-container-highest flex items-center justify-center border border-outline-variant/20 group-hover:border-secondary/50 group-hover:shadow-[0_0_15px_rgba(255,111,121,0.3)] transition-all">
                <Headphones className="text-secondary w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">প্রজেক্ট নিয়ে আলাপ</p>
                <p className="text-xl font-bold group-hover:text-secondary transition-colors">নাই</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="glass-panel p-8 md:p-12 rounded-xl border border-outline-variant/10 hover:border-primary/20 transition-all duration-700"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant block ml-1">আপনার নাম (আসলটা)</label>
                <input 
                  className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-on-surface placeholder:text-outline-variant/50" 
                  placeholder="আপনার পরিচয়" 
                  type="text" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant block ml-1">ইমেইল (স্প্যাম করবেন না)</label>
                <input 
                  className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-on-surface placeholder:text-outline-variant/50" 
                  placeholder="যোগাযোগের মাধ্যম" 
                  type="email" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant block ml-1">কাজের ধরণ</label>
              <select className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-on-surface appearance-none cursor-pointer">
                <option className="bg-black">কপি-পেস্ট ইঞ্জিনিয়ারিং</option>
                <option className="bg-black">মার্কেটিং জোড়াতালি</option>
                <option className="bg-black">বাগ-কে ফিচার বানানো</option>
                <option className="bg-black">গুগল সার্চ স্পেশালিস্ট</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant block ml-1">কি করতে হবে? (গুগল করে সমাধানযোগ্য হলে ভালো)</label>
              <textarea 
                className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-on-surface placeholder:text-outline-variant/50" 
                placeholder="আপনার আইডিয়া বলুন, আমি গুগল করে দেখছি..." 
                rows={4}
              ></textarea>
            </div>
            
            <button className="w-full sunset-gradient py-5 rounded-lg uppercase tracking-[0.2em] font-black text-black text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_10px_30px_rgba(255,111,121,0.2)] hover:shadow-[0_15px_40px_rgba(255,111,121,0.4)]">
              মিশন শুরু করুন
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
