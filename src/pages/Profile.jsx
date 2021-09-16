import React from 'react';
import Page from '@components/Page';



function Profile() {
  let tokens = 8.26; 
  // define function for the tokens above
  return (
    <Page pageTitle="Profile">
      <h3>James Smith</h3>
      <div className="sideby">
        
      <i class='fas fa-coins' style={{ fontSize: "50px", color:'grey' }} ></i>
      <h3> LTE Tokens:{tokens}</h3>
      {/* style={{ fontSize: "80px", color:'grey' }} */}
      </div>
      
    </Page>
  )
}

export default Profile