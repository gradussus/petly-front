import React from 'react';
import {
  NoticesSearchInput,
  NoticesSearchInputBody,
  NoticesSearchImage,
} from './NoticesSearch.styled';

import { ReactComponent as SearchSvg } from './image/search.svg';

const NoticesSearch = () => {
  return (
    <NoticesSearchInputBody>
      <NoticesSearchInput placeholder="Search..." />
      <NoticesSearchImage>
        <SearchSvg />
      </NoticesSearchImage>
    </NoticesSearchInputBody>
  );
};

export default NoticesSearch;
