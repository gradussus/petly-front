import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import {
  Container,
  Box,
  Card,
  Title,
  SearchBox,
  Input,
  Button,
  NotFoundBox,
  NotFound,
  LoaderBox,
} from './newsPage.styled';
import NewsCard from '../../components/NewsPage/NewsCard';
import searchIcon from './img/search.svg';
import { getNews } from 'utils/api/getNews';
import Loader from '../../components/loader/loader';

import { ReactComponent as RemoveBtn } from './img/removeSearch.svg';

function News() {
  const [news, setNews] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [input, setInput] = useState('');
  const [status, setStatus] = useState('pending');
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    (async () => {
      try {
        setStatus('pending');
        const newsArray = await getNews();
        setStatus('fulfilled');
        setNews(newsArray);
      } catch (error) {
        setStatus('rejected');
      }
    })();
  }, []);

  useEffect(() => {
    if (status === 'rejected') {
      toast.error(
        'Sorry, we were unable to receive the news, please try again or reload the page.',
        {
          theme: 'colored',
        }
      );
    }
  }, [status]);

  const handleChange = e => {
    setSearchParams({
      query: e.toLocaleLowerCase().trim(),
    });
    setSearch(e.toLocaleLowerCase());
  };

  const handleKeyDown = event => {
    if (event.keyCode === 13) {
      handleChange(input);
    }
  };

  const removeSearch = () => {
    setSearch('');
    setInput('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: search });
  };

  const getFilteredNews = () => {
    if (news) {
      return news.filter(
        newsItem =>
          newsItem.title.toLowerCase().includes(search) ||
          newsItem.description.toLowerCase().includes(search)
      );
    }
  };

  const filteredNews = getFilteredNews();

  return (
    <Container>
      <Title>News</Title>
      <ToastContainer />
      <SearchBox onSubmit={handleSubmit}>
        <Input
          type="text"
          name="query"
          value={input}
          placeholder="Search..."
          onChange={event => setInput(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        {search?.length > 0 ? (
          <Button type="button" onClick={() => removeSearch()}>
            <RemoveBtn />
          </Button>
        ) : (
          <Button type="button" onClick={() => handleChange(input)}>
            <img src={searchIcon} alt="searchIcon" />
          </Button>
        )}
      </SearchBox>
      {status === 'pending' && (
        <LoaderBox>
          <Loader />
        </LoaderBox>
      )}
      <Box>
        {news?.length > 0 &&
          filteredNews.map(newItem => (
            <Card key={newItem._id}>
              <NewsCard newItem={newItem} />
            </Card>
          ))}
      </Box>
      {search !== '' && query && filteredNews.length === 0 && (
        <NotFoundBox>
          <NotFound>No results were found for this query.</NotFound>
        </NotFoundBox>
      )}
    </Container>
  );
}

export default News;
