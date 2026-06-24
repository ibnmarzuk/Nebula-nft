import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#020208] to-[#020208] -z-10" />
      
      <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <div className="space-y-2">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-[0.3em]">Phase 01: The Emergence</span>
            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tighter uppercase text-white">
              <span className="block">Own the</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">Nebula Future</span>
            </h1>
          </div>
          <p className="text-lg text-white/60 max-w-lg leading-relaxed">
            Join 5,555 unique Nebula Apes living on the Ethereum blockchain. A collection designed for the explorers of the new digital frontier.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full font-black uppercase tracking-widest text-sm hover:scale-[1.02] transition-all shadow-[0_10px_30px_rgba(147,51,234,0.3)]">
              Mint Now
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all backdrop-blur-sm">
              Join Community
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative"
        >
          <div className="w-full aspect-square rounded-3xl bg-white/5 border border-white/10 p-1">
            <div className="w-full h-full rounded-[22px] bg-[#101020] flex items-center justify-center text-white text-6xl opacity-80 shadow-2xl">
              🦍
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
