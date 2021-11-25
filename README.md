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
npx hardhat run --network hardhat scripts/deploy.ts
```

The typechain directory can be taken directly from button-tranche repo.Generating the right typechain interfaces depends on which framework you are using i.e truffle or openzeppelin.
In the case you are using the OpenZeppelin framework, I believe running 
```
npx hardhat typechain
```
in the root of the project directory will genetrate the typechain directory with interfaces in that directory


The above command will deploy the smart contracts locally via `Hardhat` and print the smart contract address to console, you need to set the smart contract address as an env var for the app. Go to the `./app` directory then run the following command

```
cp .env.example .env
```

Open the new `.env` file and set the `REACT_APP_SMART_CONTRACT_ADDRESS` variable to the value obtained when launching the smart contract. Then run the app with the following command

```
yarn start
```


### Tools Used

* [`Web3-React`](https://github.com/NoahZinsmeister/web3-react)
    * Can use injected `web3` directly if you prefer but `web3-react` simplifies some React related features
* [`Ethers.js`](#)
* [`Hardhat`](#)
    * Can run an Ethereum network on localhost
    * Alternatively, use [`Ganache`](https://www.trufflesuite.com/ganache) from the `truffle-suite` instead
* [`Typechain`](#)
    * To auto-generate Typescript interfaces for smart contracts and a useful CLI for deploying the contract
* [`Truffle`](#)
    * For easy smart contract testing
* [`AntDesign`](#)
    * Nice looking components, not related to any blockchain stuff
