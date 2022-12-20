import { UserCard } from 'components/UserCard/UserCard';
import user from 'components/my-data/user.json';

export const App = () => {
  return (
    <UserCard
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};
