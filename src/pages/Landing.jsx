import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material'
import Logo from '@assets/images/FinLearn_Logo_Transparent.png'
import Page from '@components/Page'
import { SigninButton } from '@components/Auth'
import { GrUserExpert } from 'react-icons/gr'
import { FaCoins } from 'react-icons/fa'
import { CgTimer } from 'react-icons/cg'

const sellingPoints = [
  {
    text: "Learn from top industry experts",
    icon: <GrUserExpert size={"2em"}/>
  },
  {
    text: "15 minutes a day",
    icon: <CgTimer size={"2em"}/>
  },
  {
    text: "Earn LTE tokens",
    icon: <FaCoins size={"2em"}/>
  }
]

function Landing() {
  const gridSettings = {
    xs:12
  }
  const containerStyle={
    display: 'flex',
    justifyContent: 'center'
  }
  
  return (
    <Page>
      <Grid
      container
      columnSpacing={{ xs: 1, sm: 2 }}
      >
        <Grid
          {...gridSettings}
          item>
          <Container
            sx={containerStyle}
          >
            <Box
              sx={{
                maxWidth: '80%'
              }}
            >
              <img src={Logo} alt="Finlearn logo" width="100%"/>
            </Box>
          </Container>
        </Grid>
        <Grid
          {...gridSettings}
          item>
          <Grid
          container>
            {
              sellingPoints.map(
                item =>
                <Grid
                  xs={12}
                  md={4}
                  item
                  key={item.text}
                >
                  <Container
                    sx={containerStyle}
                  >
                    {item.icon}
                  </Container>
                  <Typography 
                    sx={{textAlign: 'center', marginTop: '1em'}}
                    variant="subtitle1">{item.text}</Typography>
                </Grid>
              )
            }
          </Grid>
        </Grid>
        <Container sx={{...containerStyle, marginTop: '5em'}}>
          <SigninButton />
        </Container>
      </Grid>
    </Page>
  )
}

export default Landing