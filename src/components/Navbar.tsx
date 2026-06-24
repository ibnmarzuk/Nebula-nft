import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020208]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-cyan-400 rounded-lg flex items-center justify-center font-bold text-xl shadow-[0_0_20px_rgba(147,51,234,0.5)]">N</div>
            <span className="text-2xl font-black tracking-tighter uppercase italic">NEBULA APES</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest text-white/60">
            {['Home', 'About', 'Collection', 'Roadmap', 'FAQ'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
          
          <div className="hidden md:block">
            <ConnectButton />
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-[#020208] border-b border-white/10 p-4">
          <div className="flex flex-col space-y-4">
            {['Home', 'About', 'Collection', 'Roadmap', 'FAQ'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white" onClick={() => setIsOpen(false)}>
                {item}
              </a>
            ))}
            <ConnectButton />
          </div>
        </div>
      )}
    </nav>
  );
}
