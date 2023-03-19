import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Box, Title, SearchBox, Input, Button, NotFoundBox, NotFound } from "./newsPage.styled";
import getNews from "./getNews";



const News = () => {
  const [news, setNews] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? "";
  const [search, setSearch] = useState("");

  useEffect(() => {
    const newsPage = async () => {
      try {
        const newsArray = await getNews();
        const newsRes = newsArray.data.result;
        setNews(newsRes);
      } catch (error) {
        console.log(error.message);
      }
    };
    newsPage();
  }, []);

  const handleChange = e => {
    setSearchParams({ query: e.currentTarget.value.toLocalLowerCase().trim() });
    setSearch(e.currentTarget.value.toLocalLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: search });
  };

  const getFilteredNews = () => {
    if (news) {
      return news.filter(newsItem => newsItem.title.toLowerCase().includes(search) || newsItem.description.toLowerCase().includes(search));
    }
  };

  const filteredNews = getFilteredNews();

  return (
    <Container>
      <Title>News</Title>
      <SearchBox onSubmit={handleSubmit}>
        <Input type="text" name="query" value={search} placeholder="Search" autoFocus onChange={handleChange} />
        <Button type="submit">
          {/* <img src={searchIcon} alt="searchIcon" /> */}
        </Button>
      </SearchBox>
      <Box>
      </Box>
      {search !== "" && query && filteredNews.length === 0 && (
        <NotFoundBox>
          <NotFound>Nothing found.Please,try again.</NotFound>
        </NotFoundBox>
      )}
    </Container>
  );
};

export default News;
