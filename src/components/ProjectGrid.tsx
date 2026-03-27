import { motion } from "motion/react";
import { Filter } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "গুগল সার্চ ইঞ্জিনিয়ারিং",
    category: "কপি-পেস্ট ইঞ্জিনিয়ারিং",
    description: "অন্যের কোড কপি করে নিজের নামে চালিয়ে দেওয়ার এক অনন্য নিদর্শন।",
    image: "public/2.png",
    span: "md:col-span-8",
    color: "primary"
  },
  {
    id: 2,
    title: "সেমিকোলন খোঁজার যুদ্ধ",
    category: "অসীম ধৈর্য",
    description: "সারা রাত জেগে একটা মিসিং সেমিকোলন খুঁজে বের করার পর যে আনন্দ হয়, তা অমূল্য।",
    image: "public/1.png",
    span: "md:col-span-4",
    color: "secondary"
  },
  {
    id: 3,
    title: "বাগ নাকি ফিচার?",
    category: "মার্কেটিং স্ট্র্যাটেজি",
    description: "ক্লায়েন্টকে বুঝানো যে এই গ্লিচটা আসলে একটা 'আর্টিস্টিক চয়েস' ছিল।",
    image: "public/3.png",
    span: "md:col-span-4",
    color: "tertiary"
  },
  {
    id: 4,
    title: "সার্চিং অলিম্পিক",
    category: "গুগল স্পেশালিস্ট",
    description: "সঠিক কি-ওয়ার্ড দিয়ে স্ট্যাক ওভারফ্লো থেকে সমাধান বের করার এক মহাকাব্য।",
    image: "public/4.png",
    span: "md:col-span-8",
    color: "primary"
  }
];

export default function ProjectGrid() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto" id="works">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
      >
        <div>
          <span className="uppercase tracking-[0.3em] text-secondary text-xs font-bold">সেরা কিছু জোড়াতালি</span>
          <h2 className="text-5xl font-bold lowercase tracking-tighter mt-4">আমার যত কীর্তিকলাপ</h2>
          <div className="h-0.5 w-32 sunset-gradient mt-4"></div>
        </div>
        <div className="flex gap-4">
          <button className="p-4 rounded-full border border-outline-variant/20 text-on-surface-variant hover:text-primary hover:border-primary/50 transition-all active:scale-90">
            <Filter className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 rounded-full bg-surface-container-highest uppercase tracking-widest text-xs font-bold border border-outline-variant/20 hover:bg-surface-container-high hover:border-primary/30 transition-all active:scale-90">
            সবগুলো দেখুন
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
            className={`${project.span} group cursor-pointer`}
          >
            <div className="relative overflow-hidden rounded-xl bg-surface-container aspect-[16/10] mb-6 border border-transparent group-hover:border-primary/40 transition-all duration-500 shadow-none group-hover:shadow-[0_0_40px_rgba(220,143,255,0.15)]">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out-quint" 
                src={project.image} 
                alt={project.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-8 left-8">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] uppercase font-bold tracking-widest backdrop-blur-md border border-primary/20">
                  {project.category}
                </span>
              </div>
            </div>
            <h3 className="text-2xl font-bold lowercase group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-on-surface-variant mt-2 font-light">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
