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

export const UserCard = ({ username, tag, location, avatar, stats }) => {
  return (
    <Profile>
      <Description>
        <ProfileImg src={avatar} alt="User avatar" class="avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </Description>

      <StatsList>
        <StatsItem>
          <StatsItemLabel>Followers</StatsItemLabel>
          <StatsItemQty>{stats.followers}</StatsItemQty>
        </StatsItem>
        <StatsItem>
          <StatsItemLabel>Views</StatsItemLabel>
          <StatsItemQty>{stats.views}</StatsItemQty>
        </StatsItem>
        <StatsItem>
          <StatsItemLabel>Likes</StatsItemLabel>
          <StatsItemQty>{stats.likes}</StatsItemQty>
        </StatsItem>
      </StatsList>
    </Profile>
  );
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
