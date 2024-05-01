import axios from 'axios';

const infuraInstance = axios.create({
  baseURL: `https://sepolia.infura.io/v3/${import.meta.env.VITE_PROJECT_INFURA_API_KEY}`,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json"
  }
});

const etherscanInstance = axios.create({
  baseURL: 'https://api.etherscan.io/',
  timeout: 100000,
  headers: {
    "Content-Type": "application/json"
  }
});

const sepoliaEtherscanInstance = axios.create({
  baseURL: 'https://api-sepolia.etherscan.io/',
  timeout: 100000,
  headers: {
    "Content-Type": "application/json"
  }
});

const request = async (method: string, chainId: any, params: any) => {
  return await infuraInstance.post(
    `https://sepolia.infura.io/v3/${import.meta.env.VITE_PROJECT_INFURA_API_KEY}`,
    {
      jsonrpc: "2.0",
      method, // : "eth_estimateGas",
      params,
      id: chainId,
    },
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};

export {
  infuraInstance,
  etherscanInstance,
  sepoliaEtherscanInstance,
  request,
};
