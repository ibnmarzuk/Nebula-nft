import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#020208]">
      <div className="max-w-7xl mx-auto px-10">
        <h2 className="text-4xl font-black text-white text-center mb-16 uppercase tracking-tighter">Why Nebula Apes?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Community-First', desc: 'Built by the community, for the community.' },
            { title: 'Utility-Focused', desc: 'Holders get exclusive access and rewards.' },
            { title: 'Long-Term Vision', desc: 'We are here to stay, building the future.' },
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
            >
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">{item.title}</h3>
              <p className="text-white/60">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
