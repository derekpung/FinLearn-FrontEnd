import React from 'react';
import Page, { PageSection } from '@components/Page'
import Empty from '@components/Empty'
import { Button } from '@mui/material'
import { HiOutlineBookOpen } from 'react-icons/hi'
import { useAppContext } from '@src/Context';


function Progress() {
  const { notImplemented } = useAppContext()
  // api call for list of courses
  return (
    <Page pageTitle="My Courses">
      <PageSection >
        {/* List of taken courses | Redirect Course list */}
        <Empty
          title="You have not enrolled in any courses (yet)"
          body="Start by enrolling in a course and learn to earn LTE tokens"
          icon={<HiOutlineBookOpen/>}
          button={
            <Button 
              onClick={notImplemented}
              variant="contained">Explore Courses</Button>
          }/>
      </PageSection>
    </Page>
  )
}

export default Progress