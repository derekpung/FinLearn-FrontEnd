import React from 'react'
import { Button, Grid } from '@mui/material';

function ButtonLine({ labels, behaviorGenerator }) {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3}}
    >
      {
        labels.map(
          label => (
            <Grid 
              key={label}
              item>
              <Button 
                variant="contained"
                onClick={behaviorGenerator(label)}
              >{label}</Button>
            </Grid>
          )
        )
      }
    </Grid> 
  )
}

export default ButtonLine;