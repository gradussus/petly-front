import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Container, Box, Card, Title, SearchBox, Input, Button, NotFoundBox, NotFound } from "./newsPage.styled";
import NewsCard from "../../components/NewsPage/NewsCard";
import searchIcon from "../../img/search.svg";
import { getNews } from "./getNews";
function News() {
  const [news, setNews] = useState([]);
  const [searchParams, setSeachParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const [search, setSearch] = useState("");

  useEffect(() => {
    const newsPage = async () => {
      try {
        const newsArray = await getNews();
        setNews(newsArray);
      } catch (error) {
        console.log(error.message);
      }
    };
    newsPage();
  }, []);

  const handleChange = e => {
    setSeachParams({ query: e.currentTarget.value.toLocaleLowerCase().trim() });
    setSearch(e.currentTarget.value.toLocaleLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSeachParams({ query: search });
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
      <ToastContainer />
      <SearchBox onSubmit={handleSubmit}>
        <Input type="text" name="query" value={search} placeholder="Search"  onChange={handleChange} />
        <Button type="submit">
          <img src={searchIcon} alt="searchIcon" />
        </Button>
      </SearchBox>
      <Box>
        {news.length > 0 &&
          filteredNews.map(newItem => (
            <Card key={newItem._id}>
              <NewsCard newItem={newItem} />
            </Card>
          ))}
      </Box>
      {search !== "" && query && filteredNews.length === 0 && (
        <NotFoundBox>
          <NotFound>Nothing found. Please, try again.</NotFound>
        </NotFoundBox>
      )}
    </Container>
  );
}

export default News;