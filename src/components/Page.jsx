import React from 'react'
import { Typography } from '@material-ui/core'

function Page({ children, pageTitle }) {
  return (
    <>
    <Typography variant="h4">{pageTitle}</Typography>
    {children}
    </>
  )
}

export default Page