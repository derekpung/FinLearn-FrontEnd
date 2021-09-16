import React from 'react';
import Page from '@components/Page'
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
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