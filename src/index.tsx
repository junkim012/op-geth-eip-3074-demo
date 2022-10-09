import { darkTheme, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
  Chain
} from 'wagmi'
// import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

import '@rainbow-me/rainbowkit/styles.css'
import './style/index.css'

import App from './pages/App'
import { persistor, store } from './states'
import theme from './theme'
// import { fantomChain, fantomTestnetChain } from './utils/rainbow-chains'

const localhost8545: Chain = {
  id: 1234,
  name: "EIP-3074", 
  network: "eip3074",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH", 
    decimals: 18
  },
  rpcUrls: {
    public: "http://localhost:8545",
    default: "http://localhost:8545"
  },
  testnet: true
}

const { chains, provider } = configureChains(
  [
    chain.goerli, chain.polygonMumbai, localhost8545
  ],
  [
    // alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }),
    publicProvider(),
  ],
)

const { connectors } = getDefaultWallets({
  appName: 'xHolas',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

const rainbowKitTheme = darkTheme({
  accentColor: '#7b3fe4',
  accentColorForeground: 'white',
  borderRadius: 'small',
  fontStack: 'system',
  overlayBlur: 'small',
})

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  // <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={rainbowKitTheme}
        showRecentTransactions
      >
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
              <HelmetProvider>
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <App />
                </ThemeProvider>
              </HelmetProvider>
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </RainbowKitProvider>
    </WagmiConfig>
  // </React.StrictMode>,
)
