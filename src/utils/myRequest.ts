import axios from 'axios';

const instance = axios.create({
  baseURL: `https://sepolia.infura.io/v3/${import.meta.env.VITE_PROJECT_INFURA_API_KEY}`,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json"
  }
});

export default instance;
