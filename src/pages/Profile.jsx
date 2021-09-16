import React from 'react';
import Page from '@components/Page';
import Button from '@mui/material/Button';
import ButtonLine from '../components/ButtonLine';




function Profile() {
  let tokens = 8.26; 
  // define function for the tokens above
  return (
    <Page pageTitle="Profile">
      <h3>James Smith</h3>
      <div className="sideby">
        
      <i class='fas fa-coins' style={{ fontSize: "50px", color:'grey' }} ></i>
      <h3> LTE Tokens:{tokens}</h3>
      </div>

    
    <ButtonLine button1="Deposit" button2="Withdraw" button3="Transfer" message="Hello"></ButtonLine>
    
    
    <ButtonLine button1="&nbsp;&nbsp;Stake&nbsp;&nbsp;" button2="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lend&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" button3="Referral" message="Hi"></ButtonLine>
  
    <h3>Achievements</h3>

    <section>
      <h5>&nbsp;Financial Markets</h5>
      <Button variant="contained" className="share">Share</Button>
    </section>
    
      
    </Page>
  )
}

export default Profile