import React from "react";
import { useLocation } from "react-router-dom";
import { Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import LoginForm from "../components/LoginForm";
import RegistrForm from "../components/RegistrForm";
import { MainContainer } from "../components/MainContainer";
import { Wrapper } from "../components/Wrapper";
import { Headline } from "../components/Headline";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const Authentication = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Wrapper>
      <Header />
      <MainContainer sx={{ height: "973px" }}>
        <Headline align="center" paddingBottom="35px">
          {isLogin ? "LOG IN" : "REGISTER"}
        </Headline>
        <Container
          sx={{
            width: isLogin ? "359px" : "557px",
            height: isLogin ? "455px" : "533px",
            paddingTop: isLogin ? "112px" : "33px",
            paddingBottom: "92px",
            backgroundColor: "#131720",
          }}
          disableGutters={true}
        >
          {isLogin ? <LoginForm /> : <RegistrForm />}

          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: 12,
                letterSpacing: ".5px",
                color: "#989898",
                paddingBottom: "18px",
              }}
            >
              {isLogin
                ? "Don't have an account yet?"
                : "Already have an account?"}
            </span>
            <NavLink
              style={{
                fontSize: 12,
                color: "white",
                textDecoration: "none",
              }}
              to={isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE}
            >
              {isLogin ? "Register" : "Sign in"}
            </NavLink>
          </Container>
        </Container>
      </MainContainer>
      <Footer />
    </Wrapper>
  );
};

export default Authentication;
