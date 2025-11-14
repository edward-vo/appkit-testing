import { cookieStorage, createStorage, http, injected } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, base, baseSepolia } from '@reown/appkit/networks'
import { coinbaseWallet } from 'wagmi/connectors'


// Get projectId from https://dashboard.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [base, baseSepolia]

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks,
  connectors: [
    coinbaseWallet({
      appName: 'Coinbase',
      enableMobileWalletLink: true,
      headlessMode: true,
      reloadOnDisconnect: false,      
    }),
  ],
})

export const config = wagmiAdapter.wagmiConfig