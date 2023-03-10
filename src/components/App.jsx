import { UserCard } from 'components/UserCard/UserCard';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from 'components/my-data/user.json';
import data from 'components/my-data/data.json';
import friends from 'components/my-data/friends.json';
import transactions from 'components/my-data/transactions.json';

import Box from 'components/Box/Box';

export const App = () => {
  return (
    <Box bg="#f9f6f6">
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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Box>
  );
};
