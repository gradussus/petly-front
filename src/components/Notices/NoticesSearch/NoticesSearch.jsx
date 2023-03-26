import React, { useState, useEffect } from 'react';
import {
  NoticesSearchInput,
  NoticesSearchInputBody,
  NoticesSearchImage,
} from './NoticesSearch.styled';

import { ReactComponent as SearchSvg } from './image/search.svg';
import { ReactComponent as RemoveBtn } from './image/removeSearch.svg';

import { useParams, useSearchParams } from 'react-router-dom';

const NoticesSearch = () => {
  const [input, setInput] = useState('');
  const [, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const { type } = useParams();

  const handleChange = input => {
    setSearchParams({
      query: input.toLocaleLowerCase().trim(),
    });
    handleSearch(input.toLocaleLowerCase());
  };

  useEffect(() => {
    setInput('');
    setSearch('');
  }, [type]);

  const handleSearch = text => {
    setSearch(text);
  };

  const handleKeyDown = event => {
    if (event.keyCode === 13) {
      handleChange(input);
    }
  };

  const handleClearSearch = () => {
    handleChange('');
    setInput('');
  };

  return (
    <NoticesSearchInputBody>
      <NoticesSearchInput
        placeholder="Search..."
        value={input}
        onChange={event => setInput(event.target.value)}
        onKeyDown={handleKeyDown}
        disabled={type === 'favorite' || type === 'own'}
      />
      <NoticesSearchImage>
        {search?.length > 0 ? (
          <RemoveBtn onClick={() => handleClearSearch()} />
        ) : (
          <SearchSvg onClick={() => handleChange(input)} />
        )}
      </NoticesSearchImage>
    </NoticesSearchInputBody>
  );
};

export default NoticesSearch;
