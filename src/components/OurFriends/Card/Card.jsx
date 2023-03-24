import {
  FriendsItem,
  FriendsTitle,
  FriendsLink,
  FriendsPar,
  FriendsWrapper,
  FriendsLogoWrapper,
  FriendsImg,
  FriendsAddress,
} from './Card.styled';

export const Card = ({ friends }) => {
  return (
    <>
      {friends.map(
        ({
          _id,
          title,
          url,
          addressUrl,
          address,
          imageUrl,
          workDays,
          phone,
          email,
        }) => (
          <FriendsItem key={_id}>
            <FriendsTitle>
              <FriendsLink href={url}>{title}</FriendsLink>
            </FriendsTitle>
            <FriendsWrapper>
              <FriendsLogoWrapper>
                <FriendsImg
                  src={
                    imageUrl
                      ? imageUrl
                      : 'https://animals-city.org/wp-content/themes/animals-city/img/logo.svg'
                  }
                  alt={title}
                  
                />
              </FriendsLogoWrapper>
              <div>
                <FriendsPar>Time:</FriendsPar>
                <FriendsPar>
                  Address:<br />
                  <a href={addressUrl} target="_blank" rel="noreferrer">
                    {address ? (
                      <FriendsAddress>{address}</FriendsAddress>
                    ) : (
                      <hr />
                    )}
                  </a>
                </FriendsPar>
                <FriendsPar type="email">
                  Email:<br />
                  {email ? <span>{email}</span> : <hr />}
                </FriendsPar>
                <FriendsPar type="phone">
                  Phone:<br />
                  {phone ? <span>{phone}</span> : <hr />}
                </FriendsPar>
              </div>
            </FriendsWrapper>
          </FriendsItem>
        )
      )}
    </>
  );
};
