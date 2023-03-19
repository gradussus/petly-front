import React from 'react';

import ItemPets from './itemPets/itemPets';
import AddPet from '../../addPet/addPet';
import { UserPetsBody, UserPetsHead } from './userPets.styled';

const data = [
  {
    id: 1,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg',
    name: 'Jack',
    birth: '22.04.2018',
    breed: 'Persian cat',
    comments:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 2,
    image: 'http://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg',
    name: 'Jack',
    birth: '22.04.2018',
    breed: 'Persian cat',
    comments:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 3,
    image:
      'https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg',
    name: 'Jack',
    birth: '22.04.2018',
    breed: 'Persian cat',
    comments:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

const UserPets = () => {
  return (
    <UserPetsBody>
      <UserPetsHead>
        <div>My pets:</div>
        <AddPet />
      </UserPetsHead>
      <>
        {data.map(({ id, image, name, birth, breed, comments }) => (
          <ItemPets
            key={id}
            id={id}
            image={image}
            birth={birth}
            name={name}
            breed={breed}
            comments={comments}
          />
        ))}
      </>
    </UserPetsBody>
  );
};

export default UserPets;
