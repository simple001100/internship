import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Avatar, Container, Typography } from "@mui/material";
import { CART_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { logOut } from "../redux/store/client/loginReducer";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const Header = (props) => {
  const isAuth = useSelector((state) => state.loginReducer.isAuth);
  const userInfo = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const history = useHistory();

  const logout = () => {
    dispatch(logOut());
  }

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "83px",
      }}
      disableGutters={true}
    >
      <Typography
        onClick={() => history.push("/")}
        sx={{ cursor: "pointer", fontSize: "23px" }}
      >
        DigitalMarket
      </Typography>
      <ul
        style={{
          width: isAuth ? "260" : "",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          listStyle: "none",
        }}
      >
        {isAuth ? (
          <>
            <li>
              <NavLink
                style={{
                  width: "80px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  textDecoration: "none",
                }}
                to={CART_ROUTE}
              >
                <ShoppingCartOutlinedIcon
                  sx={{ height: "20px", width: "22px" }}
                />
                <span style={{ fontWeight: "bold", fontSize: 12 }}>CART</span>
              </NavLink>
            </li>
            <li>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <Avatar
                  alt="userAvatar"
                  src={userInfo.avatar}
                  sx={{ height: "32px", width: "32px", borderRadius: "50px" }}
                />
                <span style={{ fontWeight: "bold", fontSize: 16 }}>
                  {`${userInfo.firstName} ${userInfo.lastName}`}
                </span>
                <LogoutOutlinedIcon onClick={logout} sx={{ height: "20px", width: "22px", marginLeft: "10px", cursor: "pointer", color: "#DC143C" }} />
              </div>
            </li>
          </>
        ) : (
          <>
            <li
              style={{
                width: "82px",
                border: ".5px solid #282D36",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
                padding: "10px 20px 10px 20px",
              }}
            >
              <NavLink
                style={{
                  fontSize: 12,
                  color: "#989898",
                  textDecoration: "none",
                }}
                to={LOGIN_ROUTE}
              >
                Log in
              </NavLink>
            </li>
            <li
              style={{
                width: "82px",
                border: ".5px solid #282D36",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
                padding: "10px 20px 10px 20px",
              }}
            >
              <NavLink
                style={{
                  fontSize: 12,
                  color: "#989898",
                  textDecoration: "none",
                }}
                to={REGISTRATION_ROUTE}
              >
                Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </Container>
  );
};
