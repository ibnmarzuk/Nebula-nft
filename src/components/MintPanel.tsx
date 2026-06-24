import { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

export default function MintPanel() {
  const { isConnected } = useAccount();
  const [quantity, setQuantity] = useState(1);
  const totalSupply = 5555;
  const minted = 2143;
  const progress = (minted / totalSupply) * 100;

  return (
    <section id="mint" className="py-24 bg-[#020208]">
      <div className="max-w-xl mx-auto px-10">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest opacity-50 mb-1">Public Sale Progress</h3>
              <div className="text-4xl font-mono font-black">{minted.toLocaleString()} <span className="text-white/20">/ {totalSupply.toLocaleString()}</span></div>
            </div>
            <div className="text-right">
              <h3 className="text-sm font-bold uppercase tracking-widest opacity-50 mb-1">Mint Price</h3>
              <div className="text-4xl font-mono font-black">0.05 ETH</div>
            </div>
          </div>

          <div className="w-full h-3 bg-white/10 rounded-full mb-8 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-600 to-indigo-400 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>

          {isConnected ? (
            <div className="flex space-x-4">
              <div className="flex items-center bg-white/10 border border-white/10 rounded-2xl px-6">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-xl font-bold p-2 hover:text-purple-400">-</button>
                <span className="mx-6 font-mono text-xl font-bold">{quantity.toString().padStart(2, '0')}</span>
                <button onClick={() => setQuantity(Math.min(10, quantity + 1))} className="text-xl font-bold p-2 hover:text-purple-400">+</button>
              </div>
              <button className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-[1.02] transition-all shadow-[0_10px_30px_rgba(147,51,234,0.3)]">
                Mint Now
              </button>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-white/60 mb-6">Connect your wallet to start minting.</p>
              <ConnectButton />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
