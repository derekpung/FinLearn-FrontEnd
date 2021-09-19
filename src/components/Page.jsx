import React from 'react'
import { Typography } from '@mui/material'

function Page({ children, pageTitle, containertype }) {
  return (
    <>
    <div className={containertype}>
    <Typography variant="h4">{pageTitle}</Typography>
    </div>
  
    {children}
    </>
  )
}

export default Page