import styled from 'styled-components';

export const Container = styled.div`
  @media ${p => p.theme.media.mobile} {
    padding-top: 34px;
    padding-bottom: 100px;
  }
  @media ${p => p.theme.media.tablet} {
    padding-top: 70px;
    padding-bottom: 100px;
  }
  @media ${p => p.theme.media.desktop} {
    padding-top: 49px;
    padding-bottom: 200px;
  }
`;

export const Title = styled.h1`
  @media ${p => p.theme.media.mobile} {
    text-align: center;
    margin-bottom: 28px;
    font-size: 24px;
    line-height: 1.36;
  }
  @media ${p => p.theme.media.tablet} {
    text-align: center;
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 66px;
  }

  @media ${p => p.theme.media.desktop} {
    text-align: center;
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 66px;
  }
`;

export const SearchBox = styled.form`
  position: relative;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
  height: 40px;
`;

export const Button = styled.button`
  position: absolute;
  right: 15px;
  top: 30%;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const Input = styled.input`
  @media ${p => p.theme.media.mobile} {
    display: block;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    border: 1px white solid;
    border-radius: 20px;
    padding-left: 15px;
    width: 100%;
    height: 40px;
    background-color: #ffffff;
    ::placeholder {
      color: #535353;
    }
  }
  @media ${p => p.theme.media.fromTablet} {
    display: block;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    border: 1px white solid;
    border-radius: 20px;
    padding-left: 15px;
    width: 100%;
    height: 44px;
    background-color: #ffffff;
    ::placeholder {
      color: #535353;
  }

    @media ${p => p.theme.media.desktop} {
    display: block;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    border: 1px white solid;
    border-radius: 20px;
    padding-left: 15px;
    width: 100%;
    height: 44px;
    background-color: #ffffff;
    ::placeholder {
      color: #535353;
`;

export const Box = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 60px;

  @media ${p => p.theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${p => p.theme.media.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Card = styled.li``;

export const NotFound = styled.p`
  font-size: 18px;
  color: red;
  @media ${p => p.theme.media.tablet} {
    font-size: 30px;
  }
`;

export const NotFoundBox = styled.div`
  display: flex;
  justify-content: center;
`;
