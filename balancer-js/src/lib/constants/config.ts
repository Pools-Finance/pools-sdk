import { Network } from './network';
import { BalancerNetworkConfig } from '@/types';

export const balancerVault = '0xBA12222222228d8Ba445958a75a0704d566BF2C8';

export const BALANCER_NETWORK_CONFIG: Record<Network, BalancerNetworkConfig> = {
    [Network.MAINNET]: {
        chainId: Network.MAINNET, //1
        addresses: {
            contracts: {
                vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
                multicall: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
            },
            tokens: {
                wrappedNativeAsset:
                    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
                lbpRaisingTokens: [
                    '0x6B175474E89094C44Da98b954EedeAC495271d0F',
                    '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
                    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
                ],
            },
        },
        urls: {
            subgraph:
                'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-v2',
        },
        pools: {
            bbausd: {
                id: '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb20000000000000000000000fe',
                address: '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb2',
            },
        },
    },
    [Network.POLYGON]: {
        chainId: Network.POLYGON, //137
        addresses: {
            contracts: {
                vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
                multicall: '0xa1B2b503959aedD81512C37e9dce48164ec6a94d',
            },
            tokens: {
                wrappedNativeAsset:
                    '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
            },
        },
        urls: {
            subgraph:
                'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-polygon-v2',
        },
        pools: {},
    },
    [Network.ARBITRUM]: {
        chainId: Network.ARBITRUM, //42161
        addresses: {
            contracts: {
                vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
                multicall: '0x269ff446d9892c9e19082564df3f5e8741e190a1',
            },
            tokens: {
                wrappedNativeAsset:
                    '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
            },
        },
        urls: {
            subgraph:
                'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-arbitrum-v2',
        },
        pools: {},
    },
    [Network.KOVAN]: {
        chainId: Network.KOVAN, //42
        addresses: {
            contracts: {
                vault: '0x511175F8ed270572eb679513C95098F2B6dAe4F2',
                multicall: '0xCa58c4fA30dce57Ac8226A7e00C105Ac58F51823',
            },
            tokens: {
                wrappedNativeAsset:
                    '0x88dabb4e1eb9999d05e04bcd704c17442fa88d72',
            },
        },
        urls: {
            subgraph:
                'https://api.thegraph.com/subgraphs/name/aleelus/pools-diss',
        },
        pools: {
            bbausd: {
                id: '0x8fd162f338b770f7e879030830cde9173367f3010000000000000000000004d8',
                address: '0x8fd162f338b770f7e879030830cde9173367f301',
            },
        },
    },
    [Network.ROPSTEN]: {
        chainId: Network.ROPSTEN, //3
        addresses: {
            contracts: {
                vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
                multicall: '0x53c43764255c17bd724f74c4ef150724ac50a3ed',
            },
            tokens: {
                wrappedNativeAsset:
                    '0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1',
            },
        },
        urls: {
            subgraph: '',
        },
        pools: {},
    },
    [Network.RINKEBY]: {
        chainId: Network.RINKEBY, //4
        addresses: {
            contracts: {
                vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
                multicall: '0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821',
            },
            tokens: {
                wrappedNativeAsset:
                    '0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1',
            },
        },
        urls: {
            subgraph:
                'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-rinkeby-v2',
        },
        pools: {},
    },
    [Network.GÖRLI]: {
        chainId: Network.GÖRLI, //5
        addresses: {
            contracts: {
                vault: '0x36c0B53da8ca335a5181aE0817736696FFFf21Cb',
                multicall: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
            },
            tokens: {
                wrappedNativeAsset:
                    '0x16326CD4AEAfd2dD38bbf29979bF188FfB1f569c',
            },
        },
        urls: {
            subgraph:
                'https://subgraph.web3-infra.network/subgraphs/name/nakama/pools-goerli',
        },
        pools: {},
    },
};
