const fs = require('fs');

const infuraApiKey = fs.readFileSync('./data/infuraApiKey.json','utf-8');
const mnemonic = fs.readFileSync('./data/mnemonic.json','utf-8');

const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    goerli: {
      provider: () => {
        return new HDWalletProvider(mnemonic, 'https://goerli.infura.io/v3/' + infuraApiKey)
      },
      network_id: '5',
      gas: 4465030,
      gasPrice: 10000000000,
    },
   
  },
  compilers: {
    solc: {
      version: "0.8.17",
    }
  },
};
