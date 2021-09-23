import React from 'react'
import { Alert, AlertTitle, Snackbar, Stack, Typography } from '@mui/material'
import { useAppContext } from '../Context'

function Page({ children, pageTitle }) {
  return (
    <>
    <SnackAlert />
    <Typography variant="h4">{pageTitle}</Typography>
    {children}
    </>
  )
}

function SnackAlert() {
  const { pageAlerts, alertDispatch } = useAppContext()
  return (
    pageAlerts.map((pageAlert,idx) =>(
      <Snackbar
        key={idx}
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        open={pageAlert.status}
        autoHideDuration={2000}
        onClose={()=>alertDispatch({type:''})}
      >
        <Alert severity={pageAlert.alertType}>
          <AlertTitle
            sx={{ textTransform: "capitalize" }}
          >
            {pageAlert.alertType}
          </AlertTitle>
          {pageAlert.message}
        </Alert>
      </Snackbar>
    ))
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