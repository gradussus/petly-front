import { WorkTime } from '../WorkDays/WorkTime';

import {
  FriendsItem,
  FriendsTitle,
  FriendsLinkToAddress,
  FriendsLinkToContacts,
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
              <FriendsLinkToAddress href={url} target="_blank" rel="noreferrer">
                {title}
              </FriendsLinkToAddress>
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
                <FriendsPar>
                  Time:
                  <br />
                  <WorkTime workDays={workDays} />
                </FriendsPar>

                <FriendsPar>
                  Address:
                  <br />
                  <a href={addressUrl} target="_blank" rel="noreferrer">
                    {address ? (
                      <FriendsAddress>{address}</FriendsAddress>
                    ) : (
                      <hr />
                    )}
                  </a>
                </FriendsPar>
                <FriendsPar type="email">
                  Email:
                  <br />
                  {email ? (
                    <FriendsLinkToContacts href={`mailto:${address}`}>
                      {email}
                    </FriendsLinkToContacts>
                  ) : (
                    <hr />
                  )}
                </FriendsPar>
                <FriendsPar type="phone">
                  Phone:
                  <br />
                  {phone ? (
                    <FriendsLinkToContacts href={`tel:${phone}`}>
                      {phone}
                    </FriendsLinkToContacts>
                  ) : (
                    <hr />
                  )}
                </FriendsPar>
              </div>
            </FriendsWrapper>
          </FriendsItem>
        )
      )}
    </>
  );
};
