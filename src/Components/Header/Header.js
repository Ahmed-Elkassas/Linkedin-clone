import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="search" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavContainer>
            <NavList>
              <a href="/">
                <img src="/images/nav-home.svg" alt="home" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a href="/">
                <img src="/images/nav-network.svg" alt="home" />
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a href="/">
                <img src="/images/nav-jobs.svg" alt="home" />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a href="/">
                <img src="/images/nav-messaging.svg" alt="home" />
                <span>messaging</span>
              </a>
            </NavList>
            <NavList>
              <a href="/">
                <img src="/images/nav-home.svg" alt="home" />
                <span>Notifications</span>
              </a>
            </NavList>
          </NavContainer>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
  /* padding: 5px 0; */
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;

const Search = styled.div`
  opacity: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
      &:focus-visible {
        outline: none;
      }
    }
  }
`;
const SearchIcon = styled.div`
  position: absolute;
  top: 10px;
  left: 2px;
  z-index: 1;
  width: 40px;
  pointer-events: none;
  margin: 0;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: white;
    width: 100%;
  }
`;
const NavContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
`;
const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 12px;
    min-height: 52px;
    min-width: 88px;
    position: relative;
  }
  span {
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
  }
  @media (max-width: 768px) {
    min-width: 70px;
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

export default Header;
