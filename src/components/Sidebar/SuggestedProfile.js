import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Gravatar from 'react-gravatar';
import {
  updateFollowedUserFollowers,
  updateLoggedInUserFollowing,
} from '../../services/firebase';

export default function SuggestedProfile({
  profileDocId,
  emailAddress,
  username,
  profileId,
  userId,
  loggedInUserDocId,
}) {
  const [followed, setFollowed] = useState(false);

  async function handleFollowUser() {
    setFollowed(true);

    await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);
    await updateFollowedUserFollowers(profileDocId, userId, false);
  }

  return !followed ? (
    <div className="flex flex-row items-center justify-between">
      <div className="flex items-center justify-between">
        {emailAddress && emailAddress.toString().includes('gmail') === true ? (
          <Gravatar
            className="rounded-full w-8 flex mr-3"
            email={emailAddress}
          />
        ) : (
          <img
            className="rounded-full w-8 flex mr-3"
            src={`/images/avatars/${username}.jpg`}
            alt="Suggested Profile"
          />
        )}
        <Link to={`/profile/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
      </div>
      <div>
        <button
          onClick={handleFollowUser}
          type="button"
          className="text-xs font-bold text-blue-medium"
        >
          Follow
        </button>
      </div>
    </div>
  ) : null;
}

SuggestedProfile.propTypes = {
  profileDocId: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  loggedInUserDocId: PropTypes.string.isRequired,
};
