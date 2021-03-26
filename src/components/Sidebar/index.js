import React from 'react';
import useUser from '../../hooks/use-user';
import User from './User';
import Suggestions from './Suggestions';

export default function Sidebar() {
  const {
    user: { docId, following, emailAddress, fullName, username, userId },
  } = useUser();

  return (
    <div className="p-4">
      <User email={emailAddress} username={username} fullName={fullName} />
      <Suggestions
        loggedInUserDocId={docId}
        userId={userId}
        following={following}
      />
    </div>
  );
}
