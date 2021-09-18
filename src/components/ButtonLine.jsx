import React from 'react'
import Button from '@mui/material/Button';
import '@styles/Profile.css'

function ButtonLine({ button1, button2, button3, message }) {
  console.log(message + button3);
  return (
    <>
    <div className="sideby">
    <Button variant="contained">{button1}</Button>
    &nbsp; &nbsp; &nbsp; 
    <Button variant="contained">{button2}</Button>
    &nbsp; &nbsp; &nbsp;
    <Button variant="contained">{button3}</Button>

    </div>
    <br />
    
    </>
  )
}

export default ButtonLine;