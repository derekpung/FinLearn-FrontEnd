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

    <section className="certificate">
      <div className="sideby">
        {/* BELOW SHOULD BE RETURNED BY A FUNCTION */}
      <h4 className="certTitle">Financial Markets</h4>
      
      <i class='fas fa-award' style={{ fontSize: "60px", color:'grey' }}></i>
      {/* <i class='fas fa-graduation-cap' style={{ fontSize: "50px", color:'grey' }}></i> */}
      </div>
      <div className="sideby">
      <i class='fas fa-school' style={{ fontSize: "24px", color:'grey' }}></i> <p className="contents">FM University</p>
      </div>
      <p className="contents"><span style={{fontSize:"24px", color: "grey"}}>&#10004;</span> Completed on Aug. 12, 2021</p>
      
      <Button variant="contained" className="share">Share</Button>
      
      <p className="space">&nbsp;</p>
    </section>
    <h3 className="subheading">Career</h3>
    <p className="par">Upload your CV/Resume for career opportunities.</p>
    <Button variant="contained" className="uploadCV" style={{width: "3in", left: "0.25in"}}><i class="fa fa-upload"></i>Upload CV</Button>
    
      
    </Page>
  )
}

export default Profile