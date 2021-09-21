import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { IconButton, Container, Grid, Typography } from '@mui/material'
import { HiOutlineLogin } from 'react-icons/hi'
import Logo from '@assets/images/FinLearn_Logo_Transparent.png'
import Page from '@components/Page'


function Landing() {
  const { loginWithRedirect } = useAuth0();

  const gridSettings = {
    xs:12,
    sm:6,
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
          <Container>
          <img src={Logo}/>
          </Container>
        </Grid>
        <Grid
          {...gridSettings}
          item>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet enim nec diam elementum venenatis. Aenean fermentum fermentum commodo. Aliquam vitae tellus et erat dapibus pulvinar non a dui. Aliquam tristique in magna interdum lacinia. Sed justo ligula, ornare nec sapien et, sagittis fermentum libero. Maecenas leo tellus, vehicula in nulla pellentesque, placerat faucibus quam. Phasellus sed volutpat justo, sit amet suscipit leo. Nunc interdum, lorem vel ornare ullamcorper, neque lectus sagittis ipsum, sed consectetur mauris dolor vel mauris. Curabitur vel ex augue. Aliquam pulvinar nisi orci, a scelerisque mi malesuada quis. Suspendisse potenti. Aenean non lacus non leo viverra interdum ac ultricies lacus. Mauris ac tincidunt nisl.

            Maecenas nisi dui, consectetur at nunc et, fermentum sodales leo. Sed non fringilla orci. Vestibulum venenatis luctus sem, at accumsan nibh tristique ut. Nunc volutpat magna nec justo egestas pellentesque. Nunc vel fermentum ante. Morbi dui lorem, porttitor eu tellus sit amet, elementum faucibus neque. Maecenas leo purus, tincidunt sit amet tellus ut, gravida porttitor dolor. Aenean tempus nec elit vitae porta.

            Maecenas gravida est ultricies, interdum lectus a, gravida urna. Phasellus rhoncus bibendum gravida. Vestibulum molestie aliquet finibus. Curabitur vitae tortor finibus justo ullamcorper euismod. Phasellus hendrerit tincidunt justo, sit amet varius odio pharetra in. Suspendisse pellentesque nec erat quis ornare. Aliquam sed pellentesque urna, eget pretium velit. Morbi tincidunt lectus vel nunc iaculis, sed mollis libero consectetur. In magna ligula, rutrum id molestie in, tristique venenatis quam. Curabitur hendrerit libero sit amet odio pellentesque, ut egestas ligula ullamcorper. In congue massa velit, in blandit sem volutpat et.
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="login"
            onClick={() => loginWithRedirect()}
          >
            <div>Login/Signup</div>
            <HiOutlineLogin />
          </IconButton> 
        </Grid>
      </Grid>
    </Page>
  )
}
    // <div
    //   backgroundImage: `url("https://images.unsplash.com/photo-1529148482759-b35b25c5f217?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")`,
    //   width: "100vw",
    //   height: "100vh"
    // }}>

      // <IconButton
      //   edge="end"
      //   color="inherit"
      //   aria-label="login"
      //   onClick={() => loginWithRedirect()}
      // >
      //   <div>Login/Signup</div>
      //   <HiOutlineLogin />
      // </IconButton> 
    // </div>

export default Landing