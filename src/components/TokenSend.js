import { useState } from 'react';
import { ethers } from 'ethers'
import { Button, TextField } from '@mui/material';

const tokenAddress = "0x176216a856c7e4E9CB6E0Af38Fb382d7a115416a"

const TokenSend = (props) => {

  const [userAccount, setUserAccount] = useState()
  const [amount, setAmount] = useState()

  // request access to the user's MetaMask account
  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function sendCoins() {
  if (typeof window.ethereum !== 'undefined') {
    await requestAccount()
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(tokenAddress, props.tokenContract.abi, signer);
    const transation = await contract.transfer(userAccount, amount);
    await transation.wait();
    console.log(`${amount} Coins successfully sent to ${userAccount}`);
  }
}
    return (
        <div>
        <TextField onChange={e => setUserAccount(e.target.value)} style ={{width: '23%'}} size="small" variant="outlined" label="Payee 0x address" />
        <TextField onChange={e => setAmount(e.target.value+'000000000000000000')} style ={{width: '8%'}} size="small" variant="outlined" label="Amount (e.g. 1)" />
        <Button onClick={sendCoins} size="medium" variant="contained">send </Button>
        </div>
    )
}

export default TokenSend