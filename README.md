# HackTheNorth 2021 dApp Workshop

### Getting Started

Start by deploying the smart contract locally or to a testnet (Rinkeby, Ropsten, etc..)

```
cd ./token
yarn install
npx hardhat node
```

Then in another terminal window and from the `./token` directory, run the following

```
npx hardhat run --network localhost scripts/deploy.ts
```

To verify that the contract deployed, go back to the first window where the hardhat node is running.
You should see something like the below. If you do not, then the contract did not deploy.

```
eth_sendTransaction
  Contract deployment: Counter
  Contract address:    0x5fbdb2315678afecb367f032d93f642f64180aa3
  Transaction:         0xf761a15e1683b7273f73a4d6ab8f7f95ba01fd06128cef3fc7aa98bc248b1e09
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  Value:               0 ETH
  Gas used:            383269 of 383269
  Block #1:            0x74cafb4c31fcf5f2ba9d95140d6d7c42fae301f9d08407cbdeb1348af8166778
```

The typechain directory can be taken directly from smart contracts repository. 
If necessary, generating the right typechain interfaces depends on which framework you are using i.e truffle or openzeppelin.
In the case you are using the OpenZeppelin framework run:
```
npx hardhat typechain
```
in the root of the project directory will genetrate the typechain directory with interfaces in that directory


The above command will deploy the smart contracts locally via `Hardhat` and print the smart contract address to console, you need to set the smart contract address as an env var for the app. Go to the `./app` directory then run the following command

```
cp .env.example .env
```

Open the new `.env` file and set the `REACT_APP_SMART_CONTRACT_ADDRESS` variable to the value obtained when launching the smart contract.

Now, go back to the `/token` directory and run the following three commands to copy necessary files over to the `/app` directory.

```
cp -r typechain ../app/src
cp -r artifacts ../app/src
cp -r cache ../app/src
```

Then run the app with the following commands

```
yarn
yarn start
```


### Tools Used

* [`Web3-React`](https://github.com/NoahZinsmeister/web3-react)
    * Can use injected `web3` directly if you prefer but `web3-react` simplifies some React related features
* [`Ethers.js`](https://docs.ethers.io/v5/)
* [`Hardhat`](https://hardhat.org/getting-started/)
    * Can run an Ethereum network on localhost
    * Alternatively, use [`Ganache`](https://www.trufflesuite.com/ganache) from the `truffle-suite` instead
* [`Typechain`](https://github.com/dethcrypto/TypeChain)
    * To auto-generate Typescript interfaces for smart contracts and a useful CLI for deploying the contract
* [`Truffle`](https://trufflesuite.com/)
    * For easy smart contract testing
* [`AntDesign`](https://ant.design/components/overview/)
    * Nice looking components, not related to any blockchain stuff
