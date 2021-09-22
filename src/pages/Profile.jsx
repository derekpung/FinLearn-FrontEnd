import React,{ useState, useEffect } from 'react';
import Page, { PageSection } from '@components/Page';
import { Button, Divider } from '@mui/material';
import { FaUpload, FaFileAlt, FaAward } from 'react-icons/fa';
import ButtonGrid from '@components/ButtonGrid';
import UserInfo from '@components/UserInfo';
import ListShare from '@components/ListShare';
import Empty from '@components/Empty';
import Loading from '@components/Loading';
import { useAppContext } from '@src/Context';
import { getCompletedById } from '@js/transaction'

function Profile() {
  const [ isLoading, setIsLoading ] = useState(true)
  const [ achievements, setAchievements ] = useState([])
  const { user, notImplemented } = useAppContext()

  const btnBehaviorGen = (label) => notImplemented

  useEffect(() => {
    if (user && isLoading) {
      getCompletedById(user.sub, setAchievements)
      .finally(
        setIsLoading(false)
      )
    }
  }, [ isLoading, user ])
  return (
    isLoading ?
    <Loading />
    :(
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
              href="/explore"
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