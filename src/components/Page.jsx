import React from 'react'
import { Stack, Typography } from '@mui/material'

function Page({ children, pageTitle }) {
  return (
    <>
    <Typography variant="h4">{pageTitle}</Typography>
    {children}
    </>
  )
}

export function PageSection({ children, sectionTitle }) {
  return (
    <Stack
      sx={{
        margin: "1em 0"
      }}
    >
      <Typography variant="h5">{sectionTitle}</Typography>
      {children}
    </Stack>
  )
}

export default Page