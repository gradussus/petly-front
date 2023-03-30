import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import {
  NoticeBody,
  NoticeTitle,
  NoticesSearchBody,
  NoticesHead,
  NoticesHeadBtn,
} from '../../components/Notices/Notices.styled';

import NoticesSearch from '../../components/Notices/NoticesSearch/NoticesSearch';
import NoticesButtons from '../../components/Notices/NoticesButtons/NoticesButtons';
import NoticesAddPet from '../../components/Notices/NoticesAddPet/NoticesAddPet';
import axios from 'axios';

const NoticePage = () => {
  const [userOwnPetData, setData] = useState({});

  axios.defaults.baseURL = 'https://petly-vxdt.onrender.com';

  const createNewPets = async (token, credentials, image) => {
    const response = await axios.post(
      '/notices/create',
      {
        image,
        ...credentials,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setData(response.data);
  };

  return (
    <NoticeBody>
      <NoticeTitle>Find your favorite pet</NoticeTitle>
      <NoticesSearchBody>
        <NoticesSearch />
      </NoticesSearchBody>
      <NoticesHead>
        <NoticesButtons />
        <NoticesHeadBtn>
          <NoticesAddPet createNewPets={createNewPets} />
        </NoticesHeadBtn>
      </NoticesHead>
      <Outlet context={userOwnPetData} />
    </NoticeBody>
  );
};

export default NoticePage;
