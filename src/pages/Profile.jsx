import React,{useState,useEffect} from 'react';
import Page from '@components/Page'
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  // add auth0 details to user database if the user does not exist in the database
  useEffect(() => {
    if (user.sub) {
      axios.get(`http://localhost:3002/user/by-uid?uid=${user.sub}`).then((response)=>{
        if(response.data.length === 0)
        {
          console.log("user does not exist");
          axios.post("http://localhost:3002/user/add",
            {id: user.sub, name: user.nickname, email: user.email,
            signup: user.updated_at, verified: user.email_verified}).then((response)=>{
            console.log(response);})
        }
        else
        {
          console.log("user exists");
        }
      })
    }
  },[])

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    isAuthenticated && (
    <Page pageTitle="Profile">
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>Hi {user.nickname}</h2>
        <p>Email: {user.email}</p>
        <pre>
          <code>
            {JSON.stringify(user, null, 2)}
          </code>
        </pre>
      </div>
    </Page>
    )
  )
}

export default Profile