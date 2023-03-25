import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 60px;
  @media (${p => p.theme.media.mobile}) {
    padding-bottom: 100px;
  }
  @media (${p => p.theme.media.tablet}) {
    padding-bottom: 100px;
  }
  @media (${p => p.theme.media.desktop}) {
    padding-bottom: 200px;
  }
`;

export const Title = styled.h1`
  @media (${p => p.theme.media.mobile}) {
    text-align: center;
    margin-bottom: 28px;
    font-size: 24px;
    line-height: 1.36;
  }
  @media (${p => p.theme.media.tablet}) {
    text-align: center;
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 66px;
  }

  @media (${p => p.theme.media.desktop}) {
    text-align: center;
    margin-bottom: 50px;
    font-size: 48px;
    line-height: 66px;
  }
`;

export const SearchBox = styled.form`
  position: relative;
  margin-bottom: 60px;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
  height: 40px;
`;

export const Button = styled.button`
  position: absolute;
  right: 15px;
  top: 10px;
  border: none;
  background: transparent;
  cursor: pointer;

  img {
    padding-top: 3px;
  }
`;

export const Input = styled.input`
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 40px;
  padding: 8px 20px;
  height: 44px;
  width: 100%;
  margin: 0 auto;
  background: #fff;
  border: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
`;

export const Box = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 60px;
  margin-top: 60px;

  @media (${p => p.theme.media.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (${p => p.theme.media.mobile}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Card = styled.li``;

export const NotFound = styled.p`
  font-size: 18px;
  @media (${p => p.theme.media.tablet}) {
    font-size: 30px;
  }
`;

export const NotFoundBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoaderBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px;
`;
