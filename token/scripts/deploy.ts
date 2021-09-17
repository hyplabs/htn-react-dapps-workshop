import { ethers } from "hardhat"

async function main() {
  // deploy Counter (simple - custom) contract
  const counterFactory = await ethers.getContractFactory('Counter')
  const contract = await counterFactory.deploy()
  console.log('Counter Contract Address = ', contract.address)
  console.log('Counter Txn Hash = ', contract.deployTransaction.hash)
  console.log('Deployed By = ', contract.deployTransaction.from)
  await contract.deployed()
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })