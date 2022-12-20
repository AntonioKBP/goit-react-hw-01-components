import PropTypes from 'prop-types';

import {
  Profile,
  Description,
  ProfileImg,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  StatsList,
  StatsItem,
  StatsItemLabel,
  StatsItemQty,
} from 'components/UserCard/UserCard.styled';

export const UserCard = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <Profile>
      <Description>
        <ProfileImg src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </Description>

      <StatsList>
        <StatsItem>
          <StatsItemLabel>Followers</StatsItemLabel>
          <StatsItemQty>{followers}</StatsItemQty>
        </StatsItem>
        <StatsItem>
          <StatsItemLabel>Views</StatsItemLabel>
          <StatsItemQty>{views}</StatsItemQty>
        </StatsItem>
        <StatsItem>
          <StatsItemLabel>Likes</StatsItemLabel>
          <StatsItemQty>{likes}</StatsItemQty>
        </StatsItem>
      </StatsList>
    </Profile>
  );
};

UserCard.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

// {
//   "username": "Jacques Gluke",
//   "tag": "jgluke",
//   "location": "Ocho Rios, Jamaica",
//   "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//   "stats": {
//     "followers": 5603,
//     "views": 4827,
//     "likes": 1308
//   }
// }
