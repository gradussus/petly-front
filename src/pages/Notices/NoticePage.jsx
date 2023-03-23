import React from 'react';
import {
  NoticeBody,
  NoticeTitle,
  NoticesSearchBody,
  NoticesHead,
  NoticesHeadBtn,
} from '../../components/Notices/Notices.styled';
import NoticesSearch from '../../components/Notices/NoticesSearch/NoticesSearch';
import NoticesButtons from '../../components/Notices/NoticesButtons/NoticesButtons';
import AddPet from '../../components/UserPage/addPet/addPet';
import { Outlet } from 'react-router-dom';

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
          <AddPet />
        </NoticesHeadBtn>
      </NoticesHead>
      <Outlet />
    </NoticeBody>
  );
};

export default NoticePage;
