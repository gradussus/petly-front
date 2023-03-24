import React from 'react';
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

const NoticePage = () => {
  return (
    <NoticeBody>
      <NoticeTitle>Find your favorite pet</NoticeTitle>
      <NoticesSearchBody>
        <NoticesSearch />
      </NoticesSearchBody>
      <NoticesHead>
        <NoticesButtons />
        <NoticesHeadBtn>
          <NoticesAddPet />
        </NoticesHeadBtn>
      </NoticesHead>
      <Outlet />
    </NoticeBody>
  );
};

export default NoticePage;
