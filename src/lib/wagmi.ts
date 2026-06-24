import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet } from 'wagmi/chains';
import { QueryClient } from '@tanstack/react-query';

export const config = getDefaultConfig({
  appName: 'Nebula Apes',
  projectId: 'YOUR_PROJECT_ID', // Placeholder, user will need to configure this
  chains: [mainnet],
  ssr: false, 
});

export const queryClient = new QueryClient();
