import { useState } from 'react';
import { ethers } from 'ethers'
import Message from './Message'
import { Button } from '@mui/material';

const tokenAddress = "0x176216a856c7e4E9CB6E0Af38Fb382d7a115416a"

const Balance = (props) => {

  const [balance, setBalance] = useState()
  const [showBalance, setShowBalance] = useState(false)


  async function getBalance() {
    if (typeof window.ethereum !== 'undefined') {
      const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(tokenAddress, props.tokenContract.abi, provider)
      const balance = await contract.balanceOf(account);
      console.log("Balance: ", balance.toString());
      setBalance(balance.toString());
      setShowBalance(true);
    }
  }

  // async function faucet() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();
  //     const contract = new ethers.Contract(tokenAddress, props.tokenContract.abi, signer);
  //     contract.faucet(account[0], 100);
  //   }
  // }
    return (
        <div>
        <Button onClick={getBalance} fullWidth variant="contained">check my balance</Button>
        { showBalance ? <Message balance={parseInt(balance/1000000000000000000)}/> : null }
        </div>
    )
}

export default Balance