import React from 'react';
import Page from '@components/Page';
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';
import ButtonGrid from '../components/ButtonGrid';
import '@styles/Profile.css'

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const tokens = 8.26
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const btnBehaviorGen = (label) => (
    (event) => {
      console.log(`clicked ${label}`)
    }
  )

  return (
    isAuthenticated && (
    <Page pageTitle="Profile">
      <h3>{user.nickname}</h3>
      <img src={user.picture} alt={user.name} />
      <div className="sideby">
        
      <i class='fas fa-coins' style={{ fontSize: "50px", color:'grey' }} ></i>
      <h3> LTE Tokens:{tokens}</h3>
      </div>
    
      <ButtonGrid 
        labels={["Deposit", "Withdraw", "Transfer", "Stake", "Lend", "Referral"]} 
        behaviorGenerator={btnBehaviorGen}/>

    <h3>Achievements</h3>

    <section>
      <div className="sideby">
      <h5>&nbsp;&nbsp;Financial Markets&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</h5>
      <br /> <br />
      <i class='fas fa-award' style={{ fontSize: "50px", color:'grey' }}></i>
      {/* <i class='fas fa-graduation-cap' style={{ fontSize: "50px", color:'grey' }}></i> */}
      </div>
      <Button variant="contained" className="share">Share</Button>
    </section>

    </Page>
    )
  )
}

export default Profile