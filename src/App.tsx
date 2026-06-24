/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClientProvider } from '@tanstack/react-query';
import { config, queryClient } from './lib/wagmi';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import NFTGallery from './components/NFTGallery';
import MintPanel from './components/MintPanel';

export default function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <div className="min-h-screen bg-[#020208] text-[#e0e0f0]">
            <Navbar />
            <main>
              <Hero />
              <Stats />
              <About />
              <NFTGallery />
              <MintPanel />
            </main>
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
