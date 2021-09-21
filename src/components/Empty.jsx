import { Container, Stack, Typography } from '@mui/material';
import React from 'react';

function Empty({icon, button, title, body}) {
  const style = {
    textAlign:"center"
  }
  return (
    <Container
      sx={{
        margin: "1em 0"
      }}
    >
      <Stack
        spacing={2}
      >
        <Typography 
          sx={style}
          variant="h2">{icon}</Typography>
        <Typography 
          sx={style}
          variant="h6">{title}</Typography>
        <Typography 
          sx={style}
          variant="body1">{body}</Typography>
        {button}
      </Stack>
    </Container>
  )
}

export default Empty