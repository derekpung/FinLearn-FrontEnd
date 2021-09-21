import React,{ useState, useEffect } from 'react';
import Page, { PageSection } from '@components/Page';
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Divider } from '@mui/material';
import { FaUpload, FaFileAlt, FaAward } from 'react-icons/fa';
import axios from "axios";
import ButtonGrid from '@components/ButtonGrid';
import UserInfo from '@components/UserInfo';
import ListShare from '@components/ListShare';
import Empty from '@components/Empty';
import { useAppContext } from '@src/Context';


function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [ achievements, setAchievements ] = useState([])
  const { notImplemented } = useAppContext()

  // add auth0 details to user database if the user does not exist in the database
  useEffect(() => {
    if (user && user.sub) {
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

  const btnBehaviorGen = (label) => notImplemented

  return (
    isAuthenticated && (
    <Page pageTitle="Profile" className="page" containertype="containerprofile">
      <PageSection>
        <UserInfo userData={user} />
      </PageSection>
      <PageSection>
        <ButtonGrid 
          labels={["Deposit", "Withdraw", "Transfer", "Stake", "Lend", "Referral"]} 
          behaviorGenerator={btnBehaviorGen}/>
      </PageSection>
      <Divider/>
      <PageSection sectionTitle="Achievements">
        {achievements.length === 0 ?
          <Empty
          title="You have not completed any courses (yet)"
          body="Start by enrolling in a course and learn to earn LTE tokens"
          icon={<FaAward/>}
          button={
            <Button 
              onClick={notImplemented}
              variant="contained">Start Learning!</Button>
          }/>
          :
          <ListShare listData={achievements} />
        }
      </PageSection>
      <Divider />
      <PageSection sectionTitle="Career">
        {/* List Potential Careers | Prompt CV */}
        <Empty
          title="You have not uploaded your CV (yet)"
          body="Upload your CV/Resume for career opportunities"
          icon={<FaFileAlt/>}
          button={
            <Button 
              startIcon={<FaUpload/>}
              onClick={notImplemented}
              variant="contained">Upload CV</Button>
          }/>
      </PageSection>
    </Page>
    )
  )
}

export default Profile