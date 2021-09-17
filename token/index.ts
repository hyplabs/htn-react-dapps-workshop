/**
 * A very simple sandbox file for interacting with the contracts quickly. Can be removed.
 */

import { ethers } from 'ethers'
import { InuToken__factory as InuTokenFactory } from './typechain'

const inuTokenAddress = process.env.INU_TOKEN_ADDRESS as string
const ownerPrivateKey = process.env.INU_TOKEN_OWNER_PRIV_KEY as string

const start = async () => {
    const provider = ethers.providers.getDefaultProvider('rinkeby')
    const owner = new ethers.Wallet(ownerPrivateKey, provider)
    const inuToken = InuTokenFactory.connect(inuTokenAddress, owner)

    console.log(owner._isSigner)
    console.log(`Balance Of ${owner.address}: `, await inuToken.balanceOf(owner.address))
}

start()