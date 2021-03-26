import { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import Gravatar from 'react-gravatar';

const User = ({ email, username, fullName }) =>
  !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    <Link
      className="grid grid-cols-4 gap-4 mb-6 items-center"
      to={`/profile/${username}`}
    >
      <div className="flex items-center justify-between col-span-1">
        <Gravatar className="rounded-full w-16 flex mr-3" email={email} />
      </div>
      <div className="col-span-3">
        <p className="font-bold text-sm">{username}</p>
        <p className="text-sm">{fullName}</p>
      </div>
    </Link>
  );

User.propTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string,
};

export default memo(User);

User.whyDidYouRender = true;
