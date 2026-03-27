import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "আবুল কাশেম",
    role: "প্রতিষ্ঠাতা, ভুতুড়ে টেক",
    quote: "আমি জানতাম না যে গুগল করে এত সুন্দর ওয়েবসাইট বানানো সম্ভব! উনি আসলেই একজন জাদুকর।",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlUIoY9xwSjgGsufs7_T44Pt3n6Uf-C76XZ9H4lnzfzPXBakaV-apycSlZZIP16i-U-K-6ucXoIgFF09kq-W_-RVapkxmrYgpTDp8ZExfzzTTlRNtG49tsG4U-22s1P6okV81-GGqPPqruwMHg9ZKtn_Kv0crwugUSPDwfbID9ZIqZt1r7hctgQYCMuOjEfDuupfmaFppn5b_nLpVlcMt0iJ-PLNRyPdkMjV9owlMA-HIXOIep9OvvZTHY67tkQmFOYUjTez5ReE0",
    color: "primary"
  },
  {
    id: 2,
    name: "জেরিন তাসনিম",
    role: "আর্ট ডিরেক্টর, জোড়াতালি লিমিটেড",
    quote: "উনি যখন বললেন বাগগুলো আসলে ফিচার, আমি বিশ্বাস করে নিয়েছিলাম। ওনার কনভেন্সিং পাওয়ার অসাধারণ!",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLPltgtyDVfs2aMDEL662RJD41Ytnq3HMVz6_AvOwhwrpsljCTcBm3MyficnTOr6LthtF7Dlw54EJsqTOM36RuwdRTIdTLUedpghfmo7ZEBan94c8xNY3AdwJDZKDHCq_EMHwv4h7gHPzd8NKVmxR80bTPo4c0QrdxUCk4OxmiB5qQSNGTPIzIbmjytL__Ut2BR34s2KRSC5O_QHN2NIFDgR-i3CbjDRGpaLU4SJGyFgs5gVYeez3pr-UKGEokWcelFMXVoJjMjO4",
    color: "secondary"
  },
  {
    id: 3,
    name: "ডেভিড বেকহ্যাম (নকল)",
    role: "প্রডিউসার, কফি অ্যান্ড কোড",
    quote: "মার্কেটিং ম্যানেজার হিসেবে উনি সেরা, কারণ উনি আমাকে বুঝিয়েছেন যে আমার প্রজেক্টের লস আসলে এক ধরণের ইনভেস্টমেন্ট!",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsphOMxCkqfnU7IMkSwO1hUN6YOwvBrmJQ6tWqCL1Gwsn202llTGtF0f_pFhI5_RqC2P_1LWqWjE_7ZoiGmhvXu2Claf1r26WXsLE0_DFv2rBJ0JySCwiZ82P0z3GPIYHaZPN0D41ruxwhpZdTJA_9PTAQtttFU-MunNhvRlcVxX23Hf7aZLLqQAiG1DgCpV17hLPsfJeDmI0orIuJlfgkOd2jQUg2sGqBk2jKm-sMgjdWJYWjBcM50gZ1mTTtgITs4hDo_odGJW8",
    color: "tertiary"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-surface-container-low" id="clientele">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[0.3em] text-tertiary text-xs font-bold">ভিক্টিমদের তালিকা</span>
          <h2 className="text-5xl font-bold lowercase tracking-tighter mt-4">ভিক্টিমদের আর্তনাদ</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="glass-panel p-10 rounded-xl relative overflow-hidden group hover:border-primary/50 transition-all duration-500"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 sunset-gradient opacity-10 rounded-full blur-3xl group-hover:opacity-30 transition-opacity"></div>
              
              <div className="flex gap-1 text-tertiary mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-lg italic leading-relaxed text-on-surface mb-8">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest overflow-hidden border border-primary/30 group-hover:border-primary transition-colors">
                  <img 
                    className="w-full h-full object-cover" 
                    src={t.image} 
                    alt={t.name}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-wide">{t.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
