import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const nfts = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Nebula Ape #${(i + 1).toString().padStart(3, '0')}`,
  rarity: ['Common', 'Rare', 'Epic', 'Legendary'][i % 4],
  color: ['from-purple-500 to-cyan-500', 'from-pink-500 to-orange-500', 'from-blue-500 to-purple-500', 'from-green-500 to-teal-500'][i % 4],
}));

export default function NFTGallery() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section id="collection" className="py-24 bg-[#020208]">
      <div className="max-w-7xl mx-auto px-10">
        <h2 className="text-4xl font-black text-white text-center mb-16 uppercase tracking-tighter">Collection</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {nfts.map((nft) => (
            <motion.div
              key={nft.id}
              whileHover={{ y: -10 }}
              onClick={() => setSelected(nft)}
              className="cursor-pointer group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md"
            >
              <div className={`w-full aspect-square bg-gradient-to-br ${nft.color} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center text-4xl`}>
                🦍
              </div>
              <div className="p-4">
                <h3 className="font-bold text-white">{nft.name}</h3>
                <p className="text-[10px] uppercase tracking-widest text-purple-400 font-bold">{nft.rarity}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#101020] border border-white/10 p-8 rounded-3xl max-w-sm w-full text-center"
            >
              <div className={`w-full aspect-square bg-gradient-to-br ${selected.color} rounded-2xl mb-6 flex items-center justify-center text-8xl`}>🦍</div>
              <h2 className="text-2xl font-black text-white uppercase">{selected.name}</h2>
              <p className="text-purple-400 font-bold uppercase tracking-widest mt-2">{selected.rarity}</p>
              <button 
                onClick={() => setSelected(null)}
                className="mt-8 w-full py-4 bg-white/10 rounded-2xl font-bold uppercase hover:bg-white/20 transition-all"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
