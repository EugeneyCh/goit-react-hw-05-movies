import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: #212121;

  &.active {
    color: orangered;
  }
`;

const Layout = () => {
  return (
    <>
      <header>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <li
            style={{
              marginRight: 20,
            }}
          >
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
