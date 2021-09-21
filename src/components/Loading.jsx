import { CircularProgress, Container, Skeleton } from '@mui/material'
import React from 'react'
import { PageSection } from '@components/Page'

function Loading() {
  return (
    <PageSection>
      <Container>
        <CircularProgress />
      </Container>
    </PageSection>
  )
}

export default Loading