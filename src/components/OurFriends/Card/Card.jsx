import {
  FriendsItem,
  FriendsTitle,
  FriendsLink,
  FriendsPar,
  FriendsWrapper,
  FriendsLogo,
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
              <FriendsLogo>
                <img
                  src={
                    imageUrl
                      ? imageUrl
                      : 'https://animals-city.org/wp-content/themes/animals-city/img/logo.svg'
                  }
                  alt={title}
                  width="110px"
                />
              </FriendsLogo>
              <div>
                <FriendsPar>Time:</FriendsPar>
                <FriendsPar>
                  {' '}
                  Address:
                  <a href={addressUrl} target="_blank" rel="noreferrer">
                    {address ? <span>{address}</span> : <hr />}
                  </a>
                </FriendsPar>
                <FriendsPar type="email">
                  Email:
                  {email ? <span>{email}</span> : <hr />}
                </FriendsPar>
                <FriendsPar type="phone">
                  Phone:
                  {phone}
                </FriendsPar>
              </div>
            </FriendsWrapper>
          </FriendsItem>
        )
      )}
    </>
  );
}