import React from 'react'
import { Typography } from '@material-ui/core'

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