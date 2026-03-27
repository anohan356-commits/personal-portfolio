export default function Footer() {
  return (
    <footer className="bg-surface-dim w-full py-12 px-8 border-t border-outline-variant/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-7xl mx-auto uppercase tracking-[0.1em] text-xs font-bold">
        <div className="text-lg font-black text-primary cursor-pointer hover:opacity-80 transition-opacity">
          জোড়াতালি ইঞ্জিনিয়ারিং
        </div>
        
        <div className="flex gap-8 text-on-surface-variant">
          <a href="#" className="hover:text-secondary hover:scale-110 active:scale-90 transition-all duration-300">Twitter</a>
          <a href="#" className="hover:text-secondary hover:scale-110 active:scale-90 transition-all duration-300">Instagram</a>
          <a href="#" className="hover:text-secondary hover:scale-110 active:scale-90 transition-all duration-300">Dribbble</a>
          <a href="#" className="hover:text-secondary hover:scale-110 active:scale-90 transition-all duration-300">LinkedIn</a>
        </div>
        
        <div className="text-on-surface-variant opacity-50">
          কপিরাইট নাই, কারণ আমি নিজেও সব গুগল থেকে কপি করেছি।
        </div>
      </div>
    </footer>
  );
}
