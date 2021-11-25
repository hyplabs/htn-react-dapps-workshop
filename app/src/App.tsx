import React, { useEffect, useState } from 'react'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { Counter__factory as CounterFactory } from './typechain/factories/Counter__factory'
import { Counter } from './typechain/Counter'
import { injected } from './utils/connectors'
import { useEagerConnect, useInactiveListener } from './utils/hooks'
import { Signer } from '@ethersproject/abstract-signer'

// Update with the contract address logged out to the CLI when it was deployed
// NOTE: the contract address must match the network MetaMask is connected to
const contractAddress = process.env.REACT_APP_SMART_CONTRACT_ADDRESS

const WalletApp = () => {
  const [contract, setContract] = useState(undefined as Counter|undefined)
  const { chainId, account, activate, deactivate, active, library } = useWeb3React<Web3Provider>()

  // auto-connect connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect()
  useInactiveListener(!triedEager)

  useEffect(() => {
    if (!contractAddress) {
      throw new Error('Must set contract address as env var')
    }

    setContract(CounterFactory.connect(contractAddress, library?.getSigner(account as string) as Signer))
  }, [account, chainId, library])

  const _connectToMetamask = () => {
    activate(injected)
  }

  const _getCount = async () => {
    if (active && !!contract) {
      try {
        console.log("_getCount")
        console.log(contract)
        const resp = await contract?.functions.getCount()
        console.log(resp)
      } catch (err) {
        console.error(err)
      }
    }
  }

  const _countUp = async () => {
    if (active && !!contract) {
      try {
        console.log("_countUp")
        console.log(contract)
        const resp = await contract?.functions.countUp()
        console.log(resp)
      } catch (err) {
        console.error(err)
      }
    }
  }

  const _countDown = async () => {
    if (active && !!contract) {
      try {
        console.log("_countDown")
        console.log(contract)
        const resp = await contract?.functions.countDown()
        console.log(resp)
      } catch (err) {
        console.error(err)
      }
    }
  }

  return (
    <div>
      <div>ChainId: {chainId}</div>
      <div>Account: {account}</div>
      {active ? (
        <div>
          ✅
          <button onClick={() => deactivate()}>
            deactivate
          </button>
          <br />
          <button onClick={_getCount}>Get Count</button>
          <button onClick={_countUp}>Count Up</button>
          <button onClick={_countDown}>Count Down</button>
        </div>
      ) : (
        <button type="button" onClick={_connectToMetamask}>
          Connect
        </button>
      )}
    </div>
  )
}

export default WalletApp