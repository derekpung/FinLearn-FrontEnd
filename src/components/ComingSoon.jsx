import React from 'react';
import { PageSection } from '@components/Page'
import ComingSoonImg from '@assets/images/FinLearn_Logo_ComingSoon.png'
import { Container } from '@mui/material';
import { Box } from '@mui/system';

function ComingSoon() {

  return (
    <PageSection>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: '80%'
          }}
        >
          <img src={ComingSoonImg} alt="Coming Soon" width="100%"/>
        </Box>
      </Container>
    </PageSection>
  )
}

export default ComingSoon