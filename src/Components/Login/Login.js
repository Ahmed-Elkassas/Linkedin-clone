import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="logo" />
        </a>
        <div>
          <Join>Join now</Join>
          <Singin>Sing in</Singin>
        </div>
      </Nav>
      <Section>
        <HeadLine>
          <h1>Welcome to your professional community</h1>
        </HeadLine>
        <Hero
          src="/images/login-hero.svg"
          alt="Welcome to your professional community"
        />
        <Form>
          <Google>
            <img src="/images/google-logo.svg" alt="" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  & > a {
    width: 135px;
    height: 35px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 8px 10px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const Singin = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  padding: 10px 24px;
  cursor: pointer;
  transition-duration: 0.4s;
  will-change: border;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
    border: 1px solid #0a66c2;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  justify-content: space-between;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const HeadLine = styled.div`
  width: 55%;
  padding-right: 42px;
  flex-shrink: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
  h1 {
    padding-bottom: 0;
    font-size: 56px;
    color: #8f5849;
    font-weight: 200;
    line-height: 70px;
    z-index: 2;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 32px;
      width: 100%;
      line-height: 35px;
    }
  }
`;

const Hero = styled.img`
  width: 700px;
  height: 570px;
  position: relative;
  flex-shrink: 1;
  display: block;
  position: absolute;
  bottom: 192px;
  right: -232px;
  z-index: 1;
  @media (max-width: 768px) {
    top: 200px;
    bottom: 0;
    width: initial;
    position: initial;
    right: 0;
  }
`;

const Form = styled.div`
  display: block;
  width: 100%;
  margin-top: 45px;
`;

const Google = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 408px;
  border-radius: 40px;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  vertical-align: middle;
  transition-duration: 167ms;
  background-color: #fff;
  vertical-align: middle;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
    justify-content: center;
  }
`;

export default Login;
