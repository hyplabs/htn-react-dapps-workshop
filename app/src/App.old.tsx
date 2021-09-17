
import './App.css';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers'
import { Counter__factory as CounterFactory } from './typechain/factories/Counter__factory'
import { Counter } from './typechain/Counter'

// Update with the contract address logged out to the CLI when it was deployed 
const contractAddress = '0xb6ed175C8d5bF8819a8a347965dE713AeD4135da'
// const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'

function App() {
  const _window = window as any
  const [accounts, setAccounts] = useState([] as string[])
  const [contract, setContract] = useState(null as Counter|null)

  useEffect(() => {
    requestAccount()
    const provider = new ethers.providers.Web3Provider(_window.ethereum)
    setContract(CounterFactory.connect(contractAddress, provider.getSigner()))
  }, [])

  // request access to the user's MetaMask account
  async function requestAccount() {
    try {
      const accounts = await _window.ethereum.request({ method: 'eth_requestAccounts' })
      setAccounts(accounts)
    }
    catch (err) {
      console.error(err)
    }
  }
  
  const getCount = async () => {
    if (typeof _window.ethereum !== 'undefined') {
      try {
        const resp = await contract?.functions.getCount()
        console.log(resp)
      } catch (err) {
        console.error(err)
      }
    }
  }

  const countUp = async () => {
    if (typeof _window.ethereum !== 'undefined') {
      try {
        const resp = await contract?.functions.countUp()
        console.log(resp)
      } catch (err) {
        console.error(err)
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        { JSON.stringify(accounts) }
        <button onClick={getCount}>Get Count</button>
        <button onClick={countUp}>Count Up</button>
        <button onClick={requestAccount}>Request Account</button>
      </header>
    </div>
  );
}

export default App;