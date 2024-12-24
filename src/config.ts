import 'dotenv/config';

type Config = {
    rpcUrl: string;
    chainId: number;
    address: string;
}


const mainnetConfig: Config = {
    rpcUrl: 'https://1rpc.io/base', //Rate limited and not for production systems.
    chainId: 8453,
    address: '0x5Dc939df0cf253873cf77B786A24d51BaA72cF75' // Taurus GA
}


export const getConfig = () => {
    if (process.env.TYPE_NETWORK === 'mainnet') {
      return mainnetConfig
    } else {
        throw new Error("Please provide a valid TYPE_NETWORK in the env file.")
    }
  };
