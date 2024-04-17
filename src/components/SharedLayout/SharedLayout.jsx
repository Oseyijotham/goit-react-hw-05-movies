import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Logo,
  Link,
  Icon,
  Frame,
  IconLabel,
  Symbol
} from './SharedLayout.styled';
import svg from './icons.svg';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Symbol to="/">
          <Logo>
            <Frame role="img" aria-label="computer icon">
              <Icon width="60px" height="40px">
                <use href={`${svg}#icon-tv`}></use>
              </Icon>
            </Frame>
            <IconLabel>Cinema House</IconLabel>
          </Logo>
        </Symbol>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
