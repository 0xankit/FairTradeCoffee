var HDWallet = require("truffle-hdwallet-provider");
var MNEMONIC = "family lobster pet theme level chunk loud memory swing aim seek state";
var ENDPOINT = "https://rinkeby.infura.io/7d53ea41e1204454a552beedb268fcd8";
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
            provider: function () {
                return new HDWallet("family lobster pet theme level chunk loud memory swing aim seek state", "https://rinkeby.infura.io/v3/7d53ea41e1204454a552beedb268fcd8")
            },
            network_id: 1,
            gas: 4500000,
            gasPrice: 10000000000,
        }
  },
   compilers: {
    solc: {
      version: "0.4.24",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
};