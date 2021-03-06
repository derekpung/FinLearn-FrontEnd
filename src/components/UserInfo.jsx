import React from 'react';
import { Avatar, Grid, Stack, Typography } from '@mui/material';
import { FaCoins } from 'react-icons/fa'
import Balance from './Balance.js'
import LTEToken from '../artifacts/contracts/LTEToken.sol/LTEToken.json'

function UserInfo({ userData }) {
  const Token = LTEToken;
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2 }}
    >
      <Grid
        item
      >
        <Avatar 
          alt={`${userData.given_name || userData.nickname} avatar`} 
          src={userData.picture || null} 
          sx={{ width: 80, height: 80 }} 
          variant="square" />
      </Grid>
      <Grid
        item
        >
        <Typography variant="h5">{userData.given_name || userData.nickname}</Typography> 
        <Stack
          spacing={1}
          direction="row">
            <FaCoins size="2em"/>
            {/* <Typography variant="h6"> LTE Tokens: {userData.wallet || 0}</Typography> */}
            <Balance  tokenContract={Token}/>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default UserInfo