import { UserCard } from 'components/UserCard/UserCard';
import { Statistics } from './Statistics/Statistics';

import user from 'components/my-data/user.json';
import data from 'components/my-data/data.json';

export const App = () => {
  return (
    <>
      <UserCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
    </>
  );
};
