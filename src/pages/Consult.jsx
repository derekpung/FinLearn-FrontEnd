import React from 'react';
import Page, { PageSection } from '@components/Page'
import Empty from '@components/Empty'
import { Button } from '@mui/material'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import { useAppContext } from '@src/Context';


function Consult() {
  const { notImplemented } = useAppContext()

  return (
    <Page pageTitle="Consultations">
      <PageSection >
        {/* List of Consultations | Redirect Consultants */}
        <Empty
          title="You do not have any consultations (yet)"
          body="Consult with top experts around the world with LTE tokens"
          icon={<HiOutlineChatAlt2/>}
          button={
            <Button 
              onClick={notImplemented}
              variant="contained">Explore Consultants</Button>
          }/>
      </PageSection>
    </Page>
  )
}

export default Consult