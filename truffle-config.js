const HDWalletProvider = require("@truffle/hdwallet-provider");
const path = require("path");

const testMnemonic =
  "explain soul power employ mixture essay hurdle swarm guitar ladder bicycle napkin";

module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    cldev: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    "ropsten-infura": {
      provider: () =>
        new HDWalletProvider(
          testMnemonic,
          //  디버깅이 완료되면 추후에 수정 예정
          "https://ropsten.infura.io/v3/" + "110b3d20e09c451fae0892bf19f6ed85"
        ),
      network_id: 3,
      gas: 4700000,
      gasPrice: 10000000000
    },
    live: {
      provider: () => {
        return new HDWalletProvider(process.env.MNEMONIC, process.env.RPC_URL);
      },
      network_id: "*",
      // Necessary due to https://github.com/trufflesuite/truffle/issues/1971
      // Should be fixed in Truffle 5.0.17
      skipDryRun: true
    }
  },
  compilers: {
    solc: {
      version: "0.5.16"
    }
  }
};
