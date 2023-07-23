import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: #212121;

  &.active {
    color: orangered;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
  }
  li {
    margin-right: 20px;
  }
`;

const Layout = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
