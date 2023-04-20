require('dotenv').config()
const { Web3Provider } = require('@ethersproject/providers')
const { Contract } = require('@ethersproject/contracts')
const { Pool, Token } = require('@uniswap/v3-sdk')
const axios = require('axios')
const poolAbiJson = require('abi/ETHRDNTpool.json')

const provider = new Web3Provider('https://arbitrum-mainnet.infura.io/v3/' + process.env.INFURA_API_KEY);
const poolAddress = '0x446BF9748B4eA044dd759d9B9311C70491dF8F29'; // ETH/USDC pool address for Uniswap v3
const poolABI = poolAbiJson;

const poolContract = new Contract(poolAddress, poolABI, provider);

const telegramApiUrl = 'https://api.telegram.org/bot' + process.env.TELEGRAM_BOT_TOKEN + '/sendMessage';
