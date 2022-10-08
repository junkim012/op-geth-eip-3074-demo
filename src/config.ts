interface NetworkConfig {
    type: string
    wormholeChainId: number
    rpc: string
    bridgeAddress: string // core bridge address
    tokenBridgeAddress: string
    lmaoContractAddress: string
  }  

interface Config {
    [chain: string] : {
        [strategy: string] : {
            wormholeId: string
            contractAddress: string
            shortABI: [string]
            functionSig: string
        }
    }
}

// wormhole chain Ids: https://docs.wormhole.com/wormhole/contracts
export const config: Config = {
    Swap: {
        Fuji: {
            wormholeId: "6", 
            // trader joe's router 0xd7f655E3376cE2D7A2b08fF01Eb3B1023191A901
            // trader joe's pair 0x8730c9b589f4268a7d14294d2c98512eef7a9f99
            contractAddress: "0xd7f655E3376cE2D7A2b08fF01Eb3B1023191A901",
            // this shortABI needs to be updated to swapExactTokensfForTokens
            shortABI: ["function swapExactTokensForTokens (uint256 amountIn, uint256 amountOutMin, address[] calldata path)"],
            functionSig: 'swapExactTokensForETH'
        }, 
        Goerli: {
            wormholeId: "2",
            // uniswap v2 
            contractAddress: "0x7992275B169FeCd597e96409eBBD1826a671Fce8",
            shortABI: ['function swapExactETHForTokens(uint256 value, uint256 amountOutMin, address[] calldata path)'],
            functionSig: 'swapExactETHForTokens'
        }
    }, 
    Bridge: {
        Fuji: {
            wormholeId: "6", 
            contractAddress: "",
            shortABI: [''],
            functionSig: ''
        }, 
        Goerli: {
            wormholeId: "2",
            contractAddress: "",
            shortABI: [''],
            functionSig: ''
        }
    }
}

export const networkConfig: { [key: string]: NetworkConfig } = {
    goerli: {
      type: 'evm',
      wormholeChainId: 2,
      rpc: 'https://rpc.ankr.com/eth_goerli',
      bridgeAddress: '0x706abc4e45d419950511e474c7b9ed348a4a716c',
      tokenBridgeAddress: '0xf890982f9310df57d00f659cf4fd87e65aded8d7',
      // change manually after deployment
      lmaoContractAddress: '0x561F1Ac3685Be6F77B6c6270F20d1cc703F083De',
    },
    mumbai: {
      type: 'evm',
      wormholeChainId: 5,
      rpc: 'https://rpc.ankr.com/polygon_mumbai',
      bridgeAddress: '0x0cbe91cf822c73c2315fb05100c2f714765d5c20',
      tokenBridgeAddress: '0x377d55a7928c046e18eebb61977e714d2a76472a',
      // wrappedNativeAddress: '',
      // change manually after deployment
      lmaoContractAddress: '0x561F1Ac3685Be6F77B6c6270F20d1cc703F083De',
    }
  }