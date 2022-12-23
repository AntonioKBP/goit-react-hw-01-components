import PropTypes from 'prop-types';

import { FcApproval, FcHighPriority } from 'react-icons/fc';

import {
  UnorderedList,
  ListItem,
  ItemSpan,
  ItemImage,
  ItemName,
} from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <UnorderedList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <ListItem key={id}>
          <ItemSpan>
            {isOnline ? (
              <span>
                <FcApproval />
                Online
              </span>
            ) : (
              <span>
                <FcHighPriority />
                Offline
              </span>
            )}
          </ItemSpan>
          <ItemImage src={avatar} alt={name} />
          <ItemName>{name}</ItemName>
        </ListItem>
      ))}
    </UnorderedList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

// {
//     "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998749.png",
//     "name": "Poly",
//     "isOnline": false,
//     "id": 1284
//   }

// Statistics.propTypes = {
//   title: PropTypes.string.isRequired,
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     })
//   ),
// };
