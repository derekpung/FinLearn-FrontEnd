import React from 'react'
import { Typography } from '@mui/material'

function Page({ children, pageTitle }) {
  return (
    <>
    <Typography variant="h4">{pageTitle}</Typography>
    {children}
    </>
  )
}

export default Page