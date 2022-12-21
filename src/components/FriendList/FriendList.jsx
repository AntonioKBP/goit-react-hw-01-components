// import PropTypes from 'prop-types';

import {
  UnorderedList,
  ListItem,
  ItemSpan,
  ItemImage,
  ItemName,
} from './FriendList.styled';

export const FriendList = friends => {
  return (
    <UnorderedList>
      <ListItem>
        <ItemSpan></ItemSpan>
        <ItemImage />
        <ItemName>Test text</ItemName>
      </ListItem>
    </UnorderedList>
  );
};

// export const FriendList = friends => {
//   return (
//     <UnorderedList>
//       {friends.map(({ avatar, name, isOnline, id }) => (
//         <ListItem key={id}>
//           <ItemSpan>{isOnline}</ItemSpan>
//           <ItemImage src={avatar} alt={name} />
//           <ItemName>{name}</ItemName>
//         </ListItem>
//       ))}
//     </UnorderedList>
//   );
// };
