import React,{ useState, useEffect } from 'react';
import Page from '@components/Page';
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Button, Stack } from '@mui/material';
import axios from "axios";
import ButtonGrid from '@components/ButtonGrid';

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const tokens = 8.26

  // add auth0 details to user database if the user does not exist in the database
  useEffect(() => {
    if (user.sub) {
      axios.get(`http://localhost:3002/user/by-uid?uid=${user.sub}`).then((response)=>{
        if(response.data.length === 0)
        {
          console.log("user does not exist");
          axios.post("http://localhost:3002/user/add",
            {id: user.sub, name: user.nickname, email: user.email,
            signup: user.updated_at, verified: user.email_verified}).then((response)=>{
            console.log(response);})
        }
        else
        {
          console.log("user exists");
        }
      })
    }
  },[])

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
    <Page pageTitle="Profile" className="page" containertype="containerprofile">
      <div className="containerprofile">
      <br />
      <div className="containerprofile">
      <Stack direction="row" spacing={2}>
      <Avatar alt="James Smith" src="https://images.unsplash.com/photo-1473492201326-7c01dd2e596b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" sx={{ width: 80, height: 80 }} variant="square" />
      </Stack>
      </div>
      <div className="containerprofile">
      <h3 id="user-nickname">{user.nickname}</h3> 
      </div>
      <div className="sideby">
        
      <i class='fas fa-coins' style={{ fontSize: "50px", color:'grey' }} ></i>
      <h3> LTE Tokens:{tokens}</h3>
      </div>
    
      <ButtonGrid 
        labels={["Deposit", "Withdraw", "Transfer", "Stake", "Lend", "Referral"]} 
        behaviorGenerator={btnBehaviorGen}/>

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
    </div>

    </Page>
    )
  )
}

export default Profile